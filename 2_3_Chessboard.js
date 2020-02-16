// Eloquent Javascript Ch 2 Ex 3
// Create a chessboard with alternating space / hash marks on each line and allow a variable to be passed to define its size
// Eg., n = 4
// # # # #
//  # # # #
// # # # #
//  # # # #

const chessboard = (n) => {
	for (i = 0; i < n; i++) { // Loop over number of rows
		let row = '';
		if ( i % 2 == 0 ) { // Even rows
			for ( j = 0; j < n; j++ ) { row += '# '; } // Loop over columns 
		}
		if ( i % 2 != 0 ) { // Odd Rows
			for ( j = 0; j < n; j++) { row += ' #'; } // Loop over columns
		};
		console.log(row);
	};
};

chessboard(8);

		
