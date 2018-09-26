

const path = process.cwd();
const UserSchema = require('../models/user.js');
const ObjectId = require('mongoose').Types.ObjectId;
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
	}; */
  this.tweetsShowing = function (req, res) {
    UserSchema
      .find()
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result);
      });
  };
  this.getThreadTweet = function (req, res) {
    const id = '5ba034cb76aa3137dc53eb6f';
    UserSchema
      .aggregate([
        { $project: {
            tweets: {
              $filter: {
                input: '$tweets',
                as: 'tweet',
                cond: {$eq: ['$$tweet._id', ObjectId(id)] },
              }
            }
          }  
        },
        { $unwind: '$tweets' },
        { $group: { _id: null, tweets: { $push: '$tweets' } } },
        { $project: { _id: 0, tweets: 1, } },
        { $unwind: '$tweets' },
      ])
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result[0].tweets);
      });
  };
  this.getThreadReplies = function (req, res) {
    const id = '5ba02f1cc96c2a34cc2e113b';
    UserSchema
      .aggregate([
        { $match: { 'replies.identification': { $eq: ObjectId(id) } } },
        { $project: { _id: 0, replies: 1 } },       
        { $unwind: '$replies' },
        { $group: { _id: null, replies: { $push: '$replies' } } },
        { $project: { _id: 0, 'replies.identification': 0 } },
      ])
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result[0].replies);
      });
  };
  this.getReplies = function (req, res) {
    UserSchema
      .aggregate([
        { $project: { _id: 0, replies: 1 } },
        { $unwind: '$replies' },
        { $group: { _id: null, replies: { $push: '$replies' } } },
        { $project: { _id: 0, replies: 1 } },
      ])
      .exec((err, result) => {
        if (err) { throw err; }
        res.json(result[0].replies);
      });
  };
}

module.exports = TweetsHandler;
