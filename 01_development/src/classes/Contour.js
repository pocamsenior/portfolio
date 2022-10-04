import * as dom from '../components/dom';
import * as user from '../utils/user';

class TopoContour {
	newGroup;
	wrapper = dom.topography.contourWrapper;
	svg = dom.topography.svg;
	menu = dom.menu.wrapper;

	constructor(geography, page, svgExport, options) {
		this.geography = geography;
		this.page = page;
		this.svgExport = svgExport;
		this.options = options;
	}

	createContourGroup() {
		const insideMenu = this.menu.dataset.state === dom.state.expanded;

		if (user.deviceIsMobile) {
			this.svg.setAttributeNS(null, 'viewBox', '0 0 721.81 1081');
		}
		this.newGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

		this.newGroup.className.baseVal = 'topo_contours';
		this.newGroup.setAttributeNS(null, 'data-page', this.page);
		this.newGroup.setAttributeNS(null, 'data-lineup', 'is-next');
		this.newGroup.setAttributeNS(null, 'data-geo', this.geography);
		this.newGroup.setAttributeNS(null, 'stroke-width', this.options.stroke);

		if (insideMenu) {
			this.newGroup.setAttributeNS(
				null,
				'data-transition',
				dom.transition.to.link
			);
		} else {
			this.newGroup.setAttributeNS(null, 'data-transition', '');
		}

		this.wrapper.append(this.newGroup);
	}

	createSVGPath(path) {
		const SVGpath = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'path'
		);
		SVGpath.className.baseVal = 'topo_contour-path';
		SVGpath.setAttributeNS(null, 'd', path);
		SVGpath.setAttributeNS(null, 'pathLength', 1);
		this.newGroup.appendChild(SVGpath);
	}

	SVGExportToPathElements() {
		const pathElements = this.svgExport.split('</path>');

		pathElements.forEach(pathElement => {
			const firstQuoteIndex = pathElement.indexOf('"');
			const lastQuoteIndex = pathElement.lastIndexOf('"');
			const pathDefinitions = pathElement.substring(
				firstQuoteIndex + 1,
				lastQuoteIndex
			);
			this.createSVGPath(pathDefinitions);
		});
	}
}

export { TopoContour };
