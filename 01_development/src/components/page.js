import { Hello } from '../classes/Hello';
import * as dom from '../components/dom';
import * as stylesheet from '../styles/stylesheet';
import { activateNewLink, findActiveNavLink } from '../components/menu';

let activePage;
let removedPage;
let removedPageIsHome;
let activeDom;
let activePageIsFromPreloader;
let activePageIsHome;
let menuTriggeredPageTransitions;
let menuIsExpanded;

const menuWrapper = dom.menu.wrapper;
const menu = dom.menu.menu;
const helloAnimation = {
	text: {
		en: 'Hello',
		de: 'Guten Tag',
		jp: 'Konnichiwa',
		es: 'Hola',
		it: 'Ciao',
		hu: 'Szia',
		is: 'Hall\u00f3',
		pt: 'Oi',
		vn: 'Xin Ch\u00e0o',
		uk: 'Pryvit',
	},
	iso: [],
	isoIndex: { active: 0 },
	domInstance: {},
	clean: undefined,
};

const findActiveDom = function (domObjects) {
	const testDom = domObjects.map(domObject => {
		return {
			domObject,
			isAvailable:
				activePage?.dataset.page === domObject.container?.dataset.page,
		};
	});
	let activeDom = testDom.find(domObject => domObject.isAvailable);

	return activeDom;
};

const pageContainerObs = new MutationObserver(entries => {
	const dynamicDom = [
		{
			container: document.querySelector('.page[data-page="home"]'),
			helloTextWrapper: document.querySelector('[data-hello]'),
		},
		{ container: document.querySelector('.page[data-page="projects"]') },
		{ container: document.querySelector('.page[data-page="senorCode"]') },
		{ container: document.querySelector('.page[data-page="about"]') },
	];

	for (let entry of entries) {
		activePage = entry.target.firstElementChild;
		activeDom = findActiveDom(dynamicDom).domObject;
		removedPage = [...entry.removedNodes].find(node => node.dataset);

		activePageIsFromPreloader = document.querySelector('.preloader-wrapper');
		menuIsExpanded = menuWrapper.dataset.state === dom.state.expanded;
		activePageIsHome = activePage.dataset.page === dom.location.home.page;
		removedPageIsHome = removedPage?.dataset.page === dom.location.home.page;
	}

	if (!activePageIsFromPreloader) {
		activePage.dataset.transition = dom.transition.to.page;

		if (removedPage && activePage && !menuIsExpanded) {
			activePage.dataset.transition = dom.transition.from.page;
			activateNewLink()
		}
	}

	if (removedPageIsHome) {
		helloAnimation.clean = helloAnimation.isoIndex.active;
		helloAnimation.domInstance[
			helloAnimation.iso[helloAnimation.clean]
		].clean();
		helloAnimation.iso = [];
		helloAnimation.clean = 0;
		helloAnimation.isoIndex.active = 0;
	}

	menuTriggeredPageTransitions = function (e) {
		if (e.target !== menuWrapper) return;

		const menuIsExpanded = e.target.dataset.state === dom.state.expanded;
		const linkIsClicked =
			e.target.firstElementChild.dataset.transition === dom.transition.to.link;

		if (linkIsClicked) {
			activePage.dataset.transition = dom.transition.from.page;
			this.removeEventListener('transitionstart', menuTriggeredPageTransitions);
		}

		if (menuIsExpanded) {
			if (activePageIsHome) {
				activeDom.helloTextWrapper.dataset.state = dom.state.inactive;
				return;
			}
		}

		if (!menuIsExpanded) {
			if (activePageIsHome) {
				setTimeout(() => {
					activeDom.helloTextWrapper.dataset.state = dom.state.active;
				}, 1000);
				return;
			}
		}
	};
	menuWrapper.addEventListener('transitionstart', menuTriggeredPageTransitions);

	if (activePageIsHome) {
		for (let text in helloAnimation.text) {
			helloAnimation.iso.push(text);
			helloAnimation.domInstance[text] = new Hello(
				helloAnimation.text[text],
				text
			);
		}

		const initHelloAnimation = function (e) {
			if (e.target !== activePage) return;

			const wrapperIsEmpty = activeDom.helloTextWrapper.children.length === 0;

			if (!wrapperIsEmpty) {
				[...activeDom.helloTextWrapper.children].forEach(node => {
					node.remove();
				});
			}

			helloAnimation.domInstance[
				helloAnimation.iso[helloAnimation.isoIndex.active]
			].animate();

			this.removeEventListener('transitionend', initHelloAnimation);
		};
		activePage.addEventListener('transitionend', initHelloAnimation);

		const helloAnimationCycle = function (e) {
			const wrapperWidth = parseInt(
				getComputedStyle(e.target).getPropertyValue('width')
			);

			let previousLanguage;
			let activeLanguage;
			let previousTranslation;
			let activeTranslation;

			if (wrapperWidth) {
				activeDom.helloTextWrapper.dataset.state = dom.state.inactive;
				setTimeout(() => {
					activeDom.helloTextWrapper.dataset.state = dom.state.active;
				}, 5000);
			}

			if (!wrapperWidth) {
				activeDom.helloTextWrapper.dataset.state = dom.state.inactive;
				previousLanguage = helloAnimation.iso[helloAnimation.isoIndex.active];
				helloAnimation.isoIndex.active++;
				if (helloAnimation.isoIndex.active === helloAnimation.iso.length) {
					helloAnimation.isoIndex.active = 0;
				}
				activeLanguage = helloAnimation.iso[helloAnimation.isoIndex.active];
				previousTranslation = helloAnimation.domInstance[previousLanguage];
				activeTranslation = helloAnimation.domInstance[activeLanguage];
				activeDom.helloTextWrapper.dataset.hello = `${
					helloAnimation.iso[helloAnimation.isoIndex.active]
				}`;
				previousTranslation.clean();
				activeTranslation.animate();
			}
		};
		activeDom.helloTextWrapper.addEventListener(
			'animationiteration',
			helloAnimationCycle
		);
	}
});

const observePageContainer = pageContainerObs.observe(dom.main.app, {
	childList: true,
});

export { observePageContainer };
