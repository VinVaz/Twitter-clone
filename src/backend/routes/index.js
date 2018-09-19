'use strict';

const UserServer = require('../controllers/UserHandler.js');
const TweetsServer = require('../controllers/TweetsHandler.js');
const path = process.cwd();

module.exports = function(app){
	const userServer = new UserServer();
  const tweetsServer = new TweetsServer();
	
  app.get('/api/user/info', userServer.getPublicInfo);
  app.get('/api/user/tweets', userServer.tweetsShowing);
  app.get('/api/user/followers/info', userServer.followersShowing);
  app.get('/api/user/following/info', userServer.followingShowing);
  app.get('/api/user/following/tweets', userServer.getFollwingTweets);
  app.get('/api/user/tweet/replies', tweetsServer.getReplies);
};