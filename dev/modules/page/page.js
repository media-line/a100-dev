'use strict';

const $container = '.container_responsive';
const $wideBlock = '.page__important';
const wrapContainer = 'container container_small';

let resizeTimer;

$(window).on('load', function () {
    let halfMarginImg = 0;
    halfMarginImg = ($(window).width() - $($container).outerWidth())/2;

    $($wideBlock).each(function (i, block) {
        $(block).wrapInner("<div class='"+wrapContainer+"'></div>");
        $(this).css('margin-right', '-'+ halfMarginImg +'px');
        $(this).css('margin-left', '-'+ halfMarginImg +'px');
    });

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            halfMarginImg = ($(window).width() - $($container).outerWidth())/2;

            $($wideBlock).each(function (i, img) {
                $(this).css('margin-right', '-'+ halfMarginImg +'px');
                $(this).css('margin-left', '-'+ halfMarginImg +'px');
            });
        }, 250);
    });
});
