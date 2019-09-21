const ClassName = require('../misc/class_name');
const View      = require('./view');

class FolderView extends View {
    constructor(title) {
        super();

        const elem = this.getElement();
        elem.classList.add(
            ClassName.get(FolderView.BLOCK_CLASS)
        );

        const arrowElem_ = document.createElement('div');
        arrowElem_.classList.add(
            ClassName.get(FolderView.BLOCK_CLASS, 'arrow')
        );
        elem.appendChild(arrowElem_);
        this.arrowElem_ = arrowElem_;

        const titleElem = document.createElement('div');
        titleElem.textContent = title;
        titleElem.classList.add(
            ClassName.get(FolderView.BLOCK_CLASS, 'title')
        );
        titleElem.addEventListener(
            'click',
            this.onTitleElementClick_.bind(this)
        );
        elem.appendChild(titleElem);

        const containerElem = document.createElement('div');
        containerElem.classList.add(
            ClassName.get(FolderView.BLOCK_CLASS, 'container')
        );
        elem.appendChild(containerElem);
        this.containerElem_ = containerElem;

        this.setExpanded(true, false);
    }

    getContainerElement_() {
        return this.containerElem_;
    }

    isExpanded() {
        return this.expanded_;
    }

    setExpanded(expanded, opt_animated) {
        this.expanded_ = expanded;
        this.applyExpanded_(opt_animated);
    }

    applyExpandingAnimationEnabled_(enabled) {
        let className = ClassName.get(
            FolderView.BLOCK_CLASS, null, 'animated'
        );

        if (enabled) {
            this.elem_.classList.add(className);
        }
        else {
            this.elem_.classList.remove(className);
        }
    }

    applyExpanded_(opt_animated) {
        const animated = (opt_animated !== undefined) ?
            opt_animated :
            true;
        this.applyExpandingAnimationEnabled_(animated);

        const arrowClass = ClassName.get(
            FolderView.BLOCK_CLASS,
            'arrow',
            'expanded'
        );
        if (this.expanded_) {
            this.arrowElem_.classList.add(arrowClass);
        }
        else {
            this.arrowElem_.classList.remove(arrowClass);
        }

        const contentHeight = this.expanded_ ?
            this.getContentHeight_() :
            0;
        this.containerElem_.style.height = `${contentHeight}px`;
    }

    getContentHeight_() {
        return this.subviews_.reduce((prevValue, curValue) => {
            return prevValue + curValue.getElement().offsetHeight;
        }, 0);
    }

    addSubview(subview) {
        super.addSubview(subview);
        this.applyExpanded_(false);
    }

    onTitleElementClick_() {
        this.setExpanded(!this.isExpanded());
    }
}

FolderView.BLOCK_CLASS = 'fv';

module.exports = FolderView;