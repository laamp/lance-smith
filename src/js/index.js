import '../css/vars';
import '../css/style';
import '../css/desktop';
import '../css/mobile';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const themeSwitcher = document.getElementById('theme-switcher');
    const sections = document.querySelectorAll('.content-section');
    const buttons = document.querySelectorAll('nav ul li');

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

    const switchButtonSelected = e => {
        buttons.forEach(btn => btn.className = '');
        e.target.classList.add('selected-button');

        updateSelectedSection(e.target.innerText);
    };

    const updateSelectedSection = sectionName => {
        sections.forEach(section => section.classList.remove('selected'));
        const selectedSection = document.querySelector(`[data-section="${sectionName}"]`);
        selectedSection.classList.add('selected');
    };

    themeSwitcher.addEventListener('click', switchColorMode);
    buttons.forEach(btn => btn.addEventListener('click', switchButtonSelected));

    // debugging below this line
});
