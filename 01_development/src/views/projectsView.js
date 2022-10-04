import projectsCSS from '../styles/projects.module.css';
import * as dom from '../components/dom';
import * as user from '../utils/user';

const location = dom.location.projects;
const title = `Portia C. Senior | Projects`;
const html = `
<div class="page ${projectsCSS['page']}" data-page="projects" data-state data-transition>
<div class="page_inner--flex ${projectsCSS['page_inner']}"><h2 class="heading--large">Coming Soon!</h2></div>
</div>`;

const svgExport = `<path d="M2560.49,182.69c-3.89-3.36-9.44-4.37-8.89-10.81-.29-18.14-11.51-33.57-24.15-45.45-13.11-15.67-30.22-7.37-46.74-1.4-19.12,3.92-38.25,2.78-56.41,11.89-11.54,5.05-16.58-8.05-27.24-8.73-11.43-1.29-8.56-15.28-10.8-23.43-3-25.99-25.62-6.03-38.65-17.08-15.15-16.21-51.52-21.21-59.18,4.96-3.88,12.98-10.66,24.64-24.48,29.74-8.83,7.71-8.06,22.33-22.14,25.43-31.79,13.18-108.42,61.12-137.48,31.65-28.86-59.63-59.06-9.49-82.59-40.41-5.9-10.9-13.23-20.91-24.48-27.42-22.93-17.79-55.14,12.78-73.06-12.48-10.78-21.34-36.3-12.11-52.58-24.66-17.2-13.67-39.66,4.78-56.19,11.48-12.34,4.4-4.05,19.32-10.32,27.58-17.94,19.58,7.29,40.41-3.07,60.24-12.51,18.19-11.16,46.93,8.91,59.41,19.67,8.71,39.56,16.81,61.41,18.61,10.52-.92,13.22,9.64,3.18,13.8-33.81,19.14-47.77-9.86-59.57,3.31-4.57,22.32,61.58,35.08,35.55,46.21-10.19,4.45-20.75,1.97-31.12,2.27-24.87,4.75-49.58,14.83-75.98,6.79-24.83-1.57-61.09-25.87-80.06-2.54,2.72,11.21,7.27,20.92-1.63,30.78-14.26,15.38-9.71,42.58-33.09,48.63-19.59,5.92-13.1,32.65,4.53,36.52,3.95,1.28,5,3.61,6.18,5.9-27.68,26.22-39.83,27.3-13.31,66.59,5.45,6.88,4.62,9.43-3.09,13.87-25.89,23.98,61.28,50.37,63.37,79.79,10.65,33.61,42.32,58.45,76.57,56.61,10.26-17.91,19.58-36.66,28.72-55.3,3.17-11.83,18.25-13.12,16.5-1.92-5.22,31.54-29.49,63.63-15.42,95.65,18.67,18.28,55.24,65.96,82.48,44.3,20.2-7.52,15.72,26.84,38.72,26.28,34.52,5.01,78.15-5.62,106.38,19.29,11.68,4.69,26.03,2.33,37.56,8.54,5.55,2.7,10.33,8.19,17.59,6.67,10.34-2.17,21.26-2.82,30.92-6.67,30.39-13.11,62.88,2.64,92.03-15.47,24.11-4.6,21.74,23.4,55.11,13.16,28.57,4.2,63.51-22.67,87.55-7.61,27.28,11.58,59.73-16.13,87.99-20.8,44.66-14.22,19.06-25.68,34.26-49.95,17.26-9.69,25.91-27.22,35.55,.49,13.24,23.55,48.62,27.21,60.68,.78" ></path><path d="M2560.49,545.15c-70.7,75.54-53.7,3.71-93.72-16.89-23.15-1.14-23.75,28.91-24.72,45.5-22.53,16.21-85.97-19.59-110.98-17.04-16.62,9.38-31.67,36.08-12.75,50.37,18.49,18.16,28.27,44.17,39.9,67.01,5.94,20.73,53.76,27.44,29.46,53.34-36.08,22.5-41.6,4.35-73.03,2.85-32.65,6.01-75.32,22.61-105.15,3.88-24.67-19.37-28.97,33.24-53.88,27.88-38.13-.59-58.9,4.68-33.56-39.9,18.53-33.89,23.21-8.68,35.49-63.32,7.99-39.13,71.51-21.01,82.99-58.27,.65-4.55,2.51-8.02,7.6-8.89,22.37-11.59,27.03-62.1-2.54-72.15-22.29-3.02-21.96-28.98-42.83-36.21,6.62-20.55-9.21-31.84-9.16-49.26,41.18-12.75,21.48-31.73,66.57-32.27,8.18,.23,11.63-5.2,13.75-12.24,25.26,11.05,51.62,11.35,77.17,1.36,23.12,24.58,54.49,16.7,82.12,5.27,10.72-2.57,8.9-14.83,17.67-19.18,14.84-8.73,33.19-10.43,47,.49,12.45,7.23,2.11,27.91,22.09,26.13,21.83-1.86,33.03,16.73,40.49,34.7m-582.4,95.73c8.18-.15,6.16-11.6,12.82-17.05,17.97-18.97-31.66-39.91-20.94-12.7,5.14,8.9-3.78,34.1,13.92,28.48m-135.69,33.55c-12,12-16.17,44.01,8.29,27.87,18.14-14.91,54.88-36.23,7.63-41.12-7.63,1.63-12.33,6.57-15.92,13.25m80-76.47c39.95-14,36.25,11.52,25.31-38.75-8.91-32.46-42.78-15.14-66.58-14.02-15.28-2.77-39.72,32.03-17.73,33.04,27.46-.15,27.17,40.71,59,19.73m-3.24,219.9c-6.84-38.98,27.37-19.6,34.65-40.12,.42-18.2-12.55-33.28-9.67-50.87,10.56-4.54,29.16-38.56,39.14-20.17,4.76,22.85,33.01,24.14,38.56,46.29,1.87,7.1,6.96,10.18,13.92,10.77-6.96-.59-12.06-3.67-13.93-10.77-4.34-21.48-32.16-22.1-36.87-43.03-9-24.9-29.41,11.3-40.83,16.91-5.42,24.93,32.47,59.26-12.95,63.47-9.02,3.17-11.69,6.56-12.01,15.85,1.47,38.79,62.49,12.5,88.05,20.99,9.28,.64,14.41,9.07,19.67,15.73,22.46,20.11,38.09-6.76,37.54-28.47,5.82-15.34,26.02-21.59,17.84-41.88-2.51-9.76,.79-19.83,2.41-30.05-16.39-14.4-33.03,17.47-48.29,21.26,15.2-3.76,31.96-35.68,48.29-21.26-1.62,10.23-4.93,20.29-2.41,30.06" ></path><path d="M1494.49,.47c20.71,7.72,14.09,20.11,5.34,35.93-5.52,24.12,1.66,38.74-13.4,62.65-18.79,40.38,12.3,85.91-32.91,114.66-20.17,17.79,14.32,20.76,22.06,32.65,7.38,9.32-.7,17.76,1.69,26.46,2.1,.75,3.68,2.91,5.93,4.28,11.57,9.54,23.69,1.83,36.19-1.97,7.63-2.01,32.67-8.81,27.3,6.33-13.59,20.82-47.22,14.19-64.25,31.17-4.65,15.36,11.81,23.39,18.47,34.73,7.67,9.6,21.09,40.21-1.17,38.56-20.48-2.7-27.08-27.53-43.22-37.82-21.16-13.43-39.36-35.28-65.14-38.9-14.9-2.07-24.1-18.51-40.57-17.51-23.61-7.27-28.99,45.69-52.61,22.07-9.03-12.26,1.58-46.52-22.05-17.87-5.22,.02-7.53-2.79-9.82-7.38-17.3-36.64-55.77-57.63-79.77-89.9-43.16-50.69-78.5-107.25-123.82-156.14-12.01-11.99-21.32-26.2-27.6-41.98M395.37,.47c26.25,13.69,52.44,27.32,79.69,39.05,19.26,6.57,20.58-13.71,3.83-20.95-12.53-5.99-25.03-12.04-37.52-18.1" ></path><path d="M779.83,1081.63c-1.41-12.79,12.57-23.75,24.76-25.12,12.22,1.99,24.88,12.64,16.11,25.12m-71.23,0c-.37-1.37-.8-2.74-1.32-4.11,22.66-19.87,31.64-37.45-1.33-53.14-20.07-12.38-40.52-24.19-62.37-33.22-8.61,8.76,6.24,21.22,11.74,28.03,17.67,17.36,7.18,49.25-16.32,57.28-21.84,6.11-13.26-37.47-42.67-9.79-17.91-53.6,6.05-20.25,15.78-36.34-3.43-11.67-2.21-50.12-11.14-54.91-8.74,1.05-10.65,7.97-12.75,14.6-4.33,16.81-17.33,6.45-18.33-6.36-3.73-24.55-3.47-30.68-29.86-36.06-18.18-2.88,.76,16.05-1.47,24.69,1.08,32.17,43.29,34.34,36.37,58.89-2.58,21.02-19.75,33.63-30.04,50.45m-75.73,0c-11.05-8.7-20.59-20.08-33.72-25.69-6.82-2.74-12.26-6.93-15.8-13.37-7.45-13.56-19.76-17.76-34.23-18.43-15.85-1.78-34.86,.58-46.87-11.98-20-23.53-60.46,14.77-22.9,21.23,8.67,.84,21.93,10.96,6.31,14.69-8.49,3.91-16.43,9.35-26.53,9.21-18.18-1.05-34.27-25.1-45.99-36.04-3.16-10.48,1.76-17.79,4.79-25.55,3.87-6.69,4.54-15.11-5.06-15.83-14.17-2.19-28.58-2.89-42.49-6.84-2.5-.71-4.47-1.15-5.32-4.35,5.43-6.24,16.03-18.59,6.03-25.59-3.74-2.75-8.49-4.31-10.79-8.97,1.85-13.69,8.62-25.96,12.96-39,2.82-9.55,5.29-24.17-6.04-28.48-14.44-3.45-49.3-18.57-47.62,8.12,1.08,15.37,4.49,30.38,6.77,45.54,1.76,16.35,14.38,28.31,22.65,41.63-2.34,9.67-24.78-10.47-30.56-12.46-6.49-3.87-13.94-2.29-19.65,1.91-14.67,13.2-32.18-25.65-40.02,.62,.35,9.86-3.88,20.05-16.62,18.29-4.61-1.24-7.3-6.56-10.07-12.51-4.69-10.08-10.63-19.51-19.48-26.67-8.64-6.99-15.93-15.66-26.54-20.92-21.18,5.95-41.52,17.57-62.75,24.22" ></path><path d="M1675.31,.47c-20.69,12.89-43.92,24.57-48.94,51.06-2.39,18.68-13.02,33.85-22.42,49.55-8.93,17.74-30.07,21.88-47.15,27.78-13.04,4.37-23.7,11.74-27.11,25.95-7.89,55.08,53.61,33.53,83.53,53.09,11.01,6.99,25.75,3.49,35.51,13.3,6.88,8.81,19.75,3.63,27.22,11.41,5.79,6.37,15.66,8.41,16.58,18.39-8.19,3.64-14.3,12.05-22.33,16.4-10.77,1.27-17.75,10.44-28.49,11.56-23.25,8.13-50.9,32.04-71.03,44.79-9.04,5.2-13.06,12.46-12.72,22.89-1.28,21.53,5.39,47.64-8.35,65.76,2.22,44.42,31.29,79.4,54.03,115.36,7.99,13.5,15.92,27.02,26.67,38.59,7.6,16.25,20.62,28.34,32.26,41.85,3.42,3.99,2.67,6.81-1.65,9.34-6.66-5.27-13.47-10.25-19.8-15.77-10.53-9.19-18.54-20.72-27.8-31.09-11.49-11.63-28.21-15.61-40.06-27.1-9.46-5.04-6.42-14.06-9.39-22.86-10.65-18.12-22.63-49.86-48.98-42.67-37.65,14.13-34.64-55.4-72.16-45.25-18.23,4.27-35.31,.06-50.51-9.22-23.71-16.84-59.21-25.22-69.91-54.78-.03-7.84-1.84-14.99-8.3-19.86-27.98-13.11-41.8,24.06-79.76-28.9-19.99-21.07-31.48-47.14-44.97-72.2-25.03-38.51-52.6-87.72-83.54-121.69-12.24-17.29-35.25-20.96-46.98-38.53-11.01-13.04-14.63-31.48-27.97-42.34-5.6-8.7-10.06-17.95-18.31-24.78-11.99-14.36-33.58-5.77-45.94-20.04M.49,411.02c6.62,30.03,6.94,61.52,11.23,92.05,3.42,24.04-.21,52.53,19.78,70.26,7.91,5.26,19.92,6.95,20.76-6.97,2.43-44.61,19.82-39.26,55.89-46.91,22.84-5.52,42.4,18.88,64.01,8.28,22.45-13.77,56.16,15.29,80.49,20.89,49.93,15.96,13.86,38.9,62.75,35.57,3.14-.7,7.01-1.07,8.68-3.38,5.12-7.11,13.29-10.83,18.52-17.63,4.38-5.69,11.51-5.74,17.19-8.75,6.7-3.86,14.24-3.91,21.5-5.45,10.25,7.26,23.38,10.69,34.3,4.13,15.05,6.89,17.48-7.04,22.71-15.89,10.71-6.49,2.86-20.15,9.94-29.23,18.26-34.35-11.85-48.67-7.15-78.38,2.15-8.52,1.84-17.41,1.76-25.93,6.5-12.04-2.92-24.32,1.01-36.83,.98-3.36-1.13-6.86-2.43-10.06-5.87-14.44-5.7-29.94-8.29-44.96-3.28-18.98-4.71-38.34-12.4-56.45-5.86-10.56,1.92-22.04-.16-32.86-4.17-29.94,5.78-23.71-12.04-55.76-24.24-4.53-40.8-23.04-59.08-37.84-6.55-7.23-8.49-16.58-14.59-24.11-3.72-8.16-5.09-16.74-5.36-25.41,.48-11.49-8.21-22.84-2.07-33.55,5.54-23.03,30.39-38.14,53.24-28.56,32.51,16.46,68.96,26.87,98.25,48.75,13.05,13.27,31.44,19.86,43.6,34.33,5.03,5.28,8.12,4.86,14.71,.66,19.56-12.11,27-34.31,31.28-55.78,3.92-20.28,24.78-30.25,37.37-44.79" ></path><path d="M326.32,893.03c-.65-1.13-1.13-2.9-1.73-4.26-.18-.42-.03-.89,.36-1.13,4.28-2.68,7.73-6.84,12.99-8.3,2.71-.75,5.64,.51,6.93,3.01,.6,1.17,1.06,2.51,1.5,3.87-2.09,2.41-2.78,5.71-4.97,8.22-4.03,4.61-11.5,4.82-15.08-1.41m-5.88-13.2c-.4-2.75-1.43-4.99-3.92-5.75-3.1,.31-4.74,2.08-6.19,3.87-5.87,7.24-12.85,13.35-19.7,19.58-10.87,9.89-16.25,22.23-16.37,36.75-.07,8.25,5.01,14.37,12.13,16.34,6.79-1.73,7.47-7.98,9.06-12.63,2.6-7.59,6.65-13.45,12.89-18.34,7.9-6.18,14.14-13.38,12.96-24.65-.17-1.58-.15-5.01,1.68-6.78,.21-.21,.29-.52,.15-.78-1.25-2.38-2.29-4.88-2.69-7.61Zm86.81,117.78c-5.91,6.53-4.92,14.01,2.53,19,6.95-6.96,6.33-14.89-2.53-19Zm32.1-67.07c-2.03-4.94-7.16-5.91-11.25-8.41-2.41,1.17-5.52,.28-7.99,3.15-.96,1.65,.91,4.38-1.17,6,6.82,9.03,14.45,8.61,20.28,.35,.22-.32,.28-.74,.14-1.1Zm85.13,39.21c-7.29,5.38-3.79,12.84-3.8,19.63,1.45,2.35,3.4,4.2,5.88,6.16,10.02-4.12,10.17-12.65,9.96-21.35-3.08-3.32-7.64-4.5-12.04-4.44Z" ></path><path d="M1040.67,950.59c19,19.06,9.83,27.14,43.05,13.97,13.11,5.58,26.93,14.14,40.38,3.5,16.86-14.56,61.3-42.41,39.66-66.52,.51-6.01,3.37-8.96,8.36-10.33,28.37-9.13,52.5,43.29,71.55-10.74,3.96-22.48,50.1,4.8,33.68-34.83-3.77-22.58,39.33-1.76,18.46-41.85-11.84-15.11-67.73-106.4-85.65-86.68-20.89,16.62-33.9-2.32-21.53-19.62,8.87-6.16,9.74-17.92,2.42-25.26-50.18-62.85-102.08-124.45-156.21-183.88-17.78-15.71-42.58-73.55-68.68-59.42-45.39,19.76-27.73,64.22-53.07,56.82-18.99-15.84-48.05,7.52-56.04-9.85-2.33-5.93-5.7-11.4-13.4-13.33-14.16-.19-20.98,9.41-23.68,22.18-3.92,19.69-16.09,35.48-23.05,53.77-1.87,6.36-4.93,12.07-10.71,15.85-20.94,13.88-13.57,41.53-19.17,62.67-5,14.99-14.36,28.9-25,40.73-13.16,12.64-5.02,28.58-1.39,43.51,1.32,17.63,20.15,21.72,32.89,29.13,32.64,14.21-33.3,53.43-36.57,37.97-4.83-16.79-27.16-24.6-42.7-19.11-19.52,7,10.58,40.77-15.79,45.71-19.47,8.5-58.1-4.64-62.3,22.8-.25,11.6-6.82,22.24-7.38,33.59,3.01,13.19,1.29,54.57,16.21,56.82,22.68-5.06,16.16-76.59,34.49-61.23-1.58,13.31-14.24,28.18,.79,39.19,6.95-2.03,9.36-8.85,12.93-14.02,7.19-10.65,32.72-30.55,38.17-9.34,8.64,16.42,3.83,26.2-8.79,38-6.04,9.41-13.6,18.02-15.27,29.74-2.23,11.28,4.48,32.96,19.02,26.53,19.85-13.73,42.43-14.46,64.7-21.38,9.66-6.96,34.12,8.57,14.53,10.54-47.23,14.17,3.39,73.19,31.71,81.18,30.41,7.57,68.85,61.61,94.31,34.08,12.72-8.77,21.99-22.4,36.21-29.03,7.71-3.5,15.38-7.12,21.74-15.79,4.92-79.44,6.38-44.12,71.15-66.04,18.99,19.06,9.83,27.14,43.05,13.97" ></path><path d="M872.79,933.14c6.71,13.73,27.94,17.02,39.52,10.02-11.58,7-32.81,3.71-39.52-10.02-4.76-16.31-23.26-23.23-29.69-37.29,15.24-15.73,11.33-38.11,1.4-55.9-22.23-34.57-9.76-16.76,33.59-47.53,37.13-.38,16.71,39.04,29.81,58.27,6.73,12.55,22.97,7.92,32.11,15.33,11.92,15.69,23.92,32.95,19.73,54.35-.41,14.71-12.52,40.28-30.44,30.57-4.91-3.38-10.87-5.24-16.36-7.77,35.3,24.08,48.76-4.69,47.15-38.01m-66.41,83.62c-1.1-12.67-7.1-23.7-16.34-32.42-54.57,10.29-55.74,10.76-70.87,28.6-1.76,26.75,38.26,23.75,56.63,29.88,17.79,2.07,33.04-6.44,30.58-26.06m229.64-371.73c-10.69-16.7-27.98-44.83-47.55-48.23-18.97,6.86-40.63-6.78-57.55,8.47-13.31,11.82-30.47,15.66-45.06,24.59-21.04,14.47-33.08,37.75-55.1,51.34-7.95,4.33-11.32,13.1-3.73,20.74,8.42,12.78,12.48,26.67,14.05,41.85,4.26,26.98,32.14,41,43.42,64.65,9.53,12.36,27.66,13.29,35.55,27.83,5.72,8.94,14.9,13.2,24.13,16.96,22.25,11.4,48.5,33.33,62.73-1.12,3.58-11.46,7.21-12.77,18.98-10.27,15.39,2.72,42.88,4.24,48.14-14.44-.61-11.3,11.98-22.38,4.5-32.19-15.91-3.05-30.17-12.75-46.96-11.42-13.84,2.01-39.84,8.61-33.45-15.24,4.25-26.78-7.05-60.55,22.03-77.31,12.85-14.47-4.71-25.59,15.85-46.22-1.69,2.32-3.19,5.44-5.1,7.57m-356.39,240.89c2.18,12.74,2.02,31.65,20.62,28.09-2.2-10.39,3.61-36.21-8.29-37.82-19.58,4.51-13.14,42.49,8.29,37.82" ></path><path d="M1208.83,638.44c-25.02,10.41-39.16-22.62-53.9-37.15-45.93-50.31-84.73-106.66-132.2-155.4-17.45-12.46-36.16-43.81-5.72-52.17,9.2-5.04,.15-14.71,.51-22.38-.41,7.62,8.74,17.4-.51,22.38-30.26,8.5-11.9,39.58,5.72,52.17,15.34,12.94,26.73,29.15,39.03,44.59,40.61,47.46,79.13,96.78,121.08,143.09,20.69,20.15,39.76-8.36,59.34-11.77,16.85,18.78,51.51,40.74,34.56,70-8.07,9.8-22.5,22.28-12.7,35.4,11.71,16.64,26.73,30.01,43.2,41.63,9.64,5.51,21.93,8.25,29.05,17.89,8.99,11.26,18.58,22.08,27.07,33.69,6.64,9.08,13.59,9.38,24.9,3.78,8.14-2.77,10.07-13.32,17.97-14.85,10.42,4.92,4.47,22.57,18.12,26.17,16.81-12.23-10.79-36.76,34.12-54.47,17.58,13.62,30.57,1.17,48.91,1.2,16.25,3.23,33.1-20.56,25.44-34.47,17.04-35.32-20.12-44.92-42.63-22.51-40.85,42.02-20.31,1.83-30.29-27.81-1.71-17.4,23.31-22.39,29.17-37.93,4.42-5.93,16.79-5.57,14.44-15.88-1.46-8.51,.91-16.48,2.3-24.75,4.29-26.77-17.59-56.75-46.57-47.81-8.38,1.5-15,.62-21.74-5.17-11.7-8.94-27.47-9.87-41.67-11.7-27.27-4.97-7.38-23.5-57.55-23.9-5.19-4.38-6.61-10.71-8.96-16.51-5.38-13.22-29.13-28.3-44.97-22.03-31.28,7.8-40.12,39.13-55.77-6.48-17.11-39.64-61.56-27.93-64.04-49.37,1.22-12.24-.46-24.07-5.09-35.46-4.67-13.83-22.67-10.41-29.12-22.63-10.05-16.07-26.24-27.19-43.74-33.72-10.73-3.36-17.49,12.71-29.27,4.02-16.07-13.89-34.3,3.39-40.43,22.56,6.19-19.2,24.34-36.44,40.43-22.56,11.75,8.62,18.61-7.3,29.27-4.03,17.51,6.55,33.68,17.64,43.74,33.73,6.45,12.22,24.46,8.8,29.12,22.63,4.62,11.39,6.31,23.22,5.09,35.46,3.19,21.99,46.47,9.28,64.04,49.37" ></path><path d="M1450.3,168.61c-4.17,.58-8.46,.92-12.65,.62-4.8-.34-8.69-4.87-7.53-8.73,3.59-11.89,4.41-24.45,8.81-36.11,3.63-9.62,4.9-19.69,6.4-29.76,.58-3.87,.33-8.36,4.19-10.94,.48-.32,1.11-.26,1.54,.11,3.06,2.63,3.93,6.78,3.62,10.18-.69,7.81-1.72,15.48-.72,23.45,1.91,15.12,1.84,30.35,.83,45.58-.21,3.13-1.65,5.21-4.5,5.6-4.17,.58-8.46,.92-12.65,.62-4.8-.34-8.69-4.87-7.53-8.73,3.59-11.89,4.41-24.45,8.81-36.11,3.63-9.62,4.9-19.69,6.4-29.76m-6.06,138.23c-1.29-1.63-3.33-1.84-5.43-1.41-5.89,1.21-12.04,.92-17.25,2.77-1.53,1.94-1.65,3.59-.77,5.37,.6,1.21,1.85,1.95,3.19,1.94,6.77-.04,14.09-1.25,19.95-5.94,.84-.67,.97-1.9,.31-2.73Zm-1.68,416.57c6.12,2.42,10.76-1.16,15.83-2.79,2.22-.72,3.88-3.19,5.94-5,2-5.68-1.41-9.57-5.34-12.47-6.38-4.71-13.15-10.02-17.38-16.92-2.4-3.91-7-5.96-11.52-5.18-9.01,1.55-17.52,5.08-26.17,8.19-.49,4.04-.57,4.11,.66,5.56,10.53,12.35,22.62,22.53,37.97,28.6" ></path><path d="M38.01,1081.63c7.51-27.28,18.11-26.24,27.8,0m1155.05,0c-32.47-38.79-162.86-25.13-202.1,0m1541.72-263c-54.73,6.49-126.24-4.58-162.19,47.89-8.02,12.63-19.45,22.18-31.25,30.74-45.07,26.28-99.24,34.86-141.56,61.5-53.54-16.12-103.48,26.87-159.83,4.6-31.5-4.96-20.73-23.87-39.29-27.95-15.91-1.34-30.01-10.31-45.64-12.48-12.53-.99-23.92,9.42-36.13,1.26-13.05-4.99-28.4,.16-41.73-3.86-23.71,23.33-89.28,16.82-87.43,48.8,3.95,35.68-25.77,53.78-50.76,71.71-9.21,17.81-29.7,24.96-41.68,40.82m-1407.37,0c-12.24-5.25-15.49-24.13-29.4-21.96-8.06,2.6-24.22,13.65-23.62,21.96" ></path>`;

