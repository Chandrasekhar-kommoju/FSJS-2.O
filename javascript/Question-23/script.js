
//  23.. Write a program to check that the number given by the user is a prime number or not.

let Prime = true;

const number = prompt ('Enter a number Greater than 1');


for (let i=2; i<number;i++) {
    if(number % i === 0){
        Prime = false;
        break;
    }
}

// Finally, output the result
if (number === 1) {
    alert(`${number} is not a prime number`);
    console.log(`${number} is not a prime number`);
  } else if (Prime) {
    alert(`${number} is a prime number`);
    console.log(`${number} is a prime number`);
  } else {
    alert(`${number} is not a prime number`);
    console.log(`${number} is not a prime number`);
  }
  









