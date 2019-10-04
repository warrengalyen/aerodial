(function () {
	'use strict';

	function isAmd() {
		return typeof window['define'] === 'function' && window['define'].amd;
	}

	var Aerodial = require('./Aerodial');

	if (isAmd()) {
		window['define']('Aerodial', function() {
			return Aerodial;
		});
	}
	else {
		window.Aerodial = Aerodial;
	}
})();