'use strict';

const path = process.cwd();
const UserSchema = require('../models/user.js');

function TweetsHandler() {
	
  this.getTweets = function(req, res) {
    UserSchema
      .findOne({})
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

