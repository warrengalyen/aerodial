const Core = require('./core');

const Aerodial = (opt_options) => {
	return new Core(opt_options);
};

window.Aerodial = Aerodial;

module.exports = Aerodial;