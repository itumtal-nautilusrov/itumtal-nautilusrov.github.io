// Nautilus ROV - masthead behaviour + mobile menu
(function () {
    // Hide the info bar once the page is scrolled; show it again at the top.
    var masthead = document.querySelector('.masthead');
    if (masthead) {
        var ticking = false;
        var update = function () {
            masthead.classList.toggle('compact', window.scrollY > 40);
            ticking = false;
        };
        window.addEventListener('scroll', function () {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        }, { passive: true });
        update();
    }

    var menuBtn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('header nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.closest('a')) nav.classList.remove('open');
        });
    }

    document.querySelectorAll('[data-year]').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();
