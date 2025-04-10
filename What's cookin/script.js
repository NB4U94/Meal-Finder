// script.js
// Main application logic for MEAL FINDER - Version 4.0 Optimized
// Includes PWA Install Prompt Handling & Service Worker Registration

document.addEventListener('DOMContentLoaded', () => {
    console.log("Meal Finder script initializing...");

    // --- DOM Element Selection ---
    let appContainer, pages, homePage, searchPage, resultsPage, favouritesPage, recipeBookPage,
        homeSearchButton, randomMealButton, goToRecipeBookButton, randomMealDisplay,
        viewFavouritesHomeButton, searchPageInput, suggestedIngredientsAnim, matchTypeRadios,
        excludeInput, searchPageButton, viewFavouritesSearchButton, resultsContainer,
        resultsPageTitle, filterContainer, filterSelect, externalSearchContainer, externalLinksDiv,
        favouritesContainer, noFavouritesMessage, categoryContainer, backButton, mealOverlay,
        overlayCloseButton, noResultsPopup, popupCloseButton, loadingIndicator, overlayImage,
        overlayDescription, overlayTitle, overlayIngredients, overlayInstructions,
        popupExternalLinksDiv, paginationContainer, prevButton, nextButton, pageInfo,
        installPwaButton; // Added for PWA install

    try {
        // Select all elements, checking crucial ones
        appContainer = document.querySelector('.app-container');
        pages = document.querySelectorAll('.page');
        homePage = document.getElementById('home-page');
        searchPage = document.getElementById('search-page');
        resultsPage = document.getElementById('results-page');
        favouritesPage = document.getElementById('favourites-page');
        recipeBookPage = document.getElementById('recipe-book-page');
        homeSearchButton = document.getElementById('home-search-button');
        randomMealButton = document.getElementById('random-meal-button');
        goToRecipeBookButton = document.getElementById('go-to-recipe-book-button');
        randomMealDisplay = document.getElementById('random-meal-display');
        viewFavouritesHomeButton = document.getElementById('view-favourites-home-button');
        searchPageInput = document.getElementById('search-page-input');
        suggestedIngredientsAnim = document.getElementById('suggested-ingredients-animation');
        matchTypeRadios = document.querySelectorAll('input[name="match-type"]');
        excludeInput = document.getElementById('exclude-input');
        searchPageButton = document.getElementById('search-page-button');
        viewFavouritesSearchButton = document.getElementById('view-favourites-search-button');
        resultsContainer = document.getElementById('results-container');
        resultsPageTitle = document.getElementById('results-page-title');
        filterContainer = document.getElementById('filter-container');
        filterSelect = document.getElementById('filter-select');
        externalSearchContainer = document.getElementById('external-search-container');
        externalLinksDiv = document.getElementById('external-links');
        favouritesContainer = document.getElementById('favourites-container');
        noFavouritesMessage = document.getElementById('no-favourites-message');
        categoryContainer = document.getElementById('category-container');
        backButton = document.getElementById('back-button');
        mealOverlay = document.getElementById('meal-overlay');
        overlayCloseButton = document.getElementById('overlay-close-button');
        noResultsPopup = document.getElementById('no-results-popup');
        popupCloseButton = document.getElementById('popup-close-button');
        loadingIndicator = document.getElementById('loading-indicator');
        overlayImage = document.getElementById('overlay-image');
        overlayDescription = document.getElementById('overlay-description');
        installPwaButton = document.getElementById('install-pwa-button'); // Get the PWA install button

        if (mealOverlay) {
            overlayTitle = mealOverlay.querySelector('#overlay-title');
            overlayIngredients = mealOverlay.querySelector('#overlay-ingredients');
            overlayInstructions = mealOverlay.querySelector('#overlay-instructions');
        } else { console.warn("WARN: #meal-overlay missing."); }
        if (noResultsPopup) { popupExternalLinksDiv = noResultsPopup.querySelector('#popup-external-links'); } else { console.warn("WARN: #no-results-popup missing."); }
        paginationContainer = document.getElementById('pagination-container');
        if (paginationContainer) {
            prevButton = document.getElementById('prev-button');
            nextButton = document.getElementById('next-button');
            pageInfo = document.getElementById('page-info');
        } else { console.warn("WARN: #pagination-container missing."); }

        // Essential element check
        if (!appContainer || !homePage || !resultsPage || !categoryContainer || !resultsContainer || !favouritesContainer || !loadingIndicator) {
            throw new Error("Core layout elements missing. Cannot initialize app.");
        }
        // Optional element warnings
        if (!installPwaButton) { console.warn("WARN: #install-pwa-button missing. PWA install prompt UI will not appear."); }


    } catch (error) {
        console.error("CRITICAL ERROR during DOM element selection:", error);
        if (appContainer) appContainer.innerHTML = `<h1>App Initialization Failed</h1><p>Error: ${error.message}. Please check the HTML structure.</p>`;
        return; // Stop script execution if essential elements are missing
    }

    // --- State Variables ---
    let currentPageId = 'home-page';
    let pageHistory = ['home-page'];
    let currentSearchTerms = [];
    let currentDisplayContext = '';
    let currentSearchResults = [];
    let currentFavourites = [];
    let suggestedIngredientsInterval;
    const suggestedIngredients = [ "chicken", "beef", "pasta", "rice", "onions", "tomatoes", "cheese", "potatoes", "flour", "eggs", "broccoli", "carrot", "fish", "mince", "capsicum" ];
    let allMealIdsFromSource = [];
    let currentDisplayPage = 1;
    const RESULTS_PER_PAGE = 12;
    let availableCategories = [];
    let deferredInstallPrompt = null; // For PWA installation

    // --- Define Meal Type Tags & Categories ---
    const mealTypeTagsForFilter = [ 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian' ].sort();
    const desiredCategories = [ 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian' ];

    // --- API Configuration ---
    const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/";
    const API_LIST_CATEGORIES_URL = API_BASE_URL + "list.php?c=list";
    const API_FILTER_BY_CATEGORY_URL = API_BASE_URL + "filter.php?c=";
    const API_SEARCH_BY_INGREDIENT_URL = API_BASE_URL + "filter.php?i="; // Note: Only supports one ingredient
    const API_LOOKUP_BY_ID_URL = API_BASE_URL + "lookup.php?i=";
    const API_RANDOM_URL = API_BASE_URL + "random.php";

    // --- Utility Functions ---
    function showLoading() { loadingIndicator?.classList.remove('hidden-display'); }
    function hideLoading() { loadingIndicator?.classList.add('hidden-display'); }
    function cleanInputString(inputString) { return typeof inputString === 'string' ? inputString.toLowerCase().trim() : ''; }
    function parseSearchInput(inputString) { if (!inputString) { return []; } try { return inputString.toLowerCase().trim().split(/[\s,]+/).map(term => term.trim()).filter(term => term !== ''); } catch (e) { console.error("Error parsing input:", e); return []; } }
    function generateExternalLinks(terms) { if (!terms || terms.length === 0) return ''; const q = encodeURIComponent(terms.join(' ')); const s = [{ n: "Google", u: `https://www.google.com/search?q=${q}+recipe` }, { n: "Allrecipes", u: `https://www.allrecipes.com/search/results/?search=${q}` }]; return s.map(x => `<a href="${x.u}" target="_blank" rel="noopener noreferrer">${x.n}</a>`).join(''); }

    // --- API Helper Functions ---
    async function fetchFromApi(url, isSilent = false) {
        if (!isSilent) showLoading();
        try {
            const response = await fetch(url);
            if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            if (!isSilent) hideLoading();
            // Return a structure consistent with expected API responses (empty meals array)
            return { meals: [] };
        } finally {
             if (!isSilent) hideLoading();
        }
    }

    async function fetchMealById(mealId, isSilent = false) {
        const data = await fetchFromApi(API_LOOKUP_BY_ID_URL + mealId, isSilent);
        if (data?.meals?.length > 0) {
            return adaptApiMealData(data.meals[0]);
        }
        console.warn(`Meal details not found or failed to fetch for ID: ${mealId}`);
        return null;
    }

    async function fetchRandomMeal() {
        const data = await fetchFromApi(API_RANDOM_URL);
        // Return raw data, adaptation happens in the calling function
        if (data?.meals?.length > 0) {
            return data.meals[0];
        }
        return null;
    }

    function adaptApiMealData(apiMeal) {
        if (!apiMeal || !apiMeal.idMeal) { return null; }
        try {
            let ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ing = apiMeal[`strIngredient${i}`];
                const meas = apiMeal[`strMeasure${i}`];
                if (ing && ing.trim()) {
                    ingredients.push({ name: ing.trim(), measure: (meas || "").trim() });
                } else {
                    break; // Stop if no more ingredients
                }
            }
            const ingredientListForDisplay = ingredients.map(ing => `${ing.measure} ${ing.name}`.trim());

            let shortDescription = '';
            if (apiMeal.strCategory && apiMeal.strArea) { shortDescription = `${apiMeal.strCategory} | ${apiMeal.strArea}`; }
            else if (apiMeal.strCategory) { shortDescription = apiMeal.strCategory; }
            else if (apiMeal.strArea) { shortDescription = apiMeal.strArea; }
            else { shortDescription = 'Details available.'; }

            let processedTags = [];
            if (apiMeal.strTags && typeof apiMeal.strTags === 'string') {
                 processedTags = apiMeal.strTags.split(',')
                     .map(tag => tag.trim())
                     .filter(tag => tag !== '');
            }

            return {
                id: parseInt(apiMeal.idMeal),
                name: apiMeal.strMeal || "Unnamed Meal",
                shortDescription: shortDescription,
                imageUrl: apiMeal.strMealThumb || null,
                ingredients: ingredientListForDisplay, // For display in overlay
                ingredientObjects: ingredients, // For potential future use (e.g., filtering)
                instructions: apiMeal.strInstructions || "No instructions provided.",
                // Basic tags for filtering (can be expanded)
                tags: [apiMeal.strCategory, apiMeal.strArea].filter(t => t && t.trim() && t.toLowerCase() !== 'unknown'),
                processedTags: processedTags, // Parsed strTags for display
                sourceUrl: apiMeal.strSource || apiMeal.strYoutube || null
            };
        } catch (error) {
            console.error(`Error adapting data for meal ID ${apiMeal.idMeal}:`, error);
            return null; // Return null if adaptation fails
        }
    }

    // --- API Functions for Search/Browse ---
    async function fetchMealIdsByIngredient(ingredient) {
        if (!ingredient) return [];
        const data = await fetchFromApi(API_SEARCH_BY_INGREDIENT_URL + ingredient);
        return data?.meals || []; // Return array directly, handles null/undefined meals
    }

    async function fetchMealIdsByCategory(category) {
        if (!category) return [];
        const data = await fetchFromApi(API_FILTER_BY_CATEGORY_URL + category);
        return data?.meals || []; // Return array directly
    }


    // --- Navigation ---
    function navigateTo(targetPageId, isBack = false) {
        hideLoading(); // Ensure loading is hidden on navigation
        const targetPageElement = document.getElementById(targetPageId);
        if (!targetPageElement) {
            console.error(`ERROR: Cannot navigate to missing page ID: ${targetPageId}`);
            return;
        }

        // Avoid unnecessary actions if already on the target page
        if (currentPageId === targetPageId && targetPageElement.classList.contains('active')) {
            return;
        }

        // Update history if navigating forward to a new page
        if (!isBack && pageHistory[pageHistory.length - 1] !== targetPageId) {
            pageHistory.push(targetPageId);
            // Limit history size
            if (pageHistory.length > 10) pageHistory.shift();
        }

        // Hide current page
        const currentPageElement = document.getElementById(currentPageId);
        if (currentPageElement && currentPageElement !== targetPageElement) {
            currentPageElement.classList.remove('active');
            // Use transitionend event for better reliability than setTimeout
            currentPageElement.addEventListener('transitionend', () => {
                 if (!currentPageElement.classList.contains('active')) { // Double check state
                     currentPageElement.classList.add('hidden-display');
                 }
            }, { once: true });
             // Fallback if transition doesn't fire (e.g., element removed quickly)
            setTimeout(() => {
                if (!currentPageElement.classList.contains('active')) {
                    currentPageElement.classList.add('hidden-display');
                }
            }, 600); // Slightly longer than CSS transition
        }

        // Show target page
        targetPageElement.classList.remove('hidden-display'); // Make it available for layout
        // Use requestAnimationFrame to ensure 'display' change is processed before adding 'active' class for transition
        requestAnimationFrame(() => {
            targetPageElement.classList.add('active');
        });

        currentPageId = targetPageId;

        // Update back button visibility
        if (backButton) {
            if (pageHistory.length > 1) {
                backButton.classList.remove('hidden-display');
            } else {
                backButton.classList.add('hidden-display');
            }
        }

        // Page specific actions
        if (currentPageId === 'search-page') startSearchAnimation(); else stopSearchAnimation();
        if (targetPageId === 'recipe-book-page') { fetchAndDisplayCategories(); }
        if (targetPageId === 'favourites-page') { displayFavourites(); } // Load favourites when navigating TO favourites page

        window.scrollTo(0, 0); // Scroll to top on navigation
    }

    function goBack() {
        if (pageHistory.length > 1) {
            pageHistory.pop(); // Remove current page from history
            navigateTo(pageHistory[pageHistory.length - 1], true); // Navigate to the previous one
        } else if (currentPageId !== 'home-page') {
            // If history is empty but not on home, go home
            navigateTo('home-page', true);
        }
    }

    // Placeholder for search animation logic
    function startSearchAnimation() { /* ... implement if needed ... */ }
    function stopSearchAnimation() {
        if (suggestedIngredientsInterval) {
            clearInterval(suggestedIngredientsInterval);
            suggestedIngredientsInterval = null;
        }
        if (suggestedIngredientsAnim) { suggestedIngredientsAnim.innerHTML = ''; }
    }


    // --- UI Display Functions ---

    function createMealCard(meal) {
        // Basic validation
        if (!meal || typeof meal.id === 'undefined' || typeof meal.name === 'undefined') {
            console.error("[createMealCard] Invalid meal data provided:", meal);
            return '<p class="error-message">Error: Could not display meal card due to invalid data.</p>';
        }

        const isFavourite = currentFavourites.includes(meal.id);
        const favClass = isFavourite ? 'favourite-button active' : 'favourite-button';
        const favTitle = isFavourite ? 'Remove from Favourites' : 'Add to Favourites';

        try {
            const name = meal.name || "Unnamed Meal";
            const desc = meal.shortDescription || 'Tap or click for details.';
            const id = meal.id;
            let imgHtml = '';

            // Image handling
            if (meal.imageUrl) {
                const fullImageUrl = meal.imageUrl.replace(/\/preview$/, ''); // Attempt to get full size
                // Added error handling for image loading
                imgHtml = `<div class="meal-card-image-container">
                           <a href="${fullImageUrl || meal.imageUrl}" target="_blank" rel="noopener noreferrer" title="View full image">
                             <img src="${meal.imageUrl}" alt="${name}" class="meal-card-image" loading="lazy" onerror="this.parentElement.innerHTML='<p>Image unavailable</p>';">
                           </a>
                         </div>`;
            } else {
                imgHtml = '<div class="meal-card-image-container"><p>No Image</p></div>';
            }

            // Tags handling
            let tagsHtml = '';
            if (meal.processedTags && meal.processedTags.length > 0) {
                tagsHtml = `<div class="meal-card-tags">
                              ${meal.processedTags.map(tag => `<span class="tag-item">${tag}</span>`).join('')}
                            </div>`;
            }

            // Final Card HTML
            return `<article class="meal-card" data-meal-id="${id}" tabindex="0" role="listitem" aria-labelledby="meal-title-${id}">
                      <div class="meal-card-header">
                        <div class="card-logo logo logo-small" aria-hidden="true"><span>M</span></div>
                        <h3 id="meal-title-${id}">${name}</h3>
                        <button class="${favClass}" data-meal-id="${id}" title="${favTitle}" aria-label="${favTitle}"></button>
                      </div>
                      <div class="meal-card-content">
                        ${imgHtml}
                        <p class="meal-card-description">${desc}</p>
                        ${tagsHtml}
                      </div>
                    </article>`;

        } catch (e) {
            console.error(`ERROR creating card HTML for meal ID ${meal?.id}:`, e);
            return `<p class="error-message">Error displaying meal (ID: ${meal?.id}).</p>`; // Provide specific error feedback
        }
    }

    function populateFilterOptions() {
        if (!filterSelect) { console.warn("WARN: filterSelect element missing, cannot populate."); return; }
        try {
            const currentFilterValue = filterSelect.value; // Store current selection
            filterSelect.innerHTML = ''; // Clear existing options

            // Add "Show All" option
            const allOption = document.createElement('option');
            allOption.value = 'all';
            allOption.textContent = 'Show All';
            filterSelect.appendChild(allOption);

            // Add options from predefined list
            mealTypeTagsForFilter.forEach(tag => {
                if (tag && tag.trim()) {
                    const option = document.createElement('option');
                    option.value = tag;
                    option.textContent = tag;
                    filterSelect.appendChild(option);
                }
            });

            // Restore previous selection if still valid, otherwise default to 'all'
            const validValues = ['all', ...mealTypeTagsForFilter];
            filterSelect.value = validValues.includes(currentFilterValue) ? currentFilterValue : 'all';

        } catch (e) {
            console.error("Error populating filter options:", e);
            if (filterSelect) filterSelect.innerHTML = '<option value="all">Error loading filters</option>'; // User feedback
        }
    }

    function filterResults() {
        if (!filterSelect || !resultsContainer) return;

        try {
            const selectedFilter = filterSelect.value.toLowerCase();
            const mealCards = resultsContainer.querySelectorAll('.meal-card');

            if (mealCards.length === 0) return; // No cards to filter

            let visibleCount = 0;
            mealCards.forEach(card => {
                const mealId = parseInt(card.dataset.mealId);
                if (isNaN(mealId)) {
                    card.classList.add('hidden-display'); // Hide invalid cards
                    return;
                }

                // Find the corresponding meal data in the current results
                const mealData = currentSearchResults.find(meal => meal && meal.id === mealId);
                if (!mealData) {
                    card.classList.add('hidden-display'); // Hide if data not found
                    return;
                };

                // Determine if the card should be shown based on the filter
                let showCard = (selectedFilter === 'all') ||
                               (mealData.tags && Array.isArray(mealData.tags) &&
                                mealData.tags.some(tag => tag && tag.toLowerCase() === selectedFilter));

                // Toggle visibility using classes
                if (showCard) {
                    card.classList.remove('hidden-display');
                    visibleCount++;
                } else {
                    card.classList.add('hidden-display');
                }
            });
             // console.log(`Filter applied: ${visibleCount} cards visible for '${selectedFilter}'`);

        } catch (e) {
            console.error("Error applying filter:", e);
            // Potentially show an error message to the user
        }
    }

    function displayResults(mealIdList, contextTitle, isSearch = true) {
        currentSearchResults = []; // Clear previous results data
        allMealIdsFromSource = mealIdList || []; // Store all IDs from the source (API response)
        currentDisplayPage = 1; // Reset to page 1
        currentDisplayContext = contextTitle || (isSearch ? 'Search Results' : 'Category'); // Set context title

        if (resultsPageTitle) {
            resultsPageTitle.textContent = currentDisplayContext;
            resultsPageTitle.classList.remove('hidden-display');
        } else { console.warn("WARN: resultsPageTitle missing"); }

        if (!resultsContainer) { console.error("CRITICAL: resultsContainer is null. Cannot display results."); hideLoading(); return; }
        resultsContainer.innerHTML = ''; // Clear previous content immediately

        // Reset related UI elements
        externalSearchContainer?.classList.add('hidden-display');
        hidePopup(); // Hide the 'no results' popup if it was open

        if (filterContainer) {
            if (isSearch && allMealIdsFromSource.length > 0) {
                filterContainer.classList.remove('hidden-display');
                if (filterSelect) {
                    populateFilterOptions(); // Repopulate and reset filter
                    filterSelect.value = 'all';
                }
            } else {
                filterContainer.classList.add('hidden-display');
            }
        } else { console.warn("WARN: filterContainer missing."); }

        paginationContainer?.classList.add('hidden-display'); // Hide pagination initially

        // --- Display Logic ---
        if (allMealIdsFromSource.length > 0) {
            displayPaginatedResults(); // Fetch and display the first page
            // Show external links only for searches with terms and results
            if (isSearch && currentSearchTerms.length > 0 && externalLinksDiv && externalSearchContainer) {
                 externalLinksDiv.innerHTML = generateExternalLinks(currentSearchTerms);
                 externalSearchContainer.classList.remove('hidden-display');
            }
        } else {
            // --- No Results Handling ---
            if (resultsPageTitle) resultsPageTitle.textContent = `No Meals Found for "${contextTitle}"`;

            if (isSearch && currentSearchTerms.length > 0) {
                // Show popup with external links for searches
                if (popupExternalLinksDiv && noResultsPopup) {
                    popupExternalLinksDiv.innerHTML = generateExternalLinks(currentSearchTerms);
                    noResultsPopup.classList.remove('hidden-visually'); // Use visibility class
                    noResultsPopup.classList.add('active');
                } else {
                    // Fallback message if popup elements are missing
                    resultsContainer.innerHTML = '<p>Sorry, no meals found matching your search terms.</p>';
                }
            } else {
                // Simple message for categories with no results
                resultsContainer.innerHTML = `<p>No meals found in the category: "${contextTitle}".</p>`;
            }
            hideLoading();
        }
    }


    async function displayPaginatedResults() {
        if (!resultsContainer) return;
        showLoading();
        resultsContainer.innerHTML = ''; // Clear container for new page

        const startIndex = (currentDisplayPage - 1) * RESULTS_PER_PAGE;
        const endIndex = startIndex + RESULTS_PER_PAGE;
        const mealIdsToFetch = allMealIdsFromSource.slice(startIndex, endIndex);

        if (mealIdsToFetch.length === 0) {
            resultsContainer.innerHTML = "<p>No more meals to display for this page.</p>"; // Should ideally not happen if pagination logic is correct
            hideLoading();
            updatePaginationButtons();
            return;
        }

        // Fetch details for the current page's meals
        // Use isSilent = true for fetchMealById to avoid multiple loading indicators
        const mealDetailPromises = mealIdsToFetch.map(stub => fetchMealById(stub.idMeal, true));
        const results = await Promise.allSettled(mealDetailPromises);

        // Filter out failed requests and extract successful meal data
        currentSearchResults = results
            .filter(result => result.status === 'fulfilled' && result.value)
            .map(result => result.value);

        if (currentSearchResults.length > 0) {
            const cardsHtml = currentSearchResults.map(meal => createMealCard(meal) || '').join('');
            resultsContainer.innerHTML = cardsHtml;

            // Apply entrance animation to newly added cards
            resultsContainer.querySelectorAll('.meal-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.05}s`; // Stagger animation
                card.classList.add('card-enter-animation');
                // Optional: Remove animation class after it finishes
                card.addEventListener('animationend', () => {
                    card.classList.remove('card-enter-animation');
                    card.style.animationDelay = ''; // Clean up style
                }, { once: true });
            });

            filterResults(); // Apply current filter to the new page results

        } else {
            resultsContainer.innerHTML = "<p>Error loading meal details for this page.</p>";
            console.error("Failed to fetch details for meal IDs:", mealIdsToFetch.map(stub => stub.idMeal));
        }

        hideLoading();
        updatePaginationButtons(); // Update pagination state after loading page
    }


    function updatePaginationButtons() {
        if (!paginationContainer || !prevButton || !nextButton || !pageInfo) {
            paginationContainer?.classList.add('hidden-display'); // Hide if elements are missing
            return;
        }

        const totalResults = allMealIdsFromSource.length;
        const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

        if (totalPages > 1) {
            paginationContainer.classList.remove('hidden-display'); // Show pagination
            prevButton.disabled = (currentDisplayPage <= 1);
            nextButton.disabled = (currentDisplayPage >= totalPages);
            pageInfo.textContent = `Page ${currentDisplayPage} of ${totalPages}`;
        } else {
            paginationContainer.classList.add('hidden-display'); // Hide if only one page or less
        }
    }

    function handleNextPage() {
        const totalPages = Math.ceil(allMealIdsFromSource.length / RESULTS_PER_PAGE);
        if (currentDisplayPage < totalPages) {
            currentDisplayPage++;
            displayPaginatedResults();
            window.scrollTo(0, 0); // Scroll to top
        }
    }

    function handlePrevPage() {
        if (currentDisplayPage > 1) {
            currentDisplayPage--;
            displayPaginatedResults();
            window.scrollTo(0, 0); // Scroll to top
        }
    }

    // --- Favourites Functions ---
    function getFavourites() {
        try {
            const favouritesJson = localStorage.getItem('mealFinderFavourites');
            const parsedFavourites = favouritesJson ? JSON.parse(favouritesJson) : [];
            // Ensure it's an array of valid numbers
            return Array.isArray(parsedFavourites) ? parsedFavourites.map(id => parseInt(id)).filter(id => !isNaN(id)) : [];
        } catch (e) {
            console.error("Error reading favourites from localStorage:", e);
            return []; // Return empty array on error
        }
    }

    function saveFavourites(favouritesArray) {
        try {
            // Ensure unique, valid numbers before saving
            const uniqueValidFavourites = [...new Set(favouritesArray)]
                .map(id => parseInt(id))
                .filter(id => !isNaN(id));
            localStorage.setItem('mealFinderFavourites', JSON.stringify(uniqueValidFavourites));
            currentFavourites = uniqueValidFavourites; // Update in-memory state
            // console.log("DEBUG: Favourites saved:", uniqueValidFavourites);
        } catch (e) {
            console.error("Error saving favourites to localStorage:", e);
            alert("Could not save favourites state."); // Inform user
        }
    }

    function toggleFavourite(mealId, buttonElement) {
        const id = parseInt(mealId);
        if (isNaN(id)) {
            console.error("Invalid meal ID passed to toggleFavourite:", mealId);
            return;
        }

        let currentFavs = getFavourites();
        const isCurrentlyFavourite = currentFavs.includes(id);
        let isNowActive;

        if (isCurrentlyFavourite) {
            // Remove from favourites
            currentFavs = currentFavs.filter(favId => favId !== id);
            isNowActive = false;
        } else {
            // Add to favourites
            currentFavs.push(id);
            isNowActive = true;
        }

        saveFavourites(currentFavs); // Save the updated array

        // Update all buttons matching this meal ID on the current page
        const allMatchingButtons = document.querySelectorAll(`.favourite-button[data-meal-id="${id}"]`);
        allMatchingButtons.forEach(btn => {
            btn.classList.toggle('active', isNowActive);
            const newTitle = isNowActive ? 'Remove from Favourites' : 'Add to Favourites';
            btn.title = newTitle;
            btn.setAttribute('aria-label', newTitle);

            // Trigger animation only when adding
            if (isNowActive && !isCurrentlyFavourite) {
                 // Force reflow/restart animation
                 btn.style.animation = 'none';
                 requestAnimationFrame(() => {
                     requestAnimationFrame(() => { // Nested RAF might help ensure style is applied
                          btn.style.animation = '';
                     });
                 });
            }
        });

        // If on the favourites page, refresh the list immediately
        if (currentPageId === 'favourites-page') {
            displayFavourites();
        }
    }

    async function displayFavourites() {
        if (!favouritesContainer || !noFavouritesMessage) { console.error("ERROR: Favourites page elements missing."); return; }

        showLoading();
        favouritesContainer.innerHTML = ''; // Clear previous content
        noFavouritesMessage.classList.add('hidden-display'); // Hide 'no favourites' message initially

        currentFavourites = getFavourites(); // Get the latest list

        if (currentFavourites.length === 0) {
            noFavouritesMessage.classList.remove('hidden-display'); // Show message
            hideLoading();
            return;
        }

        // Fetch details for all favourite meals
        const favouriteMealPromises = currentFavourites.map(id => fetchMealById(id, true)); // Use silent fetch
        const results = await Promise.allSettled(favouriteMealPromises);

        const favouriteMealData = results
            .filter(result => result.status === 'fulfilled' && result.value)
            .map(result => result.value);

        if (favouriteMealData.length > 0) {
            const cardsHtml = favouriteMealData.map(meal => createMealCard(meal) || '').join('');
            favouritesContainer.innerHTML = cardsHtml;

            // Apply entrance animation
            favouritesContainer.querySelectorAll('.meal-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.05}s`;
                card.classList.add('card-enter-animation');
                 card.addEventListener('animationend', () => {
                     card.classList.remove('card-enter-animation');
                     card.style.animationDelay = '';
                 }, { once: true });
            });
        } else {
            console.warn("WARN: No favourite meals displayed after fetch attempt.");
            noFavouritesMessage.textContent = "Could not load details for saved favourites.";
            noFavouritesMessage.classList.remove('hidden-display');
            if (currentFavourites.length > 0 && favouriteMealData.length === 0) {
                console.error("Error: Favourite IDs exist but failed to fetch details:", currentFavourites);
            }
        }
        hideLoading();
    }

    function handleViewFavouritesClick() {
        navigateTo('favourites-page');
        // displayFavourites() is now called within navigateTo if targetPageId === 'favourites-page'
    }


    // --- Overlay ---
    async function showOverlay(mealId) {
         if (!mealOverlay || !overlayTitle || !overlayIngredients || !overlayInstructions || !overlayImage || !overlayDescription) {
             console.error("ERROR: Meal overlay elements missing.");
             return;
         }

         showLoading();
         const meal = await fetchMealById(mealId, true); // Use silent fetch
         hideLoading();

         if (meal) {
             overlayTitle.textContent = meal.name || 'Meal Details';

             // Image display
             if (meal.imageUrl && overlayImage) {
                 const fullImageUrl = meal.imageUrl.replace(/\/preview$/, '');
                 overlayImage.src = fullImageUrl || meal.imageUrl; // Use preview as fallback
                 overlayImage.alt = meal.name; // Important for accessibility
                 overlayImage.classList.remove('hidden-display');
             } else if (overlayImage) {
                 overlayImage.classList.add('hidden-display'); // Hide if no image
             }

             // Description display
             if (meal.shortDescription && overlayDescription) {
                 overlayDescription.textContent = meal.shortDescription;
                 overlayDescription.classList.remove('hidden-display');
             } else if (overlayDescription) {
                 overlayDescription.classList.add('hidden-display'); // Hide if no description
             }

             // Ingredients display with highlighting
             overlayIngredients.innerHTML = ''; // Clear previous ingredients
             if (meal.ingredients && meal.ingredients.length > 0) {
                 meal.ingredients.forEach(ingredientString => {
                     const li = document.createElement('li');
                     li.textContent = ingredientString;
                     // Highlight if ingredient matches current search terms
                     const isHighlighted = currentSearchTerms.some(term =>
                         cleanInputString(ingredientString).includes(cleanInputString(term))
                     );
                     if (isHighlighted) {
                         li.classList.add('highlighted');
                     }
                     overlayIngredients.appendChild(li);
                 });
             } else {
                 overlayIngredients.innerHTML = '<li>Ingredients not available.</li>';
             }

             // Instructions display
             overlayInstructions.textContent = meal.instructions || 'Instructions not available.';

             // Show the overlay
             mealOverlay.classList.remove('hidden-visually');
             mealOverlay.classList.add('active');
             overlayCloseButton?.focus(); // Set focus to close button for accessibility

         } else {
             alert("Sorry, could not load the details for this meal."); // User feedback
             console.error(`Failed to fetch or adapt meal data for ID: ${mealId}`);
         }
    }

    function hideOverlay() {
        if (mealOverlay) {
            mealOverlay.classList.remove('active');
             // Wait for transition to finish before setting visibility: hidden
             mealOverlay.addEventListener('transitionend', () => {
                 if (!mealOverlay.classList.contains('active')) { // Check state again
                     mealOverlay.classList.add('hidden-visually');
                 }
             }, { once: true });
             // Fallback
             setTimeout(() => {
                 if (!mealOverlay.classList.contains('active')) {
                     mealOverlay.classList.add('hidden-visually');
                 }
             }, 600);
        }
    }

    function hidePopup() {
        if (noResultsPopup) {
            noResultsPopup.classList.remove('active');
            noResultsPopup.addEventListener('transitionend', () => {
                if (!noResultsPopup.classList.contains('active')) {
                    noResultsPopup.classList.add('hidden-visually');
                }
            }, { once: true });
            // Fallback
             setTimeout(() => {
                 if (!noResultsPopup.classList.contains('active')) {
                     noResultsPopup.classList.add('hidden-visually');
                 }
             }, 600);
        }
    }

    // --- Recipe Book Functions ---
    async function fetchAndDisplayCategories() {
        if (!categoryContainer) { console.error("ERROR: Category container missing."); return; }

        showLoading();
        categoryContainer.innerHTML = '<p>Loading categories...</p>'; // Initial loading message

        const data = await fetchFromApi(API_LIST_CATEGORIES_URL, true); // Silent fetch

        if (data?.meals?.length > 0) {
            // Filter fetched categories against the desired list and sort
            availableCategories = data.meals
                .map(cat => cat.strCategory)
                .filter(catName => desiredCategories.includes(catName))
                .sort();

            if (availableCategories.length > 0) {
                categoryContainer.innerHTML = ''; // Clear loading message
                availableCategories.forEach((categoryName, index) => {
                    const card = document.createElement('article');
                    card.className = 'category-card category-card-enter'; // Add entrance animation class
                    card.dataset.categoryName = categoryName;
                    card.tabIndex = 0;
                    card.setAttribute('role', 'button');
                    card.setAttribute('aria-label', `View ${categoryName} recipes`);
                    card.innerHTML = `<h3>${categoryName}</h3>`;

                    // Apply staggered animation delay
                    card.style.transitionDelay = `${index * 0.07}s`;

                    categoryContainer.appendChild(card);

                    // Trigger the animation by adding the active class after a frame
                     requestAnimationFrame(() => {
                         card.classList.add('category-card-enter-active');
                     });
                });
            } else {
                categoryContainer.innerHTML = '<p>No recipe categories found matching the desired list.</p>';
            }
        } else {
            categoryContainer.innerHTML = '<p>Error loading recipe categories from the API.</p>';
            console.error("Failed to fetch or parse categories:", data);
        }
        hideLoading();
    }

     async function handleCategoryClick(categoryName) {
        if (!categoryName) return;
        showLoading();
        currentSearchTerms = []; // Reset search terms when Browse category
        try {
            const mealStubs = await fetchMealIdsByCategory(categoryName);
            // Display results (even if empty) and navigate
            displayResults(mealStubs, `${categoryName} Recipes`, false); // isSearch = false
            navigateTo('results-page');
        } catch (e) {
            console.error(`Error fetching recipes for category ${categoryName}:`, e);
            hideLoading();
            alert(`Sorry, could not load recipes for the ${categoryName} category.`);
            // Optionally navigate to an error state or back
        }
     }

    // --- Random Meal Function ---
    async function executeShowRandomMeal() {
        if (!randomMealDisplay) { console.error("ERROR: #random-meal-display element missing!"); return; }
        randomMealDisplay.innerHTML = ''; // Clear previous random meal
        showLoading();

        let rawApiData = null;
        let adaptedMealData = null;

        try {
            rawApiData = await fetchRandomMeal();
            if (!rawApiData) throw new Error("No meal data returned from random API call.");
        } catch (fetchError) {
            console.error("ERROR fetching random meal data:", fetchError);
            hideLoading();
            randomMealDisplay.innerHTML = "<p>Oops! Couldn't fetch a random meal right now.</p>";
            return;
        }

        try {
            adaptedMealData = adaptApiMealData(rawApiData);
            if (!adaptedMealData) throw new Error("Failed to adapt the fetched random meal data.");
        } catch (adaptError) {
            console.error("ERROR adapting random meal data:", adaptError);
            hideLoading();
            randomMealDisplay.innerHTML = "<p>Error processing the random meal data.</p>";
            return;
        }

        // Check if adaptation was successful and we have an ID
        if (adaptedMealData?.id) {
            hideLoading();
            currentFavourites = getFavourites(); // Ensure favourites are up-to-date
            let cardHTML = '';
            try {
                cardHTML = createMealCard(adaptedMealData);
                if (cardHTML.includes('error-message')) { // Check if createMealCard returned an error string
                    throw new Error("createMealCard returned an error message string.");
                }
            } catch(cardCreateError) {
                console.error("ERROR calling createMealCard from executeShowRandomMeal:", cardCreateError);
                cardHTML = `<p>Error displaying the random meal details.</p>`;
            }

            // Render the card (even if it's an error message)
            try {
                randomMealDisplay.innerHTML = cardHTML;
            } catch (renderError){
                console.error("ERROR assigning random meal HTML to display area:", renderError);
                randomMealDisplay.innerHTML = "<p>Error rendering the meal card.</p>"; // Final fallback render error
            }

            // Apply animation if rendering was successful (not an error paragraph)
            if (!cardHTML.startsWith('<p class="error-message"')) {
                const cardElement = randomMealDisplay.querySelector('.meal-card');
                if (cardElement) {
                    cardElement.style.animationDelay = '0s'; // Start immediately
                    cardElement.classList.add('card-enter-animation');
                    // Clean up animation class after completion
                    cardElement.addEventListener('animationend', () => {
                         cardElement.classList.remove('card-enter-animation');
                         cardElement.style.animationDelay = '';
                    }, { once: true });
                } else {
                    console.warn("WARN in executeShowRandomMeal: .meal-card element not found after rendering.");
                }
            }
        } else {
            // Handle case where adaptation failed silently or meal had no ID
            hideLoading();
            randomMealDisplay.innerHTML = "<p>Could not get valid random meal data.</p>";
            console.error("ERROR: Invalid adapted meal data after successful fetch.", adaptedMealData);
        }
    }


    // --- Event Listeners Setup ---
    function addEventListeners() {
        // Navigation Buttons
        homeSearchButton?.addEventListener('click', () => {
            navigateTo('search-page');
            if (searchPageInput) searchPageInput.value = '';
            if (excludeInput) excludeInput.value = '';
            searchPageInput?.focus(); // Focus input on navigating to search
        });
        viewFavouritesHomeButton?.addEventListener('click', handleViewFavouritesClick);
        viewFavouritesSearchButton?.addEventListener('click', handleViewFavouritesClick);
        backButton?.addEventListener('click', goBack);
        goToRecipeBookButton?.addEventListener('click', () => navigateTo('recipe-book-page'));

        // Search Functionality
        searchPageButton?.addEventListener('click', async () => {
            if (!searchPageInput) { console.warn("WARN: Search input missing."); return; }
            const searchTerms = parseSearchInput(searchPageInput.value);
            currentSearchTerms = searchTerms; // Store for highlighting etc.

            if (searchTerms.length === 0) {
                alert("Please enter at least one ingredient to search for.");
                return;
            }

            // --- SEARCH LOGIC LIMITATION ---
            // The TheMealDB API endpoint filter.php?i= only supports searching by ONE ingredient.
            // This implementation currently uses only the FIRST term entered.
            // The "Match All/Any" and "Exclude Ingredients" options are NOT functional
            // with this basic API endpoint and would require multiple API calls + client-side filtering.
            const primaryIngredient = searchTerms[0];
            // --- END OF LIMITATION NOTE ---

            showLoading();
            try {
                const mealStubs = await fetchMealIdsByIngredient(primaryIngredient);
                displayResults(mealStubs, `Results for: "${searchTerms.join(', ')}"`, true); // isSearch = true
                navigateTo('results-page');
            } catch (e) {
                console.error("Search API call error:", e);
                hideLoading();
                alert(`Search failed: ${e.message}. Please try again later.`);
                // Optionally navigate to results page with an error message
                if(resultsContainer) resultsContainer.innerHTML = '<p>The search request failed.</p>';
                navigateTo('results-page');
            }
        });

        // Allow Enter key submission for search
        searchPageInput?.addEventListener('keypress', (e) => {
             if (e.key === 'Enter') { e.preventDefault(); searchPageButton?.click(); }
        });
        excludeInput?.addEventListener('keypress', (e) => {
             if (e.key === 'Enter') { e.preventDefault(); searchPageButton?.click(); }
        });


        // Random Meal Button
        randomMealButton?.addEventListener('click', executeShowRandomMeal);

        // Filter Dropdown
        filterSelect?.addEventListener('change', filterResults);

        // Pagination Buttons
        nextButton?.addEventListener('click', handleNextPage);
        prevButton?.addEventListener('click', handlePrevPage);

        // Category Card Clicks (Event Delegation)
        categoryContainer?.addEventListener('click', (event) => {
            const categoryCard = event.target.closest('.category-card');
            if (categoryCard && categoryCard.dataset.categoryName) {
                handleCategoryClick(categoryCard.dataset.categoryName);
            }
        });
        // Allow Enter key activation for category cards
        categoryContainer?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') { // Add spacebar activation
                 const categoryCard = event.target.closest('.category-card');
                 if (categoryCard && categoryCard.dataset.categoryName) {
                      event.preventDefault(); // Prevent scrolling on spacebar
                      handleCategoryClick(categoryCard.dataset.categoryName);
                 }
             }
         });

        // Global Click Handler (Event Delegation on App Container)
        appContainer?.addEventListener('click', async (event) => {
            // Favourite Button Click
            const favouriteButton = event.target.closest('.favourite-button');
            if (favouriteButton) {
                event.stopPropagation(); // Prevent card click from firing
                const mealId = favouriteButton.dataset.mealId;
                if (mealId) {
                    toggleFavourite(mealId, favouriteButton); // Pass button for context if needed
                }
                return; // Handled favourite click
            }

            // Meal Card Click (excluding links and favourite button)
            const mealCard = event.target.closest('.meal-card');
            if (mealCard && !event.target.closest('a') && !event.target.closest('.favourite-button')) {
                // Check if the card is within a container where clicks should open the overlay
                 const isInResults = resultsContainer?.contains(mealCard);
                 const isInRandom = randomMealDisplay?.contains(mealCard);
                 const isInFavourites = favouritesContainer?.contains(mealCard);

                 if (isInResults || isInRandom || isInFavourites) {
                      const mealId = mealCard.dataset.mealId;
                      if (mealId) {
                           await showOverlay(mealId);
                      }
                 }
                 return; // Handled card click
             }

             // Overlay Background Click (to close)
             if (event.target === mealOverlay) {
                 hideOverlay();
                 return;
             }

             // Popup Background Click (to close)
             if (event.target === noResultsPopup) {
                 hidePopup();
                 return;
             }
        });

        // Explicit Close Buttons
        overlayCloseButton?.addEventListener('click', hideOverlay);
        popupCloseButton?.addEventListener('click', hidePopup);

        // --- PWA Install Prompt Listener ---
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('beforeinstallprompt event fired');
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredInstallPrompt = e;
            // Update UI notify the user they can install the PWA
            if (installPwaButton) {
                installPwaButton.classList.remove('hidden-display');
                console.log('Install button shown.');
            } else {
                console.log('Install button not found, cannot show prompt UI.');
            }
        });

        installPwaButton?.addEventListener('click', async () => {
            if (!deferredInstallPrompt) {
                console.log('Install prompt event not available.');
                return;
            }
            // Hide the app provided install promotion
            installPwaButton.classList.add('hidden-display');
            // Show the install prompt
            deferredInstallPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredInstallPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            // We've used the prompt, and can't use it again, throw it away
            deferredInstallPrompt = null;
        });

        window.addEventListener('appinstalled', () => {
             console.log('PWA was installed');
             // Hide the install button permanently or update UI
             installPwaButton?.classList.add('hidden-display');
             deferredInstallPrompt = null; // Clear the prompt event
        });


        console.log("All event listeners added.");
    }

    // --- Initialisation ---
    function initializeApp() {
        console.log("Initializing Meal Finder App...");
        // Check core elements again before proceeding
        if (!appContainer || !homePage || !resultsPage || !categoryContainer || !resultsContainer || !favouritesContainer || !loadingIndicator) {
             console.error("CRITICAL ERROR: Core elements check failed during initialization.");
             if(appContainer) appContainer.innerHTML = '<h1>App Initialization Failed</h1><p>Critical elements missing. Check console.</p>';
             return;
        }

        try {
            currentFavourites = getFavourites(); // Load favourites on startup
        } catch(e) {
            console.error("ERROR loading initial favourites:", e);
            currentFavourites = [];
        }

        // Initial UI setup
        if (filterSelect) { populateFilterOptions(); } else { console.warn("WARN: Filter select missing, cannot populate initially."); }
        navigateTo('home-page'); // Start on the home page
        addEventListeners(); // Add all event listeners

        // --- Register Service Worker ---
        // Added this block at the end of initialization
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => { // Register after page load
                navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(error => {
                        console.error('ServiceWorker registration failed: ', error);
                    });
            });
        } else {
            console.log('Service workers are not supported by this browser.');
        }
        // --- End Service Worker Registration ---


        console.log("Meal Finder Initialized Successfully.");
    }

    initializeApp(); // Start the App!

}); // End DOMContentLoaded