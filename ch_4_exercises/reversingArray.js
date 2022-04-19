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

let arrayValue = ['A', 'B', 'C', 'D', 'E']
// console.log(reverseArray(arrayValue))
console.log(reverseArrayInPlace(arrayValue))
