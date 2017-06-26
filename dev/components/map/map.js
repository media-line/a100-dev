const mapContainer = 'map__js';
const $contentBlock = '.map__content';
const $mapContainer = '.map__js';
const $mark = '.header__wrap';
const $contactsMap = 'map__js_contacts';

let map;

function mapInit (markers, center) {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                zoom: 14,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
                center: [center[0], center[1]],
            });

            $(markers).each(function (index, value) {
                let placemark;
                placemark = new ymaps.Placemark([value[0], value[1]], {
                    balloonContent: value[3]
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: value[2],
                    iconImageSize: [36, 42],
                    iconImageOffset: [-18, -42]
                });
                map.geoObjects.add(placemark);
            });


            map.behaviors.disable('scrollZoom');
        }
}


$(window).on('load', function() {
    if ($($contactsMap).length > 0) {
        //сдвигаем контентный блок, чтобы был на одной линии с кнопкой меню
        $($contentBlock).css('left', $($mark).position().left + 'px');

        //ставим высоту карты по контенту
        $($mapContainer).css('height', $($contentBlock).outerHeight() + 100 + 'px');

        let resizeTimer;
        $(window).resize(function (e) {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                $($contentBlock).css('left', $($mark).position().left + 'px');
                $($mapContainer).css('height', $($contentBlock).outerHeight() + 100 + 'px');
            }, 250);
        });
    }

    //let init = new mapInit([[53.952375, 27.666108, null, '223053, Минский р-н, д. Боровая, 7']], [53.952375, 27.666108]);
});

export {mapInit};
