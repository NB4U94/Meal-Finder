// meals_schnitzel.js

const mealsSchnitzel = [
  {
    id: 193,
    name: "Chicken Schnitzel",
    description: "Simple breaded chicken cutlets, pan-fried until golden and crispy. A versatile favourite.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { name: "salt and pepper" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "breadcrumbs", prep: "(panko or regular)" }, { quantity: "4-6 tbsp", name: "vegetable oil or olive oil", prep: "for frying" }, { name: "lemon wedges", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken schnitzel", "schnitzel", "chicken", "chicken breast", "breaded", "crumbed", "pan-fried", "crispy", "german", "austrian", "aussie", "simple", "kid friendly", "family favourite", "dinner", "lunch"],
    instructions: "1. Prepare Chicken: Pound chicken fillets between baking paper to 1-1.5cm thickness. Season well.\n2. Crumb Chicken: Set up 3 dishes: flour, beaten eggs, breadcrumbs. Coat chicken first in flour, then dip in egg, finally press firmly into breadcrumbs.\n3. Fry Schnitzels: Heat oil in large pan (medium-high). Fry chicken 3-5 minutes per side until golden brown, crispy, and cooked through. Drain.\n4. Serve: Serve immediately with lemon wedges.",
    tags: ["Chicken", "Schnitzel", "Pan-Fried", "Crispy", "Simple", "Weeknight Dinner", "Kid Friendly", "Aussie Favourite", "European", "Family Favourite", "Dinner", "Lunch"]
  },
  {
    id: 194,
    name: "Chicken Parmigiana (Parma/Parmi)",
    description: "Crispy chicken schnitzel topped with Napoli sauce, ham (optional), and melted mozzarella and parmesan cheese.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets", prep:"prepared as schnitzels (see #193)" }, { quantity: "1 cup", name: "Napoli sauce" }, { quantity: "4 slices", name: "ham", prep: "optional" }, { quantity: "1.5 cups", name: "mozzarella cheese", prep: "grated" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated" }, { name: "Serve with:", prep: "chips and salad" }
    ],
    ingredientKeywords: ["chicken", "schnitzel", "parma", "parmi", "parmigiana", "breaded", "crumbed", "cheese", "mozzarella", "parmesan", "napoli sauce", "ham", "pub", "pub classic", "aussie", "australian", "italian inspired", "dinner", "comfort food", "chips"],
    instructions: "1. Cook Schnitzels: Prepare and cook chicken schnitzels (#193) until golden and cooked. Drain.\n2. Assemble: Place cooked schnitzels in an oven-safe dish. Top with ham (if using), Napoli sauce, mozzarella, and parmesan.\n3. Bake: Bake in preheated oven (180°C/160°C fan) for 10-15 minutes, until cheese is melted and bubbly.\n4. Serve: Serve immediately with chips and salad.",
    tags: ["Pub Classic", "Chicken", "Schnitzel", "Cheese", "Aussie Favourite", "Italian Inspired", "Dinner", "Family Favourite", "Comfort Food", "Chips"]
  },
  {
    id: 195,
    name: "Wiener Schnitzel (Veal Schnitzel)",
    description: "Traditional Viennese dish: thinly pounded veal cutlets, breaded and pan-fried until golden.",
    ingredients: [
        { quantity: "4", name: "veal cutlets (top round/leg)", prep: "approx 150g each, pounded very thin (3-5mm)" },
        { name: "salt" },
        { quantity: "1 cup", name: "plain flour" },
        { quantity: "2-3", name: "eggs", prep: "beaten" },
        { quantity: "1.5 - 2 cups", name: "fine dried breadcrumbs" },
        { name: "Clarified butter or vegetable oil (e.g., sunflower, canola)", prep: "for shallow frying (enough for 1-2cm depth)" },
        { name: "lemon wedges", prep: "to serve" },
        { name: "Optional serving:", prep: "parsley potatoes, lingonberry jam, simple salad" }
    ],
    ingredientKeywords: ["wiener schnitzel", "schnitzel", "veal", "veal cutlet", "breaded", "crumbed", "pan-fried", "crispy", "austrian", "viennese", "german", "european", "classic", "lemon"],
    instructions: "1. Prepare Veal: Pound veal cutlets very thin between plastic wrap. Season lightly with salt just before breading.\n2. Crumb Veal: Set up 3 dishes: flour, beaten eggs, fine breadcrumbs. Coat veal first in flour, then dip completely in egg, then press gently into breadcrumbs (do not press too hard, should be loose).\n3. Fry Schnitzels: Heat generous amount of clarified butter/oil in large pan (medium-high) so schnitzel can 'swim'. Carefully place breaded veal in hot fat. Fry 2-3 minutes per side, swirling pan gently, until deep golden brown and crispy. Should puff up slightly.\n4. Drain: Remove schnitzels, drain briefly on paper towels.\n5. Serve: Serve immediately with lemon wedges, traditionally garnished with parsley.",
    tags: ["Austrian", "German", "European", "Classic", "Schnitzel", "Veal", "Pan-Fried", "Crispy", "Dinner", "Lunch"]
  },
  {
    id: 196,
    name: "Pork Schnitzel (Schweineschnitzel)",
    description: "Thinly pounded pork cutlets, breaded and pan-fried golden brown.",
    ingredients: [
        { quantity: "4", name: "pork loin steaks or cutlets", prep: "approx 150g each, trimmed, pounded thin (5-7mm)" },
        { name: "salt and pepper" },
        { quantity: "1 cup", name: "plain flour" },
        { quantity: "2", name: "eggs", prep: "beaten" },
        { quantity: "1.5 cups", name: "breadcrumbs" },
        { name: "Vegetable oil or lard", prep: "for shallow frying" },
        { name: "lemon wedges", prep: "to serve" },
        { name: "Optional sides:", prep: "potato salad, chips, spaetzle, mushroom sauce" }
    ],
    ingredientKeywords: ["pork schnitzel", "schweineschnitzel", "schnitzel", "pork", "pork loin", "pork cutlet", "breaded", "crumbed", "pan-fried", "crispy", "german", "austrian", "european", "dinner", "lunch"],
    instructions: "1. Prepare Pork: Pound pork cutlets thin between plastic wrap. Season with salt and pepper.\n2. Crumb Pork: Set up 3 dishes: flour, beaten eggs, breadcrumbs. Coat pork in flour, then egg, then breadcrumbs, pressing gently.\n3. Fry Schnitzels: Heat 1-2cm oil/lard in large pan (medium-high). Fry schnitzels 3-4 minutes per side until golden brown, crispy, and cooked through.\n4. Drain: Drain on paper towels.\n5. Serve: Serve immediately with lemon wedges and desired sides.",
    tags: ["German", "Austrian", "European", "Schnitzel", "Pork", "Pan-Fried", "Crispy", "Dinner", "Lunch", "Comfort Food"]
  },
  {
    id: 197,
    name: "Jägerschnitzel (Hunter's Schnitzel - Pork with Mushroom Gravy)",
    description: "Pan-fried pork schnitzel served smothered in a creamy mushroom gravy.",
    ingredients: [
        // Pork Schnitzel:
        { quantity: "4", name: "pork cutlets", prep: "pounded thin, breaded & fried (see #196)" },
        // Mushroom Gravy (Jägersoße):
        { quantity: "1 tbsp", name: "butter" }, { quantity: "1", name: "onion or shallot", prep: "finely chopped" }, { quantity: "250g", name: "mushrooms", prep: "sliced" }, { quantity: "optional:", name:"50g bacon lardons"}, { quantity: "1 tbsp", name: "plain flour" }, { quantity: "1 cup", name: "beef or vegetable stock" }, { quantity: "1/2 cup", name: "cream" }, { quantity: "1 tsp", name: "dijon mustard", prep:"opt."}, { quantity: "1 tbsp", name: "parsley", prep:"chopped"}, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["jagerschnitzel", "jägerschnitzel", "hunter schnitzel", "schnitzel", "pork schnitzel", "pork", "mushroom gravy", "mushroom sauce", "mushrooms", "gravy", "cream", "german", "austrian", "european", "dinner", "comfort food"],
    instructions: "1. Prepare & Cook Schnitzels: Prepare pork cutlets, bread, and pan-fry until golden and cooked as per Pork Schnitzel recipe (#196). Keep warm.\n2. Make Mushroom Gravy: While schnitzels rest (or using same pan), melt butter. Sauté bacon (if using) then onion/shallot until soft. Add mushrooms, cook until browned. Stir in flour (1 min). Gradually whisk in stock until smooth. Bring to simmer. Stir in cream and mustard (opt.). Simmer gently until thickened. Stir in parsley. Season.\n3. Serve: Place cooked pork schnitzels on plates. Spoon generous amount of mushroom gravy over each schnitzel. Serve immediately, often with chips, spaetzle, or potatoes.",
    tags: ["German", "Austrian", "European", "Schnitzel", "Pork", "Mushroom Gravy", "Mushroom Sauce", "Dinner", "Comfort Food", "Pub Classic style"]
  },
  {
    id: 198,
    name: "Chicken Katsu (Japanese Fried Chicken Cutlet)",
    description: "Crispy deep-fried chicken cutlet coated in panko breadcrumbs, often served with Tonkatsu sauce.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep:"beaten" }, { quantity: "1.5 - 2 cups", name: "panko breadcrumbs" }, { name: "vegetable oil", prep:"for frying" }, { name: "Serve with:", prep: "tonkatsu sauce, shredded cabbage, rice" }
    ],
    ingredientKeywords: ["katsu", "chicken katsu", "chicken", "panko", "breadcrumbs", "japanese", "deep fried", "shallow fried", "crispy", "cutlet", "tonkatsu sauce"],
    instructions: "1. Prepare Chicken: Flatten slightly. Season.\n2. Crumb Chicken: Coat in flour, then egg, then panko, pressing gently.\n3. Fry Chicken: Heat 1-2cm oil (medium heat, ~170°C). Fry 4-6 mins per side until golden & cooked. Drain.\n4. Serve: Slice katsu. Serve with Tonkatsu sauce, cabbage, rice.",
    tags: ["Japanese", "Chicken", "Katsu", "Deep Fried", "Shallow Fried", "Crispy", "Panko", "Dinner", "Lunch", "Asian Inspired", "Schnitzel Style"]
  },
  {
    id: 199,
    name: "Tonkatsu (Japanese Fried Pork Cutlet)",
    description: "Japanese pork cutlet, breaded with panko and deep-fried until golden brown.",
    ingredients: [
        { quantity: "4", name: "thick boneless pork loin chops", prep: "(approx 1.5-2cm thick), fat cap scored (opt.)" },
        { name: "salt and black pepper" },
        { quantity: "1/2 cup", name: "plain flour" },
        { quantity: "2", name: "eggs", prep: "beaten" },
        { quantity: "2 cups", name: "panko breadcrumbs" },
        { name: "vegetable oil", prep: "for deep frying (2-3cm deep)" },
        { name: "Serve with:", prep: "tonkatsu sauce, shredded cabbage, rice, japanese mustard (karashi)" }
    ],
    ingredientKeywords: ["tonkatsu", "pork tonkatsu", "katsu", "pork", "pork chop", "pork loin", "panko", "breadcrumbs", "japanese", "deep fried", "crispy", "cutlet", "tonkatsu sauce"],
    instructions: "1. Prepare Pork: Make shallow cuts in connective tissue between meat and fat to prevent curling. Season pork chops well with salt and pepper.\n2. Crumb Pork: Set up 3 dishes: flour, beaten eggs, panko. Coat pork chops first in flour, then dip completely in egg, then press firmly into panko to create a thick, even crust.\n3. Heat Oil: Heat oil (2-3cm deep) in a pan or wok to 170°C-180°C.\n4. Fry Tonkatsu: Carefully slide breaded pork chops into hot oil. Fry for 5-8 minutes total, turning once halfway through, until deep golden brown, crispy, and pork is cooked through (internal temp ~65-70°C). Adjust heat if browning too quickly.\n5. Drain: Remove cooked tonkatsu, drain well on wire rack.\n6. Serve: Let rest a minute. Slice tonkatsu into thick strips. Serve immediately with shredded cabbage, rice, and Tonkatsu sauce.",
    tags: ["Japanese", "Pork", "Katsu", "Tonkatsu", "Deep Fried", "Crispy", "Panko", "Dinner", "Lunch", "Asian Inspired", "Schnitzel Style"]
  },
  {
    id: 200,
    name: "Chicken Kiev",
    description: "Breaded chicken breast fillet rolled around chilled garlic butter, then fried or baked.",
    ingredients: [
        { quantity: "4", name: "boneless, skinless chicken breast fillets" },
        // Garlic Butter Filling:
        { quantity: "100g", name: "butter", prep: "softened" }, { quantity: "3-4 cloves", name: "garlic", prep: "crushed" }, { quantity: "2 tbsp", name: "fresh parsley", prep: "finely chopped" }, { quantity: "pinch", name: "salt" },
        // Coating:
        { quantity: "1/2 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "breadcrumbs", prep:"(panko or fine)" },
        { name: "Vegetable oil", prep: "for shallow or deep frying (or use less for baking)" }
    ],
    ingredientKeywords: ["chicken kiev", "kiev", "chicken", "chicken breast", "garlic butter", "butter", "garlic", "parsley", "breaded", "crumbed", "fried", "baked", "retro", "european", "russian inspired", "ukrainian inspired", "comfort food"],
    instructions: "1. Make Garlic Butter: Mash softened butter with crushed garlic, parsley, salt. Form into 4 small logs/ovals. Chill or freeze until very firm (30+ mins).\n2. Prepare Chicken Pockets: Place chicken breast between plastic wrap. Pound gently to flatten evenly (about 1cm thick). Be careful not to tear.\n3. Fill Chicken: Place one firm garlic butter log onto one end of flattened chicken breast. Fold in sides, then roll up tightly from butter end to encase butter completely. Ensure no gaps.\n4. Chill (Important): Place rolled chicken parcels seam-side down on plate, cover, chill thoroughly (at least 30 mins, longer better) to help seal and firm up.\n5. Crumb Chicken: Set up 3 dishes: flour, beaten eggs, breadcrumbs. Carefully coat chilled chicken rolls first in flour, then egg, then breadcrumbs. Can double coat (egg then breadcrumbs again) for extra security.\n6. Cook (Choose Method):\n    a) Frying: Heat 1-2cm oil (medium heat). Fry Kievs 5-7 mins per side until golden brown and chicken cooked. OR Deep fry (170°C) 8-10 mins.\n    b) Baking: Preheat oven 180°C. Brown Kievs briefly in hot oiled pan (2 mins per side). Transfer to baking tray, bake 20-25 mins until cooked through.\n7. Serve: Rest briefly. Serve immediately (careful, hot butter inside!). Often served with mash or greens.",
    tags: ["Chicken", "Kiev", "Garlic Butter", "Butter", "Breaded", "Fried", "Baked", "Retro", "European", "Comfort Food", "Dinner", "Schnitzel adjacent"]
  },
   {
    id: 201,
    name: "Chicken Cordon Bleu",
    description: "Chicken breast pounded thin, wrapped around ham and Swiss cheese, breaded, and fried or baked.",
    ingredients: [
        { quantity: "4", name: "boneless, skinless chicken breast fillets" },
        { quantity: "4 slices", name: "cooked ham" },
        { quantity: "4 slices", name: "Swiss cheese", prep: "(or Gruyere)" },
        // Coating:
        { quantity: "1/2 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "breadcrumbs" },
        { name: "Vegetable oil", prep: "for frying/baking" },
        { name: "salt and pepper" }
    ],
    ingredientKeywords: ["chicken cordon bleu", "cordon bleu", "chicken", "chicken breast", "ham", "swiss cheese", "gruyere", "cheese", "breaded", "crumbed", "fried", "baked", "retro", "french inspired", "european", "comfort food", "schnitzel related"],
    instructions: "1. Prepare Chicken: Pound chicken breasts thin between plastic wrap (similar to schnitzel).\n2. Assemble: Lay flattened chicken breast out. Place slice ham, then slice cheese on top (fold cheese if needed to fit within ham). Roll chicken tightly around ham/cheese, folding in sides if possible. Secure with toothpicks if necessary.\n3. Crumb Chicken: Season chicken rolls lightly. Set up flour, egg, breadcrumbs. Coat rolls in flour, then egg, then breadcrumbs.\n4. Cook (Choose Method):\n    a) Frying: Heat 1-2cm oil (medium heat). Fry Cordon Bleu 5-7 minutes per side until golden and chicken cooked, cheese melted. Remove toothpicks.\n    b) Baking: Preheat oven 180°C. Brown briefly in hot oiled pan. Transfer to tray, bake 25-30 mins until cooked.\n5. Serve: Rest briefly. Serve hot, often with a creamy sauce, potatoes, or vegetables.",
    tags: ["Chicken", "Cordon Bleu", "Ham", "Cheese", "Swiss Cheese", "Breaded", "Fried", "Baked", "Retro", "European", "Comfort Food", "Dinner", "Schnitzel related"]
  },
  {
    id: 202,
    name: "Chicken Schnitzel Burger",
    description: "Crispy chicken schnitzel in a burger bun with lettuce, tomato, cheese, and mayo.",
    ingredients: [
        { quantity: "4", name: "chicken schnitzels", prep:"cooked (see #193)" }, { quantity: "4", name: "burger buns" }, { name: "Mayonnaise" }, { name: "Lettuce leaves" }, { name: "Tomato slices" }, { quantity: "4 slices", name: "cheese", prep:"opt." }
    ],
    ingredientKeywords: ["chicken burger", "schnitzel burger", "chicken schnitzel", "chicken", "burger", "schnitzel", "pub food", "aussie", "lunch", "dinner", "sandwich", "mayonnaise", "quick option"],
    instructions: "1. Cook Schnitzels: Cook schnitzels until golden & cooked.\n2. Assemble Burger: Toast buns (opt.). Spread mayo. Layer lettuce, tomato, hot schnitzel, cheese (opt.). Add bun top.\n3. Serve: Serve immediately, often with chips.",
    tags: ["Pub Classic", "Burger", "Chicken", "Schnitzel", "Aussie Favourite", "Dinner", "Lunch", "Comfort Food", "Kid Friendly", "Quick Meal"]
  }
  // Further variations could include different coatings, sauces, or proteins (fish schnitzel, etc.)
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsSchnitzel);