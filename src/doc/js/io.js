function prettifyJson(json) {
    return JSON.stringify(json)
        .replace(/\{/g, '{\n  ')
        .replace(/,/g, ',\n  ')
        .replace(/\}/g, '\n}');
}

function showJson(json) {
    var jsonString = prettifyJson(json);
    document.getElementById('exportArea').textContent = jsonString;
    document.getElementById('importArea').textContent = jsonString;
}

(function() {
    var params = {
        color: '#f80',
        size: 10,
        speed: 1.0
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('exportExample')
    });
    aero.palette(params, 'color');
    aero.slider(params, 'size', {min: 1, max: 100});
    aero.slider(params, 'speed', {min: 0.0, max: 1.0});

    aero.on('change', function() {
        showJson(aero.getJson());
    });

    showJson(aero.getJson());
})();

(function() {
    var params = {
        color: '#08f',
        size: 20,
        speed: 0.5
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('importExample')
    });
    aero.addButton('Import').on('click', function() {
        var json = JSON.parse(document.getElementById('importArea').textContent);
        aero.setJson(json);
    });
    aero.addSeparator();
    aero.palette(params, 'color');
    aero.slider(params, 'size', {min: 1, max: 100});
    aero.slider(params, 'speed', {min: 0.0, max: 1.0});
})();

(function() {
    var params1 = {
        speed: 0.3
    };
    var params2 = {
        speed: 0.7
    };
    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('idExample')
    });
    aero.palette(params1, 'speed', {
        id: 'target1_speed',
        min: 0.0,
        max: 1.0
    });
    aero.palette(params2, 'speed', {
        id: 'target2_speed',
        min: 0.0,
        max: 1.0
    });

    aero.on('change', function() {
        document.getElementById('idArea').textContent = prettifyJson(aero.getJson());
    });
    document.getElementById('idArea').textContent = prettifyJson(aero.getJson());
})();