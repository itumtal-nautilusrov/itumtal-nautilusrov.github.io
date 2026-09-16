// Blog post index, shared by index.html and blog.html.
// Add new posts here; paths are relative to the site root.
const blogData = [
    {
        date: "2025-11-30",
        title: "Jetson Makinenize Uygun Sürümde Pytorch Kurulumu",
        excerpt: "Jetson Xavier NX üzerinde GPU destekli torch ve torchvision kurulumu için pratik bir rehber.",
        image: "image/blog-imgs/blog1/blog1.png",
        link: "blog-posts/pytorch-for-jetson.html"
    },
    {
        date: "2026-06-23",
        title: "Lityum İyon Batarya Paketleme",
        excerpt: "Lityum İyon batarya toplama, puntalama ve paketleme süreci hakkında bir rehber.",
        image: "image/blog-imgs/blog2/blog2.png",
        link: "blog-posts/li-ion-battery-pack.html"
    },
    {
        date: "2026-07-22",
        title: "ESC'ye Çift Yönlü Firmware Flaşlama",
        excerpt: "Tek yönlü ESC'leri çift yönlü olarak programlamak için Arduino ve BLHeliSuite kullanımı.",
        image: "image/blog-imgs/blog3/blog3.png",
        link: "blog-posts/flash-firmware-to-esc.html"
    }
];

function renderPosts(el, limit) {
    const formatDate = (iso) => new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    const posts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
    el.innerHTML = posts.map(post => `
        <li>
            <a href="${post.link}" class="post">
                <time datetime="${post.date}">${formatDate(post.date)}</time>
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                </div>
                <img src="${post.image}" alt="">
            </a>
        </li>
    `).join('');
}
