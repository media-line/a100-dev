const mapContainer = 'map';

let map;

function mapInit (markers) {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                zoom: 14,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
                center: [markers[0][0], markers[0][1]],
            });

            $(markers).each(function (index, value) {
                let placemark;
                placemark = new ymaps.Placemark([value[0], value[1]], {
                    balloonContent: value[3]
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/images/marker.png',
                    iconImageSize: [36, 42],
                    iconImageOffset: [-18, -42]
                });
                map.geoObjects.add(placemark);
            });


            map.behaviors.disable('scrollZoom');
        }
}

$(window).on('load', function() {
    let init = new mapInit([[53.952375, 27.666108, null, '223053, Минский р-н, д. Боровая, 7']]);
});
