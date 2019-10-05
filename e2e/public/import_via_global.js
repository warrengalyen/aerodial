/* global Aerodial */
var observable = {
	x: 0,
};

setInterval(function() {
	var progress = (Date.now() % 1000) / 1000;
	observable.x = Math.sin(progress * 2 * Math.PI);
}, 100);

var aero = new Aerodial();
var folder = aero.addFolder('Graph');
folder.addGraph(observable, 'x', {
	label: 'sin',
	count: 50,
	min: -1.0,
	max: 1.0
});