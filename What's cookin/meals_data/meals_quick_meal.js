// meals_quick_meal.js

const mealsQuickMeal = [
  {
    id: 179,
    name: "Simple Beef Stir-Fry",
    description: "Quick, versatile beef and vegetable stir-fry, perfect for a weeknight dinner (approx 25-30 mins).",
    ingredients: [
        { quantity: "500g", name: "beef stir-fry strips" }, { quantity: "3 tbsp", name: "soy sauce" }, { quantity: "1.5 tbsp", name: "honey" }, { quantity: "2 tsp", name: "ginger", prep: "grated" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1.5 tsp", name: "sesame oil" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1 large head", name: "broccoli", prep: "florets" }, { quantity: "1 large", name: "capsicum", prep: "sliced" }, { quantity: "1 large", name: "carrot", prep: "julienned" }, { quantity: "1", name: "onion", prep: "sliced" }, { name: "rice or noodles", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["beef", "beef strips", "stir-fry beef", "soy sauce", "honey", "ginger", "garlic", "broccoli", "capsicum", "carrot", "onion", "rice", "noodles", "asian", "quick", "quick meal", "chinese", "stir-fry", "weeknight dinner", "30 min meal"],
    instructions: "1. Marinate beef (soy, honey, ginger, garlic, sesame oil) 15 mins.\n2. Heat oil in wok (high heat).\n3. Cook beef in batches until browned (1-2 mins). Remove.\n4. Cook veggies: Stir-fry broccoli, capsicum, carrot, onion until tender-crisp (3-5 mins).\n5. Combine: Return beef. Add more soy if desired. Toss to heat (1 min).\n6. Serve over rice/noodles.",
    tags: ["Quick Meal", "Beef", "Stir-fry", "Asian Inspired", "Weeknight Dinner", "Chinese", "30 Min Meal"]
  },
  {
    id: 180,
    name: "Creamy Pesto Pasta with Chicken",
    description: "A quick and flavourful pasta dish combining pesto, cream, and chicken (approx 20-25 mins).",
    ingredients: [
      { quantity: "400g", name: "pasta", prep: "(penne, fettuccine)" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "4", name: "chicken breast/600g thigh", prep: "cubed" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1/2 - 3/4 cup", name: "basil pesto" }, { quantity: "1 cup", name: "heavy cream" }, { quantity: "1/4 cup", name: "parmesan cheese", prep: "grated, plus extra" }, { name: "salt and pepper" }, { name: "cherry tomatoes", prep: "halved (opt.)" }
    ],
    ingredientKeywords: ["chicken", "pasta", "penne", "fettuccine", "pesto", "basil", "cream", "parmesan", "cheese", "garlic", "italian", "italian inspired", "quick", "quick meal", "creamy", "weeknight dinner", "comfort food", "30 min meal"],
    instructions: "1. Cook Pasta al dente. Reserve 1/2 cup water.\n2. Cook Chicken: Heat oil, cook chicken. Season.\n3. Sauté Garlic (30 secs).\n4. Add Pesto & Cream: Stir in pesto (1 min). Reduce heat, stir in cream, parmesan (do not boil).\n5. Combine: Add pasta. Toss. Add pasta water if needed. Stir in tomatoes (opt.).\n6. Serve: Garnish extra parmesan.",
    tags: ["Pasta", "Chicken", "Pesto", "Creamy", "Quick Meal", "Weeknight Dinner", "Italian Inspired", "Comfort Food", "Family Favourite", "Cheese", "Italian", "30 Min Meal"]
  },
  {
    id: 181,
    name: "Pasta Aglio e Olio (Garlic and Oil Pasta)",
    description: "A simple, classic Italian pasta dish ready in the time it takes to cook pasta (approx 15 mins).",
    ingredients: [
        { quantity: "400g", name: "spaghetti or linguine" }, { quantity: "1/2 cup", name: "extra virgin olive oil" }, { quantity: "6-8 cloves", name: "garlic", prep: "thinly sliced" }, { quantity: "1/4 - 1/2 tsp", name: "red pepper flakes" }, { quantity: "1/2 cup", name: "fresh parsley", prep: "chopped" }, { name: "salt" }, { quantity: "optional:", name: "parmesan cheese", prep:"to serve"}
    ],
    ingredientKeywords: ["aglio e olio", "pasta aglio e olio", "spaghetti", "pasta", "garlic", "olive oil", "chilli flakes", "parsley", "italian", "simple", "quick", "quick meal", "vegetarian", "vegan option", "classic", "weeknight dinner", "15 min meal"],
    instructions: "1. Cook Pasta al dente in salted water. Reserve 1 cup water.\n2. Sauté Garlic & Chilli: Heat oil (low-medium). Gently cook garlic & chilli flakes until fragrant & light gold (DO NOT BURN).\n3. Combine: Add drained hot pasta to garlic oil. Add parsley. Toss.\n4. Emulsify: Add few tbsp reserved pasta water. Toss vigorously until slightly creamy.\n5. Season & Serve: Season with salt. Serve immediately (opt. parmesan).",
    tags: ["Italian", "Pasta", "Simple", "Quick Meal", "Vegetarian", "Vegan Option", "Garlic", "Olive Oil", "Classic", "Weeknight Dinner", "15 Min Meal"]
  },
  {
    id: 182,
    name: "Ham, Egg and Chips",
    description: "A simple and satisfying British cafe/pub classic, quick to assemble if chips are ready (approx 15-20 mins + chip cooking).",
    ingredients: [
        { quantity: "4-8 slices", name: "cooked ham" }, { quantity: "4", name: "large eggs" }, { quantity: "1kg", name: "potatoes for chips / frozen chips" }, { name: "vegetable oil", prep: "for frying chips" }, { quantity: "1 tbsp", name: "butter/oil for eggs" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["ham egg and chips", "ham", "egg", "fried egg", "chips", "fries", "potato", "british", "pub food", "cafe food", "simple", "comfort food", "lunch", "dinner", "quick meal"],
    instructions: "1. Cook Chips: Cook chips until golden and crispy.\n2. Cook Ham (optional warming): Warm ham if desired.\n3. Fry Eggs: Heat butter/oil. Fry eggs to preference.\n4. Assemble & Serve: Arrange ham, eggs, hot chips on plates. Serve.",
    tags: ["British", "Pub Food", "Simple", "Comfort Food", "Ham", "Egg", "Chips", "Lunch", "Dinner", "Quick Meal"]
  },
   {
    id: 183,
    name: "Simple Pan-Seared Fish with Lemon and Capers",
    description: "Quickly pan-seared fish fillets with a tangy lemon-caper butter sauce (approx 15-20 mins).",
    ingredients: [
        { quantity: "4", name: "fish fillets", prep: "(snapper, bream, flathead, sole ~150-180g each)" }, { quantity: "2 tbsp", name: "plain flour", prep: "(opt.)" }, { name: "salt and pepper" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "3 tbsp", name: "butter" }, { quantity: "2 tbsp", name: "capers", prep: "rinsed" }, { quantity: "3 tbsp", name: "lemon juice" }, { quantity: "2 tbsp", name: "fresh parsley", prep: "chopped" }
    ],
    ingredientKeywords: ["pan-seared fish", "pan-fried fish", "fish", "white fish", "snapper", "bream", "lemon caper sauce", "lemon", "capers", "butter", "quick", "quick meal", "simple", "healthy option", "dinner", "lunch", "mediterranean", "20 min meal"],
    instructions: "1. Prepare Fish: Pat dry. Season. Optional: dust in flour.\n2. Sear Fish: Heat oil (medium-high). Cook fish 3-5 mins skin-side down (if using). Flip.\n3. Cook Other Side & Make Sauce: Add butter. Cook fish 2-4 mins until done. Add capers, lemon juice. Swirl pan (30 secs). Stir in parsley.\n4. Serve: Remove fish. Spoon sauce over.",
    tags: ["Fish", "White Fish", "Seafood", "Pan-Fried", "Pan-Seared", "Quick Meal", "Simple", "Healthy Option", "Dinner", "Lunch", "Lemon", "Capers", "Mediterranean", "20 Min Meal", "Gluten Free Option"] // (omit flour)
  },
   {
    id: 184,
    name: "Creamy Smoked Salmon Pasta",
    description: "A quick and elegant pasta dish with smoked salmon in a creamy sauce (approx 20 mins).",
    ingredients: [
        { quantity: "400g", name: "long pasta", prep: "(fettuccine, linguine)" }, { quantity: "1 tbsp", name: "oil or butter" }, { quantity: "1", name: "shallot/small onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "opt:", name:"1/4 cup white wine"}, { quantity: "1 cup", name: "heavy cream" }, { quantity: "200g", name: "smoked salmon", prep: "strips" }, { quantity: "2 tbsp", name: "fresh dill or parsley", prep: "chopped" }, { quantity: "1 tbsp", name: "lemon juice", prep: "opt." }, { quantity: "opt:", name:"1/4 cup frozen peas"}, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["smoked salmon pasta", "salmon pasta", "pasta", "smoked salmon", "salmon", "fish", "seafood", "creamy", "cream", "dill", "lemon", "quick", "quick meal", "elegant", "dinner", "italian inspired", "20 min meal"],
    instructions: "1. Cook Pasta al dente. Reserve 1/2 cup water.\n2. Sauté Aromatics: Heat oil/butter. Sauté shallot/onion. Add garlic.\n3. Deglaze (optional): Add wine, reduce.\n4. Make Sauce: Stir in cream. Simmer gently. Add peas (opt.).\n5. Combine: Add pasta & smoked salmon. Toss gently. Add pasta water if needed.\n6. Finish: Stir in herbs, lemon juice (opt.). Season (careful with salt).\n7. Serve immediately.",
    tags: ["Pasta", "Smoked Salmon", "Salmon", "Fish", "Seafood", "Creamy", "Quick Meal", "Dinner", "Elegant", "Italian Inspired", "20 Min Meal"]
  },
   {
    id: 185,
    name: "Chicken Caesar Salad",
    description: "Classic salad assembled quickly if chicken and croutons are ready (approx 15 mins assembly).",
    ingredients: [
      { quantity: "4", name: "cooked chicken breasts", prep: "sliced (grilled, pan-fried, or rotisserie)" }, { quantity: "2 heads", name: "romaine lettuce", prep: "chopped" }, { quantity: "1.5 cups", name: "croutons" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "shaved/grated" }, { quantity: "3/4 cup", name: "Caesar dressing" }, { quantity: "optional:", name: "cooked bacon bits"}
    ],
    ingredientKeywords: ["chicken", "salad", "caesar salad", "romaine lettuce", "croutons", "parmesan", "cheese", "caesar dressing", "bacon", "lunch", "light meal", "classic", "american", "quick meal", "dinner option"],
    instructions: "1. Assemble Salad: In large bowl, combine romaine, croutons, parmesan.\n2. Add Chicken & Dressing: Add sliced chicken. Pour dressing over, toss gently.\n3. Add Bacon (optional).\n4. Serve immediately.",
    tags: ["Salad", "Chicken", "Caesar", "Classic", "Lunch", "Light Meal", "Summer", "American", "Dinner Option", "Quick Meal", "15 Min Meal"] // Assumes pre-cooked chicken
  },
  {
    id: 186,
    name: "Gourmet Grilled Cheese Sandwich",
    description: "A quick and comforting classic, easily elevated (approx 10-15 mins).",
    ingredients: [
        // Per sandwich x 4:
        { quantity: "8 slices", name: "bread" }, { quantity: "4-8 tbsp", name: "butter", prep: "softened" }, { quantity: "Approx 200-320g total", name: "cheese", prep: "(mix cheddar, Gruyere, etc.)" }, { quantity: "optional:", name: "cooked bacon, ham, tomato" }
    ],
    ingredientKeywords: ["grilled cheese", "cheese toastie", "toastie", "cheese", "cheddar", "gruyere", "bread", "butter", "sandwich", "lunch", "snack", "comfort food", "quick", "quick meal", "pan-fried", "vegetarian option", "kid friendly", "15 min meal"],
    instructions: "1. Assemble Sandwich: Butter one side bread. Layer cheese (& opt. additions) on un-buttered side. Top with other bread slice, butter-side out.\n2. Cook: Heat pan (medium-low). Cook sandwich 3-5 mins per side until golden & cheese melted.\n3. Serve: Slice & serve immediately. Repeat.",
    tags: ["Lunch", "Snack", "Comfort Food", "Quick Meal", "Cheese", "Cheddar", "Sandwich", "Pan-Fried", "Vegetarian Option", "Kid Friendly", "15 Min Meal"]
  },
  {
    id: 187,
    name: "Vegetable Fried Rice",
    description: "Quick and easy way to use up leftover rice and veggies (approx 15-20 mins).",
    ingredients: [
      { quantity: "4 cups", name: "cooked rice", prep: "cold, day-old" }, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "diced" }, { quantity: "1/2 cup", name: "frozen peas" }, { quantity: "1/2 cup", name: "corn kernels" }, { quantity: "2-3", name: "eggs", prep: "beaten" }, { quantity: "3-4 tbsp", name: "soy sauce" }, { name: "spring onions", prep: "garnish" }, { name: "opt. protein:", prep:"cooked chicken/shrimp/tofu"}
    ],
    ingredientKeywords: ["fried rice", "rice", "vegetable", "vegetarian", "egg", "soy sauce", "chinese", "asian", "quick", "quick meal", "leftovers", "budget friendly", "stir-fry", "side dish", "20 min meal"],
    instructions: "1. Prep rice: Ensure cold, break clumps.\n2. Heat oils: Heat oils in wok.\n3. Sauté aromatics/veg: Stir-fry onion (1 min), garlic/carrot (2 mins), peas/corn (2-3 mins).\n4. Cook egg: Push aside, scramble egg, mix in.\n5. Add rice: Add cold rice, stir-fry (2-3 mins).\n6. Add Protein (opt.).\n7. Season: Drizzle soy sauce, toss.\n8. Serve: Garnish spring onions.",
    tags: ["Chinese", "Rice", "Fried Rice", "Vegetarian", "Quick Meal", "Weeknight Dinner", "Leftovers", "Stir-fry", "Asian Inspired", "Budget Friendly", "Side Dish", "Family Favourite", "20 Min Meal"]
  },
  {
    id: 188,
    name: "Chicken Stir-fry with Cashew Nuts",
    description: "Popular Chinese-style stir-fry with chicken, cashews, and vegetables (approx 25-30 mins).",
    ingredients: [
        { quantity: "4", name: "chicken breast/600g thigh", prep: "bite-sized" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "stock/water" }, { quantity: "1 tsp", name: "cornflour slurry" }, // Stir-fry:
        { quantity: "2 tbsp", name: "oil" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "1 tsp", name: "ginger" }, { quantity: "1", name: "onion" }, { quantity: "1", name: "capsicum" }, { quantity: "1", name: "carrot" }, { quantity: "1/2 cup", name: "cashew nuts" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken stir-fry", "cashew chicken", "chicken", "cashew nuts", "nuts", "stir-fry", "chinese", "asian", "oyster sauce", "quick", "quick meal", "takeaway", "30 min meal"],
    instructions: "1. Marinate Chicken (15 mins).\n2. Mix Sauce ingredients (except slurry).\n3. Cook Chicken: Heat 1 tbsp oil, stir-fry chicken. Remove.\n4. Stir-fry Veggies & Nuts: Heat 1 tbsp oil. Stir-fry garlic, ginger, onion (1 min). Add capsicum, carrot (2-3 mins). Add cashews (30 secs).\n5. Combine & Thicken: Return chicken. Pour sauce over. Simmer. Add slurry, stir until thick.\n6. Serve with rice.",
    tags: ["Chinese", "Stir-fry", "Chicken", "Cashew Nuts", "Nuts", "Quick Meal", "Weeknight Dinner", "Takeaway Classic", "Asian Inspired", "30 Min Meal"]
  },
   {
    id: 189,
    name: "Quesadillas (Cheese and Optional Fillings)",
    description: "Quick Mexican favourite: tortillas filled with cheese and optional extras, folded and pan-fried until golden (approx 10-15 mins).",
    ingredients: [
        { quantity: "8", name: "medium flour tortillas" },
        { quantity: "2-3 cups", name: "shredded cheese", prep: "(cheddar, Monterey Jack, Mexican blend)" },
        // Optional Fillings:
        { quantity: "1 cup", name: "cooked chicken", prep:"shredded" }, { quantity: "1 cup", name: "cooked beef mince", prep:"seasoned" }, { quantity: "1/2 cup", name: "black beans", prep:"rinsed" }, { quantity: "1/2 cup", name: "corn kernels" }, { quantity: "1/4", name: "onion", prep:"finely chopped" }, { quantity: "1/4", name: "capsicum", prep:"finely chopped"},
        { quantity: "Butter or oil", prep: "for pan" },
        { name: "Serve with:", prep: "salsa, sour cream, guacamole" }
    ],
    ingredientKeywords: ["quesadilla", "quesadillas", "mexican", "tex-mex", "tortilla", "cheese", "cheddar", "monterey jack", "chicken", "beef", "beans", "quick", "quick meal", "lunch", "snack", "appetizer", "kid friendly", "vegetarian option", "15 min meal"],
    instructions: "1. Assemble: Lay tortilla flat. Sprinkle cheese over half. Add optional fillings over cheese. Sprinkle more cheese. Fold tortilla in half.\n2. Cook: Heat lightly oiled/buttered pan (medium heat). Place quesadilla in pan. Cook 2-4 minutes per side, until golden brown and cheese is melted.\n3. Serve: Cut into wedges. Serve immediately with salsa, sour cream, guacamole.",
    tags: ["Mexican", "Tex-Mex", "Quick Meal", "Lunch", "Snack", "Appetizer", "Cheese", "Tortilla", "Kid Friendly", "Vegetarian Option", "15 Min Meal", "Family Favourite"]
  },
   {
    id: 190,
    name: "Minute Steak with Garlic Butter",
    description: "Very thin steak cooked rapidly, served with a simple garlic herb butter (approx 10-15 mins).",
    ingredients: [
        { quantity: "4", name: "minute steaks or thin beef steaks", prep: "(~100-150g each)" },
        { quantity: "1 tbsp", name: "olive oil or butter" },
        { name: "salt and freshly ground black pepper" },
        // Garlic Butter:
        { quantity: "50g", name: "butter", prep:"softened"}, { quantity: "1-2 cloves", name: "garlic", prep:"crushed"}, { quantity: "1 tbsp", name: "fresh parsley", prep:"chopped"},
        { name: "Optional sides:", prep: "chips, salad, mash"}
    ],
    ingredientKeywords: ["minute steak", "steak", "beef", "thin steak", "quick", "quick meal", "pan-fried", "garlic butter", "butter", "parsley", "dinner", "lunch", "simple", "15 min meal"],
    instructions: "1. Make Garlic Butter: Mash softened butter with crushed garlic and parsley.\n2. Cook Steak: Pat steaks dry, season well. Heat oil/butter in pan (high heat). Cook steaks very quickly - 1-2 minutes per side for rare/medium-rare (adjust for thickness). Do not overcook.\n3. Serve: Serve steaks immediately, topped with a knob of garlic butter to melt over. Serve with desired sides.",
    tags: ["Beef", "Steak", "Quick Meal", "Pan-Fried", "Simple", "Dinner", "Lunch", "Garlic Butter", "15 Min Meal"]
  },
  {
    id: 191,
    name: "Simple Omelette with Fillings",
    description: "A quick and versatile egg dish, filled with cheese, ham, mushrooms, or other favourites (approx 10 mins).",
    ingredients: [
      // Per omelette (x4):
      { quantity: "2-3", name: "large eggs" },
      { quantity: "1 tbsp", name: "milk or water", prep:"optional" },
      { name: "salt and pepper" },
      { quantity: "1 tsp", name: "butter or oil" },
      // Fillings (Examples per omelette):
      { quantity: "1/4 cup", name: "grated cheese" }, { quantity: "2 slices", name: "ham", prep:"chopped" }, { quantity: "few", name: "mushrooms", prep:"sliced & sautéed" }, { quantity: "1 tbsp", name: "onion/spring onion", prep:"chopped"}, { quantity:"spinach leaves"}
    ],
    ingredientKeywords: ["omelette", "eggs", "breakfast", "brunch", "lunch", "quick", "quick meal", "simple", "versatile", "cheese", "ham", "mushroom", "vegetarian option", "10 min meal", "protein"],
    instructions: "1. Prepare Eggs: Whisk eggs, optional milk/water, salt, pepper.\n2. Heat Pan: Heat butter/oil in non-stick omelette pan (medium heat).\n3. Cook Omelette: Pour egg mixture into hot pan. As edges set, gently lift with spatula and tilt pan to let uncooked egg flow underneath. Cook until almost set but still slightly moist on top.\n4. Add Fillings: Sprinkle desired fillings over one half of the omelette.\n5. Fold & Serve: Fold the other half of the omelette over the filling. Slide onto plate. Serve immediately. Repeat for other omelettes.",
    tags: ["Breakfast", "Brunch", "Lunch", "Quick Meal", "Simple", "Eggs", "Vegetarian Option", "Protein Rich", "10 Min Meal", "Cheese", "Ham", "Mushroom"]
  },
  {
    id: 192,
    name: "Tuna Salad Sandwich / Tuna Melt",
    description: "Quick lunch option: simple tuna salad mixture served in bread or as a melt with cheese (approx 10-15 mins).",
    ingredients: [
      // Tuna Salad (for 4 sandwiches):
      { quantity: "2 x 185g cans", name: "tuna in springwater or oil", prep: "drained & flaked" },
      { quantity: "1/2 cup", name: "mayonnaise" },
      { quantity: "1/4 cup", name: "celery", prep: "finely chopped" },
      { quantity: "1/4", name: "red onion", prep: "finely chopped", prep:"optional"},
      { quantity: "1 tbsp", name: "lemon juice or relish", prep:"optional"},
      { name: "salt and pepper" },
      // For serving:
      { quantity: "8 slices", name: "bread or rolls" },
      { name: "Lettuce leaves", prep:"optional"},
      // For Tuna Melt:
      { quantity: "4 slices", name: "cheese", prep:"(cheddar, provolone)"}, { quantity:"butter", prep:"for grilling"}
    ],
    ingredientKeywords: ["tuna salad", "tuna sandwich", "tuna melt", "tuna", "canned tuna", "fish", "mayonnaise", "celery", "sandwich", "melt", "cheese", "quick", "quick meal", "lunch", "simple", "budget friendly", "15 min meal"],
    instructions: "1. Make Tuna Salad: Combine drained tuna, mayonnaise, celery, optional onion, optional lemon/relish, salt, pepper. Mix well.\n2. Make Sandwich: Spread tuna salad mixture onto 4 slices of bread. Top with lettuce (if using) and other bread slice.\n3. Tuna Melt Option: Assemble as above, adding cheese slice on top of tuna salad. Butter outside of bread slices. Grill in pan (medium-low) like a grilled cheese until golden and cheese melted.\n4. Serve: Serve sandwiches or melts immediately.",
    tags: ["Lunch", "Quick Meal", "Simple", "Sandwich", "Tuna", "Fish", "Budget Friendly", "15 Min Meal", "Tuna Melt", "Cheese Option"]
  }
  // More Quick Meals could be added... eg. simple soups, wraps, instant noodles variations etc.
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsQuickMeal);