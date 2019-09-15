(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BooleanModel = require('../model/boolean_model');
var CheckboxControl = require('../view/control/checkbox_control');
var PropertyController = require('./property_controller');

var BooleanPropertyController = (function (_PropertyController) {
    _inherits(BooleanPropertyController, _PropertyController);

    function BooleanPropertyController(target, propName) {
        _classCallCheck(this, BooleanPropertyController);

        _get(Object.getPrototypeOf(BooleanPropertyController.prototype), 'constructor', this).call(this, target, propName);

        this.setControl_(new CheckboxControl(this.getProperty().getModel()));
    }

    _createClass(BooleanPropertyController, [{
        key: 'instanciateModel_',
        value: function instanciateModel_() {
            return new BooleanModel();
        }
    }]);

    return BooleanPropertyController;
})(PropertyController);

module.exports = BooleanPropertyController;

},{"../model/boolean_model":24,"../view/control/checkbox_control":30,"./property_controller":5}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var View = require('../view/view');

var Controller = (function () {
    function Controller() {
        _classCallCheck(this, Controller);

        this.subcons_ = [];
        this.view_ = new View();
    }

    _createClass(Controller, [{
        key: 'getView',
        value: function getView() {
            return this.view_;
        }
    }, {
        key: 'getSubcontrollers',
        value: function getSubcontrollers() {
            return this.subcons_;
        }
    }, {
        key: 'addSubcontroller',
        value: function addSubcontroller(subcontroller) {
            if (this.subcons_.indexOf(subcontroller) >= 0) {
                return;
            }

            this.subcons_.push(subcontroller);
            this.view_.addSubview(subcontroller.getView());
        }
    }, {
        key: 'removeSubcontroller',
        value: function removeSubcontroller(subcontroller) {
            var index = this.subcons_.indexOf(subcontroller);
            if (index < 0) {
                return;
            }

            var view = subcontroller.getView();
            view.removeFromParent();
            this.subcons_.splice(index, 1);
        }
    }]);

    return Controller;
})();

module.exports = Controller;

},{"../view/view":37}],3:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FolderView = require('../view/folder_view');
var Controller = require('./controller');

var FolderController = (function (_Controller) {
    _inherits(FolderController, _Controller);

    function FolderController() {
        _classCallCheck(this, FolderController);

        _get(Object.getPrototypeOf(FolderController.prototype), 'constructor', this).call(this);

        this.view_ = new FolderView();
    }

    return FolderController;
})(Controller);

module.exports = FolderController;

},{"../view/folder_view":35,"./controller":2}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultNumberDisplay = require('../display/default_number_display');
var MaxNumberFormatter = require('../formatter/max_number_formatter');
var MinNumberFormatter = require('../formatter/min_number_formatter');
var NumberModel = require('../model/number_model');
var SliderTextControl = require('../view/control/slider_text_control');
var TextControl = require('../view/control/text_control');
var PropertyController = require('./property_controller');

var NumberPropertyController = (function (_PropertyController) {
    _inherits(NumberPropertyController, _PropertyController);

    function NumberPropertyController(target, propName) {
        _classCallCheck(this, NumberPropertyController);

        _get(Object.getPrototypeOf(NumberPropertyController.prototype), 'constructor', this).call(this, target, propName);

        this.display_ = new DefaultNumberDisplay();

        var ControlClass = this.getPreferredControlClass_();
        this.setControl_(new ControlClass(this.getProperty().getModel()));
    }

    _createClass(NumberPropertyController, [{
        key: 'getDisplay',
        value: function getDisplay() {
            return this.display_;
        }
    }, {
        key: 'setDisplay',
        value: function setDisplay(display) {
            this.display_ = display;
            this.appplyDisplay_();
        }
    }, {
        key: 'applyDisplay_',
        value: function applyDisplay_() {
            var textControl = this.getTextControl_();
            if (textControl === null) {
                return;
            }

            textControl.setDisplay(this.display_);
        }
    }, {
        key: 'instanciateModel_',
        value: function instanciateModel_() {
            return new NumberModel();
        }
    }, {
        key: 'getPreferredControlClass_',
        value: function getPreferredControlClass_() {
            var model = this.getProperty().getModel();
            if (model.findFormatterByClass(MinNumberFormatter) !== null && model.findFormatterByClass(MaxNumberFormatter) !== null) {
                return SliderTextControl;
            }

            return TextControl;
        }
    }, {
        key: 'getTextControl_',
        value: function getTextControl_() {
            var control = this.getView().getControl();

            if (control instanceof TextControl) {
                return control;
            }
            if (control instanceof SliderTextControl) {
                return control.getTextControl();
            }
            return null;
        }
    }, {
        key: 'setControl_',
        value: function setControl_(control) {
            _get(Object.getPrototypeOf(NumberPropertyController.prototype), 'setControl_', this).call(this, control);
            this.applyDisplay_();
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {
            var ControlClass = this.getPreferredControlClass_();
            if (!(this.getView().getControl() instanceof ControlClass)) {
                this.setControl_(new ControlClass(this.getProperty().getModel()));
            }

            _get(Object.getPrototypeOf(NumberPropertyController.prototype), 'applyModel_', this).call(this);
        }
    }]);

    return NumberPropertyController;
})(PropertyController);

module.exports = NumberPropertyController;

},{"../display/default_number_display":7,"../formatter/max_number_formatter":17,"../formatter/min_number_formatter":18,"../model/number_model":26,"../view/control/slider_text_control":33,"../view/control/text_control":34,"./property_controller":5}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = require('../model/model');
var Property = require('../model/property');
var Control = require('../view/control/control');
var PropertyView = require('../view/property_view');
var Controller = require('./controller');

