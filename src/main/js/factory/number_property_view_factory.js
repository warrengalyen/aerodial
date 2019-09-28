const ListConstraint = require('../constraint/list_constraint');
const MaxNumberConstraint = require('../constraint/max_number_constraint');
const MinNumberConstraint = require('../constraint/min_number_constraint');
const StepNumberConstraint = require('../constraint/step_number_constraint');
const NumberRecordModel = require('../model/property/number_record_model');
const NumberModel = require('../model/property/number_model');
const ListControl = require('../view/control/list_control');
const NumberTextControl = require('../view/control/number_text_control');
const SliderTextControl = require('../view/control/slider_text_control');
const GraphMonitor = require('../view/monitor/graph_monitor');
const NumberTextMonitor = require('../view/monitor/number_text_monitor');
const PropertyViewFactory = require('./property_view_factory');

class NumberPropertyViewFactory extends PropertyViewFactory {
	static supports(value) {
		return typeof (value) === 'number';
	}

	static createModel_(options) {
		if (!options.forMonitor) {
			return new NumberModel();
		}

		if (options.graph) {
			return new NumberRecordModel(options.count);
		}

		return new NumberModel();
	}

	static createControl_(prop, options) {
		if (options.list !== undefined) {
			return new ListControl(prop);
		}

		return new NumberTextControl(prop);
	}

	static createMonitor_(property, options) {
		if (options.graph) {
			return new GraphMonitor(property);
		}

		return new NumberTextMonitor(property);
	}

	static createSlider(ref, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		return PropertyViewFactory.create2({
			reference: ref,
			constraintFactories: this.CONSTRAINT_FACTORIES,
			createModel: () => {
				return new NumberModel();
			},
			createView: (prop) => {
				return new SliderTextControl(prop);
			},
			options: options
		});
	}
}

NumberPropertyViewFactory.CONSTRAINT_FACTORIES = {
	/**
	 * Create the minimum value constraint.
	 * @param {number} value The minimum value.
	 * @return {Constraint}
	 */
	'min': (value) => {
		return new MinNumberConstraint(value);
	},
	/**
	 * Create the maximum value constraint.
	 * @param {number} value The maximum value.
	 * @return {Constraint}
	 */
	'max': (value) => {
		return new MaxNumberConstraint(value);
	},
	/**
	 * Create the step value constraint.
	 * @param {number} value The step value.
	 * @return {Constraint}
	 */
	'step': (value) => {
		return new StepNumberConstraint(value);
	},
	/**
	 * Create the list of values constraint.
	 * @param {Object.<string, number>} items The list of values.
	 * @return {Constraint}
	 */
	'list': (items) => {
		return new ListConstraint(
			Object.keys(items).map((key) => {
				return {
					name: key,
					value: items[key]
				};
			})
		);
	}
};

module.exports = NumberPropertyViewFactory;