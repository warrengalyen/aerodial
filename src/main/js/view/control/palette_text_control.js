const ColorFormatter = require('../../formatter/color_formatter');
const ClassName = require('../../misc/class_name');
const CompositeControl = require('./composite_control');
const PaletteControl = require('./palette_control');
const TextControl = require('./text_control');

class PaletteTextControl extends CompositeControl {
	constructor(property) {
		super(property);

		this.getElement().classList.add(
			ClassName.get(PaletteTextControl.BLOCK_CLASS)
		);

		const prop = this.getProperty();
		const paletteControl = new PaletteControl(prop);
		paletteControl.getElement().classList.add(
			ClassName.get(
				PaletteControl.BLOCK_CLASS,
				null,
				PaletteTextControl.MODIFIER_CLASS
			)
		);
		this.addSubview(paletteControl);

		const textControl = new TextControl(prop);
		textControl.setFormatter(new ColorFormatter());
		textControl.getElement().classList.add(
			ClassName.get(
				TextControl.BLOCK_CLASS,
				null,
				PaletteTextControl.MODIFIER_CLASS
			)
		);
		this.addSubview(textControl);
	}
}

PaletteTextControl.BLOCK_CLASS = 'ptc';
PaletteTextControl.MODIFIER_CLASS = 'pt';

module.exports = PaletteTextControl;