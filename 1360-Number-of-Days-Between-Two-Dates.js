/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
     const msPerDay = 24 * 60 * 60 * 1000; 
    const date1Ms = new Date(date1).getTime();
    const date2Ms = new Date(date2).getTime();

    const differenceMs = Math.abs(date2Ms - date1Ms);

    return Math.floor(differenceMs / msPerDay);
};