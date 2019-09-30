const RootViewInterface = require('./interface/root_view_interface');
const RootView          = require('./view/root_view');

const Aerodial = (opt_options) => {
	const rootView = new RootView();
	return new RootViewInterface(rootView, opt_options);
};

module.exports = Aerodial;