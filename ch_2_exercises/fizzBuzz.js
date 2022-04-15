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
 * line 9: creates the fizzbuzz function itself
 * line 10: we create a loop that is initialized at 1, it will run until i is greater than 100, and value of i will increment by one after every cycle
 * line 11: we use an AND logical operator inside of our if expression ensuring the number is divisible by both 3 and 5, printing FIZZBUZZ on line 12 if true
 * line 13: if i is divisible by 5, it prints BUZZ on line 14
 * line 15: if i is divisible by 3, it prints FIZZ on line 16
 * line 19: in our ELSE block we just log the current value of i
 *
 * line 23: we invoke the fizzBuzz function
 */

for (let i = 1; i <= 100; i++) {
	let output = ''
	if (i % 3 == 0) output += 'FIZZ'
	if (i % 5 == 0) output += 'BUZZ'
	console.log(output || i)
}

//the solution in the book is above
/**
 * line 37 initializes i to 1, loop will run until i is greater than 100, i increments by one after every cycle
 * line 38: we're now in our code block. first we initialize output as an empty string
 * line 39: if current value of i is divisible by three, concatenate FIZZ to output. will be ignored if i is not divisible by 3
 * line 40: if current value of i is divisible by five, concatenate BUZZ to output. will be ignored if i is not divisible by 5
 * line 41: console.log makes use of the OR logical operator short circuiting trick it only checks its right-side condition if the
 *  first one false. and an empty string is one of only 3 falsey values.
 * if output doesnt get anything concatenated to it during a cycle, it prints the current number value of i instead
 */
