// Eloquent Javascript Ch. 2, Ex. 1
// Write a loop that makes seven calls to console.log to output:
// #
// ##
// ###
// ####
// #####
// ######
// #######

const hashTriangle = (n) => { // Added argument n to allow definition of loop length
	let output = '#'; // Begin with single has to avoid 'undefined' output
	for ( let i = 0; i < n + 1; i++ ) {
		console.log(output);
		output += '#';
	}
};

hashTriangle(7);
		
