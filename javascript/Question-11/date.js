// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const currentDate = new Date();
console.log(currentDate);

// current year

let currentYear = currentDate.getFullYear();
console.log(currentYear);

// current Month

let currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth);

// today date

let todayDate =  currentDate.getDate();
console.log(todayDate);


// today date as a number

let todayDay = currentDate.getDay() + 1;
console.log(todayDay);


// Current Hours

let currentHour = currentDate.getHours();
console.log(currentHour);


// current minute

let currentMinute = currentDate.getMinutes();
console.log(currentMinute);

//    Find out the numbers of seconds elapsed from January 1, 1970 to now.

let prevTime  = new Date(1970, 01, 01);
let thisTime  = new Date();
let elapsedTime = thisTime.getTime() - prevTime.getTime();
console.log(elapsedTime / 1000);



































