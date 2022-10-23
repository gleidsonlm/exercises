/* 
    Review JavaScript Asynchronously
    https://app.rocketseat.com.br/discover/course/javascript-assincrono-e-promises/
*/

/* Callback is queued async */
function getCallback() {
    const https = require('https');
    const API = 'https://jsonplaceholder.typicode.com/todos/1'
    https.get(API, res => {
        console.log(res); //async: started first, showed last.
    });
    console.log('fetching object from API'); //sync: started last, showed first.
}
// getCallback()

/* Review setTimeout*/
// setTimeout( function() { printNumber(sumNumber(7,7)); }, 1000);

/* Review Callback functions */
function printNumber(number) {
    console.log(number);
}
function sumNumber(a,b) {
    return a + b;
}
// printNumber(sumNumber(7,7));