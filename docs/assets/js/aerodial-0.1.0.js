(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var RootViewInterface = require('./interface/root_view_interface');
var RootView = require('./view/root_view');

var Aerodial = function Aerodial(opt_options) {
	var rootView = new RootView();
	return new RootViewInterface(rootView, opt_options);
};

window.Aerodial = Aerodial;

module.exports = Aerodial;

},{"./interface/root_view_interface":24,"./view/root_view":68}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Codec = require('./codec');

var BooleanCodec = (function (_Codec) {
    _inherits(BooleanCodec, _Codec);

    function BooleanCodec() {
        _classCallCheck(this, BooleanCodec);

        _get(Object.getPrototypeOf(BooleanCodec.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BooleanCodec, null, [{
        key: 'canDecode',
        value: function canDecode() {
            return true;
        }
    }, {
        key: 'decode',
        value: function decode(value) {
            return value === 'false' ? false : !!value;
        }
    }, {
        key: 'encode',
        value: function encode(value) {
            return value === 'false' ? false : !!value;
        }
    }]);

    return BooleanCodec;
})(Codec);

module.exports = BooleanCodec;

},{"./codec":3}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Errors = require('../misc/errors');

/**
 * Codec provides a way to convert between model value and value from JSON or input element.
 */

var Codec = (function () {
	function Codec() {
		_classCallCheck(this, Codec);
	}

	_createClass(Codec, null, [{
		key: 'canDecode',

		/**
   * Returns whether it can decode a value.
   * @param {} value A value
   * @return {boolean} true if it can decode a value
   */
		value: function canDecode(_value) {
			throw Errors.notImplemented('canDecode');
		}

		/**
   * Decodes a value.
   * @param {} value A value
   * @return {} A decoded value
   */
	}, {
		key: 'decode',
		value: function decode(_value) {
			throw Errors.notImplemented('decode');
		}

		/**
   * Encodes a value.
   * @param {} value A value
   * @return {} A encoded value
   */
	}, {
		key: 'encode',
		value: function encode(_value) {
			throw Errors.notImplemented('encode');
		}
	}]);

	return Codec;
})();

module.exports = Codec;

},{"../misc/errors":28}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BooleanCodec = require('../codec/boolean_codec');
var ColorCodec = require('../codec/color_codec');
var NumberCodec = require('../codec/number_codec');
var StringCodec = require('../codec/string_codec');
var BooleanModel = require('../model/property/boolean_model');
var ColorModel = require('../model/property/color_model');
var NumberModel = require('../model/property/number_model');
var StringModel = require('../model/property/string_model');

var CODEC_PAIRS = [[BooleanModel, BooleanCodec], [ColorModel, ColorCodec], [NumberModel, NumberCodec], [StringModel, StringCodec]];

var CodecProvider = (function () {
    function CodecProvider() {
        _classCallCheck(this, CodecProvider);
    }

    _createClass(CodecProvider, null, [{
        key: 'provide',
        value: function provide(model) {
            var pairs = CODEC_PAIRS.filter(function (pair) {
                return model instanceof pair[0];
            });
            return pairs.length > 0 ? pairs[0][1] : null;
        }
    }]);

    return CodecProvider;
})();

module.exports = CodecProvider;

},{"../codec/boolean_codec":2,"../codec/color_codec":5,"../codec/number_codec":6,"../codec/string_codec":7,"../model/property/boolean_model":36,"../model/property/color_model":37,"../model/property/number_model":39,"../model/property/string_model":43}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Errors = require('../misc/errors');
var Codec = require('./codec');

var ColorCodec = (function (_Codec) {
    _inherits(ColorCodec, _Codec);

    function ColorCodec() {
        _classCallCheck(this, ColorCodec);

        _get(Object.getPrototypeOf(ColorCodec.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ColorCodec, null, [{
        key: 'canDecode',
        value: function canDecode(value) {
            return typeof value === 'string' && this.VALIDATION_PATTERN.test(value);
        }
    }, {
        key: 'decode',
        value: function decode(value) {
            if (this.SHORT_PATTERN.test(value)) {
                // '#rgb'
                return [parseInt(value.substr(1, 1), 16), parseInt(value.substr(2, 1), 16), parseInt(value.substr(3, 1), 16)].map(function (c) {
                    return c << 4 | c;
                });
            }

            if (this.LONG_PATTERN.test(value)) {
                // '#rrggbb'
                return [parseInt(value.substr(1, 2), 16), parseInt(value.substr(3, 2), 16), parseInt(value.substr(5, 2), 16)];
            }

            throw Errors.invalidArgument('value', value);
        }
    }, {
        key: 'encode',
        value: function encode(value) {
            return '#' + value.map(function (comp) {
                var hex = comp.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        }
    }]);

    return ColorCodec;
})(Codec);

ColorCodec.VALIDATION_PATTERN = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
ColorCodec.SHORT_PATTERN = /^#[0-9a-f]{3}$/i;
ColorCodec.LONG_PATTERN = /^#[0-9a-f]{6}$/i;

module.exports = ColorCodec;

},{"../misc/errors":28,"./codec":3}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Codec = require('./codec');

var NumberCodec = (function (_Codec) {
  _inherits(NumberCodec, _Codec);

  function NumberCodec() {
    _classCallCheck(this, NumberCodec);

    _get(Object.getPrototypeOf(NumberCodec.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(NumberCodec, null, [{
    key: 'canDecode',
    value: function canDecode(value) {
      return !isNaN(Number(value));
    }
  }, {
    key: 'decode',
    value: function decode(value) {
      return Number(value);
    }
  }, {
    key: 'encode',
    value: function encode(value) {
      return Number(value);
    }
  }]);

  return NumberCodec;
})(Codec);

module.exports = NumberCodec;

},{"./codec":3}],7:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringCodec = (function () {
    function StringCodec() {
        _classCallCheck(this, StringCodec);
    }

    _createClass(StringCodec, null, [{
        key: "canDecode",
        value: function canDecode() {
            return true;
        }
    }, {
        key: "decode",
        value: function decode(value) {
            return String(value);
        }
    }, {
        key: "encode",
        value: function encode(value) {
            return String(value);
        }
    }]);

    return StringCodec;
})();

module.exports = StringCodec;

},{}],8:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constraint = (function () {
    function Constraint() {
        _classCallCheck(this, Constraint);
    }

    _createClass(Constraint, [{
        key: "constrain",
        value: function constrain(value) {
            return value;
        }
    }]);

    return Constraint;
})();

module.exports = Constraint;

},{}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constraint = require('./constraint');

var ListConstraint = (function (_Constraint) {
    _inherits(ListConstraint, _Constraint);

    function ListConstraint(items) {
        _classCallCheck(this, ListConstraint);

        _get(Object.getPrototypeOf(ListConstraint.prototype), 'constructor', this).call(this);

        this.items_ = items;
    }

    _createClass(ListConstraint, [{
        key: 'getItems',
        value: function getItems() {
            return this.items_;
        }
    }, {
        key: 'getIndexOfValue_',
        value: function getIndexOfValue_(value) {
            var result = -1;
            this.items_.forEach(function (item, index) {
                if (item.value === value) {
                    result = index;
                }
            });
            return result;
        }
    }, {
        key: 'constrain',
        value: function constrain(value) {
            if (this.items_ === null || this.items_.length === 0) {
                return value;
            }

            var index = this.getIndexOfValue_(value);
            var item = index >= 0 ? this.items_[index] : this.items_[0];
            return item.value;
        }
    }]);

    return ListConstraint;
})(Constraint);

module.exports = ListConstraint;

},{"./constraint":8}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constraint = require('./constraint');

var MaxNumberConstraint = (function (_Constraint) {
    _inherits(MaxNumberConstraint, _Constraint);

    function MaxNumberConstraint(maxValue) {
        _classCallCheck(this, MaxNumberConstraint);

        _get(Object.getPrototypeOf(MaxNumberConstraint.prototype), 'constructor', this).call(this);

        this.maxValue_ = maxValue;
    }

    _createClass(MaxNumberConstraint, [{
        key: 'getMaxValue',
        value: function getMaxValue() {
            return this.maxValue_;
        }
    }, {
        key: 'constrain',
        value: function constrain(value) {
            return this.maxValue_ !== null ? Math.min(value, this.maxValue_) : value;
        }
    }]);

    return MaxNumberConstraint;
})(Constraint);

module.exports = MaxNumberConstraint;

},{"./constraint":8}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constraint = require('./constraint');

var MinNumberConstraint = (function (_Constraint) {
    _inherits(MinNumberConstraint, _Constraint);

    function MinNumberConstraint(minValue) {
        _classCallCheck(this, MinNumberConstraint);

        _get(Object.getPrototypeOf(MinNumberConstraint.prototype), 'constructor', this).call(this);

        this.minValue_ = minValue;
    }

    _createClass(MinNumberConstraint, [{
        key: 'getMinValue',
        value: function getMinValue() {
            return this.minValue_;
        }
    }, {
        key: 'constrain',
        value: function constrain(value) {
            return this.minValue_ !== null ? Math.max(value, this.minValue_) : value;
        }
    }]);

    return MinNumberConstraint;
})(Constraint);

module.exports = MinNumberConstraint;

},{"./constraint":8}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constraint = require('./constraint');

var StepNumberConstraint = (function (_Constraint) {
    _inherits(StepNumberConstraint, _Constraint);

    function StepNumberConstraint(stepValue) {
        _classCallCheck(this, StepNumberConstraint);

        _get(Object.getPrototypeOf(StepNumberConstraint.prototype), 'constructor', this).call(this);

        this.stepValue_ = stepValue;
    }

    _createClass(StepNumberConstraint, [{
        key: 'getStepValue',
        value: function getStepValue() {
            return this.stepValue_;
        }
    }, {
        key: 'constrain',
        value: function constrain(value) {
            return this.stepValue_ !== null ? value - value % this.stepValue_ : value;
        }
    }]);

    return StepNumberConstraint;
})(Constraint);

module.exports = StepNumberConstraint;

},{"./constraint":8}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BooleanModel = require('../model/property/boolean_model');
var ListConstraint = require('../constraint/list_constraint');
var CheckboxControl = require('../view/control/checkbox_control');
var ListControl = require('../view/control/list_control');
var CheckboxMonitor = require('../view/monitor/checkbox_monitor');
var PropertyViewFactory = require('./property_view_factory');

var CONSTRAINT_FACTORIES = {
	/**
  * Set the list of values.
  * @param {string[]} items The list of display texts for true and false value.
  * @return {Constraint}
  */
	'values': function values(items) {
		return new ListConstraint(items.map(function (item, index) {
			return {
				name: item,
				value: index === 0
			};
		}));
	}
};

var BooleanPropertyViewFactory = (function () {
	function BooleanPropertyViewFactory() {
		_classCallCheck(this, BooleanPropertyViewFactory);
	}

	_createClass(BooleanPropertyViewFactory, null, [{
		key: 'createCheckbox',
		value: function createCheckbox(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new BooleanModel();
				},
				createView: function createView(prop) {
					return new CheckboxControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createSelector',
		value: function createSelector(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new BooleanModel();
				},
				createView: function createView(prop) {
					return new ListControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createMonitor',
		value: function createMonitor(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = true;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new BooleanModel();
				},
				createView: function createView(prop) {
					return new CheckboxMonitor(prop);
				},
				options: options
			});
		}
	}]);

	return BooleanPropertyViewFactory;
})();

module.exports = BooleanPropertyViewFactory;

},{"../constraint/list_constraint":9,"../model/property/boolean_model":36,"../view/control/checkbox_control":45,"../view/control/list_control":48,"../view/monitor/checkbox_monitor":56,"./property_view_factory":16}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ColorModel = require('../model/property/color_model');
var PaletteTextControl = require('../view/control/palette_text_control');
var PaletteTextMonitor = require('../view/monitor/palette_text_monitor');
var PropertyViewFactory = require('./property_view_factory');

var CONSTRAINT_FACTORIES = {};

var ColorPropertyViewFactory = (function () {
	function ColorPropertyViewFactory() {
		_classCallCheck(this, ColorPropertyViewFactory);
	}

	_createClass(ColorPropertyViewFactory, null, [{
		key: 'createPalette',
		value: function createPalette(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new ColorModel();
				},
				createView: function createView(prop) {
					return new PaletteTextControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createMonitor',
		value: function createMonitor(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = true;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new ColorModel();
				},
				createView: function createView(prop) {
					return new PaletteTextMonitor(prop);
				},
				options: options
			});
		}
	}]);

	return ColorPropertyViewFactory;
})();

module.exports = ColorPropertyViewFactory;

},{"../model/property/color_model":37,"../view/control/palette_text_control":51,"../view/monitor/palette_text_monitor":64,"./property_view_factory":16}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ListConstraint = require('../constraint/list_constraint');
var MaxNumberConstraint = require('../constraint/max_number_constraint');
var MinNumberConstraint = require('../constraint/min_number_constraint');
var StepNumberConstraint = require('../constraint/step_number_constraint');
var NumberRecordModel = require('../model/property/number_record_model');
var NumberModel = require('../model/property/number_model');
var ListControl = require('../view/control/list_control');
var NumberTextControl = require('../view/control/number_text_control');
var SliderTextControl = require('../view/control/slider_text_control');
var GraphMonitor = require('../view/monitor/graph_monitor');
var NumberTextMonitor = require('../view/monitor/number_text_monitor');
var PropertyViewFactory = require('./property_view_factory');

var CONSTRAINT_FACTORIES = {
	/**
  * Create the minimum value constraint.
  * @param {number} value The minimum value.
  * @return {Constraint}
  */
	'min': function min(value) {
		return new MinNumberConstraint(value);
	},
	/**
  * Create the maximum value constraint.
  * @param {number} value The maximum value.
  * @return {Constraint}
  */
	'max': function max(value) {
		return new MaxNumberConstraint(value);
	},
	/**
  * Create the step value constraint.
  * @param {number} value The step value.
  * @return {Constraint}
  */
	'step': function step(value) {
		return new StepNumberConstraint(value);
	},
	/**
  * Create the list of values constraint.
  * @param {Object.<string, number>} items The list of values.
  * @return {Constraint}
  */
	'values': function values(items) {
		return new ListConstraint(Object.keys(items).map(function (key) {
			return {
				name: key,
				value: items[key]
			};
		}));
	}
};

