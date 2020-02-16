// Eloquent Javascript Chapter 4, Exercise 3
// 1. Create a function arrayToList() that takes an array and returns the array as a list in the form of nested objects
// 2. Create a function listToArray() that takes that object and returns an list in the foform of nested objects
// 3. Add a helper function prepend() that takes an element and a list object and creates a new list object that adds the element to the front of the input object
// 4. Write a recursive function nth() that takes a list and a number and returns the element at the given position in the list (0 as first element).

const array = [1,2,3];

const list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null
		}
	}
};

const arrayToList = (arr) => {
	let head = { value: arr[0], next: null }; // define head with first index in array
	let current = head;
	const nextNode = () => { current = current.next }; // function called from within the loop to effect the value of current in proper scope
	for ( let i = 1; i < arr.length; i++ ) // loop over the array beginning with second index
	{
		current.next = { value: arr[i], next: null } // define the next node at inde with a new node
		nextNode();
	};
	return head;
};
console.log(arrayToList(array));

const listToArray = (obj) => {
	const output = [];
	// i set to obj head
	let i = obj;	
	// next is not null, push value and iterate i
	while( i.next ) {
		output.push( i.value );
		i = i.next;
	}
	// next is null, push current value
	if ( !i.next ) { output.push( i.value ) }
	
	return output;
		
};
console.log(listToArray(list));

const prepend = (obj,element) => {
	obj = { value: element,
		next: obj
		};
	return obj;
};

console.log(prepend(list,0));

console.log(list);

const nth = (obj,n) => {
	let counter = obj;
	for ( let i = 0; i < n; i++ ) {
		if ( obj.next ) { obj = obj.next; }
		else { console.log('Index Exceeds List Length'); break; }
	};
	console.log(obj.value);
};

nth(list,1);
nth(list,3);
