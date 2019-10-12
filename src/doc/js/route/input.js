// @flow

import * as Util from '../util';

declare var Aerodial: any;

export default {
	pathname: /^(\/aerodial)?\/input.html$/,
	init() {
		const markerToFnMap = {
			input(container) {
				const PARAMS = {
					b: true,
					c: '#ff8800',
					n: 50,
					s: 'string',
				};
				const aero = new Aerodial({
					container,
				});
				const nf = aero.addFolder({
					title: 'Number',
				});
				nf.addInput(PARAMS, 'n', {
					label: 'text',
				});
				nf.addInput(PARAMS, 'n', {
					label: 'slider',
					max: 100,
					min: 0,
				});
				nf.addInput(PARAMS, 'n', {
					label: 'list',
					options: {
						low: 0,
						medium: 50,
						high: 100,
					},
				});
				const sf = aero.addFolder({
					title: 'String',
				});
				sf.addInput(PARAMS, 's', {
					label: 'text',
				});
				sf.addInput(PARAMS, 's', {
					label: 'list',
					options: {
						dark: 'Dark',
						light: 'Light',
					},
				});
				const bf = aero.addFolder({
					title: 'Boolean',
				});
				bf.addInput(PARAMS, 'b', {
					label: 'checkbox',
				});
				const cf = aero.addFolder({
					title: 'Color',
				});
				cf.addInput(PARAMS, 'c', {
					label: 'text',
				});
			},
			numberText(container) {
				const PARAMS = {value: 50};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'text',
				});
			},
			slider(container) {
				const PARAMS = {value: 50};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'slider',
					max: 100,
					min: 0,
				});
			},
			step(container) {
				const PARAMS = {
					speed: 0.5,
					count: 10,
				};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'speed', {
					step: 0.1,
				});
				aero.addInput(PARAMS, 'count', {
					label: 'count',
					max: 100,
					min: 0,
					step: 10,
				});
			},
			numberList(container) {
				const PARAMS = {value: 50};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'quality',
					options: {
						low: 0,
						medium: 50,
						high: 100,
					},
				});
				aero.addSeparator();
				aero.addMonitor(PARAMS, 'value', {
					label: '(actual)',
				});
			},
			stringText(container) {
				const PARAMS = {value: 'hello, world'};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'message',
				});
			},
			stringList(container) {
				const PARAMS = {value: ''};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'theme',
					options: {
						none: '',
						dark: 'path/to/dark.json',
						light: 'path/to/Light.json',
					},
				});
				aero.addSeparator();
				aero.addMonitor(PARAMS, 'value', {
					label: '(actual)',
				});
			},
			checkbox(container) {
				const PARAMS = {value: true};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'hidden',
				});
			},
			color(container) {
				const PARAMS = {value: '#ff8800'};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'value', {
					label: 'color',
				});
			},
		};
		Object.keys(markerToFnMap).forEach((marker) => {
			const initFn = markerToFnMap[marker];
			const container = Util.selectContainer(marker);
			initFn(container);
		});
	},
};