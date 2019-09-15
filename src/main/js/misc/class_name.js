class ClassName {
    static get(block, opt_element, opt_modifier) {
        let result = `ssjs${block}`;
        if (opt_element) {
            result += `_${opt_element}`;
        }
        if (opt_modifier) {
            result += `-${opt_modifier}`;
        }
        return result;
    }
}

module.exports = ClassName;