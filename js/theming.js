const theme_elements = document.querySelectorAll('.color-element');
const dark_theme_btn = document.querySelector('.dark-mode-btn');
const light_theme_btn = document.querySelector('.light-mode-btn');
//colors
const primary = '255, 193, 7';
const dark_theme = '#343a40';
const light_theme = '#f8f9fa';

document.addEventListener('DOMContentLoaded', () => {
    //change primary color
    if(localStorage.getItem('theme') === null) {
        document.documentElement.style.setProperty('--bs-primary-rgb', primary);
        document.documentElement.style.setProperty('--bs-bg-opacity', '0.9');
    }else{
        loadTheme();
    }
});

var  isDark = false;

//add active item to selected theme
theme_elements.forEach(item => {
    item.addEventListener('click', () => {
        theme_elements.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        const theme = item.style.backgroundColor;
        //check if selected theme is not dark and light 
        if (item.getAttribute('data-theme') !== 'dark' && item.getAttribute('data-theme') !== 'light') {
            document.documentElement.style.setProperty('--bs-primary-rgb', theme.substring(theme.indexOf('(') + 1, theme.indexOf(')')));
            document.documentElement.style.setProperty('--bs-bg-opacity', '0.9');
        }else if(item.getAttribute('data-theme') === 'dark'){
            isDark = true;
            document.getElementById('skills').classList.add('bg-dark');        
            document.getElementById('services').classList.add('bg-dark');
            document.getElementById('portfolio').classList.add('bg-dark');
            document.getElementById('contact').classList.add('bg-dark');

            //change page-section-heading color to white
            document.querySelectorAll('.page-section-heading').forEach(item => {
                item.classList.add('text-white');
            });

            //change divider custom color to white
            document.querySelectorAll('.divider-custom-line').forEach(item => {
                item.classList.add('bg-white');
            });

            document.querySelectorAll('.divider-custom-icon').forEach(item => {
                item.classList.add('text-white');
            });
        }else{
            isDark = false;
            document.getElementById('skills').classList.remove('bg-dark');        
            document.getElementById('services').classList.remove('bg-dark');
            document.getElementById('portfolio').classList.remove('bg-dark');
            document.getElementById('contact').classList.remove('bg-dark');

            //change page-section-heading color to black
            document.querySelectorAll('.page-section-heading').forEach(item => {
                item.classList.remove('text-white');
            });

            //change divider custom color to black
            document.querySelectorAll('.divider-custom-line').forEach(item => {
                item.classList.remove('bg-white');
            });

            document.querySelectorAll('.divider-custom-icon').forEach(item => {
                item.classList.remove('text-white');
            });
        }
        saveTheme(theme, isDark);
    })
});

//save selected theme to local storage
function saveTheme(theme, isDark){
    localStorage.setItem('theme', theme);
    localStorage.setItem('isDark', isDark);
}

//load selected theme from local storage
function loadTheme(){
    const theme = localStorage.getItem('theme');
    const isDark = localStorage.getItem('isDark');
    if(theme !== null){
        document.documentElement.style.setProperty('--bs-primary-rgb', theme.substring(theme.indexOf('(') + 1, theme.indexOf(')')));
        document.documentElement.style.setProperty('--bs-bg-opacity', '0.9');
    }
    if(isDark) darkTheme();
    else lightTheme();
}

//theme mode
dark_theme_btn.addEventListener('click', darkTheme);
light_theme_btn.addEventListener('click', lightTheme);


//change theme to dark
function darkTheme(){
    isDark = true;
    document.getElementById('skills').classList.add('bg-dark');        
    document.getElementById('services').classList.add('bg-dark');
    document.getElementById('portfolio').classList.add('bg-dark');
    document.getElementById('contact').classList.add('bg-dark');

    //change page-section-heading color to white
    document.querySelectorAll('.page-section-heading').forEach(item => {
        item.classList.add('text-white');
    });

    //change divider custom color to white
    document.querySelectorAll('.divider-custom-line').forEach(item => {
        item.classList.add('bg-white');
    });

    document.querySelectorAll('.divider-custom-icon').forEach(item => {
        item.classList.add('text-white');
    });
}

//change theme to light
function lightTheme(){
    document.getElementById('skills').classList.remove('bg-dark');        
    document.getElementById('services').classList.remove('bg-dark');
    document.getElementById('portfolio').classList.remove('bg-dark');
    document.getElementById('contact').classList.remove('bg-dark');

    //change page-section-heading color to black
    document.querySelectorAll('.page-section-heading').forEach(item => {
        item.classList.remove('text-white');
    });

    //change divider custom color to black
    document.querySelectorAll('.divider-custom-line').forEach(item => {
        item.classList.remove('bg-white');
    });

    document.querySelectorAll('.divider-custom-icon').forEach(item => {
        item.classList.remove('text-white');
    });
}