const PropertyControllerProvider = require('./misc/property_controller_provider');
const FluentProvider             = require('./misc/fluent_provider');
const FolderFluent               = require('./fluent/folder_fluent');
const Controller                 = require('./controller/controller');
const FolderController           = require('./controller/folder_controller');
const PropertyController         = require('./controller/property_controller');

class Seasoner {
    constructor(opt_options) {
        const rootController = new Controller();
        const rootView = rootController.getView();
        rootView.addClass('seasoner');
        this.rootController_ = rootController;

        const options = (opt_options !== undefined) ?
            opt_options :
            {};

        const autoPlace = (options.autoPlace !== undefined) ?
            options.autoPlace :
            true;
        if (autoPlace) {
            const containerElem = document.createElement('div');
            containerElem.className += 'seasonerDefaultContainer';
            containerElem.appendChild(rootView.getElement());
            document.body.appendChild(containerElem);
        }
    }

    getElement() {
        return this.rootController_.getView();
    }

    add(target, propName) {
        const controller = PropertyControllerProvider.provide(target, propName);
        if (controller === null) {
            // TODO: Error
            return null;
        }

        this.rootController_.addSubcontroller(controller);
        return FluentProvider.provide(controller);
    }

    addFolder(title) {
        const controller = new FolderController();
        controller.getView().setTitle(title);
        this.rootController_.addSubcontroller(controller);
        return new FolderFluent(controller);
    }

    loadJson(json) {
        // TODO: Implement
    }

    getAllPropertyControllers_() {
        let cons = [this.rootController_];
        const result = [];

        while (cons.length > 0) {
            const con = cons.splice(0, 1)[0];

            if (con instanceof PropertyController) {
                result.push(con);
            }

            cons = cons.concat(con.getSubcontrollers());
        }

        return result;
    }

    getJson() {
        const json = {};
        this.getAllPropertyControllers_().forEach((con) => {
            const key = con.getId();
            if (json[key] !== undefined) {
                // TODO: Found duplicated key
                throw new Error();
            }
            json[key] = con.getModel().getValue();
        });
        return json;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const params = {
        easing: 2,
        rotationAmount: 'str',
        speed: true,
        softness: 'foo',
        toothCount: false,
        shapeFactor: 4,
        param1: 2,
        param2: 'str'
    };
    const ss = new Seasoner();
    ss.add(params, 'easing').min(0).max(10);
    ss.add(params, 'param1').label('Very long long label');
    ss.add(params, 'param2');
    const fol1 = ss.addFolder('Motion');
    fol1.add(params, 'rotationAmount');
    fol1.add(params, 'speed');
    const fol2 = ss.addFolder('Appearance');
    fol2.add(params, 'softness').list(['foo', 'bar', 'baz']);
    fol2.add(params, 'toothCount');
    fol2.add(params, 'shapeFactor');

    setInterval(() => {
        document.getElementById('log').textContent = JSON.stringify(ss.getJson());
    }, 1000);
});