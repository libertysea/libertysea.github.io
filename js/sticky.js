let mySwiper = new Swiper('.swiper-container2', {
    direction: 'horizontal',
    speed: 600,
    loop: true,
    effect : 'fade',
    loopPreventsSlide: false,
    autoplay: {
        delay: 3000,
    },
    mousewheel: false,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
})