var PropertyController = (function (_Controller) {
    _inherits(PropertyController, _Controller);

    function PropertyController(target, propName) {
        _classCallCheck(this, PropertyController);

        _get(Object.getPrototypeOf(PropertyController.prototype), 'constructor', this).call(this);

        var model = this.instanciateModel_();
        model.getEmitter().on(Model.EVENT_CHANGE, this.onModelChange_, this);
        this.prop_ = new Property(target, propName, model);

        this.view_ = new PropertyView(this.prop_);
    }

    _createClass(PropertyController, [{
        key: 'instanciateModel_',
        value: function instanciateModel_() {
            // TODO: Error
            throw new Error();
        }
    }, {
        key: 'getProperty',
        value: function getProperty() {
            return this.prop_;
        }
    }, {
        key: 'setControl_',
        value: function setControl_(control) {
            var view = this.getView();
            var prevControl = view.getControl();
            if (prevControl !== null) {
                prevControl.getEmitter().off(Control.EVENT_CHANGE, this.onControlChange_, this);
            }

            view.setControl(control);

            control.getEmitter().on(Control.EVENT_CHANGE, this.onControlChange_, this);
        }
    }, {
        key: 'startSync',
        value: function startSync(opt_interval) {
            var _this = this;

            var interval = opt_interval !== undefined ? opt_interval : 1000 / 30;
            setInterval(function () {
                _this.getProperty().applySourceValue();
            }, interval);

            this.getProperty().setDisabled(true);
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {}
    }, {
        key: 'onModelChange_',
        value: function onModelChange_() {
            this.applyModel_();
        }
    }, {
        key: 'onControlChange_',
        value: function onControlChange_(sender, value) {
            this.prop_.getModel().setValue(value);
        }
    }]);

    return PropertyController;
})(Controller);

module.exports = PropertyController;

},{"../model/model":25,"../model/property":27,"../view/control/control":31,"../view/property_view":36,"./controller":2}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringModel = require('../model/string_model');
var TextControl = require('../view/control/text_control');
var PropertyController = require('./property_controller');

var StringPropertyController = (function (_PropertyController) {
    _inherits(StringPropertyController, _PropertyController);

    function StringPropertyController(target, propName) {
        _classCallCheck(this, StringPropertyController);

        _get(Object.getPrototypeOf(StringPropertyController.prototype), 'constructor', this).call(this, target, propName);

        this.setControl_(new TextControl(this.getProperty().getModel()));
    }

    _createClass(StringPropertyController, [{
        key: 'instanciateModel_',
        value: function instanciateModel_() {
            return new StringModel();
        }
    }]);

    return StringPropertyController;
})(PropertyController);

module.exports = StringPropertyController;

},{"../model/string_model":28,"../view/control/text_control":34,"./property_controller":5}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = require('./display');

var DefaultNumberDisplay = (function (_Display) {
    _inherits(DefaultNumberDisplay, _Display);

    function DefaultNumberDisplay() {
        _classCallCheck(this, DefaultNumberDisplay);

        _get(Object.getPrototypeOf(DefaultNumberDisplay.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DefaultNumberDisplay, [{
        key: 'display',
        value: function display(value) {
            return value.toPrecision(3);
        }
    }]);

    return DefaultNumberDisplay;
})(Display);

module.exports = DefaultNumberDisplay;

},{"./display":8}],8:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Display = (function () {
    function Display() {
        _classCallCheck(this, Display);
    }

    _createClass(Display, [{
        key: "display",
        value: function display(value) {
            return value;
        }
    }]);

    return Display;
})();

module.exports = Display;

},{}],9:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fluent = (function () {
    function Fluent(controller) {
        _classCallCheck(this, Fluent);

        this.controller_ = controller;
    }

    _createClass(Fluent, [{
        key: "getController",
        value: function getController() {
            return this.controller_;
        }
    }]);

    return Fluent;
})();

module.exports = Fluent;

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyControllerProvider = require('../misc/property_controller_provider');
var FluentProvider = require('../misc/fluent_provider');
var Fluent = require('./fluent');

