'use strict';

const mapContainer = 'project-map__js';
const $filterElement = '.project-map__filter-element';
const filterElementActive = 'project-map__filter-element_active';
const $projectClose = '.project-map__project-close';

let map;
let gCollection = Array();

function mapInit (collections) {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                zoom: 14,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl'],
                center: [0,0],
            });

            const balloonLayout = ymaps.templateLayoutFactory.createClass('<div class="project-map__project-wrap"><div class="project-map__project-close"></div><a href=$[properties.balloonLink] class="project-map__project"><img src=$[properties.balloonImg]><div class="project-map__project-name">$[properties.balloonContent]</div></a></div>', {
                build: function () {
                    balloonLayout.superclass.build.call(this);
                    $($projectClose).click(function(){
                        map.balloon.close();
                    });

                    $($filterElement).click(function(){
                        map.balloon.close();
                    });
                }
            });

            $(collections).each(function (colIndex, markers) {
                gCollection[colIndex] = new ymaps.GeoObjectCollection();

                $(markers).each(function (index, value) {
                    let placemark;
                    placemark = new ymaps.Placemark([value[0], value[1]], {
                        balloonContent: value[4],
                        balloonLink: value[6],
                        balloonImg: value[5]
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: value[3],
                        iconImageSize: [40, 47],
                        iconImageOffset: [-20, -47],
                        balloonLayout: balloonLayout
                    });

                    gCollection[colIndex].add(placemark);
                });

                map.geoObjects.add(gCollection[colIndex]);
            });


            map.setBounds( map.geoObjects.getBounds(), {
                 checkZoomRange: true
            });

            map.behaviors.disable('scrollZoom');
        }
}


function toggleCollection (element, gCollection, type) {
    switch (type) {
        case 'showAll':
            $(gCollection).each(function (index, value) {
                gCollection[index].options.set("visible", true);
            });
            break;

        case 'showFilter':
            let filterIndex;
            filterIndex = $(element).index();
            $(gCollection).each(function (index, value) {
                if (index != filterIndex) {
                    gCollection[index].options.set("visible", false);
                } else {
                    gCollection[index].options.set("visible", true);
                }
            });
            break;
    }
}


$(document).ready(function() {
    $($filterElement).click(function () {
        if ($(this).hasClass(filterElementActive)) {
            $(this).removeClass(filterElementActive);
            toggleCollection (this, gCollection, 'showAll');
        } else {
            $($filterElement).removeClass(filterElementActive);
            $(this).addClass(filterElementActive);
            toggleCollection (this, gCollection, 'showFilter');
        }
    });

    //let init = new mapInit([[[53.952375, 27.666108, '223053, Минский р-н, д. Боровая, 7', './images/marker.png'], [53.352375, 27.166108, '223053, Минский р-н, д. Боровая, 7', './images/marker.png']], [[53.072375, 27.696108, '223053, Минский р-н, д. Боровая, 7', './images/marker1.png'], [53.242375, 27.566108, '223053, Минский р-н, д. Боровая, 7', './images/marker1.png']]]);
});

export {mapInit};
