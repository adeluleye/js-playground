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

// getters => access properties in an object
// setters => change (mutate)
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

// Error Handling
// throw => exception
const person2 = {
  firstName: 'Abideen',
  lastName: 'Adelu',
  set fullName(value) {
    if (typeof value != 'string') throw new Error('Value is not a string');

    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Enter a first and last name');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person2.fullName = '';
} catch (error) {
  //alert(error);
}

console.log(person2);

// Scope (Local vs Global scope)
const message = 'hi';

console.log(message);

// VAlid
function start() {
  const message = 'hi';
}
function stop() {
  const message = 'hi';
}
//Note: Avoid Global variables as much as you can, because local variables takes
// precedence over Global variables

// let vs var
// var: it's scope is not limited to the block alone but limited to the function
// i.e it's a function scoped variable

// let: block scoped variable
function start2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

// The 'this' keyword
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();

// Changing 'this' value

function playVideo() {
  console.log(this);
}

playVideo.call({ name: 'Abideen' }, 1, 2);
playVideo.apply({ name: 'Abideen' }, [1, 2]);
playVideo.bind({ name: 'Abideen' })();

playVideo();
