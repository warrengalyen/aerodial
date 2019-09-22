var sharedParams = {
    time: '',
    color: '#000000',
    active: false,
    wave: 0
};
var waveT = 0;
setInterval(function() {
    waveT += 0.02;
    sharedParams.wave = 3.0 * 4.0 / Math.PI * (
        Math.sin(waveT * 1 * Math.PI) +
        Math.sin(waveT * 3 * Math.PI) / 3 +
        Math.sin(waveT * 5 * Math.PI) / 5
    );

    var nWave = Math.pow(Math.sin(waveT), 2);
    var hex = (Math.floor(nWave * 255)).toString(16);
    if (hex.length === 1) {
        hex = '0' + hex;
    }
    sharedParams.color = '#00' + hex + '00';
    sharedParams.active = (nWave >= 0.5);
}, 50);
setInterval(function() {
    sharedParams.time = String(new Date()).match(/\d{2}:\d{2}:\d{2}/)[0];
}, 1000);

(function() {
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('textExample')
    });
    aero.monitor(sharedParams, 'time', {interval: 1000});
    aero.monitor(sharedParams, 'active');
    aero.monitor(sharedParams, 'color');
    aero.monitor(sharedParams, 'wave');
})();

(function() {
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('graphExample')
    });
    aero.monitor(sharedParams, 'wave', {
        graph: true,
        min: -5.0,
        max: +5.0,
        count: 200,
        interval: 30
    });
})();

(function() {
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('logExample')
    });
    aero.monitor(sharedParams, 'time', {
        count: 10
    });
})();

(function() {
    var params = {
        json: [
            '{',
            '  "content-length": ' + String(Math.floor(Math.random() * 1e6)),
            '  "content-type": "application/json"',
            '  "date": "' + String(new Date()) + '"',
            '}',
        ].join('\n')
    };

    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('multilineExample')
    });
    aero.monitor(params, 'json', {
        interval: 1e6,
        multiline: true
    });
})();

(function() {
    var aero = Aerodial({
        container: document.getElementById('intervalExample'),
        foldable: false
    });
    aero.monitor(sharedParams, 'wave', {
        interval: 500,
        label: 'wave (0.5s)'
    });
    aero.monitor(sharedParams, 'wave', {
        interval: 1000,
        label: 'wave (1.0s)'
    });
})();