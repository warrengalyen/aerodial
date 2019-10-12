// @flow

import * as Util from '../util';

declare var Aerodial: any;

export default {
	pathname: /^(\/aerodial)?\/monitor.html$/,
	init() {
		const SHARED_PARAMS = {
			time: '',
			wave: 0,
		};

		const updateTime = () => {
			const matches = String(new Date()).match(/\d{2}:\d{2}:\d{2}/);
			SHARED_PARAMS.time = matches && matches[0] || '';
		};
		setInterval(updateTime, 1000);
		updateTime();

		let wavep = 0;
		setInterval(() => {
			SHARED_PARAMS.wave = 3 * 4 / Math.PI * (
				Math.sin(wavep * 1 * Math.PI) +
				Math.sin(wavep * 3 * Math.PI) / 3 +
				Math.sin(wavep * 5 * Math.PI) / 5
			) * 0.25;
			wavep += 0.02;
		}, 50);

		const markerToFnMap = {
			monitor(container) {
				const aero = new Aerodial({
					container,
				});
				const nf = aero.addFolder({
					title: 'Number',
				});
				nf.addMonitor(SHARED_PARAMS, 'wave', {
					label: 'text',
				});
				nf.addMonitor(SHARED_PARAMS, 'wave', {
					count: 10,
					label: 'multiline',
				});
				nf.addMonitor(SHARED_PARAMS, 'wave', {
					label: 'graph',
					max: +1,
					min: -1,
					type: 'graph',
				});
			},
			multiline(container) {
				const PARAMS = {params: ''};
				const aero = new Aerodial({
					container,
				});
				aero.addMonitor(PARAMS, 'params', {
					multiline: true,
				}).on('update', () => {
					PARAMS.params = JSON.stringify(SHARED_PARAMS, null, 2);
				});
			},
			count(container) {
				const aero = new Aerodial({
					container,
				});
				aero.addMonitor(SHARED_PARAMS, 'wave', {
					count: 10,
				});
			},
			interval(container) {
				const aero = new Aerodial({
					container,
				});
				aero.addMonitor(SHARED_PARAMS, 'time', {
					interval: 1000,
				});
			},
			graph(container) {
				const aero = new Aerodial({
					container,
				});
				aero.addMonitor(SHARED_PARAMS, 'wave', {
					max: +1,
					min: -1,
					type: 'graph',
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