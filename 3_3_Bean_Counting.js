// Eloquent Javascript Ch 3 Ex 3
// Write a function called countChar that takes two arguments: a string and a character
// Return the count of the number of times that character appears in that string

const countChar = (string,character) => {
	let count = 0;
	if ( character.length > 1 || character.length < 1 )
		{ return 'please enter a single character to count' }
	else {
		for ( let i = 0; i < string.length; i++ ) {
			if ( string[i] === character ) { count += 1 }
		};
		return '\'' + character + '\'' + ' appears in your string ' + count + ' times.';
	};
};

console.log(countChar('The red little beetle came into the park for a picnic.','e'));
