class StringCodec {
    static canDecode() {
        return true;
    }

	static decode(value) {
		return String(value);
    }

    static encode(value) {
		return String(value);
    }
}

module.exports = StringCodec;