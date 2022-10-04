'use strict';
import * as dom from '../components/dom';
import { toggleNavbarMenuBtnState } from './navbar';
import { toggleContourScale } from './topography';
const menuBtn = dom.navbar.menuBtn;
const wrapper = dom.menu.wrapper;
const menu = dom.menu.menu;
const contourWrapper = dom.topography.contourWrapper;

const findActiveNavLink = function () {
	const links = [...dom.menu.links];
	const testLink = links.map(link => {
		return { link, isMatch: link.pathname === location.pathname };
	});
	let activeLink = testLink.find(link => link.isMatch).link;
	if (!activeLink) activeLink = testLink[0];

	return activeLink;
};
const toggleMenuOverlayState = function (e) {
	const activeContour = contourWrapper.lastElementChild;
	const click = e.type === 'click';
	const popstate = e.type === 'popstate';

	if (click && e.target.closest('.menu-btn')) {
		const btn = e.target.closest('.menu-btn');
		const btnState = btn.dataset.state;
		const btnIsActive = btnState === dom.state.active;
		const btnIsInactive = btnState === dom.state.inactive;

		const page = document.querySelector('.page');

		if (btnIsInactive) {
			wrapper.dataset.state = dom.state.expanded;
			page.dataset.transition = dom.transition.to.menu;
		}
		if (btnIsActive) {
			wrapper.dataset.state = dom.state.collapsed;
			page.dataset.transition = dom.transition.from.menu;
		}
		toggleContourScale(activeContour);
	}

	if ((click && e.target.closest('[data-nav]')) || popstate) {
		const menuIsExpanded = wrapper.dataset.state === dom.state.expanded;

		if (menuIsExpanded) {
			setTimeout(() => {
				wrapper.dataset.state = dom.state.collapsed;
			}, 1000);
			if (popstate) {
				toggleNavbarMenuBtnState(menuBtn);
			}
		}
	}
};
const activateNewLink = function (e) {
	const click = e?.type === 'click';
	const popstate = e?.type === 'popstate';
	let activeLink = findActiveNavLink();
	let activeMenuItem = activeLink.parentElement;
	let menuItems = document.querySelectorAll('.menu_list-item');

	if (!e) {
		activeMenuItem.dataset.transition = dom.transition.at.link;
		return;
	}

	if (popstate) {
		const fromMenuItem = document.querySelector(
			'.menu_list-item[data-transition="at-link"]'
		);
		const toMenuItem = activeMenuItem;
		menu.dataset.transition = dom.transition.to.link;
		toMenuItem.dataset.transition = dom.transition.to.link;
		fromMenuItem.dataset.transition = dom.transition.from.link;
		setTimeout(() => {
			toMenuItem.dataset.transition = dom.transition.at.link;
			fromMenuItem.dataset.transition = '';
		}, 500);
		activateNewLink();
		toggleMenuOverlayState(e);
		return;
	}

	if (click) {
		const link = e.target.closest('[data-nav]');
		const toMenuItem = link.parentElement;
		const fromMenuItem = activeLink.parentElement;
		const activeLinkIsClicked = link === activeLink;

		if (activeLinkIsClicked) return;
		if (link) {
			menu.dataset.transition = dom.transition.to.link;
			toMenuItem.dataset.transition = dom.transition.to.link;
			fromMenuItem.dataset.transition = dom.transition.from.link;
			setTimeout(() => {
				toMenuItem.dataset.transition = dom.transition.at.link;
				fromMenuItem.dataset.transition = '';
			}, 500);
			activateNewLink();
			toggleMenuOverlayState(e);
			toggleNavbarMenuBtnState(menuBtn);
		}
	}
};
const menuOverlayHandler = function () {
	activateNewLink();

	wrapper.addEventListener('click', e => {
		e.preventDefault();
		activateNewLink(e);
	});

	wrapper.addEventListener('transitionend', e => {
		if (e.target !== wrapper) return;
		const page = document.querySelector('.page');

		if (menu.dataset.transition === dom.transition.to.link) {
			menu.dataset.transition = '';
		}
	});
};

window.addEventListener('popstate', e => {
	const menuIsExpanded = wrapper.dataset.state === dom.state.expanded;

	activateNewLink(e);
	if (!menuIsExpanded) {
		if (menu.dataset.transition === dom.transition.to.link) {
			menu.dataset.transition = '';
		}
	}
});

export {
	menuOverlayHandler,
	toggleMenuOverlayState,
	activateNewLink,
	findActiveNavLink,
};
