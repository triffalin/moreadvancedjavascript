// 5. primitive vs reference values
const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored
const age = 32; // the value itself is stored

hobbies.push('Reading'); // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping']; // not allowed! new address is stored

console.log(hobbies);

// Primitive values: numbers, string, booleans & more (undefined)
// Reference values: Objects

const person = { age: 32 };

function getAdulYears(p) {
	p.age -= 18;
	return p.age;
}

console.log(getAdulYears(person)); // result = 14
console.log(person); // result = { age: 14 }
