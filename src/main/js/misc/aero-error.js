// @flow

type ErrorType = 'invalidparams' |
	'nomatchingcontroller';

type Config = {
	context: {name: string},
	type: 'invalidparams',
} | {
	context: {key: string},
	type: 'nomatchingcontroller',
};

function createMessage(config: Config): string {
	if (config.type === 'invalidparams') {
		return `Invalid parameters for ${config.context.name}`;
	}
	if (config.type === 'nomatchingcontroller') {
		return `No matching controller for ${config.context.key}`;
	}
	return 'Unexpected error';
}

export default class AeroError {
	message: string;
	name: string;
	stack: string;
	type: ErrorType;

	constructor(config: Config) {
		this.message = createMessage(config);

		this.name = this.constructor.name;
		this.stack = (new Error(this.message)).stack;
	}
}
(AeroError: any).prototype = Object.create(Error.prototype);
(AeroError.prototype: any).constructor = AeroError;