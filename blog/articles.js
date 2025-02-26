
const articleContainer = document.querySelector(".content-wrapper");

function generateArticleHTML(article) {
    return `
        <div class="book-entry">
            <section class="review-details" tabindex="0">
                <p>${article.date}</p>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <p>${article.stars}</p>
            </section>
            <section class="book-info" tabindex="0">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description} <span class="highlight">Read More...</span></p>
            </section>
        </div>
    `;
}

articles.forEach(article => {
    articleContainer.innerHTML += generateArticleHTML(article);
});
