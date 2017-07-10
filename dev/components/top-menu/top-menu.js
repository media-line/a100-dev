"use strict";

 
const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';
const $submenu = '.top-menu__submenu';
const $headerTop = '.header__top';
const $parentButton = '.top-menu__submenu-button';
const parentButtonActive = 'top-menu__submenu-button_active';

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

    $($parentButton).click(function () {
        $(this).toggleClass(parentButtonActive);
        $(this).siblings($submenu).slideToggle();
    });
});
