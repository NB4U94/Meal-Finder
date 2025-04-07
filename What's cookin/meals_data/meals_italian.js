// meals_italian.js

const mealsItalian = [
  {
    id: 143,
    name: "Spaghetti Bolognese",
    description: "A classic rich beef mince sauce simmered with vegetables and tomatoes, served with spaghetti.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep: "chopped" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "carrot", prep: "grated" }, { quantity: "1 stick", name: "celery", prep: "finely chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1 tbsp", name: "tomato paste" }, { quantity: "400g can", name: "diced tomatoes" }, { quantity: "1/2 cup", name: "beef stock or red wine" }, { quantity: "1 tsp", name: "dried oregano" }, { quantity: "1/2 tsp", name: "dried basil" }, { quantity: "1", name: "bay leaf", prep: "opt." }, { quantity: "400g", name: "spaghetti" }, { name: "parmesan cheese", prep: "grated, to serve" }, { name: "salt and pepper" }
    ],
    ingredientKeywords: ["spaghetti", "bolognese", "pasta", "beef", "beef mince", "mince", "ragu", "tomato", "carrot", "celery", "onion", "garlic", "italian", "comfort food", "family favourite", "dinner"],
    instructions: "1. Sauté Veggies: Heat oil, sauté onion, garlic, carrot, celery until soft.\n2. Brown Mince: Add mince, brown, drain fat.\n3. Add Liquids/Herbs: Stir in tomato paste (1 min). Add tomatoes, stock/wine, herbs, bay leaf. Season.\n4. Simmer: Simmer covered 30+ mins (longer better). Remove bay leaf.\n5. Cook Pasta: Cook spaghetti.\n6. Serve: Serve sauce over spaghetti, top with parmesan.",
    tags: ["Family Favourite", "Beef", "Pasta", "Italian", "Aussie Favourite", "Comfort Food", "Weeknight Dinner", "Mince", "Kid Friendly", "Dinner"]
  },
  {
    id: 144,
    name: "Classic Lasagne al Forno",
    description: "Layers of rich beef ragu, creamy béchamel sauce, pasta sheets, and cheese, baked until golden.",
    ingredients: [
        // Ragu (Bolognese - can use recipe above or simplified):
        { quantity: "1 tbsp", name: "olive oil" }, { quantity: "1", name: "onion", prep:"chopped" }, { quantity: "1", name: "carrot", prep:"chopped" }, { quantity: "1", name: "celery stick", prep:"chopped" }, { quantity: "500g", name: "beef mince" }, { quantity: "1/2 cup", name: "red wine", prep:"opt." }, { quantity: "400g can", name: "crushed tomatoes" }, { quantity: "1 cup", name: "beef stock/milk" }, { quantity: "1 tsp", name: "dried oregano" }, { name: "salt and pepper" },
        // Béchamel Sauce:
        { quantity: "60g", name: "butter" }, { quantity: "1/2 cup", name: "plain flour" }, { quantity: "3 cups", name: "milk", prep:"warm" }, { quantity: "pinch", name: "nutmeg" }, { name: "salt and white pepper" },
        // Assembly:
        { quantity: "Approx 9-12 sheets", name: "dried lasagne pasta sheets", prep:"(fresh or no-pre-cook if specified)" },
        { quantity: "1 cup", name: "parmesan cheese", prep: "grated" },
        { quantity: "optional:", name: "1 cup mozzarella cheese, grated"}
    ],
    ingredientKeywords: ["lasagne", "lasagna", "baked pasta", "pasta", "beef", "beef mince", "mince", "ragu", "bolognese", "bechamel", "white sauce", "cheese", "parmesan", "mozzarella", "italian", "comfort food", "family favourite", "dinner", "baked"],
    instructions: "1. Make Ragu: Sauté onion, carrot, celery. Brown mince, drain fat. Add wine (opt.), reduce. Add tomatoes, stock/milk, oregano. Season. Simmer 30+ mins until thick.\n2. Make Béchamel: Melt butter, whisk in flour (1 min). Gradually whisk in warm milk until smooth & thick. Simmer 2 mins. Season with nutmeg, salt, white pepper.\n3. Assemble: Preheat oven 180°C (160°C fan). Grease baking dish (approx 20x30cm). Spread thin layer ragu on base. Top with layer pasta sheets (don't overlap heavily). Spread layer béchamel, then layer ragu. Sprinkle some parmesan. Repeat layers (pasta, béchamel, ragu, parmesan) finishing with layer pasta topped with remaining béchamel.\n4. Top & Bake: Sprinkle remaining parmesan (and optional mozzarella) over top. Bake 35-45 minutes until golden brown, bubbling, and pasta is tender.\n5. Rest & Serve: Let lasagne rest 10-15 minutes before slicing and serving.",
    tags: ["Italian", "Pasta", "Baked Pasta", "Beef", "Mince", "Ragu", "Bechamel", "Cheese", "Comfort Food", "Family Favourite", "Dinner", "Winter Warmer"]
  },
  {
    id: 145,
    name: "Creamy Pesto Pasta with Chicken",
    description: "A quick and flavourful pasta dish combining pesto, cream, and tender chicken pieces.",
    ingredients: [
      { quantity: "400g", name: "pasta", prep: "(penne, fettuccine)" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "4", name: "chicken breast fillets or 600g thigh", prep: "cubed" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1/2 - 3/4 cup", name: "basil pesto" }, { quantity: "1 cup", name: "heavy cream" }, { quantity: "1/4 cup", name: "parmesan cheese", prep: "grated, plus extra" }, { name: "salt and pepper" }, { name: "cherry tomatoes", prep: "halved (opt.)" }, { name: "pine nuts", prep: "toasted (opt.)" }
    ],
    ingredientKeywords: ["chicken", "pasta", "penne", "fettuccine", "pesto", "basil", "cream", "heavy cream", "parmesan", "cheese", "garlic", "italian", "italian inspired", "quick", "creamy", "weeknight dinner", "comfort food"],
    instructions: "1. Cook Pasta: Cook pasta al dente. Drain, reserving 1/2 cup pasta water.\n2. Cook Chicken: Heat oil, cook chicken until golden & cooked. Season.\n3. Sauté Garlic: Add garlic (30 secs).\n4. Add Pesto & Cream: Stir in pesto (1 min). Reduce heat, stir in cream, parmesan until smooth (do not boil).\n5. Combine: Add pasta to skillet. Toss. Add pasta water if needed. Stir in tomatoes (opt.).\n6. Serve: Garnish with extra parmesan and pine nuts (opt.).",
    tags: ["Pasta", "Chicken", "Pesto", "Creamy", "Quick Meal", "Weeknight Dinner", "Italian Inspired", "Comfort Food", "Family Favourite", "Cheese", "Italian"]
  },
  {
    id: 146,
    name: "Margherita Pizza",
    description: "Classic Neapolitan pizza topped simply with tomatoes, fresh mozzarella, fresh basil, and olive oil.",
    ingredients: [
        // Dough (as per Homemade Pizza recipe #125 or store-bought)
        { quantity: "1 portion", name: "pizza dough", prep:"(for 1 large or 2 smaller)"},
        // Toppings:
        { quantity: "1/2 cup", name: "good quality crushed tomatoes", prep: "(e.g., San Marzano)" },
        { quantity: "pinch", name: "salt" },
        { quantity: "125-150g", name: "fresh mozzarella", prep: "(bocconcini or fior di latte), torn or sliced" },
        { quantity: "Handful", name: "fresh basil leaves" },
        { quantity: "drizzle", name: "extra virgin olive oil" },
        { quantity: "optional:", name:"grated parmesan cheese"}
    ],
    ingredientKeywords: ["pizza", "margherita", "margherita pizza", "neapolitan", "italian", "tomato", "mozzarella", "fresh mozzarella", "basil", "olive oil", "simple", "classic", "vegetarian", "cheese"],
    instructions: "1. Prepare Dough & Oven: Preheat oven to highest temp (240°C+) with stone/tray inside. Roll/stretch dough into thin base.\n2. Top Pizza: Place base on baking paper. Spread crushed tomatoes evenly, leaving border. Season tomatoes lightly with salt. Scatter torn/sliced fresh mozzarella over tomatoes. Sprinkle optional parmesan.\n3. Bake: Transfer pizza (on paper) to hot stone/tray. Bake 7-12 minutes until crust is golden, puffed, and cheese is melted and bubbly.\n4. Finish: Remove pizza. Immediately scatter fresh basil leaves over hot pizza. Drizzle with extra virgin olive oil.\n5. Serve: Slice and serve immediately.",
    tags: ["Pizza", "Italian", "Neapolitan", "Classic", "Simple", "Vegetarian", "Cheese", "Mozzarella", "Basil", "Tomato", "Dinner", "Lunch", "Family Favourite"]
  },
  {
    id: 147,
    name: "Risotto alla Milanese (Saffron Risotto)",
    description: "A classic creamy risotto from Milan, flavoured and coloured with saffron threads.",
    ingredients: [
        { quantity: "1 tbsp", name: "olive oil" },
        { quantity: "1 tbsp", name: "butter" },
        { quantity: "1", name: "small onion or shallot", prep: "finely chopped" },
        { quantity: "1.5 cups (approx 300g)", name: "Arborio or Carnaroli rice" },
        { quantity: "1/2 cup", name: "dry white wine", prep: "optional" },
        { quantity: "Approx 4-5 cups (1 - 1.25L)", name: "hot chicken or vegetable stock" },
        { quantity: "Large pinch", name: "saffron threads" },
        { quantity: "1/4 cup", name: "grated parmesan cheese" },
        { quantity: "1 tbsp", name: "cold butter", prep: "cubed (for mantecatura)" },
        { name: "salt and white pepper", prep: "to taste" }
    ],
    ingredientKeywords: ["risotto", "risotto alla milanese", "saffron risotto", "saffron", "rice", "arborio", "carnaroli", "italian", "milanese", "creamy", "parmesan", "cheese", "vegetarian option", "side dish", "main course", "gluten free"],
    instructions: "1. Infuse Saffron: Steep saffron threads in 1/4 cup of the hot stock.\n2. Sauté Onion: Heat oil and 1 tbsp butter in wide, heavy-based pan. Sauté onion/shallot until soft and translucent (5 mins).\n3. Toast Rice: Add rice to pan. Stir constantly for 1-2 minutes until grains look translucent at edges ('toasting').\n4. Add Wine (optional): Pour in wine, stir until fully evaporated.\n5. Add Stock Gradually: Add saffron-infused stock. Stir until absorbed. Start adding remaining hot stock, one ladleful at a time, stirring frequently. Wait until liquid is mostly absorbed before adding next ladle. Continue for 18-25 minutes until rice is creamy but still al dente (firm to bite).\n6. Mantecatura (Finish): Remove pan from heat. Stir in grated parmesan and cold cubed butter vigorously until melted and creamy. Season with salt and white pepper.\n7. Serve: Serve immediately, traditionally plain or as accompaniment to Osso Buco.",
    tags: ["Italian", "Risotto", "Saffron", "Rice", "Creamy", "Parmesan", "Cheese", "Vegetarian Option", "Gluten Free", "Side Dish", "Main Course", "Dinner", "Classic"]
  },
   {
    id: 148,
    name: "Chicken Cacciatore",
    description: "Italian 'hunter-style' chicken braised with onions, herbs, tomatoes, often mushrooms and capsicum.",
    ingredients: [
      { quantity: "1 tbsp", name: "olive oil" }, { quantity: "8 pieces", name: "chicken portions", prep: "(thighs, drumsticks)" }, { name: "salt and pepper" }, { quantity: "1", name: "large onion", prep: "sliced" }, { quantity: "2 cloves", name: "garlic", prep: "minced" }, { quantity: "1", name: "red capsicum", prep: "sliced" }, { quantity: "200g", name: "mushrooms", prep: "sliced" }, { quantity: "1/2 cup", name: "dry white wine", prep: "opt." }, { quantity: "400g can", name: "crushed tomatoes" }, { quantity: "1/2 cup", name: "chicken stock" }, { quantity: "1 tsp", name: "oregano" }, { quantity: "1 tsp", name: "basil" }, { quantity: "1", name: "bay leaf" }, { name: "parsley", prep: "garnish"}
    ],
    ingredientKeywords: ["chicken cacciatore", "cacciatore", "chicken", "hunter style", "italian", "braised", "stew", "tomato", "mushrooms", "capsicum", "wine", "comfort food", "dinner"],
    instructions: "1. Brown Chicken: Season chicken. Heat oil, brown chicken. Remove.\n2. Sauté Vegetables: Sauté onion (5 mins). Add garlic, capsicum, mushrooms (5-7 mins).\n3. Deglaze (opt.): Add wine, reduce.\n4. Simmer: Return chicken. Add tomatoes, stock, herbs, bay leaf. Season. Simmer.\n5. Braise: Cover, simmer gently 45-60 mins until tender.\n6. Serve: Remove bay leaf. Garnish parsley. Serve with pasta/bread.",
    tags: ["Italian", "Chicken", "Braised", "Stew", "Comfort Food", "Dinner", "Family Favourite", "Mediterranean", "Winter Warmer"]
  },
  {
    id: 149,
    name: "Arancini (Deep Fried Risotto Balls)",
    description: "Balls of leftover risotto, often stuffed with cheese, coated and deep-fried.",
    ingredients: [
        { quantity: "Approx 3 cups", name: "cold leftover risotto" }, { quantity: "optional filling:", name: "cubes mozzarella, bolognese ragu" }, { quantity: "1/2 cup", name: "plain flour" }, { quantity: "2", name: "eggs", prep: "beaten" }, { quantity: "1.5 cups", name: "breadcrumbs" }, { name: "vegetable oil", prep: "for deep frying" }, { name: "Optional serving:", prep: "marinara sauce" }
    ],
    ingredientKeywords: ["arancini", "risotto balls", "risotto", "rice", "deep fried", "crispy", "stuffed", "cheese", "mozzarella", "italian", "sicilian", "appetizer", "snack", "leftovers", "comfort food"],
    instructions: "1. Prep Risotto: Ensure risotto is cold/firm.\n2. Form Balls: Scoop risotto, flatten, add filling (opt.), enclose, roll into ball.\n3. Coat Arancini: Roll ball in flour, then egg, then breadcrumbs.\n4. Heat Oil: Heat oil (180°C).\n5. Fry Arancini: Fry batches 4-6 mins until golden & hot inside. Drain.\n6. Serve: Serve hot with dipping sauce (opt.).",
    tags: ["Italian", "Sicilian", "Appetizer", "Snack", "Deep Fried", "Crispy", "Risotto", "Rice", "Cheese", "Leftovers", "Comfort Food", "Party Food"]
  },
  {
    id: 150,
    name: "Caprese Salad",
    description: "A simple Italian salad of sliced fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil.",
    ingredients: [
        { quantity: "2-3", name: "large ripe tomatoes", prep: "sliced" },
        { quantity: "250g", name: "fresh mozzarella", prep: "(buffalo mozzarella preferred), sliced" },
        { quantity: "Handful", name: "fresh basil leaves" },
        { quantity: "2-3 tbsp", name: "extra virgin olive oil" },
        { name: "salt", prep: "(flaky sea salt preferred)" },
        { name: "freshly ground black pepper" },
        { quantity: "optional:", name: "balsamic glaze or vinegar"}
    ],
    ingredientKeywords: ["caprese salad", "caprese", "salad", "italian", "tomato", "mozzarella", "fresh mozzarella", "buffalo mozzarella", "basil", "olive oil", "simple", "fresh", "summer", "starter", "appetizer", "vegetarian", "gluten free", "no-cook"],
    instructions: "1. Arrange: Alternate slices of tomato and mozzarella on a platter.\n2. Add Basil: Tuck fresh basil leaves between the slices.\n3. Season & Dress: Sprinkle generously with salt and pepper. Drizzle evenly with extra virgin olive oil.\n4. Optional Glaze: Drizzle with balsamic glaze or vinegar if desired.\n5. Serve: Serve immediately at room temperature.",
    tags: ["Italian", "Salad", "Starter", "Appetizer", "Vegetarian", "Gluten Free", "No-Cook", "Simple", "Fresh", "Summer", "Tomato", "Mozzarella", "Basil", "Cheese", "Healthy Option"]
  },
  {
    id: 151,
    name: "Pasta Carbonara (Traditional)",
    description: "A classic Roman pasta dish with eggs, hard cheese (Pecorino Romano), cured pork (guanciale), and black pepper. No cream!",
    ingredients: [
        { quantity: "400g", name: "spaghetti or bucatini" },
        { quantity: "150g", name: "guanciale", prep: "(or pancetta/good quality bacon), diced" },
        { quantity: "4", name: "large egg yolks", prep:"(or 2 whole eggs + 2 yolks)" },
        { quantity: "1 cup (approx 100g)", name: "Pecorino Romano cheese", prep: "finely grated (or half Pecorino, half Parmesan)" },
        { quantity: "Generous amount", name: "freshly cracked black pepper" },
        { name: "salt", prep: "for pasta water" }
    ],
    ingredientKeywords: ["carbonara", "pasta carbonara", "spaghetti", "bucatini", "pasta", "italian", "roman", "egg", "pecorino romano", "parmesan", "cheese", "guanciale", "pancetta", "bacon", "black pepper", "no cream", "authentic", "classic"],
    instructions: "1. Cook Pork: Cook diced guanciale/pancetta in a cold pan over medium heat until fat renders and meat is crispy. Remove meat, leave rendered fat in pan.\n2. Cook Pasta: Cook pasta in well-salted boiling water until al dente. Reserve about 1 cup pasta water before draining.\n3. Prepare Egg/Cheese Mix: Whisk egg yolks (or eggs+yolks) with grated Pecorino/Parmesan and a generous amount of black pepper in a large bowl.\n4. Combine: Drain pasta quickly and add immediately to the bowl with egg/cheese mix. Toss rapidly to coat pasta. The heat from pasta cooks the eggs creating a creamy sauce. DO NOT do this over heat or eggs will scramble.\n5. Emulsify: Add crispy guanciale/pancetta back. Add a few tablespoons of hot reserved pasta water to pan with rendered fat, swirl, then add this fat/water mix to pasta bowl. Toss again, adding more pasta water if needed to achieve creamy consistency.\n6. Serve: Serve immediately, topped with more grated cheese and black pepper.",
    tags: ["Italian", "Roman", "Pasta", "Carbonara", "Classic", "Authentic", "Egg", "Cheese", "Pecorino", "Guanciale", "Pancetta", "Dinner", "Comfort Food"]
  },
  {
    id: 152,
    name: "Osso Buco with Risotto Milanese",
    description: "Braised veal shanks cooked until tender in a vegetable and wine broth, traditionally served with saffron risotto.",
    ingredients: [
        // Osso Buco:
        { quantity: "4 pieces", name: "veal shank", prep: "(approx 3-4cm thick), tied with string (opt.)" }, { quantity: "1/4 cup", name: "plain flour", prep:"seasoned with salt & pepper" }, { quantity: "2 tbsp", name: "olive oil" }, { quantity: "1 tbsp", name: "butter" }, { quantity: "1", name: "onion", prep:"chopped" }, { quantity: "1", name: "carrot", prep:"chopped" }, { quantity: "1", name: "celery stick", prep:"chopped" }, { quantity: "2 cloves", name: "garlic", prep:"minced" }, { quantity: "1 cup", name: "dry white wine" }, { quantity: "1 cup", name: "beef or veal stock" }, { quantity: "400g can", name: "crushed tomatoes" }, { quantity: "1", name: "bay leaf" }, { quantity: "few sprigs", name: "thyme/parsley stems"},
        // Gremolata (Garnish):
        { quantity: "1/4 cup", name: "fresh parsley", prep:"chopped"}, { quantity: "1 clove", name: "garlic", prep:"finely minced"}, { quantity: "1", name: "lemon", prep:"zest only"},
        // Serve with: Risotto Milanese (see recipe #147)
    ],
    ingredientKeywords: ["osso buco", "veal shank", "veal", "braised", "italian", "milanese", "slow cooked", "comfort food", "tomato", "wine", "gremolata", "risotto milanese", "saffron risotto", "dinner", "special occasion"],
    instructions: "1. Prep Veal: Pat veal shanks dry. Dust lightly in seasoned flour.\n2. Brown Veal: Heat oil & butter in heavy pot/Dutch oven. Brown veal shanks well on all sides. Remove.\n3. Sauté Veg: Add onion, carrot, celery to pot. Cook until soft (5-7 mins). Add garlic (1 min).\n4. Deglaze & Simmer: Pour in wine, scrape pot base, reduce slightly. Return veal shanks. Add stock, tomatoes, bay leaf, herb stems. Season. Bring to simmer.\n5. Braise: Cover pot tightly. Transfer to preheated oven (160°C/140°C fan) or simmer very gently on stovetop for 1.5 - 2.5 hours, until veal is very tender.\n6. Make Gremolata: Combine chopped parsley, minced garlic, lemon zest.\n7. Serve: Prepare Risotto Milanese (#147). Carefully remove veal shanks. Skim fat from braising liquid (can thicken slightly if desired). Serve Osso Buco over risotto, spoon over braising liquid, sprinkle with gremolata.",
    tags: ["Italian", "Milanese", "Veal", "Braised", "Slow-Cooked", "Comfort Food", "Dinner", "Special Occasion", "Classic", "Risotto", "Gremolata"]
  },
  {
    id: 153,
    name: "Focaccia Bread",
    description: "A flat oven-baked Italian bread, often dimpled and topped with olive oil, salt, and herbs.",
    ingredients: [
        // Dough:
        { quantity: "500g", name: "strong bread flour", prep: "(plus extra for dusting)" }, { quantity: "1 packet (7g)", name: "instant dried yeast" }, { quantity: "1 tsp", name: "salt" }, { quantity: "1 tsp", name: "sugar or honey", prep:"opt." }, { quantity: "Approx 1.5 cups (350ml)", name: "lukewarm water" }, { quantity: "1/4 cup", name: "olive oil", prep: "(plus extra for topping)" },
        // Topping:
        { quantity: "2-3 tbsp", name: "extra virgin olive oil" }, { quantity: "1-2 tsp", name: "flaky sea salt" }, { quantity: "optional:", name:"fresh rosemary sprigs, olives, cherry tomato halves, sliced onion"}
    ],
    ingredientKeywords: ["focaccia", "bread", "italian bread", "flatbread", "olive oil", "salt", "rosemary", "yeast", "baking", "italian", "appetizer", "side dish", "vegetarian", "vegan"],
    instructions: "1. Make Dough: Combine flour, yeast, salt, sugar (opt.) in large bowl. Make well. Add lukewarm water and 1/4 cup olive oil. Mix to form shaggy dough. Knead on floured surface 10 mins until smooth & elastic.\n2. First Rise: Place dough in lightly oiled bowl, turn to coat. Cover, let rise in warm place 1-1.5 hours until doubled.\n3. Shape & Second Rise: Gently punch down dough. Transfer to well-oiled baking tray (approx 23x33cm). Gently stretch/press dough to fill tray. Cover loosely, let rise 30-45 mins.\n4. Dimple & Top: Preheat oven 200°C (180°C fan). Uncover dough. Drizzle generously with extra virgin olive oil. Dimple dough all over using oiled fingertips. Sprinkle with flaky salt and optional rosemary/olives/tomatoes.\n5. Bake: Bake 20-25 minutes until golden brown and sounds hollow when tapped.\n6. Serve: Let cool slightly on wire rack. Cut into squares or slices. Best served warm or room temp.",
    tags: ["Italian", "Bread", "Focaccia", "Baking", "Olive Oil", "Rosemary", "Vegetarian", "Vegan", "Side Dish", "Appetizer"]
  },
   {
    id: 154,
    name: "Bruschetta with Tomato and Basil",
    description: "Grilled bread rubbed with garlic and topped with fresh diced tomatoes, basil, olive oil, and salt.",
    ingredients: [
        { quantity: "4-6 slices", name: "crusty Italian bread", prep: "(e.g., ciabatta, sourdough), cut 1.5cm thick" },
        { quantity: "1-2 cloves", name: "garlic", prep: "halved" },
        { quantity: "3", name: "ripe tomatoes", prep: "finely diced" },
        { quantity: "Handful", name: "fresh basil leaves", prep: "chopped or torn" },
        { quantity: "2 tbsp", name: "extra virgin olive oil" },
        { name: "salt and freshly ground black pepper" },
        { quantity: "optional:", name:"balsamic glaze drizzle"}
    ],
    ingredientKeywords: ["bruschetta", "tomato bruschetta", "italian", "appetizer", "starter", "bread", "toast", "grilled bread", "tomato", "basil", "garlic", "olive oil", "simple", "fresh", "summer", "vegetarian", "vegan"],
    instructions: "1. Prepare Topping: In a bowl, combine diced tomatoes, chopped basil, olive oil, salt, and pepper. Let sit for flavours to meld (10-15 mins).\n2. Grill Bread: Grill or toast bread slices until golden brown and crisp on both sides.\n3. Rub Garlic: While bread is still hot, rub one side of each slice with the cut side of a garlic clove.\n4. Top Bruschetta: Spoon the tomato and basil mixture generously onto the garlic-rubbed side of the toasted bread.\n5. Optional Glaze: Drizzle with balsamic glaze if desired.\n6. Serve: Serve immediately.",
    tags: ["Italian", "Appetizer", "Starter", "Vegetarian", "Vegan", "Simple", "Fresh", "Summer", "Tomato", "Basil", "Garlic", "Bread", "No-Cook Option"] // (if bread not grilled)
  },
   {
    id: 155,
    name: "Chicken Scaloppine with Lemon Sauce (Piccata Style)",
    description: "Thin chicken cutlets dredged in flour, pan-fried, and served with a tangy lemon-butter and caper sauce.",
    ingredients: [
      { quantity: "4", name: "thin chicken breast cutlets", prep: "(or breast fillets pounded thin)" },
      { quantity: "1/2 cup", name: "plain flour", prep:"seasoned with salt & pepper" },
      { quantity: "2 tbsp", name: "olive oil" },
      { quantity: "3 tbsp", name: "butter" },
      { quantity: "1/2 cup", name: "dry white wine or chicken stock" },
      { quantity: "1/4 cup", name: "lemon juice", prep: "freshly squeezed" },
      { quantity: "2 tbsp", name: "capers", prep: "rinsed" },
      { quantity: "2 tbsp", name: "fresh parsley", prep:"chopped"}
    ],
    ingredientKeywords: ["chicken scaloppine", "chicken piccata", "chicken", "scaloppine", "piccata", "italian", "italian-american", "pan-fried", "lemon sauce", "lemon", "butter", "capers", "quick meal", "dinner"],
    instructions: "1. Prepare Chicken: Pat chicken cutlets dry. Dredge in seasoned flour, shaking off excess.\n2. Cook Chicken: Heat olive oil (medium-high heat) in large skillet. Cook chicken 2-3 minutes per side until golden brown and cooked through. Remove chicken, keep warm.\n3. Make Sauce: Add butter to pan. Once melted, add wine/stock, scrape bottom of pan. Let bubble and reduce slightly (1-2 mins). Stir in lemon juice and capers. Simmer 1 min.\n4. Finish: Return chicken briefly to pan to coat in sauce. Stir in parsley.\n5. Serve: Serve immediately, spooning sauce over chicken. Good with pasta or vegetables.",
    tags: ["Italian", "Italian-American", "Chicken", "Pan-Fried", "Quick Meal", "Dinner", "Lemon", "Capers", "Butter", "Sauce"]
  }
  // Add more Italian recipes...
];

// Append this array to the global mealDatabase
window.mealDatabase = (window.mealDatabase || []).concat(mealsItalian);