const portfolio_container = document.querySelector('.portfolio-container');
const portfolio_modals_container = document.querySelector('.portfolio-modals-container');
const portfolio_filters = document.querySelectorAll('.portfolio-item-filter');
const skills_container = document.querySelector('.skills-container');


//display portfolio items on page load
document.addEventListener('DOMContentLoaded', () => {
    displayPortfolioItems(PORTFOLIO_DATA);
    displayPortfolioModal(PORTFOLIO_DATA);
    displaySkills(SKILLS_DATA);
});

//display all portfolio items
function displayPortfolioItems(data) {
    data.forEach(item => {
        portfolio_container.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-5 portfolio-item">
            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${item.id}">
                <div
                    class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                    <img class="img-fluid" src="${item.image}" alt=${item.title} style="height: 288.883px; object-fit: cover;">
                </div>
            </div>
        </div>`;
    });
}

//display portfolio modal for each item
function displayPortfolioModal(data) {
    data.forEach(item => {
        portfolio_modals_container.innerHTML += `
        <div class="portfolio-modal modal fade" id="portfolioModal${item.id}" tabindex="-1" aria-labelledby="portfolioModal${item.id}" aria-hidden="true">
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
                                <h2 class="text-secondary text-uppercase mb-0">
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
                                <!-- Technology used-->
                                <div class="col-lg-12 mb-3 d-flex justify-content-center flex-wrap gap-2">
                                    ${
                                        item.tech.map(tech => {
                                            return `<span class="bg-primary text-white rounded-pill px-4 py-1 mb-3">${tech}</span>`;
                                        }).join('')
                                    }
                                </div>
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-4 text-start">
                                    ${item.description}
                                </p>
                                <button class="btn btn-primary" data-bs-dismiss="modal" onclick="openLink('${item.preview}')">
                                    Demo
                                    <i class="fas fa-fw fa-angle-right"></i>
                                </button>
                                <button class="btn btn-primary" data-bs-dismiss="modal" onclick="openLink('${item.link}')">
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

//Display skills
function displaySkills(data) {
    for (let i = 0; i < data.length; i++) {
        if(i > 3){
            const col = document.createElement('div');
            col.classList.add('col-md-6');
            col.innerHTML += `
            <div class="progress">
                <div class="progress-bar" style="width:60%; background: ${data[i].color}">
                    <h3 class="progress-title">${data[i].title}</h3>
                    <div class="progress-value">${data[i].percentage}%</div>
                </div>
            </div>`;
            skills_container.appendChild(col);
        }else{
            const col = document.createElement('div');
            col.classList.add('col-md-6');
            col.innerHTML += `
                <div class="progress">
                    <div class="progress-bar" style="width:60%; background: ${data[i].color}">
                        <h3 class="progress-title">${data[i].title}</h3>
                        <div class="progress-value">${data[i].percentage}%</div>
                    </div>
                </div>`;
            skills_container.appendChild(col);
        }
    }
}

//open link in new tab
function openLink(link) {
    window.open(link, '_blank');
}

//filter portfolio items by category
portfolio_filters.forEach(filter => {
    filter.addEventListener('click', () => {
        portfolio_container.innerHTML = '';
        portfolio_modals_container.innerHTML = '';
        const category = filter.getAttribute('data-filter');

        //add active class to selected filter
        portfolio_filters.forEach(filter => {
            filter.classList.remove('active');
        });
        filter.classList.add('active');

        switch (category) {
            case '*':
                displayPortfolioItems(PORTFOLIO_DATA);
                displayPortfolioModal(PORTFOLIO_DATA);
                break;
            case 'web':
                displayPortfolioItems(PORTFOLIO_DATA.filter(item => item.category === 'web'));
                displayPortfolioModal(PORTFOLIO_DATA.filter(item => item.category === 'web'));
                break;
            case 'mobile':
                displayPortfolioItems(PORTFOLIO_DATA.filter(item => item.category === 'mobile'));
                displayPortfolioModal(PORTFOLIO_DATA.filter(item => item.category === 'mobile'));
                break;
            case 'desktop':
                displayPortfolioItems(PORTFOLIO_DATA.filter(item => item.category === 'desktop'));
                displayPortfolioModal(PORTFOLIO_DATA.filter(item => item.category === 'desktop'));
                break;
            default:
                break;
        }
    });
});