//FOR SECTION HEADING
ScrollReveal().reveal('.page-section-heading', {
    duration: 1300,
    origin: "bottom",
    distance: "60px", 
    delay: 300, 
    easing: "ease-in-out",
});

//FOR HOME
ScrollReveal().reveal('.my-image', {
    duration: 1300,
    origin: "bottom",
    distance: "50px", 
    delay: 300, 
    easing: "ease-in-out",
});

ScrollReveal().reveal('.main-header-title', {
    duration: 1300,
    origin: "left",
    distance: "300px", 
    delay: 300, 
    easing: "ease-in-out",
});

//FOR ABOUT
ScrollReveal().reveal('.about-text-1', {
    duration: 1300,
    origin: "left",
    distance: "300px", 
    delay: 300, 
    easing: "ease-in-out",
});

ScrollReveal().reveal('.about-text-2', {
    duration: 1300,
    origin: "right",
    distance: "300px",
    delay: 300,
    easing: "ease-in-out",
});

ScrollReveal().reveal('.download-cv-btn', {
    duration: 1300,
    origin: "bottom",
    distance: "300px",
    delay: 300,
    easing: "ease-in-out",
});

//FOR PORTFOLIO
document.querySelectorAll('.portfolio-container').forEach(item => {
    ScrollReveal().reveal(item, {
        duration: 1300,
        origin: "bottom",
        distance: "300px", 
        delay: 300, 
        easing: "ease-in-out",
    });
});