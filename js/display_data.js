const portfolio_container = document.querySelector('.portfolio-container');
const portfolio_filters = document.querySelectorAll('.portfolio-item-filter');


//display portfolio items on page load
document.addEventListener('DOMContentLoaded', () => {
    displayPortfolioItems(PORTFOLIO_ITEMS);
});

//display all portfolio items
function displayAllPortfolioItems(data){
    data.forEach(item => {
        portfolio_container.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-5">
        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target=#portfolioModal${item.id}">
            <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                <i 0class="fas fa-plus fa-3x"></i>
                </div>
            </div>
                <img class="img-fluid" src="${item.image}" alt=${item.title}>
            </div>
        </div>`;
    });
}