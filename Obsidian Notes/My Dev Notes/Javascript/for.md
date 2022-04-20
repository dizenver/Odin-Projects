# For Loop
Repeats a statement until a specified condition evaluates to false.  

The **`for`** loops statement structure is:
```javascript 
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```


FizzBuzz Example:
```javascript
for (let i = 1; i<=answer; i++) {

	if (i % 3 === 0 && i % 5 === 0){

		console.log("FizzBuzz");

	} else if (i % 3 === 0) {

		console.log("Fizz");

	} else if (i % 5 === 0) {

		console.log("Buzz");

	}

	else {

		console.log(i);

	}

}
```

The example returns **Fizz** for numbers divisible by 3, **Buzz** for items divisible by 5, and **FizzBuzz** for items divisible by both 3 and 5.