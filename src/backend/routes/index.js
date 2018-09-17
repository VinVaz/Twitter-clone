'use strict';

const UserServer = require('../controllers/UserHandler.js');
const path = process.cwd();

module.exports = function(app){
	let userServer = new UserServer();
	
	app.get('/api/user', userServer.getUser);
};