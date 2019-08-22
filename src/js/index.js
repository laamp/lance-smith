import '../css/style';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

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

    window.changecolor = switchColorMode;
});
