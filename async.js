// 11. asyncronous code and callback functions

const fs = require('fs/promises');

function readFile() {
	let fileData;

	// fileData = fs.readFile('data.txt', function (error, fileData) {
	// if (error) {
	//     // ...
	// }
	// 	console.log('File parsing done!');
	// 	console.log(fileData.toString());
	// 	// 12. start another async task that sends the data to a database (promises)
	// });

	fs.readFile('data.txt')
		.then(function (fileData) {
			console.log('File parsing done!');
			console.log(fileData.toString());
			//return anotherAsyncOperation;
		})
		.then(function () {})
		.catch(function (error) {
			console.log(error);
		});

	console.log('Hi there!');
}

readFile();
