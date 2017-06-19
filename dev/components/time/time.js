'use strict';

const $hoursBlock = ".time__hours";
const $minutesBlock = ".time__minutes";
const $secondsBlock = ".time__seconds";
const $dayBlock = ".time__day";
const $dateBlock = ".time__date";

$(document).ready(function () {
    let xmlHttp;
    function srvTime(){
        try {
            //FF, Opera, Safari, Chrome
            xmlHttp = new XMLHttpRequest();
        }
        catch (err1) {
            //IE
            try {
                xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
            }
            catch (err2) {
                try {
                    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
                }
                catch (eerr3) {
                    //AJAX not supported, use CPU time.
                    alert("AJAX not supported");
                }
            }
        }
        xmlHttp.open('HEAD',window.location.href.toString(),false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        return xmlHttp.getResponseHeader("Date");
    }

    let st = srvTime();
    let start = new Date(st).getTime();
    let timeLag = window.performance.now();

    setInterval(function() {
        let currentTime = new Date(start + window.performance.now() - timeLag);

        let day;
        switch (currentTime.getDay()) {
            case 0:
                day = 'Воскресенье';
                break;
            case 1:
                day = 'Понедельник';
                break;
            case 2:
                day = 'Вторник';
                break;
            case 3:
                day = 'Среда';
                break;
            case 4:
                day = 'Четверг';
                break;
            case 5:
                day = 'Пятница';
                break;
            case 6:
                day = 'Суббота';
                break;
        }

        $($hoursBlock).html(("0" + currentTime.getHours()).slice(-2));
        $($minutesBlock).html(("0" + currentTime.getMinutes()).slice(-2));
        $($secondsBlock).html(("0" + currentTime.getSeconds()).slice(-2));
        $($dayBlock).html(day);
        $($dateBlock).html(("0" + currentTime.getDate()).slice(-2) +'.'+ ("0" + (currentTime.getMonth() + 1)).slice(-2) +'.'+ currentTime.getFullYear());
    }, 1000);
});
