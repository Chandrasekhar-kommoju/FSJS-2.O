// 17. Write a program which tells the number of days in a month.

let daysInMonth = function (year, month){
    return new Date(year,month,0).getDate();
};


// may 2020
console.log(daysInMonth(2020, 5));

//  jan 2021
console.log(daysInMonth(2021, 1));

// feb 2023

console.log(daysInMonth(2023, 2));