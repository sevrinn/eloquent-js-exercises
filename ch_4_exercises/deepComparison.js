/**
 * Write function deepEqual that takes two values
 * returns true only if values are the same
 * or if they are objects with the same properties, where all values of properties are equal
 * when compared with a recursive call to deepEqual
 *
 */

const deepEqual = (a, b) => {
	//direct comparison
	if (a === b) return true

	//deep comparison
	if (typeof a != 'object' || a == null || typeof b != 'object' || b == null)
		return false

	//gets each objects keys
	let aKeys = Object.keys(a),
		bKeys = Object.keys(b)

	//checks if objects keys have same length
	if (aKeys.length != bKeys.length) return false

	// loops through keys of a
	// if bKeys doesnt include the key or if the keys dont match return false
	for (let key of aKeys) {
		if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false
	}
	return true
}

let obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// → true
