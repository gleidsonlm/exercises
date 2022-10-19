/*
    Promises
    https://app.rocketseat.com.br/discover/course/javascript-assincrono-e-promises/
*/

//Order a car
function orderCar(car) {
    return new Promise(function (resolve, reject) {

        // Flip a coin
        const coin = (Math.floor(Math.random() * 2) == 0);
        
        // If coin is true, promise fulfilled.
        if (coin) {
            return resolve(`Your ${car} has arrived.`)
        // If coin is false, promise rejected
        } else {
            // return reject(`Your driver canceled your ride.`);
            return reject(`Your driver canceled the ${car}.\nPlease, try again later.`);
        }
    })
}

orderCar('Ride')
.then(result => console.log(result))
.catch(err => console.log(err))
.finally(() => console.log('Thank you!'))
/* todo: 
    - queue a new promise when the first is rejected;
    - setTimeout, then clearTimeout when (first or new) promise is fullfilled.
*/