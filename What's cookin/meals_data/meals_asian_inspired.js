// meals_asian_inspired.js

const mealsAsianInspired = [
  {
    id: 1,
    name: "Simple Beef Stir-Fry",
    description: "Quick, versatile, and packed with veggies. Perfect for a weeknight dinner.",
    ingredients: [
        { quantity: "500g", name: "beef stir-fry strips" }, { quantity: "3 tbsp", name: "soy sauce" }, { quantity: "1.5 tbsp", name: "honey", prep: "(or maple syrup)" }, { quantity: "2 tsp", name: "ginger", prep: "grated" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1.5 tsp", name: "sesame oil" }, { quantity: "2 tbsp", name: "vegetable oil", prep: "(or peanut oil)" }, { quantity: "1 large head", name: "broccoli", prep: "cut into florets" }, { quantity: "1 large", name: "capsicum", prep: "sliced (any colour)" }, { quantity: "1 large", name: "carrot", prep: "julienned or thinly sliced" }, { quantity: "1", name: "onion", prep: "sliced" }, { name: "rice or noodles", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["beef", "beef strips", "stir-fry beef", "soy sauce", "honey", "ginger", "garlic", "sesame oil", "vegetable oil", "broccoli", "capsicum", "pepper", "carrot", "onion", "rice", "noodles", "asian", "quick", "chinese", "stir-fry"],
    instructions: "1. Marinate beef: Combine beef strips, soy sauce, honey, ginger, garlic, and sesame oil. Marinate for 15+ minutes.\n2. Heat oil: Heat vegetable oil in a wok over high heat.\n3. Cook beef: Stir-fry beef in batches until browned. Remove.\n4. Cook veggies: Stir-fry broccoli, capsicum, carrot, and onion until tender-crisp (3-5 mins).\n5. Combine: Return beef to wok. Add more soy sauce if desired. Toss to heat through.\n6. Serve: Serve immediately over cooked rice or noodles.",
    tags: ["Quick Meal", "Beef", "Stir-fry", "Asian Inspired", "Weeknight Dinner", "Chinese"]
  },
  {
    id: 2,
    name: "Chicken Pad See Ew",
    description: "Popular Thai stir-fried wide rice noodles with chicken, Chinese broccoli, and a savoury-sweet sauce.",
    ingredients: [
      { quantity: "250g", name: "wide flat rice noodles", prep: "fresh or dried" }, { quantity: "2", name: "chicken breast fillets", prep: "thinly sliced" }, { quantity: "1 tbsp", name: "soy sauce", prep: "(for marinade)" }, { quantity: "1 tsp", name: "cornflour" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "3 cloves", name: "garlic", prep: "minced" }, { quantity: "1 bunch", name: "Chinese broccoli (gai lan)", prep: "cut, stems separated" }, { quantity: "2", name: "eggs" }, // Sauce:
      { quantity: "2 tbsp", name: "dark soy sauce" }, { quantity: "1 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "soy sauce", prep: "(light)" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/2 tsp", name: "white pepper" }
    ],
    ingredientKeywords: ["pad see ew", "thai", "noodles", "rice noodles", "chicken", "gai lan", "garlic", "egg", "soy sauce", "oyster sauce", "asian", "stir-fry", "takeaway"],
    instructions: "1. Prep noodles: Soak dried noodles or separate fresh ones.\n2. Marinate chicken: Combine chicken, 1 tbsp soy sauce, cornflour. Set aside.\n3. Mix sauce: Whisk together dark soy, oyster, light soy, sugar, white pepper.\n4. Cook chicken: Stir-fry chicken in 1 tbsp oil until cooked. Remove.\n5. Cook veggies/egg: Stir-fry garlic in 1 tbsp oil, add gai lan stems, then leaves. Push aside, scramble eggs, mix.\n6. Combine: Add noodles, chicken, sauce to wok. Toss gently on high heat (1-2 mins).\n7. Serve: Serve immediately.",
    tags: ["Thai", "Noodles", "Stir-fry", "Chicken", "Asian Inspired", "Takeaway Classic", "Weeknight Dinner"]
  },
  {
    id: 3,
    name: "Sweet and Sour Pork",
    description: "Crispy battered pork in tangy sweet and sour sauce with pineapple and capsicum.",
    ingredients: [
      { quantity: "500g", name: "pork loin/shoulder", prep: "cubed" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Batter:
      { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "plain flour" }, { quantity: "1/2 tsp", name: "baking powder" }, { quantity: "1", name: "egg", prep: "beaten" }, { quantity: "1/4 cup", name: "water", prep: "(approx.)" }, { name: "vegetable oil", prep: "for deep frying" }, // Stir-fry:
      { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "wedges" }, { quantity: "1", name: "capsicum", prep: "chunks" }, { quantity: "1 cup", name: "pineapple chunks" }, // Sauce:
      { quantity: "1/2 cup", name: "pineapple juice" }, { quantity: "1/3 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "3 tbsp", name: "tomato ketchup" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water" }, { name: "rice", prep: "cooked, to serve"}
    ],
    ingredientKeywords: ["sweet and sour", "pork", "pineapple", "capsicum", "onion", "ketchup", "vinegar", "chinese", "asian", "takeaway", "deep fried", "stir-fry"],
    instructions: "1. Marinate pork: Combine pork, soy, wine for 15 mins.\n2. Make batter: Whisk dry ingredients, add egg, whisk in water.\n3. Fry pork: Heat oil to 180°C. Coat pork in batter, fry in batches until golden (4-6 mins). Drain.\n4. Make sauce: Whisk sauce ingredients (except slurry).\n5. Stir-fry veggies: Stir-fry onion, capsicum in 1 tbsp oil (2-3 mins). Add pineapple (1 min).\n6. Thicken sauce: Add sauce mix to wok, bring to simmer. Stir in cornflour slurry until thickens.\n7. Combine: Add fried pork, toss gently to coat.\n8. Serve: Serve immediately with rice.",
    tags: ["Chinese", "Pork", "Sweet and Sour", "Takeaway Classic", "Deep Fried", "Stir-fry", "Asian Inspired", "Family Favourite"]
  },
  {
    id: 4,
    name: "Vegetable Fried Rice",
    description: "Quick and easy way to use up leftover rice and veggies.",
    ingredients: [
      { quantity: "3 cups", name: "cooked rice", prep: "cold, day-old" }, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "diced" }, { quantity: "1/2 cup", name: "frozen peas" }, { quantity: "1/2 cup", name: "corn kernels" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "2-3 tbsp", name: "soy sauce" }, { name: "spring onions", prep: "sliced (garnish)" }
    ],
    ingredientKeywords: ["fried rice", "rice", "vegetable", "vegetarian", "onion", "garlic", "carrot", "peas", "corn", "egg", "soy sauce", "chinese", "asian", "quick", "leftovers", "stir-fry"],
    instructions: "1. Prep rice: Ensure rice is cold, break up clumps.\n2. Heat oils: Heat sesame and vegetable oil in wok (high heat).\n3. Sauté aromatics/veg: Stir-fry onion (1 min), add garlic/carrot (2 mins), add peas/corn (2-3 mins).\n4. Cook egg: Push veggies aside, scramble egg, mix in.\n5. Add rice: Add cold rice, stir-fry breaking clumps (2-3 mins).\n6. Season: Drizzle soy sauce, toss well.\n7. Serve: Garnish with spring onions.",
    tags: ["Chinese", "Rice", "Fried Rice", "Vegetarian", "Quick Meal", "Weeknight Dinner", "Leftovers", "Stir-fry", "Asian Inspired", "Budget Friendly"]
  },
  {
    id: 5,
    name: "Simple Thai Green Curry with Chicken",
    description: "Fragrant and creamy Thai green curry using store-bought paste.",
    ingredients: [
      { quantity: "1 tbsp", name: "vegetable oil" }, { quantity: "2-3 tbsp", name: "Thai green curry paste" }, { quantity: "400ml can", name: "coconut milk" }, { quantity: "2", name: "chicken breast fillets", prep: "sliced" }, { quantity: "1/2 cup", name: "chicken stock/water" }, { quantity: "1 cup", name: "mixed vegetables", prep: "(capsicum, bamboo, beans)" }, { quantity: "1 tbsp", name: "fish sauce" }, { quantity: "1 tsp", name: "sugar" }, { name: "kaffir lime leaves", prep: "optional" }, { name: "Thai basil leaves", prep: "optional" }, { name: "Jasmine rice", prep: "to serve"}
    ],
    ingredientKeywords: ["thai", "green curry", "curry", "chicken", "coconut milk", "curry paste", "fish sauce", "asian", "rice", "spicy", "quick"],
    instructions: "1. Sauté paste: Heat oil, cook curry paste until fragrant (1-2 mins).\n2. Add coconut milk: Stir in half the coconut milk, simmer until oil separates (3-5 mins).\n3. Cook chicken: Add chicken, cook until colour changes.\n4. Simmer: Add remaining coconut milk, stock, fish sauce, sugar, lime leaves. Simmer.\n5. Add veggies: Add vegetables, simmer until tender-crisp (5-10 mins).\n6. Finish: Stir in Thai basil (if using). Adjust seasoning.\n7. Serve: Serve hot with jasmine rice.",
    tags: ["Thai", "Curry", "Green Curry", "Chicken", "Coconut Milk", "Asian Inspired", "Weeknight Dinner", "Quick Meal", "Spicy Option"]
  },
  {
    id: 6,
    name: "Beef Bulgogi (Korean BBQ Beef)",
    description: "Thinly sliced beef marinated in a sweet and savoury sauce, quickly grilled or pan-fried.",
    ingredients: [
        { quantity: "500g", name: "beef sirloin or ribeye", prep: "very thinly sliced" },
        // Marinade:
        { quantity: "1/4 cup", name: "soy sauce" },
        { quantity: "2 tbsp", name: "pear", prep: "grated (Asian pear preferred)" },
        { quantity: "1 tbsp", name: "brown sugar" },
        { quantity: "1 tbsp", name: "sesame oil" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "1 tsp", name: "ginger", prep: "grated" },
        { quantity: "1 tbsp", name: "rice wine (mirin)", prep: "optional" },
        { quantity: "pinch", name: "black pepper" },
        // For cooking/serving:
        { quantity: "1 tbsp", name: "vegetable oil" },
        { quantity: "1/2", name: "onion", prep: "sliced (optional)" },
        { name: "spring onions", prep: "sliced (garnish)" },
        { name: "sesame seeds", prep: "toasted (garnish)" },
        { name: "rice", prep: "cooked, to serve" },
        { name: "lettuce leaves", prep: "for wraps (optional)" }
    ],
    ingredientKeywords: ["bulgogi", "korean", "beef", "sirloin", "ribeye", "bbq", "barbecue", "soy sauce", "pear", "sesame oil", "garlic", "ginger", "sugar", "asian", "quick", "grill", "pan-fry"],
    instructions: "1. Marinate beef: Combine sliced beef with all marinade ingredients (soy sauce, pear, brown sugar, sesame oil, garlic, ginger, rice wine, pepper). Mix well. Marinate for at least 30 minutes (or longer in fridge).\n2. Cook: Heat vegetable oil in a large skillet or on a grill over medium-high heat.\n3. Add sliced onion (if using) and cook for 1-2 minutes until slightly softened.\n4. Add marinated beef in a single layer (cook in batches if needed). Cook quickly, flipping once, until desired doneness (usually 2-4 minutes total).\n5. Serve: Transfer cooked beef to a plate. Garnish with sliced spring onions and toasted sesame seeds.\n6. Serve immediately with cooked rice and lettuce leaves for wrapping, if desired.",
    tags: ["Korean", "Beef", "BBQ", "Grill", "Quick Meal", "Asian Inspired", "Weeknight Dinner", "Savoury", "Sweet"]
  },
  {
    id: 7,
    name: "Vietnamese Pho Ga (Chicken Noodle Soup)",
    description: "A light yet aromatic Vietnamese chicken noodle soup with rice noodles and fresh herbs.",
    ingredients: [
        { quantity: "1.5 L", name: "chicken stock", prep: "(good quality)" },
        { quantity: "2 cm", name: "ginger", prep: "sliced" },
        { quantity: "1", name: "onion", prep: "halved" },
        { quantity: "2", name: "star anise" },
        { quantity: "1", name: "cinnamon stick" },
        { quantity: "3", name: "cloves" },
        { quantity: "1 tsp", name: "coriander seeds" },
        { quantity: "2", name: "chicken breast fillets", prep: "poached & shredded (or use leftover roast chicken)" },
        { quantity: "200g", name: "dried rice vermicelli noodles" },
        { quantity: "1 tbsp", name: "fish sauce", prep: "(or to taste)" },
        { quantity: "1 tsp", name: "sugar", prep: "(or to taste)" },
        // Toppings:
        { name: "bean sprouts" },
        { name: "fresh mint leaves" },
        { name: "fresh coriander leaves" },
        { name: "Thai basil leaves" },
        { name: "lime wedges" },
        { name: "chilli", prep: "sliced" },
        { name: "Hoisin sauce", prep: "optional" },
        { name: "Sriracha sauce", prep: "optional" }
    ],
    ingredientKeywords: ["pho", "pho ga", "vietnamese", "chicken", "noodle soup", "soup", "rice noodles", "vermicelli", "ginger", "star anise", "cinnamon", "cloves", "fish sauce", "herbs", "mint", "coriander", "basil", "lime", "asian", "light", "healthy"],
    instructions: "1. Make broth: Combine chicken stock, ginger, onion halves, star anise, cinnamon stick, cloves, and coriander seeds in a large pot. Bring to a simmer, then reduce heat, cover, and cook gently for at least 30 minutes (longer is better) to infuse flavours.\n2. If poaching chicken: Add chicken breasts to broth, simmer until cooked through (15-20 mins). Remove chicken, shred when cool enough to handle. Strain broth, discarding solids. Return broth to pot.\n3. Cook noodles: Cook rice noodles according to package directions. Drain well.\n4. Season broth: Add fish sauce and sugar to the strained broth. Taste and adjust seasoning as needed (balance of salty/sweet/savoury).\n5. Assemble bowls: Divide cooked noodles among serving bowls. Top with shredded chicken.\n6. Serve: Ladle the hot, seasoned broth over the noodles and chicken.\n7. Offer toppings: Serve immediately with a platter of fresh toppings (bean sprouts, herbs, lime wedges, chilli) for everyone to add to their own bowl. Offer Hoisin and Sriracha sauces on the side.",
    tags: ["Vietnamese", "Soup", "Noodle Soup", "Chicken", "Pho", "Light Meal", "Healthy", "Asian Inspired", "Winter Warmer"]
  },
  {
    id: 8,
    name: "Japanese Chicken Katsu Curry",
    description: "Crispy fried chicken cutlet (katsu) served with a mild, sweet Japanese curry sauce and rice.",
    ingredients: [
        // Chicken Katsu:
        { quantity: "2", name: "chicken breast fillets" },
        { name: "salt and pepper", prep: "to taste" },
        { quantity: "1/4 cup", name: "plain flour" },
        { quantity: "1", name: "egg", prep: "beaten" },
        { quantity: "1 cup", name: "panko breadcrumbs" },
        { name: "vegetable oil", prep: "for shallow frying" },
        // Japanese Curry Sauce:
        { quantity: "1 tbsp", name: "vegetable oil" },
        { quantity: "1", name: "onion", prep: "finely chopped" },
        { quantity: "1", name: "carrot", prep: "finely chopped or grated" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "2-3 blocks", name: "Japanese curry roux", prep: "(e.g., S&B Golden Curry)" },
        { quantity: "2.5 cups", name: "water", prep: "(or chicken stock)" },
        { quantity: "1 tsp", name: "soy sauce", prep: "optional" },
        { quantity: "1 tsp", name: "sugar or honey", prep: "optional" },
        { name: "Japanese rice", prep: "cooked, to serve" },
        { name: "Fukujinzuke (pickled radish)", prep: "optional garnish"}
    ],
    ingredientKeywords: ["katsu", "chicken katsu", "japanese", "curry", "japanese curry", "chicken", "panko", "breadcrumbs", "curry roux", "rice", "onion", "carrot", "garlic", "asian", "comfort food", "deep fried", "mild"],
    instructions: "1. Make curry sauce: Heat 1 tbsp oil in a saucepan. Sauté onion and carrot until softened (5-7 mins). Add garlic, cook 1 min. Add water/stock, bring to boil. Reduce heat, simmer 10 mins.\n2. Add roux: Turn off heat. Break curry roux blocks and add to pot. Stir until completely dissolved. Turn heat back to low, simmer gently, stirring, until sauce thickens (5-10 mins). Add optional soy/sugar if desired.\n3. Prepare chicken: Flatten chicken breasts slightly. Season with salt and pepper.\n4. Crumb chicken: Set up 3 plates: flour, beaten egg, panko breadcrumbs. Dredge chicken in flour, dip in egg, coat thoroughly in panko, pressing gently.\n5. Fry chicken: Heat about 1-2cm vegetable oil in a frying pan over medium heat. Carefully place crumbed chicken in hot oil. Fry for 4-6 minutes per side, until golden brown, crispy, and cooked through. Drain on paper towels.\n6. Slice Katsu: Cut the cooked chicken katsu into 1-2cm wide strips.\n7. Serve: Place a portion of cooked Japanese rice on a plate. Arrange sliced chicken katsu next to or on top of the rice. Ladle a generous amount of Japanese curry sauce over the chicken and rice. Garnish with fukujinzuke if desired.",
    tags: ["Japanese", "Curry", "Chicken", "Katsu", "Deep Fried", "Comfort Food", "Asian Inspired", "Family Favourite", "Mild"]
  },
  {
    id: 9,
    name: "Pork and Chive Dumplings (Potstickers)",
    description: "Classic Chinese dumplings filled with pork and chives, pan-fried until crispy on the bottom.",
    ingredients: [
        { quantity: "250g", name: "pork mince" },
        { quantity: "1 cup", name: "garlic chives", prep: "finely chopped" },
        { quantity: "1 tbsp", name: "soy sauce" },
        { quantity: "1 tsp", name: "sesame oil" },
        { quantity: "1 tsp", name: "ginger", prep: "grated" },
        { quantity: "1 clove", name: "garlic", prep: "minced" },
        { quantity: "1/4 tsp", name: "white pepper" },
        { quantity: "Approx. 30", name: "round dumpling wrappers", prep: "(store-bought)" },
        // For cooking:
        { quantity: "1 tbsp", name: "vegetable oil" },
        { quantity: "1/2 cup", name: "water" },
        // Dipping sauce (example):
        { quantity: "2 tbsp", name: "soy sauce" },
        { quantity: "1 tbsp", name: "rice vinegar" },
        { quantity: "1/2 tsp", name: "sesame oil" },
        { name: "chilli oil or flakes", prep: "optional" }
    ],
    ingredientKeywords: ["dumplings", "potstickers", "gyoza", "pork", "pork mince", "chives", "garlic chives", "soy sauce", "sesame oil", "ginger", "dumpling wrappers", "chinese", "asian", "pan-fried", "steamed", "appetizer", "snack"],
    instructions: "1. Make filling: In a bowl, combine pork mince, chopped chives, soy sauce, sesame oil, ginger, garlic, and white pepper. Mix well in one direction until slightly sticky.\n2. Assemble dumplings: Place a small spoonful (about 1-2 tsp) of filling in the center of a dumpling wrapper. Moisten the edge of half the wrapper with water using your finger. Fold the wrapper in half over the filling. Press the edges together firmly, pleating one side as you go to create a crescent shape, ensuring it's well sealed.\n3. Cook dumplings: Heat vegetable oil in a large non-stick frying pan with a lid over medium-high heat. Arrange dumplings in a single layer (pleated side up). Cook for 2-3 minutes until the bottoms are golden brown.\n4. Add water: Carefully pour 1/2 cup of water into the hot pan (it will steam!). Immediately cover the pan with the lid.\n5. Steam: Reduce heat to medium-low. Let dumplings steam for 5-7 minutes, or until the water has evaporated and the filling is cooked through.\n6. Crisp bottoms (optional): Remove the lid. Increase heat slightly if needed, and cook for another 1-2 minutes until the bottoms are extra crispy and any remaining water is gone.\n7. Make dipping sauce: Whisk together soy sauce, rice vinegar, sesame oil, and chilli (if using).\n8. Serve: Serve dumplings immediately with the dipping sauce.",
    tags: ["Chinese", "Dumplings", "Potstickers", "Pork", "Pan-Fried", "Steamed", "Appetizer", "Snack", "Asian Inspired", "Comfort Food"]
  },
  {
    id: 10,
    name: "Teriyaki Salmon with Rice and Greens",
    description: "Flaky salmon fillets glazed with a simple homemade teriyaki sauce, served with rice and steamed greens.",
    ingredients: [
        { quantity: "2", name: "salmon fillets", prep: "skin-on or off" },
        // Teriyaki Sauce:
        { quantity: "1/4 cup", name: "soy sauce" },
        { quantity: "1/4 cup", name: "mirin", prep: "(sweet rice wine)" },
        { quantity: "2 tbsp", name: "sake", prep: "(or water)" },
        { quantity: "2 tbsp", name: "sugar" },
        // For serving:
        { quantity: "1 tbsp", name: "vegetable oil" },
        { name: "Japanese rice", prep: "cooked" },
        { name: "Steamed green vegetables", prep: "(e.g., broccoli, bok choy, green beans)" },
        { name: "Sesame seeds", prep: "toasted (garnish)" },
        { name: "Spring onions", prep: "sliced (garnish)" }
    ],
    ingredientKeywords: ["teriyaki", "salmon", "fish", "seafood", "japanese", "soy sauce", "mirin", "sake", "sugar", "rice", "broccoli", "bok choy", "green beans", "healthy", "quick", "pan-fry", "asian"],
    instructions: "1. Make Teriyaki Sauce: Combine soy sauce, mirin, sake (or water), and sugar in a small saucepan. Bring to a simmer over medium heat, stirring until sugar dissolves. Simmer gently for 5-10 minutes, or until the sauce thickens slightly (it will thicken more as it cools). Set aside.\n2. Prepare salmon: Pat salmon fillets dry with paper towel. Season lightly with salt and pepper if desired (sauce is salty).\n3. Cook salmon: Heat vegetable oil in a non-stick frying pan over medium-high heat. Place salmon fillets skin-side down (if using skin). Cook for 4-6 minutes until skin is crispy and golden.\n4. Flip salmon: Flip the fillets and cook for another 2-4 minutes, depending on thickness, until cooked through but still moist.\n5. Glaze salmon: Reduce heat to low. Pour about half of the teriyaki sauce over the salmon fillets in the pan. Turn the fillets to coat them evenly. Let the sauce bubble and glaze the fish for about 30 seconds to 1 minute.\n6. Serve: Serve glazed salmon immediately over cooked Japanese rice. Drizzle with extra teriyaki sauce from the pan or the reserved sauce. Serve with steamed green vegetables on the side. Garnish with toasted sesame seeds and sliced spring onions.",
    tags: ["Japanese", "Teriyaki", "Salmon", "Fish", "Seafood", "Healthy", "Quick Meal", "Weeknight Dinner", "Asian Inspired", "Gluten Free Option"] // (Use Tamari for GF)
  },
   {
    id: 11,
    name: "Laksa Lemak (Creamy Coconut Noodle Soup)",
    description: "A rich and fragrant Malaysian coconut-based noodle soup, often served with chicken, prawns, tofu puffs and bean sprouts.",
    ingredients: [
        { quantity: "2 tbsp", name: "vegetable oil" },
        { quantity: "1", name: "onion", prep: "roughly chopped" },
        { quantity: "3 cloves", name: "garlic" },
        { quantity: "2 cm", name: "ginger", prep: "sliced" },
        { quantity: "1 stalk", name: "lemongrass", prep: "white part only, bruised & chopped" },
        { quantity: "1-2", name: "red chillies", prep: "deseeded if preferred, chopped" },
        { quantity: "1 tsp", name: "turmeric powder" },
        { quantity: "1 tbsp", name: "dried shrimp paste (belacan)", prep: "optional, toasted" },
        { quantity: "4 cups", name: "chicken stock" },
        { quantity: "400ml can", name: "coconut milk" },
        { quantity: "2 tbsp", name: "fish sauce" },
        { quantity: "1 tsp", name: "sugar" },
        { quantity: "200g", name: "rice vermicelli noodles" },
        { quantity: "100g", name: "hokkien noodles", prep: "or egg noodles" },
        // Toppings (Choose some):
        { quantity: "2", name: "chicken breasts", prep: "poached & shredded" },
        { quantity: "10-12", name: "prawns", prep: "peeled & cooked" },
        { quantity: "4-6", name: "tofu puffs", prep: "halved" },
        { name: "bean sprouts" },
        { name: "hard-boiled eggs", prep: "halved" },
        { name: "fish balls or fish cake slices" },
        { name: "fresh coriander leaves" },
        { name: "lime wedges" },
        { name: "sambal oelek", prep: "optional chilli paste" }
    ],
    ingredientKeywords: ["laksa", "laksa lemak", "malaysian", "singaporean", "noodle soup", "soup", "coconut milk", "curry", "noodles", "vermicelli", "hokkien", "chicken", "prawns", "shrimp", "tofu", "lemongrass", "chilli", "turmeric", "fish sauce", "asian", "spicy"],
    instructions: "1. Make Laksa Paste (or use store-bought): Blend onion, garlic, ginger, lemongrass, chillies, turmeric, and belacan (if using) in a food processor with a little oil until a smooth paste forms.\n2. Cook Paste: Heat 2 tbsp oil in a large pot. Add the laksa paste and cook over medium heat, stirring, for 5-10 minutes until fragrant and oil separates.\n3. Make Broth: Add chicken stock, bring to a simmer. Add coconut milk, fish sauce, and sugar. Simmer gently (do not boil rapidly) for 10-15 minutes.\n4. Cook Noodles: Cook rice vermicelli and hokkien/egg noodles separately according to package directions. Drain.\n5. Prepare Toppings: Ensure chicken is shredded, prawns are cooked, tofu puffs halved, eggs boiled and halved etc.\n6. Assemble Bowls: Place a portion of each type of noodle in serving bowls. Arrange desired toppings (chicken, prawns, tofu puffs, fish cake) over the noodles.\n7. Serve: Ladle the hot laksa broth over the noodles and toppings. Garnish with bean sprouts, coriander, and a lime wedge. Serve immediately with sambal on the side for extra heat.",
    tags: ["Malaysian", "Singaporean", "Soup", "Noodle Soup", "Coconut Milk", "Curry", "Spicy", "Chicken", "Prawns", "Tofu", "Asian Inspired", "Comfort Food", "Takeaway Classic"]
  },
  {
    id: 12,
    name: "Chinese Lemon Chicken",
    description: "Crispy battered chicken pieces coated in a sweet and tangy lemon sauce.",
    ingredients: [
        // Chicken & Batter:
        { quantity: "2", name: "chicken breast fillets", prep: "cut into bite-sized pieces" },
        { quantity: "1 tbsp", name: "soy sauce" },
        { quantity: "1", name: "egg white", prep: "lightly beaten" },
        { quantity: "1/2 cup", name: "cornflour" },
        { name: "vegetable oil", prep: "for deep frying" },
        // Lemon Sauce:
        { quantity: "3/4 cup", name: "chicken stock" },
        { quantity: "1/4 cup", name: "lemon juice", prep: "freshly squeezed" },
        { quantity: "3 tbsp", name: "sugar" },
        { quantity: "1 tbsp", name: "soy sauce", prep: "(light)" },
        { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water (slurry)" },
        { quantity: "few drops", name: "yellow food colouring", prep: "optional" },
        { name: "lemon slices", prep: "thin, for garnish" },
        { name: "rice", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["lemon chicken", "chicken", "lemon", "chinese", "asian", "takeaway", "deep fried", "sweet", "tangy", "cornflour", "soy sauce", "sugar"],
    instructions: "1. Marinate Chicken: Combine chicken pieces, 1 tbsp soy sauce, and egg white. Let sit for 10 minutes.\n2. Coat Chicken: Add 1/2 cup cornflour to the chicken mixture and toss well to coat each piece.\n3. Fry Chicken: Heat oil for deep frying to 180°C. Fry chicken in batches until golden brown and crispy (3-5 minutes). Drain on paper towels.\n4. Make Lemon Sauce: In a saucepan, combine chicken stock, lemon juice, sugar, and 1 tbsp light soy sauce. Bring to a simmer over medium heat.\n5. Thicken Sauce: Stir the cornflour slurry and pour it into the simmering sauce, stirring constantly until it boils and thickens. Add yellow food colouring if desired.\n6. Combine: Pour the hot lemon sauce over the crispy fried chicken pieces, tossing gently to coat.\n7. Serve: Serve immediately with cooked rice, garnished with thin lemon slices.",
    tags: ["Chinese", "Chicken", "Lemon", "Takeaway Classic", "Deep Fried", "Sweet", "Tangy", "Asian Inspired", "Family Favourite"]
  },
  {
    id: 13,
    name: "Spring Rolls (Vegetable)",
    description: "Crispy fried spring rolls filled with shredded vegetables, perfect as an appetizer or snack.",
    ingredients: [
        { quantity: "1 tbsp", name: "vegetable oil" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "1 tsp", name: "ginger", prep: "grated" },
        { quantity: "1", name: "carrot", prep: "julienned" },
        { quantity: "1/4 head", name: "cabbage", prep: "finely shredded" },
        { quantity: "1/2 cup", name: "bean sprouts" },
        { quantity: "2-3", name: "spring onions", prep: "sliced" },
        { quantity: "50g", name: "glass noodles (cellophane noodles)", prep: "soaked & chopped (optional)" },
        { quantity: "1 tbsp", name: "soy sauce" },
        { quantity: "1 tsp", name: "sesame oil" },
        { quantity: "pinch", name: "white pepper" },
        { quantity: "Approx. 15-20", name: "spring roll wrappers", prep: "(store-bought, square)" },
        { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water (slurry for sealing)" },
        { name: "vegetable oil", prep: "for deep frying" },
        { name: "sweet chilli sauce", prep: "for dipping" }
    ],
    ingredientKeywords: ["spring rolls", "vegetable", "vegetarian", "cabbage", "carrot", "bean sprouts", "spring onions", "glass noodles", "soy sauce", "sesame oil", "deep fried", "crispy", "appetizer", "snack", "chinese", "vietnamese", "asian"],
    instructions: "1. Make Filling: Heat 1 tbsp oil in wok. Stir-fry garlic and ginger until fragrant. Add carrot and cabbage, stir-fry 2-3 mins until slightly softened. Add bean sprouts, spring onions, soaked/chopped glass noodles (if using). Stir-fry 1 min.\n2. Season Filling: Stir in soy sauce, sesame oil, white pepper. Cook 1 min more. Remove from heat, let filling cool completely.\n3. Wrap Spring Rolls: Place a wrapper on a flat surface like a diamond. Spoon 2-3 tbsp of filling near the bottom corner. Fold the bottom corner up over the filling. Fold in the two side corners tightly. Brush the top corner with cornflour slurry. Roll up tightly from the bottom.\n4. Fry Spring Rolls: Heat oil for deep frying to 180°C. Carefully fry spring rolls in batches (don't overcrowd) for 3-5 minutes, turning occasionally, until golden brown and crispy.\n5. Drain: Remove with a slotted spoon and drain on paper towels.\n6. Serve: Serve hot with sweet chilli dipping sauce.",
    tags: ["Appetizer", "Snack", "Vegetarian", "Deep Fried", "Crispy", "Chinese", "Vietnamese", "Asian Inspired", "Party Food"]
  },
   {
    id: 14,
    name: "Mapo Tofu",
    description: "A popular Sichuan dish featuring soft tofu in a spicy, savoury sauce with minced pork (optional) and fermented broad beans.",
    ingredients: [
        { quantity: "1 block (approx 400g)", name: "soft or silken tofu", prep: "cut into cubes" },
        { quantity: "100g", name: "pork mince", prep: "(optional, can sub mushrooms)" },
        { quantity: "2 tbsp", name: "vegetable oil" },
        { quantity: "1 tbsp", name: "Sichuan chilli bean paste (doubanjiang)" },
        { quantity: "1 tsp", name: "fermented black beans (douchi)", prep: "rinsed & lightly crushed (optional)" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "1 tsp", name: "ginger", prep: "minced" },
        { quantity: "1/2 tsp", name: "Sichuan peppercorns", prep: "ground (optional, for numbing spice)" },
        { quantity: "1 cup", name: "chicken stock", prep: "(or vegetable stock)" },
        { quantity: "1 tbsp", name: "soy sauce" },
        { quantity: "1 tsp", name: "sugar" },
        { quantity: "1 tbsp", name: "cornflour", prep: "mixed with 2 tbsp water (slurry)" },
        { quantity: "1 tsp", name: "sesame oil" },
        { name: "spring onions", prep: "sliced, for garnish" },
        { name: "rice", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["mapo tofu", "tofu", "sichuan", "chinese", "spicy", "pork", "pork mince", "mushrooms", "doubanjiang", "chilli bean paste", "fermented black beans", "sichuan peppercorns", "garlic", "ginger", "asian", "vegetarian option"],
    instructions: "1. Prepare Tofu: Gently boil tofu cubes in salted water for 1 minute to firm them up. Drain carefully.\n2. Cook Pork (if using): Heat vegetable oil in a wok. Add pork mince and stir-fry until cooked through and slightly browned. Remove pork and set aside.\n3. Sauté Aromatics: Add chilli bean paste (doubanjiang) to the remaining oil. Stir-fry over low heat for 1-2 minutes until oil turns red and fragrant. Add fermented black beans (if using), garlic, ginger, and ground Sichuan peppercorns (if using). Stir-fry for 30 seconds.\n4. Make Sauce: Pour in stock, soy sauce, and sugar. Bring to a simmer.\n5. Add Tofu & Pork: Gently slide the drained tofu cubes into the sauce. Return cooked pork (or add chopped mushrooms now if using instead of pork) to the wok. Gently push ingredients around (don't break tofu). Simmer for 3-5 minutes.\n6. Thicken: Stir the cornflour slurry and pour it into the simmering sauce, gently mixing until thickened.\n7. Finish: Stir in the sesame oil.\n8. Serve: Carefully spoon mapo tofu over cooked rice. Garnish generously with sliced spring onions.",
    tags: ["Chinese", "Sichuan", "Tofu", "Spicy", "Pork", "Vegetarian Option", "Asian Inspired", "Comfort Food", "Weeknight Dinner"]
  },
  {
    id: 15,
    name: "Beef Rendang",
    description: "A rich and tender Indonesian/Malaysian slow-cooked beef curry with complex spices and coconut milk.",
    ingredients: [
      // Spice Paste (Rempah):
      { quantity: "10-15", name: "dried red chillies", prep: "soaked & deseeded" }, { quantity: "3", name: "shallots", prep: "(or 1 onion), chopped" }, { quantity: "4 cloves", name: "garlic" }, { quantity: "3 cm", name: "galangal", prep: "sliced" }, { quantity: "3 cm", name: "ginger", prep: "sliced" }, { quantity: "2 stalks", name: "lemongrass", prep: "white part, sliced" }, { quantity: "1 tsp", name: "turmeric powder" }, // Beef & Curry:
      { quantity: "1kg", name: "beef chuck or brisket", prep: "cut into 4cm cubes" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "1", name: "cinnamon stick" }, { quantity: "3", name: "star anise" }, { quantity: "4", name: "cloves" }, { quantity: "4", name: "cardamom pods", prep: "bruised" }, { quantity: "400ml can", name: "coconut milk" }, { quantity: "1 cup", name: "water" }, { quantity: "2 tsp", name: "tamarind paste", prep: "mixed with 1/4 cup water, strained (optional)" }, { quantity: "4", name: "kaffir lime leaves", prep: "torn" }, { quantity: "1/2 cup", name: "kerisik", prep: "(toasted dessicated coconut, pounded)" }, { quantity: "1 tbsp", name: "palm sugar", prep: "(or brown sugar)" }, { name: "salt", prep: "to taste" }, { name: "rice", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["rendang", "beef rendang", "indonesian", "malaysian", "beef", "curry", "slow-cooked", "coconut milk", "spicy", "galangal", "lemongrass", "kerisik", "tamarind", "asian", "rich", "comfort food"],
    instructions: "1. Make Spice Paste: Blend all spice paste ingredients with a little oil until smooth.\n2. Sauté Spices: Heat oil in a large pot. Add cinnamon, star anise, cloves, cardamom, sauté 1 min. Add spice paste, cook stirring 10-15 mins until fragrant and oil separates.\n3. Brown Beef: Add beef cubes, stir to coat. Cook until beef changes colour.\n4. Simmer: Add coconut milk, water, tamarind liquid (if using), kaffir lime leaves. Bring to boil, then reduce heat, cover, simmer gently for 1.5 - 2 hours, stirring occasionally, until beef starts to tenderize.\n5. Reduce & Tenderize: Remove lid. Stir in kerisik, palm sugar, salt. Continue simmering uncovered for another 30-60 minutes, stirring more frequently as it thickens, until beef is very tender and sauce is thick and dark (oil should separate again). Add a splash of water if it becomes too dry before beef is tender.\n6. Serve: Serve hot with steamed rice.",
    tags: ["Indonesian", "Malaysian", "Beef", "Curry", "Slow-Cooked", "Spicy", "Rich", "Comfort Food", "Asian Inspired"]
  },
   {
    id: 16,
    name: "Korean Bibimbap (Mixed Rice Bowl)",
    description: "A colourful Korean rice bowl topped with various seasoned vegetables, meat (optional), a fried egg, and gochujang sauce.",
    ingredients: [
        { name: "Cooked short-grain rice" },
        // Toppings (examples, choose several):
        { quantity: "100g", name: "beef mince or strips", prep: "marinated & cooked (e.g., soy, garlic, sesame oil)" },
        { quantity: "1", name: "carrot", prep: "julienned, lightly sautéed" },
        { quantity: "1 cup", name: "spinach", prep: "blanched & seasoned (sesame oil, salt, garlic)" },
        { quantity: "1/2 cup", name: "bean sprouts", prep: "blanched & seasoned" },
        { quantity: "1", name: "zucchini", prep: "julienned, lightly sautéed" },
        { name: "Mushrooms (e.g., shiitake)", prep: "sliced & sautéed" },
        { name: "Kimchi", prep: "chopped" },
        { quantity: "1-2", name: "eggs", prep: "fried sunny-side up" },
        // Sauce (Gochujang Sauce):
        { quantity: "2 tbsp", name: "gochujang (Korean chilli paste)" },
        { quantity: "1 tbsp", name: "sesame oil" },
        { quantity: "1 tbsp", name: "sugar or honey" },
        { quantity: "1 tbsp", name: "water" },
        { quantity: "1 tsp", name: "vinegar", prep: "optional" },
        { quantity: "1/2 tsp", name: "minced garlic", prep: "optional" },
        { name: "Toasted sesame seeds", prep: "garnish" }
    ],
    ingredientKeywords: ["bibimbap", "korean", "rice", "mixed rice", "beef", "vegetables", "spinach", "carrot", "zucchini", "bean sprouts", "mushrooms", "kimchi", "egg", "gochujang", "chilli paste", "sesame oil", "healthy", "vegetarian option", "asian"],
    instructions: "1. Prepare Rice: Cook rice according to package directions.\n2. Prepare Toppings: Cook/prepare each vegetable and meat topping separately. Season lightly (e.g., salt, sesame oil, garlic). Keep warm.\n3. Make Gochujang Sauce: Whisk together gochujang, sesame oil, sugar/honey, water, vinegar (if using), and garlic (if using) until smooth.\n4. Fry Eggs: Fry eggs sunny-side up or to your preference.\n5. Assemble Bowl: Place a generous portion of cooked rice in a large bowl. Arrange the prepared vegetable and meat toppings artfully over the rice in separate sections.\n6. Top with Egg: Place the fried egg in the center on top of the ingredients.\n7. Add Sauce & Garnish: Drizzle generously with gochujang sauce. Sprinkle with toasted sesame seeds.\n8. Mix & Eat: Instruct the diner to mix everything together thoroughly with a spoon or chopsticks before eating.",
    tags: ["Korean", "Rice", "Beef", "Vegetables", "Healthy", "Vegetarian Option", "Gochujang", "Asian Inspired", "Comfort Food", "Lunch", "Dinner"]
  },
  {
    id: 17,
    name: "Tom Yum Goong (Spicy Thai Shrimp Soup)",
    description: "A hot and sour Thai soup with shrimp, fragrant with lemongrass, galangal, kaffir lime leaves, and chilli.",
    ingredients: [
        { quantity: "1 L", name: "chicken stock", prep: "(or shrimp/fish stock)" },
        { quantity: "2 stalks", name: "lemongrass", prep: "bruised & cut into 5cm pieces" },
        { quantity: "3 cm", name: "galangal", prep: "thinly sliced" },
        { quantity: "4-5", name: "kaffir lime leaves", prep: "torn" },
        { quantity: "2-4", name: "red chillies", prep: "bruised or sliced" },
        { quantity: "200g", name: "prawns (shrimp)", prep: "peeled & deveined" },
        { quantity: "100g", name: "mushrooms", prep: "(e.g., oyster, straw), sliced or whole" },
        { quantity: "2-3 tbsp", name: "fish sauce" },
        { quantity: "2-3 tbsp", name: "lime juice", prep: "freshly squeezed" },
        { quantity: "1 tbsp", name: "Thai chilli paste in oil (Nam Prik Pao)", prep: "optional, for depth" },
        { quantity: "optional:", name: "cherry tomatoes", prep: "halved" },
        { name: "Fresh coriander leaves", prep: "for garnish" }
    ],
    ingredientKeywords: ["tom yum", "tom yum goong", "thai", "soup", "hot and sour", "spicy", "shrimp", "prawns", "lemongrass", "galangal", "kaffir lime", "chilli", "fish sauce", "lime", "mushrooms", "asian", "light", "starter"],
    instructions: "1. Infuse Broth: Combine stock, lemongrass, galangal, kaffir lime leaves, and chillies in a pot. Bring to a boil, then reduce heat and simmer for 10-15 minutes to infuse flavours.\n2. Add Mushrooms & Prawns: Add mushrooms to the broth and simmer for 2-3 minutes. Add prawns and cook just until they turn pink and opaque (about 1-2 minutes).\n3. Season: Remove pot from heat. Stir in fish sauce, lime juice, and Thai chilli paste (if using). Taste and adjust seasoning - it should be a balance of spicy, sour, and salty.\n4. Add Tomatoes (optional): Stir in cherry tomatoes if using.\n5. Serve: Ladle the soup into bowls, ensuring prawns and mushrooms are distributed. Garnish generously with fresh coriander leaves. Serve immediately.",
    tags: ["Thai", "Soup", "Hot and Sour", "Spicy", "Prawns", "Shrimp", "Seafood", "Light Meal", "Starter", "Asian Inspired", "Gluten Free"]
  },
  {
    id: 18,
    name: "Char Kway Teow",
    description: "A popular Malaysian/Singaporean stir-fried flat rice noodle dish with prawns, Chinese sausage, egg, and bean sprouts in a dark soy sauce.",
    ingredients: [
      { quantity: "300g", name: "fresh flat rice noodles (kway teow)" }, { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "Chinese sausage (lap cheong)", prep: "thinly sliced" }, { quantity: "6-8", name: "prawns (shrimp)", prep: "peeled" }, { quantity: "50g", name: "fish cake", prep: "sliced (optional)" }, { quantity: "1", name: "egg" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1/4 cup", name: "garlic chives", prep: "cut into 5cm lengths" }, // Sauce:
      { quantity: "2 tbsp", name: "dark soy sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tbsp", name: "ketchup manis", prep: "(sweet soy sauce, optional)" }, { quantity: "1 tbsp", name: "sambal oelek or chilli paste", prep: "(optional, for spice)" }, { quantity: "1/2 tsp", name: "white pepper" }
    ],
    ingredientKeywords: ["char kway teow", "malaysian", "singaporean", "noodles", "flat rice noodles", "stir-fry", "prawns", "shrimp", "chinese sausage", "lap cheong", "egg", "bean sprouts", "chives", "soy sauce", "dark soy sauce", "spicy option", "asian", "takeaway"],
    instructions: "1. Prepare Noodles: Gently separate fresh noodles. If slightly stiff, briefly blanch in hot water and drain well.\n2. Mix Sauce: Combine all sauce ingredients in a small bowl.\n3. Heat Wok: Heat oil in a wok over high heat until smoking.\n4. Sauté Aromatics/Protein: Add garlic, stir-fry briefly. Add Chinese sausage, stir-fry 1 min. Add prawns and fish cake (if using), stir-fry until prawns turn pink.\n5. Add Noodles & Sauce: Add noodles to the wok. Pour sauce mixture over. Stir-fry quickly, tossing continuously for 1-2 minutes to coat evenly and get some 'wok hei' (smoky flavour).\n6. Add Egg & Veggies: Push noodles to one side. Crack egg into empty space, scramble lightly, then mix into noodles. Add bean sprouts and chives. Toss everything together for another 30-60 seconds until sprouts are slightly wilted.\n7. Serve: Transfer to plates immediately. Serve hot.",
    tags: ["Malaysian", "Singaporean", "Noodles", "Stir-fry", "Prawns", "Seafood", "Takeaway Classic", "Spicy Option", "Asian Inspired", "Weeknight Dinner"]
  },
   {
    id: 19,
    name: "Vietnamese Fresh Spring Rolls (Goi Cuon)",
    description: "Refreshing rice paper rolls filled with prawns, pork, vermicelli noodles, lettuce, and fresh herbs, served with peanut dipping sauce.",
    ingredients: [
        { quantity: "Approx. 12 sheets", name: "dried rice paper wrappers" },
        { quantity: "100g", name: "rice vermicelli noodles" },
        { quantity: "12", name: "medium prawns (shrimp)", prep: "cooked, peeled, deveined & halved lengthwise" },
        { quantity: "100g", name: "pork loin or belly", prep: "cooked & thinly sliced (optional)" },
        { quantity: "1", name: "lettuce head", prep: "(e.g., butter or iceberg), leaves separated" },
        { quantity: "1 cup", name: "fresh mint leaves" },
        { quantity: "1 cup", name: "fresh coriander leaves" },
        { quantity: "optional:", name: "chives or spring onion greens" },
        // Peanut Dipping Sauce (Hoisin Peanut Sauce):
        { quantity: "1/4 cup", name: "hoisin sauce" },
        { quantity: "2 tbsp", name: "smooth peanut butter" },
        { quantity: "1/4 cup", name: "warm water", prep: "(approx.)" },
        { quantity: "1 tsp", name: "lime juice", prep: "optional" },
        { quantity: "optional:", name: "crushed peanuts", prep: "for garnish" },
        { quantity: "optional:", name: "chilli sauce (Sriracha)", prep: "to serve" }
    ],
    ingredientKeywords: ["goi cuon", "summer rolls", "fresh spring rolls", "vietnamese", "rice paper rolls", "prawns", "shrimp", "pork", "vermicelli", "lettuce", "mint", "coriander", "herbs", "peanut sauce", "hoisin", "healthy", "light", "no-cook", "appetizer", "asian"],
    instructions: "1. Prepare Ingredients: Cook vermicelli noodles per package directions, drain, rinse with cold water. Cook pork (if using) and slice thinly. Halve cooked prawns lengthwise. Wash and prepare lettuce and herbs.\n2. Make Dipping Sauce: Whisk hoisin sauce and peanut butter in a small bowl. Gradually whisk in warm water until smooth and desired consistency is reached. Stir in lime juice if using. Garnish with crushed peanuts if desired.\n3. Prepare Rolling Station: Fill a wide shallow dish with warm water. Have all fillings ready.\n4. Soften Rice Paper: Dip one rice paper wrapper into the warm water for about 15-30 seconds until pliable but not too soft. Lay flat on a clean damp surface or plate.\n5. Fill Roll: Near the bottom edge of the wrapper, layer a piece of lettuce, some vermicelli, mint, coriander, and sliced pork (if using). Place 2-3 prawn halves (pink side down) slightly above the first layer.\n6. Roll Tightly: Fold the bottom edge of the wrapper up over the filling. Fold in the two sides tightly. Roll up tightly from the bottom, like a burrito. The prawns should show through the top.\n7. Repeat: Repeat with remaining wrappers and fillings.\n8. Serve: Serve fresh spring rolls immediately with the peanut dipping sauce and optional chilli sauce.",
    tags: ["Vietnamese", "Appetizer", "Healthy", "Light Meal", "No-Cook", "Prawns", "Peanut Sauce", "Summer", "Asian Inspired", "Gluten Free"]
  },
  {
    id: 20,
    name: "Kung Pao Chicken",
    description: "A spicy Sichuan stir-fry with diced chicken, peanuts, vegetables, and dried chillies in a savoury, tangy sauce.",
    ingredients: [
        { quantity: "2", name: "chicken breast fillets", prep: "diced" },
        // Marinade:
        { quantity: "1 tbsp", name: "soy sauce" },
        { quantity: "1 tsp", name: "cornflour" },
        { quantity: "1 tsp", name: "shaoxing wine", prep: "(or dry sherry)" },
        // Sauce:
        { quantity: "2 tbsp", name: "soy sauce" },
        { quantity: "1 tbsp", name: "chinese black vinegar (Chinkiang)" },
        { quantity: "1 tbsp", name: "shaoxing wine" },
        { quantity: "1 tsp", name: "sugar" },
        { quantity: "1 tsp", name: "sesame oil" },
        { quantity: "1 tsp", name: "cornflour", prep: "mixed with 1 tbsp water" },
        // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" },
        { quantity: "5-10", name: "dried red chillies", prep: "snipped" },
        { quantity: "1 tsp", name: "Sichuan peppercorns", prep: "optional" },
        { quantity: "3 cloves", name: "garlic", prep: "sliced" },
        { quantity: "2 cm", name: "ginger", prep: "sliced" },
        { quantity: "3", name: "spring onions", prep: "white parts chopped, green parts sliced" },
        { quantity: "1/2", name: "capsicum", prep: "diced (optional)" },
        { quantity: "1/2 cup", name: "unsalted peanuts", prep: "roasted" },
        { name: "rice", prep: "cooked, to serve" }
    ],
    ingredientKeywords: ["kung pao chicken", "gong bao chicken", "sichuan", "chinese", "chicken", "peanuts", "spicy", "chilli", "sichuan peppercorns", "black vinegar", "soy sauce", "stir-fry", "asian", "takeaway"],
    instructions: "1. Marinate Chicken: Combine diced chicken with marinade ingredients (soy, cornflour, wine). Set aside 15 mins.\n2. Mix Sauce: Combine all sauce ingredients (soy, vinegar, wine, sugar, sesame oil, cornflour slurry) in a small bowl.\n3. Heat Wok & Aromatics: Heat oil in wok over high heat. Add dried chillies and Sichuan peppercorns (if using). Stir-fry until fragrant and slightly darkened (30-60 secs). Be careful not to burn.\n4. Cook Chicken: Add marinated chicken to wok. Stir-fry until cooked through and lightly browned.\n5. Add Veggies: Add garlic, ginger, white parts of spring onions, and capsicum (if using). Stir-fry for 1 minute.\n6. Add Sauce & Finish: Pour the mixed sauce into the wok. Stir quickly as it thickens. Add roasted peanuts and green parts of spring onions. Toss everything together.\n7. Serve: Serve immediately with cooked rice.",
    tags: ["Chinese", "Sichuan", "Chicken", "Spicy", "Peanuts", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner"]
  },
  // Add IDs 21-30 here following the same pattern and category...
  // Example placeholder for brevity:
   {
     id: 21,
     name: "General Tso's Chicken",
     description: "Crispy deep-fried chicken pieces coated in a sweet, slightly spicy, and tangy sauce.",
     ingredients: [ /* ... similar complexity ... */ ],
     ingredientKeywords: ["general tso", "chicken", "chinese", "american chinese", "deep fried", "sweet", "spicy", "tangy", "takeaway", "asian"],
     instructions: "/* ... detailed instructions ... */",
     tags: ["Chinese", "American Chinese", "Chicken", "Deep Fried", "Sweet", "Spicy", "Takeaway Classic", "Asian Inspired"]
   },
   {
     id: 22,
     name: "Wonton Soup",
     description: "Delicate pork and prawn filled wontons served in a light, clear broth.",
     ingredients: [ /* ... wonton filling, wrappers, broth ingredients ... */ ],
     ingredientKeywords: ["wonton", "soup", "chinese", "pork", "prawn", "shrimp", "dumpling", "broth", "light", "starter", "comfort food", "asian"],
     instructions: "/* ... instructions for making filling, wrapping wontons, making broth, cooking ... */",
     tags: ["Chinese", "Soup", "Wonton", "Dumpling", "Pork", "Prawn", "Light Meal", "Starter", "Comfort Food", "Asian Inspired"]
   },
    {
     id: 23,
     name: "Chicken Adobo",
     description: "A classic Filipino dish of chicken braised in soy sauce, vinegar, garlic, bay leaves, and peppercorns.",
     ingredients: [
        { quantity: "1kg", name: "chicken pieces", prep: "(thighs, drumsticks recommended)"},
        { quantity: "1/2 cup", name: "soy sauce"},
        { quantity: "1/2 cup", name: "white vinegar"},
        { quantity: "1 head", name: "garlic", prep: "cloves crushed"},
        { quantity: "1 tbsp", name: "whole black peppercorns"},
        { quantity: "3-4", name: "dried bay leaves"},
        { quantity: "1 tbsp", name: "vegetable oil", prep: "optional"},
        { quantity: "optional:", name: "1/2 cup", name: "water"},
        { name: "rice", prep:"cooked, to serve"}
     ],
     ingredientKeywords: ["adobo", "chicken adobo", "filipino", "philippines", "chicken", "soy sauce", "vinegar", "garlic", "peppercorns", "bay leaves", "braised", "stew", "asian", "comfort food", "savoury", "tangy"],
     instructions: "1. Combine: In a pot, combine chicken pieces, soy sauce, vinegar, crushed garlic, peppercorns, and bay leaves. (Optional: Marinate for 30 mins).\n2. Simmer: Bring mixture to a boil over medium-high heat. Reduce heat, cover, and simmer for 20-30 minutes, or until chicken is tender, turning pieces occasionally.\n3. Optional Browning: Remove chicken pieces. Heat oil in a separate pan and brown chicken pieces (or broil). Return to pot.\n4. Reduce Sauce: Uncover pot, simmer sauce for another 10-15 minutes to thicken slightly. (Add water if sauce reduces too much before chicken is cooked).\n5. Serve: Remove bay leaves. Serve chicken and sauce over steamed rice.",
     tags: ["Filipino", "Chicken", "Adobo", "Braised", "Comfort Food", "Savoury", "Tangy", "Asian Inspired", "Weeknight Dinner", "Family Favourite"]
   },
    {
     id: 24,
     name: "Kimchi Fried Rice (Kimchi Bokkeumbap)",
     description: "Spicy and savoury Korean fried rice made with kimchi, rice, often topped with a fried egg.",
     ingredients: [
        { quantity: "1 tbsp", name: "vegetable oil", prep: "(or sesame oil)"},
        { quantity: "1 cup", name: "kimchi", prep: "chopped, plus 2 tbsp kimchi juice"},
        { quantity: "optional protein:", name: "diced spam, bacon, ham, or tofu"},
        { quantity: "1/2", name: "onion", prep: "chopped (optional)"},
        { quantity: "2 cups", name: "cooked rice", prep: "cold, day-old"},
        { quantity: "1 tbsp", name: "gochujang (Korean chilli paste)", prep: "optional, for extra spice"},
        { quantity: "1 tsp", name: "soy sauce", prep: "optional, to taste"},
        { quantity: "1 tsp", name: "sesame oil", prep: "to finish"},
        { quantity: "1-2", name: "eggs", prep: "fried"},
        { name: "roasted seaweed (gim)", prep: "shredded, for garnish"},
        { name: "spring onions", prep: "sliced, for garnish"},
        { name: "toasted sesame seeds", prep: "for garnish"}
     ],
     ingredientKeywords: ["kimchi fried rice", "kimchi bokkeumbap", "korean", "kimchi", "rice", "fried rice", "spicy", "gochujang", "egg", "spam", "bacon", "tofu", "leftovers", "quick", "asian", "comfort food"],
     instructions: "1. Sauté Kimchi: Heat oil in a pan. Add chopped kimchi (and optional protein/onion). Stir-fry for 5-7 minutes until kimchi is softened and slightly caramelized.\n2. Add Rice: Add cold rice and kimchi juice to the pan. Break up rice clumps and stir-fry until well mixed and heated through (3-5 mins).\n3. Season: Stir in gochujang and soy sauce (if using). Cook for another minute.\n4. Finish: Remove from heat. Stir in sesame oil.\n5. Serve: Transfer fried rice to bowls. Top with a fried egg. Garnish with shredded seaweed, sliced spring onions, and sesame seeds.",
     tags: ["Korean", "Kimchi", "Rice", "Fried Rice", "Spicy", "Comfort Food", "Quick Meal", "Leftovers", "Weeknight Dinner", "Asian Inspired", "Vegetarian Option"]
   },
    {
     id: 25,
     name: "Dan Dan Noodles (Dan Dan Mian)",
     description: "A classic Sichuan noodle dish with a spicy, nutty sauce, preserved vegetables, and often minced pork.",
     ingredients: [
        { quantity: "200g", name: "dried chinese egg noodles", prep: "(thin)"},
        // Pork Topping (optional):
        { quantity: "1 tbsp", name: "oil"}, { quantity: "100g", name: "pork mince"}, { quantity: "1 tsp", name: "shaoxing wine"}, { quantity: "1/2 tsp", name: "dark soy sauce"}, { quantity: "1 tbsp", name: "preserved mustard greens (ya cai)", prep: "finely chopped"},
        // Sauce Base (per bowl):
        { quantity: "1 tbsp", name: "chilli oil with sediment"},
        { quantity: "1 tbsp", name: "soy sauce"},
        { quantity: "1 tsp", name: "chinese sesame paste", prep: "(or smooth peanut butter)"},
        { quantity: "1/2 tsp", name: "Sichuan peppercorn powder"},
        { quantity: "1/4 tsp", name: "sugar"},
        { quantity: "1 clove", name: "garlic", prep: "finely minced"},
        { quantity: "2-3 tbsp", name: "hot noodle cooking water", prep: "(or chicken stock)"},
        // Garnish:
        { name: "spring onions", prep: "finely chopped"},
        { name: "crushed peanuts", prep: "roasted"}
     ],
     ingredientKeywords: ["dan dan noodles", "dan dan mian", "sichuan", "chinese", "noodles", "spicy", "pork", "pork mince", "sesame paste", "peanut butter", "chilli oil", "sichuan peppercorns", "ya cai", "preserved mustard greens", "asian", "street food"],
     instructions: "1. Cook Pork Topping (if using): Heat oil. Stir-fry pork until cooked. Add wine, soy sauce, preserved greens (ya cai). Cook 1 min. Set aside.\n2. Cook Noodles: Cook noodles according to package directions until al dente. Reserve some hot cooking water.\n3. Prepare Sauce Base: While noodles cook, combine chilli oil, soy sauce, sesame paste/peanut butter, Sichuan peppercorn powder, sugar, and minced garlic in each serving bowl.\n4. Loosen Sauce: Add 2-3 tbsp of hot noodle water (or stock) to each bowl. Stir well to combine.\n5. Assemble: Drain noodles and divide them among the bowls on top of the sauce.\n6. Garnish: Top with cooked pork mixture (if using), chopped spring onions, and crushed peanuts.\n7. Mix & Eat: Instruct diner to mix everything well before eating.",
     tags: ["Chinese", "Sichuan", "Noodles", "Spicy", "Pork", "Street Food", "Comfort Food", "Asian Inspired", "Nutty"]
   }
   // ... Continue adding meals 26-30 in the same format ...

];

// Make the data available globally or append to existing global array
// If this is the first file, initialize the global array perhaps in index.html:
// <script> window.mealDatabase = []; </script>
// Then concatenate this part:
window.mealDatabase = (window.mealDatabase || []).concat(mealsAsianInspired);