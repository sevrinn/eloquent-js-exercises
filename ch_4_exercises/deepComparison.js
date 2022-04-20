/**
 * Write function deepEqual that takes two values
 * returns true only if values are the same
 * or if they are objects with the same properties, where all values of properties are equal
 * when compared with a recursive call to deepEqual
 *
 */

//I need to do a couple of things for this one
// 1. find out whether values should be compared directly (===) or have their properties compared
// 1a.use typeof to ascertain type
// if both produce "object", do a deep comparison
//take into account type of null also produces "object"
const deepEqual = (a, b) => {
	if (typeof a === 'object' && typeof b === 'object') {
		console.log('doing a deep comparison')
	} else {
		if (a === b) return true
		else return false
	}
}

let obj = { here: { is: 'an' }, object: 2 }
let obj2 = { a: 1, b: 2, c: 3 }
let num = 5
let str = 'text'
let bool = true
console.log(deepEqual(obj, obj2))
console.log(deepEqual(obj, num))
console.log(deepEqual(str, str))
