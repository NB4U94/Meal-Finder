// meals_family_favourite.js

const mealsFamilyFavourite = [
  {
    id: 119,
    name: "Spaghetti Bolognese",
    description: "A classic Italian-Australian family favourite, rich beef mince sauce simmered with vegetables and tomatoes.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "grated" }, { quantity: "1 stick", name: "celery", prep: "finely chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "400g can", name: "diced tomatoes" }, { quantity: "1/2 cup", name: "beef stock/red wine" }, { quantity: "1 tsp", name: "dried oregano" }, { quantity: "1/2 tsp", name: "dried basil" }, { quantity: "1", name: "bay leaf", prep: "optional" }, { quantity: "400g", name: "spaghetti" }, { name: "parmesan cheese", prep: "grated, to serve" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["spaghetti", "bolognese", "pasta", "beef", "beef mince", "mince", "onion", "garlic", "carrot", "celery", "tomato", "italian", "aussie", "family favourite", "comfort food", "kid friendly", "weeknight dinner"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, garlic, carrot, celery until soft.\n2. Brown Mince: Add mince, brown, drain fat.\n3. Add Liquids/Herbs: Stir in tomato paste (1 min). Add tomatoes, stock/wine, herbs, bay leaf. Season.\n4. Simmer: Simmer covered 30+ mins (longer better). Remove bay leaf.\n5. Cook Pasta: Cook spaghetti.\n6. Serve: Serve sauce over spaghetti, top with parmesan.",
    tags: ["Family Favourite", "Beef", "Pasta", "Italian", "Aussie Favourite", "Comfort Food", "Weeknight Dinner", "Mince", "Kid Friendly"]
  },
  {
    id: 120,
    name: "Chicken Parmigiana (Parma/Parmi)",
    description: "The ultimate Aussie pub classic made family-friendly: crispy chicken schnitzel topped with Napoli sauce and melted cheese.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "panko breadcrumbs" }, { quantity: "4 tbsp", name: "olive oil" }, { quantity: "1 cup", name: "Napoli sauce" }, { quantity: "4 slices", name: "ham", prep: "optional" }, { quantity: "1.5 cups", name: "mozzarella cheese", prep: "grated" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated" }, { name: "chips or mashed potato", prep: "to serve" }, { name: "steamed vegetables or salad", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken", "chicken breast", "schnitzel", "parma", "parmi", "parmigiana", "bread crumbs", "panko", "cheese", "mozzarella", "parmesan", "napoli sauce", "ham", "pub", "italian", "aussie", "australian", "family favourite", "dinner", "comfort food", "kid friendly"],
    instructions: "1. Prep/Crumb Chicken: Pound chicken (1.5cm). Coat in flour, then egg, then breadcrumbs.\n2. Cook Schnitzels: Heat oil, cook chicken 3-4 mins per side until golden. Drain.\n3. Assemble: Place schnitzels in oven dish. Top with ham, Napoli sauce, mozzarella, parmesan.\n4. Bake: Bake 180°C (160°C fan) for 10-15 mins until cheese melts.\n5. Serve: Serve with chips/mash and veg/salad.",
    tags: ["Pub Classic", "Chicken", "Schnitzel", "Cheese", "Aussie Favourite", "Italian", "Dinner", "Family Favourite", "Comfort Food", "Kid Friendly"]
  },
   {
    id: 121,
    name: "Beef Tacos",
    description: "Classic ground beef tacos with favourite toppings, perfect for a fun family meal.",
    ingredients: [
      { quantity: "1 tbsp", name: "oil" }, { quantity: "500g", name: "beef mince" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 packet", name: "taco seasoning" }, { quantity: "1/2 cup", name: "water/broth" }, { quantity: "8-12", name: "taco shells (hard/soft)" }, // Toppings:
      { name: "lettuce", prep: "shredded" }, { name: "tomatoes", prep: "diced" }, { name: "cheese", prep: "shredded" }, { name: "sour cream" }, { name: "salsa" }, { name: "avocado/guacamole", prep:"opt."}
    ],
    ingredientKeywords: ["taco", "tacos", "beef", "beef mince", "mince", "ground beef", "onion", "garlic", "taco seasoning", "mexican", "family meal", "fun", "lettuce", "tomato", "cheese", "sour cream", "salsa", "kid friendly", "quick meal"],
    instructions: "1. Cook Beef & Onion: Heat oil, brown mince and onion. Drain fat.\n2. Add Seasoning: Add garlic (30 secs). Stir in taco seasoning & water/broth.\n3. Simmer: Simmer 5-10 mins until thickish.\n4. Prepare Shells & Toppings: Warm shells. Prep toppings.\n5. Serve: Let everyone assemble their own tacos.",
    tags: ["Mexican", "Beef", "Mince", "Tacos", "Family Favourite", "Fun Meal", "Weeknight Dinner", "Quick Meal", "Kid Friendly"]
  },
   {
    id: 122,
    name: "Shepherd's Pie / Cottage Pie",
    description: "Comforting savoury mince (lamb or beef) topped with creamy mashed potato.",
    ingredients: [
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2", name: "carrots", prep: "diced" }, { quantity: "2 sticks", name: "celery", prep: "diced" }, { quantity: "500g", name: "lamb or beef mince" }, { quantity: "2 tbsp", name: "flour" }, { quantity: "1.5 cups", name: "stock" }, { quantity: "2 tbsp", name: "tomato paste" }, { quantity: "1 tbsp", name: "worcestershire sauce" }, { quantity: "1 tsp", name: "herbs" }, { quantity: "1/2 cup", name: "peas/corn", prep:"opt." }, { name: "salt and pepper" },
        { quantity: "1kg", name: "potatoes" }, { quantity: "1/4 cup", name: "milk" }, { quantity: "50g", name: "butter" }, { name: "cheese", prep: "grated, opt." }
    ],
    ingredientKeywords: ["shepherds pie", "cottage pie", "lamb", "beef", "mince", "potato", "mashed potato", "comfort food", "british", "irish", "aussie", "family meal", "winter warmer", "pie", "kid friendly", "dinner"],
    instructions: "1. Sauté Veggies.\n2. Brown Mince, drain.\n3. Make Gravy: Stir in flour. Add stock, paste, worcestershire, herbs. Simmer until thick. Season.\n4. Simmer Filling 15-20 mins. Add peas/corn.\n5. Make Mash: Boil potatoes. Mash with milk, butter. Season.\n6. Assemble: Preheat oven 190°C. Filling in dish. Top with mash. Add cheese (opt.).\n7. Bake 25-30 mins until golden.\n8. Serve: Rest 5 mins.",
    tags: ["Comfort Food", "Beef", "Lamb", "Mince", "Potato", "British", "Irish", "Aussie Favourite", "Family Favourite", "Winter Warmer", "Dinner", "Pie", "Kid Friendly"]
  },
  {
    id: 123,
    name: "Classic Macaroni and Cheese (Mac & Cheese)",
    description: "Creamy, cheesy baked macaroni pasta, the ultimate family comfort food.",
    ingredients: [
        { quantity: "500g", name: "macaroni pasta" }, { quantity: "60g", name: "butter" }, { quantity: "1/3 cup", name: "plain flour" }, { quantity: "3 cups", name: "milk", prep: "warm" }, { quantity: "1 tsp", name: "dijon mustard", prep: "optional" }, { quantity: "pinch", name: "cayenne/nutmeg", prep: "optional" }, { quantity: "3 cups", name: "cheddar cheese", prep: "grated" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated (opt.)" }, { name: "salt and pepper" }, // Optional Topping:
        { quantity: "1/2 cup", name: "breadcrumbs" }, { quantity: "1 tbsp", name: "butter", prep: "melted" }
    ],
    ingredientKeywords: ["mac and cheese", "macaroni cheese", "macaroni", "pasta", "cheese", "cheddar", "parmesan", "comfort food", "baked", "casserole", "american", "british", "aussie", "vegetarian", "kid friendly", "family favourite", "side dish"],
    instructions: "1. Cook Pasta: Cook macaroni al dente. Drain.\n2. Make Cheese Sauce: Melt 60g butter. Whisk in flour (1 min). Whisk in warm milk until smooth & thick. Remove heat. Stir in cheeses, mustard, cayenne/nutmeg. Season.\n3. Combine: Add pasta to cheese sauce, stir.\n4. Assemble & Bake: Preheat oven 180°C. Pour mix into dish. Top with optional buttered breadcrumbs/cheese.\n5. Bake 20-25 mins until golden & bubbly.\n6. Serve: Rest 5 mins.",
    tags: ["Comfort Food", "Cheese", "Cheddar", "Pasta", "Baked", "Vegetarian", "Kid Friendly", "American", "British", "Aussie Favourite", "Dinner", "Side Dish", "Family Favourite"]
  },
  {
    id: 124,
    name: "Roast Chicken with Vegetables",
    description: "A classic whole roast chicken, juicy and flavourful, cooked with family-friendly roasted vegetables.",
    ingredients: [
        { quantity: "1 (approx 1.6-2kg)", name: "whole chicken" }, { quantity: "2 tbsp", name: "olive oil/melted butter" }, { name: "salt and pepper" }, { quantity: "1", name: "lemon", prep: "halved (opt.)" }, { quantity: "few sprigs", name: "herbs (thyme/rosemary)", prep:"opt." }, { quantity: "1", name: "onion", prep: "quartered" }, // Roasted Vegetables:
        { quantity: "4", name: "potatoes", prep: "chopped large" }, { quantity: "3", name: "carrots", prep: "chopped" }, { quantity: "2", name: "parsnips", prep: "chopped (opt.)" }, { quantity: "1 head", name: "garlic", prep: "halved (opt.)" }, { quantity: "1 tbsp", name: "olive oil" }
    ],
    ingredientKeywords: ["roast chicken", "chicken", "whole chicken", "roast", "roast dinner", "potato", "carrot", "parsnip", "onion", "garlic", "lemon", "herbs", "british", "aussie", "traditional", "comfort food", "sunday roast", "family favourite", "dinner"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Prep Chicken: Pat dry. Rub with oil/butter, season. Place lemon/herbs inside (opt.).\n3. Prep Veggies: Toss potatoes, carrots, parsnips, onion, garlic with 1 tbsp oil, salt, pepper in roasting tin.\n4. Roast: Place chicken on veggies. Roast 1hr 15m - 1hr 45m (approx 20m/500g + 20m), basting. Juices run clear when cooked.\n5. Rest Chicken: Remove chicken, cover loosely, rest 15-20 mins.\n6. Finish Veggies (optional): Return tin to oven if needed while chicken rests.\n7. Carve & Serve: Carve chicken. Serve with roasted vegetables.",
    tags: ["Roast", "Chicken", "Sunday Roast", "Traditional", "Comfort Food", "British", "Aussie Favourite", "Family Favourite", "Dinner"]
  },
  {
    id: 125,
    name: "Homemade Pizza",
    description: "Create your own pizzas with favourite toppings on a simple homemade or store-bought base.",
    ingredients: [
        // Dough (Simple Version):
        { quantity: "1 packet (7g)", name: "instant dried yeast" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 cup", name: "warm water" }, { quantity: "2.5 cups", name: "plain flour (or bread flour)" }, { quantity: "1 tsp", name: "salt" }, { quantity: "2 tbsp", name: "olive oil" }, // Or use store-bought pizza bases
        // Toppings (Examples for 4):
        { quantity: "1 cup", name: "pizza sauce", prep:"(passata or store-bought)" }, { quantity: "2-3 cups", name: "mozzarella cheese", prep:"grated" }, { name: "Pepperoni slices" }, { name: "Ham", prep:"chopped" }, { name: "Mushrooms", prep:"sliced" }, { name: "Capsicum", prep:"sliced" }, { name: "Olives", prep:"pitted" }, { name: "Pineapple chunks", prep:"controversial!" }, { name: "Dried oregano" }
    ],
    ingredientKeywords: ["pizza", "homemade pizza", "dough", "yeast", "flour", "pizza sauce", "tomato", "mozzarella", "cheese", "pepperoni", "ham", "mushroom", "capsicum", "olives", "pineapple", "italian", "american", "family favourite", "fun meal", "kid friendly", "dinner", "takeaway style"],
    instructions: "1. Make Dough (if homemade): Dissolve yeast & sugar in warm water (5 mins). Combine flour & salt. Add yeast mix & olive oil. Mix to form dough. Knead 5-10 mins until smooth. Place in oiled bowl, cover, let rise 1 hour or until doubled.\n2. Prepare Pizzas: Preheat oven to highest temp (220°C-240°C), place pizza stone or baking tray inside. Punch down dough, divide into 4 balls. Roll/stretch each ball into thin base on floured surface.\n3. Top Pizzas: Place base on baking paper. Spread pizza sauce, sprinkle cheese, add desired toppings, sprinkle oregano.\n4. Bake: Carefully transfer pizza (on paper) onto hot stone/tray. Bake 8-15 minutes (depending on oven/thickness) until crust golden and cheese bubbly.\n5. Serve: Slice and serve immediately.",
    tags: ["Pizza", "Homemade", "Italian", "American", "Family Favourite", "Fun Meal", "Kid Friendly", "Dinner", "Takeaway Style", "Cheese", "Vegetarian Option"]
  },
  {
    id: 126,
    name: "Chicken Schnitzel",
    description: "Simple breaded chicken cutlets, pan-fried until golden and crispy - a kid-friendly favourite.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { name: "salt and pepper" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "breadcrumbs" }, { quantity: "4-6 tbsp", name: "oil for frying" }, { name: "lemon wedges", prep: "to serve" }, { name: "Sides:", prep: "chips, mash, salad, veg" }
    ],
    ingredientKeywords: ["chicken schnitzel", "schnitzel", "chicken", "breaded", "crumbed", "pan-fried", "crispy", "simple", "kid friendly", "family favourite", "weeknight dinner", "aussie", "european"],
    instructions: "1. Prepare Chicken: Pound chicken (1-1.5cm thick). Season.\n2. Crumb Chicken: Coat in flour, then egg, then breadcrumbs.\n3. Fry Schnitzels: Heat oil (medium-high). Fry 3-5 mins per side until golden & cooked. Drain.\n4. Serve: Serve immediately with lemon and sides.",
    tags: ["Chicken", "Schnitzel", "Pan-Fried", "Crispy", "Simple", "Weeknight Dinner", "Kid Friendly", "Aussie Favourite", "European", "Family Favourite"]
  },
  {
    id: 127,
    name: "Tuna Mornay Pasta Bake",
    description: "Creamy, cheesy pasta bake with tuna and vegetables. Budget-friendly family dinner.",
    ingredients: [
        { quantity: "400g", name: "pasta", prep:"(e.g. macaroni)" }, { quantity: "50g", name: "butter" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1/4 cup", name: "flour" }, { quantity: "2.5 cups", name: "milk" }, { quantity: "1.5 cups", name: "cheddar cheese", prep: "grated" }, { quantity: "425g can", name: "tuna", prep: "drained" }, { quantity: "1 cup", name: "frozen peas and corn" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "breadcrumbs", prep:"opt." }, { quantity: "1 tbsp", name: "butter", prep:"melted, opt." }
    ],
    ingredientKeywords: ["tuna mornay", "tuna bake", "pasta bake", "tuna", "pasta", "cheese", "cheddar", "mornay sauce", "comfort food", "budget friendly", "family meal", "aussie", "casserole", "kid friendly"],
    instructions: "1. Cook Pasta: Cook pasta al dente. Drain.\n2. Make Mornay: Melt 50g butter, sauté onion. Stir in flour (1 min). Whisk in milk until smooth & thick. Stir in 1 cup cheese. Season.\n3. Combine: Add pasta, tuna, veg to sauce.\n4. Assemble & Bake: Preheat oven 180°C. Pour mix into dish. Top with rest of cheese (& optional buttered breadcrumbs). Bake 20-25 mins.\n5. Serve: Rest briefly.",
    tags: ["Pasta Bake", "Tuna", "Fish", "Comfort Food", "Family Meal", "Budget Friendly", "Cheese", "Cheddar", "Aussie Favourite", "Dinner", "Kid Friendly", "Family Favourite"]
  },
  {
    id: 128,
    name: "Sausage Rolls (Classic Aussie)",
    description: "Flaky pastry filled with seasoned sausage meat, perfect for parties or lunchboxes.",
    ingredients: [
        { quantity: "500g", name: "sausage mince" }, { quantity: "1", name: "onion", prep: "finely chopped" }, { quantity: "1", name: "carrot", prep: "grated" }, { quantity: "1/2 cup", name: "breadcrumbs" }, { quantity: "1", name: "egg" }, { quantity: "2 tbsp", name: "parsley/herbs", prep: "chopped" }, { quantity: "1 tbsp", name: "worcestershire sauce" }, { quantity: "1 tbsp", name: "tomato sauce" }, { quantity: "2 sheets", name: "puff pastry" }, { quantity: "1", name: "egg", prep: "extra, beaten" }, { name: "sesame seeds", prep: "opt." }, { name: "tomato sauce", prep: "to serve" }
    ],
    ingredientKeywords: ["sausage rolls", "sausage", "sausage mince", "pastry", "puff pastry", "party food", "aussie", "australian", "lunch", "snack", "baking", "kid friendly", "family favourite"],
    instructions: "1. Preheat oven 200°C. Line trays.\n2. Make filling: Combine mince, onion, carrot, breadcrumbs, 1 egg, herbs, sauces. Mix.\n3. Assemble: Cut pastry sheets half. Divide filling into 4 logs. Place log on pastry half edge. Brush opposite edge with egg wash. Roll up tightly. Cut each log into 4-6 rolls.\n4. Bake: Place on trays. Brush tops with egg wash, add seeds (opt.). Bake 20-25 mins until golden.\n5. Serve warm with tomato sauce.",
    tags: ["Party Food", "Aussie Favourite", "Sausage", "Pastry", "Lunch", "Snack", "Baking", "Kid Friendly", "Family Favourite"]
  },
  {
    id: 129,
    name: "Chicken and Vegetable Stir-fry (Simple)",
    description: "A quick, easy, and adaptable stir-fry with chicken and plenty of vegetables.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets or 600g thigh", prep:"sliced" },
        // Sauce:
        { quantity: "1/4 cup", name: "soy sauce" }, { quantity: "1 tbsp", name: "honey or oyster sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "cornflour", prep:"mixed with 2 tbsp water"},
        // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep:"sliced" }, { quantity: "2 cloves", name: "garlic", prep:"minced"}, { quantity: "1 tsp", name: "ginger", prep:"grated"}, { quantity: "3-4 cups", name: "mixed vegetables", prep:"chopped (broccoli, carrot, capsicum, beans, snow peas)"},
        { name: "rice or noodles", prep: "to serve" }
    ],
    ingredientKeywords: ["stir-fry", "chicken stir-fry", "chicken", "vegetables", "broccoli", "carrot", "capsicum", "quick meal", "weeknight dinner", "healthy", "asian inspired", "chinese", "simple", "family favourite"],
    instructions: "1. Prep: Mix sauce ingredients (except slurry). Marinate chicken briefly in 1 tbsp soy sauce (opt.).\n2. Cook Chicken: Heat 1 tbsp oil in wok (high heat). Stir-fry chicken until cooked. Remove.\n3. Cook Veggies: Heat 1 tbsp oil. Stir-fry onion, garlic, ginger (1 min). Add harder veg (carrot, broccoli), stir-fry 2-3 mins. Add softer veg (capsicum, beans, snow peas), stir-fry 1-2 mins until tender-crisp.\n4. Combine & Thicken: Return chicken to wok. Pour sauce over. Bring to simmer. Add cornflour slurry, stir until thickens.\n5. Serve: Serve immediately with rice or noodles.",
    tags: ["Stir-fry", "Chicken", "Vegetables", "Quick Meal", "Weeknight Dinner", "Healthy Option", "Asian Inspired", "Simple", "Family Favourite", "Dinner"]
  },
   {
    id: 130,
    name: "Beef Burgers",
    description: "Juicy homemade beef burgers, a guaranteed family pleaser.",
    ingredients: [
        { quantity: "500g", name: "beef mince" }, { quantity: "1", name: "onion", prep: "finely chopped/grated" }, { quantity: "1 clove", name: "garlic", prep: "minced" }, { quantity: "1", name: "egg" }, { quantity: "1/4 cup", name: "breadcrumbs" }, { quantity: "1 tbsp", name: "worcestershire sauce", prep:"opt." }, { name: "salt and pepper" }, { quantity: "4", name: "burger buns" }, { name: "Lettuce, Tomato, Cheese slices, Onion" }, { name: "Sauces:", prep: "ketchup, bbq, mustard"}
    ],
    ingredientKeywords: ["burger", "hamburger", "beef burger", "beef", "beef mince", "mince", "bbq", "grill", "pan-fried", "family favourite", "kid friendly", "dinner", "lunch", "aussie", "american"],
    instructions: "1. Make Patties: Gently combine mince, onion, garlic, egg, breadcrumbs, sauce, salt, pepper. Form 4 patties.\n2. Cook Patties: Grill or pan-fry (medium-high) 4-6 mins per side. Add cheese last minute to melt.\n3. Toast Buns (optional).\n4. Assemble: Layer buns with sauces, salad items, patty.\n5. Serve immediately.",
    tags: ["Beef", "Mince", "Burger", "BBQ", "Grill", "American", "Aussie Favourite", "Family Favourite", "Lunch", "Dinner", "Casual", "Kid Friendly"]
  },
  {
    id: 131,
    name: "Chilli Con Carne (Mild Option)",
    description: "A hearty and flavourful Tex-Mex stew with beef mince and beans, made mild for families.",
    ingredients: [
       { quantity: "1 tbsp", name: "oil" }, { quantity: "1 large", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "capsicum", prep: "chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "mild chilli powder" }, { quantity: "1 tsp", name: "cumin" }, { quantity: "1/2 tsp", name: "smoked paprika"}, { quantity: "400g can", name: "chopped tomatoes" }, { quantity: "400g can", name: "kidney beans", prep: "rinsed" }, { quantity: "1 cup", name: "beef stock" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "1 tsp", name: "oregano"}, { name: "salt and pepper" }, // Serving suggestions:
       { name: "rice" }, { name: "sour cream" }, { name: "grated cheese" }, { name: "corn chips" }
     ],
     ingredientKeywords: ["chilli con carne", "chilli", "beef", "beef mince", "mince", "beans", "kidney beans", "tomato", "mild", "tex-mex", "mexican", "stew", "comfort food", "family favourite", "kid friendly", "budget friendly", "dinner"],
     instructions: "1. Sauté Veg: Heat oil, sauté onion (5 mins). Add garlic, capsicum (2 mins).\n2. Brown Mince: Add mince, cook until browned. Drain fat.\n3. Add Spices/Tomatoes: Stir in mild chilli powder, cumin, paprika. Cook 1 min. Add tomatoes, beans, stock, paste, oregano. Season.\n4. Simmer: Bring to boil, reduce heat, cover loosely, simmer 30+ minutes.\n5. Serve: Serve hot with rice, sour cream, cheese, etc.",
     tags: ["Beef", "Mince", "Chilli", "Mild", "Tex-Mex", "Mexican", "Comfort Food", "Stew", "Beans", "Family Favourite", "Weeknight Dinner", "Budget Friendly", "Kid Friendly", "Dinner"]
   },
    {
    id: 132,
    name: "Simple Chicken Pasta Bake",
    description: "Easy pasta bake with chicken, vegetables and a simple tomato or creamy sauce, topped with cheese.",
    ingredients: [
        { quantity: "400g", name: "pasta", prep: "(penne, spirals)" },
        { quantity: "1 tbsp", name: "olive oil" },
        { quantity: "1", name: "onion", prep: "chopped" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "500g", name: "chicken breast or thigh", prep: "diced" },
        { quantity: "1 cup", name: "vegetables", prep: "(e.g., frozen peas/corn, chopped broccoli/zucchini)" },
        // Choose Sauce Type:
        // A) Tomato Based: { quantity: "500g jar", name: "pasta sauce (passata/Napoli)" }, { quantity: "1/2 cup", name: "chicken stock", prep:"opt."}, { quantity:"1 tsp", name:"dried herbs"}
        // B) Creamy Based: { quantity: "50g", name:"butter"}, {quantity:"1/4 cup", name:"flour"}, {quantity:"2.5 cups", name:"milk"}, {quantity:"1/2 cup", name:"parmesan cheese"}
        { quantity: "1 cup", name: "cheddar or mozzarella cheese", prep: "grated" },
        { name: "salt and pepper" }
    ],
    ingredientKeywords: ["pasta bake", "chicken pasta bake", "chicken", "pasta", "baked pasta", "casserole", "cheese", "cheddar", "mozzarella", "tomato sauce", "cream sauce", "easy", "weeknight dinner", "family favourite", "kid friendly"],
    instructions: "1. Cook Pasta: Cook pasta until slightly undercooked (al dente). Drain.\n2. Cook Chicken & Veg: Heat oil, sauté onion. Add garlic. Add chicken, cook until lightly browned. Add vegetables, cook 2-3 mins.\n3. Make Sauce & Combine:\n    A) Tomato: Add pasta sauce, stock (opt.), herbs to chicken/veg. Simmer 5 mins. Stir in cooked pasta.\n    B) Creamy: Make bechamel (melt butter, add flour, whisk in milk until thick). Stir in parmesan. Add chicken/veg and cooked pasta to sauce.\n4. Assemble & Bake: Preheat oven 180°C (160°C fan). Pour pasta mixture into baking dish. Top with grated cheddar/mozzarella.\n5. Bake 20-25 minutes until golden and bubbly.\n6. Serve: Rest briefly before serving.",
    tags: ["Pasta Bake", "Chicken", "Pasta", "Cheese", "Easy", "Weeknight Dinner", "Family Favourite", "Kid Friendly", "Dinner", "Comfort Food"]
  }
  // Add more family favourites as needed...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsFamilyFavourite);