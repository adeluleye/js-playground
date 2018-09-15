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

// Log both number and the index using forEach()
arrayThree.forEach((number, index) => console.log(number, index));

// Joining Arrays
const anArray = [1, 2, 3];
const joined = anArray.join(',');

console.log(joined);

// Using the 'split' method on strings
const message = 'This is a test message';
const parts = message.split(' ');

console.log(parts);

const combineMsg = parts.join('-');

console.log(combineMsg);

// Sorting an array
// Method1: using sort()
const arrayToBeSorted = [3, 7, 5, 2, 3, 1];
arrayToBeSorted.sort();

console.log(arrayToBeSorted);

// M2: using reverse()
arrayToBeSorted.reverse();
console.log(arrayToBeSorted);

// Sorting Objects
const myCourses = [{ id: 1, name: 'Node js' }, { id: 2, name: 'javascript' }];

myCourses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(myCourses);

// Testing the Elements of an Array

// 1. every() method: All elements of the array must conform to a given criteria
const arrayToBeTested = [1, 2, -1, 3, 4];

const allPositive = arrayToBeTested.every(value => value >= 0);
console.log(allPositive); //=> false

// 1. some() method: At least one elements of the array must conform to a given criteria
const atLeastOne = arrayToBeTested.some(value => value >= 0);
console.log(atLeastOne); // => true

// Filtering an Array using filter() method
const arrayToBeFiltered = [1, -1, -2, 3, 4, -6, 8, 9];

const filteredArray = arrayToBeFiltered.filter(value => value >= 0);

console.log(filteredArray);

// Mapping array using the map() function
// Mapping the array to strings
const items = filteredArray.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// Mapping to object
const objects = arrayToBeFiltered
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);
console.log(objects);
