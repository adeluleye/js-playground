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
