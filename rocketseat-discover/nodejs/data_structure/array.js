/* 
    JavaScript can have arrays within arrays.
    Also called Matrix or Multidimensional Array.
*/
const person = [
    ['John','Doe','38'],
    ['Jane','Doe','29'],
    ['Baby','Doe','1']
]
console.log(person[0][2])

/* JavaScript array  */
const drivers =
[
    'Schumacher',
    'Hamilton',
    'Fangio',
    'Prost',
    'Vettel',
    'Brabham',
    'Lauda',
    'Senna',
    'Piquet',
    'Stewart'
]

// Index starts at 0 
//console.log(drivers[0])

// How many items are stored in the array
//console.log(drivers.length)

// Array in JS can be interacted
// for (let driver of drivers) {
//     console.log(driver)
// }

// Adding a new array item
// drivers.push('Fittipaldi')

// Finding an element in the array
// const foundDriver = drivers.find(driver => driver === 'Senna')
// console.log(foundDriver)

// Removing (or replacing) an element from the array
// drivers.splice(-2,2)
// console.log(drivers)

// Removing all elements from the array using length
// console.log(drivers)
// drivers.splice(0,drivers.length);
// console.log(drivers)