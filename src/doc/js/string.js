(function() {
    var params = {
        name: 'mechanika',
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('stringExample')
    });
    aero.add(params, 'name');
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
    aero.selector(params, 'direction', {
			values: [
            'left',
            'up',
            'right',
            'down'
        ]
    }).on('change', function(value) {
        params['(value)'] = value;
    });
    aero.monitor(params, '(value)');
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
    aero.selector(params, 'vimKey', {
			values: {
            left:  'H',
            up:    'K',
            right: 'L',
            down:  'J'
        }
    }).on('change', function(value) {
        params['(value)'] = value;
    });
    aero.monitor(params, '(value)');
})();