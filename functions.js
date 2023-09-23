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
