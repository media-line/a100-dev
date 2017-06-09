'use strict';

let $header = '.header_first-screen';

$(document).ready(function () {
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
});
