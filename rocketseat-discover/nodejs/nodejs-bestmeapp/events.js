//import inherits class from core module "util"
const { inherits } = require('util')
//import EventEmitter class from core module "events"
const { EventEmitter } = require('events')

// Variable for net event emitter
const evSay = new EventEmitter()

/* Listener and Emmitter */
// Listen all events as a function to output it.
// evSay.on('hearme', (message) => { console.log('I hear your', message) })
// Listen the event only once as a function to output it.
let said = evSay.once('hearme', (message) => { console.log(`I hear your ${message}, `) })

// Event Say "Hear Me" #1
evSay.emit('hearme', "psalming")

// Event Say "Hear Me" #2
evSay.emit('hearme', "praying")

/* Inherit Emitter */
//Constructor function to build person object with attribute name
function Person(name) {
    this.name = name
}
// Person objets will inherit EventEmitter class
inherits(Person, EventEmitter)

//Build "Your Name" example
const gleidson = new Person('Gleidson');

//Listen when "Person" says
gleidson.on('say', () => console.log(`${gleidson.name} said to himself.`))

// Output Person saying and listened
gleidson.emit('say')