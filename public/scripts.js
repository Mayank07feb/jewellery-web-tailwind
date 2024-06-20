const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000, // Delay between slides in milliseconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Show only one slide at a time
});
let prevScrollpos = window.pageYOffset;




