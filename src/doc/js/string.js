(function() {
    var params = {
        name: 'mechanika',
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('stringExample')
    });
    aero.addText(params, 'name');
})();

(function() {
    var params = {
        direction: 'left',
        '(value)': ''
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('listExample')
    });
    aero.addSelector(params, 'direction', {
			values: [
            'left',
            'up',
            'right',
            'down'
        ]
    }).on('change', function(value) {
        params['(value)'] = value;
    });
    aero.addMonitor(params, '(value)');
})();

(function() {
    var params = {
        vimKey: 'H',
        '(value)': ''
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('namedListExample')
    });
    aero.addSelector(params, 'vimKey', {
			values: {
            left:  'H',
            up:    'K',
            right: 'L',
            down:  'J'
        }
    }).on('change', function(value) {
        params['(value)'] = value;
    });
    aero.addMonitor(params, '(value)');
})();