// meals_takeaway_classic.js

const mealsTakeawayClassic = [
  {
    id: 228,
    name: "Fish and Chips",
    description: "The quintessential takeaway: crispy battered fish served with hot chips.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets" }, { quantity: "1.5 cups", name: "plain flour", prep:"(+ extra)" }, { quantity: "1.5 tsp", name: "baking powder" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1.5 cups", name: "ice-cold beer/soda water" }, { quantity: "1.2kg", name: "potatoes", prep:"cut thick chips" }, { name: "oil", prep:"for deep frying" }, { name: "lemon wedges" }, { name: "tartare sauce" }, { name: "malt vinegar", prep:"opt." }, { name: "salt", prep:"extra"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "haddock", "snapper", "hoki", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "takeaway classic", "pub classic", "british", "aussie", "seafood", "dinner"],
    instructions: "1. Prep Chips: Cut potatoes, rinse, dry well.\n2. First Fry Chips: Oil 160°C. Fry chips 5-7 mins (soft, pale). Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Whisk in beer/soda water.\n4. Prep Fish: Pat dry. Dust in flour.\n5. Fry Fish: Oil 190°C. Dip fish in batter. Fry batches 4-7 mins (golden, cooked). Drain.\n6. Second Fry Chips: Re-fry chips (190°C) 2-4 mins (golden, crisp). Drain.\n7. Serve: Season chips. Serve hot with fish, lemon, tartare, vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Aussie Favourite", "Dinner", "Family Favourite"]
  },
  {
    id: 229,
    name: "Pepperoni Pizza",
    description: "Classic pizza topped with tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
    ingredients: [
        // Dough (as per #125 or store-bought)
        { quantity: "1 portion", name: "pizza dough", prep:"(for 1 large or 2 smaller)"},
        // Toppings:
        { quantity: "1 cup", name: "pizza sauce/passata" },
        { quantity: "2-3 cups", name: "mozzarella cheese", prep:"grated" },
        { quantity: "Approx 100-150g", name: "pepperoni slices" },
        { quantity: "optional:", name:"dried oregano, chilli flakes"}
    ],
    ingredientKeywords: ["pizza", "pepperoni pizza", "pepperoni", "mozzarella", "cheese", "tomato sauce", "italian", "american", "takeaway", "takeaway classic", "dinner", "family favourite", "kid friendly", "spicy option"],
    instructions: "1. Prepare Dough & Oven: Preheat oven to highest temp (240°C+) with stone/tray inside. Roll/stretch dough.\n2. Top Pizza: Place base on baking paper. Spread sauce, sprinkle cheese, arrange pepperoni slices. Sprinkle oregano/chilli flakes (opt.).\n3. Bake: Transfer pizza to hot stone/tray. Bake 8-15 minutes until crust golden and cheese bubbly.\n4. Serve: Slice and serve immediately.",
    tags: ["Pizza", "Italian", "American", "Takeaway Classic", "Dinner", "Family Favourite", "Kid Friendly", "Cheese", "Pepperoni", "Spicy Option"]
  },
  {
    id: 230,
    name: "Hawaiian Pizza",
    description: "Popular (and sometimes debated) pizza topped with tomato sauce, cheese, ham, and pineapple.",
    ingredients: [
        { quantity: "1 portion", name: "pizza dough" },
        { quantity: "1 cup", name: "pizza sauce/passata" },
        { quantity: "2-3 cups", name: "mozzarella cheese", prep:"grated" },
        { quantity: "Approx 150g", name: "ham", prep:"chopped or sliced" },
        { quantity: "1 small can (approx 225g)", name: "pineapple pieces or rings", prep:"drained well" }
    ],
    ingredientKeywords: ["pizza", "hawaiian pizza", "ham and pineapple", "ham", "pineapple", "mozzarella", "cheese", "tomato sauce", "aussie", "canadian", "takeaway", "takeaway classic", "dinner", "family favourite", "kid friendly", "sweet", "savoury"],
    instructions: "1. Prepare Dough & Oven: Preheat oven high (240°C+) with stone/tray. Roll/stretch dough.\n2. Top Pizza: Base on paper. Spread sauce, sprinkle cheese. Scatter ham and pineapple pieces evenly.\n3. Bake: Transfer to hot stone/tray. Bake 8-15 minutes until golden and bubbly.\n4. Serve: Slice and serve immediately.",
    tags: ["Pizza", "Takeaway Classic", "Dinner", "Family Favourite", "Kid Friendly", "Cheese", "Ham", "Pineapple", "Aussie Favourite", "Sweet", "Savoury"]
  },
  {
    id: 231,
    name: "Sweet and Sour Pork",
    description: "Crispy battered pork pieces coated in a classic tangy sweet and sour sauce.",
    ingredients: [
      { quantity: "500g", name: "pork loin/shoulder", prep: "cubed" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tsp", name: "shaoxing wine" }, // Batter:
      { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "plain flour" }, { quantity: "1/2 tsp", name: "baking powder" }, { quantity: "1", name: "egg" }, { quantity: "1/4 cup", name: "water" }, { name: "oil", prep: "for deep frying" }, // Stir-fry Veggies (often included):
      { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "onion", prep: "wedges" }, { quantity: "1", name: "capsicum", prep: "chunks" }, { quantity: "1 cup", name: "pineapple chunks" }, // Sauce:
      { quantity: "1/2 cup", name: "pineapple juice" }, { quantity: "1/3 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "3 tbsp", name: "ketchup" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "1 tbsp", name: "cornflour slurry" }, { name: "rice", prep: "to serve"}
    ],
    ingredientKeywords: ["sweet and sour", "pork", "pineapple", "capsicum", "onion", "ketchup", "vinegar", "chinese", "asian", "takeaway", "takeaway classic", "deep fried", "stir-fry", "cantonese style", "family favourite"],
    instructions: "1. Marinate pork (15 mins).\n2. Make batter.\n3. Fry pork batches (180°C) until golden. Drain.\n4. Make sauce: Whisk sauce ingredients (except slurry).\n5. Stir-fry veggies: Heat 1 tbsp oil, stir-fry onion, capsicum (2-3 mins). Add pineapple (1 min).\n6. Thicken sauce: Add sauce mix, simmer. Stir in slurry until thick.\n7. Combine: Add fried pork, toss gently.\n8. Serve with rice.",
    tags: ["Chinese", "Pork", "Sweet and Sour", "Takeaway Classic", "Deep Fried", "Stir-fry", "Asian Inspired", "Family Favourite", "Cantonese Style"]
  },
  {
    id: 232,
    name: "Chinese Lemon Chicken",
    description: "Crispy battered chicken pieces coated in a sweet and tangy lemon sauce.",
    ingredients: [
        { quantity: "4", name: "chicken breast / 600g thigh", prep:"bite-sized" }, { quantity: "1", name: "egg white" }, { quantity: "1 tbsp", name: "soy sauce" }, { quantity: "3/4 cup", name: "cornflour" }, { name: "oil", prep: "for deep frying" }, // Lemon Sauce:
        { quantity: "1 cup", name: "chicken stock" }, { quantity: "1/3 cup", name: "lemon juice" }, { quantity: "1/4 cup", name: "sugar" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1.5 tbsp", name: "cornflour slurry" }, { name: "lemon slices", prep: "garnish" }, { name: "rice", prep: "to serve" }
    ],
    ingredientKeywords: ["lemon chicken", "chicken", "lemon", "chinese", "asian", "takeaway", "takeaway classic", "deep fried", "sweet", "tangy", "cantonese style", "family favourite"],
    instructions: "1. Marinate/Coat Chicken: Marinate chicken (egg white, soy) 10 mins. Toss with cornflour.\n2. Fry Chicken: Heat oil (180°C). Fry batches until golden & crispy. Drain.\n3. Make Lemon Sauce: Combine stock, lemon juice, sugar, soy sauce. Simmer.\n4. Thicken Sauce: Stir slurry, add, stir until thick.\n5. Combine: Pour hot sauce over chicken, toss.\n6. Serve immediately with rice, garnished lemon.",
    tags: ["Chinese", "Chicken", "Lemon", "Takeaway Classic", "Deep Fried", "Sweet", "Tangy", "Asian Inspired", "Family Favourite", "Cantonese Style"]
  },
  {
    id: 233,
    name: "Beef and Black Bean Sauce",
    description: "Tender beef strips stir-fried with vegetables in a savoury fermented black bean sauce.",
    ingredients: [
      { quantity: "400g", name: "beef steak (rump/sirloin)", prep:"thinly sliced" },
      // Marinade: { quantity: "1 tbsp", name:"soy sauce"}, { quantity:"1 tsp", name:"cornflour"},
      // Sauce Base:
      { quantity: "2 tbsp", name: "fermented black beans", prep:"rinsed, crushed" }, { quantity: "2 cloves", name: "garlic", prep:"minced"}, { quantity: "1 tsp", name: "ginger", prep:"grated"},
      // Stir-fry Sauce:
      { quantity: "1 tbsp", name: "shaoxing wine", prep:"opt."}, { quantity: "1 tbsp", name: "soy sauce"}, { quantity: "1 tsp", name: "sugar"}, { quantity: "1/2 cup", name:"stock/water"}, { quantity: "1 tsp", name: "cornflour slurry"},
      // Stir-fry Veg:
      { quantity: "2 tbsp", name: "oil"}, { quantity: "1", name: "onion", prep:"sliced"}, { quantity: "1", name: "capsicum (green/red)", prep:"sliced"}, { quantity:"opt veg:", name:"mushrooms, broccoli"},
      { name: "rice", prep:"to serve"}
    ],
    ingredientKeywords: ["beef and black bean", "black bean sauce", "beef", "black beans", "fermented black beans", "douchi", "stir-fry", "chinese", "cantonese", "asian", "savoury", "garlic", "ginger", "capsicum", "onion", "takeaway", "takeaway classic", "dinner"],
    instructions: "1. Marinate Beef (opt.) 15 mins.\n2. Prepare Sauce Base: Mash black beans, garlic, ginger.\n3. Cook Beef: Heat 1 tbsp oil (high). Stir-fry beef until browned. Remove.\n4. Stir-fry Veg/Aromatics: Heat 1 tbsp oil. Stir-fry onion (1 min). Add capsicum/other veg (2-3 mins). Add black bean mixture, stir-fry 30 secs.\n5. Combine & Thicken: Return beef. Add wine(opt.), soy, sugar, stock/water. Simmer. Add slurry, stir until thickens.\n6. Serve with rice.",
    tags: ["Chinese", "Cantonese", "Stir-fry", "Beef", "Black Bean Sauce", "Savoury", "Weeknight Dinner", "Asian Inspired", "Takeaway Classic", "Dinner"]
  },
   {
    id: 234,
    name: "Chicken Chow Mein",
    description: "Classic stir-fried egg noodles with chicken strips and vegetables.",
    ingredients: [
        { quantity: "300g", name: "egg noodles" }, { quantity: "4", name: "chicken breast/600g thigh", prep: "thinly sliced" }, // Marinade (opt): { quantity: "1 tbsp", name:"soy"}, { quantity:"1 tsp", name:"cornflour"} // Sauce:
        { quantity: "2 tbsp", name: "oyster sauce" }, { quantity: "1 tbsp", name: "light soy sauce" }, { quantity: "1 tsp", name: "dark soy sauce", prep:"opt." }, { quantity: "1 tsp", name: "sesame oil" }, { quantity: "1/4 cup", name: "stock/water" }, { quantity: "1 tsp", name: "cornflour slurry"}, // Stir-fry:
        { quantity: "2 tbsp", name: "oil" }, { quantity: "1", name: "onion", prep: "sliced" }, { quantity: "1", name: "carrot", prep: "julienned" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1/2", name: "capsicum", prep: "sliced" }, { quantity: "cabbage/bok choy", prep:"sliced"}, { quantity: "2 cloves", name: "garlic", prep:"minced"}
    ],
    ingredientKeywords: ["chow mein", "chicken chow mein", "chinese", "noodles", "egg noodles", "chicken", "stir-fry", "oyster sauce", "soy sauce", "asian", "takeaway", "takeaway classic", "quick meal", "weeknight dinner"],
    instructions: "1. Prep: Cook noodles al dente. Marinate chicken (opt.). Mix sauce (except slurry).\n2. Stir-fry Chicken: Heat 1 tbsp oil, stir-fry chicken. Remove.\n3. Stir-fry Veggies: Heat 1 tbsp oil. Stir-fry onion, carrot, capsicum (2 mins). Add garlic, cabbage/bok choy (1 min).\n4. Combine: Return chicken. Add noodles, sprouts, sauce. Toss well (1-2 mins).\n5. Thicken: Add slurry, toss until sauce thickens.\n6. Serve immediately.",
    tags: ["Chinese", "Noodles", "Chicken", "Stir-fry", "Takeaway Classic", "Asian Inspired", "Weeknight Dinner", "Quick Meal", "Family Favourite"]
  },
  {
    id: 235,
    name: "Butter Chicken (Murgh Makhani - Takeaway Style)",
    description: "Mild, creamy, buttery tomato-based curry with tender chicken pieces. A global favourite.",
    ingredients: [
        // Marinade:
        { quantity: "600g", name: "boneless chicken thigh or breast", prep:"cubed" }, { quantity: "1/2 cup", name: "plain yogurt" }, { quantity: "1 tbsp", name: "lemon juice" }, { quantity: "1 tsp", name: "ginger", prep:"grated" }, { quantity: "1 tsp", name: "garlic", prep:"minced" }, { quantity: "1 tsp", name: "garam masala" }, { quantity: "1/2 tsp", name: "turmeric" }, { quantity: "1/2 tsp", name: "cumin" }, { quantity: "1/2 tsp", name: "salt" },
        // Sauce:
        { quantity: "2 tbsp", name: "butter" }, { quantity: "1 tbsp", name: "oil" }, { quantity: "1", name: "large onion", prep:"finely chopped" }, { quantity: "1 tsp", name: "ginger", prep:"grated" }, { quantity: "1 tsp", name: "garlic", prep:"minced" }, { quantity: "1 tsp", name: "ground coriander" }, { quantity: "1 tsp", name: "ground cumin" }, { quantity: "1/2 tsp", name: "turmeric" }, { quantity: "1 tsp", name: "garam masala" }, { quantity: "1/2 tsp", name: "paprika or mild chilli powder" }, { quantity: "400g can", name: "crushed tomatoes or passata" }, { quantity: "1/2 cup", name: "cashew nuts", prep:"soaked & blended to paste (opt.) or cashew butter"}, { quantity: "1/2 cup", name: "heavy cream (thickened cream)" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1 tbsp", name: "kasuri methi", prep:"(dried fenugreek leaves), crushed (opt.)" }, { name: "salt to taste" },
        { name: "rice or naan bread", prep:"to serve"}, { name: "fresh coriander", prep:"garnish"}
    ],
    ingredientKeywords: ["butter chicken", "murgh makhani", "indian", "curry", "chicken", "creamy", "tomato", "butter", "cashew", "mild", "takeaway", "takeaway classic", "comfort food", "dinner", "family favourite"],
    instructions: "1. Marinate Chicken: Combine chicken & marinade ingredients. Marinate 30+ mins.\n2. Cook Chicken: Pan-fry, grill, or bake chicken until cooked through. Set aside.\n3. Make Sauce Base: Heat butter & oil. Sauté onion until golden. Add ginger, garlic (1 min). Add ground spices (coriander, cumin, turmeric, garam masala, paprika), cook 1 min.\n4. Add Tomatoes & Cashews: Stir in tomatoes/passata. Simmer 10 mins. Stir in cashew paste (if using).\n5. Blend Sauce (Optional): Blend for smooth texture.\n6. Finish Sauce: Return sauce to pan. Stir in cream, sugar, salt, kasuri methi (opt.). Simmer gently 5 mins.\n7. Combine: Add cooked chicken to sauce. Heat through.\n8. Serve: Garnish coriander. Serve with rice or naan.",
    tags: ["Indian", "Curry", "Chicken", "Creamy", "Mild", "Takeaway Classic", "Comfort Food", "Dinner", "Family Favourite", "Butter", "Tomato"]
  },
  {
    id: 236,
    name: "Pad Thai (Chicken or Prawn)",
    description: "Classic Thai stir-fried rice noodles with tamarind sauce, egg, tofu, peanuts, and chicken or prawns.",
    ingredients: [
        { quantity: "200g", name: "dried flat rice noodles", prep:"(approx 5mm wide)" },
        // Sauce:
        { quantity: "3 tbsp", name: "tamarind paste/concentrate" }, { quantity: "3 tbsp", name: "fish sauce" }, { quantity: "3 tbsp", name: "palm sugar", prep:"grated (or brown sugar)" }, { quantity: "1-2 tbsp", name: "water" }, { quantity:"opt:", name:"1 tsp sriracha/chilli sauce"},
        // Stir-fry:
        { quantity: "2 tbsp", name: "vegetable oil" }, { quantity: "2 cloves", name: "garlic", prep:"minced" }, { quantity: "1", name: "shallot", prep:"sliced", prep:"opt."}, { quantity: "150g", name: "firm tofu", prep:"cubed & fried (opt.)" }, { quantity: "150g", name: "chicken breast or prawns", prep:"sliced/peeled" }, { quantity: "2", name: "eggs" }, { quantity: "1 cup", name: "bean sprouts" }, { quantity: "1/4 cup", name: "garlic chives", prep:"cut into 5cm lengths" }, { quantity: "1/4 cup", name: "roasted peanuts", prep:"roughly chopped" },
        { name: "Serve with:", prep:"lime wedges, extra peanuts, chilli flakes, extra bean sprouts"}
    ],
    ingredientKeywords: ["pad thai", "thai", "noodles", "rice noodles", "stir-fry", "tamarind", "fish sauce", "palm sugar", "peanuts", "chicken", "prawns", "shrimp", "tofu", "egg", "bean sprouts", "takeaway", "takeaway classic", "asian", "street food"],
    instructions: "1. Prep Noodles: Soak noodles in hot (not boiling) water until pliable. Drain well.\n2. Make Sauce: Whisk tamarind, fish sauce, sugar, water, optional chilli until sugar dissolves.\n3. Cook Protein/Tofu: Heat 1 tbsp oil (high heat). Stir-fry chicken/prawns until cooked. Remove. Fry tofu cubes until golden (if using). Remove.\n4. Cook Aromatics/Egg: Heat 1 tbsp oil. Stir-fry garlic/shallot. Push aside. Crack eggs, scramble lightly, break up.\n5. Combine: Add drained noodles, sauce mixture, cooked protein/tofu to pan. Toss quickly over high heat until noodles absorb sauce and are tender.\n6. Add Veg/Nuts: Add half the bean sprouts, garlic chives, peanuts. Toss briefly.\n7. Serve: Serve immediately, topped with remaining sprouts, peanuts. Offer lime wedges and chilli flakes.",
    tags: ["Thai", "Noodles", "Stir-fry", "Takeaway Classic", "Street Food", "Chicken", "Prawns", "Tofu", "Peanuts", "Tamarind", "Asian Inspired", "Dinner", "Lunch", "Vegetarian Option"] // Vegetarian if no meat/prawns & check fish sauce sub
  },
   {
    id: 237,
    name: "Doner Kebab (Australian Takeaway Style)",
    description: "Shaved meat (lamb, beef, or chicken) served in pita bread with salad (lettuce, tomato, onion) and garlic/chilli/BBQ sauces.",
    ingredients: [
        // Meat (Use store-bought shaved kebab meat or marinate/roast your own)
        { quantity: "Approx 500-600g", name: "shaved kebab meat", prep: "(lamb, chicken, or beef), heated" },
        // Serving:
        { quantity: "4", name: "pita bread rounds or lebanese bread" },
        { name: "Lettuce", prep: "shredded" },
        { name: "Tomato", prep: "sliced or diced" },
        { name: "Onion", prep: "thinly sliced (red or white)" },
        // Sauces (Choose):
        { name: "Garlic sauce / Aioli", prep:"(often yogurt based)"},
        { name: "Chilli sauce / Hot sauce" },
        { name: "BBQ sauce" },
        { name: "Hummus", prep:"optional"},
        { name: "Tabouli", prep:"optional"}
    ],
    ingredientKeywords: ["doner kebab", "kebab", "gyro", "souvlaki style", "lamb", "chicken", "beef", "shaved meat", "pita bread", "lebanese bread", "salad", "garlic sauce", "chilli sauce", "bbq sauce", "takeaway", "takeaway classic", "middle eastern inspired", "turkish inspired", "greek inspired", "aussie", "street food", "late night"],
    instructions: "1. Heat Meat & Bread: Heat shaved kebab meat according to preference (pan-fry, microwave). Warm pita bread slightly (grill, pan, microwave) so it's pliable.\n2. Prepare Salad: Have shredded lettuce, sliced tomato, and sliced onion ready.\n3. Assemble Kebab: Lay warm pita flat. Layer salad ingredients (lettuce, tomato, onion) down the centre or one side. Top generously with heated shaved meat.\n4. Add Sauces: Drizzle liberally with your choice of sauce(s) (garlic, chilli, BBQ are classic combo).\n5. Wrap & Serve: Fold or roll the pita bread tightly around the filling. Wrap base in foil or paper (optional). Serve immediately.",
    tags: ["Takeaway Classic", "Kebab", "Lamb", "Chicken", "Beef", "Pita Bread", "Street Food", "Middle Eastern Inspired", "Aussie Favourite", "Dinner", "Lunch", "Late Night Food", "Simple Assembly"]
  },
   {
    id: 238,
    name: "Salt and Pepper Squid",
    description: "Crispy deep-fried squid seasoned with salt, pepper, chilli, and garlic - a very popular takeaway appetizer.",
    ingredients: [
        { quantity: "500g", name: "squid", prep: "cleaned, scored & cut" }, { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "rice flour" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1 tsp", name: "white pepper"}, { quantity: "1/2 tsp", name: "five spice", prep:"opt."}, { name: "oil", prep: "for deep frying" }, // Garnish:
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1-2", name: "red chillies", prep:"sliced" }, { quantity: "3 cloves", name: "garlic", prep:"chopped" }, { quantity: "2", name: "spring onions", prep:"sliced" }
    ],
    ingredientKeywords: ["salt and pepper squid", "salt and chilli squid", "squid", "calamari", "chinese", "cantonese", "deep fried", "crispy", "spicy", "seafood", "appetizer", "pub food", "takeaway", "takeaway classic"],
    instructions: "1. Prepare Squid: Pat dry.\n2. Make Coating: Combine flours, salt, pepper, five spice.\n3. Coat Squid: Toss squid in coating.\n4. Deep Fry: Heat oil (180°C). Fry squid batches 2-4 mins until crispy. Drain.\n5. Stir-fry Garnish: Heat 1 tbsp oil. Stir-fry chilli, garlic, spring onion whites 30-60 secs.\n6. Combine: Return squid. Add green spring onions. Toss.\n7. Serve immediately.",
    tags: ["Chinese", "Cantonese", "Seafood", "Squid", "Deep Fried", "Crispy", "Spicy", "Appetizer", "Takeaway Classic", "Asian Inspired", "Party Food", "Pub Classic"]
  }
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsTakeawayClassic);