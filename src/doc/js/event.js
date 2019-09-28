(function() {
    var params = {
        speed: 50,
        '(log)': ''
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('eventExample')
    });
    aero.slider(params, 'speed', {
        min: 0,
        max: 100
    }).on('change', function(value) {
        params['(log)'] = String(value);
    });
    aero.monitor(params, '(log)', {
        count: 10
    });
})();

(function() {
    var params = {
        power: 50,
        size: 50,
        '(log)': ''
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('globalEventExample')
    });
    aero.slider(params, 'power', {min: 0, max: 100});
    aero.slider(params, 'size', {min: 0, max: 100});
    aero.on('change', function(value, prop) {
        if (prop.getId() === '(log)') {
            // Prevent infinite loop
            return;
        }
        params['(log)'] = prop.getLabel() + ': ' + String(value);
    });
    aero.monitor(params, '(log)', {
        count: 10
    });
})();