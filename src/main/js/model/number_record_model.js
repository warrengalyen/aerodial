const NumberModel = require('./number_model');

class NumberRecordModel extends NumberModel {
    constructor(opt_recordCount) {
        super();

        this.recValues_ = [];
        this.recCount_ = (opt_recordCount !== undefined) ?
            opt_recordCount :
            NumberRecordModel.DEFAULT_RECORD_COUNT;
        for (let i = 0; i < this.recCount_; i++) {
            this.recValues_.push(0);
        }
    }

    getRecords() {
        return this.recValues_;
    }

    setValue(value) {
        if (super.setValue(value)) {
            this.recValues_.push(this.value_);

            if (this.recValues_.length > this.recCount_) {
                this.recValues_.splice(0, this.recValues_.length - this.recCount_);
            }
        }
    }
}

NumberRecordModel.DEFAULT_RECORD_COUNT = 200;

module.exports = NumberRecordModel;