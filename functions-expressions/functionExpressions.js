// Normal function statement in JS

function sayHi() {
  console.log('Hi');
}

sayHi();

// Function expression

const sayBye = function() {
  console.log('Bye');
}

sayBye();

function callFunction(func) {
  func();
}

callFunction(sayBye);