var FolderFluent = (function (_Fluent) {
    _inherits(FolderFluent, _Fluent);

    function FolderFluent() {
        _classCallCheck(this, FolderFluent);

        _get(Object.getPrototypeOf(FolderFluent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(FolderFluent, [{
        key: 'add',
        value: function add(target, propName) {
            var controller = PropertyControllerProvider.provide(target, propName);
            if (controller === null) {
                // TODO: Error
                return null;
            }

            this.getController().addSubcontroller(controller);

            return FluentProvider.provide(controller);
        }
    }, {
        key: 'open',
        value: function open() {
            this.view_.setExpanded(true, false);
        }
    }, {
        key: 'close',
        value: function close() {
            this.view_.setExpanded(false, false);
        }
    }]);

    return FolderFluent;
})(Fluent);

module.exports = FolderFluent;

},{"../misc/fluent_provider":22,"../misc/property_controller_provider":23,"./fluent":9}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaxNumberFormatter = require('../formatter/max_number_formatter');
var MinNumberFormatter = require('../formatter/min_number_formatter');
var StepNumberFormatter = require('../formatter/step_number_formatter');
var PropertyFluent = require('./property_fluent');

var NumberPropertyFluent = (function (_PropertyFluent) {
    _inherits(NumberPropertyFluent, _PropertyFluent);

    function NumberPropertyFluent() {
        _classCallCheck(this, NumberPropertyFluent);

        _get(Object.getPrototypeOf(NumberPropertyFluent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NumberPropertyFluent, [{
        key: 'min',

        /**
         * Set the minimum value.
         * @param {number} minValue The minimum value.
         * @return {NumberPropertyFluent}
         */
        value: function min(minValue) {
            var model = this.getController().getProperty().getModel();
            var formatter = model.findFormatterByClass(MinNumberFormatter);
            if (formatter === null) {
                formatter = new MinNumberFormatter();
                model.addFormatter(formatter);
            }

            formatter.setMinValue(minValue);

            return this;
        }

        /**
         * Set the maximum value.
         * @param {number} maxValue The maximum value.
         * @return {NumberPropertyFluent}
         */
    }, {
        key: 'max',
        value: function max(maxValue) {
            var model = this.getController().getProperty().getModel();
            var formatter = model.findFormatterByClass(MaxNumberFormatter);
            if (formatter === null) {
                formatter = new MaxNumberFormatter();
                model.addFormatter(formatter);
            }

            formatter.setMaxValue(maxValue);

            return this;
        }

        /**
         * Set the step value.
         * @param {number} stepValue The step value.
         * @return {NumberPropertyFluent}
         */
    }, {
        key: 'step',
        value: function step(stepValue) {
            var model = this.getController().getProperty().getModel();
            var formatter = model.findFormatterByClass(StepNumberFormatter);
            if (formatter === null) {
                formatter = new StepNumberFormatter();
                model.addFormatter(formatter);
            }

            formatter.setStepValue(stepValue);

            return this;
        }
    }]);

    return NumberPropertyFluent;
})(PropertyFluent);

module.exports = NumberPropertyFluent;

},{"../formatter/max_number_formatter":17,"../formatter/min_number_formatter":18,"../formatter/step_number_formatter":19,"./property_fluent":12}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fluent = require('./fluent');

var PropertyFluent = (function (_Fluent) {
    _inherits(PropertyFluent, _Fluent);

    function PropertyFluent() {
        _classCallCheck(this, PropertyFluent);

        _get(Object.getPrototypeOf(PropertyFluent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PropertyFluent, [{
        key: 'id',
        value: function id(_id) {
            var prop = this.getController().getView().getProperty();
            prop.setId(_id);
            return this;
        }
    }, {
        key: 'label',
        value: function label(_label) {
            var prop = this.getController().getView().getProperty();
            prop.setDisplayName(_label);
            return this;
        }
    }, {
        key: 'sync',
        value: function sync(opt_interval) {
            this.getController().startSync(opt_interval);
            return this;
        }
    }]);

    return PropertyFluent;
})(Fluent);

module.exports = PropertyFluent;

},{"./fluent":9}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyFluent = require('./property_fluent');

var StringPropertyFluent = (function (_PropertyFluent) {
    _inherits(StringPropertyFluent, _PropertyFluent);

    function StringPropertyFluent() {
        _classCallCheck(this, StringPropertyFluent);

        _get(Object.getPrototypeOf(StringPropertyFluent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StringPropertyFluent, [{
        key: 'list',
        value: function list(items) {
            // TODO: Implement
            return this;
        }
    }]);

    return StringPropertyFluent;
})(PropertyFluent);

module.exports = StringPropertyFluent;

},{"./property_fluent":12}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('./formatter');

var DefaultBooleanFormatter = (function (_Formatter) {
    _inherits(DefaultBooleanFormatter, _Formatter);

    function DefaultBooleanFormatter() {
        _classCallCheck(this, DefaultBooleanFormatter);

        _get(Object.getPrototypeOf(DefaultBooleanFormatter.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DefaultBooleanFormatter, [{
        key: 'format',
        value: function format(value) {
            return !!value;
        }
    }]);

    return DefaultBooleanFormatter;
})(Formatter);

module.exports = DefaultBooleanFormatter;

},{"./formatter":16}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('./formatter');

var DefaultNumberFormatter = (function (_Formatter) {
    _inherits(DefaultNumberFormatter, _Formatter);

    function DefaultNumberFormatter() {
        _classCallCheck(this, DefaultNumberFormatter);

        _get(Object.getPrototypeOf(DefaultNumberFormatter.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DefaultNumberFormatter, [{
        key: 'format',
        value: function format(value) {
            return Number(value);
        }
    }]);

    return DefaultNumberFormatter;
})(Formatter);

module.exports = DefaultNumberFormatter;

},{"./formatter":16}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = require('../misc/event_emitter');

var Formatter = (function () {
    function Formatter() {
        _classCallCheck(this, Formatter);

        this.emitter_ = new EventEmitter();
    }

    _createClass(Formatter, [{
        key: 'getEmitter',
        value: function getEmitter() {
            return this.emitter_;
        }
    }, {
        key: 'format',
        value: function format(value) {
            return value;
        }
    }]);

    return Formatter;
})();

Formatter.EVENT_CHANGE = 'change';

module.exports = Formatter;

},{"../misc/event_emitter":21}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('./formatter');

var MaxNumberFormatter = (function (_Formatter) {
    _inherits(MaxNumberFormatter, _Formatter);

    function MaxNumberFormatter() {
        _classCallCheck(this, MaxNumberFormatter);

        _get(Object.getPrototypeOf(MaxNumberFormatter.prototype), 'constructor', this).call(this);

        this.maxValue_ = 1.0;
    }

    _createClass(MaxNumberFormatter, [{
        key: 'getMaxValue',
        value: function getMaxValue() {
            return this.maxValue_;
        }
    }, {
        key: 'setMaxValue',
        value: function setMaxValue(maxValue) {
            this.maxValue_ = maxValue;
            this.getEmitter().notifyObservers(Formatter.EVENT_CHANGE);
        }
    }, {
        key: 'format',
        value: function format(value) {
            return Math.min(value, this.maxValue_);
        }
    }]);

    return MaxNumberFormatter;
})(Formatter);

module.exports = MaxNumberFormatter;

},{"./formatter":16}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('./formatter');

var MinNumberFormatter = (function (_Formatter) {
    _inherits(MinNumberFormatter, _Formatter);

    function MinNumberFormatter() {
        _classCallCheck(this, MinNumberFormatter);

        _get(Object.getPrototypeOf(MinNumberFormatter.prototype), 'constructor', this).call(this);

        this.minValue_ = 0.0;
    }

    _createClass(MinNumberFormatter, [{
        key: 'getMinValue',
        value: function getMinValue() {
            return this.minValue_;
        }
    }, {
        key: 'setMinValue',
        value: function setMinValue(minValue) {
            this.minValue_ = minValue;
            this.getEmitter().notifyObservers(Formatter.EVENT_CHANGE);
        }
    }, {
        key: 'format',
        value: function format(value) {
            return Math.max(value, this.minValue_);
        }
    }]);

    return MinNumberFormatter;
})(Formatter);

module.exports = MinNumberFormatter;

},{"./formatter":16}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('./formatter');

var StepNumberFormatter = (function (_Formatter) {
    _inherits(StepNumberFormatter, _Formatter);

    function StepNumberFormatter() {
        _classCallCheck(this, StepNumberFormatter);

        _get(Object.getPrototypeOf(StepNumberFormatter.prototype), 'constructor', this).call(this);

        this.stepValue_ = 1.0;
    }

    _createClass(StepNumberFormatter, [{
        key: 'getStep',
        value: function getStep() {
            return this.stepValue_;
        }
    }, {
        key: 'setStepValue',
        value: function setStepValue(stepValue) {
            this.stepValue_ = stepValue;
            this.getEmitter().notifyObservers(Formatter.EVENT_CHANGE);
        }
    }, {
        key: 'format',
        value: function format(value) {
            return value - value % this.stepValue_;
        }
    }]);

    return StepNumberFormatter;
})(Formatter);

module.exports = StepNumberFormatter;

},{"./formatter":16}],20:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassName = (function () {
    function ClassName() {
        _classCallCheck(this, ClassName);
    }

    _createClass(ClassName, null, [{
        key: "get",
        value: function get(block, opt_element, opt_modifier) {
            var result = "ssjs" + block;
            if (opt_element) {
                result += "_" + opt_element;
            }
            if (opt_modifier) {
                result += "-" + opt_modifier;
            }
            return result;
        }
    }]);

    return ClassName;
})();

module.exports = ClassName;

},{}],21:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.observers_ = {};
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(eventName, handler, opt_scope) {
            var observers = this.observers_[eventName];
            if (observers === undefined) {
                observers = this.observers_[eventName] = [];
            }

            observers.push({
                handler: handler,
                opt_scope: opt_scope
            });
        }
    }, {
        key: "off",
        value: function off(eventName, handler) {
            var observers = this.observers_[eventName];

            observers = observers.filter(function (observer) {
                return observer.handler !== handler;
            });
        }
    }, {
        key: "notifyObservers",
        value: function notifyObservers(eventName, opt_args) {
            var _this = this;

            var observers = this.observers_[eventName];
            if (observers === undefined) {
                return;
            }

            observers.forEach(function (observer) {
                var scope = observer.opt_scope !== undefined ? observer.opt_scope : _this;
                var args = opt_args !== undefined ? [_this].concat(opt_args) : [_this];
                observer.handler.apply(scope, args);
            });
        }
    }]);

    return EventEmitter;
})();

;

module.exports = EventEmitter;

},{}],22:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NumberPropertyController = require('../controller/number_property_controller');
var NumberPropertyFluent = require('../fluent/number_property_fluent');
var PropertyFluent = require('../fluent/property_fluent');
var StringPropertyController = require('../controller/string_property_controller');
var StringPropertyFluent = require('../fluent/string_property_fluent');

var FluentProvider = (function () {
    function FluentProvider() {
        _classCallCheck(this, FluentProvider);
    }

    _createClass(FluentProvider, null, [{
        key: 'provide',
        value: function provide(controller) {
            if (controller instanceof NumberPropertyController) {
                return new NumberPropertyFluent(controller);
            }
            if (controller instanceof StringPropertyController) {
                return new StringPropertyFluent(controller);
            }

            return new PropertyFluent(controller);
        }
    }]);

    return FluentProvider;
})();

module.exports = FluentProvider;

},{"../controller/number_property_controller":4,"../controller/string_property_controller":6,"../fluent/number_property_fluent":11,"../fluent/property_fluent":12,"../fluent/string_property_fluent":13}],23:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BooleanPropertyController = require('../controller/boolean_property_controller');
var NumberPropertyController = require('../controller/number_property_controller');
var StringPropertyController = require('../controller/string_property_controller');

var PropertyControllerProvider = (function () {
    function PropertyControllerProvider() {
        _classCallCheck(this, PropertyControllerProvider);
    }

    _createClass(PropertyControllerProvider, null, [{
        key: 'provide',
        value: function provide(target, propName) {
            var value = target[propName];
            var controller = null;

            if (typeof value === 'boolean') {
                controller = new BooleanPropertyController(target, propName);
            }
            if (typeof value === 'number') {
                controller = new NumberPropertyController(target, propName);
            }
            if (typeof value === 'string') {
                controller = new StringPropertyController(target, propName);
            }

            if (controller !== null) {
                controller.getProperty().applySourceValue();
            }

            return controller;
        }
    }]);

    return PropertyControllerProvider;
})();

module.exports = PropertyControllerProvider;

},{"../controller/boolean_property_controller":1,"../controller/number_property_controller":4,"../controller/string_property_controller":6}],24:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultBooleanFormatter = require('../formatter/default_boolean_formatter');
var Model = require('./model');

var BooleanModel = (function (_Model) {
    _inherits(BooleanModel, _Model);

    function BooleanModel() {
        _classCallCheck(this, BooleanModel);

        _get(Object.getPrototypeOf(BooleanModel.prototype), 'constructor', this).call(this);

        this.value_ = false;
        this.addFormatter(new DefaultBooleanFormatter());
    }

    _createClass(BooleanModel, [{
        key: 'validate',
        value: function validate(value) {
            return typeof value === 'boolean';
        }
    }]);

    return BooleanModel;
})(Model);

module.exports = BooleanModel;

},{"../formatter/default_boolean_formatter":14,"./model":25}],25:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Formatter = require('../formatter/formatter');
var EventEmitter = require('../misc/event_emitter');

var Model = (function () {
    function Model() {
        _classCallCheck(this, Model);

        this.emitter_ = new EventEmitter();
        this.value_ = null;
        this.formatters_ = [];
    }

    _createClass(Model, [{
        key: 'getEmitter',
        value: function getEmitter() {
            return this.emitter_;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.value_;
        }
    }, {
        key: 'format_',
        value: function format_() {
            this.value_ = this.formatters_.reduce(function (v, formatter) {
                return formatter.format(v);
            }, this.value_);
            this.emitter_.notifyObservers(Model.EVENT_CHANGE);
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            if (!this.validate(value)) {
                return false;
            }

            this.value_ = value;
            this.format_();
            this.emitter_.notifyObservers(Model.EVENT_CHANGE);

            return true;
        }
    }, {
        key: 'findFormatterByClass',
        value: function findFormatterByClass(FormatterClass) {
            var result = this.formatters_.filter(function (formatter) {
                return formatter instanceof FormatterClass;
            });
            return result.length > 0 ? result[0] : null;
        }
    }, {
        key: 'addFormatter',
        value: function addFormatter(formatter) {
            // TODO: Check duplication

            formatter.getEmitter().on(Formatter.EVENT_CHANGE, this.onFormatterChange_, this);

            this.formatters_.push(formatter);

            this.format_();
        }
    }, {
        key: 'onFormatterChange_',
        value: function onFormatterChange_() {
            this.format_();
        }
    }]);

    return Model;
})();

Model.EVENT_CHANGE = 'change';

module.exports = Model;

},{"../formatter/formatter":16,"../misc/event_emitter":21}],26:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultNumberFormatter = require('../formatter/default_number_formatter');
var Model = require('./model');

var NumberModel = (function (_Model) {
    _inherits(NumberModel, _Model);

    function NumberModel() {
        _classCallCheck(this, NumberModel);

        _get(Object.getPrototypeOf(NumberModel.prototype), 'constructor', this).call(this);

        this.value_ = 0.0;
        this.addFormatter(new DefaultNumberFormatter());
    }

    _createClass(NumberModel, [{
        key: 'validate',
        value: function validate(value) {
            return !isNaN(Number(value));
        }
    }]);

    return NumberModel;
})(Model);

module.exports = NumberModel;

},{"../formatter/default_number_formatter":15,"./model":25}],27:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = require('../misc/event_emitter');

var Property = (function () {
    function Property(target, propName, model) {
        _classCallCheck(this, Property);

        this.target_ = target;
        this.propName_ = propName;
        this.model_ = model;
        this.displayName_ = propName;
        this.id_ = propName;

        this.disabled_ = false;
        this.emitter_ = new EventEmitter();
    }

    _createClass(Property, [{
        key: 'getEmitter',
        value: function getEmitter() {
            return this.emitter_;
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            return this.target_;
        }
    }, {
        key: 'getPropertyName',
        value: function getPropertyName() {
            return this.propName_;
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id_;
        }
    }, {
        key: 'setId',
        value: function setId(id) {
            this.id_ = id;
            this.emitter_.notifyObservers(this.constructor.EVENT_CHANGE);
        }
    }, {
        key: 'getDisplayName',
        value: function getDisplayName() {
            return this.displayName_;
        }
    }, {
        key: 'setDisplayName',
        value: function setDisplayName(displayName) {
            this.displayName_ = displayName;
            this.emitter_.notifyObservers(this.constructor.EVENT_CHANGE);
        }
    }, {
        key: 'getModel',
        value: function getModel() {
            return this.model_;
        }
    }, {
        key: 'isDisabled',
        value: function isDisabled() {
            return this.disabled_;
        }
    }, {
        key: 'setDisabled',
        value: function setDisabled(disabled) {
            this.disabled_ = disabled;
            this.emitter_.notifyObservers(this.constructor.EVENT_CHANGE);
        }
    }, {
        key: 'applySourceValue',
        value: function applySourceValue() {
            this.model_.setValue(this.target_[this.propName_]);
        }
    }, {
        key: 'updateSourceValue',
        value: function updateSourceValue() {
            this.target_[this.propName_] = this.model_.getValue();
        }
    }]);

    return Property;
})();

Property.EVENT_CHANGE = 'change';

module.exports = Property;

},{"../misc/event_emitter":21}],28:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = require('./model');

var StringModel = (function (_Model) {
    _inherits(StringModel, _Model);

    function StringModel() {
        _classCallCheck(this, StringModel);

        _get(Object.getPrototypeOf(StringModel.prototype), 'constructor', this).call(this);

        this.value_ = '';
    }

    _createClass(StringModel, [{
        key: 'validate',
        value: function validate(value) {
            return typeof value === 'string';
        }
    }]);

    return StringModel;
})(Model);

module.exports = StringModel;

},{"./model":25}],29:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClassName = require('./misc/class_name');
var PropertyControllerProvider = require('./misc/property_controller_provider');
var FluentProvider = require('./misc/fluent_provider');
var FolderFluent = require('./fluent/folder_fluent');
var Controller = require('./controller/controller');
var FolderController = require('./controller/folder_controller');
var PropertyController = require('./controller/property_controller');

var Aerodial = (function () {
    function Aerodial(opt_options) {
        _classCallCheck(this, Aerodial);

        var rootController = new Controller();
        var rootView = rootController.getView();
        rootView.addClass(ClassName.get(''));
        this.rootController_ = rootController;

        var options = opt_options !== undefined ? opt_options : {};

        var autoPlace = options.autoPlace !== undefined ? options.autoPlace : true;
        if (autoPlace) {
            var containerElem = document.createElement('div');
            containerElem.className += ClassName.get('DefaultContainer');
            containerElem.appendChild(rootView.getElement());
            document.body.appendChild(containerElem);
        }
    }

    _createClass(Aerodial, [{
        key: 'getElement',
        value: function getElement() {
            return this.rootController_.getView();
        }
    }, {
        key: 'add',
        value: function add(target, propName) {
            var controller = PropertyControllerProvider.provide(target, propName);
            if (controller === null) {
                // TODO: Error
                return null;
            }

            this.rootController_.addSubcontroller(controller);
            return FluentProvider.provide(controller);
        }
    }, {
        key: 'addFolder',
        value: function addFolder(title) {
            var controller = new FolderController();
            controller.getView().setTitle(title);
            this.rootController_.addSubcontroller(controller);
            return new FolderFluent(controller);
        }
    }, {
        key: 'getAllProperties_',
        value: function getAllProperties_() {
            var cons = [this.rootController_];
            var result = {};

            while (cons.length > 0) {
                var con = cons.splice(0, 1)[0];

                if (con instanceof PropertyController) {
                    var prop = con.getProperty();
                    var propId = prop.getId();
                    if (result[propId] !== undefined) {
                        // TODO: Found duplicated key
                        throw new Error();
                    }
                    result[propId] = prop;
                }

                cons = cons.concat(con.getSubcontrollers());
            }

            return result;
        }
    }, {
        key: 'loadJson',
        value: function loadJson(json) {
            var props = this.getAllProperties_();
            Object.keys(json).forEach(function (propId) {
                var prop = props[propId];
                if (prop === undefined) {
                    return;
                }

                prop.getModel().setValue(json[propId]);
            });
        }
    }, {
        key: 'getJson',
        value: function getJson() {
            var props = this.getAllProperties_();
            return Object.keys(props).reduce(function (result, propId) {
                result[propId] = props[propId].getModel().getValue();
                return result;
            }, {});
        }
    }]);

    return Aerodial;
})();

window.addEventListener('DOMContentLoaded', function () {
    var params = {
        easing: 2,
        rotationAmount: 'str',
        speed: true,
        softness: 'foo',
        toothCount: false,
        shapeFactor: 4,
        param1: 2,
        param2: 'str'
    };
    var ss = new Aerodial();
    ss.add(params, 'easing').min(0).max(10);
    ss.add(params, 'param1').label('Very long long label').step(0.1).sync();
    ss.add(params, 'param2');
    var fol1 = ss.addFolder('Motion');
    fol1.add(params, 'rotationAmount');
    fol1.add(params, 'speed');
    var fol2 = ss.addFolder('Appearance');
    fol2.add(params, 'softness').list(['foo', 'bar', 'baz']);
    fol2.add(params, 'toothCount');
    fol2.add(params, 'shapeFactor');

    var t = 0;
    setInterval(function () {
        params.param1 = Math.sin(t * 2 * Math.PI) * 10;
        t = (t + 0.01) % 1.0;
    }, 1000 / 30);

    setInterval(function () {
        document.getElementById('log').textContent = JSON.stringify(ss.getJson());
    }, 1000);
});

},{"./controller/controller":2,"./controller/folder_controller":3,"./controller/property_controller":5,"./fluent/folder_fluent":10,"./misc/class_name":20,"./misc/fluent_provider":22,"./misc/property_controller_provider":23}],30:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var Control = require('./control');

