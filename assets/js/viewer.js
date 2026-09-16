// Photo viewer: click any element with data-full to enlarge its image.
// The caption is the image alt text unless the element sets data-caption.
// Close with the X button, a click on the backdrop or Esc; arrows move between photos.
(function () {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-full]'));
    var viewer = document.getElementById('viewer');
    if (!items.length || !viewer) return;

    var img = viewer.querySelector('.viewer-img');
    if (items.length < 2) viewer.classList.add('single');
    var caption = viewer.querySelector('.viewer-caption');
    var current = 0;
    var lastFocus = null;

    function show(index) {
        current = (index + items.length) % items.length;
        var thumb = items[current].querySelector('img');
        img.src = items[current].getAttribute('data-full');
        img.alt = thumb.alt;
        var cap = items[current].getAttribute('data-caption');
        caption.textContent = cap !== null ? cap : thumb.alt;
    }

    function open(index) {
        lastFocus = document.activeElement;
        show(index);
        viewer.hidden = false;
        document.body.classList.add('viewer-lock');
        requestAnimationFrame(function () { viewer.classList.add('open'); });
        viewer.querySelector('.viewer-close').focus();
    }

    function close() {
        viewer.classList.remove('open');
        document.body.classList.remove('viewer-lock');
        setTimeout(function () { viewer.hidden = true; }, 200);
        if (lastFocus) lastFocus.focus();
    }

    items.forEach(function (item, i) {
        item.addEventListener('click', function () { open(i); });
    });

    viewer.querySelector('.viewer-close').addEventListener('click', close);
    viewer.querySelector('.viewer-prev').addEventListener('click', function () { show(current - 1); });
    viewer.querySelector('.viewer-next').addEventListener('click', function () { show(current + 1); });
    viewer.addEventListener('click', function (e) {
        if (e.target === viewer) close();
    });

    document.addEventListener('keydown', function (e) {
        if (viewer.hidden) return;
        if (e.key === 'Escape') close();
        else if (items.length < 2) return;
        else if (e.key === 'ArrowLeft') show(current - 1);
        else if (e.key === 'ArrowRight') show(current + 1);
    });
})();
