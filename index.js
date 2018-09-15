let name = 'Abideen'; // String Literal
console.log(name);

let age = 30; // Number Literal
let isApproved = true; // Boolean Literal

let firstName = undefined;
let lastName = null; // for clear value

// Object
let person = {
  name: 'Abideen',
  age: 30
};

// Dot Notation
person.name = 'Johon';

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name);

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 2;
console.log(selectedColors.length);

// Functions
// Performing a task
function greet(name, lastName) {
  console.log('Hello there ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
  return number * number;
}

greet('John', 'Smith');
let result = square(4);
console.log(result);

let x = 3;
let y = 10;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

console.log(0 == false);

// Increment (++)
// console.log(++x); // => 4
console.log(x++); // => 3
console.log(x); // => 4

// console.log(--y); // => 9
console.log(y--); // => 10
console.log(y); // => 9

// Ternary operator
// Condition ? true value : false value;

let points = 100;

let type = points >= 100 ? 'gold' : 'silver';
console.log(type);

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(2 & 3);

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
//console.log((a = b));
console.log(b);

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log('Hello World', i);
  }
}

// let i = 1;
// while (i <= 5) {
//   if (i % 2 !== 0) {
//     console.log('Hello World', i);
//   }
//   i++;
// }
let i = 1;
do {
  if (i % 2 !== 0) console.log('hello', i);
  i++;
} while (i <= 5);

function maxOfTwo(numberOne, numberTwo) {
  return numberOne > numberTwo ? numberOne : numberTwo;
}
// function maxOfTwo(numberOne, numberTwo) {
//   if (numberOne > numberTwo) return numberOne;
//   return numberTwo;
// }

console.log(maxOfTwo(15, 9));

function isLandscape(width, height) {
  return width > height ? 'Landscape' : 'Portrait';
}

console.log(isLandscape(6, 7));

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  return input;
}

console.log(fizzBuzz(12));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return 'OK';

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points > 12) return 'License suspended';
  return points;
}

console.log(checkSpeed(80));

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');
//   }
// }

//OR

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}

showNumbers(10);

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

const myArray = [null, false, NaN, 2, 3];
console.log(countTruthy(myArray));

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') console.log(key, obj[key]);
  }
}

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function sum(limit) {
  let result = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
  }
  return result;
}

console.log(sum(10));

function calculateGrade(array) {
  let sum = 0;
  let grade = 0;
  for (let value of array) sum += value;
  grade = sum / array.length;
  return grade;
}

function decideGrade() {
  let grade = calculateGrade(scores);
  if (grade < 60) return 'F';
  if (grade < 70) return 'D';
  if (grade < 80) return 'C';
  if (grade < 90) return 'B';
  return 'A';
}

const scores = [90, 90, 90];
console.log(calculateGrade(scores));
console.log(decideGrade());

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}

showStars(5);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

showPrimes(20);
