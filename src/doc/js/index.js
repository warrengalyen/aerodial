var sketch = new Sketch(
	document.getElementById('bgSketch')
);
var sketchParams = sketch.getParameters();
var nigiri = sketch.getNigiri();
var neta = nigiri.getNeta();

var aero = Aerodial({
	container: document.getElementById('tp')
});

var folder1 = aero.addFolder('Appearance');
folder1.add(sketchParams, 'neta', {
	list: [
		'hotate',
		'maguro',
		'salmon'
	]
});

var folder2 = aero.addFolder('Physics');
folder2.add(sketchParams, 'gravity', {
	min: 0.1,
	max: 1.0
});
folder2.add(sketchParams, 'airResistance', {
	min: 0.0,
	max: 0.1
});
folder2.add(sketchParams, 'restitution', {
	min: 0.0,
	max: 1.0
});
folder2.addSeparator();
folder2.monitor(neta, 'z', {
	label: 'netaZ',
	graph: true,
	min: 0,
	max: 100
});
folder2.addSeparator();
folder2.addButton('Pop').on('click', function() {
	nigiri.pop();
});