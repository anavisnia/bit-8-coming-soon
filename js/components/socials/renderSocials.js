import { isInputValidation } from "./isInputValidation.js";

function renderSocials(data) {
    // intput validation
    if (!isInputValidation(data)) {
        return false;
    }
    // logic
    const socialsDOM = document.querySelector('footer > .row');
    let HTML = '';

    for(let i = 0; i<data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue; // jeigu ne objektas, eik prie kito nario
        }
        if (typeof item.link !== 'string' || item.link === '') {
            continue;
        }
        if (typeof item.icon !== 'string' || item.icon === '') {
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }
    
    // post logic validation / ar prasuktos duomenis yra taisingi?
    if (HTML === '') {
        console.error('ERROR: napavyko sugeneruoti social ikonu/nuorodu.');
        return false;
    }
    
    
    //return / jeigu taip - return
    socialsDOM.innerHTML = HTML;
    return true;
}

export { renderSocials }