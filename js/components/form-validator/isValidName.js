function isValidName(name) {
    const maxNameLength = 50;
    if (typeof name !== 'string') {
        return 'Vardas turi buti teksto tipo.';
    }

    if (name === '') {
        return 'Vardas negali buti tuscias.';
    }

    if (name.length > 50) {
        return `Vardas negali virsiti ${maxNameLength} simboliu (vyrsita ${name.length - maxNameLength} simboliu)`;
    }

    // turi buti tik abeceles raides
    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    for (let letter of name) {
        if (!abc.includes(letter.toLowerCase())) {
            return `Varde panauduota neleistinas simbolis (${letter})`;
        }
    }
    
    // Jei gauto vardo raides paversus mazosiomis yra lygu pradinei reiksmei, tai reikskia, jog vardas ir buvo tik is mazuju raidzio
    if (name.toLowerCase() === name) { 
        return 'Vardas negali buti vien tik is mazuju raidziu.';
    }
    // Jei pagauname, jog ivesta vien didzusios tai grazinam zinute - isjunk CapsLock
    if (name.toUpperCase() === name) { 
        return 'Vardas negali buti vien tik is didziuju raidziu. Isjungite "CapsLock".';
    }

    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if(realNameFormat !== name) {
        return 'Varda turi sudaryti pirma didzioji raide ir likusios mazosios.'
    }

    

    // ASD -> asd, Rim -> rim, qwe -> qwe

    return true;
}

export { isValidName }