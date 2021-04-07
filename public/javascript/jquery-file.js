$(document).ready(function () {
    /*load page*/
    $("#site #loaded").fadeOut(500);
    /*end load page*/


    /*burger menu*/
    const burgerButton = $("#burger-button");
    const slideMenu = $("#site #header .header-box .nav-box .nav-top-slide-menu");
    burgerButton.click(function () {
        slideMenu.slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() >= 769) {
            slideMenu.slideUp();
        }
    });
    /*end burger menu*/


    /*animate for top slider*/
    const buttonAnimate = $("#site #main .top-slider .slider .text .paragraph button");
    const pAnimate = $("#site #main .top-slider .slider .text .paragraph p");
    const h1Animate = $("#site #main .top-slider .slider .text h1");
    const slider1 = $("#slide1");
    const slider2 = $("#slide2");
    const buttonSlideOne = $("#slide-one");
    const buttonSlideTwo = $("#slide-two");

    buttonAnimate.addClass("animate__fadeInDown");
    pAnimate.addClass("animate__fadeInDown");
    h1Animate.addClass("animate__fadeInDown");

    let x;
    let timer = function () {
        x = setInterval(function () {
            if (!slider1.hasClass("active animate__zoomIn")) {
                slider1.addClass("active animate__zoomIn");
                slider1.siblings().removeClass("active animate__zoomIn");
                buttonSlideOne.addClass("active-button-slider");
                buttonSlideOne.siblings().removeClass("active-button-slider");
            } else {
                slider2.addClass("active animate__zoomIn");
                slider2.siblings().removeClass("active animate__zoomIn");
                buttonSlideTwo.addClass("active-button-slider");
                buttonSlideTwo.siblings().removeClass("active-button-slider");
            }
        }, 10000);
    }
    timer();
    buttonSlideOne.click(function () {
        if (!slider1.hasClass("active animate__zoomIn")) {
            slider1.addClass("active animate__zoomIn");
            slider1.siblings().removeClass("active animate__zoomIn");
        }
        if (!buttonSlideOne.hasClass("active-button-slider")) {
            buttonSlideOne.addClass("active-button-slider");
            buttonSlideOne.siblings().removeClass("active-button-slider");
        }
        clearInterval(x);
        timer();
    });


    buttonSlideTwo.click(function () {
        if (!slider2.hasClass("active animate__zoomIn")) {
            slider2.addClass("active animate__zoomIn");
            slider2.siblings().removeClass("active animate__zoomIn");
        }
        if (!buttonSlideTwo.hasClass("active-button-slider")) {
            buttonSlideTwo.addClass("active-button-slider");
            buttonSlideTwo.siblings().removeClass("active-button-slider");
        }
        clearInterval(x);
        timer();
    });
    /*end animate for top slider*/

});