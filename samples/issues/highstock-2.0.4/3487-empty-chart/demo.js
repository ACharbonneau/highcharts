$(function () {
    Highcharts.stockChart('container', {
        navigator: {
            adaptToUpdatedData: false
        },
        scrollbar: {
            enabled: false
        },
        rangeSelector: {
            selected: 3
        },
        series: [{}]
    });
});