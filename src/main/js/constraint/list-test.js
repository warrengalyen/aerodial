// @flow

import {describe, it} from 'mocha';
import {assert} from 'chai';

import ListConstraint from './list';

describe(ListConstraint.name, () => {
	it('should get list options', () => {
		const options = [
			{text: 'foo', value: 1.41},
			{text: 'bar', value: 2.72},
			{text: 'baz', value: 3.14},
		];
		const c = new ListConstraint({
			options: options,
		});
		assert.deepEqual(options, c.options);
	});

	it('should constrain value with list options', () => {
		const c = new ListConstraint({
			options: [
				{text: 'foo', value: 1.41},
				{text: 'bar', value: 2.72},
				{text: 'baz', value: 3.14},
			],
		});
		assert.strictEqual(c.constrain(2.72), 2.72);
	});

	it('should not constrain value without list options', () => {
		const c = new ListConstraint({
			options: [],
		});
		assert.strictEqual(c.constrain(3.14), 3.14);
	});

	it('should constrain an invalid value wit list options', () => {
		const c = new ListConstraint({
			options: [
				{text: 'foo', value: 1.41},
				{text: 'bar', value: 2.72},
				{text: 'baz', value: 3.14},
			],
		});
		assert.strictEqual(c.constrain(9.81), 1.41);
	});
});