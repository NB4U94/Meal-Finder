// meals_chips.js (Combined)

const mealsChipsCombined = [
  {
    id: 91,
    name: "Fish and Chips",
    description: "Classic takeaway favourite: crispy battered fish served with thick-cut chips.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets", prep: "(cod, haddock, flathead, snapper, hoki)" },
        { quantity: "1.5 cups", name: "plain flour", prep: "(plus extra for dusting)" }, { quantity: "1.5 tsp", name: "baking powder" }, { quantity: "1 tsp", name: "salt" }, { quantity: "Approx 1.5 cups", name: "ice-cold beer or soda water" },
        { quantity: "1.2kg", name: "potatoes", prep: "(e.g., Sebago, Maris Piper), peeled & cut into thick chips" },
        { name: "vegetable oil", prep: "for deep frying" },
        { name: "lemon wedges", prep: "to serve" }, { name: "tartare sauce", prep: "to serve" }, { name: "malt vinegar", prep: "optional, to serve" }, { name: "salt", prep: "extra, for seasoning"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "haddock", "flathead", "snapper", "hoki", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "pub classic", "british", "aussie", "australian", "lemon", "tartare", "vinegar", "seafood"],
    instructions: "1. Prep Chips: Cut potatoes thick. Rinse, pat dry thoroughly.\n2. First Fry Chips: Heat oil (160°C). Cook chips batches 5-7 mins until soft, not coloured. Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Whisk in cold beer/soda water until thick.\n4. Prep Fish: Pat fish dry. Dust in extra flour.\n5. Fry Fish: Increase oil (190°C). Dip fish in batter. Fry batches 4-7 mins until golden & cooked. Drain.\n6. Second Fry Chips: Re-fry chips (190°C) for 2-4 mins until golden & crisp. Drain.\n7. Serve: Season chips. Serve immediately with fish, lemon, tartare, vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Aussie Favourite", "Dinner", "Family Favourite"]
  },
  {
    id: 92,
    name: "Steak and Chips",
    description: "A simple pub classic: grilled or pan-fried steak served with chips and optional sauce.",
    ingredients: [
        { quantity: "4", name: "beef steaks", prep: "(e.g., sirloin, rump, scotch fillet, approx 200-250g each)" },
        { quantity: "1 tbsp", name: "olive oil or vegetable oil" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "1kg", name: "potatoes", prep: "peeled and cut into chips" },
        { name: "vegetable oil", prep: "for frying chips (or use oven chips)" },
        // Optional Sauce (e.g., Peppercorn Sauce):
        { quantity: "1 tbsp", name: "butter" }, { quantity: "1", name: "shallot", prep:"finely chopped"}, { quantity: "1 tbsp", name: "brandy", prep:"optional"}, { quantity: "1/2 cup", name: "beef stock"}, { quantity: "1/4 cup", name: "cream"}, { quantity: "1 tbsp", name: "green peppercorns", prep:"crushed"},
        { name: "Optional sides:", prep:"salad, steamed vegetables" }
    ],
    ingredientKeywords: ["steak and chips", "steak", "beef", "sirloin", "rump", "scotch fillet", "chips", "fries", "potato", "grilled", "pan-fried", "pub classic", "british", "aussie", "peppercorn sauce", "diane sauce", "mushroom sauce", "garlic butter"],
    instructions: "1. Cook Chips: Cook chips using preferred method (deep fry twice for best results: 160°C until soft, drain, then 190°C until crisp; or bake oven chips per package).\n2. Cook Steak: Pat steaks dry, season generously. Heat oil in heavy-based pan over high heat. Cook steaks to desired doneness (e.g., 2-4 mins per side for medium-rare), turning once. Rest steaks on warm plate, loosely covered, for 5-10 mins.\n3. Make Optional Sauce (e.g., Peppercorn): In same pan, melt butter, sauté shallot. Deglaze with brandy (optional). Add stock, simmer. Add cream, peppercorns. Simmer until slightly thickened. Season.\n4. Serve: Slice rested steak (optional). Serve steak with hot chips and sauce (if made), and optional sides.",
    tags: ["Pub Classic", "Beef", "Steak", "Chips", "Dinner", "British", "Aussie Favourite", "Grilled", "Pan-Fried", "Simple"]
  },
  {
    id: 93,
    name: "Chicken Schnitzel with Chips and Salad",
    description: "Breaded chicken cutlet served with classic sides of chips and salad.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { name: "salt and pepper" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "breadcrumbs" }, { quantity: "4-6 tbsp", name: "oil for frying" },
        { quantity: "1kg", name: "potatoes", prep: "for chips (or use oven chips)" }, { name: "vegetable oil", prep: "for frying chips" },
        { name: "Mixed salad leaves" }, { name: "Tomato, cucumber, onion", prep:"for salad"}, { name: "Salad dressing" },
        { name: "lemon wedges", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken schnitzel", "schnitzel", "chicken", "chips", "fries", "salad", "breaded", "crumbed", "pan-fried", "pub food", "aussie", "german", "austrian", "dinner"],
    instructions: "1. Cook Chips: Cook chips using preferred method (deep fry or oven bake).\n2. Prepare Chicken: Pound chicken to 1-1.5cm thickness. Season.\n3. Crumb Chicken: Coat chicken in flour, then egg, then breadcrumbs.\n4. Fry Schnitzels: Heat oil (medium-high). Fry chicken 3-5 mins per side until golden and cooked. Drain.\n5. Prepare Salad: Combine salad ingredients, toss with dressing.\n6. Serve: Serve hot schnitzel with chips, salad, and lemon wedges.",
    tags: ["Chicken", "Schnitzel", "Chips", "Salad", "Pan-Fried", "Pub Classic", "Aussie Favourite", "European", "Dinner", "Family Favourite", "Simple"]
  },
   {
    id: 94,
    name: "Loaded Fries / Dirty Fries",
    description: "A pile of crispy chips topped with various indulgent ingredients like cheese sauce, bacon, chilli, or pulled pork.",
    ingredients: [
        { quantity: "1kg", name: "potatoes", prep: "cut into chips (or use frozen oven chips/fries)" },
        { name: "vegetable oil", prep: "for frying/baking" }, { name: "salt" },
        // Choose ONE Topping Example (or combine):
        // 1: Cheese & Bacon
        { quantity: "1 cup", name: "cheese sauce" }, { quantity: "6 slices", name: "bacon", prep: "cooked & crumbled" }, { name: "spring onions", prep: "sliced" },
        // 2: Chilli Cheese Fries
        // { quantity: "1-2 cups", name: "chilli con carne" }, { quantity: "1 cup", name: "cheddar cheese", prep: "grated" }, { name: "sour cream or jalapenos" },
        // 3: Pulled Pork
        // { quantity: "1-2 cups", name: "pulled pork" }, { name: "BBQ sauce drizzle" }, { name: "coleslaw"}
    ],
    ingredientKeywords: ["loaded fries", "dirty fries", "chips", "fries", "potato", "cheese sauce", "cheese", "bacon", "chilli con carne", "chilli", "pulled pork", "indulgent", "snack", "appetizer", "pub food", "american", "street food"],
    instructions: "1. Cook Chips: Cook chips until golden and crispy (deep fry or oven bake). Season immediately.\n2. Prepare Topping(s): While chips cook, prepare/heat your chosen topping(s).\n3. Assemble: Pile hot chips onto plates/platter.\n4. Load 'em Up: Generously spoon/pour chosen topping(s) over chips.\n5. Garnish: Add relevant garnishes.\n6. Serve: Serve immediately.",
    tags: ["Chips", "Fries", "Loaded Fries", "Indulgent", "Comfort Food", "Snack", "Appetizer", "Pub Food", "American", "Street Food", "Cheese", "Bacon", "Chilli", "Pulled Pork"]
  },
  {
    id: 95,
    name: "Homemade Thick-Cut Chips (Double or Triple Cooked)",
    description: "Perfecting the art of the chip: fluffy inside, crispy outside, cooked using multiple stages.",
    ingredients: [
        { quantity: "1.5kg", name: "potatoes", prep: "suitable for chipping (e.g., Maris Piper, Sebago)" },
        { name: "vegetable oil or beef dripping", prep: "for deep frying" },
        { name: "salt", prep: "to taste" }
    ],
    ingredientKeywords: ["chips", "fries", "thick cut chips", "double cooked chips", "triple cooked chips", "potato", "deep fried", "crispy", "fluffy", "british", "side dish", "homemade", "perfect chips"],
    instructions: "1. Peel & Cut: Peel potatoes, cut into thick chips (~1.5cm).\n2. Rinse/Soak (optional): Rinse/soak in cold water, drain thoroughly.\n3. Blanch (1st Cook): Heat oil (130°C-140°C). Cook chips batches 7-10 mins until soft but pale. Drain. Cool completely.\n4. Optional 2nd Blanch (Triple Cook): Cool blanched chips. Heat oil (160°C). Fry 3-5 mins until light crust forms. Drain. Cool completely.\n5. Final Fry (2nd/3rd Cook): Heat oil (180°C-190°C). Fry cooled, blanched chips batches 3-5 mins until deep golden & crispy.\n6. Drain & Season: Drain well. Season generously with salt immediately.\n7. Serve: Serve hot.",
    tags: ["Chips", "Fries", "Potato", "Side Dish", "Deep Fried", "Crispy", "British", "Homemade", "Comfort Food", "Vegan Option"] // (if using veg oil)
  },
  {
    id: 96,
    name: "Poutine (Canadian Loaded Fries)",
    description: "A Canadian favourite: French fries topped with fresh cheese curds and smothered in hot brown gravy.",
    ingredients: [
        { quantity: "1kg", name: "potatoes", prep: "cut into medium fries (or use frozen)" },
        { name: "vegetable oil", prep: "for frying" }, { name: "salt" },
        { quantity: "2 cups (approx 200-250g)", name: "fresh cheese curds", prep: "(room temperature)" },
        // Gravy:
        { quantity: "2 tbsp", name: "butter" }, { quantity: "2 tbsp", name: "plain flour" }, { quantity: "2 cups", name: "beef broth" }, { quantity: "1 cup", name: "chicken broth", prep:"optional" }, { quantity: "1-2 tsp", name: "cornflour slurry", prep: "optional" }, { name: "salt and pepper" }, { quantity:"dash", name:"worcestershire sauce", prep:"optional"}
    ],
    ingredientKeywords: ["poutine", "canadian", "chips", "fries", "potato", "cheese curds", "cheese", "gravy", "brown gravy", "comfort food", "indulgent", "street food", "quebec"],
    instructions: "1. Cook Fries: Cook fries until golden and crisp (deep fry preferred). Season.\n2. Make Gravy: Melt butter, whisk in flour (1 min). Whisk in broths. Simmer 5-10 mins until slightly thick. Thicken more with slurry if needed. Season.\n3. Assemble: Place hot fries in bowls. Scatter cheese curds over.\n4. Smother: Pour hot gravy generously over fries and curds.\n5. Serve: Serve immediately.",
    tags: ["Canadian", "Chips", "Fries", "Potato", "Cheese Curds", "Cheese", "Gravy", "Comfort Food", "Indulgent", "Street Food", "Poutine"]
  },
   {
    id: 97,
    name: "Seasoned Potato Wedges with Sour Cream and Sweet Chilli",
    description: "Thick potato wedges, baked or fried, often seasoned, served with sour cream and sweet chilli sauce.",
    ingredients: [
        { quantity: "1.2kg", name: "potatoes", prep: "scrubbed & cut into thick wedges" },
        { quantity: "2 tbsp", name: "olive oil or vegetable oil" },
        // Seasoning Mix (Example):
        { quantity: "1 tsp", name: "paprika" }, { quantity: "1/2 tsp", name: "garlic powder" }, { quantity: "1/2 tsp", name: "onion powder" }, { quantity: "1/4 tsp", name: "cayenne pepper", prep:"optional" }, { quantity: "1/2 tsp", name: "dried herbs"},
        { name: "salt and pepper" }, { name: "sour cream" }, { name: "sweet chilli sauce" }
    ],
    ingredientKeywords: ["potato wedges", "wedges", "potato", "baked potato", "fried potato", "seasoned", "paprika", "garlic", "sour cream", "sweet chilli sauce", "appetizer", "side dish", "snack", "pub food", "aussie", "chips"],
    instructions: "1. Prepare Wedges: Cut potatoes into thick wedges. Pat dry.\n2. Season: Preheat oven 200°C (180°C fan) if baking. Toss wedges with oil. Combine seasonings, salt, pepper. Sprinkle over wedges, toss to coat.\n3. Cook (Bake or Fry):\n    a) Baking: Spread on tray. Bake 30-45 mins, flipping, until golden & tender.\n    b) Frying: Heat oil (180°C). Fry batches 5-8 mins until golden & cooked. Drain.\n4. Serve: Serve hot wedges with sour cream and sweet chilli sauce.",
    tags: ["Potato", "Wedges", "Chips", "Baked", "Fried", "Seasoned", "Side Dish", "Appetizer", "Snack", "Pub Food", "Aussie Favourite", "Vegetarian", "Vegan Option"] // (ensure vegan sour cream)
  },
   {
    id: 98,
    name: "Salt and Vinegar Chips (Homemade)",
    description: "Homemade chips infused with the classic salt and vinegar flavour.",
    ingredients: [
        { quantity: "1.2kg", name: "potatoes" }, { name: "vegetable oil", prep: "for deep frying" }, { quantity: "1/2 cup", name: "malt vinegar" }, { quantity: "2 tbsp", name: "salt" }, { name: "Extra salt & vinegar", prep: "for serving"}
    ],
    ingredientKeywords: ["salt and vinegar chips", "chips", "fries", "potato", "vinegar", "malt vinegar", "salt", "deep fried", "homemade", "british", "takeaway flavour"],
    instructions: "1. Peel & Cut: Peel potatoes, cut thick chips.\n2. Vinegar Soak: Toss chips with 1/2 cup vinegar & 2 tbsp salt. Soak 30+ mins.\n3. Drain & Dry: Drain VERY thoroughly. Pat EXTREMELY dry.\n4. First Fry (Blanch): Heat oil (130°C-140°C). Fry batches 7-10 mins until soft but pale. Drain. Cool.\n5. Second Fry: Heat oil (180°C-190°C). Fry batches 3-5 mins until deep golden & crispy.\n6. Drain & Season: Drain well. Immediately sprinkle generously with more salt & vinegar.\n7. Serve: Serve hot.",
    tags: ["Chips", "Fries", "Potato", "Salt and Vinegar", "Vinegar", "Deep Fried", "Homemade", "British", "Side Dish", "Comfort Food", "Takeaway Flavour"]
  },
  {
    id: 99,
    name: "Ham, Egg and Chips",
    description: "A simple and satisfying British cafe and pub classic: sliced ham, fried eggs, and chips.",
    ingredients: [
        { quantity: "4-8 slices", name: "cooked ham", prep: "(thick cut preferred)" }, { quantity: "4", name: "large eggs" }, { quantity: "1kg", name: "potatoes", prep: "for chips" }, { name: "vegetable oil", prep: "for frying chips" }, { quantity: "1 tbsp", name: "butter or oil", prep: "for frying eggs" }, { name: "salt and pepper" }, { name: "optional condiments:", prep: "HP sauce, ketchup" }
    ],
    ingredientKeywords: ["ham egg and chips", "ham", "egg", "fried egg", "chips", "fries", "potato", "british", "pub food", "cafe food", "simple", "comfort food", "lunch", "dinner", "quick meal"],
    instructions: "1. Cook Chips: Cook chips until golden and crispy. Season.\n2. Cook Ham (optional): Warm ham slices if desired.\n3. Fry Eggs: Heat butter/oil. Fry eggs to preference.\n4. Assemble: Arrange ham and eggs alongside hot chips on plates.\n5. Serve: Serve immediately with condiments.",
    tags: ["British", "Pub Food", "Cafe Food", "Simple", "Comfort Food", "Ham", "Egg", "Chips", "Lunch", "Dinner", "Quick Meal"]
  },
  {
    id: 100,
    name: "Pie and Chips",
    description: "A hearty meal featuring a savoury pie (like steak and kidney, chicken and mushroom, or meat pie) served with chips.",
    ingredients: [
        { quantity: "4", name: "individual savoury pies", prep: "(store-bought or homemade)" }, { quantity: "1kg", name: "potatoes", prep: "for chips" }, { name: "vegetable oil", prep: "for frying chips" }, { name: "salt" }, { name: "optional:", name: "gravy" }, { name: "optional:", name: "mushy peas" }
    ],
    ingredientKeywords: ["pie and chips", "pie", "steak pie", "chicken pie", "meat pie", "chips", "fries", "potato", "british", "pub food", "comfort food", "dinner", "lunch", "gravy"],
    instructions: "1. Cook Chips: Cook chips until golden and crispy. Season.\n2. Heat Pie: Heat pies according to instructions.\n3. Prepare Optional Sides: Make gravy or heat peas if using.\n4. Serve: Place hot pie and chips on plate. Serve with optional sides.",
    tags: ["British", "Pub Food", "Comfort Food", "Pie", "Beef", "Chicken", "Chips", "Dinner", "Lunch", "Winter Warmer"]
  },
  {
    id: 101,
    name: "Sweet Potato Fries/Chips",
    description: "A popular alternative to regular potato chips, often baked.",
    ingredients: [
        { quantity: "4 large (approx 1.2kg)", name: "sweet potatoes", prep: "cut into fries/chips" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1/2 tsp", name: "paprika", prep: "optional" }, { quantity: "1/4 tsp", name: "garlic powder", prep: "optional" }, { name: "Optional dipping sauce:", prep: "aioli" }
    ],
    ingredientKeywords: ["sweet potato fries", "sweet potato chips", "sweet potato", "fries", "chips", "baked", "fried", "healthy option", "vegetarian", "vegan", "side dish", "snack"],
    instructions: "1. Prepare Sweet Potatoes: Cut into fries (~1cm thick).\n2. Season: Preheat oven 200°C (180°C fan) if baking. Toss fries with oil, salt, optional seasonings.\n3. Cook (Bake or Fry):\n    a) Baking: Spread on tray. Bake 20-30 mins, flipping, until tender & slightly crisped.\n    b) Frying: Heat oil (175°C). Fry batches 4-6 mins until cooked & lightly browned. Drain.\n4. Serve: Serve hot with dipping sauce.",
    tags: ["Side Dish", "Snack", "Appetizer", "Sweet Potato", "Chips", "Fries", "Baked", "Fried", "Healthy Option", "Vegetarian", "Vegan", "Gluten Free"]
  },
  {
    id: 102,
    name: "Chips with Curry Sauce",
    description: "A popular British takeaway combination: chips smothered in a mild, slightly sweet curry sauce.",
    ingredients: [
        { quantity: "1kg", name: "potatoes", prep: "for chips" }, { name: "vegetable oil", prep: "for frying" }, { name: "salt" },
        // Curry Sauce (Simple):
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion", prep:"chopped"}, { quantity: "1 clove", name: "garlic", prep:"minced"}, { quantity: "1-2 tbsp", name: "mild curry powder"}, { quantity: "1 tbsp", name: "flour"}, { quantity: "2 cups", name: "stock"}, { quantity: "1 tsp", name: "sugar", prep:"opt."}, { quantity: "dash", name:"soy sauce", prep:"opt."}, { name: "salt"}
        // OR use store-bought chip shop style curry sauce mix
    ],
    ingredientKeywords: ["chips and curry sauce", "chips", "fries", "curry sauce", "curry", "takeaway", "british", "chip shop", "comfort food", "snack", "potato"],
    instructions: "1. Cook Chips: Cook chips until golden and crisp. Season.\n2. Make Curry Sauce: Sauté onion, add garlic. Stir in curry powder, then flour. Whisk in stock. Simmer 5-10 mins until thick. Add optional sugar/soy. Season.\n3. Serve: Pour hot curry sauce over hot chips.",
    tags: ["British", "Takeaway Classic", "Chips", "Fries", "Curry Sauce", "Comfort Food", "Snack", "Side Dish", "Chip Shop", "Vegetarian Option"] // (if using veg stock)
  },
  {
    id: 103,
    name: "Cheesy Chips",
    description: "Simple yet satisfying: hot chips topped with melted grated cheese.",
    ingredients: [
        { quantity: "1kg", name: "potatoes", prep: "for chips" }, { name: "vegetable oil", prep: "for frying" }, { name: "salt" },
        { quantity: "1.5 - 2 cups", name: "cheddar cheese", prep: "grated" }
    ],
    ingredientKeywords: ["cheesy chips", "chips", "fries", "cheese", "cheddar", "melted cheese", "takeaway", "pub food", "comfort food", "snack", "side dish", "simple", "vegetarian"],
    instructions: "1. Cook Chips: Cook chips until golden and crisp. Season.\n2. Add Cheese: Place hot chips on ovenproof plates/tray. Sprinkle cheese over.\n3. Melt Cheese: Grill/broil or bake briefly until cheese melts.\n4. Serve: Serve immediately.",
    tags: ["Snack", "Side Dish", "Comfort Food", "Simple", "Cheese", "Cheddar", "Chips", "Fries", "Takeaway Classic", "Pub Food", "Vegetarian", "Kid Friendly"]
  },
  {
    id: 104,
    name: "Steak Frites (French style Steak and Fries)",
    description: "French bistro classic: pan-seared steak served with thin-cut French fries and often garlic butter.",
    ingredients: [
        { quantity: "4", name: "steaks", prep: "(bavette, sirloin - thinner cut), ~180-200g each" }, { quantity: "1 tbsp", name: "butter" }, { quantity: "1 tbsp", name: "oil" }, { name: "salt and pepper" },
        { quantity: "1kg", name: "potatoes", prep: "cut into thin fries" }, { name: "vegetable oil", prep: "for deep frying" },
        // Optional Garlic Butter:
        { quantity: "50g", name: "butter", prep:"softened"}, { quantity: "1-2 cloves", name: "garlic", prep:"crushed"}, { quantity: "1 tbsp", name: "parsley", prep:"chopped"}
    ],
    ingredientKeywords: ["steak frites", "steak", "beef", "frites", "fries", "chips", "french", "bistro", "pan-fried", "garlic butter", "thin cut fries", "simple", "classic"],
    instructions: "1. Cook Fries: Deep fry thin fries (double fry recommended). Season.\n2. Make Garlic Butter (optional): Mash softened butter, garlic, parsley.\n3. Cook Steak: Pat dry, season. Heat butter & oil (medium-high). Cook steaks quickly. Rest.\n4. Serve: Serve hot steak with fries. Top steak with garlic butter (if using).",
    tags: ["French", "Bistro", "Steak", "Beef", "Fries", "Chips", "Dinner", "Classic", "Simple", "Pan-Fried", "Garlic Butter"]
  },
   {
    id: 105,
    name: "Chips Butty / Chip Barm / Chip Cob",
    description: "A British carb-on-carb classic: hot chips served inside a buttered bread roll or bap.",
    ingredients: [
        { quantity: "Generous portion", name: "hot chips" }, { quantity: "4", name: "soft bread rolls or baps" }, { name: "butter or margarine" }, { name: "salt" }, { name: "optional:", name: "ketchup, brown sauce, vinegar" }
    ],
    ingredientKeywords: ["chip butty", "chip barm", "chip cob", "chips", "fries", "bread roll", "bap", "sandwich", "british", "comfort food", "simple", "carb loading", "snack", "lunch", "takeaway"],
    instructions: "1. Prepare Roll: Split roll, butter inside surfaces.\n2. Fill: Pile hot chips onto bottom half.\n3. Season/Sauce: Add salt (& optional vinegar/sauce).\n4. Close & Serve: Add top half. Serve immediately.",
    tags: ["British", "Comfort Food", "Simple", "Snack", "Lunch", "Takeaway Classic", "Chips", "Fries", "Bread Roll", "Carb Heavy", "Vegetarian"]
  },
  {
    id: 106,
    name: "Moules Frites (Mussels and Fries)",
    description: "A Belgian classic: steamed mussels served with fries for dipping.",
    ingredients: [
        { quantity: "2kg", name: "fresh mussels", prep: "cleaned" }, // Broth:
        { quantity: "2 tbsp", name: "butter/oil" }, { quantity: "1", name: "shallot/onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 cup", name: "dry white wine" }, { quantity: "1/2 cup", name: "stock", prep: "optional" }, { quantity: "1/2 cup", name: "parsley", prep: "chopped" }, { name: "black pepper" }, // Fries:
        { quantity: "1kg", name: "potatoes", prep: "cut into thin fries" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "salt" }
    ],
    ingredientKeywords: ["moules frites", "mussels", "fries", "chips", "belgian", "french", "seafood", "shellfish", "white wine", "garlic", "steamed", "classic", "bistro"],
    instructions: "1. Cook Fries: Double fry thin fries until crisp. Season.\n2. Prepare Broth Base: Sauté shallot/onion in butter/oil. Add garlic.\n3. Steam Mussels: Add wine (& stock). Boil. Add mussels. Cover. Steam 4-6 mins until open (discard unopened).\n4. Finish: Stir in most parsley. Season broth.\n5. Serve: Ladle mussels & broth into bowls. Garnish. Serve with fries.",
    tags: ["Belgian", "French", "Seafood", "Mussels", "Shellfish", "Fries", "Chips", "White Wine", "Garlic", "Dinner", "Classic", "Bistro", "European"]
  }
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsChipsCombined); // Renamed variable for clarity