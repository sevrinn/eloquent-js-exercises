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

console.log(arrayToList([1, 2, 3, 4, 5]))
