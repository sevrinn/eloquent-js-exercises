/**
 * Problem: Write a program that prints all numbers from 1 to 100 with a few caveats:
 * 1. numbers divisible by 3 print FIZZ
 * 2. number divisible by 5 print BUZZ
 * 3. numbers divisible by both 3 and 5 print FIZZBUZZ
 *
 */

const fizzBuzz = () => {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log('FIZZBUZZ')
		} else if (i % 5 == 0) {
			console.log('BUZZ')
		} else if (i % 3 == 0) {
			console.log('FIZZ')
		} else {
			console.log(i)
		}
	}
}

fizzBuzz()
