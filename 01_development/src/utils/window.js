import { main } from '../components/dom';
import * as stylesheet from '../styles/stylesheet';
import { throttle } from './flow';

const styles = stylesheet.stylesheet;

const setMinPageHeight = function () {
	styles[stylesheet.rootIndex].style.setProperty(
		'--viewport-height',
		`${window.innerHeight}px`
	);
};

const throttleMinPageHeight = throttle(setMinPageHeight, 500);

const pageResize = function () {
	throttleMinPageHeight();
	window.addEventListener('resize', throttleMinPageHeight);
};

const preventDefault = function (e) {
	e.preventDefault();
};

const disableScroll = function () {
	main.app.classList.add('noscroll');
	document.body.addEventListener('touchmove', preventDefault, {
		passive: false,
	});
};

const enableScroll = function () {
	main.app.classList.remove('noscroll');
	document.body.removeEventListener('touchmove', preventDefault);
};

export { pageResize, disableScroll, enableScroll };
