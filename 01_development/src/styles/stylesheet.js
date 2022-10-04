const stylesheet = document.styleSheets[0].cssRules;
const stylesheetArray = [...stylesheet];

const rootIndex = stylesheetArray.findIndex(
	element => element.selectorText == ':root'
);

const topoContourIndex = stylesheetArray.findIndex(
	element => element.selectorText == '.topo_contours'
);

const helloTextWrapperIndex = stylesheetArray.findIndex(
	element => element.selectorText == '.home-module_hello_text-wrapper'
);
const typingHelloKeyframeIndex = stylesheetArray.findIndex(
	element => element.name == 'home-module_typingHello'
);

export { stylesheet, rootIndex, topoContourIndex, helloTextWrapperIndex, typingHelloKeyframeIndex };
