// meals_fish.js

const mealsFish = [
  {
    id: 133,
    name: "Fish and Chips",
    description: "Classic takeaway favourite: crispy battered fish served with thick-cut chips.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets", prep: "(cod, haddock, snapper, hoki)" }, { quantity: "1.5 cups", name: "plain flour", prep: "(+ extra)" }, { quantity: "1.5 tsp", name: "baking powder" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1.5 cups", name: "ice-cold beer or soda water" }, { quantity: "1.2kg", name: "potatoes", prep: "cut thick chips" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "lemon wedges" }, { name: "tartare sauce" }, { name: "malt vinegar", prep:"opt." }, { name: "salt", prep:"extra"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "haddock", "snapper", "hoki", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "pub classic", "british", "aussie", "seafood", "dinner"],
    instructions: "1. Prep Chips: Cut potatoes, rinse, dry well.\n2. First Fry Chips: Oil 160°C. Fry chips 5-7 mins (soft, pale). Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Whisk in beer/soda water.\n4. Prep Fish: Pat dry. Dust in flour.\n5. Fry Fish: Oil 190°C. Dip fish in batter. Fry batches 4-7 mins (golden, cooked). Drain.\n6. Second Fry Chips: Re-fry chips (190°C) 2-4 mins (golden, crisp). Drain.\n7. Serve: Season chips. Serve hot with fish, lemon, tartare, vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Aussie Favourite", "Dinner", "Family Favourite"]
  },
  {
    id: 134,
    name: "Teriyaki Salmon with Rice and Greens",
    description: "Flaky salmon fillets glazed with a simple homemade teriyaki sauce.",
    ingredients: [
        { quantity: "4", name: "salmon fillets", prep: "(approx 180g each), skin-on or off" },
        // Teriyaki Sauce:
        { quantity: "1/2 cup", name: "soy sauce" }, { quantity: "1/2 cup", name: "mirin" }, { quantity: "1/4 cup", name: "sake", prep: "(or water)" }, { quantity: "1/4 cup", name: "sugar" },
        // For serving:
        { quantity: "1 tbsp", name: "vegetable oil" }, { name: "Japanese rice", prep: "cooked" }, { name: "Steamed green vegetables", prep: "(broccoli, bok choy, beans)" }, { name: "Sesame seeds", prep: "toasted garnish" }, { name: "Spring onions", prep: "sliced garnish" }
    ],
    ingredientKeywords: ["teriyaki", "salmon", "fish", "seafood", "japanese", "soy sauce", "mirin", "sake", "sugar", "rice", "broccoli", "bok choy", "healthy", "quick", "pan-fry", "asian", "glazed"],
    instructions: "1. Make Teriyaki Sauce: Combine sauce ingredients in saucepan. Simmer stirring until sugar dissolves. Simmer gently 5-10 mins until slightly thickens. Set aside.\n2. Prepare Salmon: Pat salmon dry.\n3. Cook Salmon: Heat oil in non-stick pan (medium-high). Cook skin-side down (if using) 4-6 mins until crispy. Flip, cook 2-4 mins until done.\n4. Glaze Salmon: Reduce heat low. Pour half the teriyaki sauce over salmon. Turn to coat. Let bubble & glaze 30-60 secs.\n5. Serve: Serve salmon over rice. Drizzle extra sauce. Add steamed greens. Garnish with sesame seeds & spring onions.",
    tags: ["Japanese", "Teriyaki", "Salmon", "Fish", "Seafood", "Healthy", "Quick Meal", "Weeknight Dinner", "Asian Inspired", "Gluten Free Option", "Dinner"] // (Use Tamari for GF)
  },
  {
    id: 135,
    name: "Tuna Mornay Pasta Bake",
    description: "Creamy, cheesy pasta bake with canned tuna and vegetables. Budget-friendly.",
    ingredients: [
        { quantity: "400g", name: "pasta", prep:"(macaroni, penne)" }, { quantity: "50g", name: "butter" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1/4 cup", name: "plain flour" }, { quantity: "2.5 cups", name: "milk" }, { quantity: "1.5 cups", name: "cheddar cheese", prep: "grated" }, { quantity: "2 x 185g cans", name: "tuna in springwater or oil", prep: "drained & flaked" }, { quantity: "1 cup", name: "frozen peas and corn mix" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "breadcrumbs", prep:"opt." }, { quantity: "1 tbsp", name: "butter", prep:"melted, opt." }
    ],
    ingredientKeywords: ["tuna mornay", "tuna bake", "pasta bake", "tuna", "canned tuna", "fish", "pasta", "cheese", "cheddar", "mornay sauce", "comfort food", "budget friendly", "family meal", "aussie", "casserole", "kid friendly"],
    instructions: "1. Cook Pasta: Cook pasta al dente. Drain.\n2. Make Mornay: Melt 50g butter, sauté onion. Stir in flour (1 min). Whisk in milk until smooth & thick. Stir in 1 cup cheese. Season.\n3. Combine: Add pasta, tuna, veg to sauce.\n4. Assemble & Bake: Preheat oven 180°C. Pour mix into dish. Top with rest of cheese (& optional buttered breadcrumbs). Bake 20-25 mins.\n5. Serve: Rest briefly.",
    tags: ["Pasta Bake", "Tuna", "Fish", "Comfort Food", "Family Meal", "Budget Friendly", "Cheese", "Cheddar", "Aussie Favourite", "Dinner", "Kid Friendly", "Family Favourite"]
  },
  {
    id: 136,
    name: "Lemon Butter Baked Fish",
    description: "Simple baked white fish fillets with lemon, butter, garlic, and herbs.",
    ingredients: [
        { quantity: "4", name: "white fish fillets", prep: "(approx 180g each - e.g., snapper, cod, barramundi, basa)" },
        { quantity: "50g", name: "butter", prep: "softened or melted" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "2 tbsp", name: "fresh parsley", prep: "chopped" },
        { quantity: "1 tbsp", name: "lemon juice", prep: "freshly squeezed" },
        { quantity: "1/2", name: "lemon", prep: "thinly sliced" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "optional:", name:"white wine splash"}
    ],
    ingredientKeywords: ["baked fish", "fish", "white fish", "snapper", "cod", "barramundi", "basa", "lemon butter", "lemon", "butter", "garlic", "parsley", "baked", "simple", "healthy", "quick meal", "weeknight dinner"],
    instructions: "1. Preheat Oven: 190°C (175°C fan). Lightly grease a baking dish.\n2. Prepare Fish: Pat fish fillets dry. Arrange in single layer in baking dish. Season with salt and pepper.\n3. Make Lemon Butter: Combine softened/melted butter, minced garlic, chopped parsley, and lemon juice. Add optional splash of white wine if desired.\n4. Top Fish: Spoon or brush the lemon butter mixture evenly over the fish fillets. Arrange lemon slices on top.\n5. Bake: Bake for 12-18 minutes (depending on thickness of fish) until fish is cooked through and flakes easily with a fork.\n6. Serve: Serve immediately, perhaps with steamed vegetables, rice, or potatoes.",
    tags: ["Baked", "Fish", "White Fish", "Seafood", "Lemon Butter", "Garlic", "Simple", "Healthy Option", "Quick Meal", "Weeknight Dinner", "Dinner", "Gluten Free"]
  },
  {
    id: 137,
    name: "Fish Tacos with Slaw and Chipotle Mayo",
    description: "Crispy battered or grilled fish served in soft tortillas with a fresh slaw and spicy mayonnaise.",
    ingredients: [
        { quantity: "600-700g", name: "firm white fish fillets", prep: "(e.g., snapper, cod, ling), cut into thick strips" },
        // Option 1: Crispy Batter (simple)
        { quantity: "1/2 cup", name: "plain flour" }, { quantity:"1/2 cup", name:"cornflour"}, { quantity: "1 tsp", name: "baking powder" }, { quantity: "pinch", name: "salt" }, { quantity: "approx 3/4 cup", name: "soda water/beer" }, { name: "oil for frying" },
        // Option 2: Grilled
        // { quantity: "1 tbsp", name:"olive oil"}, { quantity:"1 tsp", name:"cumin"}, { quantity:"1/2 tsp", name:"paprika"}, { name:"salt & pepper"},
        // Slaw:
        { quantity: "1/4 head", name: "red or white cabbage", prep: "shredded" }, { quantity: "1", name: "carrot", prep: "julienned" }, { quantity: "1/4", name: "red onion", prep: "thinly sliced" }, { quantity: "1/4 cup", name: "coriander", prep: "chopped" }, { quantity: "2 tbsp", name: "lime juice" }, { quantity: "1 tbsp", name: "olive oil" },
        // Chipotle Mayo:
        { quantity: "1/2 cup", name: "mayonnaise" }, { quantity: "1-2 tsp", name: "chipotle peppers in adobo sauce", prep: "finely chopped (or chipotle powder)" }, { quantity: "1 tsp", name: "lime juice" },
        // Serving:
        { quantity: "8-12", name: "small soft tortillas", prep: "(corn or flour), warmed" }, { name: "lime wedges" }, { name: "optional avocado slices" }
    ],
    ingredientKeywords: ["fish tacos", "tacos", "fish", "white fish", "snapper", "cod", "ling", "battered fish", "grilled fish", "slaw", "cabbage", "chipotle", "mayonnaise", "spicy", "mexican", "tex-mex", "fresh", "dinner", "lunch"],
    instructions: "1. Prepare Fish: Cut fish into strips.\n    a) Batter Option: Whisk dry batter ingredients. Whisk in soda/beer. Pat fish dry, dip in batter. Deep fry (180°C) batches 3-5 mins until golden. Drain.\n    b) Grill Option: Toss fish with oil, cumin, paprika, salt, pepper. Grill/pan-fry until cooked through.\n2. Make Slaw: Combine cabbage, carrot, red onion, coriander. Whisk lime juice & olive oil, toss with slaw.\n3. Make Chipotle Mayo: Mix mayonnaise, chopped chipotle, lime juice.\n4. Assemble Tacos: Warm tortillas. Place fish strips inside. Top with slaw and drizzle with chipotle mayo. Add optional avocado.\n5. Serve: Serve immediately with extra lime wedges.",
    tags: ["Tacos", "Fish", "White Fish", "Seafood", "Mexican", "Tex-Mex", "Dinner", "Lunch", "Fresh", "Spicy Option", "Deep Fried Option", "Grilled Option"]
  },
   {
    id: 138,
    name: "Creamy Smoked Salmon Pasta",
    description: "A quick and elegant pasta dish with smoked salmon in a creamy dill or lemon sauce.",
    ingredients: [
        { quantity: "400g", name: "long pasta", prep: "(e.g., fettuccine, linguine, spaghetti)" },
        { quantity: "1 tbsp", name: "olive oil or butter" },
        { quantity: "1", name: "shallot or small onion", prep: "finely chopped" },
        { quantity: "2 cloves", name: "garlic", prep: "minced" },
        { quantity: "optional:", name:"1/4 cup dry white wine"},
        { quantity: "1 cup", name: "thickened cream (heavy cream)" },
        { quantity: "200g", name: "smoked salmon", prep: "cut into strips" },
        { quantity: "2 tbsp", name: "fresh dill or parsley", prep: "chopped" },
        { quantity: "1 tbsp", name: "lemon juice", prep: "optional" },
        { quantity: "optional:", name:"1/4 cup frozen peas"},
        { name: "salt and black pepper", prep: "to taste" },
        { name: "parmesan cheese", prep: "grated, to serve (optional)" }
    ],
    ingredientKeywords: ["smoked salmon pasta", "salmon pasta", "pasta", "smoked salmon", "salmon", "fish", "seafood", "creamy", "cream", "dill", "lemon", "quick", "elegant", "dinner", "italian inspired"],
    instructions: "1. Cook Pasta: Cook pasta according to package directions until al dente. Drain, reserving about 1/2 cup pasta water.\n2. Sauté Aromatics: Heat oil/butter in large pan. Sauté shallot/onion until soft. Add garlic, cook 1 min.\n3. Deglaze (optional): Add wine, let bubble and reduce slightly.\n4. Make Sauce: Stir in cream. Bring to gentle simmer. Add peas (if using). Simmer 1-2 mins.\n5. Combine: Add cooked pasta and smoked salmon strips to the sauce. Toss gently to combine (salmon cooks quickly). Add reserved pasta water if sauce too thick.\n6. Finish: Stir in chopped dill/parsley and optional lemon juice. Season with salt and pepper (careful with salt as salmon is salty).\n7. Serve: Serve immediately, optionally topped with parmesan.",
    tags: ["Pasta", "Smoked Salmon", "Salmon", "Fish", "Seafood", "Creamy", "Quick Meal", "Dinner", "Elegant", "Italian Inspired"]
  },
  {
    id: 139,
    name: "Thai Fish Cakes (Tod Mun Pla)",
    description: "Flavourful fish cakes made with fish paste, red curry paste, green beans, and kaffir lime leaves, fried until golden.",
    ingredients: [
        { quantity: "500g", name: "firm white fish fillets", prep: "(e.g., ling, cod), roughly chopped" },
        { quantity: "1", name: "egg" },
        { quantity: "2 tbsp", name: "Thai red curry paste" },
        { quantity: "1 tbsp", name: "fish sauce" },
        { quantity: "1 tsp", name: "sugar" },
        { quantity: "1/2 cup", name: "green beans", prep: "very finely sliced" },
        { quantity: "2-3", name: "kaffir lime leaves", prep: "very finely shredded" },
        { quantity: "optional:", name:"1 tbsp chopped coriander"},
        { name: "vegetable oil", prep: "for shallow frying" },
        // Cucumber Relish (Ajad - simple version):
        { quantity: "1/4 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "water" }, { quantity: "2 tbsp", name: "sugar" }, { quantity: "pinch", name: "salt" }, { quantity: "1/2", name: "cucumber", prep:"finely diced"}, { quantity: "1", name: "shallot", prep:"thinly sliced"}, { quantity: "1", name: "red chilli", prep:"sliced (opt.)"}
    ],
    ingredientKeywords: ["thai fish cakes", "tod mun pla", "fish cakes", "fish", "white fish", "thai", "red curry paste", "fish sauce", "kaffir lime", "green beans", "spicy", "appetizer", "snack", "fried", "asian"],
    instructions: "1. Make Fish Paste: Place chopped fish in food processor. Process until it forms a sticky paste. Add egg, red curry paste, fish sauce, sugar. Process briefly to combine.\n2. Add Veggies: Transfer paste to bowl. Stir in finely sliced green beans, shredded kaffir lime leaves, optional coriander.\n3. Form Cakes: With wet hands, form mixture into small, flat patties (about 5-6cm diameter).\n4. Make Relish: Heat vinegar, water, sugar, salt until sugar dissolves. Cool. Stir in cucumber, shallot, chilli.\n5. Fry Fish Cakes: Heat 1-2cm oil in frying pan (medium heat). Fry fish cakes in batches, 3-4 minutes per side, until golden brown and cooked through.\n6. Drain: Drain cooked fish cakes on paper towels.\n7. Serve: Serve hot fish cakes immediately with cucumber relish for dipping.",
    tags: ["Thai", "Fish Cakes", "Fish", "White Fish", "Seafood", "Appetizer", "Snack", "Fried", "Shallow Fried", "Spicy", "Asian Inspired", "Party Food", "Gluten Free Option"] // (check curry paste)
  },
  {
    id: 140,
    name: "Simple Pan-Seared Fish with Lemon and Capers",
    description: "Quickly pan-seared fish fillets served with a simple sauce of butter, lemon juice, and capers.",
    ingredients: [
        { quantity: "4", name: "fish fillets", prep: "(e.g., snapper, bream, flathead, sole - approx 150-180g each)" },
        { quantity: "2 tbsp", name: "plain flour", prep: "(optional, for dusting)" },
        { name: "salt and pepper" },
        { quantity: "2 tbsp", name: "olive oil" },
        { quantity: "3 tbsp", name: "butter" },
        { quantity: "2 tbsp", name: "capers", prep: "rinsed" },
        { quantity: "3 tbsp", name: "lemon juice", prep: "freshly squeezed" },
        { quantity: "2 tbsp", name: "fresh parsley", prep: "chopped" }
    ],
    ingredientKeywords: ["pan-seared fish", "pan-fried fish", "fish", "white fish", "snapper", "bream", "flathead", "sole", "lemon caper sauce", "lemon", "capers", "butter", "quick", "simple", "healthy option", "dinner", "lunch", "mediterranean"],
    instructions: "1. Prepare Fish: Pat fish fillets very dry. Season with salt and pepper. Optional: lightly dust with flour.\n2. Sear Fish: Heat olive oil in large non-stick pan over medium-high heat. Place fish in pan (skin-side down if using skin). Cook 3-5 minutes until golden and crispy. Flip carefully.\n3. Cook Other Side & Make Sauce: Add butter to pan. As butter melts, cook fish other side 2-4 minutes until cooked through. Add capers and lemon juice to pan. Swirl pan, letting sauce bubble for 30 seconds. Stir in parsley.\n4. Serve: Remove fish to plates. Spoon lemon caper butter sauce from pan over fish. Serve immediately.",
    tags: ["Fish", "White Fish", "Seafood", "Pan-Fried", "Pan-Seared", "Quick Meal", "Simple", "Healthy Option", "Dinner", "Lunch", "Lemon", "Capers", "Mediterranean", "Gluten Free Option"] // (omit flour)
  },
   {
    id: 141,
    name: "Kedgeree",
    description: "A British colonial dish of flaked smoked fish (traditionally haddock), rice, hard-boiled eggs, parsley, and curry powder.",
    ingredients: [
      { quantity: "400g", name: "smoked haddock fillets", prep: "(undyed preferred)" },
      { quantity: "1.5 cups", name: "basmati rice" },
      { quantity: "50g", name: "butter" },
      { quantity: "1", name: "onion", prep: "finely chopped" },
      { quantity: "1-2 tsp", name: "mild curry powder" },
      { quantity: "1/2 tsp", name: "turmeric powder", prep:"optional for colour"},
      { quantity: "4", name: "large eggs" },
      { quantity: "1/2 cup", name: "frozen peas", prep: "optional" },
      { quantity: "1/2 cup", name: "fresh parsley", prep: "chopped" },
      { quantity: "optional:", name:"1/4 cup cream or milk"},
      { name: "salt and black pepper" },
      { name: "lemon wedges", prep: "to serve" }
    ],
    ingredientKeywords: ["kedgeree", "smoked haddock", "haddock", "fish", "smoked fish", "rice", "eggs", "hard-boiled eggs", "curry powder", "british", "indian influenced", "breakfast", "brunch", "lunch", "comfort food"],
    instructions: "1. Cook Fish & Eggs: Place smoked haddock in pan, cover with water/milk. Bring to simmer, cook 5-8 mins until flakes easily. Remove fish, reserve cooking liquid. Flake fish, discarding skin/bones. Hard-boil eggs (8-10 mins), peel, chop roughly.\n2. Cook Rice: Cook basmati rice using preferred method (absorption or boiling), using some reserved fish cooking liquid as part of the water if desired. \n3. Sauté Aromatics: Melt butter in large pan/pot. Sauté onion until soft (5 mins). Stir in curry powder and turmeric, cook 1 min.\n4. Combine: Add cooked rice to pan with onions/spices. Stir well. Gently fold in flaked smoked haddock, chopped eggs, peas (if using), and most of the chopped parsley. Add optional cream/milk now if desired. Heat through gently.\n5. Season & Serve: Season kedgeree well with salt and pepper. Serve hot, garnished with remaining parsley and lemon wedges on the side.",
    tags: ["British", "Indian Influenced", "Fish", "Smoked Fish", "Haddock", "Rice", "Eggs", "Breakfast", "Brunch", "Lunch", "Comfort Food", "Curry Powder"]
  },
  {
    id: 142,
    name: "Fish Pie",
    description: "A comforting pie with various fish and often prawns in a creamy white sauce, topped with mashed potato.",
    ingredients: [
        { quantity: "700-800g total", name: "mixed fish fillets", prep: "(e.g., salmon, cod, smoked haddock), skinless, boneless, cubed" },
        { quantity: "optional:", name: "100g cooked prawns" },
        { quantity: "500ml", name: "milk" }, { quantity: "1", name: "bay leaf" }, { quantity: "few peppercorns" }, { quantity: "1/4", name:"onion"},
        // Sauce:
        { quantity: "50g", name: "butter" }, { quantity: "50g", name: "plain flour" }, { quantity: "2 tbsp", name: "fresh parsley or dill", prep:"chopped" }, { quantity: "optional:", name:"1/4 cup frozen peas or sweetcorn"}, { name: "salt and white pepper" },
        // Topping:
        { quantity: "1kg", name: "potatoes", prep: "peeled & chopped" }, { quantity: "50g", name: "butter" }, { quantity: "splash", name: "milk" }, { name: "grated cheddar cheese", prep: "optional" }
    ],
    ingredientKeywords: ["fish pie", "pie", "fish", "salmon", "cod", "haddock", "smoked haddock", "prawns", "seafood", "white sauce", "bechamel", "mashed potato", "potato", "comfort food", "british", "winter warmer", "dinner"],
    instructions: "1. Poach Fish: Gently heat milk with bay leaf, peppercorns, onion quarter until simmering. Add cubed fish. Poach gently 4-5 mins until just cooked. Remove fish with slotted spoon, set aside. Strain milk, reserve.\n2. Make Mash: Boil potatoes until tender. Drain. Mash with 50g butter and splash of milk. Season.\n3. Make Sauce: Melt 50g butter in pan. Stir in flour (1 min). Gradually whisk in reserved strained milk until smooth & thick. Simmer 2 mins. Stir in parsley/dill, peas/corn (if using). Season.\n4. Assemble: Preheat oven 190°C (175°C fan). Gently fold poached fish and prawns (if using) into sauce. Pour into ovenproof dish.\n5. Top & Bake: Top fish mixture evenly with mashed potato, rough surface. Sprinkle cheese (if using). Bake 25-35 minutes until golden and bubbly.\n6. Serve: Rest 5 mins before serving.",
    tags: ["British", "Comfort Food", "Fish", "Seafood", "Salmon", "Cod", "Pie", "Potato", "Dinner", "Winter Warmer", "Family Favourite"]
  }
  // More Fish recipes could be added...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsFish);