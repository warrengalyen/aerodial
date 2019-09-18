const CoreInterface = require('./interface/core_interface');
const Core          = require('./core');

window.Aerodial = function(opt_options) {
    const core = new Core(opt_options);
    return new CoreInterface(core);
};