document.addEventListener('DOMContentLoaded', function () {

    // Placeholder data - you might replace this with a real API call later
    const recipes = [
        { name: 'Spaghetti Carbonara', ingredients: ['pasta', 'eggs', 'cheese'] },
        { name: 'Vegetarian Pizza', ingredients: ['flour', 'tomatoes', 'cheese'] },
        // Add more recipes here
    ];

    const searchButton = document.getElementById('search-button');
    const ingredientInput = document.getElementById('ingredient-input');
    const recipesList = document.getElementById('recipes-list');

    searchButton.addEventListener('click', function() {
        searchRecipes();
    });

    ingredientInput.addEventListener('keypress', function(event) {
        // Check if the key pressed is 'Enter'
        if (event.key === 'Enter') {
            searchRecipes();
        }
    });

    function searchRecipes() {
        const enteredIngredients = ingredientInput.value.split(',').map(ingredient => ingredient.trim().toLowerCase());
        displayRecipes(enteredIngredients);
    }

    function displayRecipes(ingredients) {
        // Clear the current list
        recipesList.innerHTML = '';

        // Filter and display recipes that include the entered ingredients
        recipes.filter(recipe => {
            return ingredients.some(ingredient => recipe.ingredients.includes(ingredient));
        }).forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerText = recipe.name;
            recipesList.appendChild(recipeElement);
        });
    }
});