var CheckboxControl = (function (_Control) {
    _inherits(CheckboxControl, _Control);

    function CheckboxControl() {
        _classCallCheck(this, CheckboxControl);

        _get(Object.getPrototypeOf(CheckboxControl.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CheckboxControl, [{
        key: 'createElement_',
        value: function createElement_() {
            _get(Object.getPrototypeOf(CheckboxControl.prototype), 'createElement_', this).call(this);

            this.addClass(ClassName.get('CheckboxControl'));

            var elem = this.getElement();

            var inputElem = document.createElement('input');
            inputElem.className += ClassName.get('CheckboxControl', 'input');
            inputElem.type = 'checkbox';
            elem.appendChild(inputElem);
            inputElem.addEventListener('change', this.onInputElementChange_.bind(this));
            this.inputElem_ = inputElem;

            var macheElem = document.createElement('div');
            macheElem.className += ClassName.get('CheckboxControl', 'mache');
            elem.appendChild(macheElem);
        }
    }, {
        key: 'applyDisabled_',
        value: function applyDisabled_() {
            _get(Object.getPrototypeOf(CheckboxControl.prototype), 'applyDisabled_', this).call(this);

            this.inputElem_.disabled = this.isDisabled();
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(CheckboxControl.prototype), 'applyModel_', this).call(this);

            this.inputElem_.checked = this.getModel().getValue();
        }
    }, {
        key: 'onInputElementChange_',
        value: function onInputElementChange_() {
            this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.inputElem_.checked]);
        }
    }]);

    return CheckboxControl;
})(Control);

module.exports = CheckboxControl;

},{"../../misc/class_name":20,"./control":31}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var EventEmitter = require('../../misc/event_emitter');
var Model = require('../../model/model');
var View = require('../view');

var Control = (function (_View) {
    _inherits(Control, _View);

    function Control(model) {
        _classCallCheck(this, Control);

        _get(Object.getPrototypeOf(Control.prototype), 'constructor', this).call(this);

        this.emitter_ = new EventEmitter();
        this.disabled_ = false;

        model.getEmitter().on(Model.EVENT_CHANGE, this.onModelChange_, this);

        this.model_ = model;
        this.applyModel_();
    }

    _createClass(Control, [{
        key: 'getModel',
        value: function getModel() {
            return this.model_;
        }
    }, {
        key: 'getEmitter',
        value: function getEmitter() {
            return this.emitter_;
        }
    }, {
        key: 'isDisabled',
        value: function isDisabled() {
            return this.disabled_;
        }
    }, {
        key: 'setDisabled',
        value: function setDisabled(disabled) {
            this.disabled_ = disabled;
            this.applyDisabled_();
        }
    }, {
        key: 'applyDisabled_',
        value: function applyDisabled_() {
            var disabledClass = ClassName.get(this.constructor.BLOCK_CLASS, null, 'disabled');
            if (this.disabled_) {
                this.addClass(disabledClass);
            } else {
                this.removeClass(disabledClass);
            }
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {}
    }, {
        key: 'onModelChange_',
        value: function onModelChange_() {
            this.applyModel_();
        }
    }]);

    return Control;
})(View);

Control.BLOCK_CLASS = 'Control';
Control.EVENT_CHANGE = 'change';

module.exports = Control;

},{"../../misc/class_name":20,"../../misc/event_emitter":21,"../../model/model":25,"../view":37}],32:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaxNumberFormatter = require('../../formatter/max_number_formatter');
var MinNumberFormatter = require('../../formatter/min_number_formatter');
var ClassName = require('../../misc/class_name');
var Control = require('./control');

var SliderControl = (function (_Control) {
    _inherits(SliderControl, _Control);

    function SliderControl(model) {
        _classCallCheck(this, SliderControl);

        _get(Object.getPrototypeOf(SliderControl.prototype), 'constructor', this).call(this, model);

        this.captured_ = false;
    }

    _createClass(SliderControl, [{
        key: 'createElement_',
        value: function createElement_() {
            _get(Object.getPrototypeOf(SliderControl.prototype), 'createElement_', this).call(this);

            this.addClass(ClassName.get(SliderControl.BLOCK_CLASS));

            var sliderElem = document.createElement('div');
            sliderElem.className += ClassName.get(SliderControl.BLOCK_CLASS, 'outer');
            sliderElem.addEventListener('mousedown', this.onSliderElementMouseDown_.bind(this));
            window.addEventListener('mousemove', this.onWindowMouseMove_.bind(this));
            window.addEventListener('mouseup', this.onWindowMouseUp_.bind(this));
            this.getElement().appendChild(sliderElem);
            this.sliderElem_ = sliderElem;

            var sliderBarElem = document.createElement('div');
            sliderBarElem.className += ClassName.get(SliderControl.BLOCK_CLASS, 'inner');
            this.sliderElem_.appendChild(sliderBarElem);
            this.sliderBarElem_ = sliderBarElem;
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(SliderControl.prototype), 'applyModel_', this).call(this);

            var model = this.getModel();
            var minValue = model.findFormatterByClass(MinNumberFormatter).getMinValue();
            var maxValue = model.findFormatterByClass(MaxNumberFormatter).getMaxValue();
            var p = (model.getValue() - minValue) / (maxValue - minValue);
            this.sliderBarElem_.style.width = p * 100 + '%';
        }
    }, {
        key: 'getValueFromX_',
        value: function getValueFromX_(x) {
            var model = this.getModel();
            var minValue = model.findFormatterByClass(MinNumberFormatter).getMinValue();
            var maxValue = model.findFormatterByClass(MaxNumberFormatter).getMaxValue();
            var width = this.sliderElem_.clientWidth;
            var p = Math.min(Math.max(x / width, 0), 1.0);
            return minValue + (maxValue - minValue) * p;
        }
    }, {
        key: 'onSliderElementMouseDown_',
        value: function onSliderElementMouseDown_(e) {
            if (this.isDisabled()) {
                return;
            }

            this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.getValueFromX_(e.offsetX)]);

            this.captured_ = true;
        }
    }, {
        key: 'onWindowMouseMove_',
        value: function onWindowMouseMove_(e) {
            if (!this.captured_) {
                return;
            }

            var elemLeft = window.scrollX + this.getElement().getBoundingClientRect().left;
            var offsetX = e.pageX - elemLeft;
            this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.getValueFromX_(offsetX)]);
        }
    }, {
        key: 'onWindowMouseUp_',
        value: function onWindowMouseUp_() {
            this.captured_ = false;
        }
    }]);

    return SliderControl;
})(Control);

