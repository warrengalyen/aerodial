const Aerodial = require('../src/main/js/aerodial');

describe('Aerodial', () => {
	it('should listen property change event', () => {
		const INITIAL_VALUE = 'initial';
		const CHANGED_VALUE = 'changed';
		const params = {
			prop: INITIAL_VALUE
		};
		const aero = new Aerodial();

		const prop = aero.addControl(params, 'prop');
		const p = new Promise((resolve) => {
			prop.on('change', (value) => {
				assert.strictEqual(
					params.prop, CHANGED_VALUE,
					'Target value should be changed before firing property change event'
				);
				resolve(value);
			});
		}).then((value) => {
			assert.strictEqual(value, CHANGED_VALUE);
		});

		const inputElem = aero.getElement().querySelector('input[type=text]');
		inputElem.value = CHANGED_VALUE;
		const e = new Event('change');
		inputElem.dispatchEvent(e);

		return p;
	});

	it('should listen global change event', () => {
		const INITIAL_VALUE = 'initial';
		const CHANGED_VALUE = 'changed';
		const params = {
			prop: INITIAL_VALUE
		};
		const aero = new Aerodial();

		aero.addControl(params, 'prop');
		const p = new Promise((resolve) => {
			aero.on('change', (value) => {
				assert.strictEqual(
					params.prop, CHANGED_VALUE,
					'Target value should be changed before firing global change event'
				);
				resolve(value);
			});
		}).then((value) => {
			assert.strictEqual(value, CHANGED_VALUE);
		});

		const inputElem = aero.getElement().querySelector('input[type=text]');
		inputElem.value = CHANGED_VALUE;
		const e = new Event('change');
		inputElem.dispatchEvent(e);

		return p;
	});

	it('should listen global change event for property in folder', () => {
		const INITIAL_VALUE = 'initial';
		const CHANGED_VALUE = 'changed';
		const params = {
			prop: INITIAL_VALUE
		};
		const aero = new Aerodial();

		const f = aero.addFolder('folder');
		f.addControl(params, 'prop');
		const p = new Promise((resolve) => {
			aero.on('change', (value) => {
				assert.strictEqual(
					params.prop, CHANGED_VALUE,
					'Target value should be changed before firing global change event'
				);
				resolve(value);
			});
		}).then((value) => {
			assert.strictEqual(value, CHANGED_VALUE);
		});

		const inputElem = aero.getElement().querySelector('input[type=text]');
		inputElem.value = CHANGED_VALUE;
		const e = new Event('change');
		inputElem.dispatchEvent(e);

		return p;
	});
});