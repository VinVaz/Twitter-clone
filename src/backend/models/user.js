'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  privateInfo: {
    id: String,
    email: String,
    password: String,
  },
  publicInfo: {
    numberOfTweets: Number,
    followingNumber: Number,
    numberOfFollowers: Number,
    profile: {
      picture: String,
      userName: String,
      name: String,
    }
  },
  tweets: [{
    time: Date,
    content: String,
    likes: Number,
    numberOfReplies: Number,
    numberOfRetweets: Number,
  }],
  replies:[{
      _id: false,
      identification: Schema.Types.ObjectId,
      time: Date,
      content: String,
      likes: Number,
  }],
  following: [{
    _id: false,
    identification: Schema.Types.ObjectId,
  }],
  followers: [{
    _id: false,
    identification: Schema.Types.ObjectId,
  }],
});

module.exports = mongoose.model('User', UserSchema);
