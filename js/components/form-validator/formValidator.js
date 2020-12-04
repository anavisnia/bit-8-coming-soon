
import { validation } from './validationRules.js'; // biblioteka validacijos objektu, kurui reikia validuti ir kaip validuoti

// console.log(validation);
/**
 * Formos valodavima atliekanti funkcija, kuri automatiskai atpazista kuriems ivestiems laukams kokias reikia taikyti valydacijos taisykles ir pagal tai atvaizduoja atitinkamus pranesimus.
 * @param {string} selector CSS like selektor.
 * @param {Object} toastObject Objektas. i kuri reikia kreiptis, norint atvaizduoti pranisimus: tiek sekmes, tiek klaidos.
 * @returns {boolean} unkcijai sekmingai suveikus, grazinamas `true`, priesingu atveju `false`.
 */
function formValidator(selector, toastObject) {
    console.log(selector);
    console.log(toastObject);


    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    if (!submitBtnDOM) {
        toastObject.show('error', 'ERROR: formoje nerastas input:submit mygtukas.')
        // console.error('ERROR: formoje nerastas input:submit mygtukas.');
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    if (allElements.length === 0) {
        toastObject.show('ERROR: formoje nerastas nei vieno imputo ar textarea elementu.');
        return false;
    }


    submitBtnDOM.addEventListener('click', (event) => {
        event.preventDefault();
        let errorCount = 0;

        for (let input of allElements) {
            const validationRule = input.dataset.validation; // html'e - data-validation
            const text = input.value;
            // console.log(validationRule);

            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if(error !== true) {
                toastObject.show('error', error);
                errorCount++;
                break; // padaro, jog klaidos pranesima miestu ties pirma sutikta klaida
            }

        }

        if (errorCount === 0) {
            toastObject.show('success', 'Siumciam info...');
        }
    })

    return true;
}

export { formValidator }