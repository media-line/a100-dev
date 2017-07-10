"use strict";

const $datepicker = '.date-custom__value';
const $dateMin = '.tender__date-min';
const $dateMax = '.tender__date-max';

$(document).ready(function () {
    if ($($datepicker).length > 0) {
        let dateMinValue = $($dateMin).val();
        let dateMaxValue = $($dateMax).val();

        let dateMinArr = dateMinValue.split('.');
        let dateMaxArr = dateMaxValue.split('.');

        $($datepicker).datepicker({
            onSelect: function (formattedDate, date, inst) {
                $(inst.$el).trigger("change");
            },
            minDate: new Date(dateMinArr[2], Number(dateMinArr[1]) - 1, dateMinArr[0]),
            maxDate: new Date(dateMaxArr[2], Number(dateMaxArr[1]) - 1, dateMaxArr[0])
        });
    }
});
