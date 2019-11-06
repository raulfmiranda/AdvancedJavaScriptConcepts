//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function() {
    var currentYear = this.getFullYear();
    return currentYear - 1;
}

new Date('1900-10-10').lastYear(); //'1899'

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
//1🗺, 2🗺, 3🗺
Array.prototype.map = function() {
    var arr = [];
    this.forEach(function(num) {
        arr.push(num + '🗺');
    });
    return arr;
}

console.log([1,2,3].map());