SliderControl.BLOCK_CLASS = 'SliderControl';

module.exports = SliderControl;

},{"../../formatter/max_number_formatter":17,"../../formatter/min_number_formatter":18,"../../misc/class_name":20,"./control":31}],33:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var Control = require('./control');
var SliderControl = require('./slider_control');
var TextControl = require('./text_control');

var SliderTextControl = (function (_Control) {
    _inherits(SliderTextControl, _Control);

    function SliderTextControl(model) {
        _classCallCheck(this, SliderTextControl);

        _get(Object.getPrototypeOf(SliderTextControl.prototype), 'constructor', this).call(this, model);

        // TODO: When createElement_ is called from the View constructor, model has not been set yet.
        // Is createElement_ necessary in the first place?
        var sliderControl = new SliderControl(this.getModel());
        sliderControl.addClass(ClassName.get(SliderControl.BLOCK_CLASS, null, 'sliderText'));
        sliderControl.getEmitter().on(Control.EVENT_CHANGE, this.onSubcontrolChange_, this);
        this.addSubview(sliderControl);
        this.sliderControl_ = sliderControl;

        var textControl = new TextControl(this.getModel());
        textControl.addClass(ClassName.get(TextControl.BLOCK_CLASS, null, 'sliderText'));
        textControl.getEmitter().on(Control.EVENT_CHANGE, this.onSubcontrolChange_, this);
        this.addSubview(textControl);
        this.textControl_ = textControl;
    }

    _createClass(SliderTextControl, [{
        key: 'createElement_',
        value: function createElement_() {
            _get(Object.getPrototypeOf(SliderTextControl.prototype), 'createElement_', this).call(this);

            this.addClass(ClassName.get(SliderTextControl.BLOCK_CLASS));
        }
    }, {
        key: 'getSliderControl',
        value: function getSliderControl() {
            return this.sliderControl_;
        }
    }, {
        key: 'getTextControl',
        value: function getTextControl() {
            return this.textControl_;
        }
    }, {
        key: 'applyDisabled_',
        value: function applyDisabled_() {
            _get(Object.getPrototypeOf(SliderTextControl.prototype), 'applyDisabled_', this).call(this);

            var disabled = this.isDisabled();
            this.sliderControl_.setDisabled(disabled);
            this.textControl_.setDisabled(disabled);
        }
    }, {
        key: 'onSubcontrolChange_',
        value: function onSubcontrolChange_(sender, value) {
            this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [value]);
        }
    }]);

    return SliderTextControl;
})(Control);

SliderTextControl.BLOCK_CLASS = 'SliderTextControl';

module.exports = SliderTextControl;

},{"../../misc/class_name":20,"./control":31,"./slider_control":32,"./text_control":34}],34:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = require('../../display/display');
var ClassName = require('../../misc/class_name');
var Control = require('./control');

var TextControl = (function (_Control) {
    _inherits(TextControl, _Control);

    function TextControl(model) {
        _classCallCheck(this, TextControl);

        _get(Object.getPrototypeOf(TextControl.prototype), 'constructor', this).call(this, model);

        this.display_ = new Display();
    }

    _createClass(TextControl, [{
        key: 'createElement_',
        value: function createElement_() {
            _get(Object.getPrototypeOf(TextControl.prototype), 'createElement_', this).call(this);

            this.addClass(ClassName.get(TextControl.BLOCK_CLASS));

            var inputElem = document.createElement('input');
            inputElem.className += ClassName.get(TextControl.BLOCK_CLASS, 'input');
            inputElem.type = 'text';
            this.getElement().appendChild(inputElem);
            inputElem.addEventListener('change', this.onInputElementChange_.bind(this));
            this.inputElem_ = inputElem;
        }
    }, {
        key: 'getDisplay',
        value: function getDisplay() {
            return this.display_;
        }
    }, {
        key: 'setDisplay',
        value: function setDisplay(display) {
            this.display_ = display;
            this.applyModel_();
        }
    }, {
        key: 'applyDisabled_',
        value: function applyDisabled_() {
            _get(Object.getPrototypeOf(TextControl.prototype), 'applyDisabled_', this).call(this);

            this.inputElem_.readOnly = this.isDisabled();
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(TextControl.prototype), 'applyModel_', this).call(this);

            if (this.display_) {
                this.inputElem_.value = this.display_.display(this.getModel().getValue());
            }
        }
    }, {
        key: 'onInputElementChange_',
        value: function onInputElementChange_() {
            this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.inputElem_.value]);
        }
    }]);

    return TextControl;
})(Control);

TextControl.BLOCK_CLASS = 'TextControl';

module.exports = TextControl;

},{"../../display/display":8,"../../misc/class_name":20,"./control":31}],35:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var View = require('./view');

