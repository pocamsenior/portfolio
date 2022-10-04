'use strict';

const floatPrecision = function (num, sigfig) {
	num = parseFloat(num);

	if (!sigfig) {
		sigfig = calculateSigfig(num);
	}
	const integer = `${+num}e${sigfig - 1}`;
	const round = Math.round(integer);
	const float = `${round}e-${sigfig - 1}`;

	return +float;
};

const calculateSigfig = function (num) {
	const convertToString = num.toPrecision();
	const filterDecimal = [...convertToString].filter(digit => {
		if (digit !== '.') return digit;
	});
	const sigfig = filterDecimal.length;
	return sigfig;
};

export { floatPrecision };
