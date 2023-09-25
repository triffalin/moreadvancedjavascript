// 1. functions & default parameters
function greetUser(userName = 'user') {
	console.log('Hi' + userName + '!');
}

greetUser('Alin'); // Hi Alin!
greetUser(); // Hi undefined without value in parameter, with value => Hi user

function greetUserr(greetingPrefix, userName = 'user') {
	console.log(greetingPrefix + '' + userName + '!');
}

greetUserr('Hi', 'Alin'); // Hi Alin!
greetUserr('Hello'); // Hello user!

// 2. rest parameters & the spread operator
function sumUp(num1, num2, num3) {
	return num1 + num2 + num3;
}

console.log(sumUp(1, 2)); // 1 + 2 + undefined = NaN (not a number)

function sumUpT(num1, num2, num3 = 0) {
	return num1 + num2 + num3;
}

console.log(sumUpT(1, 2)); // 1 + 2 + 0 = 3

function sumUpArray(numbers) {
	let result = 0;

	for (const number of numbers) {
		result += number; // result = result + number
	}

	return result;
}

console.log(sumUpArray([1, 5, 10, 11])); // result = 27

function sumUpRest(...numbers) {
	let result = 0;

	for (const number of numbers) {
		result += number; // result = result + number
	}

	return result;
}

console.log(sumUpRest(1, 5, 10, 11, 20, 31)); // result = 78

function sumUpSpread(...numbers) {
	let result = 0;

	for (const number of numbers) {
		result += number; // result = result + number
	}

	return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUpSpread(...inputNumbers)); // result = 78
