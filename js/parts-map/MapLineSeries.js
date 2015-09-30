(function (H) {
	var defaultPlotOptions = H.defaultPlotOptions,
		extendClass = H.extendClass,
		merge = H.merge,
		seriesTypes = H.seriesTypes;

// The mapline series type
defaultPlotOptions.mapline = merge(defaultPlotOptions.map, {
	lineWidth: 1,
	fillColor: 'none'
});
seriesTypes.mapline = extendClass(seriesTypes.map, {
	type: 'mapline',
	/*= if (build.classic) { =*/
	pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
		dashstyle: 'dashStyle',
		stroke: 'color',
		'stroke-width': 'lineWidth',
		fill: 'fillColor'
	},
	/*= } =*/
	drawLegendSymbol: seriesTypes.line.prototype.drawLegendSymbol
});
	return H;
}(Highcharts));
