(function() {
    var params = {
        debug: true
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('example')
    });
    aero.addControl(params, 'debug');
})();

(function() {
    var params = {
        debug: false,
        '(value)': ''
    };
    var aero = new Aerodial({
        foldable: false,
			container: document.getElementById('selectorExample')
    });
    aero.addSelector(params, 'debug', {
        values: ['Enabled', 'Disabled']
    }).on('change', function(value) {
        params['(value)'] = String(value);
    });
    aero.addMonitor(params, '(value)');
})();