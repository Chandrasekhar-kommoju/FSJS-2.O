
// task 1

let formLeft = document.querySelector('.mainLeftDetails');
console.log(formLeft[0]);
formLeft[0].value = 'FSJS 2.0';
formLeft[1].value = 'fsjs@ineuron.ai';
formLeft[2].value = 'Hello World';

let formRight = document.querySelector('.mainRight');
let headingRight = formRight.firstElementChild;
let inputRight = headingRight.nextElementSibling;
inputRight[0].value = 'FSJS 2.0';
inputRight[1].value = 'fsjs@ineuron.ai';
inputRight[2].value = 'Hello World';