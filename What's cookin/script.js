// script.js
// Main application logic for MEAL FINDER
// VERSION 3.19: Removes Taste.com.au external link.
// (Incorporates previous V3.17 fixes)

document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM Loaded. Initializing Meal Finder V3.19...");

    // --- DOM Element Selection ---
    const appContainer = document.querySelector('.app-container');
    const pages = document.querySelectorAll('.page'); // Get all page elements
    const homePage = document.getElementById('home-page');
    const searchPage = document.getElementById('search-page');
    const resultsPage = document.getElementById('results-page');
    const favouritesPage = document.getElementById('favourites-page');

    const homeSearchButton = document.getElementById('home-search-button');
    const randomMealButton = document.getElementById('random-meal-button');
    const randomMealDisplay = document.getElementById('random-meal-display');
    const viewFavouritesHomeButton = document.getElementById('view-favourites-home-button');

    const searchPageInput = document.getElementById('search-page-input');
    const suggestedIngredientsAnim = document.getElementById('suggested-ingredients-animation');
    const matchTypeRadios = document.querySelectorAll('input[name="match-type"]');
    const excludeInput = document.getElementById('exclude-input');
    const searchPageButton = document.getElementById('search-page-button');
    const viewFavouritesSearchButton = document.getElementById('view-favourites-search-button');

    const resultsContainer = document.getElementById('results-container');
    const resultsPageTitle = document.getElementById('results-page-title');
    const filterContainer = document.getElementById('filter-container');
    const filterSelect = document.getElementById('filter-select');
    const externalSearchContainer = document.getElementById('external-search-container');
    const externalLinksDiv = document.getElementById('external-links');

    const favouritesContainer = document.getElementById('favourites-container');
    const noFavouritesMessage = document.getElementById('no-favourites-message');
    const backButton = document.getElementById('back-button');
    const mealOverlay = document.getElementById('meal-overlay');
    const overlayContent = mealOverlay.querySelector('.overlay-content');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayIngredients = document.getElementById('overlay-ingredients');
    const overlayInstructions = document.getElementById('overlay-instructions');
    const overlayCloseButton = document.getElementById('overlay-close-button');
    const noResultsPopup = document.getElementById('no-results-popup');
    const popupCloseButton = document.getElementById('popup-close-button');
    const popupExternalLinksDiv = document.getElementById('popup-external-links');
    const loadingIndicator = document.getElementById('loading-indicator');

    // --- State Variables ---
    let currentPageId = 'home-page';
    let pageHistory = ['home-page'];
    let currentSearchTerms = [];
    let currentSearchResults = [];
    let currentFavourites = getFavourites();
    let suggestedIngredientsInterval;
    const suggestedIngredients = ["chicken", "beef", "pasta", "rice", "onions", "tomatoes", "cheese", "potatoes", "flour", "eggs", "broccoli", "carrot", "fish", "mince", "capsicum"];

    // --- Define Meal Type Tags ---
    const mealTypeTags = [
        'asian_inspired', 'aussie_favourite', 'beef', 'british', 'cheese',
        'chicken', 'chinese', 'chips', 'deep_fried', 'family_favourite',
        'fish', 'italian', 'pasta', 'pub_classic', 'quick_meal',
        'schnitzel', 'seafood', 'stir_fry', 'takeaway_classic', 'winter_warmer'
    ];

    // --- Helper Functions ---

    /**
     * Cleans a meal name for consistent comparison (lowercase, trim).
     * @param {string | undefined} name - The meal name.
     * @returns {string} - The cleaned name or an empty string.
     */
    function cleanMealName(name) {
        return (typeof name === 'string' ? name.trim().toLowerCase() : '');
    }


    /**
     * De-duplicates the global window.mealDatabase array based on cleaned meal.name.
     */
    function deduplicateMealDatabase() {
        if (window.mealDatabase && Array.isArray(window.mealDatabase)) {
            const initialCount = window.mealDatabase.length;
            const uniqueMealMap = new Map(); // Use cleaned name as key

            window.mealDatabase.forEach(meal => {
                if (meal && typeof meal.name !== 'undefined') {
                    const cleanedName = cleanMealName(meal.name);
                    if (cleanedName && !uniqueMealMap.has(cleanedName)) {
                        uniqueMealMap.set(cleanedName, meal);
                    }
                }
            });

            window.mealDatabase = Array.from(uniqueMealMap.values()); // Replace original DB
            const finalCount = window.mealDatabase.length;
            if (initialCount !== finalCount) {
                 // console.log(`Meal database de-duplicated by NAME. Removed ${initialCount - finalCount} duplicates. Total unique meals: ${finalCount}`);
            }
        } else {
            // console.warn("Attempted to de-duplicate meal database, but it was not found or not an array.");
        }
    }


    /**
     * Navigates between pages by instantly hiding the old and showing the new.
     * @param {string} targetPageId - The ID of the page to navigate to.
     * @param {boolean} [isBack=false] - True if navigating back in history.
     */
    function navigateTo(targetPageId, isBack = false) {
        hideLoading();
        const targetPageElement = document.getElementById(targetPageId);
        const currentPageElement = document.getElementById(currentPageId);

        if (!targetPageElement || currentPageId === targetPageId) {
            return;
        }

        // Update History
        if (!isBack && pageHistory[pageHistory.length - 1] !== targetPageId) {
            pageHistory.push(targetPageId);
        }
        if (pageHistory.length > 10) pageHistory.shift();

        // --- Simplified Page Switching ---
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
            page.classList.remove('page-enter', 'page-enter-active', 'page-leave', 'page-leave-active');
        });

        targetPageElement.style.display = 'flex';
        targetPageElement.classList.add('active');
        currentPageId = targetPageId;
        backButton.style.display = (pageHistory.length > 1) ? 'inline-block' : 'none';

        if (currentPageId === 'search-page') {
            startSearchAnimation();
        } else {
            stopSearchAnimation();
        }
        window.scrollTo(0, 0);
    }


    /** Navigates back in the page history. */
    function goBack() {
        if (pageHistory.length > 1) {
            pageHistory.pop();
            navigateTo(pageHistory[pageHistory.length - 1], true);
        } else {
            // console.warn("goBack called with insufficient history.");
        }
    }

    /** Starts the suggested ingredients animation on the search page. */
    function startSearchAnimation() {
        stopSearchAnimation();
        let index = Math.floor(Math.random() * suggestedIngredients.length);
        const textElement = suggestedIngredientsAnim?.querySelector('span');

        if (!textElement || currentPageId !== 'search-page') return;

        textElement.textContent = suggestedIngredients[index] + "...";
        textElement.style.opacity = 1;

        suggestedIngredientsInterval = setInterval(() => {
            if (currentPageId !== 'search-page') {
                stopSearchAnimation();
                return;
            }
            textElement.style.opacity = 0;
            setTimeout(() => {
                if (currentPageId !== 'search-page') return;
                index = (index + 1) % suggestedIngredients.length;
                textElement.textContent = suggestedIngredients[index] + "...";
                textElement.style.opacity = 1;
            }, 300);
        }, 2500);
    }

    /** Stops the suggested ingredients animation. */
    function stopSearchAnimation() {
        if (suggestedIngredientsInterval) {
            clearInterval(suggestedIngredientsInterval);
            suggestedIngredientsInterval = null;
        }
        const textElement = suggestedIngredientsAnim?.querySelector('span');
        if (textElement) {
            textElement.style.opacity = 0;
        }
    }

    /** Shows the loading indicator. */
    function showLoading() {
        if (loadingIndicator) loadingIndicator.style.display = 'flex';
    }

    /** Hides the loading indicator. */
    function hideLoading() {
        if (loadingIndicator) loadingIndicator.style.display = 'none';
    }

    /**
     * Parses a search input string into an array of lowercase terms.
     * @param {string} inputString - The string from the search input.
     * @returns {string[]} An array of cleaned, lowercase search terms.
     */
    function parseSearchInput(inputString) {
        if (!inputString) return [];
        return inputString
            .toLowerCase()
            .trim()
            .split(/[\s,]+/)
            .map(term => term.trim())
            .filter(term => term !== '');
    }

    /**
     * Filters the meal database based on search terms and exclusions.
     * Ensures the database is de-duplicated by name before filtering.
     * @param {string[]} terms - Array of ingredients to search for.
     * @param {boolean} [matchAny=false] - If true, match meals containing any term; otherwise, match meals containing all terms.
     * @returns {object[]} An array of matching meal objects.
     */
    function performSearch(terms, matchAny = false) {
        deduplicateMealDatabase();

        if (!window.mealDatabase || !Array.isArray(window.mealDatabase)) {
            console.error("Meal database is missing or not an array after de-duplication attempt.");
            return [];
        }

        const excludedTerms = parseSearchInput(excludeInput.value);

        if (terms.length === 0 && excludedTerms.length === 0) {
             return [];
        }

        try {
            return window.mealDatabase.filter(meal => {
                if (!meal || typeof meal !== 'object' || !Array.isArray(meal.ingredientKeywords)) {
                    return false;
                }
                const keywords = meal.ingredientKeywords;

                if (excludedTerms.length > 0) {
                    if (excludedTerms.some(exTerm => keywords.some(kw => kw.includes(exTerm)))) {
                        return false;
                    }
                }
                if (terms.length === 0 && excludedTerms.length > 0) {
                    return true;
                }
                if (matchAny) {
                    return terms.some(term => keywords.some(kw => kw.includes(term)));
                } else {
                    return terms.every(term => keywords.some(kw => kw.includes(term)));
                }
            });
        } catch (error) {
            console.error("Error within performSearch filter logic:", error, error.stack);
            return [];
        }
    }

    /**
     * Creates HTML string for a single meal card.
     * @param {object} meal - The meal object from the database.
     * @returns {string} HTML string for the meal card, or an error message string.
     */
    function createMealCard(meal) {
        if (!meal || typeof meal.id === 'undefined' || typeof meal.name === 'undefined') {
            console.error("[createMealCard] Invalid meal data received (missing id or name):", meal);
            return '<p class="error-message">Error loading meal card data.</p>';
        }

        const isFavourite = currentFavourites.includes(meal.id);
        const favButtonClass = isFavourite ? 'favourite-button active' : 'favourite-button';
        const favButtonTitle = isFavourite ? 'Remove from Favourites' : 'Add to Favourites';
        const googleImageQuery = encodeURIComponent(meal.name);
        const googleImageUrl = `https://www.google.com/search?tbm=isch&q=${googleImageQuery}`;

        try {
            const mealName = meal.name;
            const mealDescription = meal.description || 'Recipe details available inside.';

            return `
                <article class="meal-card" data-meal-id="${meal.id}" tabindex="0">
                    <div class="meal-card-header">
                        <div class="card-logo logo logo-small">
                            <span class="logo-center">M</span>
                        </div>
                        <h3>${mealName}</h3>
                        <button class="${favButtonClass}" data-meal-id="${meal.id}" title="${favButtonTitle}" aria-label="${favButtonTitle}">
                           </button>
                    </div>
                    <div class="meal-card-content">
                        <p>${mealDescription}</p>
                        <a href="${googleImageUrl}" class="google-image-link" target="_blank" rel="noopener noreferrer">View Images on Google</a>
                    </div>
                </article>
            `;
        } catch (error) {
            console.error(`Error creating card HTML for meal ID ${meal.id} (Name: ${meal.name}):`, error, error.stack);
            return '<p class="error-message">Error displaying this meal.</p>';
        }
    }

    /** Populates the filter dropdown options based on the predefined mealTypeTags list. */
    function populateFilterOptions() {
        try {
            if (!filterSelect) return;

            const currentFilterValue = filterSelect.value;
            filterSelect.innerHTML = '';

            const allOption = document.createElement('option');
            allOption.value = 'all';
            allOption.textContent = 'Show All';
            filterSelect.appendChild(allOption);

            mealTypeTags
                .sort((a, b) => a.localeCompare(b))
                .forEach(tag => {
                    const option = document.createElement('option');
                    option.value = tag.toLowerCase();
                    option.textContent = tag.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                    filterSelect.appendChild(option);
                });

            const validValues = ['all', ...mealTypeTags.map(t => t.toLowerCase())];
            filterSelect.value = validValues.includes(currentFilterValue) ? currentFilterValue : 'all';

        } catch (e) {
            console.error("Error populating filters:", e, e.stack);
            if (filterSelect) filterSelect.innerHTML = '<option value="all">Error loading tags</option>';
        }
    }


    /** Filters the displayed results based on the selected tag (matching meal.tags). */
    function filterResults() {
        try {
            const selectedTagValue = filterSelect.value;
            const mealCards = resultsContainer.querySelectorAll('.meal-card');

            if (mealCards.length === 0) return;

            mealCards.forEach(card => {
                const mealId = parseInt(card.dataset.mealId);
                if (isNaN(mealId)) {
                    card.style.display = 'none';
                    return;
                }

                const meal = currentSearchResults.find(m => m && m.id === mealId);

                if (!meal) {
                    card.style.display = 'none';
                    return;
                 };

                let shouldShow = false;
                if (selectedTagValue === 'all') {
                    shouldShow = true;
                } else if (meal.tags && Array.isArray(meal.tags)) {
                    const cleanedSelectedTag = selectedTagValue.replace(/_/g, ' ').trim();

                    shouldShow = meal.tags.some(mealTag => {
                        if (typeof mealTag !== 'string') return false;
                        const cleanedMealTag = mealTag.toLowerCase().replace(/_/g, ' ').trim();
                        return cleanedMealTag === cleanedSelectedTag;
                    });
                }

                card.style.display = shouldShow ? 'flex' : 'none';
            });
        } catch (e) {
            console.error("Error filtering results:", e, e.stack);
        }
    }

    /**
     * Generates HTML for external search links.
     * REMOVED Taste.com.au link.
     * @param {string[]} terms - Array of search terms.
     * @returns {string} HTML string for the links.
     */
    function generateExternalLinks(terms) {
        if (!terms || terms.length === 0) return '';
        const encodedTerms = terms.map(term => encodeURIComponent(term)).join('+');

        // Links to Google and AllRecipes
        const googleUrl = `https://www.google.com/search?q=${encodedTerms}+recipes`;
        const allrecipesUrl = `https://www.allrecipes.com/search?q=${encodedTerms}`;
        // REMOVED: const tasteUrl = `https://www.taste.com.au/search?q=${encodedTerms}`;

        return `
            <a href="${googleUrl}" target="_blank" rel="noopener noreferrer">Search Google</a>
            <a href="${allrecipesUrl}" target="_blank" rel="noopener noreferrer">Search AllRecipes</a>
        `;
        // REMOVED: <a href="${tasteUrl}" target="_blank" rel="noopener noreferrer">Search Taste.com.au</a>
    }

    /**
     * Displays search results or the "no results" popup.
     * @param {object[]} results - Array of meal objects (unique by name from performSearch).
     * @param {string[]} terms - The search terms used.
     */
    function displayResults(results, terms) {
        resultsContainer.innerHTML = '';
        externalSearchContainer.style.display = 'none';
        noResultsPopup.classList.remove('active');
        filterContainer.style.display = 'none';

        currentSearchResults = results || [];

        if (currentSearchResults.length > 0) {
            resultsPageTitle.style.display = 'block';

            let cardsHTML = '';
            try {
                currentFavourites = getFavourites();
                cardsHTML = currentSearchResults.map(meal => createMealCard(meal) || '').join('');
            } catch (error) {
                console.error("Error generating cards HTML:", error, error.stack);
                cardsHTML = '<p class="error-message">Error displaying results. Please try again.</p>';
            }

            try {
                resultsContainer.innerHTML = cardsHTML;
            } catch (error) {
                console.error("Error setting results container innerHTML:", error, error.stack);
                resultsContainer.innerHTML = '<p class="error-message">Error displaying results. Please try again.</p>';
            }

            externalLinksDiv.innerHTML = generateExternalLinks(terms);
            externalSearchContainer.style.display = 'block';

            populateFilterOptions();
            filterSelect.value = 'all';
            filterContainer.style.display = 'block';
            filterResults();

        } else {
            resultsPageTitle.style.display = 'none';
            if (terms && terms.length > 0) {
                popupExternalLinksDiv.innerHTML = generateExternalLinks(terms);
                noResultsPopup.classList.add('active');
                noResultsPopup.style.visibility = 'visible';
            }
        }
    }

    /** Displays the user's favourite meals. Ensures the database is de-duplicated by name first. */
    function displayFavourites() {
        deduplicateMealDatabase();

        favouritesContainer.innerHTML = '';
        currentFavourites = getFavourites();

        if (!window.mealDatabase || !Array.isArray(window.mealDatabase)) {
             console.error("Meal database missing or invalid when displaying favourites.");
             noFavouritesMessage.style.display = 'block';
             noFavouritesMessage.textContent = "Error loading meal data.";
             return;
        }

        if (currentFavourites.length === 0) {
            noFavouritesMessage.style.display = 'block';
            noFavouritesMessage.textContent = "You haven't saved any favourites yet!";
            favouritesContainer.innerHTML = '';
        } else {
            noFavouritesMessage.style.display = 'none';
            const favouriteMeals = window.mealDatabase.filter(meal => meal && currentFavourites.includes(meal.id));

            if (favouriteMeals.length > 0) {
                let favCardsHTML = favouriteMeals.map(meal => createMealCard(meal) || '').join('');
                favouritesContainer.innerHTML = favCardsHTML;
            } else if (currentFavourites.length > 0 && favouriteMeals.length === 0){
                favouritesContainer.innerHTML = '<p>Could not load details for saved favourites. They might have been removed or duplicates cleared.</p>';
                noFavouritesMessage.style.display = 'block';
                noFavouritesMessage.textContent = "Could not load details for saved favourites.";
            } else {
                 noFavouritesMessage.style.display = 'block';
                 noFavouritesMessage.textContent = "You haven't saved any favourites yet!";
                 favouritesContainer.innerHTML = '';
            }
        }
    }

    /**
     * Shows the meal details overlay.
     * Finds meal by ID in the globally de-duplicated (by name) database.
     * @param {number|string} mealId - The ID of the meal to display.
     */
    function showOverlay(mealId) {
        const numericMealId = parseInt(mealId);
        if (isNaN(numericMealId)) {
            console.error("Invalid mealId passed to showOverlay:", mealId);
            return;
        }
        const meal = window.mealDatabase.find(m => m && m.id === numericMealId);

        if (meal) {
            try {
                overlayTitle.textContent = meal.name || 'Meal Details';
                if (meal.ingredients && Array.isArray(meal.ingredients)) {
                    overlayIngredients.innerHTML = meal.ingredients.map(ing => {
                        if (!ing) return '';
                        let text = '';
                        if (typeof ing === 'object' && ing !== null) {
                            if (ing.quantity) text += `${ing.quantity} `;
                            if (ing.unit) text += `${ing.unit} `;
                            if (ing.name) text += ing.name;
                            if (ing.prep) text += ` (${ing.prep})`;
                        } else if (typeof ing === 'string') {
                           text = ing;
                        }
                         return text.trim() ? `<li>${text.trim()}</li>` : '';
                    }).join('');
                } else {
                    overlayIngredients.innerHTML = '<li>Ingredient information not available.</li>';
                }
                overlayInstructions.textContent = meal.instructions || 'Instructions not available.';
                mealOverlay.classList.add('active');
                mealOverlay.style.visibility = 'visible';
            } catch (error) {
                console.error(`Error updating overlay content for meal ID ${numericMealId}:`, error, error.stack);
                overlayTitle.textContent = "Error Loading Details";
                overlayIngredients.innerHTML = "";
                overlayInstructions.textContent = "Could not load meal details due to an error.";
                mealOverlay.classList.add('active');
                mealOverlay.style.visibility = 'visible';
            }
        } else {
            console.error(`Meal with ID ${numericMealId} not found for overlay (post name de-duplication).`);
             overlayTitle.textContent = "Meal Not Found";
             overlayIngredients.innerHTML = "";
             overlayInstructions.textContent = `Details for meal ID ${numericMealId} could not be found. It might have been removed as a duplicate.`;
             mealOverlay.classList.add('active');
             mealOverlay.style.visibility = 'visible';
        }
    }

    /** Hides the meal details overlay. */
    function hideOverlay() {
        mealOverlay.classList.remove('active');
        mealOverlay.style.visibility = 'hidden';
        setTimeout(() => {
            overlayTitle.textContent = "";
            overlayIngredients.innerHTML = "";
            overlayInstructions.textContent = "";
        }, 500);
    }

    /** Hides the "no results" popup. */
    function hidePopup() {
        noResultsPopup.classList.remove('active');
        noResultsPopup.style.visibility = 'hidden';
    }

    /** Displays a random meal card on the home page. Ensures database is de-duplicated by name first. */
     function showRandomMeal() {
        deduplicateMealDatabase();

        if (!window.mealDatabase || !Array.isArray(window.mealDatabase) || window.mealDatabase.length === 0) {
            randomMealDisplay.innerHTML = "<p>No meals available in the database.</p>";
            return;
        }
        const randomIndex = Math.floor(Math.random() * window.mealDatabase.length);
        const randomMeal = window.mealDatabase[randomIndex];

        if (!randomMeal || typeof randomMeal.id === 'undefined') {
             randomMealDisplay.innerHTML = "<p>Could not select a valid random meal.</p>";
             return;
        }
        currentFavourites = getFavourites();
        const cardHTML = createMealCard(randomMeal);
        randomMealDisplay.innerHTML = cardHTML;

        const cardElement = randomMealDisplay.querySelector('.meal-card');
        if (cardElement) {
            cardElement.classList.remove('card-enter-animation');
            void cardElement.offsetWidth;
            requestAnimationFrame(() => {
                 cardElement.classList.add('card-enter-animation');
                 const handleAnimationEnd = (event) => {
                     if (event.animationName === 'card-enter-glow' && cardElement) {
                          cardElement.classList.remove('card-enter-animation');
                          cardElement.removeEventListener('animationend', handleAnimationEnd);
                     }
                 };
                 cardElement.addEventListener('animationend', handleAnimationEnd);
             });
        }
    }

    /**
     * Retrieves favourite meal IDs from localStorage.
     * @returns {number[]} An array of favourite meal IDs.
     */
    function getFavourites() {
        try {
            const favs = localStorage.getItem('mealFinderFavourites');
            const parsedFavs = favs ? JSON.parse(favs) : [];
            return Array.isArray(parsedFavs) ? parsedFavs.map(id => parseInt(id)).filter(id => !isNaN(id)) : [];
        } catch (e) {
            console.error("Error reading favourites from localStorage", e, e.stack);
            return [];
        }
    }

    /**
     * Saves an array of favourite meal IDs to localStorage.
     * @param {number[]} favsArray - The array of favourite meal IDs to save.
     */
    function saveFavourites(favsArray) {
        try {
            const uniqueFavs = [...new Set(favsArray)].map(id => parseInt(id)).filter(id => !isNaN(id));
            localStorage.setItem('mealFinderFavourites', JSON.stringify(uniqueFavs));
            currentFavourites = uniqueFavs;
        } catch (e) {
            console.error("Error saving favourites to localStorage:", e, e.stack);
            alert("Could not save favourites. Your browser storage might be full or disabled.");
        }
    }

    /**
     * Toggles the favourite status of a meal. Uses meal ID.
     * Calls displayFavourites if on favourites page.
     * @param {number|string} mealId - The ID of the meal to toggle.
     * @param {HTMLElement} [btn] - The specific button element that was clicked (optional).
     */
    function toggleFavourite(mealId, btn) {
        const numericMealId = parseInt(mealId);
        if (isNaN(numericMealId)) {
            console.error("Invalid mealId passed to toggleFavourite:", mealId);
            return;
        }

        let currentFavsFromStorage = getFavourites();
        let updatedFavs;
        let isActive;
        let isRemoving = currentFavsFromStorage.includes(numericMealId);

        if (isRemoving) {
            updatedFavs = currentFavsFromStorage.filter(id => id !== numericMealId);
            isActive = false;
        } else {
            updatedFavs = [...currentFavsFromStorage, numericMealId];
            isActive = true;
        }

        saveFavourites(updatedFavs);

        // Update UI for all matching buttons
        const allFavButtonsForMeal = document.querySelectorAll(`.favourite-button[data-meal-id="${numericMealId}"]`);
        allFavButtonsForMeal.forEach(buttonElement => {
             buttonElement.classList.toggle('active', isActive);
             const newTitle = isActive ? 'Remove from Favourites' : 'Add to Favourites';
             buttonElement.title = newTitle;
             buttonElement.setAttribute('aria-label', newTitle);
        });

        // If currently on the favourites page, refresh the displayed list
        if (currentPageId === 'favourites-page') {
             displayFavourites();
        }
    }

    // --- Event Listeners ---

    homeSearchButton.addEventListener('click', () => {
        navigateTo('search-page');
        if (searchPageInput) searchPageInput.value = '';
        if (excludeInput) excludeInput.value = '';
    });

    function handleViewFavouritesClick() {
        displayFavourites(); // Runs de-duplication by name
        const favCards = favouritesContainer.querySelectorAll('.meal-card');
        if (currentFavourites.length > 0 && favCards.length > 0) {
             navigateTo('favourites-page');
        } else if (currentFavourites.length === 0) {
             alert("You haven't saved any favourites yet!");
        } else {
             navigateTo('favourites-page');
        }
    }
    viewFavouritesHomeButton.addEventListener('click', handleViewFavouritesClick);
    viewFavouritesSearchButton.addEventListener('click', handleViewFavouritesClick);

    backButton.addEventListener('click', goBack);

    searchPageButton.addEventListener('click', () => {
        showLoading();
        setTimeout(() => {
            let results = [];
            let terms = [];
            let showPopup = false;
            try {
                terms = parseSearchInput(searchPageInput.value);
                currentSearchTerms = terms;
                const excludedTerms = parseSearchInput(excludeInput.value);

                if (terms.length === 0 && excludedTerms.length === 0) {
                     alert("Please enter some ingredients to search for or exclude.");
                     hideLoading();
                     return;
                 }
                const matchAny = document.querySelector('input[name="match-type"]:checked')?.value === 'any';
                results = performSearch(terms, matchAny);
                showPopup = (results.length === 0 && (terms.length > 0 || excludedTerms.length > 0));
                displayResults(results, terms);
                if (results.length > 0 || showPopup) {
                    navigateTo('results-page');
                }
            } catch (error) {
                console.error("Error during search button click handler:", error, error.stack);
                alert("An error occurred during the search. Please check the console for details.");
                resultsContainer.innerHTML = '<p class="error-message">Search failed due to an error. Please try again.</p>';
                navigateTo('results-page');
            } finally {
                hideLoading();
            }
        }, 50);
    });

    searchPageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); searchPageButton.click(); }
    });
    excludeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); searchPageButton.click(); }
    });

    randomMealButton.addEventListener('click', showRandomMeal);

    filterSelect.addEventListener('change', filterResults);

    appContainer.addEventListener('click', (event) => {
        const favButton = event.target.closest('.favourite-button');
        if (favButton) {
            const mealId = favButton.dataset.mealId;
            if (mealId) { toggleFavourite(mealId, favButton); }
            return;
         }
        const clickedCard = event.target.closest('.meal-card');
        if (clickedCard && !event.target.closest('.google-image-link') && !event.target.closest('.favourite-button')) {
             if (resultsContainer.contains(clickedCard) ||
                 randomMealDisplay.contains(clickedCard) ||
                 favouritesContainer.contains(clickedCard))
             {
                const mealId = clickedCard.dataset.mealId;
                if (mealId) { showOverlay(mealId); }
            }
        }
        if (event.target === mealOverlay) { hideOverlay(); }
        if (event.target === noResultsPopup) { hidePopup(); }
    });

    overlayCloseButton.addEventListener('click', hideOverlay);
    popupCloseButton.addEventListener('click', hidePopup);

    // --- Initialisation ---
    function initializeApp() {
        console.log("Initializing Meal Finder App V3.19...");
        populateFilterOptions();
        currentFavourites = getFavourites();
        navigateTo('home-page');
        // showRandomMeal(); // Optional
        console.log("Meal Finder Initialized.");
    }

    // --- Database Loading Check ---
    if (typeof window.mealDatabase !== 'undefined' && Array.isArray(window.mealDatabase)) {
         initializeApp();
    } else {
         console.error("Meal Database (window.mealDatabase) is not defined as an array. Ensure meal data scripts load and initialize it.");
         document.body.innerHTML = '<p style="color: red; padding: 20px; font-family: sans-serif; background: #333; border-radius: 5px;">Error: Could not initialize meal data structure. The application cannot start. Check console (F12).</p>';
    }

}); // End DOMContentLoaded
