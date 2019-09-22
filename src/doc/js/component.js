var params = {
    range: 10,
    power: 0.5,
    color: '#ff0000',
    size: 30
};

(function() {
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('folderExample1')
    });

    var folder1 = aero.addFolder('Interaction');
    folder1.add(params, 'power');
    folder1.add(params, 'range');

    var folder2 = aero.addFolder('Appearance');
    folder2.add(params, 'color')
    folder2.add(params, 'size');
})();

(function() {
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('folderExample2')
    });

    var folder1 = aero.addFolder('Interaction');
    folder1.add(params, 'power');
    folder1.add(params, 'range');
    folder1.close();

    var folder2 = aero.addFolder('Appearance');
    folder2.add(params, 'color')
    folder2.add(params, 'size');
})();

(function() {
    var params = {
        count: 0,
        '(log)': ''
    };
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('buttonExample')
    });
    aero.addButton('Fire').on('click', function() {
        params['(log)'] = 'clicked: ' + String(++params.count);
    });
    aero.monitor(params, '(log)', {
        count: 10
    });
})();

(function() {
    var aero = Aerodial({
        foldable: false,
        container: document.getElementById('separatorExample')
    });
    aero.addButton('Action');
    aero.addSeparator();
    aero.addButton('Import');
    aero.addButton('Export');
})();