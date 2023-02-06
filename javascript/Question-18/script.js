// 18. Write a program which tells the number of days in a month, now consider leap year.

let daysInMonth = function (year, month){
    return new Date(year,month,0).getDate();
};

// leap years

// feb 2016
console.log(daysInMonth(2016, 2));

//  feb 2020
console.log(daysInMonth(2020, 2));

// feb 2024
console.log(daysInMonth(2024, 2));