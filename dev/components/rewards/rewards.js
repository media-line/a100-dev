"use strict";

const $block = ".rewards__wrap";
const $button = ".rewards__toggle";
const buttonActive = "rewards__toggle_active";

$(document).ready(function () {
    $($button).click(function () {
        $(this).toggleClass(buttonActive);
        $($block).slideToggle();
    });
});
