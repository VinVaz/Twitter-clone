

const UserSchema = require('../models/user.js');

function UserHandler() {
  this.getPublicInfo = function (req, res) {
    const userName = req.params.user;
    UserSchema
      .findOne({ 'publicInfo.profile.userName': userName }, { publicInfo: true, _id: false })
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result.publicInfo);
      });
  };
  this.getUserTweets = function (req, res) {
    const userName = req.params.user;
    UserSchema
      .findOne({ 'publicInfo.profile.userName': userName }, { 'tweets._id': false })
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result.tweets);
      });
  };
  this.getFollowers = function (req, res) {
    const userName = req.params.user;
    UserSchema
      .aggregate([
        { $match: { 'following.userName': userName } },
        { $project: { _id: 0, publicInfo: 1 } },
        { $group: { _id: null, publicInfo: { $push: '$publicInfo' } } },
        { $project: { _id: 0, publicInfo: 1 } },
      ])
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result[0].publicInfo);
      });
  };
  this.getFollowing = function (req, res) {
    const userName = req.params.user;
    UserSchema
      .aggregate([
        { $match: { 'followers.userName': userName } },
        { $project: { _id: 0, publicInfo: 1 } },
        { $group: { _id: null, publicInfo: { $push: '$publicInfo' } } },
        { $project: { _id: 0, publicInfo: 1 } },
      ])
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result[0].publicInfo);
      });
  };
  this.getFollwingTweets = function (req, res) {
    UserSchema
      .aggregate([
        { $match: { 'followers.userName': '@jojohn' } },
        { $project: { _id: 0, tweets: 1 } },
        { $unwind: '$tweets' },
        { $group: { _id: null, tweets: { $push: '$tweets' } } },
        { $project: { _id: 0, tweets: 1 } },
      ])
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result[0].tweets);
      });
  };
  this.followUser = function (req, res) {
    const userName = req.body.userName;
    const loggedUser = '@jojohn';

    UserSchema
      .findOneAndUpdate(
        { 'publicInfo.profile.userName': loggedUser },
        { $addToSet: { following: { userName } } },
      ).exec((err, result) => {
        if (err) { throw err; }
      });
    UserSchema
      .findOneAndUpdate(
        { 'publicInfo.profile.userName': userName },
        { $addToSet: { followers: { userName: loggedUser } } },
      ).exec((err, result) => {
        if (err) { throw err; }
        res.json(result);
      });
  };
}

module.exports = UserHandler;
