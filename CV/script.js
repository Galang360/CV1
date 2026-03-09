// Smooth scroll untuk navigasi
document.querySelectorAll('.nav-Menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animasi tambahan saat scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Amati elemen untuk animasi
document.querySelectorAll('.card, .portfolio-item, .section, .pengalaman-item').forEach(el => {
  observer.observe(el);
});

// Lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  // Jika event ada, cek apakah klik di area lightbox (bukan content)
  if (event && event.target.id !== 'lightbox') {
    return;
  }
  
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close lightbox dengan tombol ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});