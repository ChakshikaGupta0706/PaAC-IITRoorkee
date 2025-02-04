document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.events-slider', {

        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop:true,
        speed:800,
        grabCursor: true,

        slideToClickedSlide: true,

        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
                scale: 0.9
            },
            next: {
                shadow: true,
                translate: ['20%', 0, -1],
                scale: 0.9
            }
        },

        watchSlidesProgress: true,

        touchEventsTarget: 'wrapper',
        touchRatio: 1,
        touchAngle: 45,

        mousewheel: {
            enabled: false,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1200: {
                slidesPerView: 1.5,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },

            480: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        },

        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        }
        
    });

    const eventDetails = document.querySelectorAll('.eventinfodetails');

    swiper.on('slideChange', function() {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const eventTitle = activeSlide.querySelector('h3').textContent.trim();

        eventDetails.forEach(detail => {
            if (detail.dataset.event === eventTitle) {
                detail.classList.add('active');
            } else {
                detail.classList.remove('active');
            }
        });

    });

    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            swiper.slideTo(index);
        });
    });

});
