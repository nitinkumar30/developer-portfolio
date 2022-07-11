const portfolio_container = document.querySelector('.portfolio-container');
const portfolio_modals_container = document.querySelector('.portfolio-modals-container');
const portfolio_filters = document.querySelectorAll('.portfolio-item-filter');


//display portfolio items on page load
displayPortfolioItems(PORTFOLIO_DATA);
displayPortfolioModal(PORTFOLIO_DATA);

//display all portfolio items
function displayPortfolioItems(data){
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

//display portfolio modal for each item
function displayPortfolioModal(data){
    data.forEach(item => {     
        portfolio_modals_container.innerHTML += `
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal${item.id}" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button class="btn-close" type="button" data-bs-dismiss="modal"
                        aria-label="Close">
                    </button>
                </div>
                <div class="modal-body text-center pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                                    ${item.title}
                                </h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image-->
                                <img class="img-fluid rounded mb-5" src="${item.image}" alt=${item.title}>
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-4 text-start">
                                    ${item.description}
                                </p>
                                <button class="btn btn-primary" data-bs-dismiss="modal" onclick="openLink('${item.link}')">
                                    Demo
                                    <i class="fas fa-fw fa-angle-right"></i>
                                </button>
                                <button class="btn btn-primary" data-bs-dismiss="modal" onclick="openLink('${item.github}')">
                                    Code
                                    <i class="fa-solid fa-code ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
}

//open link in new tab
function openLink(link){
    window.open(link, '_blank');
}