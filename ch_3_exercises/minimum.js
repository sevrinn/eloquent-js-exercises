/**
 * Problem: Wreite a function min that takes two arguments and returns their minimum.
 */

const min = (a, b) => {
	if (a < b) {
		return a
	} else {
		return b
	}
}

console.log(min(33, 135))

/**
 * line 5: min function takes two values
 * line 6: if a is less than b
 * line 7: return a
 * line 8: othewise
 * line 9: return b (because it must be smaller than a)
 *
 * line 13: calls min function with two arguments which are logged to the console
 */
