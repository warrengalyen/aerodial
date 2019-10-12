// @flow

import {describe as context, describe, it} from 'mocha';
import {assert} from 'chai';

import ConstraintUtil from '../constraint/util';
import StepConstraint from '../constraint/step';
import ListInputController from '../controller/input/list';
import SliderTextInputController from '../controller/input/slider-text';
import TextInputController from '../controller/input/text';
import RootController from '../controller/root';
import FlowUtil from '../misc/flow-util';
import TestUtil from '../misc/test-util';
import InputValue from '../model/input-value';
import RootApi from './root';

import type {Constraint} from '../constraint/constraint';

function createApi(): RootApi {
	const c = new RootController(
		TestUtil.createWindow().document,
		{},
	);
	return new RootApi(c);
}

describe(RootApi.name, () => {
	[{
		expectedClass: TextInputController,
		params: {},
		value: 3.14,
	}, {
		expectedClass: SliderTextInputController,
		params: {
			min: 0,
		},
		value: 3.14,
	}, {
		expectedClass: SliderTextInputController,
		params: {
			max: 100,
		},
		value: 3.14,
	}, {
		expectedClass: ListInputController,
		params: {
			options: {
				foo: 0,
				bar: 1,
			},
		},
		value: 3.14,
	}].forEach((testCase) => {
		context(`when params = ${JSON.stringify(testCase.params)}`, () => {
			it(`should return class ${testCase.expectedClass.name}`, () => {
				const api = createApi();
				const obj = {foo: testCase.value};
				const bapi = api.addInput(obj, 'foo', testCase.params);
				assert.instanceOf(
					bapi.controller.controller,
					testCase.expectedClass,
				);
			});
		});
	});

	it('should return appropriate step constraint', () => {
		const api = createApi();
		const obj = {foo: 1};
		const bapi = api.addInput(obj, 'foo', {
			step: 1,
		});

		const iv = bapi.controller.controller.value;
		assert.instanceOf(
			iv,
			InputValue,
		);

		if (!(iv instanceof InputValue)) {
			throw new Error('Input value is empty');
		}
		const c: ?Constraint<mixed> = FlowUtil.forceCast(iv.constraint);
		if (!c) {
			throw new Error('Constraint is empty');
		}

		assert.isNotNull(
			ConstraintUtil.findConstraint(c, StepConstraint),
		);
	});
});