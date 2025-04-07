// meals_stir_fry.js

const mealsStirFry = [
  {
    id: 217,
    name: "Simple Beef Stir-Fry",
    description: "Quick, versatile beef and vegetable stir-fry, perfect for a weeknight dinner.",
    ingredients: [
        { quantity: "500g", name: "beef stir-fry strips" }, { quantity: "3 tbsp", name: "soy sauce" }, { quantity: "1.5 tbsp", name: "honey" }, { quantity: "2 tsp", name: "ginger", prep: "grated" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1.5 tsp", name: "sesame oil" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1 large head", name: "broccoli", prep: "florets" }, { quantity: "1 large", name: "capsicum", prep: "sliced" }, { quantity: "1 large", name: "carrot", prep: "julienned" }, { quantity: "1", name: "onion", prep: "sliced" }, { name: "rice or noodles", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["beef", "beef strips", "stir-fry beef", "soy sauce", "honey", "ginger", "garlic", "broccoli", "capsicum", "carrot", "onion", "rice", "noodles", "asian", "quick", "quick meal", "chinese", "stir-fry", "weeknight dinner", "30 min meal"],
    instructions: "1. Marinate beef (soy, honey, ginger, garlic, sesame oil) 15 mins.\n2. Heat oil in wok (high heat).\n3. Cook beef in batches until browned (1-2 mins). Remove.\n4. Cook veggies: Stir-fry broccoli, capsicum, carrot, onion until tender-crisp (3-5 mins).\n5. Combine: Return beef. Add more soy if desired. Toss to heat (1 min).\n6. Serve over rice/noodles.",
    tags: ["Quick Meal", "Beef", "Stir-fry", "Asian Inspired", "Weeknight Dinner", "Chinese", "30 Min Meal"]
  },
  {
    id: 218,
    name: "Chicken Pad See Ew",
    description: "Popular Thai stir-fried wide rice noodles with chicken, Chinese broccoli, and a savoury-sweet sauce.",
    ingredients: [
      { quantity: "250g", name: "wide flat rice noodles", prep: "fresh or dried" }, { quantity: "4", name: "chicken breast/600g thigh", prep: "thinly sliced" }, { quantity: "1 tbsp", name: "soy sauce", prep: "(marinade)" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "2 tbsp", name: "oil" }, { quantity: "3 cloves", name: "garlic", prep: "minced" }, { quantity: "1 bunch", name: "Chinese broccoli (gai lan)", prep: "cut" }, { quantity: "2", name: "eggs" }, // Sauce:
      { quantity: "2 tbsp", name: "dark soy sauce" }, { quantity: "1 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/2 tsp", name: "white pepper" }
    ],
    ingredientKeywords: ["pad see ew", "thai", "noodles", "rice noodles", "chicken", "gai lan", "garlic", "egg", "soy sauce", "oyster sauce", "asian", "stir-fry", "takeaway", "weeknight dinner"],
    instructions: "1. Prep noodles.\n2. Marinate chicken (soy, cornflour).\n3. Mix sauce ingredients.\n4. Cook chicken in 1 tbsp oil. Remove.\n5. Cook veggies/egg: Stir-fry garlic in 1 tbsp oil, add gai lan stems, then leaves. Push aside, scramble eggs, mix.\n6. Combine: Add noodles, chicken, sauce. Toss gently on high heat (1-2 mins).\n7. Serve immediately.",
    tags: ["Thai", "Noodles", "Stir-fry", "Chicken", "Asian Inspired", "Takeaway Classic", "Weeknight Dinner"]
  },
  {
    id: 219,
    name: "Chicken Stir-fry with Cashew Nuts",
    description: "Popular Chinese-style stir-fry with tender chicken, crunchy cashews, and vegetables.",
    ingredients: [
        { quantity: "4", name: "chicken breast/600g thigh", prep: "bite-sized" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "stock/water" }, { quantity: "1 tsp", name: "cornflour slurry" }, // Stir-fry:
        { quantity: "2 tbsp", name: "oil" }, { quantity: "2 cloves", name: "garlic" }, { quantity: "1 tsp", name: "ginger" }, { quantity: "1", name: "onion" }, { quantity: "1", name: "capsicum" }, { quantity: "1", name: "carrot" }, { quantity: "1/2 cup", name: "cashew nuts", prep:"toasted/raw" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["chicken stir-fry", "cashew chicken", "chicken", "cashew nuts", "nuts", "stir-fry", "chinese", "asian", "oyster sauce", "quick", "quick meal", "takeaway", "weeknight dinner"],
    instructions: "1. Marinate Chicken (15 mins).\n2. Mix Sauce ingredients (except slurry).\n3. Cook Chicken: Heat 1 tbsp oil, stir-fry chicken. Remove.\n4. Stir-fry Veggies & Nuts: Heat 1 tbsp oil. Stir-fry garlic, ginger, onion (1 min). Add capsicum, carrot (2-3 mins). Add cashews (30 secs).\n5. Combine & Thicken: Return chicken. Pour sauce over. Simmer. Add slurry, stir until thick.\n6. Serve with rice.",
    tags: ["Chinese", "Stir-fry", "Chicken", "Cashew Nuts", "Nuts", "Quick Meal", "Weeknight Dinner", "Takeaway Classic", "Asian Inspired", "Family Favourite"]
  },
   {
    id: 220,
    name: "Beef Chow Mein",
    description: "Classic Chinese-American stir-fried noodles with beef strips and crisp vegetables.",
    ingredients: [
        { quantity: "300g", name: "egg noodles" }, { quantity: "400g", name: "beef steak", prep: "(rump/sirloin), thinly sliced" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tsp", name: "dark soy sauce", prep:"opt." }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "stock/water" }, { quantity: "1 tsp", name: "cornflour slurry"}, // Stir-fry:
        { quantity: "2 tbsp", name: "oil" }, { quantity: "1", name: "onion", prep: "sliced" }, { quantity: "1", name: "carrot", prep: "julienned" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1", name: "capsicum", prep: "sliced" }, { quantity: "few leaves", name: "cabbage/bok choy", prep:"sliced"}, { quantity: "2 cloves", name: "garlic", prep:"minced"}
    ],
    ingredientKeywords: ["chow mein", "beef chow mein", "chinese", "noodles", "egg noodles", "beef", "stir-fry", "oyster sauce", "soy sauce", "asian", "takeaway", "quick meal", "weeknight dinner"],
    instructions: "1. Prep: Cook noodles al dente. Marinate beef 15 mins. Mix sauce ingredients (except slurry).\n2. Stir-fry Beef: Heat 1 tbsp oil, stir-fry beef. Remove.\n3. Stir-fry Veggies: Heat 1 tbsp oil. Stir-fry onion, carrot, capsicum (2 mins). Add garlic, cabbage/bok choy (1 min).\n4. Combine: Return beef. Add noodles, sprouts, sauce. Toss well (1-2 mins).\n5. Thicken: Add slurry, toss until sauce thickens.\n6. Serve immediately.",
    tags: ["Chinese", "Noodles", "Beef", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Quick Meal"]
  },
  {
    id: 221,
    name: "Kung Pao Chicken",
    description: "Spicy Sichuan stir-fry with diced chicken, peanuts, vegetables, and dried chillies.",
    ingredients: [
        { quantity: "4", name: "chicken breast/600g thigh", prep: "diced" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Sauce:
        { quantity: "2 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "chinese black vinegar" }, { quantity: "1 tbsp", name: "shaoxing wine" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "cornflour slurry"}, // Stir-fry:
        { quantity: "2 tbsp", name: "oil" }, { quantity: "10-15", name: "dried red chillies" }, { quantity: "1 tsp", name: "Sichuan peppercorns" }, { quantity: "3 cloves", name: "garlic", prep: "sliced" }, { quantity: "2 cm", name: "ginger", prep: "sliced" }, { quantity: "3", name: "spring onions", prep:"white parts chopped, green sliced" }, { quantity: "1", name: "capsicum", prep: "diced" }, { quantity: "3/4 cup", name: "unsalted peanuts", prep:"roasted" }, { name: "rice", prep:"to serve" }
    ],
    ingredientKeywords: ["kung pao chicken", "gong bao chicken", "sichuan", "chinese", "chicken", "peanuts", "spicy", "chilli", "stir-fry", "asian", "takeaway", "sichuan peppercorns", "black vinegar", "dinner"],
    instructions: "1. Marinate Chicken (15 mins).\n2. Mix Sauce ingredients.\n3. Heat Wok & Aromatics: Heat oil. Stir-fry chillies & peppercorns until fragrant.\n4. Cook Chicken: Add chicken, stir-fry until cooked.\n5. Add Veggies: Add garlic, ginger, white spring onion, capsicum. Stir-fry 1 min.\n6. Add Sauce & Finish: Pour sauce in, stir until thickens. Add peanuts, green spring onion. Toss.\n7. Serve with rice.",
    tags: ["Chinese", "Sichuan", "Chicken", "Spicy", "Peanuts", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Dinner"]
  },
  {
    id: 222,
    name: "Vegetable Fried Rice",
    description: "Quick and easy way to use up leftover rice and veggies.",
    ingredients: [
      { quantity: "4 cups", name: "cooked rice", prep: "cold, day-old" }, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "diced" }, { quantity: "1/2 cup", name: "frozen peas" }, { quantity: "1/2 cup", name: "corn kernels" }, { quantity: "2-3", name: "eggs", prep: "beaten" }, { quantity: "3-4 tbsp", name: "soy sauce" }, { name: "spring onions", prep: "garnish" }, { name: "opt. protein:", prep:"cooked chicken/shrimp/tofu"}
    ],
    ingredientKeywords: ["fried rice", "rice", "vegetable", "vegetarian", "egg", "soy sauce", "chinese", "asian", "quick", "quick meal", "leftovers", "budget friendly", "stir-fry", "side dish", "weeknight dinner"],
    instructions: "1. Prep rice: Ensure cold, break clumps.\n2. Heat oils: Heat oils in wok.\n3. Sauté aromatics/veg: Stir-fry onion (1 min), garlic/carrot (2 mins), peas/corn (2-3 mins).\n4. Cook egg: Push aside, scramble egg, mix in.\n5. Add rice: Add cold rice, stir-fry (2-3 mins).\n6. Add Protein (opt.).\n7. Season: Drizzle soy sauce, toss.\n8. Serve: Garnish spring onions.",
    tags: ["Chinese", "Rice", "Fried Rice", "Vegetarian", "Quick Meal", "Weeknight Dinner", "Leftovers", "Stir-fry", "Asian Inspired", "Budget Friendly", "Side Dish", "Family Favourite"]
  },
  {
    id: 223,
    name: "Char Kway Teow",
    description: "Popular Malaysian/Singaporean stir-fried flat rice noodle dish with prawns, Chinese sausage, egg, and bean sprouts.",
    ingredients: [
      { quantity: "300g", name: "fresh flat rice noodles (kway teow)" }, { quantity: "2 tbsp", name: "oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "Chinese sausage (lap cheong)", prep: "sliced" }, { quantity: "8-12", name: "prawns (shrimp)", prep: "peeled" }, { quantity: "50g", name: "fish cake", prep: "sliced (opt.)" }, { quantity: "1-2", name: "eggs" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1/4 cup", name: "garlic chives", prep: "cut" }, // Sauce:
      { quantity: "2 tbsp", name: "dark soy sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tbsp", name: "ketchup manis", prep:"opt." }, { quantity: "1 tbsp", name: "sambal oelek/chilli paste", prep:"opt." }, { quantity: "1/2 tsp", name: "white pepper" }
    ],
    ingredientKeywords: ["char kway teow", "malaysian", "singaporean", "noodles", "flat rice noodles", "stir-fry", "prawns", "shrimp", "chinese sausage", "lap cheong", "egg", "bean sprouts", "chives", "soy sauce", "spicy option", "asian", "takeaway", "street food"],
    instructions: "1. Prepare Noodles: Separate/blanch noodles.\n2. Mix Sauce ingredients.\n3. Heat Wok: Heat oil until smoking.\n4. Sauté Aromatics/Protein: Stir-fry garlic, then sausage, then prawns/fish cake.\n5. Add Noodles & Sauce: Add noodles, pour sauce over. Stir-fry quickly 1-2 mins.\n6. Add Egg & Veggies: Push aside, scramble egg, mix in. Add sprouts & chives. Toss 30-60 secs.\n7. Serve immediately.",
    tags: ["Malaysian", "Singaporean", "Noodles", "Stir-fry", "Prawns", "Seafood", "Takeaway Classic", "Spicy Option", "Asian Inspired", "Weeknight Dinner", "Street Food"]
  },
  {
    id: 224,
    name: "Singapore Noodles",
    description: "Stir-fried rice vermicelli noodles flavoured with curry powder, often containing shrimp, char siu pork, and vegetables.",
    ingredients: [
        { quantity: "200g", name: "dried rice vermicelli noodles" },
        { quantity: "1 tbsp", name: "vegetable oil" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "100g", name: "raw prawns (shrimp)", prep: "peeled" },
        { quantity: "100g", name: "Char Siu pork", prep: "sliced (or use cooked chicken/ham)" },
        { quantity: "2", name: "eggs", prep: "lightly beaten" },
        { quantity: "1", name: "small onion", prep: "sliced" },
        { quantity: "1/2", name: "capsicum", prep: "sliced" },
        { quantity: "1/2 cup", name: "bean sprouts" },
        { quantity: "2", name: "spring onions", prep: "sliced" },
        // Sauce/Seasoning:
        { quantity: "1-2 tbsp", name: "mild curry powder" },
        { quantity: "1 tbsp", name: "light soy sauce" },
        { quantity: "1 tsp", name: "sugar" },
        { quantity: "1/4 tsp", name: "salt" },
        { quantity: "optional:", name:"dash sesame oil"}
    ],
    ingredientKeywords: ["singapore noodles", "noodles", "rice vermicelli", "stir-fry", "curry powder", "prawns", "shrimp", "char siu", "pork", "chicken", "egg", "singaporean", "chinese", "asian", "takeaway", "quick meal"],
    instructions: "1. Cook Noodles: Cook rice vermicelli according to package. Drain, rinse cold, drain well.\n2. Scramble Egg: Heat 1/2 tbsp oil. Scramble eggs lightly, remove, slice/chop.\n3. Cook Protein/Aromatics: Heat 1/2 tbsp oil. Stir-fry garlic. Add prawns, cook until pink. Add Char Siu/chicken, stir-fry briefly. Remove protein.\n4. Stir-fry Veggies: Add onion, capsicum to pan, stir-fry 1-2 mins. Add bean sprouts, spring onions (white parts), stir-fry 30 secs.\n5. Combine: Return protein and egg to pan. Add cooked noodles.\n6. Season: Sprinkle curry powder, soy sauce, sugar, salt over noodles. Toss everything together over medium-high heat until well combined, heated through, and noodles are lightly coloured by curry.\n7. Finish: Stir in green spring onion parts and optional sesame oil.\n8. Serve immediately.",
    tags: ["Singaporean", "Chinese", "Noodles", "Stir-fry", "Curry Powder", "Prawns", "Pork", "Chicken", "Quick Meal", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Seafood"]
  },
   {
    id: 225,
    name: "Broccoli and Beef Stir-fry",
    description: "Classic Chinese-American stir-fry featuring tender beef and crisp broccoli florets in a savoury brown sauce.",
    ingredients: [
      { quantity: "400g", name: "beef flank steak or sirloin", prep:"thinly sliced against grain" },
      // Marinade:
      { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine", prep:"opt." }, { quantity:"1/2 tsp", name:"baking soda", prep:"opt. for tenderizing"},
      // Sauce:
      { quantity: "1/4 cup", name: "beef broth or water" }, { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "cornflour", prep:"mixed with 2 tbsp water"},
      // Stir-fry:
      { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1 large head", name: "broccoli", prep:"cut into florets (blanch optional)" }, { quantity: "3 cloves", name: "garlic", prep:"minced" }, { quantity: "1 tsp", name: "ginger", prep:"grated" },
      { name: "rice", prep:"cooked, to serve"}
    ],
    ingredientKeywords: ["beef and broccoli", "broccoli beef", "beef", "broccoli", "stir-fry", "chinese", "chinese-american", "asian", "oyster sauce", "soy sauce", "quick meal", "takeaway", "weeknight dinner"],
    instructions: "1. Marinate Beef: Combine beef with marinade ingredients (incl. baking soda if using). Set aside 15-30 mins.\n2. Mix Sauce: Combine sauce ingredients (except slurry).\n3. Blanch Broccoli (Optional): Blanch broccoli florets in boiling water 1-2 mins. Drain, rinse cold.\n4. Cook Beef: Heat 1 tbsp oil in wok (high). Stir-fry beef batches until browned. Remove.\n5. Stir-fry Aromatics/Broccoli: Heat 1 tbsp oil. Stir-fry garlic, ginger (30 secs). Add broccoli (blanched or raw), stir-fry 2-4 mins until tender-crisp (add splash water if raw).\n6. Combine & Thicken: Return beef. Pour sauce over. Simmer. Add slurry, stir until thickens.\n7. Serve with rice.",
    tags: ["Chinese", "Chinese-American", "Beef", "Broccoli", "Stir-fry", "Quick Meal", "Weeknight Dinner", "Takeaway Classic", "Asian Inspired", "Family Favourite"]
  },
   {
    id: 226,
    name: "Pork Stir-fry with Black Bean Sauce",
    description: "Tender pork strips stir-fried with vegetables in a savoury fermented black bean sauce.",
    ingredients: [
      { quantity: "400g", name: "pork loin or tenderloin", prep:"thinly sliced" },
      // Marinade: { quantity: "1 tbsp", name:"soy sauce"}, { quantity:"1 tsp", name:"cornflour"},
      // Sauce:
      { quantity: "2 tbsp", name: "fermented black beans (douchi)", prep:"rinsed, lightly crushed" }, { quantity: "2 cloves", name: "garlic", prep:"minced"}, { quantity: "1 tsp", name: "ginger", prep:"grated"}, { quantity: "1 tbsp", name: "shaoxing wine", prep:"opt."}, { quantity: "1 tbsp", name: "soy sauce"}, { quantity: "1 tsp", name: "sugar"}, { quantity: "1/2 cup", name:"chicken stock/water"}, { quantity: "1 tsp", name: "cornflour slurry"},
      // Stir-fry:
      { quantity: "2 tbsp", name: "vegetable oil"}, { quantity: "1", name: "onion", prep:"sliced"}, { quantity: "1", name: "capsicum", prep:"(green or red), sliced"}, { quantity:"optional veg:", name:"sliced mushrooms, broccoli florets"},
      { name: "rice", prep:"to serve"}
    ],
    ingredientKeywords: ["pork stir-fry", "black bean sauce", "pork", "black beans", "fermented black beans", "douchi", "stir-fry", "chinese", "cantonese", "asian", "savoury", "garlic", "ginger", "capsicum", "onion"],
    instructions: "1. Marinate Pork (opt.): Marinate pork slices (soy, cornflour) 15 mins.\n2. Prepare Sauce Base: Mash crushed black beans with garlic and ginger.\n3. Cook Pork: Heat 1 tbsp oil (high heat). Stir-fry pork until cooked. Remove.\n4. Stir-fry Veg/Aromatics: Heat 1 tbsp oil. Stir-fry onion (1 min). Add capsicum (& other veg), stir-fry 2-3 mins. Add black bean/garlic/ginger mixture, stir-fry 30 secs until fragrant.\n5. Combine & Thicken: Return pork. Add wine (opt.), soy sauce, sugar, stock/water. Simmer. Add slurry, stir until thickens.\n6. Serve with rice.",
    tags: ["Chinese", "Cantonese", "Stir-fry", "Pork", "Black Bean Sauce", "Savoury", "Weeknight Dinner", "Asian Inspired", "Takeaway Style"]
  },
   {
    id: 227,
    name: "Sweet and Sour Chicken (Hong Kong Style)",
    description: "Crispy battered chicken pieces tossed in a bright red, tangy sweet and sour sauce with minimal vegetables.",
    ingredients: [
      { quantity: "4", name: "chicken breast / 600g thigh", prep:"bite-sized pieces"}, { quantity:"1", name:"egg white"}, { quantity:"1 tbsp", name:"soy sauce"}, { quantity:"1/2 cup+", name:"cornflour"}, { name: "oil for deep frying"},
      // Sauce:
      { quantity: "1/2 cup", name: "water"}, { quantity: "1/3 cup", name: "rice vinegar"}, { quantity: "1/3 cup", name: "sugar"}, { quantity: "1/4 cup", name: "tomato ketchup"}, { quantity:"1 tbsp", name:"worcestershire sauce", prep:"opt."}, { quantity: "1 tbsp", name:"cornflour slurry"}, { quantity:"optional:", name:"red food colouring"},
      // Minimal Veg (Optional garnish):
      { quantity: "small amount", name:"pineapple chunks, green capsicum pieces, onion pieces"},
      { name: "rice", prep:"to serve"}
    ],
    ingredientKeywords: ["sweet and sour chicken", "sweet and sour", "chicken", "hong kong style", "chinese", "cantonese", "deep fried", "crispy", "tangy", "sweet", "ketchup", "vinegar", "takeaway"],
    instructions: "1. Marinate/Coat Chicken: Marinate chicken (egg white, soy). Toss with cornflour.\n2. Fry Chicken: Heat oil (180°C). Fry chicken batches until golden & crispy. Drain.\n3. Make Sauce: Combine water, vinegar, sugar, ketchup, worcestershire (opt.) in wok/pan. Bring to simmer. Add colouring (opt.).\n4. Thicken Sauce: Stir slurry, add to sauce, stir until thick.\n5. Combine: Add crispy chicken (and optional minimal veg) to sauce. Toss quickly to coat.\n6. Serve immediately with rice.",
    tags: ["Chinese", "Cantonese", "Chicken", "Sweet and Sour", "Deep Fried", "Takeaway Classic", "Asian Inspired", "Family Favourite", "Sweet", "Tangy"]
  }
  // More Stir-fry variations possible...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsStirFry);