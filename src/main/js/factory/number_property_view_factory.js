const ListConstraint       = require('../constraint/list_constraint');
const MaxNumberConstraint  = require('../constraint/max_number_constraint');
const MinNumberConstraint  = require('../constraint/min_number_constraint');
const StepNumberConstraint = require('../constraint/step_number_constraint');
const DefaultNumberDisplay = require('../display/default_number_display');
const ViewUtil             = require('../misc/view_util');
const NumberModel          = require('../model/number_model');
const ListControl          = require('../view/control/list_control');
const SliderTextControl    = require('../view/control/slider_text_control');
const TextControl          = require('../view/control/text_control');
const PropertyViewFactory  = require('./property_view_factory');

class NumberPropertyViewFactory extends PropertyViewFactory {
    static supports(value) {
        return typeof(value) === 'number';
    }

    static createControlProperty(target, propName, opt_options) {
        const propView = super.createControlProperty(target, propName, opt_options);

        // TODO: Refactor
        // Set default number display
        ViewUtil.getAllSubviews(propView).forEach((subview) => {
            if (subview.setDisplay) {
                subview.setDisplay(new DefaultNumberDisplay());
            }
        });

        return propView;
    }

    static createMonitorProperty(target, propName, opt_options) {
        const propView = super.createMonitorProperty(target, propName, opt_options);

        // TODO: Refactor
        // Set default number display
        ViewUtil.getAllSubviews(propView).forEach((subview) => {
            if (subview.setDisplay) {
                subview.setDisplay(new DefaultNumberDisplay());
            }
        });

        return propView;
    }

    static instanciateModel_() {
        return new NumberModel();
    }

    static getControlClass_(options) {
        if (options.min !== undefined &&
            options.max !== undefined) {
            return SliderTextControl;
        }
        if (options.list !== undefined) {
            return ListControl;
        }

        return TextControl;
    }

    static getMonitorClass_(options) {
        return TextMonitor;
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