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
	if (typeof a == 'object' && a != null && typeof b == 'object' && b != null) {
		//deep comparison
		console.log('deep comparison')
	} else {
		//direct comparison
		console.log('direct comparison')
	}
}

let obj = { here: { is: 'an' }, object: 2 }
let obj2 = { a: 1, b: 2, c: 3 }
let num = 5
let str = 'text'
let bool = true
console.log(deepEqual(obj, obj2)) //expecting deep comparison
console.log(deepEqual(obj, num)) //expecting direct
console.log(deepEqual(str, str)) //expecting direct
console.log(deepEqual(obj, null)) //expecting direct
