// meals_british.js

const mealsBritish = [
  {
    id: 51,
    name: "Fish and Chips",
    description: "Classic British takeaway: crispy beer-battered fish served with thick-cut chips.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets", prep: "(cod, haddock, flathead)" },
        { quantity: "1.5 cups", name: "plain flour", prep: "(plus extra for dusting)" },
        { quantity: "1.5 tsp", name: "baking powder" },
        { quantity: "1 tsp", name: "salt" },
        { quantity: "Approx 1.5 cups", name: "ice-cold beer or soda water" },
        { quantity: "1.2kg", name: "potatoes", prep: "(e.g., Maris Piper, King Edward, Sebago), peeled & cut thick" },
        { name: "vegetable oil", prep: "for deep frying" },
        { name: "lemon wedges", prep: "to serve" },
        { name: "tartare sauce", prep: "to serve" },
        { name: "malt vinegar", prep: "optional, to serve" },
        { name: "salt", prep: "extra, for seasoning chips"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "haddock", "flathead", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "pub classic", "british", "uk", "lemon", "tartare", "vinegar"],
    instructions: "1. Prep Chips: Cut potatoes thick. Rinse, pat thoroughly dry.\n2. First Fry Chips: Heat oil to 160°C. Cook chips in batches 5-7 mins until softened but pale. Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Gradually whisk in cold beer/soda water until thick batter forms.\n4. Prep Fish: Pat fish dry. Dust lightly in extra flour.\n5. Fry Fish: Increase oil to 190°C. Dip fish in batter. Fry in batches 4-7 mins until golden and cooked. Drain.\n6. Second Fry Chips: Re-fry chips at 190°C for 2-4 mins until golden and crisp. Drain.\n7. Serve: Season chips with salt. Serve immediately with fish, lemon wedges, tartare sauce, and malt vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Dinner", "Aussie Favourite"] // Often also an Aussie Fav
  },
  {
    id: 52,
    name: "Shepherd's Pie / Cottage Pie",
    description: "Comforting savoury mince (lamb for Shepherd's, beef for Cottage) topped with creamy mashed potato.",
    ingredients: [
        { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2", name: "carrots", prep: "diced" }, { quantity: "2 sticks", name: "celery", prep: "diced" }, { quantity: "500g", name: "lamb mince (Shepherd's) or beef mince (Cottage)" }, { quantity: "2 tbsp", name: "plain flour" }, { quantity: "1.5 cups", name: "lamb or beef stock" }, { quantity: "2 tbsp", name: "tomato paste" }, { quantity: "1 tbsp", name: "worcestershire sauce" }, { quantity: "1 tsp", name: "dried rosemary or thyme" }, { quantity: "1/2 cup", name: "frozen peas", prep:"optional" }, { name: "salt and pepper" },
        { quantity: "1kg", name: "potatoes", prep: "peeled & chopped" }, { quantity: "1/4 cup", name: "milk" }, { quantity: "50g", name: "butter" }, { name: "grated cheddar cheese", prep: "optional topping" }
    ],
    ingredientKeywords: ["shepherds pie", "cottage pie", "lamb", "beef", "mince", "potato", "mashed potato", "onion", "carrot", "celery", "stock", "comfort food", "british", "irish", "aussie", "family meal", "winter warmer", "pie"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, carrots, celery until soft.\n2. Brown Mince: Add mince, cook until browned, drain fat.\n3. Make Gravy: Stir in flour (1 min). Gradually add stock, tomato paste, worcestershire, herbs. Simmer until thick. Season.\n4. Simmer Filling: Simmer 15-20 mins. Stir in peas (if using).\n5. Make Mash: Boil potatoes until tender. Drain. Mash with milk, butter. Season.\n6. Assemble: Preheat oven 190°C (175°C fan). Put filling in ovenproof dish. Top with mash, rough surface. Add cheese (if using).\n7. Bake: Bake 25-30 mins until golden and bubbly.\n8. Serve: Rest 5 mins.",
    tags: ["Comfort Food", "Beef", "Lamb", "Mince", "Potato", "British", "Irish", "Aussie Favourite", "Family Favourite", "Winter Warmer", "Dinner", "Pie"]
  },
  {
    id: 53,
    name: "Bangers and Mash",
    description: "Classic British comfort food: sausages served with mashed potatoes and onion gravy.",
    ingredients: [
        { quantity: "8", name: "good quality pork sausages", prep: "(e.g., Cumberland)" },
        { quantity: "1.2kg", name: "potatoes", prep: "peeled and chopped" },
        { quantity: "1/4 cup", name: "milk", prep: "warm" },
        { quantity: "50g", name: "butter" },
        { name: "salt and white pepper", prep: "to taste" },
        // Onion Gravy:
        { quantity: "1 tbsp", name: "vegetable oil or dripping" },
        { quantity: "2", name: "onions", prep: "thinly sliced" },
        { quantity: "1 tbsp", name: "plain flour" },
        { quantity: "2 cups", name: "beef stock", prep: "hot" },
        { quantity: "1 tsp", name: "worcestershire sauce", prep: "optional" },
        { quantity: "1 tsp", name: "balsamic vinegar or brown sauce", prep: "optional, for depth" }
    ],
    ingredientKeywords: ["bangers and mash", "sausages", "mashed potato", "potato", "gravy", "onion gravy", "british", "pub classic", "comfort food", "pork", "cumberland", "onion", "beef stock"],
    instructions: "1. Make Mash: Boil potatoes until very tender. Drain well. Mash until smooth. Beat in warm milk and butter. Season with salt and white pepper. Keep warm.\n2. Cook Sausages: Grill, bake, or pan-fry sausages according to preference until cooked through and browned (approx 15-20 mins).\n3. Make Onion Gravy: While sausages cook, heat oil/dripping in a pan. Add sliced onions, cook over medium-low heat for 15-20 minutes, stirring occasionally, until soft and caramelized.\n4. Thicken Gravy: Stir flour into onions, cook 1 min. Gradually whisk in hot beef stock until smooth. Add worcestershire/vinegar (if using).\n5. Simmer Gravy: Bring to simmer, cook gently for 5-10 minutes until thickened to desired consistency. Season gravy with salt & pepper.\n6. Serve: Serve sausages alongside a generous portion of mashed potato, smothered in onion gravy.",
    tags: ["British", "Pub Classic", "Comfort Food", "Sausages", "Pork", "Potato", "Mashed Potato", "Gravy", "Onion Gravy", "Dinner", "Winter Warmer"]
  },
  {
    id: 54,
    name: "Full English Breakfast",
    description: "A hearty cooked breakfast including bacon, eggs, sausages, baked beans, tomatoes, mushrooms, and fried bread or toast.",
    ingredients: [
        // Choose amounts per person (example for 4):
        { quantity: "8 slices", name: "back bacon" },
        { quantity: "4-8", name: "sausages" },
        { quantity: "4", name: "eggs" },
        { quantity: "400g can", name: "baked beans in tomato sauce" },
        { quantity: "250g", name: "mushrooms", prep: "sliced or whole" },
        { quantity: "2-4", name: "tomatoes", prep: "halved or sliced" },
        { quantity: "optional:", name: "black pudding", prep: "sliced" },
        { quantity: "optional:", name: "hash browns" },
        { quantity: "4 slices", name: "bread", prep: "for frying or toasting" },
        { quantity: "Butter or oil", prep: "for frying" },
        { name: "HP sauce or Ketchup", prep: "to serve" }
    ],
    ingredientKeywords: ["full english", "fry up", "breakfast", "cooked breakfast", "bacon", "eggs", "sausages", "baked beans", "mushrooms", "tomato", "black pudding", "fried bread", "toast", "british", "irish", "hearty", "brunch"],
    instructions: "1. Cook Sausages & Bacon: Start cooking sausages in a large frying pan or under grill (takes longest). Add bacon to pan/grill when sausages are partly cooked.\n2. Cook Mushrooms & Tomatoes: Cook mushrooms (in butter/oil) and tomatoes (cut side down) in the same pan or a separate one until softened and lightly browned.\n3. Cook Black Pudding/Hash Browns (if using): Cook according to package or preference.\n4. Heat Beans: Gently heat baked beans in a small saucepan.\n5. Cook Eggs: Fry or poach eggs to your liking just before serving.\n6. Fry Bread/Toast: Fry bread slices in bacon/sausage fat until golden, or make toast.\n7. Assemble Plate: Arrange all cooked items on large warm plates.\n8. Serve: Serve immediately with HP sauce or ketchup.",
    tags: ["British", "Irish", "Breakfast", "Brunch", "Hearty", "Bacon", "Sausages", "Eggs", "Comfort Food"]
  },
  {
    id: 55,
    name: "Toad in the Hole",
    description: "Sausages baked in a large Yorkshire pudding batter.",
    ingredients: [
        { quantity: "8", name: "good quality pork sausages" },
        { quantity: "1 tbsp", name: "vegetable oil or beef dripping" },
        // Yorkshire Pudding Batter:
        { quantity: "140g", name: "plain flour" },
        { quantity: "4", name: "eggs" },
        { quantity: "200ml", name: "milk" },
        { name: "salt and pepper" },
        { name: "onion gravy", prep: "to serve (see Bangers & Mash recipe)" }
    ],
    ingredientKeywords: ["toad in the hole", "sausages", "yorkshire pudding", "batter", "british", "comfort food", "dinner", "pork", "onion gravy"],
    instructions: "1. Preheat Oven & Fat: Pour oil/dripping into a large baking dish (approx 20x30cm). Place in preheated oven at 220°C (200°C fan) to get smoking hot (about 10 mins).\n2. Brown Sausages: Lightly brown sausages in a frying pan (or add directly to hot fat in oven dish for first 5-10 mins of preheating time).\n3. Make Batter: While fat heats, whisk flour and salt in a bowl. Make a well, crack in eggs. Gradually whisk eggs, incorporating flour. Slowly whisk in milk until a smooth batter (like thin cream) forms. Season with pepper.\n4. Assemble: Carefully remove hot dish from oven. Arrange browned sausages in the dish. Immediately pour batter evenly over and around sausages.\n5. Bake: Return dish to oven quickly. Bake for 25-35 minutes, without opening oven door for first 20 mins, until batter is well risen, puffed up, and golden brown.\n6. Serve: Serve immediately, cut into portions, with onion gravy.",
    tags: ["British", "Comfort Food", "Sausages", "Pork", "Yorkshire Pudding", "Dinner", "Winter Warmer", "Pub Classic"]
  },
  {
    id: 56,
    name: "Classic Roast Beef with Gravy",
    description: "A traditional roast beef joint, perfect for a Sunday lunch, served with homemade gravy.",
    ingredients: [
        { quantity: "1.5 - 2kg", name: "beef roasting joint", prep: "(topside, silverside)" }, { quantity: "1 tbsp", name: "olive oil" }, { name: "salt and pepper" }, { quantity: "2", name: "onions", prep: "quartered" }, { quantity: "2", name: "carrots", prep: "chopped" }, { quantity: "2 sticks", name: "celery", prep: "chopped" }, { name: "thyme or rosemary sprigs", prep: "optional" }, // Gravy:
        { quantity: "2 tbsp", name: "plain flour" }, { quantity: "2 cups", name: "beef stock", prep: "hot" }, { quantity: "1 tbsp", name: "worcestershire sauce", prep: "optional" }, { name: "red wine splash", prep: "optional" }
    ],
    ingredientKeywords: ["roast beef", "beef roast", "roast", "beef", "topside", "silverside", "gravy", "sunday roast", "british", "traditional", "comfort food", "dinner"],
    instructions: "1. Prep Beef: Preheat oven (e.g., 200°C/180°C fan). Rub beef with oil, season well.\n2. Sear Beef (optional): Sear beef on all sides in hot ovenproof pan.\n3. Roast: Place veggies (& herbs) in roasting tin. Place beef on top. Roast per weight/preference (e.g., medium-rare: 200°C/180°C fan for 15 mins, then 180°C/160°C fan for 15 mins per 500g + 15 mins). Use meat thermometer.\n4. Rest Beef: Remove beef, cover loosely, rest 15-20+ mins.\n5. Make Gravy: Place tin on stovetop. Discard excess fat. Stir in flour (1 min). Gradually whisk in hot stock (& wine). Simmer, scraping base, until thickened. Strain gravy, season.\n6. Serve: Carve rested beef. Serve with gravy.",
    tags: ["Roast", "Beef", "Sunday Roast", "Traditional", "British", "Comfort Food", "Gravy", "Dinner", "Special Occasion"]
  },
   {
    id: 57,
    name: "Sticky Toffee Pudding",
    description: "A moist date sponge cake smothered in a rich toffee sauce, often served warm with cream or ice cream.",
    ingredients: [
      // Pudding:
      { quantity: "175g", name: "dried dates", prep: "pitted & chopped" }, { quantity: "1 tsp", name: "bicarbonate of soda" }, { quantity: "85g", name: "butter", prep: "softened" }, { quantity: "150g", name: "dark brown sugar" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "175g", name: "self-raising flour" }, { quantity: "1/2 cup (125ml)", name: "milk" }, // Toffee Sauce:
      { quantity: "100g", name: "butter" }, { quantity: "175g", name: "dark brown sugar" }, { quantity: "300ml", name: "thickened cream (heavy cream)" }, { quantity: "1 tsp", name: "vanilla extract", prep: "optional" }
    ],
    ingredientKeywords: ["sticky toffee pudding", "pudding", "dessert", "cake", "dates", "toffee", "caramel", "butterscotch", "brown sugar", "cream", "british", "sweet", "comfort food", "winter warmer"],
    instructions: "1. Prep Dates: Place chopped dates in a bowl. Pour 175ml boiling water over them. Stir in bicarb soda. Let sit 10 mins.\n2. Make Pudding Batter: Preheat oven 180°C (160°C fan). Grease & line 20cm square tin. Cream butter and sugar until fluffy. Gradually beat in eggs. Fold in flour alternately with milk. Stir in the date mixture.\n3. Bake Pudding: Pour batter into prepared tin. Bake for 30-40 minutes, until firm and skewer comes out clean.\n4. Make Toffee Sauce: While pudding bakes (or after), combine sauce butter and sugar in a saucepan. Heat gently, stirring, until melted and smooth. Stir in cream (and vanilla). Bring to a gentle simmer, cook 2-3 minutes, stirring, until slightly thickened.\n5. Serve: Poke holes in the warm pudding with a skewer. Pour about half the warm sauce over the pudding in the tin. Let it soak in. Serve remaining pudding squares warm, with extra warm sauce poured over, and cream or ice cream alongside.",
    tags: ["British", "Dessert", "Pudding", "Cake", "Dates", "Toffee", "Sweet", "Comfort Food", "Winter Warmer", "Indulgent"]
  },
   {
    id: 58,
    name: "Cornish Pasty",
    description: "A baked pastry case traditionally filled with beef, potato, swede (rutabaga), and onion.",
    ingredients: [
      // Pastry (or use store-bought shortcrust):
      { quantity: "350g", name: "plain flour" }, { quantity: "75g", name: "butter", prep: "cold & cubed" }, { quantity: "75g", name: "lard or vegetable shortening", prep: "cold & cubed" }, { quantity: "pinch", name: "salt" }, { quantity: "4-6 tbsp", name: "ice water" }, // Filling:
      { quantity: "200g", name: "beef skirt or chuck steak", prep: "cut into 1cm cubes" }, { quantity: "150g", name: "potato", prep: "peeled & diced 1cm" }, { quantity: "150g", name: "swede (rutabaga)", prep: "peeled & diced 1cm" }, { quantity: "1", name: "onion", prep: "chopped" }, { name: "salt and freshly ground black pepper" }, { quantity: "1", name: "egg", prep: "beaten (for glazing)" }
    ],
    ingredientKeywords: ["cornish pasty", "pasty", "pastry", "beef", "potato", "swede", "rutabaga", "onion", "british", "cornish", "cornwall", "baked", "lunch", "savoury"],
    instructions: "1. Make Pastry (if homemade): Rub butter/lard into flour and salt until like breadcrumbs. Gradually add ice water, mixing until dough just comes together. Wrap, chill 30 mins.\n2. Prepare Filling: In a bowl, combine cubed beef, diced potato, diced swede, and chopped onion. Season VERY generously with salt and pepper. Mix well.\n3. Assemble Pasties: Preheat oven 200°C (180°C fan). Divide pastry into 4 portions. Roll each into a 20-23cm circle. Place filling on one half of each circle, leaving border.\n4. Seal Pasties: Moisten pastry edge with water. Fold other half over filling. Press edges firmly. Crimp edge decoratively along the top curve.\n5. Bake: Place pasties on baking tray. Brush with beaten egg. Bake for 45-55 minutes, until pastry is golden brown and filling is cooked (check juices run clear if poked). Reduce heat slightly if pastry browns too quickly.\n6. Serve: Serve hot or warm.",
    tags: ["British", "Cornish", "Pasty", "Beef", "Potato", "Pastry", "Baked", "Lunch", "Savoury", "Comfort Food", "Traditional"]
  },
  {
    id: 59,
    name: "Eton Mess",
    description: "A simple dessert made from a mixture of broken meringue, strawberries (or other berries), and whipped cream.",
    ingredients: [
        { quantity: "4-6", name: "meringue nests", prep: "(store-bought or homemade), roughly crushed" },
        { quantity: "500g", name: "strawberries", prep: "hulled & sliced (or mixed berries)" },
        { quantity: "1 tbsp", name: "caster sugar", prep: "optional" },
        { quantity: "300ml", name: "thickened cream (heavy cream)" }
    ],
    ingredientKeywords: ["eton mess", "dessert", "meringue", "strawberries", "berries", "cream", "british", "sweet", "simple", "no-cook", "summer", "eton college"],
    instructions: "1. Prepare Berries: Gently crush about half the strawberries/berries with a fork (add optional sugar if berries are tart). Leave the rest sliced/whole.\n2. Whip Cream: Whip the cream until soft peaks form.\n3. Combine: Gently fold the crushed meringue pieces, crushed berries, and whole/sliced berries into the whipped cream. Don't overmix - it should look 'messy'.\n4. Serve: Spoon into individual glasses or bowls immediately.",
    tags: ["British", "Dessert", "Sweet", "Meringue", "Strawberries", "Berries", "Cream", "Simple", "No-Cook", "Summer", "Gluten Free"]
  },
   {
    id: 60,
    name: "Bubble and Squeak",
    description: "A traditional British dish made from the shallow-fried leftover vegetables from a roast dinner, primarily potatoes and cabbage.",
    ingredients: [
        { quantity: "Approx 2 cups", name: "leftover cooked potatoes", prep: "(roasted or boiled), roughly mashed or chopped" },
        { quantity: "Approx 1-2 cups", name: "leftover cooked cabbage", prep: "shredded or chopped (or Brussels sprouts, kale)" },
        { quantity: "optional:", name: "other leftover cooked vegetables", prep: "(carrots, peas, parsnips)" },
        { quantity: "optional:", name: "leftover cooked meat", prep: "(chopped)" },
        { quantity: "1", name: "onion", prep: "finely chopped (optional)" },
        { quantity: "2-3 tbsp", name: "butter, oil, or dripping" },
        { name: "salt and pepper", prep: "to taste" }
    ],
    ingredientKeywords: ["bubble and squeak", "leftovers", "potato", "cabbage", "brussels sprouts", "fried", "pan-fried", "british", "comfort food", "budget friendly", "breakfast", "brunch", "side dish"],
    instructions: "1. Combine Leftovers: Roughly mix together the leftover potatoes, cabbage, and any other vegetables/meat being used. Season well with salt and pepper.\n2. Sauté Onion (optional): If using fresh onion, heat half the fat in a large frying pan and sauté onion until softened.\n3. Fry Mixture: Add remaining fat to pan. Add the vegetable mixture. Press down gently into a large cake or individual patties.\n4. Cook: Cook over medium heat for 10-15 minutes, without stirring too much initially, until the underside is well browned and crispy.\n5. Flip & Brown: Flip the cake (or patties) over carefully (can use a plate to help flip a large one). Add more fat if needed. Cook the other side for another 10-15 minutes until browned and heated through.\n6. Serve: Serve hot, often with eggs, bacon, or as part of a breakfast or brunch.",
    tags: ["British", "Leftovers", "Potato", "Cabbage", "Comfort Food", "Budget Friendly", "Pan-Fried", "Breakfast", "Brunch", "Side Dish"]
  }
  // More British recipes could be added... (e.g., Yorkshire Puddings standalone, Trifle, Scones, Ploughman's Lunch, Kedgeree)
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsBritish);