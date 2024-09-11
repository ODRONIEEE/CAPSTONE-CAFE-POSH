// JavaScript to add functionality
document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = "logo-page.html";
});

document.querySelector('.user-profile').addEventListener('click', function() {
    window.location.href = "profile-page.html";
});

document.querySelector('.back-dashboard').addEventListener('click', function() {
    window.location.href = "profile-dashboard.html";
});

document.querySelector('.add-item').addEventListener('click', function() {
    window.location.href = "menu-page.html";
});

// Optional: Smooth Scrolling for the carousel
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed multiplier
    carousel.scrollLeft = scrollLeft - walk;
});