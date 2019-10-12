// @flow

import type {Parser} from './parser';

const NumberParser: Parser<number> = (text: string): ?number => {
	const num = parseFloat(text);
	if (isNaN(num)) {
		return null;
	}

	return num;
};

export default NumberParser;