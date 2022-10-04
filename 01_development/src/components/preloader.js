'use strict';
import * as user from '../utils/user';
import * as dom from '../components/dom';
import * as preloader from '../views/preloaderView'
import { floatPrecision } from '../utils/math';
import { loadNavbar } from './navbar';
import { TopoContour } from '../classes/Contour';
import { createNewContour, toggleContourLineup } from './topography';

const wrapper = dom.preloader.wrapper;
const contour = user.deviceIsMobile
	? new TopoContour(
			preloader.location.geo,
			preloader.location.page,
			preloader.svgExportMobile,
			preloader.svgOptionsMobile
	  )
	: new TopoContour(
			preloader.location.geo,
			preloader.location.page,
			preloader.svgExport,
			preloader.svgOptions
	  );

const preloaderHandler = function () {
	const tildeFill = dom.preloader.logo.tildeFill;
	const clipFill = dom.preloader.logo.clipFill;

	document.addEventListener('DOMContentLoaded', e => {
		const page = document.querySelector('.page');
		wrapper.dataset.state = dom.state.loading;
		page.dataset.state = dom.state.hidden;
	});

	createNewContour(contour);

	tildeFill.addEventListener('animationiteration', e => {
		const tildeFillValue = getComputedStyle(e.target).getPropertyValue(
			'stroke-dashoffset'
		);

		let roundedTildeFillValue = floatPrecision(tildeFillValue, 1);
		const tildeFillIsEmpty = roundedTildeFillValue === 1;

		if (tildeFillIsEmpty) {
			tildeFill.style.animationPlayState = 'paused';
			tildeFill.style.strokeDashoffset = roundedTildeFillValue;
			wrapper.dataset.state = dom.state.loaded;
		}
	});
	clipFill.addEventListener('transitionstart', e => {
		toggleContourLineup(contour);
		loadNavbar();
	});
};
const removePreloaderWrapper = function () {
	const preloaderIsLoaded = wrapper.dataset.state === dom.state.loaded;

	if (preloaderIsLoaded) {
		wrapper.remove();
	}
};

export { preloaderHandler, removePreloaderWrapper };
