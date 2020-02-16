// Eloquent Javascript Ch 4 Ex 1
// 1. Write a range function that takes two arguments, start and end and returns an array of all numbers from start to (including) end
// 2. Write a sum function that takes an array of numbers an returns the sum
// 3. Modify range with optional third argument that adds in steps, eg., range(1,7,2) should return the array [1,3,5,7] and (1,7,-2) should return [7,5,3,1]

const range = (start,end,step=1) => {
	if ( isNaN(start) || isNaN(end) || isNaN(step) ) // Make sure args are numbers 
		{ return 'Error: please input numbers only'; }
	else {
		let output = [];
		if ( step < 0 ) { // Handle negative step, iterate from end to beginning
			for ( i = end; i >= start; i -= Math.abs(step) ) {
				output.push(i);
			}
		} else { // Handle default or positive step
			for ( i = start; i<= end; i += step ) {
				output.push(i);
			}
		};
		return output;
	};
	
};


const sum = (arr) => {
	let output = 0;
	if (Array.isArray(arr)) { // Make sure arg is an array
		arr.forEach(num => { 
			if ( isNaN(num) ) { 
				console.log('Error at index ' + arr.indexOf(num) + ': not a number') // Ignore any non-numbers and log error
			} else {
				output += num; // Add each index to output number
				}
		});
		return output;
	}
	else { return 'Function \'sum()\' requires an array!' }
};

console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(sum([1,2,3,'blue',4,5]));
console.log(sum('red'));
console.log(range(1,10,2));
console.log(range(1,10,-2));
