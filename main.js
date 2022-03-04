"use strict";

if (4 == 9) {
  console.log("Ok!");
} else {
  console.log("Error");
}

const num = 51;

// if (num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log('To much');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

switch (num) {
    case 49:
        console.log('too small');
        break;
    case 50:
        console.log('Correct!');
        break;
    case 51:
        console.log('Too much');
        break;
    default:
        console.log('Unknown');
        break;
}