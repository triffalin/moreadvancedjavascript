// 8. introducing classes as objects blueprints

// const job = {
// 	title: 'Developer',
// 	location: 'New York',
// 	salary: 50000,
// };

// console.log(new Date().toISOString());

// const job2 = {
// 	title: 'Cook',
// 	location: 'Munich',
// 	salary: 35000,
// };

class Job {
	constructor(jobTitle, place, salary) {
		this.title = jobTitle;
		this.location = place;
		this.salary = salary;
	}
	// 9a. classes and methods(this)
	describe() {
		console.log(
			`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
		);
	}
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);
console.log(developer); // => Job { title: 'Developer', location: 'New York', salary: 50000 }
console.log(cook); // => Job { title: 'Cook', location: 'Munich', salary: 35000 }
// 9b. call classes and methods(this)
developer.describe();
cook.describe();
