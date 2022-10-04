import * as dom from '../components/dom';
import { toggleMenuOverlayState, menuOverlayHandler } from './menu';
import { removePreloaderWrapper } from './preloader';
const menuBtn = dom.navbar.menuBtn;

const navbarMenuBtnHandler = function () {
	menuBtn.addEventListener('click', e => {
		e.preventDefault();
		toggleMenuOverlayState(e);
		toggleNavbarMenuBtnState(e);
	});
};
const toggleNavbarMenuBtnState = function (e) {
	const btn = e.target?.closest('.menu-btn') || e;
	const btnState = btn.dataset.state;
	const btnIsActive = btnState === dom.state.active;
	const btnIsInactive = btnState === dom.state.inactive;

	if (btnIsInactive) {
		btn.dataset.transition = dom.transition.to.active;
		setTimeout(() => {
			btn.dataset.state = dom.state.active;
		}, 600);
	}

	if (btnIsActive) {
		btn.dataset.transition = dom.transition.to.inactive;
		setTimeout(() => {
			btn.dataset.state = dom.state.inactive;
		}, 800);
	}
};
const loadNavbar = function () {
	const navbar = dom.navbar.container;
	const clipFill = dom.navbar.clipFill;
	const activePage = document.querySelector('.page');

	navbar.dataset.state = dom.state.loading;
	navbar.dataset.state = dom.state.loaded;
	menuBtn.dataset.state = dom.state.inactive;
	clipFill.addEventListener('transitionstart', () => {
		removePreloaderWrapper();
		activePage.dataset.state = dom.state.visible;
		activePage.dataset.transition = dom.transition.from.preloader
	});
	navbarMenuBtnHandler();
	menuOverlayHandler();
};

export { loadNavbar, toggleNavbarMenuBtnState };
