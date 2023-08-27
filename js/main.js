$(document).ready(function() {
    $(".js-scroll-btn").on("click", function() {
        $("html,body")
            .stop()
            .animate({
                    scrollTop: $(".terms").offset().top - 60,
                },
                "slow"
            );
    });

});

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        700: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});
