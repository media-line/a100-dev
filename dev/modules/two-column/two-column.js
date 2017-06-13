"use strict";


const $number = '.two-column__number-value';
const $block = '.two-column__numbers';

let topBlock;

$(document).ready(function () {
    topBlock = $($block).position().top;

    let first = true;
    $(window).scroll(function () {
        if (first) {

            if( ($(this).scrollTop() + $(window).outerHeight() + 100) > topBlock) {
                first = false;

                $($number).each(function () {
                    let value = $(this).html();
                    let el = $(this)[0];

                    let od = new Odometer({
                      el: el,
                      value: 0,
                      format: '( ddd).dd'
                    });

                    od.update(value);
                });
            };
        }
    });
});
