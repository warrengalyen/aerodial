(function() {
    var params = {
        keyColor: '#00ff00'
    };

    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('colorExample')
    });
    aero.add(params, 'keyColor');
})();