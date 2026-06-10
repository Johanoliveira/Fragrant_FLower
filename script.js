let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scroll para baixo
        nav.classList.add('hidden');
    } else {
        // Scroll para cima
        nav.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
