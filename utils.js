export const ValidationOfRomanNumerals = (str) => {
    // Regex to check valid
    // ROMAN NUMERAL
    let regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
 
    // str
    // is empty return false
    if (str == null) {
        return false;
    }
 
    // Return true if the str
    // matched the ReGex
    if (regex.test(str) == true) {
        return true;
    }
    else {
        return false;
    }
}
