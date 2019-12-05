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
$('.menu__btn').on('click', function (){
    $('.menu__list').slideToggle();
});

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


// $('.property__slider-icon').on('click', function () {
//     $('.property__slider-card').addClass('active');
//     $(".icon-th-list").addClass('active');
//     $(".property__slider-card").removeClass('active');
// });
// $('.icon-th-large').on('click', function () {
//     $('.products__item').removeClass('list');
//     $('.icon-th-large').addClass('active');
//     $('.icon-th-list').removeClass('active');
// });
    
});