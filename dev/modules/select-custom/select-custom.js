"use strict";


const $select = '.select-custom';
const $selectValue = '.select-custom__value';
const $selectValueJs = '.select-custom__value-js';
const $selectOption = '.select-custom__option';
const $selectOptions = '.select-custom__options';
const $selectInput = '.select-custom__input';
const $selectArrow = '.select-custom__value-arrow';

const selectActive = 'select-custom_active';

$(window).on('load', function () {
    //проставляем ширину селектов
    $($select).each(function () {
        let widthSelect;

        widthSelect = $(this).find($selectValue).outerWidth() - $(this).find($selectArrow).outerWidth();
        $(this).find($selectOptions).css('width', widthSelect + 'px');
        //$(this).find($selectValue).css('width', widthSelect + 'px');
    });

    //при клике на селект скрываем/закрываем
    $($select).mouseenter(function () {
        $(this).closest($select).addClass(selectActive);
    });

    $($select).mouseleave(function () {
        $(this).closest($select).removeClass(selectActive);
    });

    //при выборе опции скрываем поле и выставляем значения
    $($selectOption).click(function () {
        let value = $(this).html();
        let dataValue = $(this).attr('data-select');

        $(this).closest($select).find($selectValueJs).html(value);
        $(this).closest($select).find($selectInput).val(dataValue);
        $(this).closest($select).removeClass(selectActive);
    });
});
