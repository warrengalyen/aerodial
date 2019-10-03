import ListConstraint from '../constraint/list_constraint';
import LogRecordModel from '../model/property/log_record_model';
import StringModel from '../model/property/string_model';
import ListControl from '../view/control/list_control';
import TextControl from '../view/control/text_control';
import LogMonitor from '../view/monitor/log_monitor';
import MultilineTextMonitor from '../view/monitor/multiline_text_monitor';
import TextMonitor from '../view/monitor/text_monitor';
import PropertyViewFactory from './property_view_factory';

function createListItems(items) {
	// ['foo', 'bar']
	// => {'foo': 'foo', 'bar': 'bar'}
	if (Array.isArray(items)) {
		return items.map((value) => {
			return {
				name: value,
				value: value
			};
		});
	}

	const isObjectLiteral = Object.prototype.toString.call(items) === '[object Object]';
	if (isObjectLiteral) {
		return Object.keys(items).map((key) => {
			return {
				name: key,
				value: items[key]
			};
		});
	}

	return null;
}

const CONSTRAINT_FACTORIES = {
	/**
	 * Create the list of values constraint.
	 * @param {(string[]|Object.<string, string>)} items The list of values.
	 * @return {Constraint}
	 */
	'values': (items) => {
		return new ListConstraint(
			createListItems(items)
		);
	}
};

class StringPropertyViewFactory {
	static createText(ref, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		options.forMonitor = false;
		return PropertyViewFactory.create({
			reference: ref,
			constraintFactories: CONSTRAINT_FACTORIES,
			createModel: () => {
				return new StringModel();
			},
			createView: (prop) => {
				return new TextControl(prop);
			},
			options: options
		});
	}

	static createSelector(ref, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		options.forMonitor = false;
		return PropertyViewFactory.create({
			reference: ref,
			constraintFactories: CONSTRAINT_FACTORIES,
			createModel: () => {
				return new StringModel();
			},
			createView: (prop) => {
				return new ListControl(prop);
			},
			options: options
		});
	}

	static createMonitor(ref, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		options.forMonitor = true;
		return PropertyViewFactory.create({
			reference: ref,
			constraintFactories: CONSTRAINT_FACTORIES,
			createModel: () => {
				return new StringModel();
			},
			createView: (prop) => {
				return (options.multiline !== undefined) ?
					new MultilineTextMonitor(prop) :
					new TextMonitor(prop);
			},
			options: options
		});
	}

	static createLogger(ref, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		options.forMonitor = true;
		const count = (options.count !== undefined) ?
			options.count :
			10;
		return PropertyViewFactory.create({
			reference: ref,
			constraintFactories: CONSTRAINT_FACTORIES,
			createModel: () => {
				return new LogRecordModel(count);
			},
			createView: (prop) => {
				return new LogMonitor(prop);
			},
			options: options
		});
	}
}

module.exports = StringPropertyViewFactory;