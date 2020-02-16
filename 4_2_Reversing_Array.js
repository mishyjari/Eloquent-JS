// Eloquent Javascript Ch 4 Ex 2
// Write two functions: reverseArray() and reverseArrayInPlace(). The first should take an array as an argument and output a new array with the elements reversed in order. The second should return the input array with the elements reversed. Neither may use the reverse() method

let testArr = ['first','second','third','fourth','fifth'];
const testArrConst = ['one','two','three','four','five'];

const reverseArray = (arr) => {
	let output = [];
	if ( Array.isArray(arr) ) { // make sure input arg is an array
		for ( i = arr.length-1; i >= 0; i-- ) { // Iterate backwards against input array and push that result to output array
			output.push(arr[i]);
		}
	} else { return 'Please enter an array as an argument!'; };
	return output;
}

const reverseArrayInPlace = (arr) => {
	let output = []; // This time output is used as a holder
	const writeArr = (readArr) => { // When input and output arrays are equal in length, replace the content of input array with that out the output holder
		for ( i = 0; i < readArr.length; i++ ) {
			arr[i] = readArr [i];
		};
	};
	if (Array.isArray(arr) ) { // Make sure arr is an array
		for ( i = arr.length-1; i >= 0; i-- ) { // Iterate backwards and push into the holder array
			output.push(arr[i]);
			if ( arr.length == output.length ) { writeArr(output) } // call the function to write the holder array to the input array once all elements have been pushed
		};
	}; return arr;
};

console.log('testArr: ' + testArr);
console.log('reverseArr(inputArr) >> ' + reverseArray(testArr));
console.log('testArr: ' + testArr);
console.log('reverseArrayInPlace(testArr) >> ' + reverseArrayInPlace(testArr));
console.log('testArr: ' + testArr);
console.log('testArrConst: ' + testArrConst);
console.log('reverArrayInPlace(testArrConst) >> ' + reverseArrayInPlace(testArrConst));
console.log('testArrConst: ' + testArrConst);
