$(function () {
    Highcharts.chart('container', {

        chart: {
            type: 'bubble'
        },

        title: {
            text: 'Highcharts Bubbles'
        },

        series: [{
            data: [[2.3, 3.1, 1]]
        }]
    });
});
