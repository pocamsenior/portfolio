'use strict';
import './styles/main.css';
// import '../about/PortiaCSenior_resume.pdf';
import { navigationHandler } from './utils/router';
import { preloaderHandler } from './components/preloader';
import { pageResize } from './utils/window';
import { observePageContainer } from './components/page';

navigationHandler();
preloaderHandler();
pageResize();
