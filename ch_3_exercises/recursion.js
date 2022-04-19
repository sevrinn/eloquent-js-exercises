/**
 * Problem: Write a function that takes a whole integer as a parameter and determines if number is even or not recursively.
 */

const isEven = (num) => {
	if (num === 0) return true
	else if (num === 1) return false
	else if (num < 0) return isEven(-num)
	else return isEven(num - 2)
}

/**
 * line 5: isEven takes a num as it's parameter
 * line 6: if num equals zero, return true
 * line 7: if num equals one, return false
 * line 8: if is less than zero, return itself with number negated
 * line 9: else call is even with number - 2 until 0 or 1 is reached
 */
