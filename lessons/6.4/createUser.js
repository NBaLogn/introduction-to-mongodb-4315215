db.createUser({
	user: 'taco',
	pwd: passwordPrompt(),
	roles: [
		{ role: 'userAdminAnyDatabase', db: 'admin' },
		'readWriteAnyDatabase',
	],
});
