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

const pageResize = function(){
	throttleMinPageHeight();
	window.addEventListener('resize', throttleMinPageHeight);
}

export { pageResize };
