const MaxNumberConstraint = require('../../constraint/max_number_constraint');
const MinNumberConstraint = require('../../constraint/min_number_constraint');
const ClassName           = require('../../misc/class_name');
const Monitor             = require('./monitor');

class GraphMonitor extends Monitor {
    constructor(property) {
        super(property);

        const elem = this.getElement();
        elem.classList.add(
            ClassName.get(GraphMonitor.BLOCK_CLASS)
        );

        const canvasElem = document.createElement('canvas');
        canvasElem.classList.add(
            ClassName.get(GraphMonitor.BLOCK_CLASS, 'canvas')
        );
        elem.appendChild(canvasElem);
        this.canvasElem_ = canvasElem;

        this.applyModel_();
    }

    getMaxValue_() {
        const maxConstraint = this.getProperty().getModel().findConstraintByClass(MaxNumberConstraint);
        return (maxConstraint !== null) ?
            maxConstraint.getMaxValue() :
            +1.0;
    }

    getMinValue_() {
        const minConstraint = this.getProperty().getModel().findConstraintByClass(MinNumberConstraint);
        return (minConstraint !== null) ?
            minConstraint.getMinValue() :
            -1.0;
    }

    applyModel_() {
        super.applyModel_();

        this.applyCanvasSizeIfNeeded_();

        const canvas = this.canvasElem_;
        const w = canvas.width;
        const h = canvas.height;
        const g = canvas.getContext('2d');
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.strokeStyle = 'white';

        const minValue = this.getMinValue_();
        const maxValue = this.getMaxValue_();

        const model = this.getProperty().getModel();
        const values = model.getRecords();
        g.beginPath();
        const y0 = h * ((values[0] - minValue) / (maxValue - minValue));
        g.moveTo(0, h - y0);
        for (let x = 1; x < w; x++) {
            const index = Math.floor(values.length * x / w);
            const v = values[index];
            const y = h * ((v - minValue) / (maxValue - minValue));
            g.lineTo(x, h - y);
        }
        g.stroke();
    }

    applyCanvasSizeIfNeeded_() {
        const canvas = this.canvasElem_;
        if (canvas.width !== canvas.clientWidth) {
            canvas.width = canvas.clientWidth;
        }
        if (canvas.height !== canvas.clientHeight) {
            canvas.height = canvas.clientHeight;
        }
    }
}

GraphMonitor.BLOCK_CLASS = 'grm';

module.exports = GraphMonitor;