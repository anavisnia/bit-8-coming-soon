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

    // pazymeti/rasti visus tris progress barus
    const allProgressBars = document.querySelectorAll('.progress-bar');

    // uzduoti stebetoja, skrolinimo ivikio
    window.addEventListener('scroll', () => {
        const screenBottom = window.innerHeight + window.scrollY;
        // dirnti su nariu (bar) is saraso/dauguma objektu (allProgressBars)
        for (let bar of allProgressBars) {
            // keik aukstai jis yra elemenyo apacioje
            const barBottom = bar.offsetHeight + bar.offsetTop;
            if (screenBottom >= barBottom) {
                bar.classList.add('animate');
            }

        }

        //offsetHeight: 48
        // offsetLeft: 99 // kiek nuo ekrano atstumtas
        // offsetTop: 1140 // kiek atsistumes nuo body el.
        // offsetWidth: 500
    })



    return true;
}

export { renderAllProgressBars }