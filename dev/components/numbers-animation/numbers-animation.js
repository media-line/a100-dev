"use strict";


const $number = '.numbers-animation__number-js';
const $block = '.numbers-animation';

let topBlock;

$(document).ready(function () {
        topBlock = $($block).position().top;
        let first = true;


        if (first) {

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
        }


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
                          format: 'd.dd'
                        });

                        od.update(value);
                    });
                };
            }
        });
});
