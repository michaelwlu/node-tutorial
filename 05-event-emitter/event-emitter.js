const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
  console.log(msg);
})

myEmitter.emit('someEvent', 'The event was emitted');

// Util is now considered legacy

const util = require('util');

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const james = new Person('james');
const mary = new Person('mary');
const ryu = new Person('ryu');
const people = [james, mary, ryu];

people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(`${person.name} said ${msg}`)
  })
})

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');

// Class extender method

class NewPerson extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const newJames = new NewPerson('james');
const newMary = new NewPerson('mary');
const newRyu = new NewPerson('ryu');
const newPeople = [newJames, newMary, newRyu];

newPeople.forEach(person => {
  person.on('speak', msg => {
    console.log(`${person.name} said ${msg}`)
  });
});

newJames.emit('speak', 'hello there');