const Control = require('./control');
const SliderControl = require('./slider_control');
const TextControl = require('./text_control');

class SliderTextControl extends Control {
    constructor(model) {
        super(model);

        // TODO: When createElement_ is called from the View constructor, model has not been set yet.
        // Is createElement_ necessary in the first place?
        const sliderControl = new SliderControl(this.getModel());
        sliderControl.addClass('sliderControl-sliderText');
        sliderControl.getEmitter().on(
            Control.EVENT_CHANGE,
            this.onSubcontrolChange_,
            this
        );
        this.addSubview(sliderControl);
        this.sliderControl_ = sliderControl;

        const textControl = new TextControl(this.getModel());
        textControl.addClass('textControl-sliderText');
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

        this.addClass('SliderTextControl');
    }

    getSliderControl() {
        return this.sliderControl_;
    }

    getTextControl() {
        return this.textControl_;
    }

    onSubcontrolChange_(sender, value) {
        this.getEmitter().notifyObservers(
            Control.EVENT_CHANGE,
            [value]
        );
    }
}

module.exports = SliderTextControl;