var FolderView = (function (_View) {
    _inherits(FolderView, _View);

    function FolderView() {
        _classCallCheck(this, FolderView);

        _get(Object.getPrototypeOf(FolderView.prototype), 'constructor', this).call(this);

        this.title_ = '';
        this.setExpanded(true, false);
    }

    _createClass(FolderView, [{
        key: 'createElement_',
        value: function createElement_() {
            _get(Object.getPrototypeOf(FolderView.prototype), 'createElement_', this).call(this);

            this.addClass(ClassName.get('FolderView'));

            var elem = this.getElement();

            var titleElem = document.createElement('div');
            titleElem.className += ClassName.get('FolderView', 'title');
            titleElem.addEventListener('click', this.onTitleElementClick_.bind(this));
            elem.appendChild(titleElem);
            this.titleElem_ = titleElem;

            var containerElem = document.createElement('div');
            containerElem.className += ClassName.get('FolderView', 'container');
            elem.appendChild(containerElem);
            this.containerElem_ = containerElem;
        }
    }, {
        key: 'getContainerElement_',
        value: function getContainerElement_() {
            return this.containerElem_;
        }
    }, {
        key: 'isExpanded',
        value: function isExpanded() {
            return this.expanded_;
        }
    }, {
        key: 'setExpanded',
        value: function setExpanded(expanded, opt_animated) {
            this.expanded_ = expanded;
            this.applyExpanded_(opt_animated);
        }
    }, {
        key: 'applyExpandingAnimationEnabled_',
        value: function applyExpandingAnimationEnabled_(enabled) {
            var classes = this.containerElem_.className.split(' ');
            var className = ClassName.get('FolderView', 'container', 'animated');
            if (enabled) {
                if (classes.indexOf(className) < 0) {
                    classes.push(className);
                }
            } else {
                classes = classes.filter(function (klass) {
                    return klass !== className;
                });
            }

            this.containerElem_.className = classes.join(' ');
        }
    }, {
        key: 'applyExpanded_',
        value: function applyExpanded_(opt_animated) {
            var animated = opt_animated !== undefined ? opt_animated : true;
            this.applyExpandingAnimationEnabled_(animated);

            var contentHeight = this.expanded_ ? this.getContentHeight_() : 0;
            this.containerElem_.style.height = contentHeight + 'px';
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            return this.title_;
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this.title_ = title;
            this.applyTitle_();
        }
    }, {
        key: 'applyTitle_',
        value: function applyTitle_() {
            this.titleElem_.textContent = this.title_;
        }
    }, {
        key: 'getContentHeight_',
        value: function getContentHeight_() {
            return this.subviews_.reduce(function (prevValue, curValue) {
                return prevValue + curValue.getElement().offsetHeight;
            }, 0);
        }
    }, {
        key: 'addSubview',
        value: function addSubview(subview) {
            _get(Object.getPrototypeOf(FolderView.prototype), 'addSubview', this).call(this, subview);
            this.applyExpanded_(false);
        }
    }, {
        key: 'onTitleElementClick_',
        value: function onTitleElementClick_() {
            this.setExpanded(!this.isExpanded());
        }
    }]);

    return FolderView;
})(View);

module.exports = FolderView;

},{"../misc/class_name":20,"./view":37}],36:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var Property = require('../model/property');
var View = require('./view');

var PropertyView = (function (_View) {
    _inherits(PropertyView, _View);

    function PropertyView(property) {
        _classCallCheck(this, PropertyView);

        _get(Object.getPrototypeOf(PropertyView.prototype), 'constructor', this).call(this);

        this.control_ = null;

        this.prop_ = property;
        this.prop_.getEmitter().on(Property.EVENT_CHANGE, this.onPropertyChange_, this);
        this.applyProperty_();
    }

    _createClass(PropertyView, [{
        key: 'createElement_',
        value: function createElement_() {
            _get(Object.getPrototypeOf(PropertyView.prototype), 'createElement_', this).call(this);

            this.addClass(ClassName.get('PropView'));

            var elem = this.getElement();

            var labelElem = document.createElement('div');
            labelElem.className += ClassName.get('PropView', 'label');
            elem.appendChild(labelElem);
            this.labelElem_ = labelElem;

            var containerElem = document.createElement('div');
            containerElem.className += ClassName.get('PropView', 'container');
            elem.appendChild(containerElem);
            this.containerElem_ = containerElem;
        }
    }, {
        key: 'getProperty',
        value: function getProperty() {
            return this.prop_;
        }
    }, {
        key: 'getContainerElement_',
        value: function getContainerElement_() {
            return this.containerElem_;
        }
    }, {
        key: 'getControl',
        value: function getControl() {
            return this.control_;
        }
    }, {
        key: 'setControl',
        value: function setControl(control) {
            if (this.control_ !== null) {
                this.removeSubview(this.control_);
            }

            this.addSubview(control);
            this.control_ = control;
            this.applyProperty_();
        }
    }, {
        key: 'applyProperty_',
        value: function applyProperty_() {
            this.labelElem_.textContent = this.prop_.getDisplayName();
            if (this.control_ !== null) {
                this.control_.setDisabled(this.prop_.isDisabled());
            }
        }
    }, {
        key: 'onPropertyChange_',
        value: function onPropertyChange_() {
            this.applyProperty_();
        }
    }]);

    return PropertyView;
})(View);

module.exports = PropertyView;

},{"../misc/class_name":20,"../model/property":27,"./view":37}],37:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = require('../misc/event_emitter');

var View = (function () {
    function View() {
        _classCallCheck(this, View);

        this.emitter_ = new EventEmitter();
        this.subviews_ = [];
        this.parentView_ = null;
        this.classes_ = [];

        this.createElement_();
    }

    _createClass(View, [{
        key: 'createElement_',
        value: function createElement_() {
            if (this.elem_ !== undefined) {
                return;
            }
            this.elem_ = document.createElement('div');
        }
    }, {
        key: 'getContainerElement_',
        value: function getContainerElement_() {
            return this.elem_;
        }
    }, {
        key: 'addClass',
        value: function addClass(className) {
            this.classes_.push(className);
            this.applyClass_();
        }
    }, {
        key: 'removeClass',
        value: function removeClass(className) {
            this.classes_ = this.classes_.filter(function (c) {
                return c !== className;
            });
            this.applyClass_();
        }
    }, {
        key: 'applyClass_',
        value: function applyClass_() {
            this.elem_.className = this.classes_.join(' ');
        }

        /**
         * @return {HTMLElement}
         */
    }, {
        key: 'getElement',
        value: function getElement() {
            return this.elem_;
        }

        /**
         * @return {View[]}
         */
    }, {
        key: 'getSubviews',
        value: function getSubviews() {
            return this.subviews_;
        }
    }, {
        key: 'getEmitter',
        value: function getEmitter() {
            return this.emitter_;
        }

        /**
         * @param {View} subview
         */
    }, {
        key: 'addSubview',
        value: function addSubview(subview) {
            if (this.subviews_.indexOf(subview) >= 0) {
                return;
            }

            this.subviews_.push(subview);
            subview.parentView_ = this;
            this.getContainerElement_().appendChild(subview.getElement());
        }
    }, {
        key: 'removeSubview',
        value: function removeSubview(subview) {
            var index = this.subviews_.indexOf(subview);
            if (index < 0) {
                return;
            }

            var elem = subview.getElement();
            if (elem !== null && elem.parentNode !== null) {
                elem.parentNode.removeChild(elem);
            }
            this.subviews_.splice(index, 1);

            subview.parentView_ = null;
        }
    }, {
        key: 'removeFromParent',
        value: function removeFromParent() {
            if (this.parentView_ !== null) {
                this.parentView_.removeSubview(this);
            }
        }
    }]);

    return View;
})();

module.exports = View;

},{"../misc/event_emitter":21}]},{},[29]);
