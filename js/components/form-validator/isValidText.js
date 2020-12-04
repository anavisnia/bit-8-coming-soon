function isValidText(text) {
    const maxTextLength = 1000;

    if (typeof text !== 'string') {
        return 'Teksto pranesimas turi buti teksto tipo.';
    }

    if (text === '') {
        return 'Teksto pranesimas neturi buti tuscias.';
    }

    if (text.length > maxTextLength) {
        return `Teksto pranesimas negali buti ilgesnis nei ${maxTextLength} simboliu (virsyta ${text.length - maxTextLength} simboliu).`;
    }

    return true;
}

export { isValidText }