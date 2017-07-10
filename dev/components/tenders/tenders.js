'use strict';

const $filterField = '.tender__value-js';
const $filterFields = '.tenders__js';
const filterFieldsLoading = 'tenders__js_loading';
let filterValues = {};

$(document).ready(function () {
	$($filterField).each(function () {
		filterValues[$(this).attr('NAME')] = $(this).val();
	});

	$($filterField).change(function () {
		$($filterFields).addClass(filterFieldsLoading);
		filterValues[$(this).attr('NAME')] = $(this).val();


		$.ajax({
			url: '/ajax/tenders/index.php',
			type: 'POST',
			data: {'data':JSON.stringify(filterValues)},
			success: function(data){
				let tenders = JSON.parse(data);
				let html = '';
                if ($(tenders).length > 0) {
                    $(tenders).each(function(index, value) {
    					html +=    '<div class="tender">';
    					html +=			'<div class="tender__option tender__option_form">';
    					html +=				'<span class="tender__option-name">Форма тендера:</span>'+value['PROPERTY_TYPE_VALUE'];
    					html +=			'</div>';
    					html +=			'<div class="tender__option tender__option_form">';
    					html +=				'<span class="tender__option-name">Код тендера:</span>'+value['PROPERTY_CODE_VALUE'];
    					html +=			'</div>';
    					html +=			'<div class="tender__option tender__option_form">';
    					html +=				'<span class="tender__option-name">Предмет тендера:</span>'+value['PROPERTY_SUBJECT_VALUE'];
    					html +=			'</div>';
    					html +=			'<div class="tender__option tender__option_form">';
    					html +=				'<span class="tender__option-name">Начало приема заявок:</span>'+value['PROPERTY_START_VALUE'];
    					html +=			'</div>';
    					html +=			'<div class="tender__option tender__option_form">';
    					html +=				'<span class="tender__option-name">Окончание тендера:</span>'+value['PROPERTY_FINISH_VALUE'];
    					html +=			'</div>';
    					html +=			'<div class="tender__option tender__option_form">';
    					html +=				'<span class="tender__option-name">Стадия тендера:</span>'+value['PROPERTY_STEP_VALUE'];
                        html +=				'<a href="'+value['DETAIL_PAGE_URL']+'" class="button button_tender">Подробнее</a>';
                        html +=			'</div>';
    					html +=		'</div>';
    				});
                } else {
                    html +=    '<div class="tender">';
                    html +=         'Тендеры по заданным параметрам не найдены';
                    html +=		'</div>';
                }

				$($filterFields).html(html);
				$($filterFields).removeClass(filterFieldsLoading);
			}
		});
	});
});