const svgExportMobile = `<path d="M749.78,352.43c-.49,.53-.96,1.08-1.41,1.63-12.56,15.6-9.1,41.16-31.67,47-19.59,5.92-13.1,32.65,4.53,36.52,3.95,1.28,5,3.61,6.18,5.9-27.68,26.22-39.83,27.3-13.31,66.59,5.45,6.88,4.62,9.43-3.09,13.87-16.59,15.37,13.24,31.72,37.36,49.23" ></path><path d="M581.55,.47c20.71,7.72,14.09,20.11,5.34,35.93-5.52,24.12,1.66,38.74-13.4,62.65-18.79,40.38,12.3,85.91-32.91,114.66-20.17,17.79,14.32,20.76,22.06,32.65,7.38,9.32-.7,17.76,1.69,26.46,2.1,.75,3.68,2.91,5.93,4.28,11.57,9.54,23.69,1.83,36.19-1.97,7.63-2.01,32.67-8.81,27.3,6.33-13.59,20.82-47.22,14.19-64.25,31.17-4.65,15.36,11.81,23.39,18.47,34.73,7.67,9.6,21.09,40.21-1.17,38.56-20.48-2.7-27.08-27.53-43.22-37.82-21.16-13.43-39.36-35.28-65.14-38.9-14.9-2.07-24.1-18.51-40.57-17.51-23.61-7.27-28.99,45.69-52.61,22.07-9.03-12.26,1.58-46.52-22.05-17.87-5.22,.02-7.53-2.79-9.82-7.38-17.3-36.64-55.77-57.63-79.77-89.9-43.16-50.69-78.5-107.25-123.82-156.14-12.01-11.99-21.32-26.2-27.6-41.98" ></path><path d="M747.96,617.55c-6.66-5.27-13.47-10.25-19.8-15.77-10.53-9.19-18.54-20.72-27.8-31.09-11.49-11.63-28.21-15.61-40.06-27.1-9.46-5.04-6.42-14.06-9.39-22.86-10.65-18.12-22.63-49.86-48.98-42.67-37.65,14.13-34.64-55.4-72.16-45.25-18.23,4.27-35.31,.06-50.51-9.22-23.71-16.84-59.21-25.22-69.91-54.78-.03-7.84-1.84-14.99-8.3-19.86-27.98-13.11-41.8,24.06-79.76-28.9-19.99-21.07-31.48-47.14-44.97-72.2-25.03-38.51-52.6-87.72-83.54-121.69-12.24-17.29-35.25-20.96-46.98-38.53-11.01-13.04-14.63-31.48-27.97-42.34-5.6-8.7-10.06-17.95-18.31-24.78C87.52,6.15,65.92,14.74,53.57,.47M748.37,270.26c-6.42,3.2-12.1,7.93-19.62,8.71-23.25,8.13-50.9,32.04-71.03,44.79-9.04,5.2-13.06,12.46-12.72,22.89-1.28,21.53,5.39,47.64-8.35,65.76,2.22,44.42,31.29,79.4,54.03,115.36,7.99,13.5,15.92,27.02,26.67,38.59,7.33,15.67,19.7,27.47,31.01,40.41,.42,.48,.83,.96,1.25,1.44M762.36,.47c-4.62,2.88-9.36,5.69-14,8.62-16.15,10.21-31.04,21.85-34.94,42.44-2.39,18.68-13.02,33.85-22.42,49.55-8.93,17.74-30.07,21.88-47.15,27.78-13.04,4.37-23.7,11.74-27.11,25.95-7.89,55.08,53.61,33.53,83.53,53.09,11.01,6.99,25.75,3.49,35.51,13.3,3.26,4.17,7.86,5.21,12.59,5.97" ></path><path d="M28.37,1036.08c2.05-1.37,4.2-2.61,6.47-3.67,7.71-3.5,15.38-7.12,21.74-15.79,4.92-79.44,6.38-44.12,71.15-66.04,18.99,19.06,9.83,27.14,43.05,13.97" ></path><path d="M127.73,950.59c19,19.06,9.83,27.14,43.05,13.97,13.11,5.58,26.93,14.14,40.38,3.5,16.86-14.56,61.3-42.41,39.66-66.52,.51-6.01,3.37-8.96,8.36-10.33,28.37-9.13,52.5,43.29,71.55-10.74,3.96-22.48,50.1,4.8,33.68-34.83-3.77-22.58,39.33-1.76,18.46-41.85-11.84-15.11-67.73-106.4-85.65-86.68-20.89,16.62-33.9-2.32-21.53-19.62,8.87-6.16,9.74-17.92,2.42-25.26-50.18-62.85-102.08-124.45-156.21-183.88-17.78-15.71-42.58-73.55-68.68-59.42C7.82,448.68,25.47,493.14,.14,485.73" ></path><path d="M47.15,905.15m-20.08-39.14c.43,.57,.87,1.14,1.3,1.72,11.47,15.23,22.46,32.01,18.43,52.63-.31,11.04-7.19,28.18-18.18,31.96m-.25-210.09c10.17,12.62,23.52,23.58,30.5,38.22,9.53,12.36,27.66,13.29,35.55,27.83,5.72,8.94,14.9,13.2,24.13,16.96,22.25,11.4,48.5,33.33,62.73-1.12,3.58-11.46,7.21-12.77,18.98-10.27,15.39,2.72,42.88,4.24,48.14-14.44-.61-11.3,11.98-22.38,4.5-32.19-15.91-3.05-30.17-12.75-46.96-11.42-13.84,2.01-39.84,8.61-33.45-15.24,4.25-26.78-7.05-60.55,22.03-77.31,12.85-14.47-4.71-25.59,15.85-46.22-1.69,2.32-3.19,5.44-5.1,7.57m5.1-7.57c-10.69-16.7-27.98-44.83-47.55-48.23-18.97,6.86-40.63-6.78-57.55,8.47-13.31,11.82-30.47,15.66-45.06,24.59-12.46,8.57-21.77,20.24-31.86,31.14" ></path><path d="M295.88,638.44c-25.02,10.41-39.16-22.62-53.9-37.15-45.93-50.31-84.73-106.66-132.2-155.4-17.45-12.46-36.16-43.81-5.72-52.17,9.2-5.04,.15-14.71,.51-22.38-.41,7.62,8.74,17.4-.51,22.38-30.26,8.5-11.9,39.58,5.72,52.17,15.34,12.94,26.73,29.15,39.03,44.59,40.61,47.46,79.13,96.78,121.08,143.09,20.69,20.15,39.76-8.36,59.34-11.77,16.85,18.78,51.51,40.74,34.56,70-8.07,9.8-22.5,22.28-12.7,35.4,11.71,16.64,26.73,30.01,43.2,41.63,9.64,5.51,21.93,8.25,29.05,17.89,8.99,11.26,18.58,22.08,27.07,33.69,6.64,9.08,13.59,9.38,24.9,3.78,8.14-2.77,10.07-13.32,17.97-14.85,10.42,4.92,4.47,22.57,18.12,26.17,16.81-12.23-10.79-36.76,34.12-54.47,17.58,13.62,30.57,1.17,48.91,1.2,16.25,3.23,33.1-20.56,25.44-34.47,17.04-35.32-20.12-44.92-42.63-22.51-40.85,42.02-20.31,1.83-30.29-27.81-1.71-17.4,23.31-22.39,29.17-37.93,4.42-5.93,16.79-5.57,14.44-15.88-1.46-8.51,.91-16.48,2.3-24.75,4.29-26.77-17.59-56.75-46.57-47.81-8.38,1.5-15,.62-21.74-5.17-11.7-8.94-27.47-9.87-41.67-11.7-27.27-4.97-7.38-23.5-57.55-23.9-5.19-4.38-6.61-10.71-8.96-16.51-5.38-13.22-29.13-28.3-44.97-22.03-31.28,7.8-40.12,39.13-55.77-6.48-17.11-39.64-61.56-27.93-64.04-49.37,1.22-12.24-.46-24.07-5.09-35.46-4.67-13.83-22.67-10.41-29.12-22.63-10.05-16.07-26.24-27.19-43.74-33.72-10.73-3.36-17.49,12.71-29.27,4.02-16.07-13.89-34.3,3.39-40.43,22.56,6.19-19.2,24.34-36.44,40.43-22.56,11.75,8.62,18.61-7.3,29.27-4.03,17.51,6.55,33.68,17.64,43.74,33.73,6.45,12.22,24.46,8.8,29.12,22.63,4.62,11.39,6.31,23.22,5.09,35.46,3.19,21.99,46.47,9.28,64.04,49.37" ></path><path d="M537.36,168.61c-4.17,.58-8.46,.92-12.65,.62-4.8-.34-8.69-4.87-7.53-8.73,3.59-11.89,4.41-24.45,8.81-36.11,3.63-9.62,4.9-19.69,6.4-29.76,.58-3.87,.33-8.36,4.19-10.94,.48-.32,1.11-.26,1.54,.11,3.06,2.63,3.93,6.78,3.62,10.18-.69,7.81-1.72,15.48-.72,23.45,1.91,15.12,1.84,30.35,.83,45.58-.21,3.13-1.65,5.21-4.5,5.6-4.17,.58-8.46,.92-12.65,.62-4.8-.34-8.69-4.87-7.53-8.73,3.59-11.89,4.41-24.45,8.81-36.11,3.63-9.62,4.9-19.69,6.4-29.76m-6.06,138.23c-1.29-1.63-3.33-1.84-5.43-1.41-5.89,1.21-12.04,.92-17.25,2.77-1.53,1.94-1.65,3.59-.77,5.37,.6,1.21,1.85,1.95,3.19,1.94,6.77-.04,14.09-1.25,19.95-5.94,.84-.67,.97-1.9,.31-2.73Zm-1.68,416.57c6.12,2.42,10.76-1.16,15.83-2.79,2.22-.72,3.88-3.19,5.94-5,2-5.68-1.41-9.57-5.34-12.47-6.38-4.71-13.15-10.02-17.38-16.92-2.4-3.91-7-5.96-11.52-5.18-9.01,1.55-17.52,5.08-26.17,8.19-.49,4.04-.57,4.11,.66,5.56,10.53,12.35,22.62,22.53,37.97,28.6" ></path><path d="M307.92,1081.63c-32.47-38.79-162.86-25.13-202.1,0" ></path>`;

const svgOptions = dom.contoursDefaultOptions.desktop;
const svgOptionsMobile = dom.contoursDefaultOptions.mobile;

export {
	location,
	title,
	html,
	svgExport,
	svgExportMobile,
	svgOptions,
	svgOptionsMobile,
};