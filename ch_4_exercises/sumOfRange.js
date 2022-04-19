/**
 * Problems:
 * 1. Write a range function that takes two arguments, start and end. It should return an array containing all the numbers from start up to and incuding end.
 */

const range = (start, end, step = 1) => {
	let myRange = []
	if (step === 0) {
		return 'Step cannot be zero'
	} else if (step < 0) {
		for (let i = start; i >= end; i += step) {
			myRange.push(i)
		}
	} else {
		for (let i = start; i <= end; i += step) {
			myRange.push(i)
		}
	}

	return myRange
}

/**
 * line 6: range takes 2 numbers, representing the start and end of range. it also takes an optional arg step that defaults to 1
 * line 7: initialize myRange to empty array
 * line 8: if step equals zero, it returns a message and jumps out out of function
 * line 10: if step is less than zero
 * line 11: run the for loop that counts down from the end of the array
 * line 112: push index value to myRange array
 * line 15: otherwise run the for loop that counts up from beginning of array
 * line 16: push index value to myRange array
 * line 20: returns an array with all the numbers in the range inclusive
 */

/**
 * Problem:
 * 2. Next write a sum function that takes an array of numbers and returns the sum of these numbers
 */

const sum = (numArr) => {
	if (typeof numArr !== 'object') {
		return 'Need new step input'
	}
	let arrSum = 0
	for (let num of numArr) {
		arrSum += num
	}
	return arrSum
}

/**
 * 40: sum takes an array of numbers
 * 41: if typeof numArr is Not object, return message
 * 44: initializes arrSum as 0;
 * 45: for ever num of numArr, add its value to arrSum
 * 48: return final arrSum
 */

console.log(sum(range(5, 2, -1)))
console.log(sum(range(1, 10, 2)))
console.log(sum(range(1, 10, 0)))

/**
 * BONUS ASSIGNMENT:
 * Modify range function to take optional third argument that indicates the "step" value use when building the array.
 * If no step is given, they will go up by one by default
 *
 */
