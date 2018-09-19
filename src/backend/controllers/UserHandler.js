'use strict';

const UserSchema = require('../models/user.js');

function UserHandler() {
	this.getPublicInfo = function (req, res) {
    UserSchema
      .findOne({"publicInfo.profile.name" : "John Stans" }, {'publicInfo': true, '_id': false})
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result.publicInfo);
      });
	};
  this.tweetsShowing = function (req, res) {
    UserSchema
      .findOne({"publicInfo.profile.name" : "John Stans" }, {'tweets._id': false})
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result.tweets);
      });
	};
  this.followersShowing = function (req, res) {
    UserSchema
      .aggregate([
        {$project: {_id: 0, 'publicInfo': 1}},
        {$group: { _id:null, publicInfo:{ $push: '$publicInfo'}}},
        {$project: {_id: 0, 'publicInfo': 1}},
      ])
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result[0].publicInfo);
      });
	};
  this.followingShowing = function (req, res) {
    UserSchema
      .aggregate([
        {$project: {_id: 0, 'publicInfo': 1}},
        {$group: { _id:null, publicInfo:{ $push: '$publicInfo'}}},
        {$project: {_id: 0, 'publicInfo': 1}},
      ])
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result[0].publicInfo);
      });
  };
  this.getFollwingTweets = function (req, res) {
    UserSchema
      .aggregate([
        {$project: {_id: 0, 'tweets': 1}},
        {$unwind: '$tweets'},
        {$group: { _id:null, tweets:{ $push: '$tweets'}}},
        {$project: {_id: 0, 'tweets': 1}},
      ])
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result[0].tweets);
      });
	};
}

module.exports = UserHandler;

