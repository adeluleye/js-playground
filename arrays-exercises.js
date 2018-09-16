// Array from Range
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);

  return output;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);

//search element in an array
function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

const myArray = [1, 2, 3, 4];
console.log(includes(myArray, -1)); // false

// Exclude function
function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

const arrayOne = [1, 1, 2, 2, 3, 4];
console.log(except(arrayOne, [1, 2]));

//move
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid Offset');
    return;
  }

  // copy the array
  const output = [...array];

  const element = output.splice(index, 1)[0]; // remove
  output.splice(position, 0, element); // add
  return output;
}

const arrayMove = [1, 2, 3, 4];
console.log(move(arrayMove, 1, -1));

// count occurences
function countOccurrences(array, searchElement) {
  const output = [];
  for (element of array)
    if (element === searchElement) {
      output.push(element);
      return output.length;
    }
  return 0;
}

function countOccurrencesMethod2(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

const arrayCheck = [1, 1, 2, 2, 3, 4];
console.log(countOccurrencesMethod2(arrayCheck, 2));

// Get max of an array
function getMax(array) {
  let max = array[0];
  if (array.length === 0) return undefined;
  for (element of array) if (element >= max) max = element;
  return max;
}

// Get max of an array using reduce function
function getMaxMethod2(array) {
  if (array.length === 0) return undefined;
  return array.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
  }, array[0]);
}

const arrayToFindMax = [-1, -1, 3];
console.log(getMaxMethod2(arrayToFindMax));

// Movie objects
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
];

const filteredMovies = movies
  .filter(value => value.year === 2018 && value.rating > 4)
  .sort((a, b) => (a.rating > b.rating ? -1 : 1))
  .map(value => value.title);

console.log(filteredMovies);
