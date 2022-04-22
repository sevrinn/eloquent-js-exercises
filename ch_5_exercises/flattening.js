/**
 * Use the reduce method in combination with concat method to 'flatten' an
 * array of arrays into a single array that has all the elements of the original arrays
 */

let arrays = [[1, 2, 3], [4, 5], [6]]

let flattened = arrays.reduce((totalVal, currentValue) => {
	return totalVal.concat(currentValue)
}, [])

console.log(flattened)

// i want to take arrays and reduce it to a single array
// the call back takes totalVal (first element of array since no)
