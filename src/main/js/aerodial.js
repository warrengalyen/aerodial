import RootViewInterface from './interface/root_view_interface';
import RootView          from './view/root_view';

const Aerodial = (opt_options) => {
	const rootView = new RootView();
	return new RootViewInterface(rootView, opt_options);
};

export default Aerodial;