document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.events-slider', {

        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        mousewheel: {
            enabled: true,
            sensitivity: 1
        },

        keyboard: {
            enabled: true
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        loop: true,
        
    })

})