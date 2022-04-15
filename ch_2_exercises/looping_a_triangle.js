/**
 * Problem: Write a loop that makes seven calls to console.log to output the follwing triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

for (let i = '#'; i.length <= 7; i += '#') {
	console.log(i)
}

//line 13: the initial expression is setting i as the #
//the condition exression states that as long as the length of the string i is less than or equal to 7 keep looping
// the increment expression will concatenate another # onto string i at the end of every cycle
//line 14: inside our code block, we console the value of i (which is having another hash added to it every cycle)
//this will happen until the condition expression is no longer true we will then jump out of the loop

//the above is a rather elegant approach but kinda hard to read if you are an absolute beginner
// the approach below was my original solution to this problem

let str = '#'
for (let i = 1; i <= 7; i++) {
	console.log(str)
	str += '#'
}

//line 26: creates a variable containing our hash string
//line 27: our for loop first initializes i as 1.
// the condition expression keeps the loop going until length of string i is greater than 7
//the incement expression increments by one after every cycle
//line 28: inside our code block our str is logged
//line 29: another hash is concatenated to the str

//this repeats until i becomes greater than 7 and we jump out of the loop
