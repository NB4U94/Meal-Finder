// meals_weeknight_dinner.js

const mealsWeeknightDinner = [
  {
    id: 239,
    name: "Spaghetti Bolognese",
    description: "Classic rich beef mince sauce simmered with vegetables and tomatoes, a weeknight staple.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "grated" }, { quantity: "1 stick", name: "celery", prep: "finely chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "400g can", name: "diced tomatoes" }, { quantity: "1/2 cup", name: "beef stock/red wine" }, { quantity: "1 tsp", name: "dried oregano" }, { quantity: "1/2 tsp", name: "dried basil" }, { quantity: "400g", name: "spaghetti" }, { name: "parmesan cheese", prep: "grated, to serve" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["spaghetti", "bolognese", "pasta", "beef", "beef mince", "mince", "ragu", "tomato", "italian", "comfort food", "family favourite", "dinner", "weeknight dinner", "kid friendly"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, garlic, carrot, celery until soft.\n2. Brown Mince: Add mince, brown, drain fat.\n3. Add Liquids/Herbs: Stir in tomato paste (1 min). Add tomatoes, stock/wine, herbs. Season.\n4. Simmer: Simmer covered 30 mins (minimum).\n5. Cook Pasta: Cook spaghetti.\n6. Serve: Serve sauce over spaghetti, top with parmesan.",
    tags: ["Family Favourite", "Beef", "Pasta", "Italian", "Aussie Favourite", "Comfort Food", "Weeknight Dinner", "Mince", "Kid Friendly", "Dinner"]
  },
  {
    id: 240,
    name: "Simple Beef Stir-Fry",
    description: "Quick, versatile beef and vegetable stir-fry, ideal for a fast weeknight meal.",
    ingredients: [
        { quantity: "500g", name: "beef stir-fry strips" }, { quantity: "3 tbsp", name: "soy sauce" }, { quantity: "1.5 tbsp", name: "honey" }, { quantity: "2 tsp", name: "ginger", prep: "grated" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1.5 tsp", name: "sesame oil" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1 large head", name: "broccoli" }, { quantity: "1 large", name: "capsicum" }, { quantity: "1 large", name: "carrot" }, { quantity: "1", name: "onion" }, { name: "rice or noodles", prep: "to serve" }
    ],
    ingredientKeywords: ["beef", "beef strips", "stir-fry beef", "soy sauce", "honey", "ginger", "garlic", "broccoli", "capsicum", "carrot", "onion", "rice", "noodles", "asian", "quick", "quick meal", "chinese", "stir-fry", "weeknight dinner", "30 min meal", "dinner"],
    instructions: "1. Marinate beef (15 mins).\n2. Heat oil in wok (high).\n3. Cook beef batches (1-2 mins). Remove.\n4. Cook veggies (broccoli, capsicum, carrot, onion) 3-5 mins until tender-crisp.\n5. Combine: Return beef. Toss to heat (1 min).\n6. Serve over rice/noodles.",
    tags: ["Quick Meal", "Beef", "Stir-fry", "Asian Inspired", "Weeknight Dinner", "Chinese", "30 Min Meal", "Dinner"]
  },
  {
    id: 241,
    name: "Creamy Pesto Pasta with Chicken",
    description: "A very quick pasta dish combining pesto, cream, and chicken.",
    ingredients: [
      { quantity: "400g", name: "pasta", prep:"(penne, fettuccine)" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "4", name: "chicken breast/600g thigh", prep: "cubed" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1/2 - 3/4 cup", name: "basil pesto" }, { quantity: "1 cup", name: "heavy cream" }, { quantity: "1/4 cup", name: "parmesan cheese", prep: "grated" }, { name: "salt and pepper" }, { name: "cherry tomatoes", prep: "halved (opt.)" }
    ],
    ingredientKeywords: ["chicken", "pasta", "pesto", "cream", "parmesan", "cheese", "garlic", "italian", "italian inspired", "quick", "quick meal", "creamy", "weeknight dinner", "comfort food", "30 min meal", "dinner"],
    instructions: "1. Cook Pasta al dente. Reserve 1/2 cup water.\n2. Cook Chicken: Heat oil, cook chicken. Season.\n3. Sauté Garlic (30 secs).\n4. Add Pesto & Cream: Stir in pesto (1 min). Reduce heat, stir in cream, parmesan (do not boil).\n5. Combine: Add pasta. Toss. Add pasta water if needed. Stir in tomatoes (opt.).\n6. Serve: Garnish extra parmesan.",
    tags: ["Pasta", "Chicken", "Pesto", "Creamy", "Quick Meal", "Weeknight Dinner", "Italian Inspired", "Comfort Food", "Family Favourite", "Cheese", "Italian", "30 Min Meal", "Dinner"]
  },
   {
    id: 242,
    name: "Beef Tacos",
    description: "Quick ground beef tacos with favourite toppings, great for a fast family dinner.",
    ingredients: [
      { quantity: "1 tbsp", name: "oil" }, { quantity: "500g", name: "beef mince" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 packet", name: "taco seasoning" }, { quantity: "1/2 cup", name: "water/broth" }, { quantity: "8-12", name: "taco shells (hard/soft)" }, // Toppings:
      { name: "lettuce" }, { name: "tomatoes" }, { name: "cheese" }, { name: "sour cream" }, { name: "salsa" }
    ],
    ingredientKeywords: ["taco", "tacos", "beef", "beef mince", "mince", "taco seasoning", "mexican", "family meal", "fun", "kid friendly", "quick meal", "weeknight dinner", "30 min meal", "dinner"],
    instructions: "1. Cook Beef & Onion: Heat oil, brown mince and onion. Drain fat.\n2. Add Seasoning: Add garlic (30 secs). Stir in taco seasoning & water/broth.\n3. Simmer: Simmer 5-10 mins until thickish.\n4. Prepare Shells & Toppings.\n5. Serve: Let everyone assemble.",
    tags: ["Mexican", "Beef", "Mince", "Tacos", "Family Favourite", "Fun Meal", "Weeknight Dinner", "Quick Meal", "Kid Friendly", "30 Min Meal", "Dinner"]
  },
  {
    id: 243,
    name: "Simple Pan-Seared Fish with Lemon and Capers",
    description: "Very quick pan-seared fish fillets with a tangy lemon-caper butter sauce.",
    ingredients: [
        { quantity: "4", name: "fish fillets", prep: "(snapper, bream, sole ~150-180g each)" }, { quantity: "2 tbsp", name: "flour", prep: "(opt.)" }, { name: "salt and pepper" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "3 tbsp", name: "butter" }, { quantity: "2 tbsp", name: "capers", prep: "rinsed" }, { quantity: "3 tbsp", name: "lemon juice" }, { quantity: "2 tbsp", name: "parsley", prep: "chopped" }
    ],
    ingredientKeywords: ["pan-seared fish", "pan-fried fish", "fish", "white fish", "snapper", "lemon caper sauce", "lemon", "capers", "butter", "quick", "quick meal", "simple", "healthy option", "dinner", "lunch", "mediterranean", "20 min meal", "seafood"],
    instructions: "1. Prepare Fish: Pat dry. Season. Optional: dust in flour.\n2. Sear Fish: Heat oil (medium-high). Cook fish 3-5 mins skin-side down (if using). Flip.\n3. Cook Other Side & Make Sauce: Add butter. Cook fish 2-4 mins until done. Add capers, lemon juice. Swirl pan (30 secs). Stir in parsley.\n4. Serve: Remove fish. Spoon sauce over.",
    tags: ["Fish", "White Fish", "Seafood", "Pan-Fried", "Pan-Seared", "Quick Meal", "Simple", "Healthy Option", "Dinner", "Lunch", "Lemon", "Capers", "Mediterranean", "20 Min Meal", "Gluten Free Option", "Weeknight Dinner"]
  },
   {
    id: 244,
    name: "Chicken Stir-fry with Cashew Nuts",
    description: "Popular Chinese-style stir-fry quick enough for a weeknight.",
    ingredients: [
        { quantity: "4", name: "chicken breast/600g thigh", prep: "bite-sized" }, // Marinade: { quantity: "1 tbsp", name:"soy"}, { quantity:"1 tsp", name:"cornflour"} // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "stock/water" }, { quantity: "1 tsp", name: "cornflour slurry" }, // Stir-fry:
        { quantity: "2 tbsp", name: "oil" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "1 tsp", name: "ginger" }, { quantity: "1", name: "onion" }, { quantity: "1", name: "capsicum" }, { quantity: "1", name: "carrot" }, { quantity: "1/2 cup", name: "cashew nuts" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken stir-fry", "cashew chicken", "chicken", "cashew nuts", "stir-fry", "chinese", "asian", "oyster sauce", "quick", "quick meal", "takeaway", "weeknight dinner", "30 min meal"],
    instructions: "1. Marinate Chicken (15 mins opt.).\n2. Mix Sauce ingredients (except slurry).\n3. Cook Chicken: Heat 1 tbsp oil, stir-fry chicken. Remove.\n4. Stir-fry Veg & Nuts: Heat 1 tbsp oil. Stir-fry garlic, ginger, onion (1 min). Add capsicum, carrot (2-3 mins). Add cashews (30 secs).\n5. Combine & Thicken: Return chicken. Pour sauce over. Simmer. Add slurry, stir until thick.\n6. Serve with rice.",
    tags: ["Chinese", "Stir-fry", "Chicken", "Cashew Nuts", "Nuts", "Quick Meal", "Weeknight Dinner", "Takeaway Classic", "Asian Inspired", "30 Min Meal", "Family Favourite"]
  },
   {
    id: 245,
    name: "Pasta Aglio e Olio",
    description: "Super quick and simple Italian pasta with garlic, olive oil, and chilli flakes.",
    ingredients: [
        { quantity: "400g", name: "spaghetti" }, { quantity: "1/2 cup", name: "extra virgin olive oil" }, { quantity: "6-8 cloves", name: "garlic", prep: "sliced" }, { quantity: "1/4 - 1/2 tsp", name: "red pepper flakes" }, { quantity: "1/2 cup", name: "parsley", prep: "chopped" }, { name: "salt" }
    ],
    ingredientKeywords: ["aglio e olio", "pasta aglio e olio", "spaghetti", "pasta", "garlic", "olive oil", "chilli flakes", "italian", "simple", "quick", "quick meal", "vegetarian", "vegan option", "classic", "weeknight dinner", "15 min meal"],
    instructions: "1. Cook Pasta al dente. Reserve 1 cup water.\n2. Sauté Garlic & Chilli gently in oil (DO NOT BURN).\n3. Combine: Add hot pasta to garlic oil. Add parsley. Toss.\n4. Emulsify: Add few tbsp pasta water. Toss vigorously.\n5. Season & Serve.",
    tags: ["Italian", "Pasta", "Simple", "Quick Meal", "Vegetarian", "Vegan Option", "Garlic", "Olive Oil", "Classic", "Weeknight Dinner", "15 Min Meal"]
  },
  {
    id: 246,
    name: "Quesadillas (Cheese and Optional Fillings)",
    description: "Quick Mexican favourite: tortillas filled with cheese and optional extras, pan-fried until golden.",
    ingredients: [
        { quantity: "8", name: "medium flour tortillas" }, { quantity: "2-3 cups", name: "shredded cheese" }, // Optional Fillings:
        { quantity: "1 cup", name: "cooked chicken/beef mince" }, { quantity: "1/2 cup", name: "black beans" }, { quantity: "1/2 cup", name: "corn" }, { quantity: "1/4", name: "onion/capsicum", prep:"chopped"},
        { quantity: "Butter or oil", prep: "for pan" }, { name: "Serve with:", prep: "salsa, sour cream" }
    ],
    ingredientKeywords: ["quesadilla", "quesadillas", "mexican", "tex-mex", "tortilla", "cheese", "chicken", "beef", "beans", "quick", "quick meal", "lunch", "snack", "appetizer", "kid friendly", "vegetarian option", "15 min meal", "weeknight dinner"],
    instructions: "1. Assemble: Lay tortilla. Sprinkle cheese over half. Add optional fillings. Add more cheese. Fold.\n2. Cook: Heat oiled/buttered pan (medium). Cook 2-4 mins per side until golden & cheese melted.\n3. Serve: Cut into wedges. Serve with salsa, sour cream.",
    tags: ["Mexican", "Tex-Mex", "Quick Meal", "Lunch", "Snack", "Appetizer", "Cheese", "Tortilla", "Kid Friendly", "Vegetarian Option", "15 Min Meal", "Family Favourite", "Weeknight Dinner"]
  },
  {
    id: 247,
    name: "Lemon Herb Roasted Chicken Pieces",
    description: "Chicken pieces roasted with lemon, garlic, and herbs - relatively quick hands-off cooking time.",
    ingredients: [
        { quantity: "8 pieces", name: "chicken portions", prep: "(thighs, drumsticks)" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "1", name: "lemon", prep: "zested and juiced" }, { quantity: "4 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tbsp", name: "fresh rosemary/thyme", prep: "chopped" }, { quantity: "1/2 tsp", name: "paprika", prep: "opt." }, { name: "salt and pepper" }, { quantity: "optional:", name: "potato wedges or veg", prep:"to roast alongside"}
    ],
    ingredientKeywords: ["roast chicken", "baked chicken", "chicken", "chicken thighs", "chicken drumsticks", "lemon", "herb", "garlic", "roasted", "baked", "simple", "healthy option", "mediterranean", "weeknight dinner", "dinner", "one pan"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Prepare Chicken: Whisk oil, lemon zest/juice, garlic, herbs, paprika, salt, pepper. Toss chicken pieces in marinade.\n3. Arrange & Roast: Arrange chicken (and optional veg) in single layer in roasting tin. Roast 40-55 minutes until golden and cooked through.\n4. Rest & Serve: Rest 5-10 minutes before serving.",
    tags: ["Chicken", "Roasted", "Baked", "Lemon", "Herb", "Garlic", "Simple", "Weeknight Dinner", "Dinner", "Healthy Option", "Mediterranean", "One Pan"]
  },
  {
    id: 248,
    name: "Sausage and Vegetable Tray Bake",
    description: "Easy weeknight meal: sausages roasted on a tray with chopped vegetables.",
    ingredients: [
        { quantity: "8", name: "good quality sausages" },
        { quantity: "Approx 4-5 cups", name: "mixed roasting vegetables", prep: "chopped (e.g., potato chunks, onion wedges, capsicum chunks, broccoli florets, sweet potato chunks, zucchini chunks)" },
        { quantity: "2 tbsp", name: "olive oil" },
        { quantity: "1 tsp", name: "dried herbs", prep: "(e.g., mixed herbs, rosemary, thyme)" },
        { name: "salt and pepper" }
    ],
    ingredientKeywords: ["tray bake", "sausage bake", "sausages", "vegetables", "roasted vegetables", "one pan", "easy", "simple", "weeknight dinner", "dinner", "family favourite", "kid friendly"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Prepare Veggies & Sausages: Toss chopped vegetables with olive oil, dried herbs, salt, pepper in a large roasting tin. Arrange sausages amongst vegetables.\n3. Roast: Roast for 35-45 minutes, turning sausages and tossing vegetables halfway through, until sausages are cooked through and browned, and vegetables are tender and slightly caramelized.\n4. Serve: Serve hot directly from the tray.",
    tags: ["Tray Bake", "One Pan", "Easy", "Simple", "Sausages", "Vegetables", "Roasted", "Weeknight Dinner", "Dinner", "Family Favourite", "Kid Friendly"]
  },
   {
    id: 249,
    name: "Creamy Garlic Prawn Pasta",
    description: "Prawns cooked in a quick creamy garlic sauce, tossed with pasta.",
    ingredients: [
        { quantity: "400g", name: "pasta", prep: "(linguine)" }, { quantity: "1 tbsp", name: "olive oil" }, { quantity: "2 tbsp", name: "butter" }, { quantity: "4-5 cloves", name: "garlic", prep: "minced" }, { quantity: "500g", name: "large raw prawns", prep: "peeled" }, { quantity: "1/2 cup", name: "white wine", prep: "opt." }, { quantity: "1 cup", name: "heavy cream" }, { quantity: "1/4 cup", name: "parmesan cheese" }, { quantity: "pinch", name: "red pepper flakes", prep: "opt." }, { quantity: "2 tbsp", name: "parsley", prep: "chopped" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["garlic prawn pasta", "prawn pasta", "shrimp pasta", "pasta", "prawns", "shrimp", "seafood", "garlic", "cream", "creamy", "parmesan", "white wine", "italian inspired", "dinner", "comfort food", "quick meal", "weeknight dinner"],
    instructions: "1. Cook Pasta al dente. Reserve 1 cup water.\n2. Sauté Garlic: Heat oil & butter. Add garlic (& opt. chilli), cook 1 min.\n3. Cook Prawns: Add prawns, cook 1-2 mins per side until pink. Remove.\n4. Make Sauce: Deglaze with wine (opt.). Stir in cream. Simmer. Stir in parmesan.\n5. Combine: Return prawns. Add pasta. Toss. Add pasta water if needed.\n6. Finish: Stir in parsley. Season.\n7. Serve immediately.",
    tags: ["Pasta", "Prawns", "Shrimp", "Seafood", "Creamy", "Garlic", "Dinner", "Comfort Food", "Quick Meal", "Weeknight Dinner", "Italian Inspired", "Cheese"]
  },
   {
    id: 250,
    name: "Minute Steak with Garlic Butter",
    description: "Very thin steak cooked rapidly, served with garlic herb butter.",
    ingredients: [
        { quantity: "4", name: "minute steaks or thin beef steaks" }, { quantity: "1 tbsp", name: "oil/butter" }, { name: "salt and pepper" }, // Garlic Butter:
        { quantity: "50g", name: "butter", prep:"softened"}, { quantity: "1-2 cloves", name: "garlic", prep:"crushed"}, { quantity: "1 tbsp", name: "parsley", prep:"chopped"}, { name: "Sides:", prep: "chips, salad"}
    ],
    ingredientKeywords: ["minute steak", "steak", "beef", "thin steak", "quick", "quick meal", "pan-fried", "garlic butter", "dinner", "lunch", "simple", "15 min meal", "weeknight dinner"],
    instructions: "1. Make Garlic Butter: Mash butter, garlic, parsley.\n2. Cook Steak: Pat dry, season. Heat oil/butter (high). Cook 1-2 mins per side. Do not overcook.\n3. Serve: Top hot steak with garlic butter. Serve with sides.",
    tags: ["Beef", "Steak", "Quick Meal", "Pan-Fried", "Simple", "Dinner", "Lunch", "Garlic Butter", "15 Min Meal", "Weeknight Dinner"]
  }
  // Add more Weeknight Dinners...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsWeeknightDinner);