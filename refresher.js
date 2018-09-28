const colors = ['red', 'blue', 'green'];

const items = colors.map(color => `<li>${color}</li>`);

console.log(items);

// object destructuring
const address = {
  street: '',
  city: '',
  country: ''
};

const { street: st, city, country } = address;

// spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

// const combine = first.concat(second);
const combine = [...first, 'a', ...second, 'b'];
console.log(combine);

// spread operator on object
const one = { name: 'Ade' };
const two = { job: 'Programmer' };

const combinedObject = { ...one, ...two, location: 'Lagos' };
console.log(combinedObject);

const cloneOne = { ...one };
console.log(cloneOne);

// classes (Pascal naming convention)

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log('walk');
//   }
// }

import { Person } from './person';
import { Teacher } from './teacher';

const person = new Person('Abideen');
person.walk();
console.log(person);

// // Inheritance
// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log('teach');
//   }
// }

const teacher = new Teacher('Adeleye', 'B.sc');
teacher.teach();
console.log(teacher);
