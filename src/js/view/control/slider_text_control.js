const ClassName     = require('../../misc/class_name');
const Control       = require('./control');
const SliderControl = require('./slider_control');
const TextControl   = require('./text_control');

class SliderTextControl extends Control {
    constructor(model) {
        super(model);

        // TODO: When createElement_ is called from the View constructor, model has not been set yet.
        // Is createElement_ necessary in the first place?
        const sliderControl = new SliderControl(this.getModel());
        sliderControl.addClass(ClassName.get(SliderControl.BLOCK_CLASS, null, 'sliderText'));
        sliderControl.getEmitter().on(
            Control.EVENT_CHANGE,
            this.onSubcontrolChange_,
            this
        );
        this.addSubview(sliderControl);
        this.sliderControl_ = sliderControl;

        const textControl = new TextControl(this.getModel());
        textControl.addClass(ClassName.get(TextControl.BLOCK_CLASS, null, 'sliderText'));
        textControl.getEmitter().on(
            Control.EVENT_CHANGE,
            this.onSubcontrolChange_,
            this
        );
        this.addSubview(textControl);
        this.textControl_ = textControl;
    }

    createElement_() {
        super.createElement_();

        this.addClass(ClassName.get(SliderTextControl.BLOCK_CLASS));
    }

    getSliderControl() {
        return this.sliderControl_;
    }

    getTextControl() {
        return this.textControl_;
    }

    applyDisabled_() {
        super.applyDisabled_();

        const disabled = this.isDisabled();
        this.sliderControl_.setDisabled(disabled);
        this.textControl_.setDisabled(disabled);
    }

    onSubcontrolChange_(sender, value) {
        this.getEmitter().notifyObservers(
            Control.EVENT_CHANGE,
            [value]
        );
    }
}

SliderTextControl.BLOCK_CLASS = 'SliderTextControl';

module.exports = SliderTextControl;