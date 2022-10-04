const main = {
	app: document.querySelector('.app'),
};

const preloader = {
	wrapper: document.querySelector('.preloader-wrapper'),
	logo: {
		tildeFill: document.querySelector('.preloader-logo_tilde-fill'),
		clipFill: document.querySelector('#preloader-logo_clip-fill'),
	},
};

const topography = {
	contourWrapper: document.querySelector('.topo_contours-wrapper'),
	svg: document.querySelector('.topo_bkg'),
};

const contoursDefaultOptions = {
	mobile: { stroke: '.2%' },
	desktop: { stroke: '.1%' },
};

const navbar = {
	container: document.querySelector('.navbar'),
	menuBtn: document.querySelector('.menu-btn'),
	clipFill: document.querySelector('#navbar-logo_clip-fill'),
};

const menu = {
	wrapper: document.querySelector('.menu-wrapper'),
	links: document.querySelectorAll('[data-nav]'),
	menu: document.querySelector('.menu'),
};

const location = {
	preloader: {
		page: 'preloader',
		geo: 'newark, new jersey',
		latitude: 40.73566,
		longitude: -74.17237,
	},
	home: {
		page: 'home',
		geo: 'apex, north carolina',
		latitude: 35.731952,
		longitude: -78.852878,
	},
	about: {
		page: 'about',
		geo: 'jersey city, new jersey',
		latitude: 40.72157,
		longitude: -74.04745,
	},
	projects: {
		page: 'projects',
		geo: 'queens, new york',
		latitude: 40.71351,
		longitude: -73.82831,
	},
	senorCode: {
		page: 'senorCode',
		geo: 'old harbour bay, st catherine, jamaica',
		latitude: 17.90712,
		longitude: -77.09793,
	},
};

const state = {
	loading: 'is-loading',
	loaded: 'is-loaded',
	active: 'is-active',
	inactive: 'is-inactive',
	expanded: 'is-expanded',
	collapsed: 'is-collapsed',
	hidden: 'is-hidden',
	visible: 'is-visible',
};

const transition = {
	to: {
		active: 'to-active',
		inactive: 'to-inactive',
		link: 'to-link',
		menu: 'to-menu',
		page: 'to-page',
	},
	from: {
		link: 'from-link',
		menu: 'from-menu',
		preloader: 'from-preloader',
		page: 'from-page',
	},
	at: {
		link: 'at-link',
	},
};

const lineup = {
	next: 'is-next',
	current: 'is-current',
	previous: 'is-previous',
};

const recommendations = {
	music: 'https://www.youtube.com/watch?v=xvFGya7BkUE',
	tv: 'https://www.netflix.com/title/81078217',
	interesting: 'https://www.youtube.com/watch?v=-y3RGeaxksY',
	funny: 'https://www.netflix.com/title/81471774',
};

export {
	main,
	preloader,
	topography,
	contoursDefaultOptions,
	navbar,
	menu,
	location,
	state,
	transition,
	lineup,
	recommendations
};
