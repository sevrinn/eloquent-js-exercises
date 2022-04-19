/**
 * Problem: Wrtie a function countBs that takes a string as its only arg and returns a number that indicates how many uppercase B characters there are in a string
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

const countChar = (str) => {}
