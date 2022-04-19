/**
 * Problems:
 * 1. Write a range function that takes two arguments, start and end. It should return an array containing all the numbers from start up to and incuding end.
 */

const range = (start, end) => {
	let myRange = []
	for (let i = start; i <= end; i++) {
		myRange.push(i)
	}
	return myRange
}

/**
 * Problem:
 * 2. Next write a sum function that takes an array of numbers and returns the sum of these numbers
 */

const sum = (numArr) => {}

console.log(range(1, 10))
