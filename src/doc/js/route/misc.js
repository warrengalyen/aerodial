// @flow

import * as Util from '../util';

declare var Aerodial: any;

export default {
	pathname: /^(\/aerodial)?\/misc.html$/,
	init() {
		const IMEX_PARAMS = {
			color: '#ff8000',
			name: 'export',
			size: 10,
		};

		const markerToFnMap = {
			misc(container) {
				const PARAMS = {value: 0};
				const aero = new Aerodial({
					container,
					title: 'Global title',
				});
				aero.addInput(PARAMS, 'value', {
					label: 'custom label',
				});
				const f = aero.addFolder({
					title: 'Folder',
				});
				f.addButton({
					title: 'Button1',
				});
				f.addButton({
					title: 'Button2',
				});
				f.addSeparator();
				f.addButton({
					title: 'Button3',
				});
			},
			folder(container) {
				const PARAMS = {
					acceleration: 0,
					randomness: 0,
					speed: 0,
				};
				const aero = new Aerodial({
					container,
				});
				const f1 = aero.addFolder({
					title: 'Basic',
				});
				f1.addInput(PARAMS, 'speed');
				const f2 = aero.addFolder({
					expanded: false,
					title: 'Advanced',
				});
				f2.addInput(PARAMS, 'acceleration');
				f2.addInput(PARAMS, 'randomness');
			},
			button(container) {
				const PARAMS = {count: 0};
				const aero = new Aerodial({
					container,
				});
				aero.addButton({
					title: 'Increment',
				}).on('click', () => {
					PARAMS.count += 1;
				});
				aero.addSeparator();
				aero.addMonitor(PARAMS, 'count');
			},
			separator(container) {
				const aero = new Aerodial({
					container,
				});
				aero.addButton({
					title: 'Previous',
				});
				aero.addButton({
					title: 'Next',
				});
				aero.addSeparator();
				aero.addButton({
					title: 'Reset',
				});
			},
			event(container) {
				const PARAMS = {
					log: '',
					value: 0,
				};
				const aero = new Aerodial({
					container,
				});
				let m = null;
				aero.addInput(PARAMS, 'value', {
					max: 100,
					min: 0,
				}).on('change', (value) => {
					PARAMS.log = value.toFixed(2);
					if (m) {
						m.refresh();
					}
				});
				aero.addSeparator();
				m = aero.addMonitor(PARAMS, 'log', {
					count: 10,
					interval: 0,
					label: '(log)',
				});
			},
			globalEvent(container) {
				const PARAMS = {
					log: '',
					number: 0,
					string: 'text',
				};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'number', {
					max: 100,
					min: 0,
				});
				aero.addInput(PARAMS, 'string');
				aero.addSeparator();
				const m = aero.addMonitor(PARAMS, 'log', {
					count: 10,
					interval: 0,
					label: '(log)',
				});
				aero.on('change', (value) => {
					const v = (typeof value === 'number') ?
						value.toFixed(2) :
						value;
					PARAMS.log = `changed: ${v}`;
					m.refresh();
				});
			},
			export(container) {
				const aero = new Aerodial({
					container,
				});
				aero.addInput(IMEX_PARAMS, 'name');
				aero.addInput(IMEX_PARAMS, 'size', {
					max: 100,
					min: 0,
				});
				aero.addInput(IMEX_PARAMS, 'color');

				const updatePreset = () => {
					const preset = aero.exportPreset();

					const elems = Array.prototype.slice.call(
						document.querySelectorAll('*[data-imex]'),
					);
					elems.forEach((elem) => {
						if (elem) {
							elem.textContent = JSON.stringify(preset, null, 2);
						}
					});
				};

				aero.on('change', updatePreset);
				updatePreset();
			},
			import(container) {
				const PARAMS = {
					color: '#0080ff',
					name: 'import',
					size: 50,
				};
				const aero = new Aerodial({
					container,
				});
				aero.addButton({
					title: 'Import',
				}).on('click', () => {
					aero.importPreset(IMEX_PARAMS);
				});
				aero.addSeparator();
				aero.addInput(PARAMS, 'name');
				aero.addInput(PARAMS, 'size');
				aero.addInput(PARAMS, 'color');
			},
			presetKey(container) {
				const PARAMS1 = {speed: 1 / 3};
				const PARAMS2 = {speed: 2 / 3};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS1, 'speed', {
					max: 1,
					min: 0,
				});
				aero.addInput(PARAMS2, 'speed', {
					max: 1,
					min: 0,
					presetKey: 'speed2',
				});

				const updatePreset = () => {
					const elem = document.querySelector('*[data-presetKey]');
					if (elem) {
						const preset = aero.exportPreset();
						elem.textContent = JSON.stringify(preset, null, 2);
					}
				};

				aero.on('change', updatePreset);
				updatePreset();
			},
			rootTitle(container) {
				const PARAMS = {
					bounce: 0.5,
					gravity: 0.01,
					speed: 0.1,
				};
				const aero = new Aerodial({
					container,
					title: 'Parameters',
				});
				aero.addInput(PARAMS, 'speed', {
					max: 1,
					min: 0,
				});
				const f = aero.addFolder({
					title: 'Advanced',
				});
				f.addInput(PARAMS, 'gravity', {
					max: 1,
					min: 0,
				});
				f.addInput(PARAMS, 'bounce', {
					max: 1,
					min: 0,
				});
			},
			label(container) {
				const PARAMS = {initSpd: 0};
				const aero = new Aerodial({
					container,
				});
				aero.addInput(PARAMS, 'initSpd', {
					label: 'Initial speed',
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