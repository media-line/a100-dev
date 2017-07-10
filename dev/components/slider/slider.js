'use strict';

const $slider = '.slider';
const $header = '.slider__slide';

$(document).ready(function () {
    $($slider).slick({
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: false,
              }
            },
        ]
    });

    if ($($header).length > 0) {
        let windowHeight;
        windowHeight = $(window).outerHeight();
        $($header).css('height', windowHeight + 'px');


        let resizeTimer;
        $(window).resize(function (e) {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                windowHeight = $(window).outerHeight();
                $($header).css('height', windowHeight + 'px');
            }, 250);
        });
    }
});
