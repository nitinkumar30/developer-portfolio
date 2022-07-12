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
            document.documentElement.style.setProperty('--btn-primary', theme);
        }
    })
});


//function to convert hex to rgb
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}