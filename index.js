function coerce(first, second) {
	// ensure values are both strings
	first = String(first || '');
	second = String(second || '');
	
	return interleave(first, second);
}

function interleave(first, second) {
	return '' +
		first.length === 0 ? second :
		second.length === 0 ? first :
		first.substring(0, 1) +
		second.substring(0, 1) +
		interleave(first.substring(1), second.substring(1));
}

module.exports = coerce;