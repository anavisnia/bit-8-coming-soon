import { isValidProgressBarList } from "./isValidProgressBarList.js";
import { isValidSingleProgressBar} from './isValidSingleProgressBar.js';
import { renderProgressBar } from "./renderProgressBar.js";
/**
 * 
 * @param {Object[]} data 
 * @param {string} data[].selector CSS like selectorius, kaip rasti vieta, kur sugeneruoti
 * @param {string} data[].title Progress bar pavadinimas
 * @param {number} data[].value Progress bar reiksme procentais
 * @returns {}
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    }
    
    return true;
}

export { renderAllProgressBars }