// Eloquent Javascript Ch 3 Ex 2
// Create a recursive function to check if a number is even without using % based on the principle:
// Zero is even, one is odd, any other number N has the same evenness as N - 2
// Return a boolean

const isEven = (n) => {
	if ( !Number.isInteger(n) ) { return 'please enter an integer' }
	if ( n < 0 ) { n *= n; }
	if ( n == 0 ) { return true; }
	else if ( n == 1 ) { return false; }
	else { return isEven(n-2) };
};

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven('red'));
console.log(isEven(-1));
console.log(isEven(2.4));
