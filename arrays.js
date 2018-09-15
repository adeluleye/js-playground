const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(5, 6);

numbers.splice(2, 0, 'a', 'b', 9);

console.log(numbers);

// Finding Elements (Primitives)
const elements = [1, 2, 3, 7, 1, 4, 1];

console.log(elements.indexOf('a')); // => -1
console.log(elements.indexOf(1, 2)); // => 4
console.log(elements.indexOf(2)); // => 1
console.log(elements.indexOf(3)); // => 2
console.log(elements.indexOf(4)); // => 3

console.log(elements.lastIndexOf(1)); // => 6

console.log(elements.indexOf(1) !== -1);
//OR
console.log(elements.includes(1));

// Finding Elements (Reference Types)
const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

const course = courses.find(function(course) {
  return course.name === 'a';
});

// findIndex()
const course2 = courses.findIndex(function(course) {
  return course.name === 'a';
});

console.log(course2); // => { id: 1, name: 'a' }

const course3 = courses.find(function(course) {
  return course.name === 'xyz';
}); // => undefined

// Arrow functions
const course4 = courses.find(course => {
  return course.name === 'b';
});
//OR
const course5 = courses.find(course => course.name === 'a');
console.log(course5);
console.log(course4);

// Removing Elements
const myArray = [1, 2, 3, 4];

// From the End
const last = myArray.pop();
console.log(myArray);
console.log(last);

// From the Beginning
console.log(myArray.shift());

// From Middle
console.log(myArray.splice(1, 2));

// Emptying an array
let arrayMine = [1, 2, 3, 4];
let anotherArray = arrayMine;
//arrayMine = [];

// Method2
//arrayMine.length = 0;

//M3
arrayMine.splice(0, arrayMine.length);

// Combining and Slicing Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

//Combine
const combined = first.concat(second);
console.log(combined);

// Slice
const slice = combined.slice(2);
console.log(slice);

// The Spread Operator
const arrayOne = [1, 2, 3];
const arrayTwo = [1, 2, 3];

const myCombined = [...arrayOne, ...arrayTwo];
console.log(myCombined);

const copy = [...myCombined];
console.log(copy);

// Iterating an array using for...of loop
const arrayThree = [1, 2, 3];

for (i of arrayThree) console.log(i);

// Using forEach

arrayThree.forEach(number => console.log(number));

// Log both number and the index
arrayThree.forEach((number, index) => console.log(number, index));
