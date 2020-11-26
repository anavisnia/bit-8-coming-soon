import { socialsData } from "../../data/socialsData.js";
import { isInputValidation } from "./inputValid.js";
import { isValidSocialItem } from './isValidSocialItem.js';

function renderSocials(selector, data) {
    // intput validation
    if (!isInputValidation(selector, data)) {
        return false;
    }

    // logic
    const socialsDOM = document.querySelector(selector);
    if (!socialsDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;
    }

    let HTML = '';

    for(let i = 0; i<data.length; i++) {
        const item = data[i];
        if (!isValidSocialItem(item)) { // jeigu nevalidus, tai eik toliau per sarasa
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