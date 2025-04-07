// meals_beef.js

const mealsBeef = [
  {
    id: 37,
    name: "Spaghetti Bolognese",
    description: "A classic Italian-Australian family favourite, rich beef mince sauce simmered with vegetables and tomatoes.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "grated or finely chopped" }, { quantity: "1 stick", name: "celery", prep: "finely chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "400g can", name: "diced tomatoes" }, { quantity: "1/2 cup", name: "beef stock", prep: "(or red wine)" }, { quantity: "1 tsp", name: "dried oregano" }, { quantity: "1/2 tsp", name: "dried basil" }, { quantity: "1", name: "bay leaf", prep: "optional" }, { quantity: "400g", name: "spaghetti", prep: "(or other pasta)" }, { name: "parmesan cheese", prep: "grated, to serve" }, { name: "salt and pepper", prep: "to taste" }
    ],
    ingredientKeywords: ["spaghetti", "bolognese", "pasta", "beef", "beef mince", "mince", "onion", "garlic", "carrot", "celery", "tomato", "tomatoes", "tomato paste", "beef stock", "red wine", "oregano", "basil", "parmesan", "italian", "aussie", "family favourite", "comfort food"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, garlic, carrot, celery until softened (5-7 mins).\n2. Brown Mince: Add beef mince, cook breaking it up until browned. Drain excess fat.\n3. Add Liquids/Herbs: Stir in tomato paste, cook 1 min. Add diced tomatoes, stock/wine, oregano, basil, bay leaf (if using). Season with salt & pepper.\n4. Simmer: Bring to a simmer, reduce heat, cover loosely, cook for at least 30 minutes (longer is better, up to 1-2 hours), stirring occasionally. Add water if it gets too dry. Remove bay leaf.\n5. Cook Pasta: Cook spaghetti according to package directions.\n6. Serve: Serve bolognese sauce over cooked spaghetti, topped with grated parmesan.",
    tags: ["Family Favourite", "Beef", "Pasta", "Italian", "Aussie Favourite", "Comfort Food", "Weeknight Dinner", "Mince"]
  },
  {
    id: 38,
    name: "Simple Beef Stir-Fry",
    description: "Quick, versatile beef and vegetable stir-fry, perfect for a weeknight dinner.",
    ingredients: [
        { quantity: "500g", name: "beef stir-fry strips", prep: "(e.g., rump, sirloin)" }, { quantity: "3 tbsp", name: "soy sauce" }, { quantity: "1.5 tbsp", name: "honey", prep: "(or maple syrup)" }, { quantity: "2 tsp", name: "ginger", prep: "grated" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1.5 tsp", name: "sesame oil" }, { quantity: "2 tbsp", name: "vegetable oil", prep: "(or peanut oil)" }, { quantity: "1 large head", name: "broccoli", prep: "cut into florets" }, { quantity: "1 large", name: "capsicum", prep: "sliced (any colour)" }, { quantity: "1 large", name: "carrot", prep: "julienned or thinly sliced" }, { quantity: "1", name: "onion", prep: "sliced" }, { name: "rice or noodles", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["beef", "beef strips", "stir-fry beef", "rump", "sirloin", "soy sauce", "honey", "ginger", "garlic", "sesame oil", "vegetable oil", "broccoli", "capsicum", "pepper", "carrot", "onion", "rice", "noodles", "asian", "quick", "chinese", "stir-fry", "weeknight dinner"],
    instructions: "1. Marinate beef: Combine beef strips, soy sauce, honey, ginger, garlic, and sesame oil. Marinate for 15+ minutes.\n2. Heat oil: Heat vegetable oil in a wok over high heat until shimmering.\n3. Cook beef: Stir-fry beef in batches until just browned (1-2 mins). Remove and set aside.\n4. Cook veggies: Add broccoli, capsicum, carrot, and onion to the hot wok. Stir-fry for 3-5 minutes until vegetables are tender-crisp.\n5. Combine: Return beef to wok. Add a splash more soy sauce if desired. Toss everything together for another minute to heat through.\n6. Serve: Serve immediately over cooked rice or noodles.",
    tags: ["Quick Meal", "Beef", "Stir-fry", "Asian Inspired", "Weeknight Dinner", "Chinese", "Healthy Option"]
  },
  {
    id: 39,
    name: "Meat Pie (Classic Aussie)",
    description: "Rich minced beef filling encased in flaky shortcrust pastry base and puff pastry lid.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "finely chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "2 tbsp", name: "plain flour" }, { quantity: "1.5 cups", name: "beef stock" }, { quantity: "2 tbsp", name: "tomato paste" }, { quantity: "1 tbsp", name: "worcestershire sauce" }, { quantity: "1 tsp", name: "vegemite", prep: "(optional)" }, { name: "salt and pepper" }, { quantity: "2 sheets", name: "shortcrust pastry" }, { quantity: "1 sheet", name: "puff pastry" }, { quantity: "1", name: "egg", prep: "beaten" }
    ],
    ingredientKeywords: ["meat pie", "pie", "beef pie", "beef mince", "mince", "pastry", "shortcrust", "puff pastry", "onion", "beef stock", "aussie", "australian", "iconic", "bakery", "comfort food"],
    instructions: "1. Make Filling: Heat oil, sauté onion. Add mince, brown, drain fat. Stir in flour, cook 1 min. Add stock, tomato paste, worcestershire, Vegemite. Simmer until thick. Season. Cool completely.\n2. Prepare Pastry: Preheat oven 200°C (180°C fan). Grease 4 pie tins. Line with shortcrust pastry.\n3. Fill & Top: Fill cases with cooled filling. Cut puff pastry lids. Brush base edges with egg wash, place lids, seal, trim. Slit lids.\n4. Bake: Brush lids with egg wash. Bake 25-30 mins until golden.\n5. Serve: Rest briefly. Serve with tomato sauce.",
    tags: ["Aussie Favourite", "Meat Pie", "Beef", "Mince", "Pastry", "Comfort Food", "Bakery", "Lunch", "Dinner", "Iconic"]
  },
   {
    id: 40,
    name: "Beef Tacos",
    description: "Classic ground beef tacos with your favourite toppings, perfect for a fun family meal.",
    ingredients: [
      { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "500g", name: "beef mince" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 packet (30-40g)", name: "taco seasoning mix" }, { quantity: "1/2 cup", name: "water", prep: "(or beef broth)" }, { quantity: "8-12", name: "taco shells", prep: "(hard or soft)" }, // Toppings:
      { name: "lettuce", prep: "shredded" }, { name: "tomatoes", prep: "diced" }, { name: "cheese", prep: "shredded" }, { name: "sour cream" }, { name: "salsa" }, { name: "avocado/guacamole", prep:"optional"}
    ],
    ingredientKeywords: ["taco", "tacos", "beef", "beef mince", "mince", "ground beef", "onion", "garlic", "taco seasoning", "mexican", "family meal", "fun", "lettuce", "tomato", "cheese", "sour cream", "salsa"],
    instructions: "1. Cook Beef & Onion: Heat oil, add mince and onion. Cook, breaking up mince, until browned. Drain fat.\n2. Add Seasoning: Add garlic, cook 30 secs. Stir in taco seasoning and water/broth.\n3. Simmer: Bring to simmer, cook 5-10 mins until slightly thickened.\n4. Prepare Shells & Toppings: Warm taco shells. Prepare all toppings.\n5. Serve: Let everyone assemble their own tacos.",
    tags: ["Mexican", "Beef", "Mince", "Tacos", "Family Favourite", "Fun Meal", "Weeknight Dinner", "Quick Meal"]
  },
  {
    id: 41,
    name: "Beef Burgers on the BBQ",
    description: "Juicy homemade beef burgers cooked on the barbecue, served in buns with classic toppings.",
    ingredients: [
        // Patties:
        { quantity: "500g", name: "beef mince", prep: "(not too lean)" }, { quantity: "1", name: "onion", prep: "finely chopped or grated" }, { quantity: "1 clove", name: "garlic", prep: "minced" }, { quantity: "1", name: "egg", prep: "lightly beaten" }, { quantity: "1/4 cup", name: "breadcrumbs" }, { quantity: "1 tbsp", name: "worcestershire sauce", prep:"optional" }, { name: "salt and pepper" },
        // For Serving:
        { quantity: "4", name: "burger buns" }, { name: "Lettuce leaves" }, { name: "Tomato slices" }, { name: "Cheese slices", prep: "(e.g., cheddar)" }, { name: "Beetroot slices", prep: "canned, optional Aussie style" }, { name: "Onion rings", prep: "raw or cooked" }, { name: "Pickles", prep:"optional" }, { name: "Tomato sauce (ketchup)" }, { name: "BBQ sauce" }, { name: "Mustard" }
    ],
    ingredientKeywords: ["burger", "hamburger", "beef burger", "beef", "beef mince", "mince", "bbq", "barbecue", "grill", "onion", "garlic", "egg", "breadcrumbs", "bun", "lettuce", "tomato", "cheese", "beetroot", "aussie", "american"],
    instructions: "1. Make Patties: Gently combine mince, onion, garlic, egg, breadcrumbs, worcestershire (if using), salt, and pepper. Do not overmix. Form into 4 equal patties, about 2cm thick. Press a slight indent in the center of each.\n2. Preheat BBQ: Preheat barbecue grill to medium-high heat.\n3. Cook Patties: Grill patties for 4-6 minutes per side (adjust for desired doneness). Add cheese slices on top during the last minute of cooking to melt.\n4. Toast Buns: Lightly toast burger buns on the grill if desired.\n5. Assemble: Spread desired sauces on buns. Layer lettuce, tomato, beef patty with cheese, beetroot (if using), onion, pickles etc.\n6. Serve: Serve burgers immediately.",
    tags: ["Beef", "Mince", "Burger", "BBQ", "Grill", "American", "Aussie Favourite", "Family Favourite", "Lunch", "Dinner", "Casual"]
  },
   {
    id: 42,
    name: "Shepherd's Pie / Cottage Pie",
    description: "Comforting savoury beef mince filling topped with creamy mashed potato.",
    ingredients: [
        // Filling:
        { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2", name: "carrots", prep: "diced" }, { quantity: "2 sticks", name: "celery", prep: "diced" }, { quantity: "500g", name: "beef mince" }, { quantity: "2 tbsp", name: "plain flour" }, { quantity: "1.5 cups", name: "beef stock" }, { quantity: "2 tbsp", name: "tomato paste" }, { quantity: "1 tbsp", name: "worcestershire sauce" }, { quantity: "1 tsp", name: "dried thyme or mixed herbs" }, { quantity: "1/2 cup", name: "frozen peas or corn", prep: "optional" }, { name: "salt and pepper" },
        // Topping:
        { quantity: "1kg", name: "potatoes", prep: "peeled & chopped" }, { quantity: "1/4 cup", name: "milk" }, { quantity: "50g", name: "butter" }, { name: "grated cheese", prep: "optional" }
    ],
    ingredientKeywords: ["shepherds pie", "cottage pie", "beef", "beef mince", "mince", "potato", "mashed potato", "onion", "carrot", "celery", "beef stock", "comfort food", "british", "irish", "aussie", "family meal", "winter warmer"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, carrots, celery until softened (5-7 mins).\n2. Brown Mince: Add mince, cook until browned, drain fat.\n3. Make Gravy: Stir in flour, cook 1 min. Gradually stir in stock, tomato paste, worcestershire, herbs. Bring to simmer, cook stirring until thickens. Season.\n4. Simmer Filling: Simmer gently 15-20 mins. Stir in peas/corn (if using).\n5. Make Mash: Boil potatoes until tender. Drain. Mash with milk and butter until smooth. Season.\n6. Assemble: Preheat oven 190°C (175°C fan). Pour filling into ovenproof dish. Top evenly with mashed potato, roughing surface with fork. Sprinkle cheese (if using).\n7. Bake: Bake 25-30 minutes until topping is golden and filling bubbly.\n8. Serve: Rest 5 mins before serving.",
    tags: ["Comfort Food", "Beef", "Mince", "Potato", "British", "Irish", "Aussie Favourite", "Family Favourite", "Winter Warmer", "Dinner"]
  },
  {
    id: 43,
    name: "Beef Rendang",
    description: "Rich and tender Indonesian/Malaysian slow-cooked dry beef curry.",
    ingredients: [
      { quantity: "1kg", name: "beef chuck or brisket", prep: "cut into 4cm cubes" }, { quantity: "2 tbsp", name: "vegetable oil" }, // Spice Paste (Rempah):
      { quantity: "10-15", name: "dried red chillies", prep: "soaked" }, { quantity: "3", name: "shallots/1 onion" }, { quantity: "4 cloves", name: "garlic" }, { quantity: "3 cm", name: "galangal" }, { quantity: "3 cm", name: "ginger" }, { quantity: "2 stalks", name: "lemongrass", prep: "white part" }, { quantity: "1 tsp", name: "turmeric powder" }, // Whole Spices & Liquids:
      { quantity: "1", name: "cinnamon stick" }, { quantity: "3", name: "star anise" }, { quantity: "4", name: "cloves" }, { quantity: "4", name: "cardamom pods" }, { quantity: "400ml can", name: "coconut milk" }, { quantity: "1 cup", name: "water" }, { quantity: "2 tsp", name: "tamarind paste", prep: "mixed with water, strained" }, { quantity: "4", name: "kaffir lime leaves" }, { quantity: "1/2 cup", name: "kerisik", prep: "(toasted coconut paste)" }, { quantity: "1 tbsp", name: "palm sugar" }, { name: "salt" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["rendang", "beef rendang", "indonesian", "malaysian", "beef", "curry", "slow-cooked", "coconut milk", "spicy", "galangal", "lemongrass", "kerisik", "asian", "rich"],
    instructions: "1. Make Spice Paste: Blend rempah ingredients until smooth.\n2. Sauté Spices: Heat oil, sauté whole spices (cinnamon etc.) 1 min. Add spice paste, cook 10-15 mins until fragrant.\n3. Brown Beef: Add beef, stir until colour changes.\n4. Simmer: Add coconut milk, water, tamarind, lime leaves. Bring to boil, reduce heat, cover, simmer 1.5 - 2 hours until beef starts to tenderize.\n5. Reduce: Remove lid. Stir in kerisik, sugar, salt. Simmer uncovered 30-60 mins, stirring often, until sauce is thick, dark, oily, and beef is very tender.\n6. Serve: Serve hot with rice.",
    tags: ["Indonesian", "Malaysian", "Beef", "Curry", "Slow-Cooked", "Spicy", "Rich", "Comfort Food", "Asian Inspired", "Dinner"]
  },
  {
    id: 44,
    name: "Beef Stroganoff",
    description: "Tender strips of beef and mushrooms in a creamy paprika and sour cream sauce, often served over pasta or rice.",
    ingredients: [
      { quantity: "500g", name: "beef steak", prep: "(e.g., rump, sirloin), thinly sliced" }, { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1 tbsp", name: "butter" }, { quantity: "1", name: "onion", prep: "sliced" }, { quantity: "250g", name: "mushrooms", prep: "sliced" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tbsp", name: "plain flour" }, { quantity: "1 tsp", name: "paprika", prep: "(sweet or smoked)" }, { quantity: "1 cup", name: "beef stock" }, { quantity: "1 tbsp", name: "tomato paste", prep: "optional" }, { quantity: "1 tbsp", name: "dijon mustard", prep: "optional" }, { quantity: "1/2 cup", name: "sour cream", prep: "(or creme fraiche)" }, { name: "salt and pepper" }, { name: "fresh parsley", prep: "chopped, for garnish" }, { name: "pasta, rice, or mashed potato", prep: "to serve" }
    ],
    ingredientKeywords: ["stroganoff", "beef stroganoff", "beef", "steak", "rump", "sirloin", "mushrooms", "onion", "sour cream", "paprika", "creamy", "russian", "european", "comfort food", "pasta", "rice"],
    instructions: "1. Brown Beef: Season beef strips with salt & pepper. Heat oil in a large pan over high heat. Brown beef quickly in batches. Remove beef, set aside.\n2. Cook Veggies: Reduce heat to medium. Add butter to pan. Add onion, cook until softened (5 mins). Add mushrooms, cook until browned (5-7 mins). Add garlic, cook 1 min.\n3. Make Sauce: Sprinkle flour and paprika over veggies, stir 1 min. Gradually whisk in beef stock until smooth. Stir in tomato paste and mustard (if using).\n4. Simmer: Bring sauce to a simmer, cook 5 mins until slightly thickened.\n5. Finish: Reduce heat to low. Return beef (and any juices) to the pan. Stir in sour cream. Heat gently (do not boil). Season with salt & pepper.\n6. Serve: Serve immediately over hot pasta, rice, or mash. Garnish with parsley.",
    tags: ["Beef", "Steak", "Mushroom", "Creamy", "Comfort Food", "European", "Weeknight Dinner", "Dinner", "Pasta", "Rice"]
  },
  {
    id: 45,
    name: "Beef Bulgogi (Korean BBQ Beef)",
    description: "Thinly sliced beef marinated in a sweet and savoury sauce, quickly grilled or pan-fried.",
    ingredients: [
        { quantity: "500g", name: "beef sirloin or ribeye", prep: "very thinly sliced" }, { quantity: "1/4 cup", name: "soy sauce" }, { quantity: "2 tbsp", name: "pear", prep: "grated (Asian pear preferred)" }, { quantity: "1 tbsp", name: "brown sugar" }, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tsp", name: "ginger", prep: "grated" }, { quantity: "1 tbsp", name: "rice wine (mirin)", prep: "optional" }, { quantity: "pinch", name: "black pepper" }, { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1/2", name: "onion", prep: "sliced (optional)" }, { name: "spring onions", prep: "sliced (garnish)" }, { name: "sesame seeds", prep: "toasted (garnish)" }, { name: "rice", prep: "to serve" }, { name: "lettuce leaves", prep: "for wraps (optional)" }
    ],
    ingredientKeywords: ["bulgogi", "korean", "beef", "sirloin", "ribeye", "bbq", "barbecue", "soy sauce", "pear", "sesame oil", "garlic", "ginger", "sugar", "asian", "quick", "grill", "pan-fry"],
    instructions: "1. Marinate beef: Combine beef with all marinade ingredients. Marinate 30+ minutes.\n2. Cook: Heat oil in skillet/grill (medium-high). Add onion (if using), cook 1-2 mins. Add beef in single layer (batches if needed). Cook quickly (2-4 mins total), flipping once.\n3. Serve: Garnish with spring onions and sesame seeds. Serve with rice and lettuce wraps.",
    tags: ["Korean", "Beef", "BBQ", "Grill", "Quick Meal", "Asian Inspired", "Weeknight Dinner", "Savoury", "Sweet"]
  },
  {
    id: 46,
    name: "Classic Roast Beef with Gravy",
    description: "A traditional roast beef joint, perfect for a Sunday lunch or special occasion, served with homemade gravy.",
    ingredients: [
        { quantity: "1.5 - 2kg", name: "beef roasting joint", prep: "(e.g., topside, silverside, ribeye)" },
        { quantity: "1 tbsp", name: "olive oil" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "2", name: "onions", prep: "quartered" },
        { quantity: "2", name: "carrots", prep: "roughly chopped" },
        { quantity: "2 sticks", name: "celery", prep: "roughly chopped" },
        { quantity: "few sprigs", name: "thyme or rosemary", prep: "optional" },
        // Gravy:
        { quantity: "2 tbsp", name: "plain flour" },
        { quantity: "2 cups", name: "beef stock", prep: "hot" },
        { quantity: "1 tbsp", name: "worcestershire sauce", prep: "optional" },
        { quantity: "splash", name: "red wine", prep: "optional" }
    ],
    ingredientKeywords: ["roast beef", "beef roast", "roast", "beef", "topside", "silverside", "ribeye", "gravy", "sunday roast", "british", "traditional", "onion", "carrot", "celery", "beef stock"],
    instructions: "1. Prep Beef: Preheat oven (e.g., 200°C/180°C fan initially). Rub beef joint with oil, season generously with salt & pepper.\n2. Sear Beef (optional but recommended): Heat a little oil in a large ovenproof pan/roasting tin. Sear beef on all sides until browned.\n3. Roast: Place quartered onions, carrots, celery (and herbs if using) in roasting tin. Place beef on top. Roast according to weight and desired doneness (e.g., for medium-rare: initial high heat for 15 mins, then reduce to 180°C/160°C fan and roast for 15 mins per 500g, plus 15 mins extra). Use a meat thermometer for accuracy.\n4. Rest Beef: Remove beef from tin, place on warm plate, cover loosely with foil. Rest for at least 15-20 minutes before carving.\n5. Make Gravy: Place roasting tin over medium heat on stovetop (discard excess fat, leave juices/veg). Stir in flour, cook 1 min. Gradually whisk in hot beef stock (and optional wine). Bring to simmer, scraping bottom of tin. Simmer 5-10 mins until thickened. Add worcestershire if using. Strain gravy through sieve (pressing veg), season to taste.\n6. Serve: Carve rested beef thinly. Serve with gravy and roasted vegetables/potatoes.",
    tags: ["Roast", "Beef", "Sunday Roast", "Traditional", "British", "Comfort Food", "Gravy", "Dinner", "Special Occasion"]
  },
   {
    id: 47,
    name: "Beef Chow Mein",
    description: "Classic Chinese-American stir-fried noodles with beef strips and crisp vegetables.",
    ingredients: [
        { quantity: "250g", name: "egg noodles", prep: "(fresh or dried)" },
        { quantity: "300g", name: "beef steak", prep: "(rump/sirloin), thinly sliced against grain" },
        // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine" },
        // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tsp", name: "dark soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "chicken/beef stock or water" }, { quantity: "1 tsp", name: "cornflour", prep:"mixed with 1 tbsp water (slurry)"},
        // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "sliced" }, { quantity: "1", name: "carrot", prep: "julienned" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1/2", name: "capsicum", prep: "sliced" }, { quantity: "few leaves", name: "cabbage or bok choy", prep:"sliced"}, { quantity: "2 cloves", name: "garlic", prep:"minced"}
    ],
    ingredientKeywords: ["chow mein", "beef chow mein", "chinese", "noodles", "egg noodles", "beef", "beef strips", "stir-fry", "oyster sauce", "soy sauce", "bean sprouts", "carrot", "onion", "asian", "takeaway"],
    instructions: "1. Prep: Cook noodles until al dente, rinse, drain. Marinate beef (soy, cornflour, wine) 15 mins. Mix sauce ingredients (except slurry).\n2. Stir-fry Beef: Heat 1 tbsp oil in wok (high heat). Stir-fry beef until browned. Remove.\n3. Stir-fry Veggies: Heat 1 tbsp oil. Stir-fry onion, carrot, capsicum 2 mins. Add garlic, cabbage/bok choy, stir-fry 1 min.\n4. Combine: Return beef to wok. Add cooked noodles, bean sprouts, and sauce mixture. Toss well over high heat 1-2 mins.\n5. Thicken: Stir cornflour slurry, add to wok, toss until sauce thickens slightly.\n6. Serve: Serve immediately.",
    tags: ["Chinese", "Noodles", "Beef", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Quick Meal"]
  },
   {
    id: 48,
    name: "Corned Beef Fritters",
    description: "Simple fritters made with canned corned beef, mashed potato, and onion, pan-fried until golden.",
    ingredients: [
        { quantity: "340g can", name: "corned beef", prep: "roughly chopped/flaked" },
        { quantity: "2 cups", name: "cold mashed potato" },
        { quantity: "1/2", name: "onion", prep: "finely chopped" },
        { quantity: "1", name: "egg", prep: "lightly beaten" },
        { quantity: "2 tbsp", name: "parsley", prep: "chopped (optional)" },
        { name: "salt and pepper", prep: "to taste" },
        { quantity: "2 tbsp", name: "plain flour", prep: "optional, if mixture too wet" },
        { quantity: "2-3 tbsp", name: "vegetable oil or butter", prep: "for frying" }
    ],
    ingredientKeywords: ["corned beef", "fritters", "corned beef hash", "mashed potato", "potato", "onion", "canned beef", "budget friendly", "leftovers", "pan-fried", "aussie", "british", "comfort food", "quick"],
    instructions: "1. Combine: In a bowl, mix corned beef, cold mashed potato, chopped onion, beaten egg, parsley (if using), salt, and pepper. If mixture seems too wet to hold shape, stir in flour.\n2. Form Fritters: Shape mixture into small patties (about 6-8).\n3. Fry: Heat oil/butter in a frying pan over medium heat. Carefully place fritters in the pan (don't overcrowd). Cook for 4-5 minutes per side, until golden brown and heated through.\n4. Drain: Remove fritters and drain briefly on paper towels.\n5. Serve: Serve hot, often with tomato sauce or a fried egg.",
    tags: ["Budget Friendly", "Leftovers", "Comfort Food", "Corned Beef", "Potato", "Pan-Fried", "Quick Meal", "Aussie Favourite", "British", "Beef"]
  },
   {
    id: 49,
    name: "Steak Diane",
    description: "A classic restaurant dish of pan-fried steak flambéed with brandy and served with a creamy mushroom, mustard, and Worcestershire sauce.",
    ingredients: [
        { quantity: "2", name: "beef steaks", prep: "(e.g., fillet, sirloin, approx 200g each), flattened slightly" },
        { quantity: "1 tbsp", name: "butter" }, { quantity: "1 tbsp", name: "olive oil" },
        { quantity: "1", name: "shallot", prep: "finely chopped (or 1/4 onion)" },
        { quantity: "100g", name: "mushrooms", prep: "sliced" },
        { quantity: "1 clove", name: "garlic", prep: "minced" },
        { quantity: "2 tbsp", name: "brandy or cognac" },
        { quantity: "1/4 cup", name: "beef stock" },
        { quantity: "1/4 cup", name: "heavy cream (thickened cream)" },
        { quantity: "1 tsp", name: "dijon mustard" },
        { quantity: "1 tsp", name: "worcestershire sauce" },
        { quantity: "1 tbsp", name: "parsley", prep: "chopped" },
        { name: "salt and pepper" }
    ],
    ingredientKeywords: ["steak diane", "steak", "beef", "fillet", "sirloin", "brandy", "flambe", "mushroom", "cream", "mustard", "worcestershire", "classic", "retro", "pan-fried", "french", "american"],
    instructions: "1. Cook Steaks: Season steaks with salt & pepper. Heat butter & oil in pan over medium-high heat. Cook steaks to desired doneness (e.g., 2-4 mins per side for medium-rare). Remove steaks, keep warm.\n2. Sauté Aromatics: Add shallot to pan, cook 1 min. Add mushrooms, cook until browned. Add garlic, cook 30 secs.\n3. Flambé (Carefully!): Remove pan from heat. Add brandy. Return to heat, carefully ignite brandy (tilt pan towards flame or use long match). Let flames die down. *Safety first - keep flammables away, have lid ready*.\n4. Make Sauce: Add beef stock, cream, mustard, Worcestershire sauce. Simmer gently until sauce thickens slightly.\n5. Finish: Stir in parsley. Return steaks (and any juices) to pan briefly to coat in sauce.\n6. Serve: Serve immediately, spooning sauce over steaks.",
    tags: ["Steak", "Beef", "Classic", "Retro", "Flambe", "Mushroom", "Creamy", "Dinner", "Special Occasion", "Pan-Fried"]
  },
   {
     id: 50,
     name: "Chilli Con Carne",
     description: "A hearty and flavourful Tex-Mex stew made with beef mince, beans, tomatoes, and chilli spices.",
     ingredients: [
       { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1 large", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "capsicum", prep: "chopped (optional)" }, { quantity: "500g", name: "beef mince" }, { quantity: "1-2 tbsp", name: "chilli powder", prep: "(adjust to taste)" }, { quantity: "1 tsp", name: "ground cumin" }, { quantity: "1/2 tsp", name: "smoked paprika", prep:"optional"}, { quantity: "1/4 tsp", name: "cayenne pepper", prep:"optional"}, { quantity: "400g can", name: "chopped tomatoes" }, { quantity: "400g can", name: "kidney beans", prep: "rinsed and drained" }, { quantity: "1 cup", name: "beef stock" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "1 tsp", name: "oregano", prep:"dried"}, { name: "salt and pepper" }, // Serving suggestions:
       { name: "rice", prep: "cooked" }, { name: "sour cream" }, { name: "grated cheese" }, { name: "corn chips" }, { name: "avocado" }
     ],
     ingredientKeywords: ["chilli con carne", "chilli", "beef", "beef mince", "mince", "beans", "kidney beans", "tomato", "spicy", "tex-mex", "mexican", "stew", "comfort food", "cumin", "chilli powder"],
     instructions: "1. Sauté Veg: Heat oil, sauté onion until soft (5 mins). Add garlic and capsicum (if using), cook 2 mins.\n2. Brown Mince: Add mince, cook until browned, breaking it up. Drain fat.\n3. Add Spices/Tomatoes: Stir in chilli powder, cumin, paprika, cayenne. Cook 1 min. Add chopped tomatoes, kidney beans, beef stock, tomato paste, oregano. Season.\n4. Simmer: Bring to boil, reduce heat, cover loosely, simmer for at least 30 minutes (longer is better), stirring occasionally. Add water if needed.\n5. Serve: Serve hot with rice, sour cream, cheese, corn chips, avocado etc.",
     tags: ["Beef", "Mince", "Chilli", "Spicy", "Tex-Mex", "Mexican", "Comfort Food", "Stew", "Beans", "Family Favourite", "Weeknight Dinner", "Budget Friendly"]
   }
   // Continue adding beef recipes if more needed / space allows...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsBeef);