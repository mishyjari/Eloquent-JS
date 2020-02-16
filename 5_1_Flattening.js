// Eloquent JS Ch. 5 Ex. 1
// Use reduce and concat methods to flatten and array of arrays into a single array that has all the elements of the original arrays

const array = [[1,2,3],[4,5,6],[7,8,9]];

const flatten = (arr) => {
	const output = reduce(arr, (a,b) => arr[a].concat(arr[b]))
};

console.log(flatten(array))
