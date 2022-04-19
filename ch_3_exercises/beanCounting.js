/**
 * Problem 1: Wrtie a function countBs that takes a string as its only arg and returns a number that indicates how many uppercase B characters there are in a string
 *
 *          Next wrtie a function countChar that takes two args, str and targetChar. It returns a number indicating how many targetChar's there are in a string
 *
 */

const countBs = (str) => {
	let bCounter = 0
	for (let i = 0; i <= str.length - 1; i++) {
		if (str[i] === 'B') {
			bCounter += 1
		}
	}
	return bCounter
}

console.log(countBs('BbBbBBB'))

/**
 * line 8: countBs takes a string on
 * line 9: initialize and set bCounter to 0
 * line 10: for loop initialize i at 0
 * line 11: if string character at index i equals capital B
 * line 12: add 1 to bCounter
 * line 15: returns final value of bCounter
 */

/**
 * Problem 2: Next wrtie a function countChar that takes two args, str and targetChar. It returns a number indicating how many targetChar's there are in a string
 *
 *
 *
 */

const countChar = (str, targetChar) => {
	let charCounter = 0
	for (let i = 0; i <= str.length - 1; i++) {
		if (str[i] === targetChar) {
			charCounter += 1
		}
	}
	return charCounter
}

console.log(countChar('Koolaid kills knots knackered', 'k'))

/**
 * line 37: countChar takes a str and a targetChar
 * line 38: initialize and set counter to 0
 * line 39: for loop initialize i at 0
 * line 11: if string character at index i equals targetChar
 * line 12: add 1 to charCounter
 * line 15: returns final value of charCounter
 */
