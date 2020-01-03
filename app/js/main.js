$(function(){
// tabs
$('.search__tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.search__form').find('.search__form-item').removeClass('active-tab').hide();
    $('.search__tabs').find('.search__tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
});

// menu button
// $('.menu__btn').on('click', function (){
//     $('.menu__list').slideToggle();
// });
const navSLide = () => {
    const menu__btn = document.querySelector('.menu__btn');
    const nav = document.querySelector('.menu__list');
    const navLinks = document.querySelectorAll('.menu__list li');
    
    menu__btn.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('menu-active')

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger ANimation
        menu__btn.classList.toggle('toggle');
    });
}
navSLide();

// Select Styler
$('input, select').styler();

// Price Range block
$(".js-range-slider").ionRangeSlider({
    skin: "square",
    type: "double",
    grid: false,
    prefix: "Bedroom ",
    max_postfix: "+",
});

// slider
$('.property__slider, .project__slider, .partners__slider').slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow slider-btn" alt="Link to..."></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow slider-btn" alt="Link to..."></button>',

});

// Content Sorting buttons
$('.icon-th-list').on('click', function () {
    $('.property-page__sort .property__slider-card').addClass('list');
    $(".icon-th-list").addClass('active');
    $(".icon-th-large, .icon-th-draw, .icon-th-map").removeClass('active');
});
$('.icon-th-large').on('click', function () {
    $('.property-page__sort .property__slider-card').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list, .icon-th-draw, .icon-th-map').removeClass('active');
});
$('.icon-th-map').on('click', function () {
    $('.icon-th-map').addClass('active');
    $('.icon-th-draw, .icon-th-list, .icon-th-large').removeClass('active');
});
$('.icon-th-draw').on('click', function () {
    $('.icon-th-draw').addClass('active');
    $('.icon-th-map, .icon-th-list, .icon-th-large').removeClass('active');
});

// Scroll To Top animation
    const btnScroll = document.querySelector("#btnScroll");

    btnScroll.addEventListener("click", function () {
        if ($(document).scrollTop() > $(window).height()) {
            $('#btnScroll').fadeIn();
        } else {
            $('#btnScroll').fadeOut();
        }
        $("html, body").animate({ scrollTop: 0
        }, 800, 'linear', function() {
            $('#btnScroll').fadeIn();
        }); 
    
    });
});