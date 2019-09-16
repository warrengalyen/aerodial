const BooleanPropertyViewFactory = require('./boolean_property_view_factory');
const ColorPropertyViewFactory   = require('./color_property_view_factory');
const NumberPropertyViewFactory  = require('./number_property_view_factory');
const StringPropertyViewFactory  = require('./string_property_view_factory');
const Errors                     = require('../misc/errors');

const FACTORIES = [
    BooleanPropertyViewFactory,
    ColorPropertyViewFactory,
    NumberPropertyViewFactory,
    StringPropertyViewFactory
];

class PropertyViewFactoryComplex {
    static create(target, propName, monitor, opt_options) {
        const factory = this.getFactory_(target, propName);
        if (factory === null) {
            throw Errors.propertyTypeNotSupported(
                propName,
                target[propName]
            );
        }
        return factory.create(target, propName, monitor, opt_options);
    }

    static getFactory_(target, propName) {
        const value = target[propName];
        let factories = FACTORIES.reduce((results, factory) => {
            return factory.supports(value) ?
                results.concat(factory) :
                results;
        }, []);

        return (factories.length !== 0) ?
            factories[0] :
            null;
    }
}

module.exports = PropertyViewFactoryComplex;