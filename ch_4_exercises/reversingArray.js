/**
 * Problem 1: Write  a function reverseArray that takes an array as an argument and produces a new array with the same elements in inverse order;
 */
const reverseArray = (arr) => {
	let reversedArr = []
	for (let i = arr.length - 1; i >= 0; i--) {
		reversedArr.push(arr[i])
	}
	return reversedArr
}

/**
 * 4: reverseArray takes an array as an argument
 * 5: initializes and sets reversedArr to an empty array
 * 6: for loop initializes i as the last index in the array, runs while i >= 0, and will decrement by 1 after every loop
 * 7: pushes the value of arr at index i to reversedArr
 *
 * 9: returns reversedArr
 */

/**
 * Problem 2. Write a function reverseArrayInPlace, modifying the given array by reversing its elements;
 */
const reverseArrayInPlace = (arr) => {
	let arrayMid = Math.floor(arr.length / 2)

	for (let i = 0; i <= arrayMid; i++) {
		let temp = arr[i]
		arr[i] = arr[arr.length - 1 - i]
		arr[arr.length - 1 - i] = temp
	}
	return arr
}

/**
 * 25: reverseArrayInPlace takes in an array
 * 26: initializes and sets arrayMid to equal half the length of arr, rounded down
 * 28: for loop initializes i at 0, will run while i is less than or equal to arrayMid, will inc by 1 after every loop
 * 29: initialize and set temp to initial value of arr at index i
 * 30: set value of arr at index i to equal value of arr at index arr.length - 1 - i
 * 31: set value of arr at index arr.length - 1 - i to the temp (the original arr[i])
 *
 * 33: return swapped in-place array
 */

let arrayValue = ['A', 'B', 'C', 'D', 'E']
// console.log(reverseArray(arrayValue))
console.log(reverseArrayInPlace(arrayValue))
