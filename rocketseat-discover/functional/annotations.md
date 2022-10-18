# Functional Programming #Some languages require functional programming.
- Small tasks within a function, no modifying data outside, very specific resolutions.
- JavaScript are PHP are multi-paradigmatically to support functional programming.
- Positive points: easy maintenance, defined scope.

## Principles ##

- Approaches
    - Imperative: linear instructions, dependencies, how to do it.
    - Declarative: just do it.
    - Example 1

- Immutability
    - If you need to change a variable, just create a new one.
    - Example 2

- Stateless
    - It will work with the data given to the function only.
    - In Example 1, the first function is stateful, the second function is stateless.

## Functions ##

- Independent functions
    - It has at least one given parameter(argument).
    - Shall return something.
    - Stateless.
    - If needed, use it recursively for loops.
    - Example 3

- Pure functions
    - Always return the same result for the same arguments.
    - Don't depend, or don't alter it for something outside it.
    - Doesn't affect data or save a state outside itself.

- First-class functions
    - Anywhere, even as other functions arguments, and/or parameters.
    - Can be handled as a variable.

- High-order functions
    - Returns a function or takes other functions as arguments
    - Currying would apply partially a function. 
    - Example 4.

- Function composition
    - The result of one function is passed on to the next function until the final function for the final result.
    - Ramda library "compose" and "pipe" functions.
    - Example 5.

## Source ##
URL: https://app.rocketseat.com.br/discover/course/ds-programacao-funcional/