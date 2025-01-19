const themeSelector = document.getElementById("theme-select");

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add('dark');
        
        const logo = document.querySelector('.logo');
        logo.src = 'byui-logo_white.png'; 
    } else {
        document.body.classList.remove('dark');
        
        const logo = document.querySelector('.logo');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);