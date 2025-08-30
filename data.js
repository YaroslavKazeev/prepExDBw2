export const recipes = [
  {
    recipe_id: 1,
    recipe_name: "No-Bake Cheesecake"
  },
  {
    recipe_id: 2,
    recipe_name: "Roasted Brussels Sprouts"
  },
  {
    recipe_id: 3,
    recipe_name: "Mac & Cheese"
  },
  {
    recipe_id: 4,
    recipe_name: "Tamagoyaki Japanese Omelette"
  },
];

export const categories = [
  { category_id: 1, category_name: "Cake" },
  { category_id: 2, category_name: "No-Bake" },
  { category_id: 3, category_name: "Vegetarian" },
  { category_id: 4, category_name: "Vegan" },
  { category_id: 5, category_name: "Gluten-Free" },
  { category_id: 6, category_name: "Japanese" },
];

export const recipeCategory = [
  // No-Bake Cheesecake categories (recipe_id: 1)
  { recipe_id: 1, category_id: 1 }, // Cake
  { recipe_id: 1, category_id: 2 }, // No-Bake
  { recipe_id: 1, category_id: 3 }, // Vegetarian
  
  // Roasted Brussels Sprouts categories (recipe_id: 2)
  { recipe_id: 2, category_id: 4 }, // Vegan
  { recipe_id: 2, category_id: 5 }, // Gluten-Free
  
  // Mac & Cheese categories (recipe_id: 3)
  { recipe_id: 3, category_id: 3 }, // Vegetarian
  
  // Tamagoyaki Japanese Omelette categories (recipe_id: 4)
  { recipe_id: 4, category_id: 3 }, // Vegetarian
  { recipe_id: 4, category_id: 6 }  // Japanese
];

export const recipeSteps = [
  // No-Bake Cheesecake steps (recipe_id: 1)
  {
    step_number: 1,
    recipe_id: 1,
    step_content: "Beat Cream Cheese",
  },
  {
    step_number: 2,
    recipe_id: 1,
    step_content: "Add condensed Milk and blend",
  },
  {
    step_number: 3,
    recipe_id: 1,
    step_content: "Add Lemon Juice and blend",
  },
  {
    step_number: 4,
    recipe_id: 1,
    step_content: "Add the mix to the pie crust",
  },
  {
    step_number: 5,
    recipe_id: 1,
    step_content: "Spread the Cherry Jam",
  },
  {
    step_number: 6,
    recipe_id: 1,
    step_content: "Place in refrigerator for 3h",
  },

  // Roasted Brussels Sprouts steps (recipe_id: 2)
  {
    step_number: 1,
    recipe_id: 2,
    step_content: "Preheat the oven",
  },
  {
    step_number: 2,
    recipe_id: 2,
    step_content: "Mix the ingredients in a bowl",
  },
  {
    step_number: 3,
    recipe_id: 2,
    step_content: "Spread the mix on baking sheet",
  },
  {
    step_number: 4,
    recipe_id: 2,
    step_content: "Bake for 30'",
  },

  // Mac & Cheese steps (recipe_id: 3)
  {
    step_number: 1,
    recipe_id: 3,
    step_content: "Cook Macaroni for 8'",
  },
  {
    step_number: 2,
    recipe_id: 3,
    step_content: "Melt butter in a saucepan",
  },
  {
    step_number: 3,
    recipe_id: 3,
    step_content: "Add flour, salt, pepper and mix",
  },
  {
    step_number: 4,
    recipe_id: 3,
    step_content: "Add Milk and mix",
  },
  {
    step_number: 5,
    recipe_id: 3,
    step_content: "Cook until mix is smooth",
  },
  {
    step_number: 6,
    recipe_id: 3,
    step_content: "Add cheddar cheese",
  },
  {
    step_number: 7,
    recipe_id: 3,
    step_content: "Add the macaroni",
  },

  // Tamagoyaki Japanese Omelette steps (recipe_id: 4)
  {
    step_number: 1,
    recipe_id: 4,
    step_content: "Beat the eggs",
  },
  {
    step_number: 2,
    recipe_id: 4,
    step_content: "Add soya sauce, sugar and salt",
  },
  {
    step_number: 3,
    recipe_id: 4,
    step_content: "Add oil to a sauce pan",
  },
  {
    step_number: 4,
    recipe_id: 4,
    step_content: "Bring to medium heat",
  },
  {
    step_number: 5,
    recipe_id: 4,
    step_content: "Add some mix to the sauce pan",
  },
  {
    step_number: 6,
    recipe_id: 4,
    step_content: "Let it cook for 1'",
  },
  {
    step_number: 7,
    recipe_id: 4,
    step_content: "Add oil to a sauce pan",
  },
  {
    step_number: 8,
    recipe_id: 4,
    step_content: "Add some mix to the sauce pan",
  },
  {
    step_number: 9,
    recipe_id: 4,
    step_content: "Let it cook for 1'",
  },
  {
    step_number: 10,
    recipe_id: 4,
    step_content: "Remove pan from fire",
  },
];

