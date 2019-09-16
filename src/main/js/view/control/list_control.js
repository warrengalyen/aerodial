const ListConstraint = require('../../constraint/list_constraint');
const ClassName      = require('../../misc/class_name');
const Control        = require('./control');

class ListControl extends Control {
    constructor(model) {
        super(model);
    }

    createElement_() {
        super.createElement_();

        this.addClass(ClassName.get(ListControl.BLOCK_CLASS));

        const elem = this.getElement();

        const selectElem = document.createElement('select');
        selectElem.className += ClassName.get(ListControl.BLOCK_CLASS, 'select');
        elem.appendChild(selectElem);
        selectElem.addEventListener(
            'change',
            this.onSelectElementChange_.bind(this)
        );
        this.selectElem_ = selectElem;
    }

    applyModel_() {
        super.applyModel_();

        while (this.selectElem_.hasChildNodes()) {
            this.selectElem_.removeChild(this.selectElem_.lastChild);
        }

        const constraint = this.model_.findConstraintByClass(ListConstraint);
        const items = constraint.getItems() || [];
        items.forEach((item) => {
            const optionElem = document.createElement('option');
            optionElem.value = item.value;
            optionElem.textContent = item.name;
            this.selectElem_.appendChild(optionElem);
        });

        this.selectElem_.value = this.model_.getValue();
    }

    onSelectElementChange_() {
        this.getEmitter().notifyObservers(
            Control.EVENT_CHANGE,
            [this.selectElem_.value]
        );
    }
}

ListControl.BLOCK_CLASS = 'ListControl';

module.exports = ListControl;