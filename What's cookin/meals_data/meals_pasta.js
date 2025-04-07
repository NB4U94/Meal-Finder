// meals_pasta.js

const mealsPasta = [
  {
    id: 156,
    name: "Spaghetti Bolognese",
    description: "Classic rich beef mince sauce simmered with vegetables and tomatoes, served with spaghetti.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "grated" }, { quantity: "1 stick", name: "celery", prep: "finely chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "400g can", name: "diced tomatoes" }, { quantity: "1/2 cup", name: "beef stock/red wine" }, { quantity: "1 tsp", name: "dried oregano" }, { quantity: "1/2 tsp", name: "dried basil" }, { quantity: "1", name: "bay leaf", prep: "opt." }, { quantity: "400g", name: "spaghetti" }, { name: "parmesan cheese", prep: "grated, to serve" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["spaghetti", "bolognese", "pasta", "beef", "beef mince", "mince", "ragu", "tomato", "italian", "comfort food", "family favourite", "dinner"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, garlic, carrot, celery until soft.\n2. Brown Mince: Add mince, brown, drain fat.\n3. Add Liquids/Herbs: Stir in tomato paste (1 min). Add tomatoes, stock/wine, herbs, bay leaf. Season.\n4. Simmer: Simmer covered 30+ mins (longer better). Remove bay leaf.\n5. Cook Pasta: Cook spaghetti.\n6. Serve: Serve sauce over spaghetti, top with parmesan.",
    tags: ["Family Favourite", "Beef", "Pasta", "Italian", "Aussie Favourite", "Comfort Food", "Weeknight Dinner", "Mince", "Kid Friendly", "Dinner"]
  },
  {
    id: 157,
    name: "Classic Lasagne al Forno",
    description: "Layers of rich beef ragu, creamy béchamel sauce, pasta sheets, and cheese, baked until golden.",
    ingredients: [
        // Ragu (Simplified):
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion" }, { quantity: "1", name: "carrot" }, { quantity: "1", name: "celery" }, { quantity: "500g", name: "beef mince" }, { quantity: "1/2 cup", name: "red wine", prep:"opt." }, { quantity: "400g can", name: "crushed tomatoes" }, { quantity: "1 cup", name: "stock/milk" }, { quantity: "1 tsp", name: "oregano" }, { name: "salt & pepper" },
        // Béchamel:
        { quantity: "60g", name: "butter" }, { quantity: "1/2 cup", name: "flour" }, { quantity: "3 cups", name: "milk", prep:"warm" }, { quantity: "pinch", name: "nutmeg" }, { name: "salt & white pepper" },
        // Assembly:
        { quantity: "9-12 sheets", name: "dried lasagne pasta sheets" }, { quantity: "1 cup", name: "parmesan cheese", prep: "grated" }, { quantity: "1 cup", name: "mozzarella cheese", prep: "grated, opt."}
    ],
    ingredientKeywords: ["lasagne", "lasagna", "baked pasta", "pasta", "beef", "mince", "ragu", "bolognese", "bechamel", "white sauce", "cheese", "parmesan", "mozzarella", "italian", "comfort food", "family favourite", "dinner", "baked"],
    instructions: "1. Make Ragu: Sauté chopped veg. Brown mince. Add wine (opt.), reduce. Add tomatoes, stock/milk, oregano. Season. Simmer 30+ mins.\n2. Make Béchamel: Melt butter, whisk in flour. Whisk in warm milk until thick. Season (nutmeg, salt, pepper).\n3. Assemble: Preheat oven 180°C. Grease dish. Layer: ragu, pasta, béchamel, ragu, parmesan. Repeat, finish with pasta, béchamel, cheeses.\n4. Bake: Bake 35-45 mins until golden & bubbly.\n5. Rest & Serve: Rest 10-15 mins before slicing.",
    tags: ["Italian", "Pasta", "Baked Pasta", "Beef", "Mince", "Ragu", "Bechamel", "Cheese", "Comfort Food", "Family Favourite", "Dinner", "Winter Warmer"]
  },
  {
    id: 158,
    name: "Creamy Pesto Pasta with Chicken",
    description: "Quick pasta dish combining pesto, cream, and tender chicken.",
    ingredients: [
      { quantity: "400g", name: "pasta", prep: "(penne, fettuccine)" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "4", name: "chicken breast/600g thigh", prep: "cubed" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1/2 - 3/4 cup", name: "basil pesto" }, { quantity: "1 cup", name: "heavy cream" }, { quantity: "1/4 cup", name: "parmesan cheese", prep: "grated, plus extra" }, { name: "salt and pepper" }, { name: "cherry tomatoes", prep: "halved (opt.)" }
    ],
    ingredientKeywords: ["chicken", "pasta", "penne", "fettuccine", "pesto", "basil", "cream", "parmesan", "cheese", "garlic", "italian", "italian inspired", "quick", "creamy", "weeknight dinner", "comfort food"],
    instructions: "1. Cook Pasta al dente. Reserve 1/2 cup water.\n2. Cook Chicken: Heat oil, cook chicken. Season.\n3. Sauté Garlic (30 secs).\n4. Add Pesto & Cream: Stir in pesto (1 min). Reduce heat, stir in cream, parmesan (do not boil).\n5. Combine: Add pasta. Toss. Add pasta water if needed. Stir in tomatoes (opt.).\n6. Serve: Garnish extra parmesan.",
    tags: ["Pasta", "Chicken", "Pesto", "Creamy", "Quick Meal", "Weeknight Dinner", "Italian Inspired", "Comfort Food", "Family Favourite", "Cheese", "Italian"]
  },
  {
    id: 159,
    name: "Pasta Carbonara (Traditional)",
    description: "Classic Roman pasta with eggs, Pecorino Romano, guanciale/pancetta, and black pepper.",
    ingredients: [
        { quantity: "400g", name: "spaghetti or bucatini" }, { quantity: "150g", name: "guanciale or pancetta", prep: "diced" }, { quantity: "4", name: "large egg yolks" }, { quantity: "1 cup", name: "Pecorino Romano cheese", prep: "finely grated" }, { name: "black pepper", prep: "freshly cracked, generous amount" }, { name: "salt" }
    ],
    ingredientKeywords: ["carbonara", "pasta carbonara", "spaghetti", "bucatini", "pasta", "italian", "roman", "egg", "pecorino romano", "parmesan", "cheese", "guanciale", "pancetta", "bacon", "black pepper", "no cream", "authentic", "classic"],
    instructions: "1. Cook Pork: Cook guanciale/pancetta in cold pan (medium heat) until crisp. Remove meat, reserve fat.\n2. Cook Pasta: Cook pasta in salted water al dente. Reserve 1 cup pasta water.\n3. Prepare Egg/Cheese Mix: Whisk yolks, Pecorino, generous pepper in large bowl.\n4. Combine (Off Heat!): Drain pasta quickly, add immediately to egg/cheese bowl. Toss rapidly.\n5. Emulsify: Add crispy pork. Add some hot pasta water swirled with reserved fat to bowl. Toss, adding more water if needed for creamy consistency.\n6. Serve: Serve immediately, top with more cheese & pepper.",
    tags: ["Italian", "Roman", "Pasta", "Carbonara", "Classic", "Authentic", "Egg", "Cheese", "Pecorino", "Guanciale", "Pancetta", "Dinner", "Comfort Food"]
  },
  {
    id: 160,
    name: "Tuna Mornay Pasta Bake",
    description: "Creamy, cheesy pasta bake with canned tuna and vegetables.",
    ingredients: [
        { quantity: "400g", name: "pasta" }, { quantity: "50g", name: "butter" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1/4 cup", name: "flour" }, { quantity: "2.5 cups", name: "milk" }, { quantity: "1.5 cups", name: "cheddar cheese", prep: "grated" }, { quantity: "2 x 185g cans", name: "tuna", prep: "drained" }, { quantity: "1 cup", name: "frozen peas and corn" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "breadcrumbs", prep:"opt." }
    ],
    ingredientKeywords: ["tuna mornay", "tuna bake", "pasta bake", "tuna", "canned tuna", "fish", "pasta", "cheese", "cheddar", "mornay sauce", "comfort food", "budget friendly", "family meal", "aussie", "casserole", "kid friendly"],
    instructions: "1. Cook Pasta al dente. Drain.\n2. Make Mornay: Melt butter, sauté onion. Stir in flour (1 min). Whisk in milk until thick. Stir in 1 cup cheese. Season.\n3. Combine: Add pasta, tuna, veg to sauce.\n4. Assemble & Bake: Preheat oven 180°C. Pour mix into dish. Top with rest of cheese (& opt. breadcrumbs). Bake 20-25 mins.\n5. Serve: Rest briefly.",
    tags: ["Pasta Bake", "Tuna", "Fish", "Comfort Food", "Family Meal", "Budget Friendly", "Cheese", "Cheddar", "Aussie Favourite", "Dinner", "Kid Friendly", "Family Favourite", "Pasta"]
  },
  {
    id: 161,
    name: "Pasta Aglio e Olio (Garlic and Oil Pasta)",
    description: "A simple, classic Italian pasta dish with garlic, olive oil, parsley, and red pepper flakes.",
    ingredients: [
        { quantity: "400g", name: "spaghetti or linguine" },
        { quantity: "1/2 cup", name: "good quality extra virgin olive oil" },
        { quantity: "6-8 cloves", name: "garlic", prep: "thinly sliced or minced" },
        { quantity: "1/4 - 1/2 tsp", name: "red pepper flakes (chilli flakes)", prep: "adjust to taste" },
        { quantity: "1/2 cup", name: "fresh parsley", prep: "chopped" },
        { name: "salt", prep: "for pasta water and to taste" },
        { quantity: "optional:", name: "grated parmesan cheese", prep:"to serve"}
    ],
    ingredientKeywords: ["aglio e olio", "pasta aglio e olio", "spaghetti", "linguine", "pasta", "garlic", "olive oil", "chilli flakes", "parsley", "italian", "simple", "quick", "vegetarian", "vegan option", "classic"],
    instructions: "1. Cook Pasta: Cook pasta in well-salted water until al dente. Reserve about 1 cup pasta water before draining.\n2. Sauté Garlic & Chilli: While pasta cooks, heat olive oil in large skillet over low-medium heat. Add sliced/minced garlic and red pepper flakes. Cook gently, stirring often, until garlic is fragrant and lightly golden (DO NOT BURN - 3-5 mins). Remove from heat if garlic browns too fast.\n3. Combine: Add drained hot pasta directly to the skillet with the garlic oil. Add chopped parsley. Toss well to coat pasta evenly.\n4. Emulsify: Add a few tablespoons of reserved pasta water to the skillet. Toss vigorously to create a slightly creamy, emulsified sauce.\n5. Season & Serve: Season with salt to taste. Serve immediately, optionally topped with grated parmesan cheese.",
    tags: ["Italian", "Pasta", "Simple", "Quick Meal", "Vegetarian", "Vegan Option", "Garlic", "Olive Oil", "Classic", "Weeknight Dinner"] // Vegan if no cheese
  },
  {
    id: 162,
    name: "Pasta Primavera (Spring Vegetable Pasta)",
    description: "Pasta tossed with fresh spring vegetables in a light sauce (often cream, broth, or oil based).",
    ingredients: [
        { quantity: "400g", name: "pasta", prep: "(e.g., fettuccine, penne, farfalle)" },
        { quantity: "2 tbsp", name: "olive oil" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "Approx 4 cups", name: "mixed spring vegetables", prep: "chopped (e.g., asparagus spears, peas, zucchini ribbons, cherry tomatoes, broccoli florets, spring onions)" },
        { quantity: "1/2 cup", name: "vegetable or chicken stock" },
        { quantity: "1/2 cup", name: "heavy cream", prep: "(optional, for creamy version)" },
        { quantity: "1/4 cup", name: "grated parmesan cheese", prep: "(plus extra)" },
        { quantity: "1/4 cup", name: "fresh basil or parsley", prep: "chopped" },
        { quantity: "1 tbsp", name: "lemon zest", prep: "optional" },
        { name: "salt and pepper" }
    ],
    ingredientKeywords: ["pasta primavera", "primavera", "pasta", "spring vegetables", "vegetables", "asparagus", "peas", "zucchini", "broccoli", "tomato", "vegetarian", "light", "fresh", "italian", "italian-american", "cream optional", "parmesan", "basil"],
    instructions: "1. Cook Pasta: Cook pasta al dente. Reserve 1 cup pasta water. Drain.\n2. Cook Vegetables: Heat olive oil (medium heat). Add garlic, cook 30 secs. Add harder vegetables (broccoli, asparagus stems, carrots), cook 2-3 mins. Add softer vegetables (peas, zucchini, spring onions), cook 2-3 mins until tender-crisp. Add cherry tomatoes last minute.\n3. Make Sauce: Pour in stock. Bring to simmer. If making creamy version, stir in cream now. Simmer 1-2 mins.\n4. Combine: Add cooked pasta to vegetables/sauce. Stir in parmesan, fresh herbs, optional lemon zest. Toss well. Add pasta water if needed for consistency.\n5. Season & Serve: Season with salt and pepper. Serve immediately, topped with extra parmesan.",
    tags: ["Italian", "Italian-American", "Pasta", "Vegetarian", "Vegetables", "Spring", "Fresh", "Light", "Dinner", "Lunch", "Healthy Option", "Cream Option"]
  },
  {
    id: 163,
    name: "Spaghetti Puttanesca",
    description: "A pungent and flavourful Neapolitan pasta sauce made with tomatoes, olives, capers, anchovies, and garlic.",
    ingredients: [
        { quantity: "400g", name: "spaghetti or linguine" },
        { quantity: "3 tbsp", name: "olive oil" },
        { quantity: "4-6 cloves", name: "garlic", prep: "thinly sliced" },
        { quantity: "4-6", name: "anchovy fillets", prep: "finely chopped (or paste)" },
        { quantity: "1/2 tsp", name: "red pepper flakes (chilli flakes)" },
        { quantity: "400g can", name: "whole peeled tomatoes", prep: "crushed by hand" },
        { quantity: "1/2 cup", name: "kalamata olives", prep: "pitted and halved/chopped" },
        { quantity: "2 tbsp", name: "capers", prep: "rinsed" },
        { quantity: "1/2 cup", name: "fresh parsley", prep: "chopped" },
        { name: "salt", prep: "to taste (be careful, anchovies/olives/capers are salty)" }
    ],
    ingredientKeywords: ["puttanesca", "spaghetti puttanesca", "pasta", "spaghetti", "linguine", "italian", "neapolitan", "tomato", "olives", "kalamata olives", "capers", "anchovies", "garlic", "chilli flakes", "savoury", "pungent", "quick"],
    instructions: "1. Cook Pasta: Cook pasta al dente in salted water. Reserve 1/2 cup pasta water. Drain.\n2. Start Sauce: Heat olive oil (medium-low). Add garlic, anchovies, red pepper flakes. Cook gently, stirring, until garlic fragrant and anchovies dissolve (2-3 mins). Do not burn garlic.\n3. Add Tomatoes & Simmer: Add crushed tomatoes. Bring to simmer. Cook 10-15 minutes, breaking up tomatoes, until sauce thickens slightly.\n4. Add Olives & Capers: Stir in olives and capers. Cook 2-3 minutes more.\n5. Combine: Add drained pasta and most of the chopped parsley to the sauce. Toss well. Add reserved pasta water if needed to loosen sauce.\n6. Season & Serve: Taste and add salt only if necessary. Serve immediately, garnished with remaining parsley.",
    tags: ["Italian", "Neapolitan", "Pasta", "Spaghetti", "Tomato", "Olives", "Capers", "Anchovies", "Savoury", "Quick Meal", "Dinner", "Classic"]
  },
   {
    id: 164,
    name: "Pasta e Fagioli (Pasta and Bean Soup)",
    description: "A hearty Italian peasant soup made with pasta, beans, and vegetables.",
    ingredients: [
        { quantity: "2 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1", name: "carrot", prep: "chopped" }, { quantity: "1", name: "celery stick", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "optional:", name:"100g pancetta or bacon, diced"}, { quantity: "1 tsp", name: "dried rosemary or thyme" }, { quantity: "400g can", name: "crushed or diced tomatoes" }, { quantity: "4 cups", name: "vegetable or chicken stock" }, { quantity: "400g can", name: "cannellini beans", prep: "rinsed and drained" }, { quantity: "400g can", name: "borlotti beans", prep: "rinsed and drained (or use 2 cans cannellini)" }, { quantity: "1 cup", name: "small pasta shape", prep: "(e.g., ditalini, small shells, elbow macaroni)" }, { name: "salt and pepper" }, { name: "grated parmesan cheese", prep: "to serve" }, { name: "extra virgin olive oil", prep: "drizzle to serve" }
    ],
    ingredientKeywords: ["pasta e fagioli", "pasta fagioli", "pasta and beans", "soup", "stew", "italian", "beans", "cannellini beans", "borlotti beans", "pasta", "ditalini", "comfort food", "hearty", "peasant food", "vegetarian option", "winter warmer"],
    instructions: "1. Sauté Base: Heat olive oil. Sauté onion, carrot, celery until soft (5-7 mins). Add garlic (and pancetta if using), cook 1-2 mins. Stir in herbs.\n2. Add Liquids & Beans: Add tomatoes and stock. Bring to simmer. Add drained beans. Simmer 15 mins.\n3. Blend (Optional): For creamier texture, remove 1-2 cups soup (mostly beans/veg), blend smooth, return to pot.\n4. Cook Pasta: Bring soup back to simmer. Add small pasta shape. Cook according to package directions (usually 8-12 mins) until pasta is tender.\n5. Season & Serve: Season soup well with salt and pepper. Ladle into bowls. Serve hot, drizzled with extra virgin olive oil and sprinkled with parmesan cheese.",
    tags: ["Italian", "Soup", "Stew", "Pasta", "Beans", "Comfort Food", "Hearty", "Vegetarian Option", "Winter Warmer", "Lunch", "Dinner", "Budget Friendly"] // Vegetarian if veg stock & no pancetta
  },
   {
    id: 165,
    name: "Baked Ziti / Baked Penne",
    description: "A popular Italian-American baked pasta dish, similar to lasagne but using tubular pasta like ziti or penne, mixed with sauce and cheese.",
    ingredients: [
        { quantity: "500g", name: "ziti or penne pasta" },
        { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep:"chopped" }, { quantity: "2 cloves", name: "garlic", prep:"minced" }, { quantity: "500g", name: "italian sausage mince or beef mince", prep:"optional"},
        { quantity: "700g jar or 2x 400g cans", name: "marinara or pasta sauce" }, { quantity: "1 tsp", name: "dried oregano or italian seasoning"},
        { quantity: "1 tub (approx 450g)", name: "ricotta cheese" },
        { quantity: "1", name: "egg", prep:"lightly beaten"},
        { quantity: "1/2 cup", name: "grated parmesan cheese" }, { name: "salt and pepper" },
        { quantity: "2 cups (approx 200g)", name: "mozzarella cheese", prep: "shredded" }
    ],
    ingredientKeywords: ["baked ziti", "baked penne", "baked pasta", "pasta bake", "pasta", "ziti", "penne", "italian-american", "american", "casserole", "ricotta", "mozzarella", "parmesan", "cheese", "marinara", "tomato sauce", "sausage", "beef", "comfort food", "family favourite"],
    instructions: "1. Cook Pasta: Cook pasta until very al dente (2-3 mins less than package time). Drain.\n2. Make Meat Sauce (if using): Heat oil, sauté onion. Add garlic. Brown sausage/beef mince. Drain fat. Stir in marinara sauce, oregano. Simmer 5-10 mins. Season.\n3. Prepare Cheese Mixture: In bowl, mix ricotta, beaten egg, half the parmesan cheese, salt, pepper.\n4. Assemble: Preheat oven 180°C (160°C fan). Grease baking dish (e.g., 23x33cm). Combine drained pasta with meat sauce (or plain marinara). Spread half the pasta mixture in dish. Dollop/spread ricotta mixture over. Sprinkle half the mozzarella. Top with remaining pasta mixture. Sprinkle remaining mozzarella and parmesan over top.\n5. Bake: Cover with foil. Bake 20 minutes. Remove foil, bake another 15-20 minutes until bubbly and cheese is golden.\n6. Rest & Serve: Let stand 10 minutes before serving.",
    tags: ["Italian-American", "Baked Pasta", "Pasta Bake", "Pasta", "Cheese", "Ricotta", "Mozzarella", "Comfort Food", "Family Favourite", "Dinner", "Casserole", "Vegetarian Option"] // Vegetarian if no meat
  },
   {
    id: 166,
    name: "Cacio e Pepe (Cheese and Pepper Pasta)",
    description: "A minimalist Roman pasta dish featuring Pecorino Romano cheese, black pepper, and starchy pasta water.",
    ingredients: [
        { quantity: "400g", name: "spaghetti, tonnarelli, or bucatini" },
        { quantity: "1.5 - 2 cups (approx 150-200g)", name: "Pecorino Romano cheese", prep: "very finely grated" },
        { quantity: "1 - 2 tbsp", name: "black peppercorns", prep: "coarsely cracked/ground" },
        { name: "salt", prep:"for pasta water"}
    ],
    ingredientKeywords: ["cacio e pepe", "pasta", "spaghetti", "tonnarelli", "pecorino romano", "pecorino", "cheese", "black pepper", "pepper", "roman", "italian", "simple", "classic", "minimalist", "vegetarian"],
    instructions: "1. Toast Pepper: Toast cracked black peppercorns in a large dry skillet over medium heat until fragrant (1-2 mins). Remove half the pepper, set aside for garnish.\n2. Cook Pasta: Cook pasta in well-salted water until al dente. Reserve 1.5 - 2 cups of starchy pasta water.\n3. Make Paste: Add about 1/2 cup hot pasta water to the skillet with the remaining pepper (off heat). Whisk vigorously to hydrate pepper. Let cool slightly. Add most of the grated Pecorino cheese to skillet, add another splash of pasta water. Whisk quickly into a smooth, thick paste.\n4. Combine: Drain pasta quickly, add directly to skillet with cheese paste. Toss vigorously, adding more hot pasta water a little at a time, until pasta is coated in a creamy, emulsified sauce. Work quickly off heat to prevent clumping.\n5. Serve: Serve immediately in warm bowls, garnished with remaining grated Pecorino and toasted black pepper.",
    tags: ["Italian", "Roman", "Pasta", "Classic", "Simple", "Minimalist", "Cheese", "Pecorino", "Pepper", "Vegetarian", "Dinner", "Quick Meal"]
  }
  // More Pasta dishes...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsPasta);