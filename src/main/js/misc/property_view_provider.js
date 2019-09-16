const BooleanPropertyViewFactory = require('../factory/boolean_property_view_factory');
const ColorPropertyViewFactory   = require('../factory/color_property_view_factory');
const NumberPropertyViewFactory  = require('../factory/number_property_view_factory');
const StringPropertyViewFactory  = require('../factory/string_property_view_factory');
const Errors                     = require('../misc/errors');

const CONTROL_FACTORIES = [
    BooleanPropertyViewFactory,
    ColorPropertyViewFactory,
    NumberPropertyViewFactory,
    StringPropertyViewFactory
];

class PropertyViewProvider {
    static provideControlProperty(target, propName, opt_options) {
        const factory = this.getFactory_(target, propName);
        if (factory === null) {
            throw Errors.propertyTypeNotSupported(
                propName,
                target[propName]
            );
        }
        return factory.createControlProperty(target, propName, opt_options);
    }

    static provideMonitorProperty(target, propName, opt_options) {
        const factory = this.getFactory_(target, propName);
        if (factory === null) {
            throw Errors.propertyTypeNotSupported(
                propName,
                target[propName]
            );
        }
        return factory.createMonitorProperty(target, propName, opt_options);
    }

    static getFactory_(target, propName) {
        const value = target[propName];
        let factories = CONTROL_FACTORIES.reduce((results, factory) => {
            return factory.supports(value) ?
                results.concat(factory) :
                results;
        }, []);

        return (factories.length !== 0) ?
            factories[0] :
            null;
    }
}

module.exports = PropertyViewProvider;