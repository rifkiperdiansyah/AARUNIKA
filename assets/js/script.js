document.addEventListener("DOMContentLoaded", function() {
            
    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        once: true,
        offset: 50,
        easing: 'ease-in-out-cubic',
        duration: 800
    });

    // 2. Logic untuk Navbar Transparan -> Gelap (Glassmorphism)
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('bg-transparent');
        }
    });

    // 3. Logic update teks angka "01 / 03" pada Carousel Hero
    const heroCarousel = document.getElementById('heroCarousel');
    const slideCounter = document.getElementById('slideCounter');
    
    // Dengarkan event bawaan bootstrap 'slid.bs.carousel' saat slide selesai transisi
    heroCarousel.addEventListener('slide.bs.carousel', function (event) {
        // Event.to adalah index slide tujuan (0, 1, 2)
        const currentSlide = event.to + 1;
        slideCounter.innerHTML = `0${currentSlide} / 03`;
    });

    // 4. Logic Dynamic Modal
    // Mengambil data dari tombol yang ditekan dan memasukkannya ke dalam 1 Modal
    const riverModal = document.getElementById('dynamicRiverModal');
    if (riverModal) {
        riverModal.addEventListener('show.bs.modal', function (event) {
            // Tombol yang memicu modal
            const button = event.relatedTarget;
            
            // Ekstrak info dari attribute data-*
            const title = button.getAttribute('data-title');
            const desc = button.getAttribute('data-desc');
            const imgUrl = button.getAttribute('data-img');
            
            // Update konten di dalam modal
            document.getElementById('modalTitleOutput').textContent = title;
            document.getElementById('modalDescOutput').textContent = desc;
            document.getElementById('modalImgOutput').style.backgroundImage = `url('${imgUrl}')`;
        });
    }
});