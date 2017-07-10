'use strict';

let $file = 'input[type="file"]';
let $pathBlock = '.form__file-label-value';

$(document).ready(function () {
    $($file).change(function (event) {
        let arrPath = event.target.value.split('\\');
        $(this).siblings($pathBlock).html(arrPath[2]);
    });
});
