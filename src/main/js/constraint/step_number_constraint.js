const Constraint = require('./constraint');

class StepNumberConstraint extends Constraint {
    constructor(stepValue) {
        super();

        this.stepValue_ = stepValue;
    }

        getStepValue() {
        return this.stepValue_;
    }

    setStepValue(stepValue) {
        this.stepValue_ = stepValue;
        this.getEmitter().notifyObservers(Constraint.EVENT_CHANGE);
    }

    constrain(value) {
        return (this.stepValue_ !== null) ?
    value - value % this.stepValue_ :
    value;
    }
}

module.exports = StepNumberConstraint;