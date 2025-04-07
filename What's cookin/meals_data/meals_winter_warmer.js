// meals_winter_warmer.js

const mealsWinterWarmer = [
  {
    id: 251,
    name: "Shepherd's Pie / Cottage Pie",
    description: "Comforting savoury mince (lamb or beef) topped with creamy mashed potato, perfect for a cold night.",
    ingredients: [
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2", name: "carrots", prep: "diced" }, { quantity: "2 sticks", name: "celery", prep: "diced" }, { quantity: "500g", name: "lamb or beef mince" }, { quantity: "2 tbsp", name: "flour" }, { quantity: "1.5 cups", name: "stock" }, { quantity: "2 tbsp", name: "tomato paste" }, { quantity: "1 tbsp", name: "worcestershire sauce" }, { quantity: "1 tsp", name: "herbs" }, { quantity: "1/2 cup", name: "peas/corn", prep:"opt." }, { name: "salt and pepper" },
        { quantity: "1kg", name: "potatoes" }, { quantity: "1/4 cup", name: "milk" }, { quantity: "50g", name: "butter" }, { name: "cheese", prep: "grated, opt." }
    ],
    ingredientKeywords: ["shepherds pie", "cottage pie", "lamb", "beef", "mince", "potato", "mashed potato", "comfort food", "british", "irish", "aussie", "family meal", "winter warmer", "pie", "kid friendly", "dinner", "casserole"],
    instructions: "1. Sauté Veggies.\n2. Brown Mince, drain.\n3. Make Gravy: Stir in flour. Add stock, paste, worcestershire, herbs. Simmer until thick. Season.\n4. Simmer Filling 15-20 mins. Add peas/corn.\n5. Make Mash: Boil potatoes. Mash with milk, butter. Season.\n6. Assemble: Preheat oven 190°C. Filling in dish. Top with mash. Add cheese (opt.).\n7. Bake 25-30 mins until golden.\n8. Serve: Rest 5 mins.",
    tags: ["Comfort Food", "Beef", "Lamb", "Mince", "Potato", "British", "Irish", "Aussie Favourite", "Family Favourite", "Winter Warmer", "Dinner", "Pie", "Kid Friendly", "Casserole"]
  },
  {
    id: 252,
    name: "Classic Lasagne al Forno",
    description: "Layers of rich beef ragu, creamy béchamel sauce, pasta sheets, and cheese, baked until golden. Ultimate winter comfort.",
    ingredients: [
        // Ragu:
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion" }, { quantity: "1", name: "carrot" }, { quantity: "1", name: "celery" }, { quantity: "500g", name: "beef mince" }, { quantity: "1/2 cup", name: "red wine", prep:"opt." }, { quantity: "400g can", name: "crushed tomatoes" }, { quantity: "1 cup", name: "stock/milk" }, { quantity: "1 tsp", name: "oregano" }, { name: "salt & pepper" },
        // Béchamel:
        { quantity: "60g", name: "butter" }, { quantity: "1/2 cup", name: "flour" }, { quantity: "3 cups", name: "milk", prep:"warm" }, { quantity: "pinch", name: "nutmeg" }, { name: "salt & white pepper" },
        // Assembly:
        { quantity: "9-12 sheets", name: "dried lasagne pasta sheets" }, { quantity: "1 cup", name: "parmesan cheese", prep: "grated" }, { quantity: "1 cup", name: "mozzarella cheese", prep: "grated, opt."}
    ],
    ingredientKeywords: ["lasagne", "lasagna", "baked pasta", "pasta", "beef", "mince", "ragu", "bolognese", "bechamel", "white sauce", "cheese", "parmesan", "mozzarella", "italian", "comfort food", "family favourite", "dinner", "baked", "winter warmer", "casserole"],
    instructions: "1. Make Ragu: Sauté chopped veg. Brown mince. Add wine (opt.), reduce. Add tomatoes, stock/milk, oregano. Season. Simmer 30+ mins.\n2. Make Béchamel: Melt butter, whisk in flour. Whisk in warm milk until thick. Season (nutmeg, salt, pepper).\n3. Assemble: Preheat oven 180°C. Grease dish. Layer: ragu, pasta, béchamel, ragu, parmesan. Repeat, finish pasta, béchamel, cheeses.\n4. Bake: Bake 35-45 mins until golden & bubbly.\n5. Rest & Serve: Rest 10-15 mins.",
    tags: ["Italian", "Pasta", "Baked Pasta", "Beef", "Mince", "Ragu", "Bechamel", "Cheese", "Comfort Food", "Family Favourite", "Dinner", "Winter Warmer", "Casserole"]
  },
  {
    id: 253,
    name: "Spaghetti Bolognese",
    description: "Rich, slowly simmered beef mince sauce served with spaghetti - deeply comforting.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "1", name: "carrot" }, { quantity: "1 stick", name: "celery" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "400g can", name: "diced tomatoes" }, { quantity: "1/2 cup", name: "beef stock/red wine" }, { quantity: "1 tsp", name: "oregano" }, { quantity: "1/2 tsp", name: "basil" }, { quantity: "400g", name: "spaghetti" }, { name: "parmesan cheese" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["spaghetti", "bolognese", "pasta", "beef", "beef mince", "mince", "ragu", "tomato", "italian", "comfort food", "family favourite", "dinner", "weeknight dinner", "kid friendly", "winter warmer"],
    instructions: "1. Sauté Veggies.\n2. Brown Mince.\n3. Add Liquids/Herbs. Season.\n4. Simmer covered 30+ mins (longer is better for depth).\n5. Cook Pasta.\n6. Serve sauce over pasta, top parmesan.",
    tags: ["Family Favourite", "Beef", "Pasta", "Italian", "Aussie Favourite", "Comfort Food", "Weeknight Dinner", "Mince", "Kid Friendly", "Dinner", "Winter Warmer"]
  },
  {
    id: 254,
    name: "Beef Rendang",
    description: "Rich, tender, slow-cooked Indonesian/Malaysian dry beef curry, intensely warming.",
    ingredients: [
      { quantity: "1kg", name: "beef chuck/brisket", prep: "cubed" }, { quantity: "2 tbsp", name: "oil" }, // Spice Paste (Rempah):
      { quantity: "10-15", name: "dried red chillies", prep: "soaked" }, { quantity: "3", name: "shallots/1 onion" }, { quantity: "4 cloves", name: "garlic" }, { quantity: "3 cm", name: "galangal" }, { quantity: "3 cm", name: "ginger" }, { quantity: "2 stalks", name: "lemongrass" }, { quantity: "1 tsp", name: "turmeric" }, // Spices & Liquids:
      { quantity: "1", name: "cinnamon stick" }, { quantity: "3", name: "star anise" }, { quantity: "4", name: "cloves" }, { quantity: "4", name: "cardamom pods" }, { quantity: "400ml can", name: "coconut milk" }, { quantity: "1 cup", name: "water" }, { quantity: "2 tsp", name: "tamarind paste", prep:"(in water, strained)" }, { quantity: "4", name: "kaffir lime leaves" }, { quantity: "1/2 cup", name: "kerisik" }, { quantity: "1 tbsp", name: "palm sugar" }, { name: "salt" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["rendang", "beef rendang", "indonesian", "malaysian", "beef", "curry", "slow-cooked", "coconut milk", "spicy", "galangal", "lemongrass", "kerisik", "asian", "rich", "comfort food", "winter warmer", "dinner"],
    instructions: "1. Make Spice Paste: Blend rempah ingredients.\n2. Sauté Spices: Heat oil, sauté whole spices (cinnamon etc.) 1 min. Add paste, cook 10-15 mins.\n3. Brown Beef: Add beef, stir.\n4. Simmer: Add coconut milk, water, tamarind, leaves. Cover, simmer 1.5-2 hours.\n5. Reduce: Uncover. Add kerisik, sugar, salt. Simmer 30-60 mins, stirring often, until thick, dark, oily, tender.\n6. Serve with rice.",
    tags: ["Indonesian", "Malaysian", "Beef", "Curry", "Slow-Cooked", "Spicy", "Rich", "Comfort Food", "Asian Inspired", "Dinner", "Winter Warmer"]
  },
  {
    id: 255,
    name: "Classic Roast Beef with Gravy",
    description: "Traditional roast beef joint, perfect for a warming Sunday lunch.",
    ingredients: [
        { quantity: "1.5 - 2kg", name: "beef roasting joint" }, { quantity: "1 tbsp", name: "olive oil" }, { name: "salt and pepper" }, { quantity: "2", name: "onions", prep: "quartered" }, { quantity: "2", name: "carrots", prep: "chopped" }, { quantity: "2 sticks", name: "celery", prep: "chopped" }, { name: "herbs", prep: "opt." }, // Gravy:
        { quantity: "2 tbsp", name: "flour" }, { quantity: "2 cups", name: "beef stock", prep: "hot" }, { quantity: "1 tbsp", name: "worcestershire sauce", prep: "opt." }
    ],
    ingredientKeywords: ["roast beef", "beef roast", "roast", "beef", "topside", "silverside", "gravy", "sunday roast", "british", "traditional", "comfort food", "dinner", "winter warmer"],
    instructions: "1. Prep Beef: Preheat oven. Rub beef with oil, season.\n2. Sear Beef (opt.).\n3. Roast: Place veggies/herbs in tin. Beef on top. Roast per weight/preference.\n4. Rest Beef: Remove beef, cover, rest 15-20+ mins.\n5. Make Gravy: Use roasting tin on stovetop. Discard fat. Stir in flour. Whisk in hot stock. Simmer until thick. Strain, season.\n6. Serve: Carve beef. Serve with gravy.",
    tags: ["Roast", "Beef", "Sunday Roast", "Traditional", "British", "Comfort Food", "Gravy", "Dinner", "Special Occasion", "Winter Warmer"]
  },
  {
    id: 256,
    name: "Roast Chicken with Vegetables",
    description: "A classic whole roast chicken cooked with root vegetables - a comforting family meal.",
    ingredients: [
        { quantity: "1 (approx 1.6-2kg)", name: "whole chicken" }, { quantity: "2 tbsp", name: "oil/butter" }, { name: "salt and pepper" }, { quantity: "1", name: "lemon", prep: "opt." }, { name: "herbs", prep:"opt." }, { quantity: "1", name: "onion" }, // Veg:
        { quantity: "4", name: "potatoes" }, { quantity: "3", name: "carrots" }, { quantity: "2", name: "parsnips", prep:"opt." }, { quantity: "1 head", name: "garlic", prep:"opt." }, { quantity: "1 tbsp", name: "oil" }
    ],
    ingredientKeywords: ["roast chicken", "chicken", "whole chicken", "roast", "roast dinner", "potato", "carrot", "parsnip", "onion", "garlic", "british", "aussie", "traditional", "comfort food", "sunday roast", "family favourite", "dinner", "winter warmer"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Prep Chicken: Pat dry. Rub oil/butter, season. Lemon/herbs inside (opt.).\n3. Prep Veggies: Toss veg with 1 tbsp oil, salt, pepper in roasting tin.\n4. Roast: Place chicken on veg. Roast 1hr 15m - 1hr 45m, basting. Juices run clear when cooked.\n5. Rest Chicken: Remove chicken, cover, rest 15-20 mins.\n6. Finish Veggies (opt.).\n7. Carve & Serve.",
    tags: ["Roast", "Chicken", "Sunday Roast", "Traditional", "Comfort Food", "British", "Aussie Favourite", "Family Favourite", "Dinner", "Winter Warmer"]
  },
   {
    id: 257,
    name: "Beef Stroganoff",
    description: "Tender beef strips and mushrooms in a creamy paprika sauce, perfect served over pasta or mash.",
    ingredients: [
      { quantity: "500g", name: "beef steak", prep: "(rump/sirloin), sliced" }, { quantity: "1 tbsp", name: "oil" }, { quantity: "1 tbsp", name: "butter" }, { quantity: "1", name: "onion", prep: "sliced" }, { quantity: "250g", name: "mushrooms", prep: "sliced" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tbsp", name: "flour" }, { quantity: "1 tsp", name: "paprika" }, { quantity: "1 cup", name: "beef stock" }, { quantity: "1 tbsp", name: "tomato paste", prep:"opt." }, { quantity: "1 tbsp", name: "dijon mustard", prep:"opt." }, { quantity: "1/2 cup", name: "sour cream" }, { name: "salt and pepper" }, { name: "parsley", prep: "garnish" }, { name: "pasta, rice, or mash", prep: "to serve" }
    ],
    ingredientKeywords: ["stroganoff", "beef stroganoff", "beef", "steak", "mushrooms", "onion", "sour cream", "paprika", "creamy", "russian", "european", "comfort food", "pasta", "rice", "mash", "dinner", "winter warmer"],
    instructions: "1. Brown Beef: Season beef. Heat oil, brown beef batches. Remove.\n2. Cook Veggies: Add butter. Cook onion (5 mins). Add mushrooms (5-7 mins). Add garlic (1 min).\n3. Make Sauce: Sprinkle flour/paprika, stir 1 min. Whisk in stock. Add paste/mustard (opt.).\n4. Simmer sauce 5 mins.\n5. Finish: Low heat. Return beef. Stir in sour cream (do not boil). Season.\n6. Serve over pasta/rice/mash. Garnish parsley.",
    tags: ["Beef", "Steak", "Mushroom", "Creamy", "Comfort Food", "European", "Weeknight Dinner", "Dinner", "Pasta", "Rice", "Winter Warmer"]
  },
  {
    id: 258,
    name: "Chicken and Mushroom Pie",
    description: "Creamy chicken and mushroom filling topped with flaky puff pastry - a winter classic.",
    ingredients: [
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "500g", name: "chicken", prep: "diced" }, { quantity: "250g", name: "mushrooms", prep: "sliced" }, { quantity: "2 tbsp", name: "flour" }, { quantity: "1.5 cups", name: "chicken stock" }, { quantity: "1/2 cup", name: "cream" }, { quantity: "1 tbsp", name: "thyme/parsley" }, { name: "salt and pepper" }, { quantity: "1 sheet", name: "puff pastry" }, { quantity: "1", name: "egg", prep: "beaten" }
    ],
    ingredientKeywords: ["chicken pie", "chicken and mushroom pie", "pie", "chicken", "mushroom", "pastry", "puff pastry", "creamy", "comfort food", "british", "aussie", "winter warmer", "dinner", "family favourite"],
    instructions: "1. Sauté Aromatics & Chicken: Heat oil, sauté onion. Add garlic. Add chicken, brown lightly.\n2. Cook Mushrooms: Add mushrooms, cook until soft.\n3. Make Sauce: Sprinkle flour, stir 1 min. Add stock, simmer until thick. Stir in cream, herbs. Season. Cool slightly.\n4. Assemble Pie: Preheat oven 200°C. Pour filling into dish(es). Top with puff pastry lid(s). Slit lid(s).\n5. Bake: Brush lid(s) with egg. Bake 20-30 mins until golden & hot.\n6. Serve hot.",
    tags: ["Pie", "Chicken", "Mushroom", "Creamy", "Comfort Food", "British", "Aussie Favourite", "Winter Warmer", "Dinner", "Pastry", "Family Favourite"]
  },
  {
    id: 259,
    name: "Pumpkin Soup",
    description: "Smooth, creamy, and comforting pumpkin soup, perfect for a chilly day.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1kg", name: "pumpkin", prep: "(Butternut/Kent), cubed" }, { quantity: "4 cups", name: "vegetable/chicken stock" }, { quantity: "1/2 cup", name: "heavy cream / coconut milk" }, { quantity: "pinch", name: "nutmeg", prep: "(opt.)" }, { name: "salt and pepper" }, { name: "Serve with:", prep:"sour cream, croutons, crusty bread"}
    ],
    ingredientKeywords: ["pumpkin soup", "pumpkin", "butternut", "soup", "onion", "garlic", "stock", "cream", "coconut milk", "vegetarian", "vegan option", "winter warmer", "starter", "lunch", "comfort food", "healthy option", "gluten free"],
    instructions: "1. Sauté Aromatics: Heat oil, sauté onion (5 mins). Add garlic (1 min).\n2. Cook Pumpkin: Add pumpkin, stock. Boil, simmer covered 15-20 mins until tender.\n3. Blend Soup: Use immersion blender (or regular blender carefully) until smooth.\n4. Finish: Stir in cream/coconut milk, nutmeg (opt.). Reheat gently (do not boil). Season well.\n5. Serve hot with toppings/bread.",
    tags: ["Soup", "Vegetarian", "Vegan Option", "Winter Warmer", "Pumpkin", "Starter", "Lunch", "Comfort Food", "Healthy Option", "Gluten Free", "Dinner Option", "Family Favourite"]
  },
   {
    id: 260,
    name: "Pasta e Fagioli (Pasta and Bean Soup)",
    description: "A hearty, warming Italian soup made with pasta, beans, and vegetables.",
    ingredients: [
        { quantity: "2 tbsp", name: "olive oil" }, { quantity: "1", name: "onion" }, { quantity: "1", name: "carrot" }, { quantity: "1", name: "celery stick" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "opt:", name:"100g pancetta"}, { quantity: "1 tsp", name: "rosemary/thyme" }, { quantity: "400g can", name: "crushed tomatoes" }, { quantity: "4 cups", name: "stock" }, { quantity: "400g can", name: "cannellini beans" }, { quantity: "400g can", name: "borlotti beans" }, { quantity: "1 cup", name: "small pasta shape", prep:"(ditalini)" }, { name: "salt and pepper" }, { name: "parmesan cheese", prep: "to serve" }, { name: "olive oil drizzle", prep:"to serve"}
    ],
    ingredientKeywords: ["pasta e fagioli", "pasta fagioli", "pasta and beans", "soup", "stew", "italian", "beans", "cannellini beans", "borlotti beans", "pasta", "comfort food", "hearty", "vegetarian option", "winter warmer", "lunch", "dinner", "budget friendly"],
    instructions: "1. Sauté Base: Heat oil. Sauté onion, carrot, celery. Add garlic (and pancetta opt.). Stir in herbs.\n2. Add Liquids & Beans: Add tomatoes, stock. Simmer. Add beans. Simmer 15 mins.\n3. Blend (Optional): Blend 1-2 cups soup, return to pot.\n4. Cook Pasta: Bring soup to simmer. Add pasta. Cook until tender.\n5. Season & Serve: Season well. Serve hot, drizzle oil, sprinkle parmesan.",
    tags: ["Italian", "Soup", "Stew", "Pasta", "Beans", "Comfort Food", "Hearty", "Vegetarian Option", "Winter Warmer", "Lunch", "Dinner", "Budget Friendly"]
  },
  {
    id: 261,
    name: "Sticky Toffee Pudding",
    description: "A moist date sponge cake smothered in a rich toffee sauce, the ultimate winter dessert.",
    ingredients: [
      // Pudding:
      { quantity: "175g", name: "dried dates", prep: "chopped" }, { quantity: "1 tsp", name: "bicarb soda" }, { quantity: "85g", name: "butter", prep: "softened" }, { quantity: "150g", name: "dark brown sugar" }, { quantity: "2", name: "eggs" }, { quantity: "175g", name: "self-raising flour" }, { quantity: "1/2 cup", name: "milk" }, // Sauce:
      { quantity: "100g", name: "butter" }, { quantity: "175g", name: "dark brown sugar" }, { quantity: "300ml", name: "heavy cream" }
    ],
    ingredientKeywords: ["sticky toffee pudding", "pudding", "dessert", "cake", "dates", "toffee", "caramel", "butterscotch", "brown sugar", "cream", "british", "sweet", "comfort food", "winter warmer", "indulgent"],
    instructions: "1. Prep Dates: Pour 175ml boiling water over dates. Stir in bicarb. Sit 10 mins.\n2. Make Pudding: Preheat oven 180°C. Grease/line 20cm tin. Cream butter & sugar. Beat in eggs. Fold in flour alternately with milk. Stir in date mix.\n3. Bake Pudding 30-40 mins until firm.\n4. Make Sauce: Melt sauce butter & sugar. Stir in cream. Simmer 2-3 mins until thickish.\n5. Serve: Poke holes in warm pudding. Pour half sauce over. Serve squares warm with extra sauce & cream/ice cream.",
    tags: ["British", "Dessert", "Pudding", "Cake", "Dates", "Toffee", "Sweet", "Comfort Food", "Winter Warmer", "Indulgent"]
  },
  {
    id: 262,
    name: "Chicken Noodle Soup (Classic)",
    description: "Comforting and nourishing soup with chicken, vegetables, and noodles.",
    ingredients: [
        { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion" }, { quantity: "2", name: "carrots" }, { quantity: "2 sticks", name: "celery" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "1.5 - 2 L", name: "chicken stock" }, { quantity: "500g", name: "cooked chicken", prep: "shredded" }, { quantity: "1 cup", name: "egg noodles" }, { quantity: "1/2 cup", name: "peas", prep: "opt." }, { quantity: "2 tbsp", name: "parsley/dill" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["chicken noodle soup", "chicken soup", "soup", "chicken", "noodles", "egg noodles", "comfort food", "winter warmer", "sick day food", "healthy", "classic", "lunch", "dinner"],
    instructions: "1. Sauté Vegetables: Heat oil, sauté onion, carrots, celery. Add garlic.\n2. Add Stock & Chicken: Add stock. Simmer. Add chicken.\n3. Cook Noodles: Simmer. Add noodles, cook until tender.\n4. Finish: Stir in peas (opt.), herbs. Season well.\n5. Serve hot.",
    tags: ["Soup", "Chicken", "Noodles", "Comfort Food", "Winter Warmer", "Healthy", "Classic", "Lunch", "Dinner", "Sick Day Food", "Family Favourite"]
  },
   {
    id: 263,
    name: "French Onion Soup",
    description: "A rich, deeply flavoured soup made from caramelised onions, beef broth, topped with crusty bread and melted Gruyère cheese.",
    ingredients: [
        { quantity: "50g", name: "butter" }, { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1kg", name: "onions", prep: "thinly sliced (about 4-5 large)" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 tbsp", name: "plain flour" }, { quantity: "1/2 cup", name: "dry white wine or brandy", prep:"optional" }, { quantity: "4-6 cups (1-1.5L)", name: "beef stock", prep:"good quality, hot" }, { quantity: "few sprigs", name: "fresh thyme", prep:"opt."}, { quantity: "1", name: "bay leaf", prep:"opt."}, { name: "salt and black pepper" }, // To Serve:
        { quantity: "4 thick slices", name: "baguette or crusty bread", prep:"toasted" }, { quantity: "1 clove", name: "garlic", prep:"halved (opt.)"}, { quantity: "1 - 1.5 cups", name: "Gruyère cheese", prep:"grated"}
    ],
    ingredientKeywords: ["french onion soup", "onion soup", "soup", "onion", "caramelized onions", "beef stock", "gruyere", "cheese", "crouton", "french", "classic", "comfort food", "winter warmer", "starter", "lunch", "dinner"],
    instructions: "1. Caramelise Onions: Melt butter & oil (large pot, medium-low heat). Add onions, sugar. Cook SLOWLY, stirring occasionally, 30-45+ minutes until deeply golden brown and caramelised. Do not rush.\n2. Deglaze: Stir in flour (1 min). Add wine/brandy (opt.), scrape pot, let bubble & reduce.\n3. Simmer Soup: Gradually whisk in hot beef stock. Add thyme/bay leaf (opt.). Season lightly. Bring to simmer, cover partially, cook gently 30 mins.\n4. Prepare Toasts: Toast bread slices. Rub with garlic clove (opt.).\n5. Assemble & Grill: Preheat grill/broiler. Ladle hot soup into ovenproof bowls. Float toast on top. Pile grated Gruyère generously over toast.\n6. Grill: Place bowls under hot grill until cheese is melted, bubbly, and golden brown.\n7. Serve: Serve immediately (bowls will be hot!).",
    tags: ["French", "Soup", "Onion", "Classic", "Comfort Food", "Winter Warmer", "Starter", "Lunch", "Dinner", "Cheese", "Gruyere", "Beef Stock"]
  },
  {
    id: 264,
    name: "Cauliflower Cheese",
    description: "Tender cauliflower florets baked in a creamy cheese sauce, a comforting side or vegetarian main.",
    ingredients: [
        { quantity: "1 large head", name: "cauliflower", prep: "florets" }, // Cheese Sauce:
        { quantity: "50g", name: "butter" }, { quantity: "1/4 cup", name: "flour" }, { quantity: "2.5 cups", name: "milk", prep: "warm" }, { quantity: "1.5 cups", name: "strong cheddar cheese", prep: "grated" }, { quantity: "1 tsp", name: "english mustard", prep:"opt." }, { quantity: "pinch", name: "nutmeg/cayenne", prep:"opt." }, { name: "salt and white pepper" }, // Opt. Topping: { quantity: "2 tbsp", name:"breadcrumbs"}, { quantity:"1 tbsp", name:"parmesan"}
    ],
    ingredientKeywords: ["cauliflower cheese", "cauliflower", "cheese", "cheddar", "bechamel", "cheese sauce", "baked", "side dish", "vegetarian", "british", "comfort food", "gratin", "winter warmer"],
    instructions: "1. Cook Cauliflower: Steam/boil florets until just tender. Drain well.\n2. Make Cheese Sauce: Melt butter, stir in flour (1 min). Whisk in warm milk until thick. Simmer 2 mins. Remove heat, stir in most cheddar, mustard, nutmeg/cayenne. Season.\n3. Assemble: Preheat oven 190°C. Place cauliflower in dish. Pour sauce over.\n4. Top & Bake: Sprinkle remaining cheddar (& opt. breadcrumbs/parmesan). Bake 20-25 mins until golden & bubbly.\n5. Serve hot.",
    tags: ["British", "Side Dish", "Vegetarian", "Comfort Food", "Cheese", "Cheddar", "Cauliflower", "Baked", "Gratin", "Winter Warmer", "Family Favourite"]
  }
  // Add more Winter Warmers...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsWinterWarmer);