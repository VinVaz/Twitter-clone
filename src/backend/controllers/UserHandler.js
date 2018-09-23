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
  this.getUserTweets = function (req, res) {
    UserSchema
      .findOne({"publicInfo.profile.name" : "John Stans" }, {'tweets._id': false})
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result.tweets);
      });
	};
  this.getFollowers = function (req, res) {
    UserSchema
      .aggregate([
        {$match: {"following.userName" : '@jojohn'}},
        {$project: {_id: 0, 'publicInfo': 1}},
        {$group: { _id:null, publicInfo:{ $push: '$publicInfo'}}},
        {$project: {_id: 0, 'publicInfo': 1}},
      ])
      .exec(function (err, result) {
        if(err){throw err;}
        res.json(result[0].publicInfo);
      });
	};
  this.getFollowing = function (req, res) {
    UserSchema
      .aggregate([
        {$match: {"followers.userName" : '@jojohn'}},
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
        {$match: {"followers.userName" : '@jojohn'}},
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
  this.followUser = function (req, res) {
    const userName = req.body.userName;
    UserSchema
      .findOneAndUpdate(
        {"publicInfo.profile.name" : "John Stans" }, 
        {$addToSet: {"followers.userName": userName}}
      ).exec(function (err, result) {
        if(err){throw err;}
        res.json(result[0].tweets);
      });
	};
}

module.exports = UserHandler;

