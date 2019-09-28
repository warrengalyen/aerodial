(function() {
	var params = {
		speed: 0.5,
	};
	var aero = new Aerodial({
		foldable: false,
		container: document.getElementById('numberExample')
	});
	aero.text(params, 'speed');
})();

(function() {
	var params = {
		speed: 50
	};
	var aero = new Aerodial({
		foldable: false,
		container: document.getElementById('minExample')
	});
	aero.text(params, 'speed', {min: 0});
})();

(function() {
	var params = {
		speed: 50
	};
	var aero = new Aerodial({
		foldable: false,
		container: document.getElementById('sliderExample')
	});
	aero.slider(params, 'speed', {min: 0, max: 100});
})();

(function() {
	var params = {
		particleCount: 50
	};
	var aero = new Aerodial({
		foldable: false,
		container: document.getElementById('stepExample')
	});
	aero.slider(params, 'particleCount', {min: 0, max: 100, step: 10});
})();

(function() {
	var params = {
		direction: 0,
		'(value)': ''
	};
	var aero = new Aerodial({
		foldable: false,
		container: document.getElementById('selectorExample')
	});
	aero.selector(params, 'direction', {
		values: {
			none: 0,
			horizontal: 1,
			vertical: 2,
			both: 3
		}
	}).on('change', function(value) {
		params['(value)'] = String(value);
	});;
	aero.monitor(params, '(value)');
})();