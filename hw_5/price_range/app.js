'use strict';

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true,
    onFinish: function (data) {
        alert(`Значение от : ${data.from}, значение до: ${data.to}`);
        console.log(data);
    }
});