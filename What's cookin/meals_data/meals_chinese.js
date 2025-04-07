// meals_chinese.js

const mealsChinese = [
  {
    id: 78,
    name: "Sweet and Sour Pork",
    description: "Crispy battered pork pieces coated in a classic tangy sweet and sour sauce with pineapple and capsicum.",
    ingredients: [
      { quantity: "500g", name: "pork loin or shoulder", prep: "cut into 2-3cm cubes" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Batter:
      { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "plain flour" }, { quantity: "1/2 tsp", name: "baking powder" }, { quantity: "1", name: "egg", prep: "beaten" }, { quantity: "1/4 cup", name: "water", prep: "(approx.)" }, { name: "vegetable oil", prep: "for deep frying" }, // Stir-fry Veggies:
      { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "cut into wedges" }, { quantity: "1", name: "capsicum", prep: "(green or red), cut into chunks" }, { quantity: "1 cup", name: "pineapple chunks", prep: "(fresh or canned)" }, // Sauce:
      { quantity: "1/2 cup", name: "pineapple juice" }, { quantity: "1/3 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "3 tbsp", name: "tomato ketchup" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water (slurry)" }, { name: "rice", prep: "cooked, to serve"}
    ],
    ingredientKeywords: ["sweet and sour", "pork", "pineapple", "capsicum", "onion", "ketchup", "vinegar", "sugar", "soy sauce", "cornflour", "chinese", "asian", "takeaway", "deep fried", "stir-fry", "cantonese style"],
    instructions: "1. Marinate pork (soy, wine) 15 mins.\n2. Make batter (whisk dry, add egg, whisk water).\n3. Fry pork: Heat oil 180°C. Coat pork in batter, fry batches until golden (4-6 mins). Drain.\n4. Make sauce: Whisk sauce ingredients (except slurry).\n5. Stir-fry veggies: Heat 1 tbsp oil, stir-fry onion, capsicum (2-3 mins). Add pineapple (1 min).\n6. Thicken sauce: Add sauce mix to wok, simmer. Stir in slurry until thick.\n7. Combine: Add fried pork, toss gently.\n8. Serve: Serve immediately with rice.",
    tags: ["Chinese", "Pork", "Sweet and Sour", "Takeaway Classic", "Deep Fried", "Stir-fry", "Asian Inspired", "Family Favourite", "Cantonese Style"]
  },
  {
    id: 79,
    name: "Vegetable Fried Rice",
    description: "A quick and easy way to use up leftover rice and vegetables, packed with flavour.",
    ingredients: [
      { quantity: "4 cups", name: "cooked rice", prep: "preferably day-old, cold" }, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "finely chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "finely diced" }, { quantity: "1/2 cup", name: "frozen peas" }, { quantity: "1/2 cup", name: "corn kernels" }, { quantity: "2-3", name: "eggs", prep: "lightly beaten" }, { quantity: "3-4 tbsp", name: "soy sauce", prep: "(light)" }, { quantity: "optional:", name: "spring onions", prep: "sliced, for garnish" }, { quantity: "optional protein:", name: "diced cooked chicken, char siu pork, shrimp, tofu" }
    ],
    ingredientKeywords: ["fried rice", "rice", "vegetable", "vegetarian", "onion", "garlic", "carrot", "peas", "corn", "egg", "soy sauce", "sesame oil", "chinese", "asian", "quick", "leftovers", "budget friendly", "stir-fry", "side dish"],
    instructions: "1. Prep rice: Ensure rice is cold, break up clumps.\n2. Heat oils: Heat sesame & vegetable oil in wok (high heat).\n3. Sauté aromatics/veg: Stir-fry onion (1 min), add garlic/carrot (2 mins), add peas/corn (2-3 mins).\n4. Cook egg: Push veggies aside, scramble egg, mix in.\n5. Add rice: Add cold rice, stir-fry breaking clumps (2-3 mins).\n6. Add Protein (optional): Add cooked protein now, heat through.\n7. Season: Drizzle soy sauce, toss well.\n8. Serve: Garnish with spring onions.",
    tags: ["Chinese", "Rice", "Fried Rice", "Vegetarian", "Quick Meal", "Weeknight Dinner", "Leftovers", "Stir-fry", "Asian Inspired", "Budget Friendly", "Side Dish", "Family Favourite"]
  },
  {
    id: 80,
    name: "Pork and Chive Dumplings (Potstickers)",
    description: "Classic Chinese dumplings filled with pork and chives, pan-fried until crispy on the bottom.",
    ingredients: [
        { quantity: "400-500g", name: "pork mince" }, { quantity: "1.5 cups", name: "garlic chives", prep: "finely chopped" }, { quantity: "1.5 tbsp", name: "soy sauce" }, { quantity: "1.5 tsp", name: "sesame oil" }, { quantity: "1.5 tsp", name: "ginger", prep: "grated" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1/2 tsp", name: "white pepper" }, { quantity: "Approx. 40-50", name: "round dumpling wrappers" }, // Cooking:
        { quantity: "1-2 tbsp", name: "vegetable oil" }, { quantity: "1/2 cup", name: "water" }, // Dipping sauce:
        { quantity: "3 tbsp", name: "soy sauce" }, { quantity: "1.5 tbsp", name: "rice vinegar" }, { quantity: "1 tsp", name: "sesame oil" }, { name: "chilli oil/flakes", prep: "optional" }
    ],
    ingredientKeywords: ["dumplings", "potstickers", "gyoza", "pork", "pork mince", "chives", "garlic chives", "soy sauce", "sesame oil", "ginger", "dumpling wrappers", "chinese", "asian", "pan-fried", "steamed", "appetizer", "snack", "comfort food"],
    instructions: "1. Make filling: Combine pork mince, chives, soy sauce, sesame oil, ginger, garlic, white pepper. Mix well until sticky.\n2. Assemble dumplings: Place filling on wrapper. Moisten edge. Fold, pleat, seal well.\n3. Cook dumplings: Heat oil in large non-stick pan (medium-high). Arrange dumplings (pleats up). Cook 2-3 mins until bottoms golden.\n4. Steam: Carefully add water. Cover immediately. Reduce heat (medium-low). Steam 5-7 mins until water evaporates and filling cooked.\n5. Crisp (optional): Remove lid. Increase heat slightly, cook 1-2 mins until bottoms extra crispy.\n6. Make dipping sauce: Whisk sauce ingredients.\n7. Serve: Serve dumplings immediately with dipping sauce.",
    tags: ["Chinese", "Dumplings", "Potstickers", "Pork", "Pan-Fried", "Steamed", "Appetizer", "Snack", "Asian Inspired", "Comfort Food", "Party Food"]
  },
  {
    id: 81,
    name: "Chinese Lemon Chicken",
    description: "Crispy battered chicken pieces coated in a sweet and tangy lemon sauce.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets", prep: "cut into bite-sized pieces" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1", name: "egg white", prep: "lightly beaten" }, { quantity: "3/4 cup", name: "cornflour" }, { name: "vegetable oil", prep: "for deep frying" }, // Lemon Sauce:
        { quantity: "1 cup", name: "chicken stock" }, { quantity: "1/3 cup", name: "lemon juice", prep: "freshly squeezed" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1.5 tbsp", name: "cornflour", prep: "mixed with 3 tbsp water (slurry)" }, { quantity: "few drops", name: "yellow food colouring", prep: "optional" }, { name: "lemon slices", prep: "thin, for garnish" }, { name: "rice", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["lemon chicken", "chicken", "lemon", "chinese", "asian", "takeaway", "deep fried", "sweet", "tangy", "cornflour", "soy sauce", "sugar", "cantonese style"],
    instructions: "1. Marinate Chicken: Combine chicken, soy sauce, egg white (10 mins).\n2. Coat Chicken: Add cornflour, toss to coat.\n3. Fry Chicken: Heat oil (180°C). Fry chicken batches until golden & crispy (3-5 mins). Drain.\n4. Make Lemon Sauce: Combine stock, lemon juice, sugar, soy sauce in saucepan. Simmer.\n5. Thicken Sauce: Stir slurry, pour into simmering sauce, stir until thick. Add colouring (optional).\n6. Combine: Pour hot sauce over crispy chicken, toss gently.\n7. Serve: Serve immediately with rice, garnished with lemon slices.",
    tags: ["Chinese", "Chicken", "Lemon", "Takeaway Classic", "Deep Fried", "Sweet", "Tangy", "Asian Inspired", "Family Favourite", "Cantonese Style"]
  },
  {
    id: 82,
    name: "Spring Rolls (Vegetable)",
    description: "Crispy fried spring rolls filled with shredded vegetables.",
    ingredients: [
        { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tsp", name: "ginger", prep: "grated" }, { quantity: "1-2", name: "carrots", prep: "julienned" }, { quantity: "1/2 head", name: "cabbage", prep: "finely shredded" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "3-4", name: "spring onions", prep: "sliced" }, { quantity: "50g", name: "glass noodles", prep: "soaked & chopped (optional)" }, { quantity: "1.5 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "pinch", name: "white pepper" }, { quantity: "Approx. 20-25", name: "spring roll wrappers" }, { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water (sealant)" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "sweet chilli sauce", prep: "for dipping" }
    ],
    ingredientKeywords: ["spring rolls", "vegetable", "vegetarian", "cabbage", "carrot", "bean sprouts", "glass noodles", "soy sauce", "deep fried", "crispy", "appetizer", "snack", "chinese", "vietnamese", "asian", "party food"],
    instructions: "1. Make Filling: Heat 1 tbsp oil. Stir-fry garlic, ginger. Add carrot, cabbage (2-3 mins). Add sprouts, spring onions, noodles (if using). Stir-fry 1 min.\n2. Season Filling: Stir in soy sauce, sesame oil, pepper. Cook 1 min. Cool completely.\n3. Wrap Rolls: Place filling on wrapper corner. Fold bottom corner over. Fold sides tightly. Brush top corner with slurry. Roll up tightly.\n4. Fry Rolls: Heat oil (180°C). Fry batches 3-5 mins until golden & crispy. Drain.\n5. Serve: Serve hot with sweet chilli sauce.",
    tags: ["Appetizer", "Snack", "Vegetarian", "Deep Fried", "Crispy", "Chinese", "Vietnamese", "Asian Inspired", "Party Food"]
  },
  {
    id: 83,
    name: "Mapo Tofu",
    description: "Sichuan dish of soft tofu in a spicy, savoury sauce with minced pork (optional) and fermented beans.",
    ingredients: [
        { quantity: "1 block (approx 500g)", name: "soft or silken tofu", prep: "cubed" }, { quantity: "150g", name: "pork mince", prep: "(optional, sub mushrooms)" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1-2 tbsp", name: "Sichuan chilli bean paste (doubanjiang)" }, { quantity: "1 tsp", name: "fermented black beans (douchi)", prep: "rinsed & crushed (optional)" }, { quantity: "3 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tsp", name: "ginger", prep: "minced" }, { quantity: "1/2 - 1 tsp", name: "Sichuan peppercorns", prep: "ground" }, { quantity: "1 cup", name: "chicken/vegetable stock" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1.5 tbsp", name: "cornflour", prep: "mixed with 3 tbsp water (slurry)" }, { quantity: "1 tsp", name: "sesame oil" }, { name: "spring onions", prep: "sliced garnish" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["mapo tofu", "tofu", "sichuan", "chinese", "spicy", "pork", "pork mince", "mushrooms", "doubanjiang", "chilli bean paste", "fermented black beans", "sichuan peppercorns", "asian", "vegetarian option", "comfort food"],
    instructions: "1. Prep Tofu: Gently boil tofu cubes in salted water (1 min). Drain.\n2. Cook Pork (if using): Heat oil, stir-fry pork until cooked. Remove.\n3. Sauté Aromatics: Add doubanjiang to oil (low heat), stir-fry 1-2 mins. Add douchi (optional), garlic, ginger, Sichuan peppercorns. Stir-fry 30 secs.\n4. Make Sauce: Add stock, soy sauce, sugar. Simmer.\n5. Combine: Gently add tofu. Return pork (or add mushrooms). Simmer 3-5 mins.\n6. Thicken: Stir slurry, add to sauce, stir gently until thick.\n7. Finish: Stir in sesame oil.\n8. Serve: Serve over rice, garnish with spring onions.",
    tags: ["Chinese", "Sichuan", "Tofu", "Spicy", "Pork", "Vegetarian Option", "Asian Inspired", "Comfort Food", "Weeknight Dinner", "Dinner"]
  },
   {
    id: 84,
    name: "Beef Chow Mein",
    description: "Classic Chinese-American stir-fried noodles with beef strips and crisp vegetables.",
    ingredients: [
        { quantity: "300g", name: "egg noodles" }, { quantity: "400g", name: "beef steak", prep: "(rump/sirloin), thinly sliced" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tsp", name: "dark soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/4 cup", name: "stock/water" }, { quantity: "1 tsp", name: "cornflour slurry"}, // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "sliced" }, { quantity: "1", name: "carrot", prep: "julienned" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1", name: "capsicum", prep: "sliced" }, { quantity: "few leaves", name: "cabbage/bok choy", prep:"sliced"}, { quantity: "2 cloves", name: "garlic", prep:"minced"}
    ],
    ingredientKeywords: ["chow mein", "beef chow mein", "chinese", "noodles", "egg noodles", "beef", "stir-fry", "oyster sauce", "soy sauce", "asian", "takeaway", "quick meal"],
    instructions: "1. Prep: Cook noodles al dente. Marinate beef 15 mins. Mix sauce ingredients (except slurry).\n2. Stir-fry Beef: Heat 1 tbsp oil, stir-fry beef until browned. Remove.\n3. Stir-fry Veggies: Heat 1 tbsp oil. Stir-fry onion, carrot, capsicum (2 mins). Add garlic, cabbage/bok choy (1 min).\n4. Combine: Return beef. Add noodles, sprouts, sauce. Toss well (1-2 mins).\n5. Thicken: Add slurry, toss until sauce thickens.\n6. Serve: Serve immediately.",
    tags: ["Chinese", "Noodles", "Beef", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Quick Meal"]
  },
  {
    id: 85,
    name: "Wonton Soup",
    description: "Delicate pork and prawn filled wontons served in a light, clear broth.",
    ingredients: [
        // Wonton Filling:
        { quantity: "200g", name: "pork mince" }, { quantity: "100g", name: "raw prawns (shrimp)", prep: "peeled, deveined & finely chopped" }, { quantity: "2", name: "spring onions", prep: "finely chopped" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "shaoxing wine", prep: "optional" }, { quantity: "1/2 tsp", name: "ginger", prep: "grated" }, { quantity: "pinch", name: "white pepper" },
        { quantity: "Approx 30-40", name: "square wonton wrappers" },
        // Broth:
        { quantity: "1.5 L", name: "chicken or vegetable stock", prep: "good quality" }, { quantity: "1 slice", name: "ginger", prep: "optional" }, { quantity: "1", name: "spring onion", prep: "white part, optional" }, { quantity: "1 tsp", name: "sesame oil" }, { name: "salt and white pepper", prep: "to taste" },
        // Garnish:
        { name: "spring onions", prep: "green parts sliced" }, { name: "optional:", name: "blanched chinese greens (e.g., bok choy)"}
    ],
    ingredientKeywords: ["wonton", "soup", "wonton soup", "chinese", "pork", "prawn", "shrimp", "dumpling", "broth", "light", "starter", "comfort food", "asian", "cantonese style"],
    instructions: "1. Make Filling: Combine all filling ingredients. Mix well in one direction until sticky.\n2. Wrap Wontons: Place ~1 tsp filling on wrapper center. Moisten edges with water. Fold into triangle, press edges. Bring bottom two corners together below filling, overlap slightly, press to seal (or fold as desired).\n3. Prepare Broth: Bring stock to simmer with optional ginger/spring onion white part. Simmer 10 mins. Remove solids. Season broth with sesame oil, salt, white pepper.\n4. Cook Wontons: Bring separate pot of water to boil. Cook wontons in batches (don't overcrowd) for 3-5 minutes, until filling is cooked and they float. Remove with slotted spoon.\n5. Serve: Place cooked wontons in serving bowls. Ladle hot broth over. Garnish with sliced green spring onions and optional blanched greens.",
    tags: ["Chinese", "Soup", "Wonton", "Dumpling", "Pork", "Prawn", "Light Meal", "Starter", "Comfort Food", "Asian Inspired", "Cantonese Style"]
  },
   {
    id: 86,
    name: "Kung Pao Chicken",
    description: "Spicy Sichuan stir-fry with diced chicken, peanuts, vegetables, and dried chillies.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets or 600g thigh", prep: "diced" }, // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Sauce:
        { quantity: "2 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "chinese black vinegar" }, { quantity: "1 tbsp", name: "shaoxing wine" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1 tsp", name: "cornflour slurry"}, // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "10-15", name: "dried red chillies" }, { quantity: "1 tsp", name: "Sichuan peppercorns" }, { quantity: "3 cloves", name: "garlic", prep: "sliced" }, { quantity: "2 cm", name: "ginger", prep: "sliced" }, { quantity: "3", name: "spring onions", prep:"white parts chopped, green sliced" }, { quantity: "1", name: "capsicum", prep: "diced" }, { quantity: "3/4 cup", name: "unsalted peanuts", prep:"roasted" }, { name: "rice", prep:"to serve" }
    ],
    ingredientKeywords: ["kung pao chicken", "gong bao chicken", "sichuan", "chinese", "chicken", "peanuts", "spicy", "chilli", "stir-fry", "asian", "takeaway", "sichuan peppercorns", "black vinegar"],
    instructions: "1. Marinate Chicken (15 mins).\n2. Mix Sauce ingredients.\n3. Heat Wok & Aromatics: Heat oil. Stir-fry chillies & peppercorns until fragrant.\n4. Cook Chicken: Add chicken, stir-fry until cooked.\n5. Add Veggies: Add garlic, ginger, white spring onion, capsicum. Stir-fry 1 min.\n6. Add Sauce & Finish: Pour sauce in, stir until thickens. Add peanuts, green spring onion. Toss.\n7. Serve: Serve with rice.",
    tags: ["Chinese", "Sichuan", "Chicken", "Spicy", "Peanuts", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Dinner"]
  },
   {
    id: 87,
    name: "General Tso's Chicken",
    description: "Crispy deep-fried chicken pieces coated in a sweet, slightly spicy, and tangy sauce. (American-Chinese classic)",
    ingredients: [
        // Chicken & Marinade/Coating:
        { quantity: "600g", name: "boneless chicken thigh or breast", prep: "cut into bite-size pieces" }, { quantity: "1", name: "egg white" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "shaoxing wine" }, { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "plain flour", prep:"optional for extra crisp"}, { name: "vegetable oil", prep: "for deep frying" },
        // Sauce:
        { quantity: "1/2 cup", name: "chicken stock" }, { quantity: "1/4 cup", name: "soy sauce" }, { quantity: "1/4 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "1 tbsp", name: "hoisin sauce", prep:"optional"}, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water (slurry)" },
        // Stir-fry elements:
        { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tsp", name: "ginger", prep: "grated" }, { quantity: "4-6", name: "dried red chillies", prep: "whole or snipped" }, { name: "spring onions", prep: "sliced, garnish" }, { name: "steamed broccoli", prep: "to serve (optional)" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["general tso", "chicken", "chinese", "american chinese", "deep fried", "sweet", "spicy", "tangy", "takeaway", "asian", "broccoli", "chilli"],
    instructions: "1. Marinate/Coat Chicken: Combine chicken, egg white, 1 tbsp soy sauce, wine. Let sit 10 mins. Toss with cornflour (and plain flour if using) until well coated.\n2. Fry Chicken: Heat oil (180°C). Fry chicken in batches until golden brown and crispy (4-6 mins). Drain well.\n3. Make Sauce: Whisk stock, soy sauce, vinegar, sugar, hoisin (if using), sesame oil in a bowl.\n4. Stir-fry Aromatics: Heat 1 tbsp oil in wok. Stir-fry garlic, ginger, dried chillies until fragrant (30 secs).\n5. Thicken Sauce: Pour sauce mixture into wok. Bring to simmer. Stir in cornflour slurry until sauce thickens.\n6. Combine: Add crispy fried chicken to the sauce. Toss quickly to coat evenly.\n7. Serve: Serve immediately over rice, garnished with spring onions. Often served with steamed broccoli.",
    tags: ["Chinese", "American Chinese", "Chicken", "Deep Fried", "Sweet", "Spicy", "Takeaway Classic", "Asian Inspired", "Dinner", "Comfort Food"]
  },
  {
    id: 88,
    name: "Egg Drop Soup",
    description: "A simple, comforting Chinese soup made with beaten eggs drizzled into simmering broth.",
    ingredients: [
        { quantity: "4 cups", name: "chicken or vegetable stock" },
        { quantity: "1 tsp", name: "soy sauce", prep: "(light)" },
        { quantity: "1/2 tsp", name: "sesame oil" },
        { quantity: "pinch", name: "white pepper" },
        { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp cold water (slurry)" },
        { quantity: "2", name: "large eggs", prep: "lightly beaten" },
        { name: "spring onions", prep: "thinly sliced, for garnish" },
        { quantity: "optional:", name: "sweetcorn kernels, peas, diced tofu"}
    ],
    ingredientKeywords: ["egg drop soup", "egg flower soup", "soup", "egg", "chinese", "asian", "light", "quick", "simple", "comfort food", "starter", "vegetarian option", "broth"],
    instructions: "1. Heat Broth: Bring stock to a gentle simmer in a saucepan. Stir in soy sauce, sesame oil, and white pepper.\n2. Thicken (optional but common): Stir the cornflour slurry. Pour it slowly into the simmering broth while stirring constantly until the soup thickens slightly.\n3. Drizzle Egg: While the soup is simmering gently (not boiling rapidly), slowly drizzle the beaten eggs in a thin stream into the soup, stirring gently in one direction with a fork or chopsticks to create egg ribbons.\n4. Add Optional Ingredients: If adding corn, peas, or tofu, add them now and heat through for a minute.\n5. Serve: Remove from heat immediately once egg is cooked (takes seconds). Ladle into bowls and garnish with sliced spring onions.",
    tags: ["Chinese", "Soup", "Egg", "Light", "Quick Meal", "Simple", "Comfort Food", "Starter", "Vegetarian Option", "Asian Inspired", "Gluten Free Option"] // (Use GF soy sauce/tamari)
  },
   {
    id: 89,
    name: "Salt and Pepper Squid",
    description: "Crispy deep-fried squid seasoned with salt, pepper (often Sichuan), chilli, and garlic.",
    ingredients: [
        { quantity: "500g", name: "squid tubes or whole squid", prep: "cleaned, scored & cut into pieces/rings" },
        // Coating:
        { quantity: "1/2 cup", name: "cornflour" },
        { quantity: "1/4 cup", name: "plain flour or rice flour" },
        { quantity: "1 tsp", name: "salt" },
        { quantity: "1 tsp", name: "white pepper", prep:"ground"},
        { quantity: "1/2 tsp", name: "chinese five spice powder", prep:"optional"},
        { quantity: "1", name: "egg white", prep: "lightly beaten (optional, for adhesion)" },
        { name: "vegetable oil", prep: "for deep frying" },
        // Stir-fry Garnish:
        { quantity: "1 tbsp", name: "vegetable oil" },
        { quantity: "1-2", name: "red chillies", prep: "finely sliced" },
        { quantity: "3 cloves", name: "garlic", prep: "finely chopped" },
        { quantity: "2", name: "spring onions", prep: "sliced" },
        { quantity: "optional:", name: "1/2 tsp Sichuan peppercorns, toasted & ground"}
    ],
    ingredientKeywords: ["salt and pepper squid", "salt and chilli squid", "squid", "calamari", "chinese", "cantonese", "deep fried", "crispy", "spicy", "salt", "pepper", "sichuan peppercorns", "chilli", "garlic", "seafood", "appetizer", "takeaway"],
    instructions: "1. Prepare Squid: Pat squid pieces thoroughly dry. If using egg white, toss squid with it now.\n2. Make Coating: Combine cornflour, flour, salt, white pepper, five spice (if using) in a shallow dish or bag.\n3. Coat Squid: Add squid pieces to coating mixture, toss well to coat evenly. Shake off excess.\n4. Deep Fry Squid: Heat oil for deep frying to 180°C. Fry coated squid in batches (don't overcrowd) for 2-4 minutes until light golden and crispy. Do not overcook. Drain well on paper towels.\n5. Stir-fry Garnish: Heat 1 tbsp oil in wok over high heat. Add sliced chillies, chopped garlic, spring onions (white parts first). Stir-fry 30-60 seconds until fragrant. Add optional ground Sichuan peppercorns.\n6. Combine: Return fried squid to the wok with the garnish. Toss quickly for 15-30 seconds to coat. Add green spring onion parts.\n7. Serve: Serve immediately.",
    tags: ["Chinese", "Cantonese", "Seafood", "Squid", "Deep Fried", "Crispy", "Spicy", "Appetizer", "Takeaway Classic", "Asian Inspired", "Party Food"]
  },
   {
    id: 90,
    name: "Char Siu Pork (Chinese BBQ Pork)",
    description: "Cantonese-style barbecued pork known for its sweet, savoury glaze and reddish hue.",
    ingredients: [
        { quantity: "1kg", name: "pork shoulder or belly", prep: "cut into long strips (approx 5cm thick)" },
        // Marinade/Glaze:
        { quantity: "1/4 cup", name: "hoisin sauce" },
        { quantity: "1/4 cup", name: "soy sauce" },
        { quantity: "1/4 cup", name: "honey or maltose" },
        { quantity: "2 tbsp", name: "shaoxing wine" },
        { quantity: "1 tbsp", name: "dark soy sauce", prep:"optional for colour"},
        { quantity: "1 tsp", name: "chinese five spice powder" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "optional:", name:"few drops red food colouring"}
    ],
    ingredientKeywords: ["char siu", "char siu pork", "chinese bbq pork", "bbq pork", "pork", "pork shoulder", "pork belly", "cantonese", "chinese", "bbq", "roasted", "sweet", "savoury", "hoisin", "soy sauce", "honey", "five spice"],
    instructions: "1. Prepare Pork: Cut pork into suitable long strips.\n2. Make Marinade: Combine all marinade/glaze ingredients (hoisin, soy sauces, honey/maltose, wine, five spice, garlic, optional colouring) in a bowl. Whisk well.\n3. Marinate Pork: Pour marinade over pork strips in a container or zip-lock bag. Ensure pork is well coated. Marinate in fridge for at least 4 hours, preferably overnight, turning occasionally.\n4. Preheat Oven & Prep: Preheat oven to 200°C (180°C fan). Line a baking tray with foil (important!). Place a wire rack over the tray. Remove pork from marinade (reserve leftover marinade).\n5. Roast Pork: Arrange pork strips on the wire rack. Roast for 20 minutes.\n6. Glaze & Continue Roasting: Reduce oven temp to 180°C (160°C fan). Brush pork generously with reserved marinade/glaze. Roast for another 15 minutes. Brush again. Roast for a final 10-15 minutes, or until cooked through and edges are slightly charred and caramelized (internal temp ~70°C). Total roasting time approx 45-50 mins.\n7. Rest & Slice: Let Char Siu rest for 10 minutes before slicing thinly against the grain.\n8. Serve: Serve warm or cold, often with rice, noodles, or in buns.",
    tags: ["Chinese", "Cantonese", "Pork", "BBQ", "Roasted", "Sweet", "Savoury", "Char Siu", "Takeaway Classic", "Asian Inspired", "Dinner", "Lunch"]
  }
  // Continue adding Chinese recipes...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsChinese);