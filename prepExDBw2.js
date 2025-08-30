import { Client } from "pg";
import { recipes, recipeSteps, recipeIngredients } from "./data.js";

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
    CREATE TABLE IF NOT EXISTS recipe_categories (
    recipe_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE,
    CONSTRAINT PK_recipe_category PRIMARY KEY (recipe_id, category_id)
)`;

  const CREATE_RECIPE_STEPS = `
    CREATE TABLE IF NOT EXISTS recipe_steps (
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
    CREATE TABLE IF NOT EXISTS recipe_steps_ingredients (
    recipe_id INT NOT NULL,
    step_number INT NOT NULL,
    ingredient_id INT NOT NULL,
    CONSTRAINT PK_recipe_steps_ingredients PRIMARY KEY (recipe_id, step_number, ingredient_id),
    CONSTRAINT FK_recipe_step FOREIGN KEY (recipe_id, step_number) REFERENCES recipe_steps(recipe_id, step_number) ON DELETE CASCADE,
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
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

seedDatabase(client);
