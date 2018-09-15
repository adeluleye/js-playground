// Object-oriented Programming (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};

circle.draw(); // Method

// Factory function (Use camel notation by convention)
function createCircle(radius, message) {
  return {
    radius,
    draw() {
      console.log(message);
    }
  };
}

const circle1 = createCircle(3, 'Hello');
console.log(circle1);

const circle2 = createCircle(1, 'Hello there!');
console.log(circle2);

// Constructor Function (Use Pascal Notation by convention)
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle3 = new Circle(2);
console.log(circle3);

let number = 10;

function increase(number) {
  number = number + 1;
}

increase(number);

const myCircleClone = { ...circle };
console.log(myCircleClone);

const msg = "This is my first's message";

const userName = 'John';

const tpl = `This is my
'first's' message`;

const emailMessage = `Hi ${userName},

Thank you for joining my mailing list.

Regards,
Abideen`;

const now = new Date();
const date1 = new Date('May 22 2018 12:00');
const date2 = new Date(2018, 4, 11, 9);

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

const address = {
  street: 'Gbagada',
  city: 'Lagos',
  zipCode: 234
};

showAddress(address);

const address1 = new Address('Maitama', 'Abuja', 234);
const address3 = new Address('Maitama', 'Abuja', 234);
const address2 = createAddress('Iwo', 'Nigeria', 234);

showAddress(address2);
showAddress(address1);

console.log(areEqual(address1, address3));
console.log(areSame(address1, address3));

// Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

// Constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// If they both have same property
function areEqual(address1, address3) {
  return (
    address1.street === address3.street &&
    address1.city === address3.city &&
    address1.zipCode === address3.zipCode
  );
}

function areSame(address1, address3) {
  return address1 === address3; // If referencing same object
}

const blogPost = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 1,
  comments: [
    { author: 'd', body: 'e' },
    { author: 'f', body: 'g' },
    { author: 'z', body: 'y' }
  ],
  isLive: true
};

console.log(blogPost);

// Constructor function
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Post('a', 'b', 'c');

console.log(post);

// Array of objects
const priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Intermediate', minPerPerson: 11, maxPerPerson: 100 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 101, maxPerPerson: 1000 }
];
