// @flow

import ClassName from '../../misc/class-name';
import InputValue from '../../model/input-value';
import View from '../view';
import SliderInputView from './slider';
import TextInputView from './text';

import type {InputView} from './input';

type Config = {
	sliderInputView: SliderInputView,
	textInputView: TextInputView<number>,
};

const className = ClassName('sldtxt', 'input');

export default class SliderTextInputView extends View implements InputView<number> {
	sliderInputView_: SliderInputView;
	textInputView_: TextInputView<number>;

	constructor(document: Document, config: Config) {
		super(document);

		this.element.classList.add(className());

		const sliderElem = document.createElement('div');
		sliderElem.classList.add(className('s'));
		this.sliderInputView_ = config.sliderInputView;
		sliderElem.appendChild(this.sliderInputView_.element);
		this.element.appendChild(sliderElem);

		const textElem = document.createElement('div');
		textElem.classList.add(className('t'));
		this.textInputView_ = config.textInputView;
		textElem.appendChild(this.textInputView_.element);
		this.element.appendChild(textElem);
	}

	get value(): InputValue<number> {
		return this.sliderInputView_.value;
	}

	update(): void {
		this.sliderInputView_.update();
		this.textInputView_.update();
	}
}