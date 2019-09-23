var dummy = {
	'TODO': 0
};
var aero = Aerodial({
	foldable: false,
	container: document.getElementsByClassName('hero_aeroContainer').item(0)
});

aero.add(dummy, 'TODO', {
	min: 0,
	max: 100,
});