export function dateFormat(date) {
    const day = ("00" + date.getDate()).slice(-2);
    const month = ("00" + (date.getMonth()+1)).slice(-2);
    const year = date.getYear()+1900;
    console.log(year)
    return`${year}-${month}-${day}`
}