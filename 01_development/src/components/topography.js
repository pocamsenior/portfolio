import * as dom from '../components/dom';

const wrapper = dom.topography.contourWrapper;

let contour;
let newContour;
let oldContour;
let removedNodes;
let contourIsPreloader;
let oldContourIsPreloader;
let lineupIsNext;
let lineupIsCurrent;
let lineupIsPrevious;
let insideMenu;
let transitionToLink;

const createNewContour = function (contour) {
	contour.createContourGroup();
	contour.SVGExportToPathElements();
};
const toggleContourLineup = function (contour) {
	contour = contour?.newGroup || contour;

	contourIsPreloader = contour?.dataset.page === dom.location.preloader.page;

	lineupIsNext = contour?.dataset.lineup === dom.lineup.next;

	lineupIsCurrent = contour?.dataset.lineup === dom.lineup.current;

	lineupIsPrevious = contour?.dataset.lineup === dom.lineup.previous;

	if (lineupIsNext) {
		if (contourIsPreloader) {
			setTimeout(() => {
				contour.dataset.lineup = dom.lineup.current;
			}, 200);
			return;
		}

		contour.dataset.lineup = dom.lineup.current;
		return;
	}

	if (lineupIsCurrent) {
		contour.dataset.lineup = dom.lineup.previous;

		contour.addEventListener('transitionend', () => {
			contour.remove();
		});
		return;
	}
};
const toggleContourScale = function (contour) {
	const insideMenu = contour.dataset.transition === dom.transition.to.menu;

	if (!insideMenu) contour.dataset.transition = dom.transition.to.menu;
	if (insideMenu) contour.dataset.transition = dom.transition.from.menu;
};
const toggleContourTransition = function (contour) {
	const insideMenu = contour.dataset.transition === dom.transition.to.menu;

	if (insideMenu) {
		contour.dataset.transition = dom.transition.to.link;
	}
};

const addContoursObs = new MutationObserver(entries => {
	for (let entry of entries) {
		newContour = [...entry.addedNodes][0];
		oldContour = entry.previousSibling;
		removedNodes = [...entry.removedNodes][0];

		contourIsPreloader =
			newContour?.dataset.page === dom.location.preloader.page;

		oldContourIsPreloader =
			oldContour?.dataset.page === dom.location.preloader.page;

		lineupIsNext = newContour?.dataset.lineup === dom.lineup.next;

		insideMenu = oldContour?.dataset?.transition === dom.transition.to.menu;
	}

	if (contourIsPreloader && lineupIsNext) {
		toggleContourLineup(newContour);
	}

	if (!contourIsPreloader && insideMenu) {
		toggleContourLineup(oldContour);
		toggleContourTransition(oldContour);
	}

	if (!removedNodes && !oldContourIsPreloader && newContour && oldContour) {
		toggleContourLineup(oldContour);
	}
});
const observeAddContours = addContoursObs.observe(wrapper, {
	childList: true,
	attributes: true,
	attributeFilter: ['data-lineup'],
	attributeOldValue: true,
});

const contoursLineupObs = new MutationObserver(entries => {
	for (let entry of entries) {
		contour = entry.target;
		newContour = contour.nextSibling;

		contourIsPreloader = contour.dataset.page === dom.location.preloader.page;

		lineupIsPrevious = entry.oldValue === dom.lineup.current;

		transitionToLink = contour.dataset.transition === dom.transition.to.link;
	}

	if(!contourIsPreloader && newContour && newContour && !transitionToLink){
		setTimeout(() => {
			toggleContourLineup(newContour);
		}, 200);
	}

	if (contourIsPreloader && lineupIsPrevious) {
		toggleContourLineup(wrapper.lastElementChild);
	}

	if (transitionToLink) {
		setTimeout(() => {
			toggleContourLineup(newContour);
		}, 200);
	}
});
const observeContoursLineup = contoursLineupObs.observe(wrapper, {
	subtree: true,
	attributes: true,
	attributeFilter: ['data-lineup'],
	attributeOldValue: true,
});

export { createNewContour, toggleContourLineup, toggleContourScale };
