// Eloquent Javascript Ch. 2, Ex. 2
// Log numbers from 1 to n. If divisible by 3, log 'Fizz'. If by 5, log 'Buzz'. If by both, log 'FizzBuzz'

// fizzBizz() returns each value on a new line
const fizzBuzz = (n) => {
	for ( let i = 1; i < n; i++ ) {
		if ( i % 3 == 0 && i % 5 == 0 )
			{ console.log('FizzBuzz '); }
		else if ( i % 3 == 0 && i % 5 != 0 )
			{ console.log('Fizz '); }
		else if ( i % 3 != 0 && i % 5 == 0 )
			{ console.log('Buzz '); }
		else { console.log(i + ' ') }
	}
};

// But what if I want a string? 
const fizzyString = (n) => {
	let output = '';
	for ( let i = 1; i < n; i++ ) {
		if ( i % 3 == 0 && i % 5 == 0 ) { output += 'FizzBuzz '; }
		else if ( i % 3 == 0 && i % 5 != 0 ) { output += 'Fizz '; }
		else if ( i % 3 != 0 && i % 5 == 0 ) { output += 'Buzz '; }
		else { output += i.toString() + ' '; }
	};
	console.log(output);
};

fizzyString(100);
