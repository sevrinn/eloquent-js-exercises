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
			console.log('counting down', i)
			myRange.push(i)
		}
	} else {
		for (let i = start; i <= end; i += step) {
			console.log('counting up', i)
			myRange.push(i)
		}
	}

	return myRange
}

/**
 * Problem:
 * 2. Next write a sum function that takes an array of numbers and returns the sum of these numbers
 */

const sum = (numArr) => {
	if (numArr === 'Step cannot be zero') {
		return 'Need new step input'
	}
	arrSum = 0
	for (let num of numArr) {
		arrSum += num
	}
	return arrSum
}

console.log(sum(range(5, 2, -1)))
console.log(sum(range(1, 10, 2)))
console.log(sum(range(1, 10, 0)))

/**
 * BONUS ASSIGNMENT:
 * Modify range function to take optional third argument that indicates the "step" value use when building the array.
 * If no step is given, they will go up by one by default
 *
 */
