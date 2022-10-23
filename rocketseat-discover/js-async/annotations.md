## Promise ##
> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

States:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.
- ? settled: meaning that the operation finished, either fulfilled or rejected.

## Fetch ##
Modules as axios and node-fetch ease the work of getting API requests. They are called as promise functions.
> https://www.npmjs.com/package/node-fetch
> https://www.npmjs.com/package/axios

## Async ## 
> An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function