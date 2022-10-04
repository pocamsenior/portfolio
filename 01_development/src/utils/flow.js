const throttle = function (callback, delay = 1000) {
	let shouldWait = false;
	let waitingArgs;
	const throttleTimeout = () => {
		if (waitingArgs == null) {
			shouldWait = false;
		} else {
			callback(...waitingArgs);
			waitingArgs = null;
			setTimeout(throttleTimeout, delay);
		}
	};

	return function (...args) {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}

		callback(...args);
		shouldWait = true;

		setTimeout(throttleTimeout, delay);
	};
};

const debounce = function (callback, delay = 1000) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};

export { throttle, debounce };
