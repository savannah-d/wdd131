import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
        // Start building the HTML string
        let html = `<ul class="recipe__tags">`;

        // Loop through the tags list and transform the strings to HTML
        for (let tag of tags) {
            html += `<li>${tag}</li>`;
        }
    
        // Close the <ul> tag
        html += `</ul>`;

        return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        html+= i <= rating? `<span class="icon-star">⭐</span>`: `<span class="icon-star-empty">☆</span>`;
    }

    html += `</span>`;

    return html
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    const outputElement = document.querySelector(".recipe-container");

    if (!outputElement) {
        console.error("Error: Recipe container not found!");
        return;
    }

    const recipesHTML = recipeList.map(recipeTemplate).join("");

    outputElement.innerHTML = recipesHTML; 

    setTimeout(() => {
        document.querySelectorAll(".recipe").forEach(recipe => {
            recipe.classList.add("styled-recipe");
        });
    }, 0);
}

function init() {
    const recipe = getRandomListEntry(recipes);

    renderRecipes([recipe]);
}
init();

console.log("Before render:", document.querySelector(".recipe")?.getAttribute("style"));

renderRecipes([recipe]);

console.log("After render:", document.querySelector(".recipe")?.getAttribute("style"));