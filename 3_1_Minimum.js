// Eloquent Javascript Ch 3 Ex 1
// Use Math.min in a function taking two arguments to return the minimum

const minimum = (a,b) => {
	if (isNaN(a) || isNaN(b)) { return 'Please enter real numbers' }
	else { return Math.min(a,b) }
};

console.log(minimum(5,10));
console.log(minimum(34,12));
console.log(minimum('red','green'));
console.log(minimum('orange',4));
