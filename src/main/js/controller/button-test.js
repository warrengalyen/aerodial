// @flow

import {describe, it} from 'mocha';
import {assert} from 'chai';

import TestUtil from '../misc/test-util';
import ButtonController from './button';

describe(ButtonController.name, () => {
	it('should emit click event', (done) => {
		const doc = TestUtil.createWindow().document;
		const c = new ButtonController(doc, {
			title: 'Push',
		});

		c.button.emitter.on('click', () => {
			assert(true);
			done();
		});

		c.view.buttonElement.click();
	});
});