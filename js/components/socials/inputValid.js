/**
 * renderSocial funkcijai ivesti duomenu (input params) validacija
 * @param {string} selector Selektorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodos
 * @returns {boolean} Jei patikrinimo metu randoma logine duomenu klaida, tai grazina `false`, priesingu atveju `true`
 */
function isInputValidation (selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo.');
        return false;
    }
    if (typeof selector === '') {
        console.error('ERROR: selectorius negali buti tuscias.');
        return false;
    }
    if (Array.isArray(data) === false) {
        console.error('ERROR: social ikonom generuoti reikia array tipo duomenu.');
        return false;
    }
    if (data.length === 0) {
        console.error('ERROR: social ikonom generuoti reikia ne tuscio array tipo duomenu sraso.');
        return false;
    }
    return true;
}

export { isInputValidation }