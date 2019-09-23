const CoreInterface = require('./interface/core_interface');
const Core          = require('./core');

const Aerodial = (opt_options) => {
    const core = new Core(opt_options);
    return new CoreInterface(core);
};

window.Aerodial = Aerodial;

module.exports = Aerodial;