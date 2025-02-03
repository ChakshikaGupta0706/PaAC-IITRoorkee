document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.events-slider', {

        slidesPerView: 1.8,
        centeredSlides: true,
        spaceBetween: 70,

        mousewheel: {
            enabled: true,
            sensitivity: 1,
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

        speed: 800,
        effect: 'slide',

        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        breakpoints: {
            1400: {
                slidesPerView: 1.8,
                spaceBetween: 100
            },
            
            1200: {
                slidesPerView: 1.6,
                spaceBetween: 80
            },
            768: {
                slidesPerView: 1.4,
                spaceBetween: 60
            },

            480: {
                slidesPerView: 1.4,
                spaceBetween: 30
            }
        }
        
    });

});
