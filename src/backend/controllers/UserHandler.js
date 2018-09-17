'use strict';

const path = process.cwd();
const UserSchema = require('../models/user.js');
const UserExample = require('../models/UserExample.js');

function UserHandler() {
	this.getUser = function(req, res) {
    UserSchema
      .findOne({})
      .exec(function(err, result){
        if(err){throw err;}
        res.json(result);
      });
	};
}

module.exports = UserHandler;

