// meals_pub_classic.js

const mealsPubClassic = [
  {
    id: 167,
    name: "Chicken Parmigiana (Parma/Parmi)",
    description: "The ultimate Aussie pub classic: crispy chicken schnitzel topped with Napoli sauce and melted cheese, served with chips and salad.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "panko breadcrumbs" }, { quantity: "4 tbsp", name: "olive oil" }, { quantity: "1 cup", name: "Napoli sauce" }, { quantity: "4 slices", name: "ham", prep: "optional" }, { quantity: "1.5 cups", name: "mozzarella cheese", prep: "grated" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated" },
        { quantity: "Serve with:", name: "hot chips" }, { quantity: "Serve with:", name: "garden salad" }
    ],
    ingredientKeywords: ["chicken", "chicken breast", "schnitzel", "parma", "parmi", "parmigiana", "bread crumbs", "panko", "cheese", "mozzarella", "parmesan", "napoli sauce", "ham", "pub", "pub classic", "aussie", "australian", "italian inspired", "dinner", "comfort food", "chips", "salad"],
    instructions: "1. Prep/Crumb Chicken: Pound chicken (1.5cm). Coat in flour, then egg, then breadcrumbs.\n2. Cook Schnitzels: Heat oil, cook chicken 3-4 mins per side until golden. Drain.\n3. Assemble: Place schnitzels in oven dish. Top with ham, Napoli sauce, mozzarella, parmesan.\n4. Bake: Bake 180°C (160°C fan) for 10-15 mins until cheese melts.\n5. Serve: Serve immediately with hot chips and salad.",
    tags: ["Pub Classic", "Chicken", "Schnitzel", "Cheese", "Aussie Favourite", "Italian Inspired", "Dinner", "Family Favourite", "Comfort Food", "Chips"]
  },
  {
    id: 168,
    name: "Fish and Chips",
    description: "Classic pub fare: crispy beer-battered fish served with thick-cut chips, lemon, and tartare sauce.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets" }, { quantity: "1.5 cups", name: "plain flour", prep:"(+ extra)" }, { quantity: "1.5 tsp", name: "baking powder" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1.5 cups", name: "ice-cold beer/soda water" }, { quantity: "1.2kg", name: "potatoes", prep:"cut thick chips" }, { name: "vegetable oil", prep:"for deep frying" }, { name: "lemon wedges" }, { name: "tartare sauce" }, { name: "malt vinegar", prep:"opt." }, { name: "salt", prep:"extra"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "haddock", "snapper", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "pub classic", "british", "aussie", "seafood", "dinner", "lemon", "tartare"],
    instructions: "1. Prep Chips: Cut potatoes, rinse, dry well.\n2. First Fry Chips: Oil 160°C. Fry chips 5-7 mins (soft, pale). Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Whisk in beer/soda water.\n4. Prep Fish: Pat dry. Dust in flour.\n5. Fry Fish: Oil 190°C. Dip fish in batter. Fry batches 4-7 mins (golden, cooked). Drain.\n6. Second Fry Chips: Re-fry chips (190°C) 2-4 mins (golden, crisp). Drain.\n7. Serve: Season chips. Serve hot with fish, lemon, tartare, vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Aussie Favourite", "Dinner", "Family Favourite"]
  },
  {
    id: 169,
    name: "Steak and Chips",
    description: "A staple pub meal: grilled or pan-fried steak served with chips and optional sauce (peppercorn, mushroom, diane).",
    ingredients: [
        { quantity: "4", name: "beef steaks", prep: "(sirloin, rump, scotch fillet, ~200-250g each)" }, { quantity: "1 tbsp", name: "oil" }, { name: "salt and pepper" },
        { quantity: "1kg", name: "potatoes", prep: "for chips" }, { name: "vegetable oil", prep: "for frying chips" },
        // Optional Sauce: Peppercorn
        { quantity: "1 tbsp", name: "butter" }, { quantity: "1", name: "shallot", prep:"chopped"}, { quantity: "1 tbsp", name: "brandy", prep:"opt."}, { quantity: "1/2 cup", name: "beef stock"}, { quantity: "1/4 cup", name: "cream"}, { quantity: "1 tbsp", name: "green peppercorns", prep:"crushed"},
        { name: "Optional sides:", prep:"salad, coleslaw, steamed veg" }
    ],
    ingredientKeywords: ["steak and chips", "steak", "beef", "sirloin", "rump", "scotch fillet", "chips", "fries", "potato", "grilled", "pan-fried", "pub classic", "british", "aussie", "peppercorn sauce", "diane sauce", "mushroom sauce", "garlic butter", "dinner"],
    instructions: "1. Cook Chips: Cook chips (deep fry or oven bake).\n2. Cook Steak: Pat dry, season. Heat oil in pan (high heat). Cook steak to desired doneness. Rest 5-10 mins.\n3. Make Optional Sauce: Use pan drippings. Sauté shallot, deglaze (brandy opt.), add stock, simmer, add cream & peppercorns, reduce slightly. Season.\n4. Serve: Serve rested steak with hot chips and sauce (if made).",
    tags: ["Pub Classic", "Beef", "Steak", "Chips", "Dinner", "British", "Aussie Favourite", "Grilled", "Pan-Fried", "Simple"]
  },
  {
    id: 170,
    name: "Beef Burger with the Lot",
    description: "An Aussie pub-style burger piled high with beef patty, cheese, bacon, egg, beetroot, pineapple, lettuce, tomato, and onion.",
    ingredients: [
        // Patty:
        { quantity: "500g", name: "beef mince" }, { quantity: "1", name: "onion", prep: "finely chopped" }, { quantity: "1", name: "egg" }, { quantity: "1/4 cup", name: "breadcrumbs" }, { name: "salt and pepper" },
        // Assembly (for 4 burgers):
        { quantity: "4", name: "burger buns" }, { quantity: "4 slices", name: "cheddar cheese" }, { quantity: "4-8 slices", name: "bacon", prep:"cooked" }, { quantity: "4", name: "eggs", prep:"fried" }, { quantity: "4 slices", name: "canned beetroot" }, { quantity: "4 rings", name: "canned pineapple", prep:"grilled optional" }, { name: "Lettuce leaves" }, { name: "Tomato slices" }, { name: "Onion rings", prep:"raw or cooked" }, { name: "Sauces:", prep: "ketchup, BBQ sauce" }
    ],
    ingredientKeywords: ["burger", "beef burger", "burger with the lot", "aussie burger", "beef mince", "bacon", "egg", "beetroot", "pineapple", "cheese", "pub food", "aussie", "australian", "bbq", "grilled", "pan-fried", "chips optional", "lunch", "dinner"],
    instructions: "1. Make Patties: Combine patty ingredients, form 4 patties.\n2. Cook Components: Cook patties (grill/pan-fry). Cook bacon. Fry eggs. Grill pineapple (opt.).\n3. Assemble: Toast buns (opt.). Layer bun base, lettuce, tomato, onion, patty, cheese (melt on patty), beetroot, pineapple, bacon, fried egg, sauce, bun top.\n4. Serve: Serve immediately, often with chips.",
    tags: ["Pub Classic", "Burger", "Beef", "Aussie Favourite", "Australian", "Bacon", "Egg", "Beetroot", "Pineapple", "Cheese", "Dinner", "Lunch", "Indulgent", "Chips Optional"]
  },
  {
    id: 171,
    name: "Bangers and Mash",
    description: "Classic British comfort food: sausages served with mashed potatoes and rich onion gravy.",
    ingredients: [
        { quantity: "8", name: "pork sausages", prep: "(e.g., Cumberland)" },
        { quantity: "1.2kg", name: "potatoes" }, { quantity: "1/4 cup", name: "milk", prep: "warm" }, { quantity: "50g", name: "butter" }, { name: "salt and white pepper" },
        // Onion Gravy:
        { quantity: "1 tbsp", name: "oil/dripping" }, { quantity: "2", name: "onions", prep: "thinly sliced" }, { quantity: "1 tbsp", name: "plain flour" }, { quantity: "2 cups", name: "beef stock", prep: "hot" }, { quantity: "1 tsp", name: "worcestershire sauce", prep:"opt." }, { quantity: "1 tsp", name: "balsamic vinegar/brown sauce", prep:"opt." }
    ],
    ingredientKeywords: ["bangers and mash", "sausages", "mashed potato", "potato", "gravy", "onion gravy", "british", "pub classic", "comfort food", "pork", "cumberland", "onion", "dinner", "winter warmer"],
    instructions: "1. Make Mash: Boil potatoes until tender. Drain. Mash with warm milk, butter, salt, pepper. Keep warm.\n2. Cook Sausages: Grill, bake, or pan-fry sausages until cooked & browned (15-20 mins).\n3. Make Onion Gravy: Cook sliced onions in oil slowly until caramelized (15-20 mins). Stir in flour (1 min). Whisk in hot stock. Add optional sauces. Simmer 5-10 mins until thick. Season.\n4. Serve: Serve sausages with mash, smothered in onion gravy.",
    tags: ["British", "Pub Classic", "Comfort Food", "Sausages", "Pork", "Potato", "Mashed Potato", "Gravy", "Onion Gravy", "Dinner", "Winter Warmer"]
  },
   {
    id: 172,
    name: "Chicken Schnitzel Burger",
    description: "A crispy chicken schnitzel served in a burger bun with lettuce, tomato, cheese, and mayonnaise.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets", prep:"prepared as schnitzels (see #167)" },
        { quantity: "4", name: "burger buns" },
        { name: "Mayonnaise" },
        { name: "Lettuce leaves" },
        { name: "Tomato slices" },
        { quantity: "4 slices", name: "cheese", prep: "(cheddar or swiss, optional)" },
        { name: "Optional:", prep:"bacon, avocado"}
    ],
    ingredientKeywords: ["chicken burger", "schnitzel burger", "chicken schnitzel", "chicken", "burger", "schnitzel", "pub food", "aussie", "lunch", "dinner", "sandwich", "mayonnaise", "cheese", "chips optional"],
    instructions: "1. Cook Schnitzels: Prepare and cook chicken schnitzels until golden and cooked through. Drain.\n2. Assemble Burger: Toast buns (optional). Spread mayonnaise on bun base. Layer lettuce, tomato, hot chicken schnitzel, cheese slice (if using, let it melt slightly on hot chicken), optional bacon/avocado, bun top.\n3. Serve: Serve immediately, often with chips.",
    tags: ["Pub Classic", "Burger", "Chicken", "Schnitzel", "Aussie Favourite", "Dinner", "Lunch", "Comfort Food", "Kid Friendly", "Chips Optional"]
  },
  {
    id: 173,
    name: "Steak Sandwich with the Lot",
    description: "Grilled steak served in toasted bread or roll with cheese, bacon, egg, onion, lettuce, tomato, and beetroot.",
    ingredients: [
        { quantity: "4", name: "thin beef steaks", prep: "(e.g., minute steak, rump, ~150g each)" },
        { quantity: "4 slices", name: "bread or 4 rolls/buns" },
        { quantity: "1 tbsp", name: "oil or butter" }, { name: "salt and pepper" },
        { quantity: "1", name: "onion", prep:"sliced and caramelized (optional)" },
        { quantity: "4 slices", name: "cheese" }, { quantity: "4-8 slices", name: "bacon", prep:"cooked" }, { quantity: "4", name: "eggs", prep:"fried" }, { quantity: "4 slices", name: "canned beetroot" },
        { name: "Lettuce leaves" }, { name: "Tomato slices" },
        { name: "Sauces:", prep: "BBQ sauce, tomato relish, aioli" }
    ],
    ingredientKeywords: ["steak sandwich", "steak", "beef", "sandwich", "pub food", "aussie", "australian", "bacon", "egg", "beetroot", "cheese", "caramelized onion", "lunch", "dinner", "chips optional"],
    instructions: "1. Cook Steak: Season steak. Cook quickly in hot oiled pan/grill to desired doneness. Rest briefly.\n2. Cook Extras: Caramelize onion (if using), cook bacon, fry eggs.\n3. Toast Bread/Bun (optional).\n4. Assemble: Spread sauces on bread/bun. Layer lettuce, tomato, steak, cheese (melt on steak), beetroot, bacon, egg, caramelized onion.\n5. Serve: Close sandwich/bun. Serve immediately, often with chips.",
    tags: ["Pub Classic", "Steak", "Beef", "Sandwich", "Aussie Favourite", "Australian", "Bacon", "Egg", "Beetroot", "Cheese", "Lunch", "Dinner", "Comfort Food", "Chips Optional"]
  },
  {
    id: 174,
    name: "Ploughman's Lunch",
    description: "A traditional British pub lunch platter, typically including cheese, bread, pickles, chutney, and often ham.",
    ingredients: [
        { quantity: "Serve per person:", name:"Wedge(s) cheese (Cheddar, Stilton etc.)"}, { name: "Crusty bread or roll" }, { name: "Pickled onions" }, { name: "Chutney (Branston etc.)" }, { name: "Butter" }, { name: "Optional:", prep:"Sliced ham, pork pie wedge, apple slices, celery, salad leaves" }
    ],
    ingredientKeywords: ["ploughmans lunch", "ploughmans", "cheese", "cheddar", "stilton", "bread", "pickle", "pickled onions", "chutney", "ham", "pork pie", "british", "pub food", "lunch", "platter", "no-cook", "cold meal", "traditional"],
    instructions: "1. Arrange Platter: Arrange generous portions of cheese, bread, pickles, chutney on plate/platter.\n2. Add Extras: Include optional ham, pie, apple, celery etc.\n3. Serve: Serve with butter for the bread. No cooking needed.",
    tags: ["British", "Pub Food", "Lunch", "Platter", "No-Cook", "Cold Meal", "Cheese", "Cheddar", "Pickle", "Chutney", "Simple", "Traditional", "Pub Classic"]
  },
   {
    id: 175,
    name: "Meat Pie and Chips",
    description: "A classic Aussie meat pie served with hot chips, often with tomato sauce.",
    ingredients: [
        { quantity: "4", name: "individual meat pies", prep: "(store-bought or homemade)" },
        { quantity: "1kg", name: "potatoes", prep: "for chips (or use oven chips)" },
        { name: "vegetable oil", prep: "for frying chips" }, { name: "salt" },
        { name: "Tomato sauce (ketchup)", prep: "to serve" }
    ],
    ingredientKeywords: ["meat pie and chips", "meat pie", "pie", "beef pie", "chips", "fries", "potato", "aussie", "australian", "pub food", "bakery food", "comfort food", "lunch", "dinner", "simple", "tomato sauce"],
    instructions: "1. Cook Chips: Cook chips until golden and crispy. Season.\n2. Heat Pie: Heat pies according to instructions.\n3. Serve: Place hot pie and chips on plate. Serve with plenty of tomato sauce.",
    tags: ["Pub Classic", "Aussie Favourite", "Meat Pie", "Beef", "Pie", "Chips", "Comfort Food", "Simple", "Lunch", "Dinner", "Takeaway Style"]
  },
  {
    id: 176,
    name: "Loaded Fries / Dirty Fries",
    description: "Indulgent crispy chips topped with cheese sauce, bacon, chilli, or other pub favourites.",
    ingredients: [
        { quantity: "1kg", name: "potatoes for chips / frozen fries" }, { name: "oil for frying/baking" }, { name: "salt" },
        // Example Topping: Cheese & Bacon
        { quantity: "1 cup", name: "cheese sauce" }, { quantity: "6 slices", name: "bacon", prep: "cooked & crumbled" }, { name: "spring onions", prep: "sliced" }
        // Other options: Chilli Con Carne & Cheese, Pulled Pork & BBQ Sauce
    ],
    ingredientKeywords: ["loaded fries", "dirty fries", "chips", "fries", "potato", "cheese sauce", "cheese", "bacon", "chilli", "pulled pork", "indulgent", "snack", "appetizer", "pub food", "american", "street food"],
    instructions: "1. Cook Chips: Cook chips until crispy. Season.\n2. Prepare Topping(s): Prepare/heat chosen toppings.\n3. Assemble: Pile hot chips on platter/plates.\n4. Load: Spoon/pour toppings over chips.\n5. Garnish & Serve: Add garnishes. Serve immediately.",
    tags: ["Chips", "Fries", "Loaded Fries", "Indulgent", "Comfort Food", "Snack", "Appetizer", "Pub Food", "American", "Street Food", "Cheese", "Bacon", "Pub Classic"] // Considered a modern pub classic item
  },
  {
    id: 177,
    name: "Salt and Pepper Squid",
    description: "Crispy deep-fried squid seasoned with salt, pepper, chilli, and garlic - a popular pub appetizer.",
    ingredients: [
        { quantity: "500g", name: "squid", prep: "cleaned, scored & cut" }, // Coating:
        { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "rice flour" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1 tsp", name: "white pepper"}, { quantity: "1/2 tsp", name: "five spice", prep:"opt."}, { quantity: "1", name: "egg white", prep:"opt."}, { name: "vegetable oil", prep: "for deep frying" }, // Garnish:
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1-2", name: "red chillies", prep:"sliced" }, { quantity: "3 cloves", name: "garlic", prep:"chopped" }, { quantity: "2", name: "spring onions", prep:"sliced" }, { quantity: "1/2 tsp", name: "Sichuan peppercorns", prep:"ground, opt."}
    ],
    ingredientKeywords: ["salt and pepper squid", "salt and chilli squid", "squid", "calamari", "chinese", "cantonese", "deep fried", "crispy", "spicy", "seafood", "appetizer", "pub food", "takeaway"],
    instructions: "1. Prepare Squid: Pat dry. Toss with optional egg white.\n2. Make Coating: Combine flours, salt, pepper, five spice.\n3. Coat Squid: Toss squid in coating.\n4. Deep Fry: Heat oil (180°C). Fry squid batches 2-4 mins until crispy. Drain.\n5. Stir-fry Garnish: Heat 1 tbsp oil. Stir-fry chilli, garlic, spring onion whites, Sichuan pepper (opt.) 30-60 secs.\n6. Combine: Return squid to wok. Add green spring onions. Toss quickly.\n7. Serve: Serve immediately.",
    tags: ["Chinese", "Cantonese", "Seafood", "Squid", "Deep Fried", "Crispy", "Spicy", "Appetizer", "Takeaway Classic", "Asian Inspired", "Party Food", "Pub Classic"] // Popular Pub Appetizer
  },
  {
    id: 178,
    name: "Wedges with Sour Cream and Sweet Chilli",
    description: "Thick seasoned potato wedges served with classic pub dipping sauces.",
    ingredients: [
        { quantity: "1.2kg", name: "potatoes", prep: "scrubbed & cut into thick wedges" }, { quantity: "2 tbsp", name: "olive oil" },
        // Seasoning Mix (Example):
        { quantity: "1 tsp", name: "paprika" }, { quantity: "1/2 tsp", name: "garlic powder" }, { quantity: "1/2 tsp", name: "onion powder" }, { quantity: "1/2 tsp", name: "dried herbs"}, { name: "salt and pepper" },
        // To Serve:
        { name: "sour cream" }, { name: "sweet chilli sauce" }
    ],
    ingredientKeywords: ["potato wedges", "wedges", "potato", "baked potato", "fried potato", "seasoned", "paprika", "garlic", "sour cream", "sweet chilli sauce", "appetizer", "side dish", "snack", "pub food", "aussie", "chips"],
    instructions: "1. Prepare Wedges: Cut potatoes into thick wedges. Pat dry.\n2. Season: Preheat oven 200°C (180°C fan) if baking. Toss wedges with oil. Combine seasonings, salt, pepper. Sprinkle over wedges, toss.\n3. Cook (Bake or Fry):\n    a) Baking: Spread on tray. Bake 30-45 mins, flipping, until golden & tender.\n    b) Frying: Heat oil (180°C). Fry batches 5-8 mins until golden & cooked. Drain.\n4. Serve: Serve hot wedges with sour cream and sweet chilli sauce.",
    tags: ["Potato", "Wedges", "Chips", "Baked", "Fried", "Seasoned", "Side Dish", "Appetizer", "Snack", "Pub Food", "Aussie Favourite", "Vegetarian", "Vegan Option", "Pub Classic"]
  }
  // More Pub Classics could be added... Gammon Steak, Mixed Grill etc.
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsPubClassic);