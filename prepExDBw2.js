import { Client } from "pg";
import {
  recipes,
  categories,
  recipeCategories,
  recipeSteps,
  ingredients,
  recipeStepIngredients,
} from "./data.js";

// Database connection configuration
const config = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "prepExDBw2",
  port: 5432,
};

const client = new Client(config);

async function seedDatabase(client) {
  const CREATE_RECIPES_TABLE = `
    CREATE TABLE IF NOT EXISTS recipes (
    recipe_id SERIAL PRIMARY KEY,
    recipe_name VARCHAR(100) NOT NULL
)`;

  const CREATE_CATEGORIES_TABLE = `
    CREATE TABLE IF NOT EXISTS categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
)`;

  const CREATE_RECIPE_CATEGORIES_TABLE = `
    CREATE TABLE IF NOT EXISTS recipeCategories (
    recipe_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE,
    CONSTRAINT PK_recipe_category PRIMARY KEY (recipe_id, category_id)
)`;

  const CREATE_RECIPE_STEPS = `
    CREATE TABLE IF NOT EXISTS recipeSteps (
    recipe_id INT NOT NULL,
    step_number INT NOT NULL,
    step_content TEXT NOT NULL,
    CONSTRAINT PK_recipe_steps PRIMARY KEY (recipe_id, step_number),
    CONSTRAINT FK_recipe_id FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE
)`;

  const CREATE_INGREDIENTS_TABLE = `
    CREATE TABLE IF NOT EXISTS ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    ingredient_name VARCHAR(100) UNIQUE NOT NULL
)`;

  const CREATE_RECIPE_STEP_INGREDIENTS_TABLE = `
    CREATE TABLE IF NOT EXISTS recipeStepsIngredients (
    recipe_id INT NOT NULL,
    step_number INT NOT NULL,
    ingredient_id INT NOT NULL,
    CONSTRAINT PK_recipe_steps_ingredients PRIMARY KEY (recipe_id, step_number, ingredient_id),
    CONSTRAINT FK_recipe_step FOREIGN KEY (recipe_id, step_number) REFERENCES recipeSteps(recipe_id, step_number) ON DELETE CASCADE,
    CONSTRAINT FK_ingredient_id FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id) ON DELETE CASCADE
)`;

  try {
    await client.connect();
    console.log("Connected to PostgreSQL database!");

    // Create tables
    await client.query(CREATE_RECIPES_TABLE);
    await client.query(CREATE_CATEGORIES_TABLE);
    await client.query(CREATE_RECIPE_CATEGORIES_TABLE);
    await client.query(CREATE_RECIPE_STEPS);
    await client.query(CREATE_INGREDIENTS_TABLE);
    await client.query(CREATE_RECIPE_STEP_INGREDIENTS_TABLE);

    // Populate recipes
    for (const recipe of recipes) {
      const insertRecipeQuery = {
        text: "INSERT INTO recipes(recipe_id, recipe_name) VALUES($1, $2) ON CONFLICT (recipe_id) DO NOTHING",
        values: [recipe.recipe_id, recipe.recipe_name],
      };
      await client.query(insertRecipeQuery);
    }

    // Populate categories
    for (const category of categories) {
      const insertCategoryQuery = {
        text: "INSERT INTO categories(category_id, category_name) VALUES($1, $2) ON CONFLICT (category_id) DO NOTHING",
        values: [category.category_id, category.category_name],
      };
      await client.query(insertCategoryQuery);
    }

    // Populate recipeCategories
    for (const recipeCategory of recipeCategories) {
      const insertRecipeCategoryQuery = {
        text: "INSERT INTO recipeCategories(recipe_id, category_id) VALUES($1, $2) ON CONFLICT (recipe_id, category_id) DO NOTHING",
        values: [recipeCategory.recipe_id, recipeCategory.category_id],
      };
      await client.query(insertRecipeCategoryQuery);
    }

    // Populate recipeSteps
    for (const recipeStep of recipeSteps) {
      const insertRecipeStepQuery = {
        text: "INSERT INTO recipeSteps(recipe_id, step_number, step_content) VALUES($1, $2, $3) ON CONFLICT (recipe_id, step_number) DO NOTHING",
        values: [
          recipeStep.recipe_id,
          recipeStep.step_number,
          recipeStep.step_content,
        ],
      };
      await client.query(insertRecipeStepQuery);
    }

    // Populate ingredients
    for (const ingredient of ingredients) {
      const insertIngredientQuery = {
        text: "INSERT INTO ingredients(ingredient_id, ingredient_name) VALUES($1, $2) ON CONFLICT (ingredient_id) DO NOTHING",
        values: [ingredient.ingredient_id, ingredient.ingredient_name],
      };
      await client.query(insertIngredientQuery);
    }

    // Populate recipeStepsIngredients
    for (const recipeStepsIngredient of recipeStepIngredients) {
      const insertRecipeStepsIngredientQuery = {
        text: "INSERT INTO recipeStepsIngredients(recipe_id, step_number, ingredient_id) VALUES($1, $2, $3) ON CONFLICT (recipe_id, step_number, ingredient_id) DO NOTHING",
        values: [
          recipeStepsIngredient.recipe_id,
          recipeStepsIngredient.step_number,
          recipeStepsIngredient.ingredient_id,
        ],
      };
      await client.query(insertRecipeStepsIngredientQuery);
    }

    // Create a view for all the vegetarian recipes with potatoes
    const CREATE_POTATO_VEGETARIAN_VIEW = `
      CREATE OR REPLACE VIEW potatoVegetairanRecipes AS
      SELECT 
        r.recipe_name,
        rs.step_content
      FROM 
        recipes r
        JOIN recipeSteps rs ON r.recipe_id = rs.recipe_id
        JOIN recipeStepsIngredients rsi ON rs.recipe_id = rsi.recipe_id 
          AND rs.step_number = rsi.step_number
        JOIN ingredients i ON rsi.ingredient_id = i.ingredient_id
      WHERE 
        LOWER(i.ingredient_name) LIKE 'potato';
    `;

    await client.query(CREATE_POTATO_VEGETARIAN_VIEW);
    // Query the view to verify it works
    const result = await client.query("SELECT * FROM potatoVegetairanRecipes");
    if (result.rows.length !== 0) {
      console.log(
        "Vegetarian recipes with potatoes:",
        JSON.stringify(result.rows, null, 2)
      );
    } else {
      console.log("There is no vegetarian recipes with potatos in our DB");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

seedDatabase(client);
