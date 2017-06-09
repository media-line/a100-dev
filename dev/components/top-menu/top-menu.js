"use strict";


const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';
const $headerTop = '.header__top';

$(document).ready(function () {
    if (isMobile.phone) {
        let menu = $($menu).clone();
        $($menu).remove();
        menu.insertBefore($headerTop);
    }

    $($button).click(function () {
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });
});
