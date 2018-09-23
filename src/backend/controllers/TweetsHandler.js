'use strict';

const path = process.cwd();
const UserSchema = require('../models/user.js');
const user1 = require('../models/user1.js');
const user2 = require('../models/user2.js');
const user3 = require('../models/user3.js');

function TweetsHandler() {
	/*
   this.save = function(req, res) {
    let newUser = new UserSchema(user3);
    newUser
      .save(function(err){
        if(err) throw err;
      })
      res.redirect('/')
	};*/
  this.tweetsShowing = function(req, res) {
    UserSchema
      .findOne({"publicInfo.profile.name" : "Juan Ortega" })
      .exec(function(err, result){
        if(err){throw err;}
        res.json(result);
      });
	};
  this.getReplies = function(req, res) {
    UserSchema
      .aggregate([
        {$project: {_id: 0, 'replies': 1}},
        {$unwind: '$replies'},
        {$group: { _id:null, replies:{ $push: '$replies'}}},
        {$project: {_id: 0, 'replies': 1}},
      ])
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result[0].replies);
      });
	};
}

module.exports = TweetsHandler;

