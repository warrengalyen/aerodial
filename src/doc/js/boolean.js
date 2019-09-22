(function() {
    var params = {
        debug: true
    };
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('example')
    });
    aero.add(params, 'debug');
})();

(function() {
    var params = {
        debug: false,
        '(value)': ''
    };
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('listExample')
    });
    aero.add(params, 'debug', {
        list: ['Enabled', 'Disabled']
    }).on('change', function(value) {
        params['(value)'] = String(value);
    });
    aero.monitor(params, '(value)');
})();