import '../css/style';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    const toLightMode = () => body.classList.replace('dark-mode', 'light-mode');
    const toDarkMode = () => body.classList.replace('light-mode', 'dark-mode');

    window.darkmode = toDarkMode;
    window.lightmode = toLightMode;
});
