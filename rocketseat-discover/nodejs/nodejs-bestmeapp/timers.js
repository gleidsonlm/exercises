/* 
    Using setTimeout to execute an asyncronous callback
 */

// timeout variable in miliseconds
let timeOut = 4000

// function to be called back
const finishIt = () => console.log('Fatality!')

// Global setTimeout doing its job
// Stored as a variable for clear
const timer = setTimeout(finishIt,(timeOut+1000))

// Syncronous execution for comparison
console.log("FINISH IT!!!")

/* 
    Using clearTimeout to cancel the timeout previously set.
*/
//clearTimeout(timer)

/* 
    Using setInterval to output a function while the process runs.
*/
const waitingMsg = () => console.log('Waiting...')
const timeInterval = 1000
const interval = setInterval(waitingMsg,timeInterval)

/* 
    Using clearInterval to cancel the interval previously set.
*/
// Just clear it
// clearInterval(interval)
// Put an timeout to clear the interval
setTimeout( () => clearInterval(interval),timeOut)