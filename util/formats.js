export function dateFormat(date) {
    const day = ("00" + date.getDate()).slice(-2);
    const month = ("00" + (date.getMonth()+1)).slice(-2);
    const year = date.getYear()+1900;
    console.log(year)
    return`${year}-${month}-${day}`
}

export function phoneFormat(toFormat) {
    const phoneNumber = toFormat.replace(/[^\d]/, '');
    
    let formatted = '';

    let hasCountryCode = false;
    let hasAreaCode = false;

    if (phoneNumber.length > 10) {
        formatted += '+'+phoneNumber.slice(0, phoneNumber.length-10)+' ';
        hasCountryCode = true;
    }

    if (phoneNumber.length === 10 || hasCountryCode) {
        formatted += '(' + phoneNumber.slice(phoneNumber.length-10, phoneNumber.length-7) + ') ';
        hasAreaCode = true;
    }

    if (phoneNumber.length === 7 || hasAreaCode) {
        formatted += phoneNumber.slice(phoneNumber.length-7, phoneNumber.length-4) + '-' + phoneNumber.slice(phoneNumber.length-4);
    }

    if (formatted.length !== 0) {
        return formatted;
    }

    return toFormat
}