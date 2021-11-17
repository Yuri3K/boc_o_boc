$(function () {

    $('.menu__btn, .menu__link').on('click', function () {
        $('.menu__list,.menu__btn').toggleClass('active');
        if ($(window).width() < 992) {
            $('body').toggleClass('lock');
        }
    });

    var height = $('.menu').outerHeight(true);

    $(".header a, .logo, .top").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            paddT = ($(id).outerHeight(true) - $(id).height()) / 2,
            top = $(id).offset().top - paddT;

        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $(window).scroll(function () {
        var head = $('.header').outerHeight();
        if ($(this).scrollTop() < head - (height + 1)) {
            $('.top').css('opacity', '0');
        } else if ($(this).scrollTop() > head - (height + 1)) {
            $('.top').css('opacity', '1');
        }
    });

});