'use strict';

(function () {
    var params = {
        initSpeed: 0.38
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('labelExample')
    });
    aero.addSlider(params, 'initSpeed', {
        label: 'Initial speed',
        min: 0.0,
        max: 1.0
    });
})();