export const ingredients = [
  { ingredient_id: 1, ingredient_name: "Condensed milk" },
  { ingredient_id: 2, ingredient_name: "Cream Cheese" },
  { ingredient_id: 3, ingredient_name: "Lemon Juice" },
  { ingredient_id: 4, ingredient_name: "Pie Crust" },
  { ingredient_id: 5, ingredient_name: "Cherry Jam" },
  { ingredient_id: 6, ingredient_name: "Brussels Sprouts" },
  { ingredient_id: 7, ingredient_name: "Sesame seeds" },
  { ingredient_id: 8, ingredient_name: "Pepper" },
  { ingredient_id: 9, ingredient_name: "Salt" },
  { ingredient_id: 10, ingredient_name: "Olive oil" },
  { ingredient_id: 11, ingredient_name: "Macaroni" },
  { ingredient_id: 12, ingredient_name: "Butter" },
  { ingredient_id: 13, ingredient_name: "Flour" },
  { ingredient_id: 14, ingredient_name: "Milk" },
  { ingredient_id: 15, ingredient_name: "Shredded Cheddar cheese" },
  { ingredient_id: 16, ingredient_name: "Eggs" },
  { ingredient_id: 17, ingredient_name: "Soy sauce" },
  { ingredient_id: 18, ingredient_name: "Sugar" },
];

export const recipeIngredients = [
  // No-Bake Cheesecake steps (recipe_id: 1)
  // No-Bake Cheesecake steps (recipe_id: 1)
  {
    step_number: 1,
    recipe_id: 1,
    ingredient_id: 2, // Cream Cheese
  },
  {
    step_number: 2,
    recipe_id: 1,
    ingredient_id: 1, // Condensed milk
  },
  {
    step_number: 3,
    recipe_id: 1,
    ingredient_id: 3, // Lemon Juice
  },
  {
    step_number: 4,
    recipe_id: 1,
    ingredient_id: 4, // Pie Crust
  },
  {
    step_number: 5,
    recipe_id: 1,
    ingredient_id: 5, // Cherry Jam
  },

  // Roasted Brussels Sprouts steps (recipe_id: 2)
  // No ingredients mentioned in the steps

  // Mac & Cheese steps (recipe_id: 3)
  {
    step_number: 1,
    recipe_id: 3,
    ingredient_id: 11, // Macaroni
  },
  {
    step_number: 2,
    recipe_id: 3,
    ingredient_id: 12, // Butter
  },
  {
    step_number: 3,
    recipe_id: 3,
    ingredient_id: 13, // Flour
  },
  {
    step_number: 3,
    recipe_id: 3,
    ingredient_id: 9, // Salt
  },
  {
    step_number: 3,
    recipe_id: 3,
    ingredient_id: 8, // Pepper
  },
  {
    step_number: 4,
    recipe_id: 3,
    ingredient_id: 14, // Milk
  },
  {
    step_number: 6,
    recipe_id: 3,
    ingredient_id: 15, // Shredded Cheddar cheese
  },
  {
    step_number: 7,
    recipe_id: 3,
    ingredient_id: 11, // Macaroni
  },

  // Tamagoyaki Japanese Omelette steps (recipe_id: 4)
  {
    step_number: 1,
    recipe_id: 4,
    ingredient_id: 16, // Eggs
  },
  {
    step_number: 2,
    recipe_id: 4,
    ingredient_id: 17, // Soy sauce
  },
  {
    step_number: 2,
    recipe_id: 4,
    ingredient_id: 18, // Sugar
  },
  {
    step_number: 2,
    recipe_id: 4,
    ingredient_id: 9, // Salt
  },
  {
    step_number: 3,
    recipe_id: 4,
    ingredient_id: 10, // Olive oil
  },
  {
    step_number: 7,
    recipe_id: 4,
    ingredient_id: 10, // Olive oil
  },
];
