# Errors

## Types of Errors

### Syntax Error
A **`SyntaxError`** occurs when the code you are trying to run is not written correctly

Example:
```js
function helloWorld() {
  console.log "Hello World!"
}
```

will throw the following error, because we forgot the parentheses for `console.log()`

![image](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/02.png)


### Reference Error
The **`ReferenceError`** object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

Example:
```js
const a = "Hello"
const b = "World"

console.log(c)
```

will throw the following error, because we have not declared `c` yet.


### Type Error
A `TypeError` may be thrown when:

- an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
- when attempting to modify a value that cannot be changed; or
- when attempting to use a value in an inappropriate way.

Example:
```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

![](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/03.png)

will throw the foillowing error because `.push()` is not a String method, it’s an Array method.  Using a String method, like `.concat`, would resolve this error.  

[Full List of Javascript Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)