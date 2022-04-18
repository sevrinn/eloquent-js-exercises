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

const chessboard = () => {
	let board = ''
	for (let line = 0; line < 8; line++) {
		for (let characters = 0; characters < 8; characters++) {
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

chessboard()
