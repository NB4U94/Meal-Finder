// meals_chicken.js

const mealsChicken = [
  {
    id: 61,
    name: "Chicken Parmigiana (Parma/Parmi)",
    description: "Aussie pub classic: crispy chicken schnitzel topped with Napoli sauce and melted cheese.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "panko breadcrumbs" }, { quantity: "4 tbsp", name: "olive oil" }, { quantity: "1 cup", name: "Napoli sauce" }, { quantity: "4 slices", name: "ham", prep: "optional" }, { quantity: "1.5 cups", name: "mozzarella cheese", prep: "grated" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "grated" }, { name: "chips", prep: "to serve" }, { name: "salad", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken", "chicken breast", "schnitzel", "parma", "parmi", "parmigiana", "bread crumbs", "panko", "flour", "egg", "olive oil", "napoli sauce", "tomato sauce", "ham", "mozzarella", "cheese", "parmesan", "chips", "salad", "pub", "italian", "aussie", "australian"],
    instructions: "1. Prep/Crumb Chicken: Pound chicken to 1.5cm. Coat in flour, then egg, then breadcrumbs.\n2. Cook Schnitzels: Heat oil, cook chicken 3-4 mins per side until golden. Drain.\n3. Assemble: Place schnitzels in oven dish. Top with ham, Napoli sauce, mozzarella, parmesan.\n4. Bake: Bake 180°C (160°C fan) for 10-15 mins until cheese melts.\n5. Serve: Serve with chips and salad.",
    tags: ["Pub Classic", "Chicken", "Schnitzel", "Cheese", "Aussie Favourite", "Italian", "Dinner", "Family Favourite", "Comfort Food"]
  },
  {
    id: 62,
    name: "Simple Thai Green Curry with Chicken",
    description: "Fragrant and creamy Thai green curry using store-bought paste.",
    ingredients: [
      { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "2-3 tbsp", name: "Thai green curry paste" }, { quantity: "400ml can", name: "coconut milk" }, { quantity: "4", name: "chicken breast fillets or 600g thigh", prep: "sliced" }, { quantity: "1/2 cup", name: "chicken stock/water" }, { quantity: "1.5 cups", name: "mixed vegetables", prep: "(capsicum, bamboo, beans, broccoli)" }, { quantity: "1 tbsp", name: "fish sauce" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "2-3", name: "kaffir lime leaves", prep: "optional" }, { name: "Thai basil leaves", prep: "optional" }, { name: "Jasmine rice", prep: "to serve"}
    ],
    ingredientKeywords: ["chicken", "chicken breast", "chicken thigh", "thai", "green curry", "curry", "coconut milk", "curry paste", "fish sauce", "asian", "rice", "spicy", "quick"],
    instructions: "1. Sauté paste: Heat oil, cook curry paste until fragrant (1-2 mins).\n2. Add coconut milk: Stir in half the coconut milk, simmer until oil separates (3-5 mins).\n3. Cook chicken: Add chicken, cook until colour changes.\n4. Simmer: Add remaining coconut milk, stock, fish sauce, sugar, lime leaves. Simmer.\n5. Add veggies: Add vegetables, simmer until tender-crisp (5-10 mins).\n6. Finish: Stir in Thai basil (if using). Adjust seasoning.\n7. Serve: Serve hot with jasmine rice.",
    tags: ["Thai", "Curry", "Green Curry", "Chicken", "Coconut Milk", "Asian Inspired", "Weeknight Dinner", "Quick Meal", "Spicy Option", "Gluten Free Option"]
  },
   {
    id: 63,
    name: "Chicken Caesar Salad",
    description: "Classic salad with crisp romaine lettuce, grilled chicken, croutons, parmesan, and creamy Caesar dressing.",
    ingredients: [
      { quantity: "4", name: "chicken breast fillets" }, { quantity: "2 tbsp", name: "olive oil" }, { name: "salt and pepper" }, { quantity: "2 heads", name: "romaine lettuce", prep: "washed & chopped" }, { quantity: "1.5 cups", name: "croutons" }, { quantity: "1/2 cup", name: "parmesan cheese", prep: "shaved or grated" }, { quantity: "3/4 cup", name: "Caesar dressing" }, { quantity: "optional:", name: "8 slices cooked bacon", prep: "crumbled" }
    ],
    ingredientKeywords: ["chicken", "chicken breast", "salad", "caesar salad", "romaine lettuce", "lettuce", "croutons", "parmesan", "cheese", "caesar dressing", "bacon", "lunch", "light meal", "classic", "american"],
    instructions: "1. Cook Chicken: Season chicken with salt, pepper, olive oil. Grill or pan-fry until cooked through. Rest, then slice.\n2. Assemble Salad: In large bowl, combine romaine, croutons, parmesan.\n3. Add Chicken & Dressing: Add sliced chicken. Pour dressing over, toss gently to coat.\n4. Add Bacon (optional): Add crumbled bacon if using.\n5. Serve: Serve immediately.",
    tags: ["Salad", "Chicken", "Caesar", "Classic", "Lunch", "Light Meal", "Summer", "American", "Dinner Option"]
  },
  {
    id: 64,
    name: "Roast Chicken with Vegetables",
    description: "A classic whole roast chicken, juicy and flavourful, cooked with roasted vegetables.",
    ingredients: [
        { quantity: "1 (approx 1.6-2kg)", name: "whole chicken" },
        { quantity: "2 tbsp", name: "olive oil or melted butter" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "1", name: "lemon", prep: "halved (optional)" },
        { quantity: "few sprigs", name: "fresh herbs", prep: "(thyme, rosemary - optional)" },
        { quantity: "1", name: "onion", prep: "quartered" },
        // Roasted Vegetables (examples):
        { quantity: "4", name: "potatoes", prep: "peeled & chopped large" },
        { quantity: "3", name: "carrots", prep: "peeled & chopped" },
        { quantity: "2", name: "parsnips", prep: "peeled & chopped" },
        { quantity: "1 head", name: "garlic", prep: "halved crosswise (optional)" },
        { quantity: "1 tbsp", name: "olive oil", prep: "(for vegetables)" }
    ],
    ingredientKeywords: ["roast chicken", "chicken", "whole chicken", "roast", "roast dinner", "potato", "carrot", "parsnip", "onion", "garlic", "lemon", "herbs", "british", "aussie", "traditional", "comfort food", "sunday roast"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Prep Chicken: Pat chicken dry. Rub with oil/butter, season generously inside and out. Place lemon halves and herbs inside cavity if using.\n3. Prep Veggies: Toss chopped potatoes, carrots, parsnips, onion, garlic head (if using) with 1 tbsp olive oil, salt, pepper in a large roasting tin.\n4. Roast: Place chicken on top of vegetables in tin. Roast for 1 hour 15 mins to 1 hour 45 mins (approx 20 mins per 500g + 20 mins extra), basting occasionally. Chicken is cooked when juices run clear when pierced in thickest part (thigh).\n5. Rest Chicken: Remove chicken from tin, place on warm plate, cover loosely with foil. Rest for 15-20 minutes.\n6. Finish Veggies (optional): If veggies aren't tender/browned enough, return tin to oven while chicken rests.\n7. Carve & Serve: Carve rested chicken. Serve with roasted vegetables (and gravy if desired).",
    tags: ["Roast", "Chicken", "Sunday Roast", "Traditional", "Comfort Food", "British", "Aussie Favourite", "Family Favourite", "Dinner"]
  },
  {
    id: 65,
    name: "Chicken Schnitzel",
    description: "Simple breaded chicken cutlets, pan-fried until golden and crispy.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" },
        { name: "salt and pepper" },
        { quantity: "1 cup", name: "plain flour" },
        { quantity: "2", name: "eggs", prep: "beaten" },
        { quantity: "1.5 cups", name: "breadcrumbs", prep: "(panko or regular)" },
        { quantity: "4-6 tbsp", name: "vegetable oil or olive oil", prep: "for frying" },
        { name: "lemon wedges", prep: "to serve" },
        { name: "Optional sides:", prep: "mashed potato, salad, steamed vegetables" }
    ],
    ingredientKeywords: ["chicken schnitzel", "schnitzel", "chicken", "chicken breast", "breaded", "crumbed", "pan-fried", "crispy", "german", "austrian", "aussie", "simple", "kid friendly"],
    instructions: "1. Prepare Chicken: Place chicken between baking paper, pound gently to 1-1.5cm thickness. Season with salt and pepper.\n2. Set up Crumbing Station: Place flour, beaten eggs, and breadcrumbs in three separate shallow dishes.\n3. Crumb Chicken: Dredge each chicken piece first in flour (shake off excess), then dip completely in beaten egg, finally press firmly into breadcrumbs to coat evenly.\n4. Fry Schnitzels: Heat oil in a large frying pan over medium-high heat. Carefully place crumbed chicken in hot oil (cook in batches if needed). Fry for 3-5 minutes per side, until golden brown, crispy, and cooked through.\n5. Drain: Remove schnitzels from pan and drain briefly on paper towels.\n6. Serve: Serve immediately with lemon wedges and desired sides.",
    tags: ["Chicken", "Schnitzel", "Pan-Fried", "Crispy", "Simple", "Weeknight Dinner", "Kid Friendly", "Aussie Favourite", "European"]
  },
  {
    id: 66,
    name: "Chicken Stir-fry with Cashew Nuts",
    description: "A popular Chinese-style stir-fry with tender chicken, crunchy cashews, and vegetables in a savoury sauce.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets or 600g thigh", prep: "cut into bite-sized pieces" },
        // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine", prep: "(optional)" },
        // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "soy sauce", prep: "(light)" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "chicken stock or water" }, { quantity: "1 tsp", name: "cornflour", prep: "mixed with 1 tbsp water (slurry)" },
        // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tsp", name: "ginger", prep: "grated" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1", name: "capsicum", prep: "chopped" }, { quantity: "1", name: "carrot", prep: "sliced or diced" }, { quantity: "1/2 cup", name: "unsalted cashew nuts", prep: "toasted or raw" },
        { name: "rice", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["chicken stir-fry", "cashew chicken", "chicken", "cashew nuts", "nuts", "stir-fry", "chinese", "asian", "oyster sauce", "soy sauce", "capsicum", "carrot", "onion", "quick", "takeaway"],
    instructions: "1. Marinate Chicken: Combine chicken pieces with marinade ingredients. Set aside 15 mins.\n2. Mix Sauce: Combine sauce ingredients (except slurry) in a bowl.\n3. Cook Chicken: Heat 1 tbsp oil in wok (high heat). Stir-fry chicken until cooked through. Remove.\n4. Stir-fry Veggies & Nuts: Heat 1 tbsp oil. Stir-fry garlic, ginger, onion 1 min. Add capsicum, carrot, stir-fry 2-3 mins. Add cashew nuts, stir-fry 30 secs.\n5. Combine & Thicken: Return chicken to wok. Pour sauce mixture over. Bring to simmer. Add cornflour slurry, stir until sauce thickens.\n6. Serve: Serve immediately with cooked rice.",
    tags: ["Chinese", "Stir-fry", "Chicken", "Cashew Nuts", "Nuts", "Quick Meal", "Weeknight Dinner", "Takeaway Classic", "Asian Inspired"]
  },
  {
    id: 67,
    name: "Chicken and Mushroom Pie",
    description: "Creamy chicken and mushroom filling topped with flaky puff pastry.",
    ingredients: [
        { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "500g", name: "chicken breast or thigh", prep: "cut into bite-sized pieces" }, { quantity: "250g", name: "mushrooms", prep: "sliced" }, { quantity: "2 tbsp", name: "plain flour" }, { quantity: "1.5 cups", name: "chicken stock" }, { quantity: "1/2 cup", name: "thickened cream (heavy cream)" }, { quantity: "1 tbsp", name: "fresh thyme leaves or 1 tsp dried" }, { name: "salt and pepper" }, { quantity: "1 sheet", name: "puff pastry", prep: "thawed" }, { quantity: "1", name: "egg", prep: "beaten (for egg wash)" }
    ],
    ingredientKeywords: ["chicken pie", "chicken and mushroom pie", "pie", "chicken", "mushroom", "pastry", "puff pastry", "creamy", "comfort food", "british", "aussie", "winter warmer", "dinner"],
    instructions: "1. Sauté Aromatics & Chicken: Heat oil, sauté onion until soft. Add garlic, cook 1 min. Add chicken, cook until lightly browned.\n2. Cook Mushrooms: Add mushrooms, cook until softened and moisture evaporates.\n3. Make Sauce: Sprinkle flour over, stir 1 min. Gradually stir in chicken stock until smooth. Bring to simmer, cook until slightly thickened.\n4. Add Cream & Seasoning: Stir in cream and thyme. Season with salt & pepper. Simmer gently 5 mins. Let filling cool slightly.\n5. Assemble Pie: Preheat oven 200°C (180°C fan). Pour filling into 4 individual pie dishes or one larger dish. Cut puff pastry lid(s) slightly larger than dish(es). Place lid(s) on top, press edges, trim. Make slit in lid(s).\n6. Bake: Brush lid(s) with beaten egg. Bake for 20-30 minutes until pastry is golden and puffed, and filling is hot.\n7. Serve: Serve hot.",
    tags: ["Pie", "Chicken", "Mushroom", "Creamy", "Comfort Food", "British", "Aussie Favourite", "Winter Warmer", "Dinner", "Pastry"]
  },
  {
    id: 68,
    name: "Creamy Pesto Pasta with Chicken",
    description: "A quick and flavourful pasta dish combining pesto, cream, and tender chicken pieces.",
    ingredients: [
      { quantity: "400g", name: "pasta", prep: "(e.g., penne, fettuccine)" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "4", name: "chicken breast fillets or 600g thigh", prep: "cut into strips or cubes" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1/2 - 3/4 cup", name: "basil pesto" }, { quantity: "1 cup", name: "heavy cream (thickened cream)" }, { quantity: "1/4 cup", name: "parmesan cheese", prep: "grated, plus extra" }, { name: "salt and pepper" }, { name: "cherry tomatoes", prep: "halved (optional)" }, { name: "pine nuts", prep: "toasted (optional garnish)" }
    ],
    ingredientKeywords: ["chicken", "pasta", "penne", "fettuccine", "pesto", "basil", "cream", "heavy cream", "parmesan", "cheese", "garlic", "italian", "quick", "creamy", "weeknight dinner"],
    instructions: "1. Cook Pasta: Cook pasta according to directions. Drain, reserving 1/2 cup pasta water.\n2. Cook Chicken: Heat oil, cook chicken until golden and cooked through. Season.\n3. Sauté Garlic: Add garlic, cook 30 secs.\n4. Add Pesto & Cream: Stir in pesto (cook 1 min). Reduce heat, stir in cream and parmesan until smooth (do not boil).\n5. Combine: Add cooked pasta to skillet. Toss to coat. Add reserved pasta water if needed for consistency. Stir in tomatoes (if using).\n6. Serve: Serve immediately, garnished with extra parmesan and pine nuts (if desired).",
    tags: ["Pasta", "Chicken", "Pesto", "Creamy", "Quick Meal", "Weeknight Dinner", "Italian Inspired", "Comfort Food", "Family Favourite"]
  },
  {
    id: 69,
    name: "Chicken Adobo",
    description: "A classic Filipino dish of chicken braised in soy sauce, vinegar, garlic, bay leaves, and peppercorns.",
    ingredients: [
       { quantity: "1.5kg", name: "chicken pieces", prep: "(thighs, drumsticks recommended)"}, { quantity: "1/2 cup", name: "soy sauce"}, { quantity: "1/2 cup", name: "white vinegar"}, { quantity: "1 head", name: "garlic", prep: "cloves crushed"}, { quantity: "1 tbsp", name: "whole black peppercorns"}, { quantity: "3-4", name: "dried bay leaves"}, { quantity: "1 tbsp", name: "vegetable oil", prep: "optional"}, { quantity: "optional:", name: "1/2 cup", name: "water"}, { name: "rice", prep:"cooked, to serve"}
    ],
    ingredientKeywords: ["adobo", "chicken adobo", "filipino", "philippines", "chicken", "chicken thighs", "chicken drumsticks", "soy sauce", "vinegar", "garlic", "peppercorns", "bay leaves", "braised", "stew", "asian", "comfort food", "savoury", "tangy"],
    instructions: "1. Combine: In a pot, combine chicken pieces, soy sauce, vinegar, crushed garlic, peppercorns, bay leaves. (Optional: Marinate 30 mins).\n2. Simmer: Bring to boil. Reduce heat, cover, simmer 20-30 mins until chicken is tender, turning occasionally.\n3. Optional Browning: Remove chicken. Heat oil in pan, brown chicken pieces. Return to pot.\n4. Reduce Sauce: Uncover pot, simmer sauce 10-15 mins to thicken slightly.\n5. Serve: Remove bay leaves. Serve chicken and sauce over steamed rice.",
    tags: ["Filipino", "Chicken", "Adobo", "Braised", "Comfort Food", "Savoury", "Tangy", "Asian Inspired", "Weeknight Dinner", "Family Favourite", "Dinner"]
  },
  {
    id: 70,
    name: "Lemon Herb Roasted Chicken Pieces",
    description: "Chicken pieces (thighs, drumsticks) roasted with lemon, garlic, and herbs until golden and juicy.",
    ingredients: [
        { quantity: "8 pieces", name: "chicken portions", prep: "(thighs, drumsticks, bone-in, skin-on)" },
        { quantity: "2 tbsp", name: "olive oil" },
        { quantity: "1", name: "lemon", prep: "zested and juiced" },
        { quantity: "4 cloves", name: "garlic", prep: "minced or crushed" },
        { quantity: "1 tbsp", name: "fresh rosemary", prep: "chopped (or 1 tsp dried)" },
        { quantity: "1 tbsp", name: "fresh thyme leaves", prep: "(or 1 tsp dried)" },
        { quantity: "1/2 tsp", name: "paprika", prep: "optional" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "optional:", name: "potato wedges or chopped vegetables", prep: "to roast alongside" }
    ],
    ingredientKeywords: ["roast chicken", "baked chicken", "chicken", "chicken thighs", "chicken drumsticks", "lemon", "herb", "garlic", "rosemary", "thyme", "roasted", "baked", "simple", "healthy option", "mediterranean", "weeknight dinner"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Prepare Marinade/Rub: In a small bowl, whisk together olive oil, lemon zest, lemon juice, minced garlic, chopped rosemary, thyme leaves, paprika (if using), salt, and pepper.\n3. Coat Chicken: Place chicken pieces in a large bowl or baking dish. Pour marinade over chicken, toss well to coat evenly. (Can marinate for 30 mins if time allows).\n4. Arrange for Roasting: Arrange chicken pieces in a single layer in a roasting tin or large ovenproof dish. If roasting vegetables alongside, toss them with a little oil and seasoning and arrange around chicken.\n5. Roast: Roast for 40-55 minutes (depending on size of pieces), or until chicken is golden brown, skin is crisp, and juices run clear when pierced near the bone.\n6. Rest & Serve: Let chicken rest for 5-10 minutes before serving.",
    tags: ["Chicken", "Roasted", "Baked", "Lemon", "Herb", "Garlic", "Simple", "Weeknight Dinner", "Dinner", "Healthy Option", "Mediterranean"]
  },
  {
    id: 71,
    name: "Chicken Noodle Soup (Classic)",
    description: "Comforting and nourishing soup with chicken pieces, vegetables, and noodles in a flavourful broth.",
    ingredients: [
        { quantity: "1 tbsp", name: "olive oil" },
        { quantity: "1", name: "onion", prep: "chopped" },
        { quantity: "2", name: "carrots", prep: "sliced or diced" },
        { quantity: "2 sticks", name: "celery", prep: "sliced" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "1.5 - 2 L", name: "chicken stock" },
        { quantity: "500g", name: "cooked chicken", prep: "shredded or diced (rotisserie chicken works well)" },
        { quantity: "1 cup", name: "egg noodles", prep: "(or other pasta/rice)" },
        { quantity: "1/2 cup", name: "frozen peas", prep: "optional" },
        { quantity: "2 tbsp", name: "fresh parsley or dill", prep: "chopped" },
        { name: "salt and pepper", prep: "to taste" }
    ],
    ingredientKeywords: ["chicken noodle soup", "chicken soup", "soup", "chicken", "noodles", "egg noodles", "pasta", "carrot", "celery", "onion", "comfort food", "winter warmer", "sick day food", "healthy", "broth"],
    instructions: "1. Sauté Vegetables: Heat oil in large pot. Sauté onion, carrots, celery until softened (5-7 mins). Add garlic, cook 1 min.\n2. Add Stock & Chicken: Pour in chicken stock. Bring to simmer. Add cooked chicken.\n3. Cook Noodles: Bring back to simmer. Add noodles, cook according to package directions until tender.\n4. Finish: Stir in peas (if using) and cook 1 min more. Stir in fresh herbs (parsley/dill). Season well with salt and pepper.\n5. Serve: Serve hot.",
    tags: ["Soup", "Chicken", "Noodles", "Comfort Food", "Winter Warmer", "Healthy", "Classic", "Lunch", "Dinner", "Sick Day Food"]
  },
   {
    id: 72,
    name: "Kung Pao Chicken",
    description: "Spicy Sichuan stir-fry with diced chicken, peanuts, vegetables, and dried chillies.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets or 600g thigh", prep: "diced" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Sauce:
        { quantity: "2 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "chinese black vinegar" }, { quantity: "1 tbsp", name: "shaoxing wine" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "cornflour", prep:"mixed with 1 tbsp water"}, // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "5-10", name: "dried red chillies" }, { quantity: "1 tsp", name: "Sichuan peppercorns", prep:"optional" }, { quantity: "3 cloves", name: "garlic", prep: "sliced" }, { quantity: "2 cm", name: "ginger", prep: "sliced" }, { quantity: "3", name: "spring onions", prep:"white parts chopped, green sliced" }, { quantity: "1", name: "capsicum", prep: "diced" }, { quantity: "1/2 cup", name: "unsalted peanuts", prep:"roasted" }, { name: "rice", prep:"to serve" }
    ],
    ingredientKeywords: ["kung pao chicken", "gong bao chicken", "sichuan", "chinese", "chicken", "peanuts", "spicy", "chilli", "stir-fry", "asian", "takeaway"],
    instructions: "1. Marinate Chicken: Combine chicken & marinade. Set aside 15 mins.\n2. Mix Sauce: Combine sauce ingredients.\n3. Heat Wok & Aromatics: Heat oil. Stir-fry chillies & peppercorns until fragrant (30-60 secs).\n4. Cook Chicken: Add chicken, stir-fry until cooked.\n5. Add Veggies: Add garlic, ginger, white spring onion parts, capsicum. Stir-fry 1 min.\n6. Add Sauce & Finish: Pour sauce in, stir quickly as it thickens. Add peanuts, green spring onion parts. Toss.\n7. Serve: Serve immediately with rice.",
    tags: ["Chinese", "Sichuan", "Chicken", "Spicy", "Peanuts", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Dinner"]
  },
   {
    id: 73,
    name: "Chicken Tikka Masala",
    description: "Roasted marinated chicken chunks (chicken tikka) in a spiced, creamy, orange-coloured curry sauce.",
    ingredients: [
      // Chicken Tikka Marinade:
      { quantity: "600g", name: "boneless, skinless chicken", prep:"(breast or thigh), cubed" }, { quantity: "1/2 cup", name: "plain yogurt" }, { quantity: "1 tbsp", name: "lemon juice" }, { quantity: "2 tsp", name: "garam masala" }, { quantity: "1 tsp", name: "paprika" }, { quantity: "1 tsp", name: "ground cumin" }, { quantity: "1 tsp", name: "ground coriander" }, { quantity: "1/2 tsp", name: "turmeric powder" }, { quantity: "1/2 tsp", name: "cayenne pepper", prep:"optional" }, { quantity: "2 cloves", name: "garlic", prep:"minced"}, { quantity: "1 tsp", name: "ginger", prep:"grated"}, { name: "salt"},
      // Sauce:
      { quantity: "2 tbsp", name: "butter or ghee" }, { quantity: "1", name: "onion", prep: "finely chopped" }, { quantity: "2 cloves", name: "garlic", prep:"minced"}, { quantity: "1 tsp", name: "ginger", prep:"grated"}, { quantity: "1 tsp", name: "ground cumin" }, { quantity: "1 tsp", name: "ground coriander" }, { quantity: "1 tsp", name: "paprika" }, { quantity: "1/2 tsp", name: "turmeric powder" }, { quantity: "1 tsp", name: "garam masala" }, { quantity: "400g can", name: "crushed tomatoes or tomato passata" }, { quantity: "1 cup", name: "heavy cream (thickened cream)" }, { quantity: "1 tsp", name: "sugar", prep:"optional" }, { name: "salt to taste" }, { name: "fresh coriander leaves", prep:"chopped, for garnish"}, { name: "rice or naan bread", prep:"to serve"}
    ],
    ingredientKeywords: ["chicken tikka masala", "chicken tikka", "chicken", "curry", "indian", "british indian", "creamy", "tomato", "yogurt", "garam masala", "cumin", "coriander", "paprika", "turmeric", "butter chicken cousin", "mild", "comfort food"],
    instructions: "1. Marinate Chicken: Combine chicken with all marinade ingredients. Marinate 1+ hour (preferably longer in fridge).\n2. Cook Chicken: Grill, bake (200°C for 15-20 mins), or pan-fry marinated chicken until cooked through and slightly charred. Set aside.\n3. Make Sauce Base: Melt butter/ghee in pan. Sauté onion until soft (5-7 mins). Add garlic, ginger, cook 1 min. Add ground spices (cumin, coriander, paprika, turmeric), cook 1 min.\n4. Add Tomatoes & Simmer: Stir in crushed tomatoes/passata. Bring to simmer, cook 10 mins, stirring occasionally.\n5. Blend Sauce (Optional): For smoother sauce, blend carefully (e.g., with immersion blender).\n6. Finish Sauce: Return sauce to pan. Stir in cream, garam masala, sugar (if using), salt. Simmer gently 5 mins.\n7. Combine: Add cooked chicken tikka pieces to the sauce. Heat through for a few minutes.\n8. Serve: Garnish with fresh coriander. Serve hot with rice or naan bread.",
    tags: ["Indian", "British Indian", "Curry", "Chicken", "Creamy", "Mild", "Comfort Food", "Dinner", "Takeaway Classic", "Family Favourite"]
  },
   {
    id: 74,
    name: "Vietnamese Pho Ga (Chicken Noodle Soup)",
    description: "A light yet aromatic Vietnamese chicken noodle soup with rice noodles and fresh herbs.",
    ingredients: [
        { quantity: "1.5 L", name: "chicken stock" }, { quantity: "2 cm", name: "ginger", prep: "sliced" }, { quantity: "1", name: "onion", prep: "halved" }, { quantity: "2", name: "star anise" }, { quantity: "1", name: "cinnamon stick" }, { quantity: "3", name: "cloves" }, { quantity: "1 tsp", name: "coriander seeds" }, { quantity: "4", name: "chicken breast fillets or 600g thigh", prep:"poached & shredded" }, { quantity: "300g", name: "dried rice vermicelli noodles" }, { quantity: "1-2 tbsp", name: "fish sauce" }, { quantity: "1 tsp", name: "sugar" }, // Toppings:
        { name: "bean sprouts" }, { name: "fresh mint" }, { name: "fresh coriander" }, { name: "Thai basil" }, { name: "lime wedges" }, { name: "chilli", prep: "sliced" }
    ],
    ingredientKeywords: ["pho", "pho ga", "vietnamese", "chicken", "noodle soup", "soup", "rice noodles", "vermicelli", "ginger", "star anise", "cinnamon", "fish sauce", "herbs", "light", "healthy", "asian"],
    instructions: "1. Make Broth: Simmer stock with ginger, onion, star anise, cinnamon, cloves, coriander seeds for 30+ mins. Strain.\n2. Poach/Shred Chicken (if not using pre-cooked): Poach chicken in broth until cooked. Remove, shred. Return broth to pot.\n3. Cook Noodles: Cook noodles per package directions. Drain.\n4. Season Broth: Add fish sauce, sugar to broth. Adjust taste.\n5. Assemble: Divide noodles & chicken among bowls. Ladle hot broth over.\n6. Serve: Serve with platter of fresh toppings.",
    tags: ["Vietnamese", "Soup", "Noodle Soup", "Chicken", "Pho", "Light Meal", "Healthy", "Asian Inspired", "Winter Warmer", "Gluten Free"]
  },
   {
    id: 75,
    name: "Japanese Chicken Katsu Curry",
    description: "Crispy fried chicken cutlet (katsu) served with a mild, sweet Japanese curry sauce and rice.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep:"beaten" }, { quantity: "1.5 cups", name: "panko breadcrumbs" }, { name: "vegetable oil", prep:"for frying" }, // Curry Sauce:
        { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep:"chopped" }, { quantity: "1", name: "carrot", prep:"chopped" }, { quantity: "2 cloves", name: "garlic", prep:"minced" }, { quantity: "4-5 blocks", name: "Japanese curry roux" }, { quantity: "4 cups", name: "water/stock" }, { quantity: "optional:", name:"1 tsp soy sauce, 1 tsp honey"}, { name: "Japanese rice", prep:"to serve"}
    ],
    ingredientKeywords: ["katsu", "chicken katsu", "japanese", "curry", "japanese curry", "chicken", "panko", "breadcrumbs", "curry roux", "rice", "asian", "comfort food", "deep fried", "mild", "takeaway"],
    instructions: "1. Make Curry Sauce: Sauté onion, carrot in 1 tbsp oil until soft. Add garlic (1 min). Add water/stock, bring to boil, simmer 10 mins. Turn off heat, stir in curry roux until dissolved. Simmer gently until thick (5-10 mins). Add optional soy/honey.\n2. Prep/Crumb Chicken: Flatten chicken slightly. Season. Coat in flour, then egg, then panko.\n3. Fry Chicken: Heat 1-2cm oil (medium heat). Fry chicken 4-6 mins per side until golden and cooked. Drain.\n4. Slice Katsu: Cut cooked chicken into strips.\n5. Serve: Serve rice topped with katsu, generously ladle curry sauce over.",
    tags: ["Japanese", "Curry", "Chicken", "Katsu", "Deep Fried", "Comfort Food", "Asian Inspired", "Family Favourite", "Mild", "Takeaway Classic"]
  }
  // Adding more Chicken recipes...
   {
    id: 76,
    name: "Chicken Cacciatore",
    description: "Italian 'hunter-style' chicken braised with onions, herbs, tomatoes, often mushrooms, capsicum, and sometimes wine or olives.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" },
      { quantity: "8 pieces", name: "chicken portions", prep: "(thighs, drumsticks, bone-in)" },
      { name: "salt and pepper" },
      { quantity: "1", name: "large onion", prep: "sliced" },
      { quantity: "2 cloves", name: "garlic", prep: "minced" },
      { quantity: "1", name: "red or yellow capsicum", prep: "sliced" },
      { quantity: "200g", name: "mushrooms", prep: "sliced" },
      { quantity: "1/2 cup", name: "dry white or red wine", prep: "optional" },
      { quantity: "400g can", name: "crushed or diced tomatoes" },
      { quantity: "1/2 cup", name: "chicken stock" },
      { quantity: "1 tsp", name: "dried oregano" },
      { quantity: "1 tsp", name: "dried basil" },
      { quantity: "1", name: "bay leaf" },
      { quantity: "optional:", name: "1/4 cup olives, pitted"},
      { name: "fresh parsley", prep: "chopped, for garnish"},
      { name: "pasta or crusty bread", prep: "to serve"}
    ],
    ingredientKeywords: ["chicken cacciatore", "cacciatore", "chicken", "hunter style", "italian", "braised", "stew", "tomato", "mushrooms", "capsicum", "olives", "wine", "oregano", "basil", "comfort food"],
    instructions: "1. Brown Chicken: Season chicken pieces. Heat oil in large pot/Dutch oven. Brown chicken on all sides. Remove chicken.\n2. Sauté Vegetables: Add onion to pot, cook until soft (5 mins). Add garlic, capsicum, mushrooms, cook until softened (5-7 mins).\n3. Deglaze (optional): Pour in wine (if using), scrape bottom of pot, let bubble 1-2 mins.\n4. Simmer: Return chicken to pot. Add tomatoes, stock, oregano, basil, bay leaf, olives (if using). Season. Bring to simmer.\n5. Braise: Reduce heat, cover, simmer gently for 45-60 minutes, until chicken is tender and cooked through.\n6. Serve: Remove bay leaf. Garnish with parsley. Serve hot with pasta or crusty bread.",
    tags: ["Italian", "Chicken", "Braised", "Stew", "Comfort Food", "Dinner", "Family Favourite", "Mediterranean", "Winter Warmer"]
  },
   {
    id: 77,
    name: "Greek Lemon Chicken and Potatoes",
    description: "Chicken pieces and potato wedges roasted together with lemon, garlic, oregano, and olive oil.",
    ingredients: [
      { quantity: "8 pieces", name: "chicken portions", prep: "(thighs, drumsticks)" },
      { quantity: "1kg", name: "potatoes", prep: "peeled and cut into large wedges" },
      { quantity: "1/4 cup", name: "olive oil" },
      { quantity: "1/4 cup", name: "lemon juice", prep: "freshly squeezed" },
      { quantity: "4 cloves", name: "garlic", prep: "minced" },
      { quantity: "2 tsp", name: "dried oregano" },
      { name: "salt and freshly ground black pepper" },
      { quantity: "1/2 cup", name: "chicken stock", prep: "optional, for moisture" },
      { name: "lemon wedges", prep: "to serve" },
      { name: "fresh parsley", prep: "chopped, garnish" }
    ],
    ingredientKeywords: ["greek chicken", "lemon chicken", "chicken and potatoes", "roasted chicken", "baked chicken", "chicken", "potato", "lemon", "garlic", "oregano", "greek", "mediterranean", "one pan", "roasted", "baked"],
    instructions: "1. Preheat Oven: 200°C (180°C fan).\n2. Combine Ingredients: In large roasting tin, toss chicken pieces and potato wedges with olive oil, lemon juice, minced garlic, dried oregano, salt, and pepper. Ensure everything is well coated.\n3. Arrange: Spread chicken and potatoes in a single layer in the tin.\n4. Add Stock (optional): Pour chicken stock around the ingredients if desired (helps keep moist and creates pan juices).\n5. Roast: Roast for 50-70 minutes, turning potatoes occasionally, until chicken is cooked through (juices clear), skin is golden, and potatoes are tender and browned.\n6. Serve: Garnish with fresh parsley. Serve hot with lemon wedges on the side.",
    tags: ["Greek", "Mediterranean", "Chicken", "Potato", "Lemon", "Oregano", "Garlic", "Roasted", "Baked", "One Pan", "Dinner", "Family Favourite", "Simple"]
  }
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsChicken);