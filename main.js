const hamburger = document.getElementById('hamBurger');
const navlinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('show');
});