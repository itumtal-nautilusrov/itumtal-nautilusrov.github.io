// Builds the gallery from window.GALLERY (image/gallery.js).
// Each entry: { "file": path relative to image/, "description": caption text }.
(function () {
    var grid = document.querySelector('.gallery');
    if (!grid) return;

    var zoomIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"></path></svg>';

    var entries = window.GALLERY;
    if (!Array.isArray(entries)) {
        grid.innerHTML = '<p>Galeri yüklenemedi.</p>';
        return;
    }

    entries.forEach(function (entry) {
        var src = 'image/' + entry.file;
        var text = entry.description || '';
        var item = document.createElement('button');
        item.type = 'button';
        item.className = 'gallery-item';
        item.setAttribute('data-full', src);
        item.setAttribute('aria-label', (text || 'Fotoğrafı') + ' büyüt');
        var img = document.createElement('img');
        img.src = src;
        img.alt = text;
        img.loading = 'lazy';
        var zoom = document.createElement('span');
        zoom.className = 'gallery-zoom';
        zoom.innerHTML = zoomIcon;
        item.appendChild(img);
        item.appendChild(zoom);
        grid.appendChild(item);
    });
    document.dispatchEvent(new Event('gallery:ready'));
})();
