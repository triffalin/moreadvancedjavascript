// 11. asyncronous code and callback functions

const fs = require('fs/promises');

async function readFile() {
	let fileData;

	// fileData = fs.readFile('data.txt', function (error, fileData) {
	// if (error) {
	//     // ...
	// }
	// 	console.log('File parsing done!');
	// 	console.log(fileData.toString());
	// 	// 12. start another async task that sends the data to a database (promises)
	// });

	try {
		fileData = await fs.readFile('data.txt');
	} catch (error) {
		console.log(error);
	}

	console.log('File parsing done!');
	console.log(fileData.toString());
	//return anotherAsyncOperation;
	console.log('Hi there!');
}

readFile();