var NumberPropertyViewFactory = (function () {
	function NumberPropertyViewFactory() {
		_classCallCheck(this, NumberPropertyViewFactory);
	}

	_createClass(NumberPropertyViewFactory, null, [{
		key: 'createText',
		value: function createText(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new NumberModel();
				},
				createView: function createView(prop) {
					return new NumberTextControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createSlider',
		value: function createSlider(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new NumberModel();
				},
				createView: function createView(prop) {
					return new SliderTextControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createSelector',
		value: function createSelector(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new NumberModel();
				},
				createView: function createView(prop) {
					return new ListControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createMonitor',
		value: function createMonitor(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = true;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new NumberModel();
				},
				createView: function createView(prop) {
					return new NumberTextMonitor(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createGraph',
		value: function createGraph(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = true;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new NumberRecordModel(options.count);
				},
				createView: function createView(prop) {
					return new GraphMonitor(prop);
				},
				options: options
			});
		}
	}]);

	return NumberPropertyViewFactory;
})();

module.exports = NumberPropertyViewFactory;

},{"../constraint/list_constraint":9,"../constraint/max_number_constraint":10,"../constraint/min_number_constraint":11,"../constraint/step_number_constraint":12,"../model/property/number_model":39,"../model/property/number_record_model":40,"../view/control/list_control":48,"../view/control/number_text_control":49,"../view/control/slider_text_control":53,"../view/monitor/graph_monitor":58,"../view/monitor/number_text_monitor":62,"./property_view_factory":16}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PropertyBuilder = require('../misc/property_builder');
var Control = require('../view/control/control');
var Monitor = require('../view/monitor/monitor');
var PropertyView = require('../view/property_view');

var PropertyViewFactory = (function () {
	function PropertyViewFactory() {
		_classCallCheck(this, PropertyViewFactory);
	}

	_createClass(PropertyViewFactory, null, [{
		key: 'create',
		value: function create(config) {
			var model = config.createModel();
			this.setUpConstraints_(model, config.constraintFactories, config.options);

			var prop = this.createProperty_(config.reference, model, config.options);
			prop.applySourceValue();

			var propView = new PropertyView(prop);
			var view = config.createView(prop);
			if (view instanceof Monitor) {
				view.start(config.options.interval);
			} else if (view instanceof Control) {
				view.getEmitter().on(Control.EVENT_CHANGE, function (value) {
					prop.setValue(value, true);
				});
			}
			propView.addSubview(view);

			return propView;
		}
	}, {
		key: 'createProperty_',
		value: function createProperty_(ref, model, options) {
			var builder = new PropertyBuilder(ref, model);
			if (options.forMonitor) {
				builder.setForMonitor(true);
			}
			if (options.id !== undefined) {
				builder.setId(options.id);
			}
			if (options.label !== undefined) {
				builder.setLabel(options.label);
			}
			return builder.build();
		}
	}, {
		key: 'setUpConstraints_',
		value: function setUpConstraints_(model, factories, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};

			Object.keys(factories).forEach(function (key) {
				var value = options[key];
				if (value === undefined) {
					return;
				}

				var constraint = factories[key](value);
				model.addConstraint(constraint);
			});
		}
	}]);

	return PropertyViewFactory;
})();

module.exports = PropertyViewFactory;

},{"../misc/property_builder":30,"../view/control/control":47,"../view/monitor/monitor":60,"../view/property_view":66}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ListConstraint = require('../constraint/list_constraint');
var LogRecordModel = require('../model/property/log_record_model');
var StringModel = require('../model/property/string_model');
var ListControl = require('../view/control/list_control');
var TextControl = require('../view/control/text_control');
var LogMonitor = require('../view/monitor/log_monitor');
var MultilineTextMonitor = require('../view/monitor/multiline_text_monitor');
var TextMonitor = require('../view/monitor/text_monitor');
var PropertyViewFactory = require('./property_view_factory');

function createListItems(items) {
	// ['foo', 'bar']
	// => {'foo': 'foo', 'bar': 'bar'}
	if (Array.isArray(items)) {
		return items.map(function (value) {
			return {
				name: value,
				value: value
			};
		});
	}

	var isObjectLiteral = Object.prototype.toString.call(items) === '[object Object]';
	if (isObjectLiteral) {
		return Object.keys(items).map(function (key) {
			return {
				name: key,
				value: items[key]
			};
		});
	}

	return null;
}

var CONSTRAINT_FACTORIES = {
	/**
  * Create the list of values constraint.
  * @param {(string[]|Object.<string, string>)} items The list of values.
  * @return {Constraint}
  */
	'values': function values(items) {
		return new ListConstraint(createListItems(items));
	}
};

var StringPropertyViewFactory = (function () {
	function StringPropertyViewFactory() {
		_classCallCheck(this, StringPropertyViewFactory);
	}

	_createClass(StringPropertyViewFactory, null, [{
		key: 'createText',
		value: function createText(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new StringModel();
				},
				createView: function createView(prop) {
					return new TextControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createSelector',
		value: function createSelector(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = false;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new StringModel();
				},
				createView: function createView(prop) {
					return new ListControl(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createMonitor',
		value: function createMonitor(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = true;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new StringModel();
				},
				createView: function createView(prop) {
					return options.multiline !== undefined ? new MultilineTextMonitor(prop) : new TextMonitor(prop);
				},
				options: options
			});
		}
	}, {
		key: 'createLogger',
		value: function createLogger(ref, opt_options) {
			var options = opt_options !== undefined ? opt_options : {};
			options.forMonitor = true;
			var count = options.count !== undefined ? options.count : 10;
			return PropertyViewFactory.create({
				reference: ref,
				constraintFactories: CONSTRAINT_FACTORIES,
				createModel: function createModel() {
					return new LogRecordModel(count);
				},
				createView: function createView(prop) {
					return new LogMonitor(prop);
				},
				options: options
			});
		}
	}]);

	return StringPropertyViewFactory;
})();

module.exports = StringPropertyViewFactory;

},{"../constraint/list_constraint":9,"../model/property/log_record_model":38,"../model/property/string_model":43,"../view/control/list_control":48,"../view/control/text_control":54,"../view/monitor/log_monitor":59,"../view/monitor/multiline_text_monitor":61,"../view/monitor/text_monitor":65,"./property_view_factory":16}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorCodec = require('../codec/color_codec');
var Formatter = require('./formatter');

var ColorFormatter = (function (_Formatter) {
    _inherits(ColorFormatter, _Formatter);

    function ColorFormatter() {
        _classCallCheck(this, ColorFormatter);

        _get(Object.getPrototypeOf(ColorFormatter.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ColorFormatter, [{
        key: 'format',
        value: function format(value) {
            return ColorCodec.encode(value);
        }
    }]);

    return ColorFormatter;
})(Formatter);

module.exports = ColorFormatter;

},{"../codec/color_codec":5,"./formatter":19}],19:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Formatter = (function () {
    function Formatter() {
        _classCallCheck(this, Formatter);
    }

    _createClass(Formatter, [{
        key: "format",
        value: function format(value) {
            return String(value);
        }
    }]);

    return Formatter;
})();

module.exports = Formatter;

},{}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('./formatter');

var NumberFormatter = (function (_Formatter) {
    _inherits(NumberFormatter, _Formatter);

    function NumberFormatter() {
        _classCallCheck(this, NumberFormatter);

        _get(Object.getPrototypeOf(NumberFormatter.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NumberFormatter, [{
        key: 'format',
        value: function format(value) {
            // Workaround for vanishingly small error:
            // e.g.
            // 4.0 + 0.1 + 0.1 = 4.199999999999999 => 4.2
            var roundedValue = Math.round(value * 1e14) / 1e14;

            // Workaround for repeating decimal:
            // e.g. 1 / 3 = 0.3333333333333333 => 0.33
            var stringValue = roundedValue.toString();
            var matches = stringValue.match(/\.\d(\d+)\d$/);
            if (matches === null) {
                return roundedValue.toString();
            }

            var mediumDigits = matches[1];
            var firstDigit = mediumDigits.charAt(0);
            var repeated = mediumDigits.split('').every(function (ch) {
                return firstDigit === ch;
            });
            return repeated ? roundedValue.toFixed(2) : roundedValue.toString();
        }
    }]);

    return NumberFormatter;
})(Formatter);

module.exports = NumberFormatter;

},{"./formatter":19}],21:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewInterface = require('./view_interface');

var ButtonViewInterface = (function (_ViewInterface) {
    _inherits(ButtonViewInterface, _ViewInterface);

    function ButtonViewInterface() {
        _classCallCheck(this, ButtonViewInterface);

        _get(Object.getPrototypeOf(ButtonViewInterface.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ButtonViewInterface, [{
        key: 'on',
        value: function on(eventName, handler, opt_scope) {
            var emitter = this.view_.getEmitter();
            emitter.on(eventName, handler, opt_scope);
            return this;
        }
    }, {
        key: 'off',
        value: function off(eventName, handler, opt_scope) {
            var emitter = this.view_.getEmitter();
            emitter.off(eventName, handler, opt_scope);
            return this;
        }
    }]);

    return ButtonViewInterface;
})(ViewInterface);

module.exports = ButtonViewInterface;

},{"./view_interface":25}],22:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reference = require('../misc/reference');
var ViewInterface = require('./view_interface');

var FolderViewInterface = (function (_ViewInterface) {
	_inherits(FolderViewInterface, _ViewInterface);

	function FolderViewInterface() {
		_classCallCheck(this, FolderViewInterface);

		_get(Object.getPrototypeOf(FolderViewInterface.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(FolderViewInterface, [{
		key: 'getComponentUtil_',
		value: function getComponentUtil_() {
			// Run-time requiring to avoid cross reference
			return require('../misc/component_util');
		}
	}, {
		key: 'addProperty_',
		value: function addProperty_(propertyViewInterface) {
			this.view_.addSubview(propertyViewInterface.getView());
			return propertyViewInterface;
		}

		// Controls

	}, {
		key: 'addControl',
		value: function addControl(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createControl(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addText',
		value: function addText(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createText(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addSlider',
		value: function addSlider(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createSlider(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addSelector',
		value: function addSelector(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createSelector(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addCheckbox',
		value: function addCheckbox(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createCheckbox(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addPalette',
		value: function addPalette(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createPalette(new Reference(target, propertyName), opt_options));
		}

		// Monitors

	}, {
		key: 'addMonitor',
		value: function addMonitor(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createMonitor(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addColorMonitor',
		value: function addColorMonitor(target, propertyName, opt_options) {
			return this.addProerty_(this.getComponentUtil_().createColorMonitor(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addLogger',
		value: function addLogger(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createLogger(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addGraph',
		value: function addGraph(target, propertyName, opt_options) {
			return this.addProperty_(this.getComponentUtil_().createGraph(new Reference(target, propertyName), opt_options));
		}

		// Other Components

	}, {
		key: 'addButton',
		value: function addButton(title) {
			var intf = this.getComponentUtil_().createButton(title);
			var buttonView = intf.getView();
			this.view_.addSubview(buttonView);
			return intf;
		}
	}, {
		key: 'addSeparator',
		value: function addSeparator() {
			var intf = this.getComponentUtil_().createSeparator();
			var separatorView = intf.getView();
			this.view_.addSubview(separatorView);
			return intf;
		}

		/**
   * Opens a folder.
   * @return {FolderViewInterface}
   */
	}, {
		key: 'open',
		value: function open() {
			var folder = this.view_.getFolder();
			folder.setExpanded(true);
			return this;
		}

		/**
   * Closes a folder.
   * @return {FolderViewInterface}
   */
	}, {
		key: 'close',
		value: function close() {
			var folder = this.view_.getFolder();
			folder.setExpanded(false);
			return this;
		}
	}]);

	return FolderViewInterface;
})(ViewInterface);

module.exports = FolderViewInterface;

},{"../misc/component_util":27,"../misc/reference":31,"./view_interface":25}],23:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewInterface = require('./view_interface');

var PropertyViewInterface = (function (_ViewInterface) {
	_inherits(PropertyViewInterface, _ViewInterface);

	function PropertyViewInterface() {
		_classCallCheck(this, PropertyViewInterface);

		_get(Object.getPrototypeOf(PropertyViewInterface.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(PropertyViewInterface, [{
		key: 'on',
		value: function on(eventName, handler, opt_scope) {
			var model = this.getView().getProperty().getModel();
			model.getEmitter().on(eventName, handler, opt_scope);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventName, handler, opt_scope) {
			var model = this.getView().getProperty().getModel();
			model.getEmitter().off(eventName, handler, opt_scope);
			return this;
		}
	}]);

	return PropertyViewInterface;
})(ViewInterface);

module.exports = PropertyViewInterface;

},{"./view_interface":25}],24:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var ComponentUtil = require('../misc/component_util');
var Errors = require('../misc/errors');
var EventEmitter = require('../misc/event_emitter');
var Reference = require('../misc/reference');
var Style = require('../misc/style');
var ViewUtil = require('../misc/view_util');
var Model = require('../model/model');
var PropertyView = require('../view/property_view');
var RootFolderView = require('../view/root_folder_view');
var View = require('../view/view');
var ViewInterface = require('./view_interface');

var RootViewInterface = (function (_ViewInterface) {
	_inherits(RootViewInterface, _ViewInterface);

	function RootViewInterface(view, opt_options) {
		_classCallCheck(this, RootViewInterface);

		_get(Object.getPrototypeOf(RootViewInterface.prototype), 'constructor', this).call(this, view);

		var mainView = this.view_.getMainView();
		mainView.getEmitter().on(View.EVENT_ADD, this.onViewAdd_, this);

		this.propListeners_ = [];

		var options = opt_options !== undefined ? opt_options : {};

		var containerElem = options.container !== undefined ? options.container : this.createDefaultContainer_();
		if (containerElem) {
			containerElem.appendChild(this.view_.getElement());
		}

		this.emitter_ = new EventEmitter();

		Style.injectDefault();

		var foldable = options.foldable !== undefined ? options.foldable : true;
		if (foldable) {
			this.view_.getFooterView().addSubview(new RootFolderView());
		}
	}

	_createClass(RootViewInterface, [{
		key: 'createDefaultContainer_',
		value: function createDefaultContainer_() {
			var containerElem = document.createElement('div');
			containerElem.classList.add(ClassName.get('DefaultContainer'));
			document.body.appendChild(containerElem);
			return containerElem;
		}
	}, {
		key: 'getElement',
		value: function getElement() {
			return this.view_.getElement();
		}
	}, {
		key: 'addProerty_',
		value: function addProerty_(propertyViewInterface) {
			this.view_.getMainView().addSubview(propertyViewInterface.getView());
			return propertyViewInterface;
		}

		// Controls

	}, {
		key: 'addControl',
		value: function addControl(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createControl(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addText',
		value: function addText(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createText(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addSlider',
		value: function addSlider(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createSlider(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addSelector',
		value: function addSelector(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createSelector(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addCheckbox',
		value: function addCheckbox(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createCheckbox(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addPalette',
		value: function addPalette(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createPalette(new Reference(target, propertyName), opt_options));
		}

		// Monitors

	}, {
		key: 'addMonitor',
		value: function addMonitor(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createMonitor(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addColorMonitor',
		value: function addColorMonitor(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createColorMonitor(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addLogger',
		value: function addLogger(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createLogger(new Reference(target, propertyName), opt_options));
		}
	}, {
		key: 'addGraph',
		value: function addGraph(target, propertyName, opt_options) {
			return this.addProerty_(ComponentUtil.createGraph(new Reference(target, propertyName), opt_options));
		}

		// Other Components

	}, {
		key: 'addFolder',
		value: function addFolder(title) {
			var intf = ComponentUtil.createFolder(title);
			var folderView = intf.getView();
			folderView.getEmitter().on(View.EVENT_ADD, this.onViewAdd_, this);
			this.view_.getMainView().addSubview(folderView);
			return intf;
		}
	}, {
		key: 'addButton',
		value: function addButton(title) {
			var intf = ComponentUtil.createButton(title);
			var buttonView = intf.getView();
			this.view_.getMainView().addSubview(buttonView);
			return intf;
		}
	}, {
		key: 'addSeparator',
		value: function addSeparator() {
			var intf = ComponentUtil.createSeparator();
			var separatorView = intf.getView();
			this.view_.getMainView().addSubview(separatorView);
			return intf;
		}

		// Import/Export

	}, {
		key: 'getProperties_',
		value: function getProperties_() {
			var views = ViewUtil.getAllSubviews(this.view_);
			var propViews = views.filter(function (view) {
				return view instanceof PropertyView;
			});
			return propViews.map(function (propView) {
				return propView.getProperty();
			});
		}
	}, {
		key: 'getPropertiesForJson_',
		value: function getPropertiesForJson_() {
			var props = this.getProperties_().filter(function (prop) {
				return !prop.isForMonitor();
			});
			var result = {};
			props.forEach(function (prop) {
				var propId = prop.getId();
				if (result[propId] !== undefined) {
					throw Errors.duplicatedPropertyId(propId);
				}
				result[propId] = prop;
			});
			return result;
		}
	}, {
		key: 'getJson',
		value: function getJson() {
			var props = this.getPropertiesForJson_();
			return Object.keys(props).reduce(function (result, propId) {
				var prop = props[propId];
				result[propId] = prop.getValue();
				return result;
			}, {});
		}
	}, {
		key: 'setJson',
		value: function setJson(json) {
			var props = this.getPropertiesForJson_();
			Object.keys(json).forEach(function (propId) {
				var prop = props[propId];
				if (prop === undefined) {
					return;
				}

				prop.setValue(json[propId]);
			});
		}

		// Events

	}, {
		key: 'on',
		value: function on(eventName, handler, opt_scope) {
			this.emitter_.on(eventName, handler, opt_scope);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventName, handler, opt_scope) {
			this.emitter_.off(eventName, handler, opt_scope);
			return this;
		}

		// Misc

	}, {
		key: 'refresh',
		value: function refresh() {
			this.getProperties_().forEach(function (prop) {
				prop.applySourceValue();
			});
		}
	}, {
		key: 'handleProperty_',
		value: function handleProperty_(prop) {
			var _this = this;

			prop.getModel().getEmitter().on(Model.EVENT_CHANGE, function () {
				_this.onPropertyModelChange_(prop);
			}, this);
		}
	}, {
		key: 'onViewAdd_',
		value: function onViewAdd_(subview) {
			if (subview instanceof PropertyView) {
				this.handleProperty_(subview.getProperty());
			}
		}
	}, {
		key: 'onPropertyModelChange_',
		value: function onPropertyModelChange_(prop) {
			this.emitter_.notifyObservers(RootViewInterface.EVENT_CHANGE, [prop.getModel().getValue(), prop]);
		}
	}]);

	return RootViewInterface;
})(ViewInterface);

RootViewInterface.EVENT_CHANGE = 'change';

module.exports = RootViewInterface;

},{"../misc/class_name":26,"../misc/component_util":27,"../misc/errors":28,"../misc/event_emitter":29,"../misc/reference":31,"../misc/style":32,"../misc/view_util":33,"../model/model":35,"../view/property_view":66,"../view/root_folder_view":67,"../view/view":70,"./view_interface":25}],25:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewInterface = (function () {
	function ViewInterface(view) {
		_classCallCheck(this, ViewInterface);

		this.view_ = view;
	}

	_createClass(ViewInterface, [{
		key: "getView",
		value: function getView() {
			return this.view_;
		}
	}]);

	return ViewInterface;
})();

module.exports = ViewInterface;

},{}],26:[function(require,module,exports){
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
            var result = "aero" + block;
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

},{}],27:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BooleanPropertyViewFactory = require('../factory/boolean_property_view_factory');
var ColorPropertyViewFactory = require('../factory/color_property_view_factory');
var NumberPropertyViewFactory = require('../factory/number_property_view_factory');
var StringPropertyViewFactory = require('../factory/string_property_view_factory');
var ButtonViewInterface = require('../interface/button_view_interface');
var FolderViewInterface = require('../interface/folder_view_interface');
var PropertyViewInterface = require('../interface/property_view_interface');
var ViewInterface = require('../interface/view_interface');
var Errors = require('../misc/errors');
var ButtonView = require('../view/button_view');
var FolderView = require('../view/folder_view');
var SeparatorView = require('../view/separator_view');

var ComponentUtil = (function () {
	function ComponentUtil() {
		_classCallCheck(this, ComponentUtil);
	}

	_createClass(ComponentUtil, null, [{
		key: 'findControlFactoryFunction_',
		value: function findControlFactoryFunction_(ref) {
			var type = typeof ref.getValue();

			if (type === 'boolean') {
				return BooleanPropertyViewFactory.createCheckbox;
			}
			if (type === 'number') {
				return NumberPropertyViewFactory.createText;
			}
			if (type === 'string') {
				return StringPropertyViewFactory.createText;
			}
			return null;
		}
	}, {
		key: 'createControl',
		value: function createControl(ref, opt_options) {
			var factoryFn = this.findControlFactoryFunction_(ref);
			if (factoryFn === null) {
				throw Errors.propertyTypeNotSupported(ref.getPropertyName());
			}
			var propView = factoryFn(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createText',
		value: function createText(ref, opt_options) {
			var type = typeof ref.getValue();
			var factory = type === 'number' ? NumberPropertyViewFactory : type === 'string' ? StringPropertyViewFactory : null;
			if (factory === null) {
				throw Errors.propertyTypeNotSupported(ref.getPropertyName());
			}
			var propView = factory.createText(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createSlider',
		value: function createSlider(ref, opt_options) {
			var propView = NumberPropertyViewFactory.createSlider(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createSelector',
		value: function createSelector(ref, opt_options) {
			var type = typeof ref.getValue();
			var factory = type === 'number' ? NumberPropertyViewFactory : type === 'string' ? StringPropertyViewFactory : type === 'boolean' ? BooleanPropertyViewFactory : null;
			if (factory === null) {
				throw Errors.propertyTypeNotSupported(ref.getPropertyName());
			}
			var propView = factory.createSelector(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createCheckbox',
		value: function createCheckbox(ref, opt_options) {
			var propView = BooleanPropertyViewFactory.createCheckbox(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createPalette',
		value: function createPalette(ref, opt_options) {
			var propView = ColorPropertyViewFactory.createPalette(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'findMonitorFactoryFunction_',
		value: function findMonitorFactoryFunction_(ref) {
			var type = typeof ref.getValue();

			if (type === 'boolean') {
				return BooleanPropertyViewFactory.createMonitor;
			}
			if (type === 'number') {
				return NumberPropertyViewFactory.createMonitor;
			}
			if (type === 'string') {
				return StringPropertyViewFactory.createMonitor;
			}
			return null;
		}
	}, {
		key: 'createMonitor',
		value: function createMonitor(ref, opt_options) {
			var factoryFn = this.findMonitorFactoryFunction_(ref);
			if (factoryFn === null) {
				throw Errors.propertyTypeNotSupported(ref.getPropertyName());
			}
			var propView = factoryFn(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createColorMonitor',
		value: function createColorMonitor(ref, opt_options) {
			var propView = ColorPropertyViewFactory.createMonitor(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createGraph',
		value: function createGraph(ref, opt_options) {
			var propView = NumberPropertyViewFactory.createGraph(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createLogger',
		value: function createLogger(ref, opt_options) {
			var propView = StringPropertyViewFactory.createLogger(ref, opt_options);
			return new PropertyViewInterface(propView);
		}
	}, {
		key: 'createFolder',
		value: function createFolder(title) {
			var folderView = new FolderView(title);
			return new FolderViewInterface(folderView);
		}
	}, {
		key: 'createButton',
		value: function createButton(title) {
			var buttonView = new ButtonView(title);
			return new ButtonViewInterface(buttonView);
		}
	}, {
		key: 'createSeparator',
		value: function createSeparator() {
			var separatorView = new SeparatorView();
			return new ViewInterface(separatorView);
		}
	}]);

	return ComponentUtil;
})();

module.exports = ComponentUtil;

},{"../factory/boolean_property_view_factory":13,"../factory/color_property_view_factory":14,"../factory/number_property_view_factory":15,"../factory/string_property_view_factory":17,"../interface/button_view_interface":21,"../interface/folder_view_interface":22,"../interface/property_view_interface":23,"../interface/view_interface":25,"../misc/errors":28,"../view/button_view":44,"../view/folder_view":55,"../view/separator_view":69}],28:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Errors = (function () {
    function Errors() {
        _classCallCheck(this, Errors);
    }

    _createClass(Errors, null, [{
        key: 'notImplemented',
        value: function notImplemented(methodName) {
            var e = new Error('\'' + methodName + '\' not implemented.');
            e.name = 'Aerodial:NotImplementedError';
            return e;
        }
    }, {
        key: 'constraintAlreadyExists',
        value: function constraintAlreadyExists() {
            var e = new Error('Same type of constraint already exists.');
            e.name = 'Aerodial:ConstraintAlreadyExistsError';
            return e;
        }
    }, {
        key: 'duplicatedPropertyId',
        value: function duplicatedPropertyId(propertyId) {
            var e = new Error(['Found duplicated identifier: \'' + propertyId + '\'', 'Use `id()` to change an identifier of the duplicated property.'].join('\n'));
            e.name = 'Aerodial:DuplicatedPropertyIdError';
            return e;
        }
    }, {
        key: 'propertyNotFound',
        value: function propertyNotFound(propertyName) {
            var e = new Error('Property not found: \'' + propertyName + '\'');
            e.name = 'Aerodial.propertyNotFoundError';
            return e;
        }
    }, {
        key: 'propertyTypeNotSupported',
        value: function propertyTypeNotSupported(propertyName, value) {
            var e = new Error(['Property type not supported: \'' + propertyName + '\'', String(value)].join('\n'));
            e.name = 'Aerodial.propertyTypeNotSupportedError';
            return e;
        }
    }, {
        key: 'propertyNotFound',
        value: function propertyNotFound(propertyName) {
            var e = new Error('Property not found: \'' + propertyName + '\'');
            e.name = 'Aerodial.PropertyNotFound';
            return e;
        }
    }, {
        key: 'invalidArgument',
        value: function invalidArgument(argumentName, value) {
            var e = new Error('Invalid argument: ' + argumentName + ' = ' + value);
            e.name = 'Aerodial.InvalidArgument';
            return e;
        }
    }]);

    return Errors;
})();

module.exports = Errors;

},{}],29:[function(require,module,exports){
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
                var args = opt_args !== undefined ? [].concat(opt_args) : [];
                observer.handler.apply(scope, args);
            });
        }
    }]);

    return EventEmitter;
})();

;

module.exports = EventEmitter;

},{}],30:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Property = require('../model/property/property');

var PropertyBuilder = (function () {
	function PropertyBuilder(ref, model) {
		_classCallCheck(this, PropertyBuilder);

		this.ref_ = ref;
		this.model_ = model;

		this.forMonitor_ = false;
		var propName = this.ref_.getPropertyName();
		this.id_ = propName;
		this.label_ = propName;
	}

	_createClass(PropertyBuilder, [{
		key: 'getReference',
		value: function getReference() {
			return this.ref_;
		}
	}, {
		key: 'getModel',
		value: function getModel() {
			return this.model_;
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
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			return this.label_;
		}
	}, {
		key: 'setLabel',
		value: function setLabel(label) {
			this.label_ = label;
		}
	}, {
		key: 'isForMonitor',
		value: function isForMonitor() {
			return this.forMonitor_;
		}
	}, {
		key: 'setForMonitor',
		value: function setForMonitor(forMonitor) {
			this.forMonitor_ = forMonitor;
		}
	}, {
		key: 'build',
		value: function build() {
			return new Property(this);
		}
	}]);

	return PropertyBuilder;
})();

module.exports = PropertyBuilder;

},{"../model/property/property":41}],31:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reference = (function () {
	function Reference(target, propertyName) {
		_classCallCheck(this, Reference);

		this.target_ = target;
		this.propName_ = propertyName;
	}

	_createClass(Reference, [{
		key: "getTarget",
		value: function getTarget() {
			return this.target_;
		}
	}, {
		key: "getPropertyName",
		value: function getPropertyName() {
			return this.propName_;
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return this.target_[this.propName_];
		}
	}, {
		key: "setValue",
		value: function setValue(value) {
			this.target_[this.propName_] = value;
		}
	}]);

	return Reference;
})();

module.exports = Reference;

},{}],32:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClassName = require('./class_name');

var Style = (function () {
    function Style() {
        _classCallCheck(this, Style);
    }

    _createClass(Style, null, [{
        key: 'injectDefault',

        /**
         * Injects a default style for Aerodial.
         */
        value: function injectDefault() {
            if (document.getElementById(this.ELEMENT_ID) !== null) {
                return;
            }

            var styleElem = document.createElement('style');
            styleElem.id = this.ELEMENT_ID;
            styleElem.textContent = this.CSS;
            document.head.appendChild(styleElem);
        }

        /**
         * Returns a transition duration of a specified property of an element.
         * @param {HTMLElement} element An element
         * @param {string} propertyName A property name
         * @return {number} A transition duration or 0 if not found a declaration
         *
         */
    }, {
        key: 'getMaxTransitionDuration',
        value: function getMaxTransitionDuration(element) {
            // e.g. '0.2s, 0.4s, 0.4s'
            var durationValue = window.getComputedStyle(element).transitionDuration;
            return durationValue.split(',').map(function (stringValue) {
                var floatValue = parseFloat(stringValue);
                return !isNaN(floatValue) ? floatValue * 1000 : 0;
            }).reduce(function (maxValue, floatValue) {
                return Math.max(maxValue, floatValue);
            }, 0);
        }

        /**
         * Sets transition enabled.
         * @param {HTMLElement} element An element
         * @param {boolean} enabled Transition enabled
         */
    }, {
        key: 'setTransitionEnabled',
        value: function setTransitionEnabled(element, enabled) {
            if (enabled) {
                element.classList.remove(ClassName.get('NoTransition'));
            } else {
                element.classList.add(ClassName.get('NoTransition'));
            }
        }

        /**
         * Run CSS transition certainly.
         * @param {HTMLElement} element A target element
         * @param {Function} callback Callback function for transition
         * @param {boolean} animated true for enabling animation
         */
    }, {
        key: 'runTransition',
        value: function runTransition(element, callback, animated) {
            // If !animated, disable CSS transition temporarily
            this.setTransitionEnabled(element, animated);
            this.forceReflow_(element);

            callback(element);

            // Re-enable transition
            this.forceReflow_(element);
            this.setTransitionEnabled(element, true);
        }

        /**
         * Force reflow an element.
         * Useful for applying transition change.
         * @see http://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily
         * @private
         * @param {HTMLElement} element An element
         */
    }, {
        key: 'forceReflow_',
        value: function forceReflow_(element) {
            element.offsetHeight;
        }
    }]);

    return Style;
})();

Style.ELEMENT_ID = 'tpDefaultStyle';
Style.CSS = '.aeroflv_arrow,.aerorfv_arrow,.aerolsc_arrow{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2210px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2010%2010%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20fill%3D%22none%22%3E%3Cg%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M5.49%2C2.51%20L1.49%2C7.49%20L9.49%2C7.49%20L5.49%2C2.51%20Z%22%20transform%3D%22translate(5.5%2C5.0)%20scale(-1%2C-1)%20rotate(-90)%20translate(-5.5%2C-5)%20%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}.aeroDefaultContainer{width:250px;position:absolute;right:0;top:0}.aeroNoTransition,.aeroNoTransition *{transition:all 0s ease !important}.aerobtv{background-color:#4e5056;padding:5px;position:relative}.aerobtv_button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#61646b;border-width:0;border-radius:2px;color:#cfd2d8;cursor:pointer;height:23px;line-height:23px;outline:none;padding:0;transition:background-color 0.2s ease-out;width:100%}.aerobtv_button:focus{background-color:#6d7178}.aerobtv_button:hover{background-color:#797d86;color:#ebedef}.aerobtv_button:active{background-color:#94979e}.aerobtv+.aerobtv,.aerobtv+.aeroprv,.aeroprv+.aerobtv{border-top:#414448 solid 1px}.aeroflv{overflow:hidden;position:relative}.aeroflv_button:focus .aeroflv_arrow{opacity:0.5}.aeroflv_button:hover .aeroflv_arrow{opacity:0.75}.aeroflv_button:focus .aeroflv_title{opacity:0.5}.aeroflv_button:hover .aeroflv_title{opacity:0.75}.aeroflv_button{background-color:transparent;border-width:0;cursor:pointer;height:33px;outline:none;padding:0;width:100%}.aeroflv_arrow{background-position:center;background-repeat:no-repeat;display:block;height:10px;left:10px;opacity:0.25;position:absolute;top:11.5px;transform:rotate(-90deg);transition:opacity 0.2s ease-out, transform 0.2s ease-in-out;width:10px}.aeroflv_arrow.aeroflv_arrow-expanded{transform:rotate(90deg)}.aeroflv_title{color:#f1f2f4;display:block;height:33px;line-height:33px;opacity:0.35;overflow:hidden;padding-right:5px;padding-left:30px;position:relative;text-align:left;text-overflow:ellipsis;transition:color 0.2s ease-out, opacity 0.2s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.aeroflv_container{overflow:hidden;padding:0 5px 0;transition:height 0.2s ease-in-out}.aeroprv{background-color:#4e5056;position:relative}.aeroprv:after{clear:both;content:\"\";display:block}.aeroprv+.aeroprv{border-top:#414448 solid 1px}.aeroprv_label{bottom:0;color:rgba(199,202,209,0.7);height:22px;left:0;line-height:22px;margin:auto 0;overflow:hidden;padding:0 5px;position:absolute;text-overflow:ellipsis;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;width:38%}.aeroprv_container{float:right;padding:5px;width:62%}.aerortv{background-color:#2e3138;padding:0 5px}.aerortv *{box-sizing:border-box;font-family:Verdana, sans-serif;font-size:11px}.aerortv_main{overflow:hidden;transition:height 0.4s ease-in-out}.aerorfv{padding:5px}.aerorfv_button:focus .aerorfv_arrow{opacity:0.5}.aerorfv_button:hover .aerorfv_arrow{opacity:0.75}.aerorfv_button{background-color:transparent;border-width:0;cursor:pointer;display:block;height:23px;outline:none;padding:0;position:relative;width:100%}.aerorfv_arrow{background-position:center;background-repeat:no-repeat;bottom:0;display:block;height:10px;left:0;margin:auto;opacity:0.25;position:absolute;right:0;top:0;transform:rotate(90deg);transition:opacity 0.2s ease-out, transform 0.4s ease-in-out;width:10px}.aerorfv_arrow.aerorfv_arrow-expanded{transform:rotate(-90deg)}.aerospv{height:5px}.aerocbc{height:23px;width:100%}.aerocbc_hitArea{display:block;height:23px;width:100%}.aerocbc_input{cursor:pointer;margin:0;opacity:0.001;padding:0;position:absolute}.aerocbc_input:focus+.aerocbc_outer{background-color:#6d7178}.aerocbc_input:focus+.aerocbc_outer:hover,.aerocbc_outer:hover{background-color:#797d86}.aerocbc_input:checked+.aerocbc_outer .aerocbc_inner{opacity:1.0}.aerocbc_outer:hover .aerocbc_inner{background-color:#ebedef}.aerocbc_outer{background-color:#61646b;border-radius:2px;cursor:pointer;height:23px;position:relative;transition:background-color 0.2s ease-out;width:23px}.aerocbc_inner{background-color:#cfd2d8;border-radius:2px;bottom:0;height:13px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;transition:opacity 0.1s ease-out;width:13px}.aerolsc{background-color:#61646b;border-radius:2px}.aerolsc:focus{background-color:#6d7178}.aerolsc:hover{background-color:#797d86}.aerolsc:hover .aerolsc_select{color:#ebedef}.aerolsc_select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;color:#cfd2d8;cursor:pointer;height:23px;line-height:23px;outline:none;padding:0 5px;position:relative;width:100%}.aerolsc_arrow{background-position:center;background-repeat:no-repeat;bottom:0;height:10px;margin:auto 0;opacity:0.3;position:absolute;right:10px;top:0;transform:rotate(90deg);width:10px}.aeroplc{height:23px;position:relative}.aeroplc_outer{background-color:#61646b;border-radius:2px;height:23px;overflow:hidden;position:relative;width:23px}.aeroplc_inner{bottom:0;left:0;position:absolute;right:0;top:0}.aeroptc{height:23px;position:relative}.aeroplc.aeroplc-pt{position:absolute}.aerotxc.aerotxc-pt{position:absolute;left:28px;right:0}.aeroslc{cursor:pointer;height:23px;position:relative}.aeroslc:hover .aeroslc_outer{background-color:#797d86}.aeroslc:hover .aeroslc_inner{background-color:#ebedef}.aeroslc_outer{background-color:#61646b;border-radius:2px;height:100%;overflow:hidden;position:relative;transition:background-color 0.2s ease-out}.aeroslc_inner{background-color:#cfd2d8;bottom:0;left:0;position:absolute;top:0;transition:background-color 0.2s ease-out}.aerostc{height:23px;position:relative;width:100%}.aeroslc.aeroslc-st{left:0;right:55px;position:absolute;top:0}.aerotxc.aerotxc-st{position:absolute;right:0;top:0;width:50px}.aerotxc{height:23px;position:relative}.aerotxc_input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#61646b;border-radius:2px;border-width:0;color:#cfd2d8;height:100%;line-height:23px;outline:none;padding:0 5px;transition:background-color 0.2s ease-out;width:100%}.aerotxc_input:focus{background-color:#6d7178}.aerotxc_input:hover{background-color:#797d86;color:#ebedef}.aerocbm{height:23px;width:100%}.aerocbm_hitArea{display:block;height:23px;width:100%}.aerocbm_input{margin:0;opacity:0.001;padding:0;position:absolute}.aerocbm_input:checked+.aerocbm_outer .aerocbm_inner{opacity:1.0}.aerocbm_outer{background-color:#61646b;border-radius:2px;height:23px;position:relative;transition:background-color 0.2s ease-out;width:23px}.aerocbm_inner{background-color:#cfd2d8;border-radius:2px;bottom:0;height:13px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;transition:opacity 0.1s ease-out;width:13px}.aerogrm{height:69px;position:relative}.aerogrm_canvas{background-color:#61646b;border-radius:2px;color:#cfd2d8;display:block;height:69px;width:100%}.aerolgm{background-color:#61646b;border-radius:2px;height:69px;position:relative}.aerolgm_textarea{background-color:transparent;border-width:0;color:rgba(207,210,216,0.5);display:block;height:100%;line-height:23px;outline:none;padding:0 5px;resize:none;white-space:pre;width:100%}.aeromtm{background-color:#61646b;border-radius:2px;height:69px;position:relative}.aeromtm_textarea{background-color:transparent;border-width:0;color:rgba(207,210,216,0.5);display:block;height:100%;line-height:23px;outline:none;padding:0 5px;resize:none;white-space:pre;width:100%}.aeroplm{height:23px;position:relative}.aeroplm_outer{background-color:#61646b;border-radius:2px;height:23px;overflow:hidden;position:relative;width:23px}.aeroplm_inner{bottom:0;left:0;position:absolute;right:0;top:0}.aeroptm{height:23px;position:relative}.aeroplm.aeroplm-pt{position:absolute}.aerotxm.aerotxm-pt{position:absolute;left:28px;right:0}.aerotxm{background-color:#61646b;border-radius:2px;height:23px;position:relative}.aerotxm_input{background-color:transparent;border-width:0;color:rgba(207,210,216,0.5);height:23px;line-height:23px;outline:none;padding:0 5px;width:100%}';

module.exports = Style;

},{"./class_name":26}],33:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewUtil = (function () {
    function ViewUtil() {
        _classCallCheck(this, ViewUtil);
    }

    _createClass(ViewUtil, null, [{
        key: "getAllSubviews",
        value: function getAllSubviews(view) {
            var views = view.getSubviews();
            var index = 0;
            while (index < views.length) {
                var _view = views[index];
                views = views.concat(_view.getSubviews());
                ++index;
            }
            return views;
        }
    }]);

    return ViewUtil;
})();

module.exports = ViewUtil;

},{}],34:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = require('./model');

var Folder = (function (_Model) {
	_inherits(Folder, _Model);

	function Folder() {
		_classCallCheck(this, Folder);

		_get(Object.getPrototypeOf(Folder.prototype), 'constructor', this).call(this);

		this.expanded_ = true;
		this.shouldAnimate_ = true;
	}

	_createClass(Folder, [{
		key: 'isExpanded',
		value: function isExpanded() {
			return this.expanded_;
		}
	}, {
		key: 'shouldAnimate',
		value: function shouldAnimate() {
			return this.shouldAnimate_;
		}
	}, {
		key: 'setExpanded',
		value: function setExpanded(expanded, opt_shouldAnimate) {
			this.expanded_ = expanded;
			this.shouldAnimate_ = opt_shouldAnimate !== undefined ? opt_shouldAnimate : false;

			this.getEmitter().notifyObservers(Model.EVENT_CHANGE);
		}
	}]);

	return Folder;
})(Model);

module.exports = Folder;

},{"./model":35}],35:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventEmitter = require('../misc/event_emitter');

var Model = (function () {
    function Model() {
        _classCallCheck(this, Model);

        this.emitter_ = new EventEmitter();
    }

    _createClass(Model, [{
        key: 'getEmitter',
        value: function getEmitter() {
            return this.emitter_;
        }
    }]);

    return Model;
})();

Model.EVENT_CHANGE = 'change';

module.exports = Model;

},{"../misc/event_emitter":29}],36:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyModel = require('./property_model');

var BooleanModel = (function (_PropertyModel) {
    _inherits(BooleanModel, _PropertyModel);

    function BooleanModel() {
        _classCallCheck(this, BooleanModel);

        _get(Object.getPrototypeOf(BooleanModel.prototype), 'constructor', this).call(this);

        this.value_ = false;
    }

    _createClass(BooleanModel, null, [{
        key: 'validate',
        value: function validate(value) {
            return typeof value === 'boolean';
        }
    }]);

    return BooleanModel;
})(PropertyModel);

module.exports = BooleanModel;

},{"./property_model":42}],37:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyModel = require('./property_model');

var ColorModel = (function (_PropertyModel) {
    _inherits(ColorModel, _PropertyModel);

    function ColorModel() {
        _classCallCheck(this, ColorModel);

        _get(Object.getPrototypeOf(ColorModel.prototype), 'constructor', this).call(this);

        this.value_ = [0, 0, 0];
    }

    _createClass(ColorModel, null, [{
        key: 'validate',
        value: function validate(value) {
            if (!Array.isArray(value) || value.length !== 3) {
                return false;
            }

            return value.every(function (comp) {
                return typeof comp === 'number';
            });
        }
    }]);

    return ColorModel;
})(PropertyModel);

module.exports = ColorModel;

},{"./property_model":42}],38:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringModel = require('./string_model');

var LogRecordModel = (function (_StringModel) {
    _inherits(LogRecordModel, _StringModel);

    function LogRecordModel(opt_recordCount) {
        _classCallCheck(this, LogRecordModel);

        _get(Object.getPrototypeOf(LogRecordModel.prototype), 'constructor', this).call(this);

        this.recValues_ = [];
        this.recCount_ = opt_recordCount !== undefined ? opt_recordCount : LogRecordModel.DEFAULT_RECORD_COUNT;
    }

    _createClass(LogRecordModel, [{
        key: 'getRecords',
        value: function getRecords() {
            return this.recValues_;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            if (_get(Object.getPrototypeOf(LogRecordModel.prototype), 'setValue', this).call(this, value)) {
                this.recValues_.push(this.value_);

                if (this.recValues_.length > this.recCount_) {
                    this.recValues_.splice(0, this.recValues_.length - this.recCount_);
                }
            }
        }
    }]);

    return LogRecordModel;
})(StringModel);

LogRecordModel.DEFAULT_RECORD_COUNT = 10;

module.exports = LogRecordModel;

},{"./string_model":43}],39:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyModel = require('./property_model');

var NumberModel = (function (_PropertyModel) {
    _inherits(NumberModel, _PropertyModel);

    function NumberModel() {
        _classCallCheck(this, NumberModel);

        _get(Object.getPrototypeOf(NumberModel.prototype), 'constructor', this).call(this);

        this.value_ = 0.0;
    }

    _createClass(NumberModel, null, [{
        key: 'validate',
        value: function validate(value) {
            return typeof value === 'number';
        }
    }]);

    return NumberModel;
})(PropertyModel);

module.exports = NumberModel;

},{"./property_model":42}],40:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberModel = require('./number_model');

var NumberRecordModel = (function (_NumberModel) {
	_inherits(NumberRecordModel, _NumberModel);

	function NumberRecordModel(opt_recordCount) {
		_classCallCheck(this, NumberRecordModel);

		_get(Object.getPrototypeOf(NumberRecordModel.prototype), 'constructor', this).call(this);

		this.recValues_ = [];
		this.recCount_ = opt_recordCount !== undefined ? opt_recordCount : NumberRecordModel.DEFAULT_RECORD_COUNT;
		for (var i = 0; i < this.recCount_; i++) {
			this.recValues_.push(0);
		}
	}

	_createClass(NumberRecordModel, [{
		key: 'getRecords',
		value: function getRecords() {
			return this.recValues_;
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			_get(Object.getPrototypeOf(NumberRecordModel.prototype), 'setValue', this).call(this, value);

			this.recValues_.push(this.value_);
			if (this.recValues_.length > this.recCount_) {
				this.recValues_.splice(0, this.recValues_.length - this.recCount_);
			}

			this.getEmitter().notifyObservers(NumberRecordModel.EVENT_RECORD_CHANGE);
		}
	}]);

	return NumberRecordModel;
})(NumberModel);

NumberRecordModel.DEFAULT_RECORD_COUNT = 200;
NumberRecordModel.EVENT_RECORD_CHANGE = 'recordchange';

module.exports = NumberRecordModel;

},{"./number_model":39}],41:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CodecProvider = require('../../codec/codec_provider');
var EventEmitter = require('../../misc/event_emitter');

var Property = (function () {
	function Property(builder) {
		_classCallCheck(this, Property);

		this.ref_ = builder.getReference();
		this.label_ = builder.getLabel();
		this.id_ = builder.getId();
		this.forMonitor_ = builder.isForMonitor();

		this.model_ = builder.getModel();
		this.codec_ = CodecProvider.provide(this.model_);

		this.emitter_ = new EventEmitter();
	}

	_createClass(Property, [{
		key: 'getEmitter',
		value: function getEmitter() {
			return this.emitter_;
		}
	}, {
		key: 'getId',
		value: function getId() {
			return this.id_;
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			return this.label_;
		}
	}, {
		key: 'getModel',
		value: function getModel() {
			return this.model_;
		}
	}, {
		key: 'getCodec',
		value: function getCodec() {
			return this.codec_;
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.codec_.encode(this.model_.getValue());
		}
	}, {
		key: 'isForMonitor',
		value: function isForMonitor() {
			return this.forMonitor_;
		}
	}, {
		key: 'setValue',
		value: function setValue(value, opt_updatesSource) {
			if (!this.codec_.canDecode(value)) {
				return false;
			}
			var decodedValue = this.codec_.decode(value);

			var updatesSource = opt_updatesSource !== undefined ? opt_updatesSource : false;
			if (updatesSource) {
				this.ref_.setValue(decodedValue);
			}

			this.model_.setValue(decodedValue);

			return true;
		}
	}, {
		key: 'applySourceValue',
		value: function applySourceValue() {
			this.setValue(this.ref_.getValue());
		}
	}]);

	return Property;
})();

module.exports = Property;

},{"../../codec/codec_provider":4,"../../misc/event_emitter":29}],42:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Errors = require('../../misc/errors');
var Model = require('../model');

var PropertyModel = (function (_Model) {
	_inherits(PropertyModel, _Model);

	function PropertyModel() {
		_classCallCheck(this, PropertyModel);

		_get(Object.getPrototypeOf(PropertyModel.prototype), 'constructor', this).call(this);

		this.value_ = null;
		this.constraints_ = [];
	}

	_createClass(PropertyModel, [{
		key: 'getValue',
		value: function getValue() {
			return this.value_;
		}
	}, {
		key: 'constrain_',
		value: function constrain_() {
			this.value_ = this.constraints_.reduce(function (v, constraint) {
				return constraint.constrain(v);
			}, this.value_);
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			if (!this.constructor.validate(value)) {
				return false;
			}

			var prevValue = this.value_;
			this.value_ = value;
			this.constrain_();

			var changed = prevValue !== this.value_;
			if (changed) {
				this.emitter_.notifyObservers(Model.EVENT_CHANGE, [this.value_]);
			}

			return changed;
		}
	}, {
		key: 'getConstraints',
		value: function getConstraints() {
			return this.constraints_;
		}
	}, {
		key: 'findConstraintByClass',
		value: function findConstraintByClass(ConstraintClass) {
			var result = this.constraints_.filter(function (constraint) {
				return constraint instanceof ConstraintClass;
			});
			return result.length > 0 ? result[0] : null;
		}
	}, {
		key: 'addConstraint',
		value: function addConstraint(constraint) {
			if (this.findConstraintByClass(constraint.constructor)) {
				throw Errors.constraintAlreadyExists(constraint);
			}

			this.constraints_.push(constraint);

			var prevValue = this.value_;
			this.constrain_();

			if (prevValue !== this.value_) {
				this.emitter_.notifyObservers(Model.EVENT_CHANGE, [this.value_]);
			}
		}
	}], [{
		key: 'validate',
		value: function validate(value) {
			return value !== null;
		}
	}]);

	return PropertyModel;
})(Model);

module.exports = PropertyModel;

},{"../../misc/errors":28,"../model":35}],43:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyModel = require('./property_model');

var StringModel = (function (_PropertyModel) {
    _inherits(StringModel, _PropertyModel);

    function StringModel() {
        _classCallCheck(this, StringModel);

        _get(Object.getPrototypeOf(StringModel.prototype), 'constructor', this).call(this);

        this.value_ = '';
    }

    _createClass(StringModel, null, [{
        key: 'validate',
        value: function validate(value) {
            return typeof value === 'string';
        }
    }]);

    return StringModel;
})(PropertyModel);

module.exports = StringModel;

},{"./property_model":42}],44:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var View = require('./view');

var ButtonView = (function (_View) {
    _inherits(ButtonView, _View);

    function ButtonView(title) {
        _classCallCheck(this, ButtonView);

        _get(Object.getPrototypeOf(ButtonView.prototype), 'constructor', this).call(this);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(ButtonView.BLOCK_CLASS));

        var buttonElem = document.createElement('button');
        buttonElem.textContent = title;
        buttonElem.classList.add(ClassName.get(ButtonView.BLOCK_CLASS, 'button'));
        buttonElem.addEventListener('click', this.onButtonElementClick_.bind(this));
        elem.appendChild(buttonElem);
        this.titleElem_ = buttonElem;
    }

    _createClass(ButtonView, [{
        key: 'onButtonElementClick_',
        value: function onButtonElementClick_() {
            this.getEmitter().notifyObservers(ButtonView.EVENT_CLICK, [this]);
        }
    }]);

    return ButtonView;
})(View);

ButtonView.BLOCK_CLASS = 'btv';
ButtonView.EVENT_CLICK = 'click';

module.exports = ButtonView;

},{"../misc/class_name":26,"./view":70}],45:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var Control = require('./control');

var CheckboxControl = (function (_Control) {
	_inherits(CheckboxControl, _Control);

	function CheckboxControl(property) {
		_classCallCheck(this, CheckboxControl);

		_get(Object.getPrototypeOf(CheckboxControl.prototype), 'constructor', this).call(this, property);

		var elem = this.getElement();
		elem.classList.add(ClassName.get(CheckboxControl.BLOCK_CLASS));

		var labelElem = document.createElement('label');
		labelElem.classList.add(ClassName.get(CheckboxControl.BLOCK_CLASS, 'hitArea'));
		elem.appendChild(labelElem);

		var inputElem = document.createElement('input');
		inputElem.classList.add(ClassName.get(CheckboxControl.BLOCK_CLASS, 'input'));
		inputElem.type = 'checkbox';
		labelElem.appendChild(inputElem);
		inputElem.addEventListener('change', this.onInputElementChange_.bind(this));
		this.inputElem_ = inputElem;

		var outerElem = document.createElement('div');
		outerElem.classList.add(ClassName.get(CheckboxControl.BLOCK_CLASS, 'outer'));
		labelElem.appendChild(outerElem);

		var innerElem = document.createElement('div');
		innerElem.classList.add(ClassName.get(CheckboxControl.BLOCK_CLASS, 'inner'));
		outerElem.appendChild(innerElem);

		this.applyModel_();
	}

	_createClass(CheckboxControl, [{
		key: 'applyModel_',
		value: function applyModel_() {
			_get(Object.getPrototypeOf(CheckboxControl.prototype), 'applyModel_', this).call(this);

			var model = this.getProperty().getModel();
			this.inputElem_.checked = model.getValue();
		}
	}, {
		key: 'onInputElementChange_',
		value: function onInputElementChange_() {
			this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.inputElem_.checked]);
		}
	}]);

	return CheckboxControl;
})(Control);

CheckboxControl.BLOCK_CLASS = 'cbc';

module.exports = CheckboxControl;

},{"../../misc/class_name":26,"./control":47}],46:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = require('./control');

var CompositeControl = (function (_Control) {
	_inherits(CompositeControl, _Control);

	function CompositeControl(property) {
		_classCallCheck(this, CompositeControl);

		_get(Object.getPrototypeOf(CompositeControl.prototype), 'constructor', this).call(this, property);
	}

	_createClass(CompositeControl, [{
		key: 'attachControl_',
		value: function attachControl_(control) {
			control.getEmitter().on(Control.EVENT_CHANGE, this.onSubcontrolChange_, this);
		}
	}, {
		key: 'detachControl_',
		value: function detachControl_(control) {
			control.getEmitter().off(Control.EVENT_CHANGE, this.onSubcontrolChange_, this);
		}
	}, {
		key: 'addSubview',
		value: function addSubview(subview) {
			var added = _get(Object.getPrototypeOf(CompositeControl.prototype), 'addSubview', this).call(this, subview);
			if (!added) {
				return false;
			}

			if (subview instanceof Control) {
				this.attachControl_(subview);
			}

			return true;
		}
	}, {
		key: 'removeSubview',
		value: function removeSubview(subview) {
			var removed = _get(Object.getPrototypeOf(CompositeControl.prototype), 'removeSubview', this).call(this, subview);
			if (!removed) {
				return false;
			}

			if (subview instanceof Control) {
				this.detachControl_(subview);
			}

			return true;
		}
	}, {
		key: 'onSubcontrolChange_',
		value: function onSubcontrolChange_(value) {
			this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [value]);
		}
	}]);

	return CompositeControl;
})(Control);

module.exports = CompositeControl;

},{"./control":47}],47:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('../../misc/event_emitter');
var Model = require('../../model/model');
var View = require('../view');

var Control = (function (_View) {
	_inherits(Control, _View);

	function Control(property) {
		_classCallCheck(this, Control);

		_get(Object.getPrototypeOf(Control.prototype), 'constructor', this).call(this);

		this.emitter_ = new EventEmitter();

		var model = property.getModel();
		model.getEmitter().on(Model.EVENT_CHANGE, this.onModelChange_, this);
		this.prop_ = property;
	}

	_createClass(Control, [{
		key: 'getProperty',
		value: function getProperty() {
			return this.prop_;
		}
	}, {
		key: 'getEmitter',
		value: function getEmitter() {
			return this.emitter_;
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

Control.BLOCK_CLASS = 'c';
Control.EVENT_CHANGE = 'change';

module.exports = Control;

},{"../../misc/event_emitter":29,"../../model/model":35,"../view":70}],48:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListConstraint = require('../../constraint/list_constraint');
var ClassName = require('../../misc/class_name');
var Control = require('./control');

var ListControl = (function (_Control) {
	_inherits(ListControl, _Control);

	function ListControl(property) {
		_classCallCheck(this, ListControl);

		_get(Object.getPrototypeOf(ListControl.prototype), 'constructor', this).call(this, property);

		var elem = this.getElement();
		elem.classList.add(ClassName.get(ListControl.BLOCK_CLASS));

		var arrowElem = document.createElement('div');
		arrowElem.classList.add(ClassName.get(ListControl.BLOCK_CLASS, 'arrow'));
		elem.appendChild(arrowElem);

		var selectElem = document.createElement('select');
		selectElem.classList.add(ClassName.get(ListControl.BLOCK_CLASS, 'select'));
		elem.appendChild(selectElem);
		selectElem.addEventListener('change', this.onSelectElementChange_.bind(this));
		this.selectElem_ = selectElem;

		this.applyModel_();
	}

	_createClass(ListControl, [{
		key: 'applyModel_',
		value: function applyModel_() {
			var _this = this;

			_get(Object.getPrototypeOf(ListControl.prototype), 'applyModel_', this).call(this);

			if (this.selectElem_ === undefined) {
				return;
			}

			while (this.selectElem_.hasChildNodes()) {
				this.selectElem_.removeChild(this.selectElem_.lastChild);
			}

			var model = this.getProperty().getModel();
			var constraint = model.findConstraintByClass(ListConstraint);
			var items = constraint.getItems() || [];
			items.forEach(function (item) {
				var optionElem = document.createElement('option');
				optionElem.value = item.value;
				optionElem.textContent = item.name;
				_this.selectElem_.appendChild(optionElem);
			});

			this.selectElem_.value = model.getValue();
		}
	}, {
		key: 'onSelectElementChange_',
		value: function onSelectElementChange_() {
			this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.selectElem_.value]);
		}
	}]);

	return ListControl;
})(Control);

ListControl.BLOCK_CLASS = 'lsc';

module.exports = ListControl;

},{"../../constraint/list_constraint":9,"../../misc/class_name":26,"./control":47}],49:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepNumberConstraint = require('../../constraint/step_number_constraint');
var NumberFormatter = require('../../formatter/number_formatter');
var TextControl = require('./text_control');
var Control = require('./control');

var NumberTextControl = (function (_TextControl) {
	_inherits(NumberTextControl, _TextControl);

	function NumberTextControl(property) {
		_classCallCheck(this, NumberTextControl);

		_get(Object.getPrototypeOf(NumberTextControl.prototype), 'constructor', this).call(this, property);

		this.formatter_ = new NumberFormatter();

		this.inputElem_.addEventListener('keydown', this.onInputKeyDown_.bind(this));
	}

	_createClass(NumberTextControl, [{
		key: 'getStep_',
		value: function getStep_() {
			var model = this.getProperty().getModel();
			var stepConstraint = model.findConstraintByClass(StepNumberConstraint);
			return stepConstraint !== null ? stepConstraint.getStepValue() : 1;
		}
	}, {
		key: 'onInputKeyDown_',
		value: function onInputKeyDown_(e) {
			var step = this.getStep_() * (e.shiftKey ? 10 : 1);
			var model = this.getProperty().getModel();
			switch (e.keyCode) {
				case 38:
					// UP
					this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [model.getValue() + step]);
					break;
				case 40:
					// DOWN
					this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [model.getValue() - step]);
					break;
			}
		}
	}]);

	return NumberTextControl;
})(TextControl);

module.exports = NumberTextControl;

},{"../../constraint/step_number_constraint":12,"../../formatter/number_formatter":20,"./control":47,"./text_control":54}],50:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorFormatter = require('../../formatter/color_formatter');
var ClassName = require('../../misc/class_name');
var Control = require('./control');

var PaletteControl = (function (_Control) {
	_inherits(PaletteControl, _Control);

	function PaletteControl(property) {
		_classCallCheck(this, PaletteControl);

		_get(Object.getPrototypeOf(PaletteControl.prototype), 'constructor', this).call(this, property);

		this.getElement().classList.add(ClassName.get(PaletteControl.BLOCK_CLASS));

		var outerElem = document.createElement('div');
		outerElem.classList.add(ClassName.get(PaletteControl.BLOCK_CLASS, 'outer'));
		this.elem_.appendChild(outerElem);

		var innerElem = document.createElement('div');
		innerElem.classList.add(ClassName.get(PaletteControl.BLOCK_CLASS, 'inner'));
		outerElem.appendChild(innerElem);
		this.innerElem_ = innerElem;

		this.applyModel_();
	}

	_createClass(PaletteControl, [{
		key: 'applyModel_',
		value: function applyModel_() {
			_get(Object.getPrototypeOf(PaletteControl.prototype), 'applyModel_', this).call(this);

			if (this.innerElem_ !== undefined) {
				var model = this.getProperty().getModel();
				var color = new ColorFormatter().format(model.getValue());
				this.innerElem_.style.backgroundColor = color;
			}
		}
	}]);

	return PaletteControl;
})(Control);

PaletteControl.BLOCK_CLASS = 'plc';

module.exports = PaletteControl;

},{"../../formatter/color_formatter":18,"../../misc/class_name":26,"./control":47}],51:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorFormatter = require('../../formatter/color_formatter');
var ClassName = require('../../misc/class_name');
var CompositeControl = require('./composite_control');
var PaletteControl = require('./palette_control');
var TextControl = require('./text_control');

var PaletteTextControl = (function (_CompositeControl) {
	_inherits(PaletteTextControl, _CompositeControl);

	function PaletteTextControl(property) {
		_classCallCheck(this, PaletteTextControl);

		_get(Object.getPrototypeOf(PaletteTextControl.prototype), 'constructor', this).call(this, property);

		this.getElement().classList.add(ClassName.get(PaletteTextControl.BLOCK_CLASS));

		var prop = this.getProperty();
		var paletteControl = new PaletteControl(prop);
		paletteControl.getElement().classList.add(ClassName.get(PaletteControl.BLOCK_CLASS, null, PaletteTextControl.MODIFIER_CLASS));
		this.addSubview(paletteControl);

		var textControl = new TextControl(prop);
		textControl.setFormatter(new ColorFormatter());
		textControl.getElement().classList.add(ClassName.get(TextControl.BLOCK_CLASS, null, PaletteTextControl.MODIFIER_CLASS));
		this.addSubview(textControl);
	}

	return PaletteTextControl;
})(CompositeControl);

PaletteTextControl.BLOCK_CLASS = 'ptc';
PaletteTextControl.MODIFIER_CLASS = 'pt';

module.exports = PaletteTextControl;

},{"../../formatter/color_formatter":18,"../../misc/class_name":26,"./composite_control":46,"./palette_control":50,"./text_control":54}],52:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaxNumberConstraint = require('../../constraint/max_number_constraint');
var MinNumberConstraint = require('../../constraint/min_number_constraint');
var ClassName = require('../../misc/class_name');
var Control = require('./control');

var SliderControl = (function (_Control) {
	_inherits(SliderControl, _Control);

	function SliderControl(property) {
		_classCallCheck(this, SliderControl);

		_get(Object.getPrototypeOf(SliderControl.prototype), 'constructor', this).call(this, property);

		var elem = this.getElement();
		elem.classList.add(ClassName.get(SliderControl.BLOCK_CLASS));

		var sliderElem = document.createElement('div');
		sliderElem.classList.add(ClassName.get(SliderControl.BLOCK_CLASS, 'outer'));
		var supportsTouch = sliderElem.ontouchstart !== undefined;
		if (supportsTouch) {
			sliderElem.addEventListener('touchstart', this.onElementTouchStart_.bind(this));
			sliderElem.addEventListener('touchmove', this.onElementTouchMove_.bind(this));
		} else {
			sliderElem.addEventListener('mousedown', this.onElementMouseDown_.bind(this));
			window.addEventListener('mousemove', this.onWindowMouseMove_.bind(this));
			window.addEventListener('mouseup', this.onWindowMouseUp_.bind(this));
		}
		elem.appendChild(sliderElem);
		this.sliderElem_ = sliderElem;

		var sliderBarElem = document.createElement('div');
		sliderBarElem.classList.add(ClassName.get(SliderControl.BLOCK_CLASS, 'inner'));
		this.sliderElem_.appendChild(sliderBarElem);
		this.sliderBarElem_ = sliderBarElem;

		this.captured_ = false;
		this.applyModel_();
	}

	_createClass(SliderControl, [{
		key: 'applyModel_',
		value: function applyModel_() {
			_get(Object.getPrototypeOf(SliderControl.prototype), 'applyModel_', this).call(this);

			if (this.sliderBarElem_ !== undefined) {
				var model = this.getProperty().getModel();
				var minValue = model.findConstraintByClass(MinNumberConstraint).getMinValue();
				var maxValue = model.findConstraintByClass(MaxNumberConstraint).getMaxValue();
				var p = (model.getValue() - minValue) / (maxValue - minValue);
				this.sliderBarElem_.style.width = p * 100 + '%';
			}
		}
	}, {
		key: 'getValueFromX_',
		value: function getValueFromX_(x) {
			var model = this.getProperty().getModel();
			var minValue = model.findConstraintByClass(MinNumberConstraint).getMinValue();
			var maxValue = model.findConstraintByClass(MaxNumberConstraint).getMaxValue();
			var width = this.sliderElem_.clientWidth;
			var p = Math.min(Math.max(x / width, 0), 1.0);
			return minValue + (maxValue - minValue) * p;
		}
	}, {
		key: 'onElementMouseDown_',
		value: function onElementMouseDown_(e) {
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
	}, {
		key: 'onElementTouchStart_',
		value: function onElementTouchStart_(e) {
			// Prevent default event to prevent native scroll
			e.preventDefault();

			var bound = e.target.getBoundingClientRect();
			var offsetX = e.targetTouches[0].clientX - bound.left;
			this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.getValueFromX_(offsetX)]);
		}
	}, {
		key: 'onElementTouchMove_',
		value: function onElementTouchMove_(e) {
			var bound = e.target.getBoundingClientRect();
			var offsetX = e.targetTouches[0].clientX - bound.left;
			this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.getValueFromX_(offsetX)]);
		}
	}]);

	return SliderControl;
})(Control);

SliderControl.BLOCK_CLASS = 'slc';

module.exports = SliderControl;

},{"../../constraint/max_number_constraint":10,"../../constraint/min_number_constraint":11,"../../misc/class_name":26,"./control":47}],53:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var CompositeControl = require('./composite_control');
var SliderControl = require('./slider_control');
var NumberTextControl = require('./number_text_control');
var TextControl = require('./text_control');

var SliderTextControl = (function (_CompositeControl) {
	_inherits(SliderTextControl, _CompositeControl);

	function SliderTextControl(property) {
		_classCallCheck(this, SliderTextControl);

		_get(Object.getPrototypeOf(SliderTextControl.prototype), 'constructor', this).call(this, property);

		this.getElement().classList.add(ClassName.get(SliderTextControl.BLOCK_CLASS));
		var prop = this.getProperty();
		var sliderControl = new SliderControl(prop);
		sliderControl.getElement().classList.add(ClassName.get(SliderControl.BLOCK_CLASS, null, SliderTextControl.MODIFIER_CLASS));
		this.addSubview(sliderControl);

		var textControl = new NumberTextControl(prop);
		textControl.getElement().classList.add(ClassName.get(TextControl.BLOCK_CLASS, null, SliderTextControl.MODIFIER_CLASS));
		this.addSubview(textControl);
	}

	return SliderTextControl;
})(CompositeControl);

SliderTextControl.BLOCK_CLASS = 'stc';
SliderTextControl.MODIFIER_CLASS = 'st';

module.exports = SliderTextControl;

},{"../../misc/class_name":26,"./composite_control":46,"./number_text_control":49,"./slider_control":52,"./text_control":54}],54:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('../../formatter/formatter');
var ClassName = require('../../misc/class_name');
var Control = require('./control');

var TextControl = (function (_Control) {
	_inherits(TextControl, _Control);

	function TextControl(property) {
		_classCallCheck(this, TextControl);

		_get(Object.getPrototypeOf(TextControl.prototype), 'constructor', this).call(this, property);

		var elem = this.getElement();
		elem.classList.add(ClassName.get(TextControl.BLOCK_CLASS));

		var inputElem = document.createElement('input');
		inputElem.classList.add(ClassName.get(TextControl.BLOCK_CLASS, 'input'));
		inputElem.type = 'text';
		elem.appendChild(inputElem);
		inputElem.addEventListener('blur', this.onInputElementBlur_.bind(this));
		elem.appendChild(inputElem);
		inputElem.addEventListener('change', this.onInputElementChange_.bind(this));
		this.inputElem_ = inputElem;

		this.formatter_ = new Formatter();
		this.applyModel_();
	}

	_createClass(TextControl, [{
		key: 'getFormatter',
		value: function getFormatter() {
			return this.formatter_;
		}
	}, {
		key: 'setFormatter',
		value: function setFormatter(formatter) {
			this.formatter_ = formatter;
			this.applyModel_();
		}
	}, {
		key: 'applyModel_',
		value: function applyModel_() {
			_get(Object.getPrototypeOf(TextControl.prototype), 'applyModel_', this).call(this);

			var model = this.getProperty().getModel();
			this.inputElem_.value = this.formatter_.format(model.getValue());
		}
	}, {
		key: 'onInputElementBlur_',
		value: function onInputElementBlur_() {
			this.applyModel_();
		}
	}, {
		key: 'onInputElementChange_',
		value: function onInputElementChange_() {
			this.getEmitter().notifyObservers(Control.EVENT_CHANGE, [this.inputElem_.value]);
		}
	}]);

	return TextControl;
})(Control);

TextControl.BLOCK_CLASS = 'txc';

module.exports = TextControl;

},{"../../formatter/formatter":19,"../../misc/class_name":26,"./control":47}],55:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Style = require('../misc/style');
var ClassName = require('../misc/class_name');
var Folder = require('../model/folder');
var Model = require('../model/model');
var View = require('./view');

var FolderView = (function (_View) {
	_inherits(FolderView, _View);

	function FolderView(title) {
		_classCallCheck(this, FolderView);

		_get(Object.getPrototypeOf(FolderView.prototype), 'constructor', this).call(this);

		var elem = this.getElement();
		elem.classList.add(ClassName.get(FolderView.BLOCK_CLASS));

		var buttonElem = document.createElement('button');
		buttonElem.classList.add(ClassName.get(FolderView.BLOCK_CLASS, 'button'));
		buttonElem.addEventListener('click', this.onButtonElementClick_.bind(this));
		elem.appendChild(buttonElem);

		var arrowElem = document.createElement('span');
		arrowElem.classList.add(ClassName.get(FolderView.BLOCK_CLASS, 'arrow'));
		buttonElem.appendChild(arrowElem);
		this.arrowElem_ = arrowElem;

		var titleElem = document.createElement('span');
		titleElem.textContent = title;
		titleElem.classList.add(ClassName.get(FolderView.BLOCK_CLASS, 'title'));
		buttonElem.appendChild(titleElem);

		var containerElem = document.createElement('div');
		containerElem.classList.add(ClassName.get(FolderView.BLOCK_CLASS, 'container'));
		elem.appendChild(containerElem);
		this.containerElem_ = containerElem;

		var folder = new Folder();
		folder.getEmitter().on(Model.EVENT_CHANGE, this.onFolderChange_, this);
		this.folder_ = folder;
		this.folder_.setExpanded(true, false);
	}

	_createClass(FolderView, [{
		key: 'getContainerElement_',
		value: function getContainerElement_() {
			return this.containerElem_;
		}
	}, {
		key: 'getFolder',
		value: function getFolder() {
			return this.folder_;
		}
	}, {
		key: 'getContentHeight_',
		value: function getContentHeight_() {
			return this.subviews_.reduce(function (total, subview) {
				return total + subview.getElement().offsetHeight;
			}, 0);
		}
	}, {
		key: 'applyExpanded_',
		value: function applyExpanded_() {
			var _this = this;

			var folder = this.folder_;

			Style.runTransition(this.arrowElem_, function (arrowElem) {
				var arrowClass = ClassName.get(FolderView.BLOCK_CLASS, 'arrow', 'expanded');
				if (folder.isExpanded()) {
					arrowElem.classList.add(arrowClass);
				} else {
					arrowElem.classList.remove(arrowClass);
				}
			}, folder.shouldAnimate());

			Style.runTransition(this.containerElem_, function (containerElem) {
				var contentHeight = folder.isExpanded() ? _this.getContentHeight_() : 0;
				containerElem.style.height = contentHeight + 'px';
			}, folder.shouldAnimate());
		}
	}, {
		key: 'addSubview',
		value: function addSubview(subview) {
			_get(Object.getPrototypeOf(FolderView.prototype), 'addSubview', this).call(this, subview);
			this.applyExpanded_();
		}
	}, {
		key: 'onButtonElementClick_',
		value: function onButtonElementClick_() {
			this.folder_.setExpanded(!this.folder_.isExpanded(), true);
		}
	}, {
		key: 'onFolderChange_',
		value: function onFolderChange_() {
			this.applyExpanded_();
		}
	}]);

	return FolderView;
})(View);

FolderView.BLOCK_CLASS = 'flv';

module.exports = FolderView;

},{"../misc/class_name":26,"../misc/style":32,"../model/folder":34,"../model/model":35,"./view":70}],56:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var Monitor = require('./monitor');

var CheckboxMonitor = (function (_Monitor) {
    _inherits(CheckboxMonitor, _Monitor);

    function CheckboxMonitor(property) {
        _classCallCheck(this, CheckboxMonitor);

        _get(Object.getPrototypeOf(CheckboxMonitor.prototype), 'constructor', this).call(this, property);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(CheckboxMonitor.BLOCK_CLASS));

        var labelElem = document.createElement('label');
        labelElem.classList.add(ClassName.get(CheckboxMonitor.BLOCK_CLASS, 'hitArea'));
        elem.appendChild(labelElem);

        var inputElem = document.createElement('input');
        inputElem.classList.add(ClassName.get(CheckboxMonitor.BLOCK_CLASS, 'input'));
        inputElem.disabled = true;
        inputElem.type = 'checkbox';
        labelElem.appendChild(inputElem);
        this.inputElem_ = inputElem;

        var outerElem = document.createElement('div');
        outerElem.classList.add(ClassName.get(CheckboxMonitor.BLOCK_CLASS, 'outer'));
        labelElem.appendChild(outerElem);

        var innerElem = document.createElement('div');
        innerElem.classList.add(ClassName.get(CheckboxMonitor.BLOCK_CLASS, 'inner'));
        outerElem.appendChild(innerElem);

        this.applyModel_();
    }

    _createClass(CheckboxMonitor, [{
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(CheckboxMonitor.prototype), 'applyModel_', this).call(this);

            this.inputElem_.checked = this.getProperty().getModel().getValue();
        }
    }]);

    return CheckboxMonitor;
})(Monitor);

CheckboxMonitor.BLOCK_CLASS = 'cbm';

module.exports = CheckboxMonitor;

},{"../../misc/class_name":26,"./monitor":60}],57:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Monitor = require('./monitor');

var CompositeMonitor = (function (_Monitor) {
    _inherits(CompositeMonitor, _Monitor);

    function CompositeMonitor(property) {
        _classCallCheck(this, CompositeMonitor);

        _get(Object.getPrototypeOf(CompositeMonitor.prototype), 'constructor', this).call(this, property);
    }

    _createClass(CompositeMonitor, [{
        key: 'start',
        value: function start(opt_interval) {
            this.getSubviews().forEach(function (subview) {
                if (!(subview instanceof Monitor)) {
                    return;
                }

                subview.start(opt_interval);
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.getSubviews().forEach(function (subview) {
                if (!(subview instanceof Monitor)) {
                    return;
                }

                subview.stop();
            });
        }
    }]);

    return CompositeMonitor;
})(Monitor);

module.exports = CompositeMonitor;

},{"./monitor":60}],58:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaxNumberConstraint = require('../../constraint/max_number_constraint');
var MinNumberConstraint = require('../../constraint/min_number_constraint');
var ClassName = require('../../misc/class_name');
var NumberRecordModel = require('../../model/property/number_record_model');
var Monitor = require('./monitor');

var GraphMonitor = (function (_Monitor) {
	_inherits(GraphMonitor, _Monitor);

	function GraphMonitor(property) {
		_classCallCheck(this, GraphMonitor);

		_get(Object.getPrototypeOf(GraphMonitor.prototype), 'constructor', this).call(this, property);

		var prop = this.getProperty();
		prop.getModel().getEmitter().on(NumberRecordModel.EVENT_RECORD_CHANGE, this.onModelRecordChange_.bind(this));

		var elem = this.getElement();
		elem.classList.add(ClassName.get(GraphMonitor.BLOCK_CLASS));

		var canvasElem = document.createElement('canvas');
		canvasElem.classList.add(ClassName.get(GraphMonitor.BLOCK_CLASS, 'canvas'));
		elem.appendChild(canvasElem);
		this.canvasElem_ = canvasElem;

		this.color_ = '';

		this.applyModel_();
	}

	_createClass(GraphMonitor, [{
		key: 'getMaxValue_',
		value: function getMaxValue_() {
			var maxConstraint = this.getProperty().getModel().findConstraintByClass(MaxNumberConstraint);
			return maxConstraint !== null ? maxConstraint.getMaxValue() : +1.0;
		}
	}, {
		key: 'getMinValue_',
		value: function getMinValue_() {
			var minConstraint = this.getProperty().getModel().findConstraintByClass(MinNumberConstraint);
			return minConstraint !== null ? minConstraint.getMinValue() : -1.0;
		}
	}, {
		key: 'applyModel_',
		value: function applyModel_() {
			_get(Object.getPrototypeOf(GraphMonitor.prototype), 'applyModel_', this).call(this);

			this.applyCanvasSizeIfNeeded_();

			var canvas = this.canvasElem_;
			var w = canvas.width;
			var h = canvas.height;
			var g = canvas.getContext('2d');
			g.clearRect(0, 0, canvas.width, canvas.height);

			if (this.color_ === '') {
				this.color_ = window.getComputedStyle(canvas).color;
			}
			g.strokeStyle = this.color_;

			var minValue = this.getMinValue_();
			var maxValue = this.getMaxValue_();

			var model = this.getProperty().getModel();
			var values = model.getRecords();
			g.beginPath();
			var y0 = h * ((values[0] - minValue) / (maxValue - minValue));
			g.moveTo(0, h - y0);
			for (var x = 1; x < w; x++) {
				var index = Math.floor(values.length * x / w);
				var v = values[index];
				var y = h * ((v - minValue) / (maxValue - minValue));
				g.lineTo(x, h - y);
			}
			g.stroke();
		}
	}, {
		key: 'applyCanvasSizeIfNeeded_',
		value: function applyCanvasSizeIfNeeded_() {
			var canvas = this.canvasElem_;
			if (canvas.width !== canvas.clientWidth) {
				canvas.width = canvas.clientWidth;
			}
			if (canvas.height !== canvas.clientHeight) {
				canvas.height = canvas.clientHeight;
			}
		}
	}, {
		key: 'onModelRecordChange_',
		value: function onModelRecordChange_() {
			this.applyModel_();
		}
	}]);

	return GraphMonitor;
})(Monitor);

GraphMonitor.BLOCK_CLASS = 'grm';

module.exports = GraphMonitor;

},{"../../constraint/max_number_constraint":10,"../../constraint/min_number_constraint":11,"../../misc/class_name":26,"../../model/property/number_record_model":40,"./monitor":60}],59:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var Monitor = require('./monitor');

var LogMonitor = (function (_Monitor) {
    _inherits(LogMonitor, _Monitor);

    function LogMonitor(property) {
        _classCallCheck(this, LogMonitor);

        _get(Object.getPrototypeOf(LogMonitor.prototype), 'constructor', this).call(this, property);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(LogMonitor.BLOCK_CLASS));

        var textareaElem = document.createElement('textarea');
        textareaElem.classList.add(ClassName.get(LogMonitor.BLOCK_CLASS, 'textarea'));
        textareaElem.readOnly = true;
        elem.appendChild(textareaElem);
        this.textareaElem_ = textareaElem;

        this.applyModel_();
    }

    _createClass(LogMonitor, [{
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(LogMonitor.prototype), 'applyModel_', this).call(this);

            var model = this.getProperty().getModel();
            var lines = model.getRecords().slice();
            lines.push(model.getValue());

            var textareaElem = this.textareaElem_;
            var bottommost = textareaElem.scrollTop === textareaElem.scrollHeight - textareaElem.clientHeight;
            textareaElem.textContent = lines.join('\n');
            if (bottommost) {
                textareaElem.scrollTop = textareaElem.scrollHeight;
            }
        }
    }, {
        key: 'onModelRecordChange_',
        value: function onModelRecordChange_() {
            this.applyModel_();
        }
    }]);

    return LogMonitor;
})(Monitor);

LogMonitor.BLOCK_CLASS = 'lgm';

module.exports = LogMonitor;

},{"../../misc/class_name":26,"./monitor":60}],60:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = require('../../model/model');
var View = require('../view');

var Monitor = (function (_View) {
    _inherits(Monitor, _View);

    function Monitor(property) {
        _classCallCheck(this, Monitor);

        _get(Object.getPrototypeOf(Monitor.prototype), 'constructor', this).call(this);

        property.getModel().getEmitter().on(Model.EVENT_CHANGE, this.onModelChange_, this);
        this.prop_ = property;

        this.timer_ = null;
    }

    _createClass(Monitor, [{
        key: 'getProperty',
        value: function getProperty() {
            return this.prop_;
        }
    }, {
        key: 'start',
        value: function start(opt_interval) {
            var _this = this;

            this.stop();

            var interval = opt_interval !== undefined ? opt_interval : Monitor.DEFAULT_INTERVAL;
            if (interval < 0) {
                return;
            }

            this.timer_ = setInterval(function () {
                _this.onTimerTick_();
            }, interval);
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.timer_ === null) {
                return;
            }

            clearInterval(this.timer_);
            this.timer_ = null;
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
        key: 'onTimerTick_',
        value: function onTimerTick_() {
            this.prop_.applySourceValue();
        }
    }]);

    return Monitor;
})(View);

Monitor.BLOCK_CLASS = 'm';
Monitor.DEFAULT_INTERVAL = 100;

module.exports = Monitor;

},{"../../model/model":35,"../view":70}],61:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../../misc/class_name');
var Monitor = require('./monitor');

var MultilineTextMonitor = (function (_Monitor) {
    _inherits(MultilineTextMonitor, _Monitor);

    function MultilineTextMonitor(property) {
        _classCallCheck(this, MultilineTextMonitor);

        _get(Object.getPrototypeOf(MultilineTextMonitor.prototype), 'constructor', this).call(this, property);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(MultilineTextMonitor.BLOCK_CLASS));

        var textareaElem = document.createElement('textarea');
        textareaElem.classList.add(ClassName.get(MultilineTextMonitor.BLOCK_CLASS, 'textarea'));
        textareaElem.readOnly = true;
        elem.appendChild(textareaElem);
        this.textareaElem_ = textareaElem;

        this.applyModel_();
    }

    _createClass(MultilineTextMonitor, [{
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(MultilineTextMonitor.prototype), 'applyModel_', this).call(this);

            var model = this.getProperty().getModel();
            this.textareaElem_.textContent = model.getValue();
        }
    }]);

    return MultilineTextMonitor;
})(Monitor);

MultilineTextMonitor.BLOCK_CLASS = 'mtm';

module.exports = MultilineTextMonitor;

},{"../../misc/class_name":26,"./monitor":60}],62:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberFormatter = require('../../formatter/number_formatter');
var TextMonitor = require('./text_monitor');

var NumberTextMonitor = (function (_TextMonitor) {
    _inherits(NumberTextMonitor, _TextMonitor);

    function NumberTextMonitor(model) {
        _classCallCheck(this, NumberTextMonitor);

        _get(Object.getPrototypeOf(NumberTextMonitor.prototype), 'constructor', this).call(this, model);

        this.formatter_ = new NumberFormatter();
    }

    return NumberTextMonitor;
})(TextMonitor);

module.exports = NumberTextMonitor;

},{"../../formatter/number_formatter":20,"./text_monitor":65}],63:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorFormatter = require('../../formatter/color_formatter');
var ClassName = require('../../misc/class_name');
var Monitor = require('./monitor');

var PaletteMonitor = (function (_Monitor) {
    _inherits(PaletteMonitor, _Monitor);

    function PaletteMonitor(property) {
        _classCallCheck(this, PaletteMonitor);

        _get(Object.getPrototypeOf(PaletteMonitor.prototype), 'constructor', this).call(this, property);

        this.getElement().classList.add(ClassName.get(PaletteMonitor.BLOCK_CLASS));

        var outerElem = document.createElement('div');
        outerElem.classList.add(ClassName.get(PaletteMonitor.BLOCK_CLASS, 'outer'));
        this.elem_.appendChild(outerElem);

        var innerElem = document.createElement('div');
        innerElem.classList.add(ClassName.get(PaletteMonitor.BLOCK_CLASS, 'inner'));
        outerElem.appendChild(innerElem);
        this.innerElem_ = innerElem;

        this.applyModel_();
    }

    _createClass(PaletteMonitor, [{
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(PaletteMonitor.prototype), 'applyModel_', this).call(this);

            if (this.innerElem_ !== undefined) {
                var color = new ColorFormatter().format(this.getProperty().getModel().getValue());
                this.innerElem_.style.backgroundColor = color;
            }
        }
    }]);

    return PaletteMonitor;
})(Monitor);

PaletteMonitor.BLOCK_CLASS = 'plm';

module.exports = PaletteMonitor;

},{"../../formatter/color_formatter":18,"../../misc/class_name":26,"./monitor":60}],64:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorFormatter = require('../../formatter/color_formatter');
var ClassName = require('../../misc/class_name');
var CompositeMonitor = require('./composite_monitor');
var PaletteMonitor = require('./palette_monitor');
var TextMonitor = require('./text_monitor');

var PaletteTextMonitor = (function (_CompositeMonitor) {
    _inherits(PaletteTextMonitor, _CompositeMonitor);

    function PaletteTextMonitor(property) {
        _classCallCheck(this, PaletteTextMonitor);

        _get(Object.getPrototypeOf(PaletteTextMonitor.prototype), 'constructor', this).call(this, property);

        this.getElement().classList.add(ClassName.get(PaletteTextMonitor.BLOCK_CLASS));

        var paletteMonitor = new PaletteMonitor(property);
        paletteMonitor.getElement().classList.add(ClassName.get(PaletteMonitor.BLOCK_CLASS, null, PaletteTextMonitor.MODIFIER_CLASS));
        this.addSubview(paletteMonitor);

        var textMonitor = new TextMonitor(property);
        textMonitor.setFormatter(new ColorFormatter());
        textMonitor.getElement().classList.add(ClassName.get(TextMonitor.BLOCK_CLASS, null, PaletteTextMonitor.MODIFIER_CLASS));
        this.addSubview(textMonitor);
    }

    return PaletteTextMonitor;
})(CompositeMonitor);

PaletteTextMonitor.BLOCK_CLASS = 'ptm';
PaletteTextMonitor.MODIFIER_CLASS = 'pt';

module.exports = PaletteTextMonitor;

},{"../../formatter/color_formatter":18,"../../misc/class_name":26,"./composite_monitor":57,"./palette_monitor":63,"./text_monitor":65}],65:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formatter = require('../../formatter/formatter');
var ClassName = require('../../misc/class_name');
var Monitor = require('./monitor');

var TextMonitor = (function (_Monitor) {
    _inherits(TextMonitor, _Monitor);

    function TextMonitor(property) {
        _classCallCheck(this, TextMonitor);

        _get(Object.getPrototypeOf(TextMonitor.prototype), 'constructor', this).call(this, property);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(TextMonitor.BLOCK_CLASS));

        var inputElem = document.createElement('input');
        inputElem.classList.add(ClassName.get(TextMonitor.BLOCK_CLASS, 'input'));
        inputElem.readOnly = true;
        inputElem.type = 'text';
        elem.appendChild(inputElem);
        this.inputElem_ = inputElem;

        this.formatter_ = new Formatter();

        this.applyModel_();
    }

    _createClass(TextMonitor, [{
        key: 'getFormatter',
        value: function getFormatter() {
            return this.formatter_;
        }
    }, {
        key: 'setFormatter',
        value: function setFormatter(formatter) {
            this.formatter_ = formatter;
            this.applyModel_();
        }
    }, {
        key: 'applyModel_',
        value: function applyModel_() {
            _get(Object.getPrototypeOf(TextMonitor.prototype), 'applyModel_', this).call(this);

            if (this.formatter_) {
                this.inputElem_.value = this.formatter_.format(this.getProperty().getModel().getValue());
            }
        }
    }]);

    return TextMonitor;
})(Monitor);

TextMonitor.BLOCK_CLASS = 'txm';

module.exports = TextMonitor;

},{"../../formatter/formatter":19,"../../misc/class_name":26,"./monitor":60}],66:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var View = require('./view');

var PropertyView = (function (_View) {
    _inherits(PropertyView, _View);

    function PropertyView(property) {
        _classCallCheck(this, PropertyView);

        _get(Object.getPrototypeOf(PropertyView.prototype), 'constructor', this).call(this);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(PropertyView.BLOCK_CLASS));

        var labelElem = document.createElement('div');
        labelElem.classList.add(ClassName.get(PropertyView.BLOCK_CLASS, 'label'));
        elem.appendChild(labelElem);
        this.labelElem_ = labelElem;

        var containerElem = document.createElement('div');
        containerElem.classList.add(ClassName.get(PropertyView.BLOCK_CLASS, 'container'));
        elem.appendChild(containerElem);
        this.containerElem_ = containerElem;

        this.prop_ = property;
        this.applyProperty_();
    }

    _createClass(PropertyView, [{
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
        key: 'applyProperty_',
        value: function applyProperty_() {
            this.labelElem_.textContent = this.prop_.getLabel();
        }
    }]);

    return PropertyView;
})(View);

PropertyView.BLOCK_CLASS = 'prv';

module.exports = PropertyView;

},{"../misc/class_name":26,"./view":70}],67:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var Style = require('../misc/style');
var RootView = require('./root_view');
var View = require('./view');

var RootFolderView = (function (_View) {
    _inherits(RootFolderView, _View);

    function RootFolderView() {
        _classCallCheck(this, RootFolderView);

        _get(Object.getPrototypeOf(RootFolderView.prototype), 'constructor', this).call(this);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(RootFolderView.BLOCK_CLASS));

        var buttonElem = document.createElement('button');
        buttonElem.classList.add(ClassName.get(RootFolderView.BLOCK_CLASS, 'button'));
        buttonElem.addEventListener('click', this.onButtonElementClick_.bind(this));
        elem.appendChild(buttonElem);

        var arrowElem = document.createElement('span');
        arrowElem.classList.add(ClassName.get(RootFolderView.BLOCK_CLASS, 'arrow'));
        buttonElem.appendChild(arrowElem);
        this.arrowElem_ = arrowElem;

        this.timer_ = null;

        this.setExpanded(true, false);
    }

    _createClass(RootFolderView, [{
        key: 'findRootView_',
        value: function findRootView_() {
            var view = this;
            while (view !== null) {
                if (view instanceof RootView) {
                    return view;
                }

                view = view.getParentView();
            }
            return null;
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
        key: 'applyExpanded_',
        value: function applyExpanded_(opt_animated) {
            var _this = this;

            var animated = opt_animated !== undefined ? opt_animated : true;

            Style.runTransition(this.arrowElem_, function (arrowElem) {
                var arrowClass = ClassName.get(RootFolderView.BLOCK_CLASS, 'arrow', 'expanded');
                if (_this.expanded_) {
                    arrowElem.classList.add(arrowClass);
                } else {
                    arrowElem.classList.remove(arrowClass);
                }
            }, animated);

            var rootView = this.findRootView_();
            if (rootView !== null) {
                (function () {
                    var mainViewElem = rootView.getMainView().getElement();
                    var contentHeight = _this.getContentHeightOfMainView_();
                    var mainViewHeight = _this.expanded_ ? contentHeight : 0;

                    Style.runTransition(mainViewElem, function () {
                        mainViewElem.style.height = contentHeight - mainViewHeight + 'px';
                    }, false);

                    Style.runTransition(mainViewElem, function () {
                        mainViewElem.style.height = mainViewHeight + 'px';
                    }, animated);

                    if (_this.timer_ !== null) {
                        clearTimeout(_this.timer_);
                    }

                    if (_this.expanded_) {
                        var duration = Style.getMaxTransitionDuration(mainViewElem, 'height');
                        _this.timer_ = setTimeout(function () {
                            _this.timer_ = null;

                            Style.runTransition(mainViewElem, function () {
                                mainViewElem.style.height = 'auto';
                            }, false);
                        }, animated ? duration : 0);
                    }
                })();
            }
        }
    }, {
        key: 'getContentHeightOfMainView_',
        value: function getContentHeightOfMainView_() {
            var rootView = this.findRootView_();
            if (rootView === null) {
                return 0;
            }

            var mainView = rootView.getMainView();
            return mainView.getSubviews().reduce(function (total, subview) {
                return total + subview.getElement().offsetHeight;
            }, 0);
        }
    }, {
        key: 'onButtonElementClick_',
        value: function onButtonElementClick_() {
            this.setExpanded(!this.isExpanded());
        }
    }]);

    return RootFolderView;
})(View);

RootFolderView.BLOCK_CLASS = 'rfv';

module.exports = RootFolderView;

},{"../misc/class_name":26,"../misc/style":32,"./root_view":68,"./view":70}],68:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var View = require('./view');

var RootView = (function (_View) {
    _inherits(RootView, _View);

    function RootView() {
        _classCallCheck(this, RootView);

        _get(Object.getPrototypeOf(RootView.prototype), 'constructor', this).call(this);

        this.getElement().classList.add(ClassName.get(RootView.BLOCK_CLASS));

        this.addSubview(new View());
        this.addSubview(new View());

        this.getMainView().getElement().classList.add(ClassName.get(RootView.BLOCK_CLASS, 'main'));
        this.getFooterView().getElement().classList.add(ClassName.get(RootView.BLOCK_CLASS, 'footer'));
    }

    _createClass(RootView, [{
        key: 'getMainView',
        value: function getMainView() {
            return this.getSubviews()[0];
        }
    }, {
        key: 'getFooterView',
        value: function getFooterView() {
            return this.getSubviews()[1];
        }
    }]);

    return RootView;
})(View);

RootView.BLOCK_CLASS = 'rtv';

module.exports = RootView;

},{"../misc/class_name":26,"./view":70}],69:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = require('../misc/class_name');
var View = require('./view');

var SeparatorView = (function (_View) {
    _inherits(SeparatorView, _View);

    function SeparatorView() {
        _classCallCheck(this, SeparatorView);

        _get(Object.getPrototypeOf(SeparatorView.prototype), 'constructor', this).call(this);

        var elem = this.getElement();
        elem.classList.add(ClassName.get(SeparatorView.BLOCK_CLASS));
    }

    return SeparatorView;
})(View);

SeparatorView.BLOCK_CLASS = 'spv';

module.exports = SeparatorView;

},{"../misc/class_name":26,"./view":70}],70:[function(require,module,exports){
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

		this.elem_ = document.createElement('div');
	}

	/**
  * Returns an element.
  * @return {HTMLElement} An element
  */

	_createClass(View, [{
		key: 'getElement',
		value: function getElement() {
			return this.elem_;
		}
	}, {
		key: 'getContainerElement_',
		value: function getContainerElement_() {
			return this.elem_;
		}

		/**
   * Returns a parent view.
   * @return {?View} A parent view
   */
	}, {
		key: 'getParentView',
		value: function getParentView() {
			return this.parentView_;
		}

		/**
   * Returns all subviews.
   * @return {View[]} Subviews
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
   * Adds a subview.
   * @param {View} subview A subview to add
   * @return {boolean} True if the subview is added successfully
   */
	}, {
		key: 'addSubview',
		value: function addSubview(subview) {
			if (this.subviews_.indexOf(subview) >= 0) {
				return false;
			}

			this.subviews_.push(subview);
			subview.parentView_ = this;
			this.getContainerElement_().appendChild(subview.getElement());

			this.emitter_.notifyObservers(View.EVENT_ADD, [subview]);

			return true;
		}

		/**
   * Removes a specified subview.
   * @param {View} subview A subview to rmeove
   * @return {boolean} True if the subview is removed successfully
   */
	}, {
		key: 'removeSubview',
		value: function removeSubview(subview) {
			var index = this.subviews_.indexOf(subview);
			if (index < 0) {
				return false;
			}

			var elem = subview.getElement();
			if (elem !== null && elem.parentNode !== null) {
				elem.parentNode.removeChild(elem);
			}
			this.subviews_.splice(index, 1);

			subview.parentView_ = null;

			this.emitter_.notifyObservers(View.EVENT_REMOVE, [subview]);

			return true;
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

View.EVENT_ADD = 'add';
View.EVENT_REMOVE = 'remove';

module.exports = View;

},{"../misc/event_emitter":29}]},{},[1]);
