// sum
function sum() {
  let total = 0;
  for (number of arguments) total += number;
  return total;
}

function sumMethod2(...items) {
  //console.log(items.length);
  //console.log(items);
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

const myArray = [1, 2, 3, 4, 5];
console.log(sumMethod2([1, 2, 3, 4, 5, 6]));

// circle
const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);

// Error Handling
function countOccurrencesMethod2(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Not a valid array');
  return array.reduce((accumulator, currentValue) => {
    const occurence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

// const arrayCheck = true;
const arrayCheck = [1, 1, 2, 2, 3, 4];
console.log(typeof arrayCheck);
try {
  console.log(countOccurrencesMethod2(arrayCheck, 2));
} catch (error) {
  console.log(error);
}
