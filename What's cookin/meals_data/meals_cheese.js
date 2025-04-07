// meals_cheese.js

const mealsCheese = [
  {
    id: 61,
    name: "Classic Macaroni and Cheese (Mac & Cheese)",
    description: "Creamy, cheesy baked macaroni pasta, the ultimate comfort food.",
    ingredients: [
        { quantity: "500g", name: "macaroni pasta", prep: "(or other short pasta)" },
        { quantity: "60g", name: "butter" },
        { quantity: "1/3 cup", name: "plain flour" },
        { quantity: "3 cups", name: "milk", prep: "warm" },
        { quantity: "1 tsp", name: "dijon mustard", prep: "optional" },
        { quantity: "pinch", name: "cayenne pepper or nutmeg", prep: "optional" },
        { quantity: "3 cups (approx 300g)", name: "cheddar cheese", prep: "grated (sharp/mature recommended)" },
        { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated (optional)" },
        { name: "salt and freshly ground black pepper", prep: "to taste" },
        // Optional Topping:
        { quantity: "1/2 cup", name: "breadcrumbs", prep: "(panko preferred)" },
        { quantity: "1 tbsp", name: "butter", prep: "melted" }
    ],
    ingredientKeywords: ["mac and cheese", "macaroni cheese", "macaroni", "pasta", "cheese", "cheddar", "parmesan", "milk", "butter", "flour", "comfort food", "baked", "casserole", "american", "british", "aussie", "vegetarian", "kid friendly"],
    instructions: "1. Cook Pasta: Cook macaroni according to package directions until al dente (slightly undercooked). Drain well.\n2. Make Cheese Sauce (Bechamel): Melt 60g butter in a saucepan over medium heat. Whisk in flour, cook 1 min (roux). Gradually whisk in warm milk until smooth. Bring to simmer, whisking, until sauce thickens.\n3. Add Cheese & Seasoning: Remove from heat. Stir in grated cheddar (reserving some for top if not using breadcrumbs) and parmesan (if using) until melted. Stir in mustard and cayenne/nutmeg (if using). Season generously with salt and pepper.\n4. Combine: Add cooked pasta to the cheese sauce, stir well to coat.\n5. Assemble & Bake: Preheat oven to 180°C (160°C fan). Pour pasta mixture into a baking dish. Optional topping: Mix breadcrumbs and 1 tbsp melted butter, sprinkle over top (or just use reserved cheddar).\n6. Bake for 20-25 minutes until golden brown and bubbly.\n7. Serve: Let stand for 5 minutes before serving.",
    tags: ["Comfort Food", "Cheese", "Cheddar", "Pasta", "Baked", "Vegetarian", "Kid Friendly", "American", "British", "Aussie Favourite", "Dinner", "Side Dish"]
  },
  {
    id: 62,
    name: "Gourmet Grilled Cheese Sandwich",
    description: "An elevated take on the classic grilled cheese with multiple cheeses and optional additions.",
    ingredients: [
        // Per sandwich (adjust quantities for 4 servings):
        { quantity: "2 slices", name: "bread", prep: "(sourdough, thick white, rye)" },
        { quantity: "1-2 tbsp", name: "butter", prep: "softened" },
        { quantity: "Approx 50-80g total", name: "cheese slices or grated", prep: "(mix of cheddar, Gruyere, provolone, mozzarella)" },
        { quantity: "optional additions:", name: "caramelized onions, cooked bacon, sliced tomato, chutney, ham" },
        { name: "salt and pepper", prep: "optional" }
    ],
    ingredientKeywords: ["grilled cheese", "cheese toastie", "toastie", "cheese", "cheddar", "gruyere", "provolone", "mozzarella", "bread", "sourdough", "butter", "sandwich", "lunch", "snack", "comfort food", "quick", "pan-fried", "vegetarian option"],
    instructions: "1. Assemble Sandwich: Butter one side of each slice of bread. On the un-buttered side of one slice, layer your chosen cheeses (and optional additions). Season with pepper if desired. Top with the other slice of bread, butter-side out.\n2. Cook: Heat a non-stick frying pan over medium-low heat. Place sandwich in the pan.\n3. Grill: Cook for 3-5 minutes per side, until bread is golden brown and crispy, and cheese is completely melted and gooey. Press down gently with a spatula occasionally.\n4. Serve: Slice diagonally (optional) and serve immediately. Repeat for desired number of sandwiches.",
    tags: ["Lunch", "Snack", "Comfort Food", "Quick Meal", "Cheese", "Cheddar", "Sandwich", "Pan-Fried", "Vegetarian Option", "Kid Friendly"]
  },
  {
    id: 63,
    name: "Quiche Lorraine",
    description: "A classic French tart with a pastry crust filled with savoury custard, bacon, and cheese (typically Gruyere).",
    ingredients: [
        // Pastry (or use 1 sheet store-bought shortcrust):
        { quantity: "1.5 cups", name: "plain flour" }, { quantity: "125g", name: "cold butter", prep: "cubed" }, { quantity: "1", name: "egg yolk" }, { quantity: "2-3 tbsp", name: "ice water" },
        // Filling:
        { quantity: "200g", name: "bacon lardons or chopped bacon" },
        { quantity: "1", name: "onion", prep: "finely chopped (optional)" },
        { quantity: "1 cup (approx 100g)", name: "Gruyere cheese", prep: "grated (or cheddar)" },
        { quantity: "3", name: "large eggs" },
        { quantity: "1.25 cups (300ml)", name: "thickened cream (heavy cream)" },
        { quantity: "pinch", name: "nutmeg", prep: "freshly grated" },
        { name: "salt and freshly ground black pepper" }
    ],
    ingredientKeywords: ["quiche lorraine", "quiche", "tart", "pastry", "shortcrust", "bacon", "cheese", "gruyere", "cheddar", "eggs", "cream", "custard", "french", "savoury", "baking", "lunch", "brunch", "dinner"],
    instructions: "1. Make Pastry (if homemade): Rub butter into flour until like breadcrumbs. Mix in yolk. Add ice water gradually until dough forms. Wrap, chill 30 mins.\n2. Blind Bake Crust: Preheat oven 190°C (175°C fan). Roll out pastry, line 23cm tart tin. Prick base. Line with baking paper & weights. Bake 15 mins. Remove paper/weights, bake 5-10 mins more until pale gold. Remove.\n3. Cook Filling Base: While crust bakes, cook bacon in a pan until crisp. Drain fat. Sauté onion (if using) in bacon fat until soft. Scatter bacon and onion over baked pastry base. Sprinkle grated cheese over.\n4. Make Custard: Whisk eggs and cream together. Season with nutmeg, salt, pepper.\n5. Assemble & Bake: Carefully pour egg mixture over bacon/cheese in pastry case. Bake at 180°C (160°C fan) for 25-35 minutes, until custard is just set and golden.\n6. Serve: Let cool slightly before slicing. Serve warm or at room temperature.",
    tags: ["French", "Quiche", "Tart", "Bacon", "Cheese", "Gruyere", "Pastry", "Baking", "Savoury", "Lunch", "Brunch", "Dinner"]
  },
  {
    id: 64,
    name: "Cheese Soufflé",
    description: "A light, airy baked dish made with egg yolks, beaten egg whites, cheese sauce (Bechamel with cheese).",
    ingredients: [
        { quantity: "3 tbsp", name: "butter", prep: "plus extra for greasing" },
        { quantity: "3 tbsp", name: "plain flour" },
        { quantity: "1 cup", name: "milk", prep: "warm" },
        { quantity: "4", name: "large eggs", prep: "separated" },
        { quantity: "100g", name: "Gruyere or strong cheddar cheese", prep: "finely grated" },
        { quantity: "1/2 tsp", name: "dijon mustard", prep: "optional" },
        { quantity: "pinch", name: "cayenne pepper or nutmeg" },
        { name: "salt and white pepper" },
        { quantity: "1 tbsp", name: "grated parmesan cheese", prep: "for coating dish" }
    ],
    ingredientKeywords: ["souffle", "cheese souffle", "cheese", "gruyere", "cheddar", "eggs", "baked", "light", "airy", "french", "classic", "starter", "lunch", "vegetarian"],
    instructions: "1. Prep Dish & Oven: Preheat oven 190°C (175°C fan). Generously butter a 1-1.5L soufflé dish. Coat inside with grated parmesan, tapping out excess.\n2. Make Sauce Base (Bechamel): Melt 3 tbsp butter in saucepan. Whisk in flour, cook 1 min (roux). Gradually whisk in warm milk until smooth & thick. Simmer 2 mins. Remove from heat.\n3. Add Yolks & Cheese: Beat egg yolks into slightly cooled sauce one by one. Stir in grated Gruyere/cheddar, mustard (if using), cayenne/nutmeg, salt, white pepper. Let cool slightly.\n4. Beat Egg Whites: In a clean, dry bowl, beat egg whites until stiff peaks form.\n5. Combine: Gently fold one-quarter of the beaten egg whites into the cheese sauce to lighten it. Then carefully fold the remaining egg whites into the mixture in two batches – try not to deflate the whites.\n6. Bake: Pour mixture into prepared soufflé dish. Run thumb around inside rim to help it rise evenly. Bake immediately for 25-35 minutes until risen, golden brown, and just set (centre should still wobble slightly).\n7. Serve: Serve IMMEDIATELY as soufflés deflate quickly.",
    tags: ["French", "Classic", "Cheese", "Gruyere", "Cheddar", "Eggs", "Baked", "Light", "Airy", "Starter", "Lunch", "Vegetarian", "Impressive"]
  },
  {
    id: 65,
    name: "Welsh Rarebit (Posh Cheese on Toast)",
    description: "A savoury sauce of melted cheese, ale, mustard, and Worcestershire sauce served hot over toasted bread.",
    ingredients: [
        { quantity: "250g", name: "strong cheddar cheese", prep: "grated" },
        { quantity: "1 tbsp", name: "butter" },
        { quantity: "1 tbsp", name: "plain flour" },
        { quantity: "1/2 cup", name: "beer or ale", prep: "(or milk)" },
        { quantity: "1 tsp", name: "english mustard" },
        { quantity: "1 tsp", name: "worcestershire sauce" },
        { quantity: "1", name: "egg yolk", prep: "optional, for richness" },
        { quantity: "pinch", name: "cayenne pepper", prep: "optional" },
        { quantity: "4 thick slices", name: "bread", prep: "(e.g., sourdough, crusty white)" },
        { name: "salt and pepper", prep: "to taste" }
    ],
    ingredientKeywords: ["welsh rarebit", "welsh rabbit", "cheese on toast", "cheese", "cheddar", "beer", "ale", "mustard", "worcestershire sauce", "british", "welsh", "pub food", "comfort food", "savoury", "lunch", "snack"],
    instructions: "1. Make Cheese Sauce: Melt butter in saucepan. Stir in flour, cook 1 min (roux). Gradually whisk in beer/ale (or milk) until smooth. Bring to simmer, cook until slightly thickened.\n2. Melt Cheese: Reduce heat to low. Add grated cheese, mustard, Worcestershire sauce, cayenne (if using). Stir until cheese is melted and sauce is smooth (do not boil).\n3. Add Yolk (optional): Remove from heat. Stir in egg yolk if using.\n4. Toast Bread: Toast bread slices until golden brown on both sides.\n5. Top & Grill: Place toast on baking sheet. Spoon cheese mixture generously over each slice, spreading to edges. Place under a hot grill (broiler) for 2-4 minutes until bubbling, golden, and lightly browned.\n6. Serve: Serve immediately, seasoned with pepper.",
    tags: ["British", "Welsh", "Cheese", "Cheddar", "Savoury", "Comfort Food", "Pub Food", "Lunch", "Snack", "Quick Meal"]
  },
  {
    id: 66,
    name: "Chicken Parmigiana (Parma/Parmi)",
    description: "Aussie pub classic: crispy chicken schnitzel topped with Napoli sauce and melted cheese.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "bread crumbs" }, { quantity: "4 tbsp", name: "olive oil" }, { quantity: "1 cup", name: "Napoli sauce" }, { quantity: "4 slices", name: "ham", prep: "optional" }, { quantity: "1.5 cups", name: "mozzarella cheese", prep: "grated" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated" }, { name: "chips", prep: "to serve" }, { name: "salad", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken parma", "parmi", "parmigiana", "chicken", "schnitzel", "cheese", "mozzarella", "parmesan", "napoli sauce", "ham", "pub", "aussie", "australian", "italian", "dinner"],
    instructions: "1. Prep/Crumb Chicken: Pound chicken to 1.5cm. Coat in flour, then egg, then breadcrumbs.\n2. Cook Schnitzels: Heat oil, cook chicken 3-4 mins per side until golden. Drain.\n3. Assemble: Place schnitzels in oven dish. Top with ham, Napoli sauce, mozzarella, parmesan.\n4. Bake: Bake 180°C (160°C fan) for 10-15 mins until cheese melts.\n5. Serve: Serve with chips and salad.",
    tags: ["Pub Classic", "Chicken", "Schnitzel", "Cheese", "Aussie Favourite", "Italian", "Dinner", "Family Favourite", "Comfort Food"] // Included as it's heavily cheese-topped
  },
   {
    id: 67,
    name: "Tuna Mornay Pasta Bake",
    description: "Creamy, cheesy pasta bake with tuna and vegetables. Budget-friendly family dinner.",
    ingredients: [
        { quantity: "300g", name: "pasta" }, { quantity: "50g", name: "butter" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1/4 cup", name: "plain flour" }, { quantity: "2.5 cups", name: "milk" }, { quantity: "1.5 cups", name: "cheddar cheese", prep: "grated" }, { quantity: "425g can", name: "tuna", prep: "drained & flaked" }, { quantity: "1 cup", name: "frozen peas and corn mix" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "breadcrumbs", prep: "optional" }, { quantity: "1 tbsp", name: "butter", prep: "melted, optional" }
    ],
    ingredientKeywords: ["tuna mornay", "tuna bake", "pasta bake", "tuna", "pasta", "cheese", "cheddar", "mornay sauce", "bechamel", "comfort food", "budget friendly", "family meal", "aussie", "casserole"],
    instructions: "1. Cook Pasta: Cook pasta al dente. Drain.\n2. Make Mornay: Melt 50g butter, sauté onion. Stir in flour (1 min). Whisk in milk until smooth & thick. Stir in 1 cup cheese. Season.\n3. Combine: Add pasta, tuna, veg to sauce.\n4. Assemble & Bake: Preheat oven 180°C. Pour mix into dish. Top with rest of cheese (& optional buttered breadcrumbs). Bake 20-25 mins until golden.\n5. Serve: Rest briefly.",
    tags: ["Pasta Bake", "Tuna", "Fish", "Comfort Food", "Family Meal", "Budget Friendly", "Cheese", "Cheddar", "Aussie Favourite", "Dinner"] // Included for the cheesy sauce
  },
  {
    id: 68,
    name: "Cauliflower Cheese",
    description: "Tender cauliflower florets baked in a creamy cheese sauce, a classic British side dish or vegetarian main.",
    ingredients: [
        { quantity: "1 large head", name: "cauliflower", prep: "broken into florets" },
        // Cheese Sauce (Bechamel based):
        { quantity: "50g", name: "butter" },
        { quantity: "1/4 cup", name: "plain flour" },
        { quantity: "2.5 cups", name: "milk", prep: "warm" },
        { quantity: "1.5 cups (approx 150g)", name: "strong cheddar cheese", prep: "grated" },
        { quantity: "1 tsp", name: "english mustard", prep: "optional" },
        { quantity: "pinch", name: "nutmeg or cayenne pepper", prep: "optional" },
        { name: "salt and white pepper" },
        // Optional Topping:
        { quantity: "2 tbsp", name: "breadcrumbs" },
        { quantity: "1 tbsp", name: "grated parmesan" }
    ],
    ingredientKeywords: ["cauliflower cheese", "cauliflower", "cheese", "cheddar", "bechamel", "cheese sauce", "baked", "side dish", "vegetarian", "british", "comfort food", "gratin"],
    instructions: "1. Cook Cauliflower: Steam or boil cauliflower florets until just tender (about 5-8 minutes). Drain very well.\n2. Make Cheese Sauce: Melt butter, stir in flour (1 min). Gradually whisk in warm milk until smooth & thick. Simmer 2 mins. Remove from heat, stir in most of the cheddar, mustard, nutmeg/cayenne. Season.\n3. Assemble: Preheat oven 190°C (175°C fan). Place drained cauliflower in an ovenproof dish. Pour cheese sauce evenly over cauliflower.\n4. Top & Bake: Sprinkle remaining cheddar (and optional breadcrumbs/parmesan) over the top. Bake for 20-25 minutes until golden brown and bubbly.\n5. Serve: Serve hot as a side dish or light main.",
    tags: ["British", "Side Dish", "Vegetarian", "Comfort Food", "Cheese", "Cheddar", "Cauliflower", "Baked", "Gratin", "Winter Warmer"]
  },
  {
    id: 69,
    name: "Cheese and Onion Pasty",
    description: "A savoury baked pastry filled with a simple mixture of cheese, onion, and often potato.",
    ingredients: [
      // Pastry (as per Cornish Pasty, or store-bought shortcrust)
      { quantity: "350g", name: "plain flour" }, { quantity: "75g", name: "butter" }, { quantity: "75g", name: "lard/shortening" }, { quantity: "pinch", name: "salt" }, { quantity: "4-6 tbsp", name: "ice water" },
      // Filling:
      { quantity: "2", name: "onions", prep: "finely chopped" },
      { quantity: "200g", name: "potato", prep: "peeled & finely diced (optional, traditional)" },
      { quantity: "250g", name: "strong cheddar cheese", prep: "grated" },
      { quantity: "optional:", name: "1", name:"egg", prep:"beaten (for binding)"},
      { name: "salt and freshly ground black pepper" },
      { quantity: "1", name: "egg", prep: "beaten (for glazing)" }
    ],
    ingredientKeywords: ["cheese and onion pasty", "pasty", "cheese", "cheddar", "onion", "potato", "pastry", "shortcrust", "baked", "vegetarian", "british", "savoury", "lunch"],
    instructions: "1. Make Pastry (if homemade): Rub fats into flour/salt. Add water to form dough. Chill 30 mins.\n2. Prepare Filling: If using potato, lightly boil diced potato until just tender, drain well. Sauté onion in a little butter until soft (optional, can be added raw). In a bowl, combine onion, cooled potato (if using), grated cheese. Add beaten egg (if using) to bind. Season well with salt & pepper.\n3. Assemble Pasties: Preheat oven 200°C (180°C fan). Divide pastry into 4. Roll into circles (20-23cm). Place filling on one half. Moisten edge.\n4. Seal Pasties: Fold pastry over, press edges, crimp along top curve.\n5. Bake: Place on baking tray. Brush with egg wash. Bake 30-40 minutes until golden brown.\n6. Serve: Serve hot or warm.",
    tags: ["British", "Vegetarian", "Pasty", "Cheese", "Cheddar", "Onion", "Potato", "Pastry", "Baked", "Lunch", "Savoury", "Comfort Food"]
  },
   {
    id: 70,
    name: "Ploughman's Lunch",
    description: "A traditional British pub lunch platter, typically including cheese, bread, pickles, chutney, and often ham or other accompaniments.",
    ingredients: [
      // Core components (adjust amounts for 4 servings):
      { quantity: "Approx 400g total", name: "Cheese", prep: "wedge(s) of Cheddar, Stilton, Red Leicester etc." },
      { quantity: "1 loaf", name: "crusty bread or rolls" },
      { quantity: "Generous portion", name: "pickled onions" },
      { quantity: "Generous portion", name: "chutney", prep: "(e.g., Branston pickle, tomato chutney)" },
      { quantity: "Butter" },
      // Optional additions:
      { name: "Sliced ham" }, { name: "Pork pie wedge" }, { name: "Scotch egg", prep:"halved"}, { name: "Apple slices" }, { name: "Celery sticks" }, { name: "Salad leaves" }, { name: "Hard-boiled egg" }
    ],
    ingredientKeywords: ["ploughmans lunch", "ploughmans", "cheese", "cheddar", "stilton", "bread", "pickle", "pickled onions", "chutney", "ham", "pork pie", "british", "pub food", "lunch", "platter", "no-cook", "cold meal"],
    instructions: "1. Arrange Platter: Artfully arrange generous portions of the chosen cheeses, bread/rolls, pickled onions, and chutney on individual plates or a large shared platter.\n2. Add Extras: Include any desired optional additions like ham, pork pie, apple slices, celery, salad leaves etc.\n3. Serve: Serve with butter alongside the bread. No cooking required!",
    tags: ["British", "Pub Food", "Lunch", "Platter", "No-Cook", "Cold Meal", "Cheese", "Cheddar", "Pickle", "Chutney", "Simple", "Traditional"]
  }
  // Could add: Cheese Scones, Fondue (though Swiss), variations of pasta bake, cheese boards etc.
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsCheese);