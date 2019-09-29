'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global PhysicsSketch: false */

(function () {
	var sketch = null;

	var aero = new Aerodial({
		foldable: false,
		container: document.getElementsByClassName('hero_aeroContainer').item(0)
	});
	aero.addSlider({ value: 0 }, 'value', {
		min: 0.0,
		max: 1.0
	}).on('change', function (value) {
		if (sketch === null) {
			sketch = new PhysicsSketch(document.getElementById('heroSketch'));
		}
		sketch.updateLevel(value);
	});

	var Menu = function () {
		function Menu(buttonElem, bodyElem) {
			_classCallCheck(this, Menu);

			this.buttonElem_ = buttonElem;
			this.bodyElem_ = bodyElem;

			this.expanded_ = false;

			this.buttonElem_.addEventListener('click', this.onButtonClick_.bind(this));

			window.addEventListener('resize', this.onWindowResize_.bind(this));
		}

		_createClass(Menu, [{
			key: 'isExpanded',
			value: function isExpanded() {
				return this.expanded_;
			}
		}, {
			key: 'setExpanded',
			value: function setExpanded(expanded) {
				var changed = expanded !== this.expanded_;
				if (!changed) {
					return;
				}

				this.expanded_ = expanded;
				this.applyExpanded_();
			}
		}, {
			key: 'applyExpanded_',
			value: function applyExpanded_() {
				var expanded = this.expanded_;
				if (expanded) {
					this.bodyElem_.classList.add('menu_body-expanded');
					this.buttonElem_.classList.add('menu_button-expanded');
				} else {
					this.bodyElem_.classList.remove('menu_body-expanded');
					this.buttonElem_.classList.remove('menu_button-expanded');
				}
			}
		}, {
			key: 'expandIfNeeded',
			value: function expandIfNeeded() {
				if (window.outerWidth > Menu.NARROW_WIDTH) {
					this.setExpanded(true);
				}
			}
		}, {
			key: 'onButtonClick_',
			value: function onButtonClick_() {
				this.setExpanded(!this.expanded_);
			}
		}, {
			key: 'onWindowResize_',
			value: function onWindowResize_() {
				this.expandIfNeeded();
			}
		}]);

		return Menu;
	}();

	Menu.NARROW_WIDTH = 620 + 200 * 2;

	var menu = new Menu(document.getElementsByClassName('menu_button').item(0), document.getElementsByClassName('menu_body').item(0));
	setTimeout(function () {
		menu.expandIfNeeded();
	}, 500);
})();