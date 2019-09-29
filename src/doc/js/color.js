(function() {
    var params = {
        keyColor: '#00ff00'
    };

    var aero = new Aerodial({
        foldable: false,
        container: document.getElementById('colorExample')
    });
    aero.addPalette(params, 'keyColor');
})();