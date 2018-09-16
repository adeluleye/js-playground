// Hoisting: process of moving function declarations to the top of the file
// at run-time

walk();
// Function Declaration : This can be called before it's defined
function walk() {
  console.log('walk');
}

// Name or Anonymous Function Expression: can not be called before it's defined
let run = function() {
  console.log('run');
};

run();

// Arguments
function sum(a, b) {
  return a + b;
}

//Note: Every function in javascript has a special object called 'arguments'
function sumDynamic() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2)); //=> 3
console.log(sum(1)); //=> NaN
console.log(sum()); //=> NaN
console.log(sumDynamic(1, 2, 3, 4, 5, 6)); //=> 15

// Rest operator
// Note: the Rest parameter must be the last parameter in a function, otherwise there will be an error
function sumRestOperator(discount, ...prices) {
  const total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return total * (1 - discount);
}
console.log(sumRestOperator(0.1, 20, 30)); //=> 15

// Default Parameters: once you give a default value to a parameter, it should
// either be the last parameter in the function or give the other following parameters
// a default value as well
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

//console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

//Getters and Setters
const person = {
  firstName: 'Abideen',
  lastName: 'Adelu',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Jummy Aremu';

console.log(person);

// getters => access properties in an object
// setters => change (mutate)
