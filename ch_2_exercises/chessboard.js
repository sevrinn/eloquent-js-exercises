/**
 * Problem: Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
 * At each position of the grid there is eather a space or a #
 * characters should form a chessboard like this:
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 */

const chessboard = (size) => {
	let board = ''
	for (let line = 0; line < size; line++) {
		for (let characters = 0; characters < size; characters++) {
			if ((line + characters) % 2 == 0) {
				board += ' '
			} else {
				board += '#'
			}
		}
		board += '\n'
	}
	console.log(board)
}

chessboard(100)
