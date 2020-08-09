import "./main.scss";

var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".dots"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".slider-button-right",
        prevEl: ".slider-button-left"
    }
});
