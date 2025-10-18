const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

gallery.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    lightboxImg.src = gallery[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    lightboxImg.src = gallery[currentIndex].src;
});
