// @flow

import AeroError from '../../misc/aero-error';
import Target from '../../model/target';
import * as NumberMonitorBindingControllerCreators from './number-monitor';
import * as StringMonitorBindingControllerCreators from './string-monitor';

type Params = {
	count?: number,
	interval?: number,
	label?: string,
	max?: number,
	min?: number,
	multiline?: boolean,
	type?: string,
};

export function create(document: Document, target: Target, params: Params) {
	const initialValue = target.read();

	if (typeof initialValue === 'number') {
		if (params.type === 'graph') {
			return NumberMonitorBindingControllerCreators.createGraphMonitor(
				document,
				target,
				params,
			);
		}
		return NumberMonitorBindingControllerCreators.createTextMonitor(
			document,
			target,
			params,
		);
	}
	if (typeof initialValue === 'string') {
		return StringMonitorBindingControllerCreators.createTextMonitor(
			document,
			target,
			params,
		);
	}

	throw new AeroError({
		context: {
			key: target.key,
		},
		type: 'nomatchingcontroller',
	});
}