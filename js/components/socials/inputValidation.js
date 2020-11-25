function isInputValidation (data) {
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