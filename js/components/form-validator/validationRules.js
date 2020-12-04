import { isValidEmail } from './isValidEmail.js';
import { isValidName } from './isValidName.js';
import { isValidText } from './isValidText.js';


const validation = {
    text: isValidText, 
    name: isValidName, 
    email: isValidEmail
}

export { validation }