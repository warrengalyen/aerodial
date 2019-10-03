import StringModel from './string_model';

class LogRecordModel extends StringModel {
    constructor(opt_recordCount) {
        super();

        this.recValues_ = [];
        this.recCount_ = (opt_recordCount !== undefined) ?
            opt_recordCount :
						LogRecordModel.DEFAULT_RECORD_COUNT;
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

LogRecordModel.DEFAULT_RECORD_COUNT = 10;

module.exports = LogRecordModel;