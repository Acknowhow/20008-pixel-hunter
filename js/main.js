import {makeIntroTemplate} from './modules/templates/intro.js';
import imageData from './modules/templates/data/imagesData';
import {makePaintingsContainer} from './modules/templates/intro.js';
import {makePhotosContainer} from './modules/templates/intro';
const paintingsContainer = [];
const photosContainer = [];
makeIntroTemplate();
makePaintingsContainer(imageData, paintingsContainer);
makePhotosContainer(imageData, photosContainer);

