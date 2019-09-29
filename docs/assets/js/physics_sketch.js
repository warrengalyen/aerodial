'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global PIXI: false */

var MASS = 1.0;
var DT = 0.3;
var SPRING_K = 1.0;
var MASS_COUNT = 20;
var AIR_REGISTANCE = 0.95;
var MAX_VEL = 100;

var PVector = function () {
	function PVector() {
		_classCallCheck(this, PVector);
	}

	_createClass(PVector, null, [{
		key: 'dist',
		value: function dist(p1, p2) {
			var dx = p2.x - p1.x;
			var dy = p2.y - p1.y;
			return Math.sqrt(dx * dx + dy * dy);
		}
	}, {
		key: 'mag',
		value: function mag(p) {
			return this.dist(this.ZERO, p);
		}
	}, {
		key: 'normalize',
		value: function normalize(p) {
			var d = this.mag(p);
			return d !== 0 ? new PIXI.Point(p.x / d, p.y / d) : p.clone();
		}
	}]);

	return PVector;
}();

PVector.ZERO = new PIXI.Point();

var Mass = function () {
	function Mass() {
		_classCallCheck(this, Mass);

		this.pos = new PIXI.Point();
		this.vel = new PIXI.Point();
		this.acc = new PIXI.Point();
	}

	_createClass(Mass, [{
		key: 'reset',
		value: function reset() {
			this.acc.x = 0;
			this.acc.y = 0;
		}
	}, {
		key: 'update',
		value: function update() {
			// v = v0 + a * t
			this.vel.x += this.acc.x * DT;
			this.vel.y += this.acc.y * DT;

			this.vel.x *= AIR_REGISTANCE;
			this.vel.y *= AIR_REGISTANCE;
			if (PVector.mag(this.vel) > MAX_VEL) {
				this.vel = PVector.normalize(this.vel);
				this.vel.x *= MAX_VEL;
				this.vel.y *= MAX_VEL;
			}

			// x = x0 + v * t
			this.pos.x += this.vel.x * DT;
			this.pos.y += this.vel.y * DT;
		}
	}]);

	return Mass;
}();

var Spring = function () {
	function Spring(m1, m2) {
		_classCallCheck(this, Spring);

		this.m1 = m1;
		this.m2 = m2;

		this.updateNaturalLength();
	}

	_createClass(Spring, [{
		key: 'updateNaturalLength',
		value: function updateNaturalLength() {
			this.nLen_ = PVector.dist(this.m1.pos, this.m2.pos);
		}
	}, {
		key: 'update',
		value: function update() {
			// f = k * dl
			var len = PVector.dist(this.m1.pos, this.m2.pos);
			var dl = len - this.nLen_;
			var f = SPRING_K * dl;

			var nv = PVector.normalize(new PIXI.Point(this.m2.pos.x - this.m1.pos.x, this.m2.pos.y - this.m1.pos.y));
			var nx = nv.x;
			var ny = nv.y;

			// a = f / m
			this.m1.acc.x += +nx * f / MASS;
			this.m1.acc.y += +ny * f / MASS;
			this.m2.acc.x += -nx * f / MASS;
			this.m2.acc.y += -ny * f / MASS;
		}
	}]);

	return Spring;
}();

var Engine = function () {
	function Engine() {
		_classCallCheck(this, Engine);

		this.masses = [];
		this.springs = [];
	}

	_createClass(Engine, [{
		key: 'update',
		value: function update() {
			this.masses.forEach(function (m) {
				m.reset();
			});

			this.springs.forEach(function (s) {
				s.update();
			});
			this.masses.forEach(function (m) {
				m.update();
			});
		}
	}]);

	return Engine;
}();

var PhysicsSketch = function () {
	function PhysicsSketch(canvasElement) {
		_classCallCheck(this, PhysicsSketch);

		this.renderer_ = PIXI.autoDetectRenderer(0, 0, {
			antialias: true,
			transparent: true,
			view: canvasElement
		});

		this.stage_ = new PIXI.Container();

		var bg = new PIXI.Graphics();
		this.stage_.addChild(bg);
		this.bg_ = bg;

		var g = new PIXI.Graphics();
		this.stage_.addChild(g);
		this.g_ = g;

		this.level_ = 0;

		window.addEventListener('resize', this.onWindowResize_.bind(this));
		this.fitToContainer_();

		var engine = new Engine();
		var MARGIN = PhysicsSketch.MARGIN;
		for (var i = 0; i < MASS_COUNT; i++) {
			var t = i / (MASS_COUNT - 1);
			var mass = new Mass();
			mass.pos.x = 0;
			mass.pos.y = canvasElement.height * (-MARGIN + (1.0 + 2 * MARGIN) * t);
			engine.masses.push(mass);
		}
		for (var j = 0; j < MASS_COUNT; j++) {
			for (var _i = j + 1; _i < MASS_COUNT; _i++) {
				engine.springs.push(new Spring(engine.masses[_i], engine.masses[j]));
			}
		}
		this.engine_ = engine;

		this.updateHandler_ = this.onUpdate_.bind(this);
		this.onUpdate_();
	}

	_createClass(PhysicsSketch, [{
		key: 'updateLevel',
		value: function updateLevel(level) {
			this.level_ = level;
		}
	}, {
		key: 'onUpdate_',
		value: function onUpdate_() {
			requestAnimationFrame(this.updateHandler_);

			var engine = this.engine_;
			engine.update();

			var w = this.renderer_.view.width;
			var h = this.renderer_.view.height;
			var targetX = w * this.level_;
			var masses = engine.masses;
			var MARGIN = PhysicsSketch.MARGIN;
			masses[0].pos.x += (targetX - masses[0].pos.x) * 0.3;
			masses[0].pos.y = h * -MARGIN;
			masses[masses.length - 1].pos.y = h * (1.0 + MARGIN);

			masses.forEach(function (m) {
				m.pos.x = Math.min(Math.max(m.pos.x, 0), w);
			});

			var g = this.g_;
			g.clear();
			g.beginFill(PhysicsSketch.FG_COLOR);
			g.moveTo(0, masses[0].pos.y);
			masses.forEach(function (m) {
				g.lineTo(m.pos.x, m.pos.y);
			});
			g.lineTo(0, masses[masses.length - 1].pos.y);
			g.endFill();

			this.renderer_.render(this.stage_);
		}
	}, {
		key: 'fitToContainer_',
		value: function fitToContainer_() {
			var containerElem = this.renderer_.view.parentNode;
			var bound = containerElem.getBoundingClientRect();
			var w = bound.width;
			var h = bound.height;
			this.renderer_.resize(w, h);

			this.bg_.clear();
			this.bg_.beginFill(PhysicsSketch.BG_COLOR);
			this.bg_.drawRect(0, 0, w, h);
			this.bg_.endFill();

			var canvasElem = this.renderer_.view;
			canvasElem.width = w;
			canvasElem.height = h;
		}
	}, {
		key: 'onWindowResize_',
		value: function onWindowResize_() {
			this.fitToContainer_();
		}
	}]);

	return PhysicsSketch;
}();

PhysicsSketch.BG_COLOR = 0xdddde4;
PhysicsSketch.FG_COLOR = 0xc3c3d0;
PhysicsSketch.MARGIN = 0.3;