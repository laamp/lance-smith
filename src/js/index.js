import '../css/vars';
import '../css/style';
import '../css/desktop';
import '../css/mobile';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const themeSwitcher = document.getElementById('theme-switcher');

    if (localStorage.getItem('color-mode') === 'dark') {
        body.className = 'dark-mode';
    } else {
        body.className = 'light-mode';
    }

    const switchColorMode = () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('color-mode', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('color-mode', 'light');
        }
    };

    themeSwitcher.addEventListener('click', switchColorMode);
});
