class ClassName {
    static get(block, opt_element, opt_modifier) {
		let result = `aero${block}`;
        if (opt_element) {
            result += `_${opt_element}`;
        }
        if (opt_modifier) {
            result += `-${opt_modifier}`;
        }
        return result;
    }
}

export default ClassName;