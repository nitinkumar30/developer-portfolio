const theme_elements = document.querySelectorAll('.color-element');
const themes = [
    {
        bs_primary_rgb: '#007bff',
        bs_bg_opacity: '0.9',
        btn_primary: '#007bff',
    },
    {
        bs_primary_rgb: '#dc3545',
        bs_bg_opacity: '0.9',
        btn_primary: '#dc3545',
    },
    {
        bs_primary_rgb: '#28a745',
        bs_bg_opacity: '0.9',
        btn_primary: '#28a745',
    },
    {
        bs_primary_rgb: '#fd7e14',
        bs_bg_opacity: '0.9',
        btn_primary: '#fd7e14',
    },
    {
        bs_primary_rgb: '#6c757d',
        bs_bg_opacity: '0.9',
        btn_primary: '#6c757d',
    }
]

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
    })
});