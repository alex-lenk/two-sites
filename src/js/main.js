// Актальный год в подвале сайта
var dateMy = new Date();
var year = dateMy.getFullYear();
document.getElementById('year').innerHTML = year;

// Tooltip подсказка от bootstrap
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Кнопка вверх
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

$(document).ready(function () {

    var prod = $("#producers");

    prod.owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

    });
    $(".next").click(function () {
        prod.trigger('owl.next');
    });
    $(".prev").click(function () {
        prod.trigger('owl.prev');
    });

    //Для мобильного меню
    $(".menu-toggle").click(function () {
        $('.menu').toggleClass("open-menu");
    });

    //Кнопка вверх
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });


    //Плавная прокрутка к якорям на странице
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
        e.preventDefault();
    });


});
