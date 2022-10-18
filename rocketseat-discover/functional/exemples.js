/* 
    Example #5
    Function composition to square the double of a number.
*/
const double = x => x + x;
const square = x => x * x;
//Compose
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y),x);
//Pipe
const pipe = (...fns) => x => fns.reduce((y, f) => f(y),x);

//Final function for final result.
const resultCompose = compose(square, double)(7);
const resultPipe = pipe(square, double)(7);
console.log(`Double of Square
    Result when using Compose: ${resultCompose}
    Result when using Pipe: ${resultPipe}
    `);

/* 
    Example #4
    Currying an high-order function
*/
const pause = wait => fn => setTimeout(fn, wait)
const pause1s = pause(1000)
const pause10s = pause(10000)
// pause1s(() => console.log('Paused for 1 second.'))
// pause10s(() => console.log('Paused for 10 seconds.'))

/* 
    Example #3
    Factorizes a given number.
*/
const factorizes = x => {
    //if number is zero
    if (x === 0) {
        return 1;
    }
    // console.log(x)
    return x * factorizes(x-1);
}
// console.log(factorizes(9))

/* 
    Example #2
    Create new variable, don't change the existent.
*/
// JavaScript example
const basket = {
    items: 2,
    color: 'blue'
}
const basket2 = {...basket, items:1}

// React.JS example
// const [items, setAmount] = useState(0)
// setAmount(2)

/*
 Example #1 
 Function that square given number
*/

// Imperative approach, statefull
let number = 2;
function squareI() {
    return number * number;
}
squareI()

// Declarative approach, stateless
const squareD = n => n*n;