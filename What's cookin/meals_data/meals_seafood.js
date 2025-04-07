// meals_seafood.js

const mealsSeafood = [
  {
    id: 203,
    name: "Fish and Chips",
    description: "Classic crispy battered fish served with thick-cut chips.",
    ingredients: [
        { quantity: "800g", name: "firm white fish fillets", prep: "(cod, snapper, hoki)" }, { quantity: "1.5 cups", name: "plain flour", prep: "(+ extra)" }, { quantity: "1.5 tsp", name: "baking powder" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1.5 cups", name: "ice-cold beer/soda water" }, { quantity: "1.2kg", name: "potatoes", prep: "cut thick chips" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "lemon wedges" }, { name: "tartare sauce" }, { name: "malt vinegar", prep:"opt." }, { name: "salt", prep:"extra"}
    ],
    ingredientKeywords: ["fish and chips", "fish", "cod", "snapper", "hoki", "batter", "beer batter", "chips", "fries", "potato", "deep fried", "takeaway", "pub classic", "british", "aussie", "seafood", "dinner"],
    instructions: "1. Prep Chips: Cut potatoes, rinse, dry well.\n2. First Fry Chips: Oil 160°C. Fry chips 5-7 mins (soft, pale). Drain.\n3. Make Batter: Whisk flour, baking powder, salt. Whisk in beer/soda water.\n4. Prep Fish: Pat dry. Dust in flour.\n5. Fry Fish: Oil 190°C. Dip fish in batter. Fry batches 4-7 mins (golden, cooked). Drain.\n6. Second Fry Chips: Re-fry chips (190°C) 2-4 mins (golden, crisp). Drain.\n7. Serve: Season chips. Serve hot with fish, lemon, tartare, vinegar.",
    tags: ["Takeaway Classic", "Fish", "Seafood", "Chips", "Deep Fried", "Pub Classic", "British", "Aussie Favourite", "Dinner", "Family Favourite"]
  },
  {
    id: 204,
    name: "Teriyaki Salmon with Rice and Greens",
    description: "Flaky salmon fillets glazed with a simple homemade teriyaki sauce.",
    ingredients: [
        { quantity: "4", name: "salmon fillets", prep: "(~180g each)" }, // Sauce:
        { quantity: "1/2 cup", name: "soy sauce" }, { quantity: "1/2 cup", name: "mirin" }, { quantity: "1/4 cup", name: "sake/water" }, { quantity: "1/4 cup", name: "sugar" }, // Serving:
        { quantity: "1 tbsp", name: "oil" }, { name: "Japanese rice", prep: "cooked" }, { name: "Steamed green vegetables" }, { name: "Sesame seeds", prep: "garnish" }, { name: "Spring onions", prep: "garnish" }
    ],
    ingredientKeywords: ["teriyaki", "salmon", "fish", "seafood", "japanese", "soy sauce", "mirin", "rice", "healthy", "quick", "pan-fry", "asian", "glazed", "dinner"],
    instructions: "1. Make Sauce: Combine sauce ingredients. Simmer stirring until sugar dissolves & slightly thickens.\n2. Cook Salmon: Pat dry. Heat oil (medium-high). Cook skin-down 4-6 mins. Flip, cook 2-4 mins.\n3. Glaze Salmon: Reduce heat low. Pour half sauce over. Turn to coat. Let bubble & glaze 30-60 secs.\n4. Serve: Serve salmon over rice, drizzle extra sauce. Add greens. Garnish.",
    tags: ["Japanese", "Teriyaki", "Salmon", "Fish", "Seafood", "Healthy", "Quick Meal", "Weeknight Dinner", "Asian Inspired", "Gluten Free Option", "Dinner"]
  },
  {
    id: 205,
    name: "Tuna Mornay Pasta Bake",
    description: "Creamy, cheesy pasta bake with canned tuna and vegetables.",
    ingredients: [
        { quantity: "400g", name: "pasta" }, { quantity: "50g", name: "butter" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1/4 cup", name: "flour" }, { quantity: "2.5 cups", name: "milk" }, { quantity: "1.5 cups", name: "cheddar cheese", prep: "grated" }, { quantity: "2 x 185g cans", name: "tuna", prep: "drained" }, { quantity: "1 cup", name: "frozen peas and corn" }, { name: "salt and pepper" }, { quantity: "1/2 cup", name: "breadcrumbs", prep:"opt." }
    ],
    ingredientKeywords: ["tuna mornay", "tuna bake", "pasta bake", "tuna", "canned tuna", "fish", "pasta", "cheese", "cheddar", "mornay sauce", "comfort food", "budget friendly", "family meal", "aussie", "casserole", "seafood"],
    instructions: "1. Cook Pasta al dente. Drain.\n2. Make Mornay: Melt butter, sauté onion. Stir in flour (1 min). Whisk in milk until thick. Stir in 1 cup cheese. Season.\n3. Combine: Add pasta, tuna, veg to sauce.\n4. Assemble & Bake: Preheat oven 180°C. Pour mix into dish. Top with rest of cheese (& opt. breadcrumbs). Bake 20-25 mins.\n5. Serve: Rest briefly.",
    tags: ["Pasta Bake", "Tuna", "Fish", "Seafood", "Comfort Food", "Family Meal", "Budget Friendly", "Cheese", "Aussie Favourite", "Dinner", "Kid Friendly", "Family Favourite", "Pasta"]
  },
   {
    id: 206,
    name: "Lemon Butter Baked Fish",
    description: "Simple baked white fish fillets with lemon, butter, garlic, and herbs.",
    ingredients: [
        { quantity: "4", name: "white fish fillets", prep: "(~180g each - snapper, cod, barramundi)" }, { quantity: "50g", name: "butter", prep: "softened/melted" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "2 tbsp", name: "parsley", prep: "chopped" }, { quantity: "1 tbsp", name: "lemon juice" }, { quantity: "1/2", name: "lemon", prep: "thinly sliced" }, { name: "salt and pepper" }, { quantity: "optional:", name:"white wine splash"}
    ],
    ingredientKeywords: ["baked fish", "fish", "white fish", "snapper", "cod", "barramundi", "lemon butter", "lemon", "butter", "garlic", "baked", "simple", "healthy", "quick meal", "weeknight dinner", "seafood"],
    instructions: "1. Preheat Oven: 190°C. Grease baking dish.\n2. Prepare Fish: Pat dry. Place in dish. Season.\n3. Make Lemon Butter: Combine butter, garlic, parsley, lemon juice (opt. wine).\n4. Top Fish: Spoon/brush butter mix over fish. Top with lemon slices.\n5. Bake: Bake 12-18 minutes until cooked through & flakes easily.\n6. Serve immediately.",
    tags: ["Baked", "Fish", "White Fish", "Seafood", "Lemon Butter", "Garlic", "Simple", "Healthy Option", "Quick Meal", "Weeknight Dinner", "Dinner", "Gluten Free"]
  },
  {
    id: 207,
    name: "Fish Tacos with Slaw and Chipotle Mayo",
    description: "Crispy battered or grilled fish in soft tortillas with fresh slaw and spicy mayo.",
    ingredients: [
        { quantity: "600-700g", name: "firm white fish fillets", prep: "cut strips" }, // Batter Option:
        { quantity: "1/2 cup", name: "flour" }, { quantity:"1/2 cup", name:"cornflour"}, { quantity: "1 tsp", name: "baking powder" }, { quantity: "pinch", name: "salt" }, { quantity: "3/4 cup", name: "soda water/beer" }, { name: "oil for frying" }, // Grill Option: { quantity: "1 tbsp", name:"oil"}, { quantity:"1 tsp", name:"cumin"}, etc. // Slaw:
        { quantity: "1/4 head", name: "cabbage", prep: "shredded" }, { quantity: "1", name: "carrot", prep: "julienned" }, { quantity: "1/4", name: "red onion", prep: "sliced" }, { quantity: "1/4 cup", name: "coriander" }, { quantity: "2 tbsp", name: "lime juice" }, { quantity: "1 tbsp", name: "oil" }, // Chipotle Mayo:
        { quantity: "1/2 cup", name: "mayonnaise" }, { quantity: "1-2 tsp", name: "chipotle in adobo", prep:"chopped" }, { quantity: "1 tsp", name: "lime juice" }, // Serving:
        { quantity: "8-12", name: "small soft tortillas", prep:"warmed" }, { name: "lime wedges" }
    ],
    ingredientKeywords: ["fish tacos", "tacos", "fish", "white fish", "snapper", "cod", "battered fish", "grilled fish", "slaw", "cabbage", "chipotle", "mayonnaise", "spicy", "mexican", "tex-mex", "fresh", "dinner", "lunch", "seafood"],
    instructions: "1. Prepare Fish: Cut strips. Choose method:\n    a) Batter: Whisk batter. Pat fish dry, dip, deep fry (180°C) 3-5 mins. Drain.\n    b) Grill: Toss fish with oil/spices. Grill/pan-fry until cooked.\n2. Make Slaw: Combine slaw veg. Whisk lime/oil, toss.\n3. Make Chipotle Mayo: Mix ingredients.\n4. Assemble Tacos: Warm tortillas. Add fish, slaw, chipotle mayo.\n5. Serve with lime wedges.",
    tags: ["Tacos", "Fish", "White Fish", "Seafood", "Mexican", "Tex-Mex", "Dinner", "Lunch", "Fresh", "Spicy Option", "Deep Fried Option", "Grilled Option"]
  },
  {
    id: 208,
    name: "Creamy Smoked Salmon Pasta",
    description: "Quick pasta dish with smoked salmon in a creamy dill or lemon sauce.",
    ingredients: [
        { quantity: "400g", name: "long pasta", prep:"(fettuccine, linguine)" }, { quantity: "1 tbsp", name: "oil/butter" }, { quantity: "1", name: "shallot", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "opt:", name:"1/4 cup white wine"}, { quantity: "1 cup", name: "heavy cream" }, { quantity: "200g", name: "smoked salmon", prep: "strips" }, { quantity: "2 tbsp", name: "fresh dill/parsley", prep: "chopped" }, { quantity: "1 tbsp", name: "lemon juice", prep: "opt." }, { quantity: "opt:", name:"1/4 cup frozen peas"}, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["smoked salmon pasta", "salmon pasta", "pasta", "smoked salmon", "salmon", "fish", "seafood", "creamy", "cream", "dill", "lemon", "quick", "elegant", "dinner", "italian inspired"],
    instructions: "1. Cook Pasta al dente. Reserve 1/2 cup water.\n2. Sauté Aromatics: Heat oil/butter. Sauté shallot. Add garlic.\n3. Deglaze (optional): Add wine, reduce.\n4. Make Sauce: Stir in cream. Simmer. Add peas (opt.).\n5. Combine: Add pasta & smoked salmon. Toss gently. Add pasta water if needed.\n6. Finish: Stir in herbs, lemon juice (opt.). Season (careful with salt).\n7. Serve immediately.",
    tags: ["Pasta", "Smoked Salmon", "Salmon", "Fish", "Seafood", "Creamy", "Quick Meal", "Dinner", "Elegant", "Italian Inspired"]
  },
  {
    id: 209,
    name: "Thai Fish Cakes (Tod Mun Pla)",
    description: "Flavourful fish cakes with red curry paste, green beans, kaffir lime leaves, fried golden.",
    ingredients: [
        { quantity: "500g", name: "firm white fish fillets", prep: "chopped" }, { quantity: "1", name: "egg" }, { quantity: "2 tbsp", name: "Thai red curry paste" }, { quantity: "1 tbsp", name: "fish sauce" }, { quantity: "1 tsp", name: "sugar" }, { quantity: "1/2 cup", name: "green beans", prep: "finely sliced" }, { quantity: "2-3", name: "kaffir lime leaves", prep: "finely shredded" }, { quantity: "opt:", name:"1 tbsp chopped coriander"}, { name: "oil", prep: "for shallow frying" }, // Cucumber Relish:
        { quantity: "1/4 cup", name: "rice vinegar" }, { quantity: "1/4 cup", name: "water" }, { quantity: "2 tbsp", name: "sugar" }, { quantity: "pinch", name: "salt" }, { quantity: "1/2", name: "cucumber", prep:"diced"}, { quantity: "1", name: "shallot", prep:"sliced"}, { quantity: "1", name: "red chilli", prep:"sliced (opt.)"}
    ],
    ingredientKeywords: ["thai fish cakes", "tod mun pla", "fish cakes", "fish", "white fish", "thai", "red curry paste", "fish sauce", "kaffir lime", "green beans", "spicy", "appetizer", "snack", "fried", "shallow fried", "asian", "seafood"],
    instructions: "1. Make Fish Paste: Process fish until sticky paste. Add egg, curry paste, fish sauce, sugar. Process briefly. Stir in beans, lime leaves, coriander.\n2. Form Cakes: With wet hands, form small flat patties.\n3. Make Relish: Heat vinegar, water, sugar, salt until dissolved. Cool. Add cucumber, shallot, chilli.\n4. Fry Cakes: Heat 1-2cm oil (medium). Fry batches 3-4 mins per side until golden & cooked.\n5. Drain & Serve: Drain on paper towels. Serve hot with relish.",
    tags: ["Thai", "Fish Cakes", "Fish", "White Fish", "Seafood", "Appetizer", "Snack", "Fried", "Shallow Fried", "Spicy", "Asian Inspired", "Party Food", "Gluten Free Option"]
  },
  {
    id: 210,
    name: "Kedgeree",
    description: "British colonial dish of flaked smoked fish (haddock), rice, hard-boiled eggs, parsley, and curry powder.",
    ingredients: [
      { quantity: "400g", name: "smoked haddock fillets" }, { quantity: "1.5 cups", name: "basmati rice" }, { quantity: "50g", name: "butter" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "1-2 tsp", name: "mild curry powder" }, { quantity: "1/2 tsp", name: "turmeric", prep:"opt."}, { quantity: "4", name: "large eggs" }, { quantity: "1/2 cup", name: "frozen peas", prep:"opt." }, { quantity: "1/2 cup", name: "fresh parsley", prep: "chopped" }, { quantity: "opt:", name:"1/4 cup cream/milk"}, { name: "salt and pepper" }, { name: "lemon wedges" }
    ],
    ingredientKeywords: ["kedgeree", "smoked haddock", "haddock", "fish", "smoked fish", "rice", "eggs", "curry powder", "british", "indian influenced", "breakfast", "brunch", "lunch", "comfort food", "seafood"],
    instructions: "1. Cook Fish & Eggs: Poach haddock in water/milk until flakes (5-8 mins). Reserve liquid. Flake fish. Hard-boil eggs (8-10 mins), peel, chop.\n2. Cook Rice: Cook rice (can use some fish liquid).\n3. Sauté Aromatics: Melt butter, sauté onion. Stir in curry powder, turmeric (1 min).\n4. Combine: Add cooked rice, stir. Gently fold in flaked fish, chopped eggs, peas (opt.), most parsley. Add cream/milk (opt.). Heat gently.\n5. Season & Serve: Season well. Serve hot, garnish parsley, lemon wedges.",
    tags: ["British", "Indian Influenced", "Fish", "Smoked Fish", "Haddock", "Seafood", "Rice", "Eggs", "Breakfast", "Brunch", "Lunch", "Comfort Food", "Curry Powder"]
  },
  {
    id: 211,
    name: "Fish Pie",
    description: "Comforting pie with mixed fish/prawns in creamy white sauce, topped with mashed potato.",
    ingredients: [
        { quantity: "700-800g total", name: "mixed fish fillets", prep: "(salmon, cod, smoked haddock), cubed" }, { quantity: "opt:", name: "100g cooked prawns" }, { quantity: "500ml", name: "milk" }, { quantity: "1", name: "bay leaf" }, { quantity: "few peppercorns" }, { quantity: "1/4", name:"onion"}, // Sauce:
        { quantity: "50g", name: "butter" }, { quantity: "50g", name: "plain flour" }, { quantity: "2 tbsp", name: "parsley or dill", prep:"chopped" }, { quantity: "opt:", name:"1/4 cup frozen peas"}, { name: "salt and white pepper" }, // Topping:
        { quantity: "1kg", name: "potatoes" }, { quantity: "50g", name: "butter" }, { quantity: "splash", name: "milk" }, { name: "cheddar cheese", prep: "grated, opt." }
    ],
    ingredientKeywords: ["fish pie", "pie", "fish", "salmon", "cod", "haddock", "smoked haddock", "prawns", "seafood", "white sauce", "bechamel", "mashed potato", "potato", "comfort food", "british", "winter warmer", "dinner", "family favourite"],
    instructions: "1. Poach Fish: Gently heat milk with bay leaf, peppercorns, onion quarter. Add fish cubes. Poach 4-5 mins. Remove fish, strain milk.\n2. Make Mash: Boil potatoes. Mash with 50g butter, splash milk. Season.\n3. Make Sauce: Melt 50g butter. Stir in flour (1 min). Whisk in reserved milk until thick. Simmer 2 mins. Stir in herbs, peas(opt.). Season.\n4. Assemble: Preheat oven 190°C. Gently fold fish/prawns into sauce. Pour into dish.\n5. Top & Bake: Top with mash. Add cheese (opt.). Bake 25-35 mins until golden.\n6. Serve: Rest 5 mins.",
    tags: ["British", "Comfort Food", "Fish", "Seafood", "Salmon", "Cod", "Pie", "Potato", "Dinner", "Winter Warmer", "Family Favourite"]
  },
  {
    id: 212,
    name: "Salt and Pepper Squid",
    description: "Crispy deep-fried squid seasoned with salt, pepper, chilli, and garlic.",
    ingredients: [
        { quantity: "500g", name: "squid", prep: "cleaned, scored & cut" }, // Coating:
        { quantity: "1/2 cup", name: "cornflour" }, { quantity: "1/4 cup", name: "rice flour" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1 tsp", name: "white pepper"}, { quantity: "1/2 tsp", name: "five spice", prep:"opt."}, { quantity: "1", name: "egg white", prep:"opt."}, { name: "oil", prep: "for deep frying" }, // Garnish:
        { quantity: "1 tbsp", name: "oil" }, { quantity: "1-2", name: "red chillies", prep:"sliced" }, { quantity: "3 cloves", name: "garlic", prep:"chopped" }, { quantity: "2", name: "spring onions", prep:"sliced" }
    ],
    ingredientKeywords: ["salt and pepper squid", "salt and chilli squid", "squid", "calamari", "chinese", "cantonese", "deep fried", "crispy", "spicy", "seafood", "appetizer", "pub food", "takeaway"],
    instructions: "1. Prepare Squid: Pat dry. Toss with opt. egg white.\n2. Make Coating: Combine flours, salt, pepper, five spice.\n3. Coat Squid: Toss squid in coating.\n4. Deep Fry: Heat oil (180°C). Fry squid batches 2-4 mins until crispy. Drain.\n5. Stir-fry Garnish: Heat 1 tbsp oil. Stir-fry chilli, garlic, spring onion whites 30-60 secs.\n6. Combine: Return squid. Add green spring onions. Toss.\n7. Serve immediately.",
    tags: ["Chinese", "Cantonese", "Seafood", "Squid", "Deep Fried", "Crispy", "Spicy", "Appetizer", "Takeaway Classic", "Asian Inspired", "Party Food", "Pub Classic"]
  },
  {
    id: 213,
    name: "Moules Frites (Mussels and Fries)",
    description: "Belgian classic: steamed mussels (often in white wine broth) served with fries.",
    ingredients: [
        { quantity: "2kg", name: "fresh mussels", prep: "cleaned" }, // Broth:
        { quantity: "2 tbsp", name: "butter/oil" }, { quantity: "1", name: "shallot/onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1 cup", name: "dry white wine" }, { quantity: "1/2 cup", name: "stock", prep:"opt." }, { quantity: "1/2 cup", name: "parsley", prep: "chopped" }, { name: "black pepper" }, // Fries:
        { quantity: "1kg", name: "potatoes", prep: "cut into thin fries" }, { name: "oil", prep: "for deep frying" }, { name: "salt" }
    ],
    ingredientKeywords: ["moules frites", "mussels", "fries", "chips", "belgian", "french", "seafood", "shellfish", "white wine", "garlic", "steamed", "classic", "bistro", "dinner"],
    instructions: "1. Cook Fries: Double fry thin fries until crisp. Season.\n2. Prepare Broth Base: Sauté shallot/onion in butter/oil. Add garlic.\n3. Steam Mussels: Add wine (& stock). Boil. Add mussels. Cover. Steam 4-6 mins until open (discard unopened).\n4. Finish: Stir in most parsley. Season broth.\n5. Serve: Ladle mussels & broth into bowls. Garnish. Serve with fries.",
    tags: ["Belgian", "French", "Seafood", "Mussels", "Shellfish", "Fries", "Chips", "White Wine", "Garlic", "Dinner", "Classic", "Bistro", "European"]
  },
   {
    id: 214,
    name: "Garlic Prawns (Shrimp Scampi Style)",
    description: "Succulent prawns sautéed quickly with garlic, butter, white wine, lemon juice, and parsley, often served with pasta or bread.",
    ingredients: [
        { quantity: "500g", name: "large raw prawns (shrimp)", prep: "peeled and deveined, tails on or off" },
        { quantity: "3 tbsp", name: "butter" },
        { quantity: "2 tbsp", name: "olive oil" },
        { quantity: "4-6 cloves", name: "garlic", prep: "minced or thinly sliced" },
        { quantity: "1/4 - 1/2 tsp", name: "red pepper flakes (chilli flakes)", prep: "optional" },
        { quantity: "1/2 cup", name: "dry white wine", prep: "(e.g., Pinot Grigio)" },
        { quantity: "2 tbsp", name: "lemon juice", prep: "freshly squeezed" },
        { quantity: "1/4 cup", name: "fresh parsley", prep: "chopped" },
        { name: "salt and black pepper", prep: "to taste" },
        { name: "Serve with:", prep: "linguine, crusty bread, rice" }
    ],
    ingredientKeywords: ["garlic prawns", "garlic shrimp", "shrimp scampi", "prawns", "shrimp", "seafood", "garlic", "butter", "white wine", "lemon", "parsley", "quick", "simple", "italian-american", "mediterranean", "appetizer", "main course", "pasta"],
    instructions: "1. Prepare Prawns: Pat prawns dry. Season lightly with salt & pepper.\n2. Sauté Garlic: Heat butter and olive oil in large skillet over medium heat. Add garlic (and red pepper flakes, if using). Cook until fragrant (about 1 minute), do not brown.\n3. Cook Prawns: Increase heat slightly. Add prawns to skillet in single layer. Cook 1-2 minutes per side, until pink and opaque. Do not overcook.\n4. Deglaze & Finish Sauce: Pour in white wine and lemon juice. Bring to simmer, scraping up any bits from pan. Cook 1-2 minutes until sauce slightly reduces.\n5. Combine & Serve: Stir in chopped parsley. Taste and adjust salt/pepper. Serve immediately, spooning sauce over prawns. Excellent tossed with linguine or served with crusty bread for dipping.",
    tags: ["Seafood", "Prawns", "Shrimp", "Garlic Butter", "White Wine", "Quick Meal", "Simple", "Dinner", "Lunch", "Appetizer", "Italian-American", "Mediterranean", "Pasta Sauce"]
  },
  {
    id: 215,
    name: "Pan-Seared Scallops with Lemon Butter Sauce",
    description: "Large sea scallops seared until golden brown, served with a simple lemon butter sauce.",
    ingredients: [
        { quantity: "500-600g", name: "large sea scallops", prep: "pat very dry, side muscle removed" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "1 tbsp", name: "olive oil" },
        { quantity: "2-3 tbsp", name: "butter" },
        { quantity: "2 cloves", name: "garlic", prep: "minced (optional)" },
        { quantity: "1/4 cup", name: "dry white wine or chicken stock" },
        { quantity: "2 tbsp", name: "lemon juice" },
        { quantity: "1 tbsp", name: "fresh parsley or chives", prep:"chopped"}
    ],
    ingredientKeywords: ["scallops", "pan-seared scallops", "seafood", "shellfish", "seared", "lemon butter", "butter", "lemon", "garlic", "quick", "elegant", "appetizer", "main course", "dinner"],
    instructions: "1. Prepare Scallops: Ensure scallops are completely dry. Season generously with salt and pepper just before cooking.\n2. Sear Scallops: Heat olive oil in large skillet over medium-high heat until shimmering. Add scallops in single layer (don't overcrowd). Sear 1.5-2 minutes per side without moving, until deep golden brown crust forms and scallops are opaque.\n3. Make Sauce: Remove scallops to plate. Reduce heat to medium. Add butter to pan. Add optional garlic, cook 30 secs. Pour in wine/stock, scrape pan. Let bubble & reduce slightly (1 min). Stir in lemon juice.\n4. Serve: Return scallops briefly to pan to coat in sauce (optional). Serve immediately, spooning sauce over scallops. Garnish with parsley/chives.",
    tags: ["Seafood", "Scallops", "Shellfish", "Pan-Seared", "Quick Meal", "Elegant", "Dinner", "Appetizer", "Lemon Butter", "Butter", "Garlic"]
  },
   {
    id: 216,
    name: "Creamy Garlic Prawn Pasta",
    description: "Prawns cooked in a creamy garlic sauce, tossed with pasta.",
    ingredients: [
        { quantity: "400g", name: "pasta", prep: "(linguine, fettuccine)" },
        { quantity: "1 tbsp", name: "olive oil" },
        { quantity: "2 tbsp", name: "butter" },
        { quantity: "4-5 cloves", name: "garlic", prep: "minced" },
        { quantity: "500g", name: "large raw prawns (shrimp)", prep: "peeled and deveined" },
        { quantity: "1/2 cup", name: "dry white wine", prep: "optional" },
        { quantity: "1 cup", name: "heavy cream (thickened cream)" },
        { quantity: "1/4 cup", name: "grated parmesan cheese" },
        { quantity: "pinch", name: "red pepper flakes", prep: "optional" },
        { quantity: "2 tbsp", name: "fresh parsley", prep: "chopped" },
        { name: "salt and pepper" }
    ],
    ingredientKeywords: ["garlic prawn pasta", "prawn pasta", "shrimp pasta", "pasta", "prawns", "shrimp", "seafood", "garlic", "cream", "creamy", "parmesan", "white wine", "italian inspired", "dinner", "comfort food", "quick meal"],
    instructions: "1. Cook Pasta: Cook pasta al dente. Reserve 1 cup pasta water. Drain.\n2. Sauté Garlic: Heat oil and butter (medium heat). Add garlic (and optional red pepper flakes), cook until fragrant (1 min).\n3. Cook Prawns: Add prawns, cook 1-2 mins per side until pink. Remove prawns.\n4. Make Sauce: Deglaze pan with wine (if using), reduce slightly. Stir in cream. Bring to gentle simmer. Stir in parmesan until melted.\n5. Combine: Return prawns to sauce. Add cooked pasta. Toss well. Add reserved pasta water if needed for consistency.\n6. Finish: Stir in parsley. Season with salt and pepper.\n7. Serve: Serve immediately.",
    tags: ["Pasta", "Prawns", "Shrimp", "Seafood", "Creamy", "Garlic", "Dinner", "Comfort Food", "Quick Meal", "Italian Inspired", "Cheese"]
  }
  // More seafood recipes...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsSeafood);