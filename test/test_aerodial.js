const Aerodial = require('../src/main/js/aerodial');

describe('Aerodial', () => {
	it('should handle change event and get correct value', () => {
		const INITIAL_VALUE = 'initial';
		const CHANGED_VALUE = 'changed';
		const params = {
			prop: INITIAL_VALUE
		};
		const aero = new Aerodial();

		const p1 = new Promise((resolve) => {
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

		const prop = aero.add(params, 'prop');
		const p2 = new Promise((resolve) => {
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

		return Promise.all([p1, p2]);
	});
});