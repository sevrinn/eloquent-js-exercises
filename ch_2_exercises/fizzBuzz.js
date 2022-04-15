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

/**
 * my first solution is above:
 * line 10: we create a loop that is initialized at 1, it will run until i is greater than 100, and value of i will increment by one after every cycle
 * line 11: we use an AND logical operator inside of our if expression ensuring the number is divisible by both 3 and 5, printing FIZZBUZZ on line 12 if true
 * line 13: if i is divisible by 5, it prints BUZZ on line 14
 * line 15: if i is divisible by 3, it prints FIZZ on line 16
 * line 19: in our ELSE block we just log the current value of i
 *
 * line 23: we invoke the fizzBuzz function
 */
