/**
 * Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3]
 * let list = {
 *    value: 1,
 *     rest: {
 *      value: 2,
 *      rest: {
 *        value: 3,
 *         rest: null
 *             }
 *            }
 *          };
 */

const arrayToList = (arr) => {
	let list
	for (let i = arr.length - 1; i >= 0; i--) {
		list = { value: arr[i], rest: list }
	}
	return list
}
let array = [1, 2, 3]
console.log(arrayToList(array))

/**
 * write a listToArray function that produces an array from a list
 */

const listToArray = (list) => {
	let array = []
	for (let node = list; node != null; node = node.rest) {
		array.push(node.value)
	}
	return array
}

let testList = arrayToList([1, 2, 3])
console.log(listToArray(testList))

/**
 * write a prepend function that takes an element and a list produces an array from a list
 */

const prepend = (element, list) => {
	let newList = { value: element, rest: list }
	return newList
}
console.log(prepend(0, testList))
