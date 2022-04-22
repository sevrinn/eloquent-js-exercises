/**
 * Write a higher-order function loop that provides something like a for loop statement.
 * It takes a value, a test, an update function, and a body function
 * each iteration:
 * 1. it runs the test function on current loop value and stops if that returns false
 * 2. then it calls the body function, handing it the currentValue
 * 3. calls the update function to create a new value and starts from beginning
 */

const loop = (start, test, updateFunction, bodyFunction) => {
	for (let value = start; test(value); value = updateFunction(value)) {
		bodyFunction(value)
	}
}

loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
)
