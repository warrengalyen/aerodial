(function() {
    var params = {
        debug: true
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('example')
    });
    aero.checkbox(params, 'debug');
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
    aero.selector(params, 'debug', {
        values: ['Enabled', 'Disabled']
    }).on('change', function(value) {
        params['(value)'] = String(value);
    });
    aero.monitor(params, '(value)');
})();