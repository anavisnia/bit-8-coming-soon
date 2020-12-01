import { renderSocials } from './components/socials/renderSocials.js';
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/clock/renderClock.js';

import { renderProgressBar } from './components/renderProgressBar/renderProgressBar.js';
import { renderAllProgressBars } from './components/renderProgressBar/renderAllProgressBars.js';
import { progressBarData } from './data/progressBarData.js';

import { formValidator } from './components/form-validator/formValidator.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

formValidator('.hero .form');
formValidator('main .form');

// renderProgressBar('.column.left', 'Web Development', 90);
// renderProgressBar('.column.left', 'Web design', 80);
// renderProgressBar('.column.left', 'UX', 40);
// renderProgressBar('.column.right', 'Right bar', 100);