// meals_deep_fried.js

const mealsDeepFried = [
  {
    id: 107,
    name: "Fish and Chips",
    description: "Classic crispy battered fish served with thick-cut chips.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets" }, { quantity: "1.5 cups", name: "plain flour", prep: "(+ extra)" }, { quantity: "1.5 tsp", name: "baking powder" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1.5 cups", name: "ice-cold beer or soda water" }, { quantity: "1.2kg", name: "potatoes", prep: "cut thick chips" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "lemon wedges" }, { name: "tartare sauce" }, { name: "malt vinegar", prep:"opt." }, { name: "salt", prep:"extra"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "haddock", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "pub classic", "british", "aussie", "seafood"],
    instructions: "1. Prep Chips: Cut potatoes, rinse, dry well.\n2. First Fry Chips: Oil 160°C. Fry chips 5-7 mins (soft, pale). Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Whisk in beer/soda water.\n4. Prep Fish: Pat dry. Dust in flour.\n5. Fry Fish: Oil 190°C. Dip fish in batter. Fry batches 4-7 mins (golden, cooked). Drain.\n6. Second Fry Chips: Re-fry chips (190°C) 2-4 mins (golden, crisp). Drain.\n7. Serve: Season chips. Serve hot with fish, lemon, tartare, vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Aussie Favourite", "Dinner"]
  },
  {
    id: 108,
    name: "Spring Rolls (Vegetable)",
    description: "Crispy deep-fried spring rolls filled with shredded vegetables.",
    ingredients: [
        { quantity: "1 tbsp", name: "oil" }, { quantity: "2 cloves", name: "garlic", prep:"minced" }, { quantity: "1 tsp", name: "ginger", prep:"grated" }, { quantity: "1-2", name: "carrots", prep:"julienned" }, { quantity: "1/2 head", name: "cabbage", prep:"shredded" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "3-4", name: "spring onions", prep:"sliced" }, { quantity: "50g", name: "glass noodles", prep:"soaked & chopped (opt.)" }, { quantity: "1.5 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "pinch", name: "white pepper" }, { quantity: "20-25", name: "spring roll wrappers" }, { quantity: "1 tbsp", name: "cornflour slurry", prep:"(sealant)" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "sweet chilli sauce", prep: "for dipping" }
    ],
    ingredientKeywords: ["spring rolls", "vegetable", "vegetarian", "cabbage", "carrot", "bean sprouts", "deep fried", "crispy", "appetizer", "snack", "chinese", "vietnamese", "asian", "party food"],
    instructions: "1. Make Filling: Stir-fry garlic, ginger. Add carrot, cabbage (2-3 mins). Add sprouts, spring onions, noodles. Stir-fry 1 min. Season (soy, sesame, pepper). Cool.\n2. Wrap Rolls: Place filling on wrapper. Fold bottom, sides tightly. Brush top corner with slurry. Roll up.\n3. Fry Rolls: Heat oil (180°C). Fry batches 3-5 mins until golden & crispy. Drain.\n4. Serve: Serve hot with sweet chilli sauce.",
    tags: ["Appetizer", "Snack", "Vegetarian", "Deep Fried", "Crispy", "Chinese", "Vietnamese", "Asian Inspired", "Party Food"]
  },
  {
    id: 109,
    name: "Japanese Chicken Katsu",
    description: "Crispy deep-fried chicken cutlet coated in panko breadcrumbs.",
    ingredients: [
        { quantity: "4", name: "chicken breast fillets" },
        { name: "salt and pepper" },
        { quantity: "1/2 cup", name: "plain flour" },
        { quantity: "2", name: "eggs", prep: "beaten" },
        { quantity: "1.5 - 2 cups", name: "panko breadcrumbs" },
        { name: "vegetable oil", prep: "for deep or shallow frying" },
        { name: "Optional serving:", prep: "tonkatsu sauce, shredded cabbage, rice" }
    ],
    ingredientKeywords: ["katsu", "chicken katsu", "chicken", "panko", "breadcrumbs", "japanese", "deep fried", "shallow fried", "crispy", "cutlet"],
    instructions: "1. Prepare Chicken: Flatten chicken breasts slightly (1.5cm). Season with salt and pepper.\n2. Crumb Chicken: Set up 3 plates: flour, beaten egg, panko. Dredge chicken in flour, dip in egg, coat thoroughly in panko, pressing gently.\n3. Fry Chicken: Heat 1-2cm oil in pan (medium heat, ~170°C if deep frying). Carefully fry chicken for 4-6 minutes per side, until golden brown, crispy, and cooked through. Adjust heat if browning too fast.\n4. Drain: Drain cooked katsu on paper towels or wire rack.\n5. Serve: Slice katsu into strips. Serve immediately, often with Tonkatsu sauce, shredded cabbage, and rice.",
    tags: ["Japanese", "Chicken", "Katsu", "Deep Fried", "Shallow Fried", "Crispy", "Panko", "Dinner", "Lunch", "Asian Inspired"]
  },
  {
    id: 110,
    name: "Southern Fried Chicken (Deep Fried)",
    description: "Crispy, flavourful chicken pieces coated in seasoned flour and deep-fried.",
    ingredients: [
        { quantity: "8 pieces", name: "chicken portions", prep: "(bone-in, skin-on - e.g., thighs, drumsticks, wings)" },
        // Optional Brine:
        { quantity: "4 cups", name: "water"}, { quantity: "1/4 cup", name: "salt"}, { quantity: "2 tbsp", name: "sugar"},
        // Seasoned Flour Coating:
        { quantity: "2 cups", name: "plain flour" },
        { quantity: "2 tbsp", name: "salt" }, { quantity: "1 tbsp", name: "black pepper" }, { quantity: "2 tsp", name: "paprika" }, { quantity: "1 tsp", name: "garlic powder" }, { quantity: "1 tsp", name: "onion powder" }, { quantity: "1/2 tsp", name: "cayenne pepper", prep:"optional" }, { quantity: "1 tsp", name: "dried thyme or mixed herbs", prep:"optional"},
        // Optional Buttermilk Dip:
        { quantity: "1 cup", name: "buttermilk"}, { quantity: "1", name: "egg", prep:"beaten"},
        { name: "vegetable oil or shortening", prep: "for deep frying" }
    ],
    ingredientKeywords: ["fried chicken", "southern fried chicken", "chicken", "deep fried", "crispy", "american", "comfort food", "flour coating", "seasoned", "buttermilk"],
    instructions: "1. Brine Chicken (Optional): Dissolve salt/sugar in water. Submerge chicken pieces. Refrigerate 1-4 hours. Rinse chicken, pat very dry.\n2. Prepare Coating: Whisk flour and all seasonings together in a large shallow dish.\n3. Prepare Dip (Optional): Whisk buttermilk and egg together in another dish.\n4. Coat Chicken: If using buttermilk dip, dip dry chicken pieces in it, let excess drip off. Then dredge thoroughly in seasoned flour, pressing to adhere. Let coated chicken rest on rack 15 mins.\n5. Heat Oil: Heat oil (about 5-7cm deep) in large heavy pot or deep fryer to 160°C-170°C.\n6. Fry Chicken: Carefully place chicken pieces in hot oil (skin side down if identifiable), do not overcrowd. Fry for 15-25 minutes (depending on piece size), turning occasionally, until deep golden brown, crispy, and cooked through (internal temp 75°C+). Adjust heat to maintain oil temp.\n7. Drain: Remove chicken, drain well on wire rack over paper towels.\n8. Serve: Serve hot.",
    tags: ["American", "Chicken", "Deep Fried", "Crispy", "Comfort Food", "Dinner", "Southern", "Family Favourite"]
  },
  {
    id: 111,
    name: "Tempura Vegetables",
    description: "Assorted vegetables coated in a light, crispy tempura batter and quickly deep-fried.",
    ingredients: [
        // Vegetables (choose a selection):
        { name: "Broccoli florets" }, { name: "Sweet potato slices", prep:"thin" }, { name: "Capsicum strips" }, { name: "Onion rings" }, { name: "Zucchini slices" }, { name: "Green beans" }, { name: "Mushrooms" }, { name: "Eggplant slices" },
        // Tempura Batter:
        { quantity: "1 cup", name: "plain flour", prep: "(or special tempura flour)" },
        { quantity: "1", name: "large egg yolk" },
        { quantity: "1 cup", name: "ice-cold sparkling water or plain water" },
        { name: "vegetable oil", prep: "for deep frying" },
        // Dipping Sauce (Tentsuyu - simple version):
        { quantity: "1/2 cup", name: "dashi stock", prep:"(instant ok)" }, { quantity: "2 tbsp", name: "mirin" }, { quantity: "2 tbsp", name: "soy sauce" }, { quantity: "optional:", name:"grated daikon radish, grated ginger"}
    ],
    ingredientKeywords: ["tempura", "vegetable tempura", "vegetables", "deep fried", "batter", "light", "crispy", "japanese", "asian", "vegetarian", "appetizer", "side dish", "broccoli", "sweet potato", "capsicum", "onion", "zucchini"],
    instructions: "1. Prepare Vegetables: Wash, chop/slice vegetables into bite-sized pieces. Pat very dry.\n2. Make Dipping Sauce: Combine dashi, mirin, soy sauce. Gently warm or serve room temp. Add optional grated daikon/ginger just before serving.\n3. Make Batter (Just Before Frying): Lightly whisk egg yolk in a bowl. Add ice-cold water, whisk briefly. Add flour *all at once*. Mix *very lightly* with chopsticks or fork – batter should be lumpy, do not overmix.\n4. Heat Oil: Heat oil (2-3cm deep) in wok or pan to 170°C-180°C.\n5. Fry Tempura: Dip dry vegetable pieces lightly into batter. Carefully drop into hot oil in small batches (don't overcrowd). Fry for 2-4 minutes, turning occasionally, until batter is light golden and crispy. Adjust heat as needed.\n6. Drain: Remove with slotted spoon/spider, drain well on wire rack over paper towels.\n7. Serve: Serve immediately with dipping sauce.",
    tags: ["Japanese", "Tempura", "Vegetables", "Vegetarian", "Deep Fried", "Crispy", "Light", "Appetizer", "Side Dish", "Asian Inspired"]
  },
  {
    id: 112,
    name: "Tempura Prawns/Shrimp",
    description: "Large prawns coated in light tempura batter and deep-fried until crisp.",
    ingredients: [
        { quantity: "16-20", name: "large raw prawns (shrimp)", prep: "peeled (tail on), deveined" },
        // Tempura Batter (as above):
        { quantity: "1 cup", name: "plain flour" }, { quantity: "1", name: "large egg yolk" }, { quantity: "1 cup", name: "ice-cold sparkling water" },
        { name: "vegetable oil", prep: "for deep frying" },
        // Dipping Sauce (Tentsuyu - as above):
        { quantity: "1/2 cup", name: "dashi stock" }, { quantity: "2 tbsp", name: "mirin" }, { quantity: "2 tbsp", name: "soy sauce" }, { name: "grated daikon/ginger", prep:"opt."}
    ],
    ingredientKeywords: ["tempura", "prawn tempura", "shrimp tempura", "prawns", "shrimp", "seafood", "deep fried", "batter", "light", "crispy", "japanese", "asian", "appetizer"],
    instructions: "1. Prepare Prawns: Make small slits on underside of prawns to prevent curling. Pat very dry.\n2. Make Dipping Sauce: Combine sauce ingredients.\n3. Make Batter (Just Before Frying): Whisk yolk, cold water briefly. Add flour, mix very lightly (lumpy is good).\n4. Heat Oil: Heat oil to 170°C-180°C.\n5. Fry Prawns: Holding tail, dip dry prawn into batter. Carefully add to oil (batches). Fry 2-3 minutes until light golden & cooked. Drain well.\n6. Serve: Serve immediately with dipping sauce.",
    tags: ["Japanese", "Tempura", "Prawns", "Shrimp", "Seafood", "Deep Fried", "Crispy", "Light", "Appetizer", "Asian Inspired"]
  },
   {
    id: 113,
    name: "Onion Rings (Beer Battered)",
    description: "Thick onion rings coated in a crispy beer batter and deep-fried.",
    ingredients: [
        { quantity: "2", name: "large onions", prep: "cut into thick rings (1-1.5cm)" },
        // Beer Batter:
        { quantity: "1 cup", name: "plain flour" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1/2 tsp", name: "paprika", prep:"optional" }, { quantity: "1", name: "egg", prep: "lightly beaten" }, { quantity: "1 cup", name: "beer", prep: "(lager or pale ale), cold" },
        { quantity: "1/2 cup", name: "plain flour", prep: "extra, for dusting" },
        { name: "vegetable oil", prep: "for deep frying" },
        { name: "salt", prep: "extra for seasoning" },
        { name: "Optional dipping sauces:", prep: "aioli, ketchup, BBQ sauce" }
    ],
    ingredientKeywords: ["onion rings", "onion", "deep fried", "batter", "beer batter", "crispy", "appetizer", "snack", "side dish", "pub food", "american", "vegetarian"],
    instructions: "1. Prepare Onions: Separate onion slices into rings. Pat dry.\n2. Make Batter: Whisk 1 cup flour, salt, paprika. Whisk in egg, then gradually whisk in cold beer until smooth.\n3. Prepare for Frying: Heat oil (3-4cm deep) to 180°C-190°C. Place extra 1/2 cup flour in shallow dish.\n4. Coat & Fry: Dust onion rings lightly in flour. Dip floured rings into beer batter, let excess drip off. Carefully place battered rings into hot oil in batches (don't overcrowd). Fry for 2-4 minutes per side, until deep golden brown and crispy.\n5. Drain & Season: Remove with slotted spoon, drain well on wire rack or paper towels. Season immediately with salt.\n6. Serve: Serve hot with dipping sauces.",
    tags: ["Appetizer", "Snack", "Side Dish", "Pub Food", "Deep Fried", "Crispy", "Onion", "Beer Batter", "Vegetarian", "American"]
  },
  {
    id: 114,
    name: "Arancini (Deep Fried Risotto Balls)",
    description: "Balls of leftover risotto, often stuffed with cheese, coated in breadcrumbs and deep-fried until golden.",
    ingredients: [
        { quantity: "Approx 3 cups", name: "cold leftover risotto", prep: "(firm consistency needed)" },
        { quantity: "optional filling:", name: "small cubes mozzarella or provolone cheese, bolognese ragu" },
        { quantity: "1/2 cup", name: "plain flour" },
        { quantity: "2", name: "eggs", prep: "beaten" },
        { quantity: "1.5 cups", name: "breadcrumbs", prep: "(panko or regular)" },
        { name: "vegetable oil", prep: "for deep frying" },
        { name: "Optional serving:", prep: "marinara sauce, aioli" }
    ],
    ingredientKeywords: ["arancini", "risotto balls", "risotto", "rice", "deep fried", "crispy", "stuffed", "cheese", "mozzarella", "italian", "sicilian", "appetizer", "snack", "leftovers"],
    instructions: "1. Prepare Risotto: Ensure risotto is cold and firm.\n2. Form Balls: Take a scoop of cold risotto in wet hands. Flatten slightly. Place optional filling (e.g., cheese cube) in center. Enclose filling with risotto, roll into a ball (approx 4-5cm).\n3. Coat Arancini: Set up 3 dishes: flour, beaten eggs, breadcrumbs. Roll each risotto ball first in flour, then dip completely in egg, finally roll thoroughly in breadcrumbs to coat.\n4. Heat Oil: Heat oil (at least 5cm deep) to 180°C.\n5. Fry Arancini: Carefully fry arancini in batches (don't overcrowd) for 4-6 minutes, turning gently, until deep golden brown and heated through (cheese inside should be melted).\n6. Drain: Remove with slotted spoon, drain well on paper towels.\n7. Serve: Serve hot, often with a dipping sauce like marinara or aioli.",
    tags: ["Italian", "Sicilian", "Appetizer", "Snack", "Deep Fried", "Crispy", "Risotto", "Rice", "Cheese", "Leftovers", "Comfort Food"]
  },
  {
    id: 115,
    name: "Churros with Chocolate Sauce",
    description: "Deep-fried choux pastry dough, typically ridged, dusted with cinnamon sugar and served with thick chocolate dipping sauce.",
    ingredients: [
        // Churros Dough:
        { quantity: "1 cup", name: "water" }, { quantity: "2 tbsp", name: "butter" }, { quantity: "1 tbsp", name: "sugar" }, { quantity: "pinch", name: "salt" }, { quantity: "1 cup", name: "plain flour" }, { quantity: "2", name: "large eggs" },
        { name: "vegetable oil", prep: "for deep frying" },
        // Cinnamon Sugar Coating:
        { quantity: "1/2 cup", name: "caster sugar" }, { quantity: "1 tsp", name: "ground cinnamon" },
        // Chocolate Sauce:
        { quantity: "150g", name: "dark chocolate", prep: "chopped (50-70%)" }, { quantity: "1/2 cup", name: "thickened cream (heavy cream)" }, { quantity: "1 tbsp", name: "butter", prep:"optional"}
    ],
    ingredientKeywords: ["churros", "doughnuts", "donuts", "deep fried", "pastry", "choux pastry", "cinnamon sugar", "chocolate sauce", "dessert", "sweet", "spanish", "mexican", "treat"],
    instructions: "1. Make Dough Base: Combine water, butter, sugar, salt in saucepan. Bring to boil. Remove from heat. Add flour all at once, beat vigorously with wooden spoon until smooth dough forms ball. Cool slightly (5 mins).\n2. Beat in Eggs: Beat in eggs one at a time, beating well after each until dough is smooth and glossy (can use electric mixer).\n3. Prepare for Frying: Transfer dough to piping bag fitted with large star nozzle. Heat oil (3-4cm deep) to 180°C.\n4. Fry Churros: Carefully pipe lengths of dough (approx 10-15cm) directly into hot oil, snipping end with scissors. Fry in batches (don't overcrowd) for 4-6 minutes, turning, until deep golden brown and cooked through.\n5. Drain & Coat: Remove churros with slotted spoon, drain well on paper towels. While still warm, toss in cinnamon sugar mixture (combine cinnamon and sugar in shallow dish).\n6. Make Chocolate Sauce: Gently heat cream until just simmering. Remove from heat, add chopped chocolate (and optional butter). Let sit 1 min, then whisk until smooth and glossy.\n7. Serve: Serve warm churros immediately with warm chocolate dipping sauce.",
    tags: ["Dessert", "Sweet", "Deep Fried", "Pastry", "Doughnuts", "Cinnamon Sugar", "Chocolate Sauce", "Spanish", "Mexican", "Treat", "Indulgent"]
  },
  {
    id: 116,
    name: "Salt and Pepper Squid",
    description: "Crispy deep-fried squid seasoned with salt, pepper, chilli, and garlic.",
    ingredients: [
        { quantity: "500g", name: "squid", prep: "cleaned, scored & cut" }, // Coating:
        { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "rice flour" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1 tsp", name: "white pepper"}, { quantity: "1/2 tsp", name: "five spice", prep:"opt."}, { quantity: "1", name: "egg white", prep:"opt."}, { name: "vegetable oil", prep: "for deep frying" }, // Garnish:
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1-2", name: "red chillies", prep:"sliced" }, { quantity: "3 cloves", name: "garlic", prep:"chopped" }, { quantity: "2", name: "spring onions", prep:"sliced" }, { quantity: "1/2 tsp", name: "Sichuan peppercorns", prep:"ground, opt."}
    ],
    ingredientKeywords: ["salt and pepper squid", "salt and chilli squid", "squid", "calamari", "chinese", "cantonese", "deep fried", "crispy", "spicy", "seafood", "appetizer", "takeaway"],
    instructions: "1. Prepare Squid: Pat dry. Toss with optional egg white.\n2. Make Coating: Combine flours, salt, pepper, five spice.\n3. Coat Squid: Toss squid in coating. Shake off excess.\n4. Deep Fry: Heat oil (180°C). Fry squid batches 2-4 mins until crispy. Drain.\n5. Stir-fry Garnish: Heat 1 tbsp oil. Stir-fry chilli, garlic, spring onion whites, Sichuan pepper (opt.) 30-60 secs.\n6. Combine: Return squid to wok. Add green spring onions. Toss quickly.\n7. Serve: Serve immediately.",
    tags: ["Chinese", "Cantonese", "Seafood", "Squid", "Deep Fried", "Crispy", "Spicy", "Appetizer", "Takeaway Classic", "Asian Inspired", "Party Food"]
  },
  {
    id: 117,
    name: "General Tso's Chicken",
    description: "Crispy deep-fried chicken pieces coated in a sweet, slightly spicy, and tangy sauce.",
    ingredients: [
        { quantity: "600g", name: "chicken thigh or breast", prep: "bite-size pieces" }, { quantity: "1", name: "egg white" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "shaoxing wine" }, { quantity: "1/2 cup +", name: "cornflour" }, { name: "vegetable oil", prep: "for deep frying" }, // Sauce:
        { quantity: "1/2 cup", name: "chicken stock" }, { quantity: "1/4 cup", name: "soy sauce" }, { quantity: "1/4 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "1 tbsp", name: "hoisin", prep:"opt."}, { quantity: "1 tbsp", name: "sesame oil" }, { quantity: "1 tbsp", name: "cornflour slurry" }, // Stir-fry:
        { quantity: "1 tbsp", name: "oil" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 tsp", name: "ginger", prep: "grated" }, { quantity: "4-6", name: "dried red chillies" }, { name: "spring onions", prep: "garnish" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["general tso", "chicken", "chinese", "american chinese", "deep fried", "sweet", "spicy", "tangy", "takeaway", "asian", "broccoli", "chilli"],
    instructions: "1. Marinate/Coat Chicken: Marinate chicken (egg white, soy, wine) 10 mins. Toss with cornflour.\n2. Fry Chicken: Heat oil (180°C). Fry batches until golden & crispy (4-6 mins). Drain.\n3. Make Sauce: Whisk sauce ingredients (except slurry).\n4. Stir-fry Aromatics: Heat 1 tbsp oil. Stir-fry garlic, ginger, chillies (30 secs).\n5. Thicken Sauce: Pour sauce into wok. Simmer. Stir in slurry until thick.\n6. Combine: Add crispy chicken. Toss quickly.\n7. Serve: Serve over rice, garnish spring onions.",
    tags: ["Chinese", "American Chinese", "Chicken", "Deep Fried", "Sweet", "Spicy", "Takeaway Classic", "Asian Inspired", "Dinner", "Comfort Food"]
  },
   {
    id: 118,
    name: "Scotch Eggs",
    description: "Hard-boiled eggs wrapped in sausage meat, coated in breadcrumbs, and deep-fried.",
    ingredients: [
        { quantity: "5", name: "large eggs", prep: "(4 for boiling, 1 for coating)" },
        { quantity: "400g", name: "good quality sausage meat", prep: "(or sausages, skins removed)" },
        { quantity: "1 tbsp", name: "fresh parsley or sage", prep: "chopped (optional)" },
        { name: "salt and pepper" },
        { quantity: "1/2 cup", name: "plain flour" },
        { quantity: "1 cup", name: "breadcrumbs", prep: "(panko or regular)" },
        { name: "vegetable oil", prep: "for deep frying" }
    ],
    ingredientKeywords: ["scotch egg", "egg", "sausage meat", "sausage", "deep fried", "breadcrumbs", "british", "picnic food", "pub food", "snack", "appetizer"],
    instructions: "1. Boil Eggs: Boil 4 eggs until hard-boiled (approx 8-10 mins). Immediately plunge into ice water. Peel carefully when cold.\n2. Prepare Sausage Meat: Season sausage meat with herbs (if using), salt, pepper.\n3. Wrap Eggs: Divide sausage meat into 4 portions. Flatten one portion in your palm. Place a peeled boiled egg in the center. Carefully mould the sausage meat around the egg, ensuring it's fully encased and sealed smoothly.\n4. Coat Eggs: Set up 3 dishes: flour, 1 beaten egg, breadcrumbs. Roll each sausage-wrapped egg first in flour, then dip in beaten egg, then roll thoroughly in breadcrumbs.\n5. Heat Oil: Heat oil (at least 5cm deep) to 170°C.\n6. Fry Scotch Eggs: Carefully lower coated eggs into hot oil. Fry for 7-10 minutes, turning occasionally, until sausage meat is cooked through and breadcrumbs are deep golden brown.\n7. Drain: Remove with slotted spoon, drain well on paper towels.\n8. Serve: Serve warm or cold, often halved.",
    tags: ["British", "Pub Food", "Picnic Food", "Snack", "Appetizer", "Egg", "Sausage", "Deep Fried", "Comfort Food"]
  }
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsDeepFried);