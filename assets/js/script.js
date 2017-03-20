$(document).ready(function () {
    $('.js-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
        cssEase: 'linear',
        speed: 3000
    });
    
    $('.js-quotes').slick({
        arrows: true,
        autoplay: true,
        prevArrow: '<img class="left-arr" src="assets/img/ic-arr-left.png">',
        nextArrow: '<img class="right-arr" src="assets/img/ic-arr-right.png">',
    });

    (function ($) {

        var allPanels = $('.accordion > div');
        $('.accordion > div').not(':first').hide();

        $('.accordion > span > a').click(function () {
            allPanels.slideUp();
            if ($(this).parent().next().slideDown()) {
                $(this).parent('.accordion__item').addClass('active');
            } else if (allPanels.slideUp()) {
                $(this).parent('.accordion__item').removeClass('active');
            }

            return false;
        });

    })(jQuery);

    $('.js-scroll').slimScroll({
        height: '180px',
        size: '5px',
        color: '#95e1d3',
        railVisible: true,
        opacity: '1'
    });

});