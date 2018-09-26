

const bodyParser = require('body-parser');
const UserServer = require('../controllers/UserHandler.js');
const TweetsServer = require('../controllers/TweetsHandler.js');

const path = process.cwd();

module.exports = function (app) {
  app.use(bodyParser.json());
  const userServer = new UserServer();
  const tweetsServer = new TweetsServer();


  app.get('/api/:user/info', userServer.getPublicInfo);
  app.get('/api/:user/tweets', userServer.getUserTweets);
  app.get('/api/:user/followers/info', userServer.getFollowers);
  app.get('/api/:user/following/info', userServer.getFollowing);
  app.get('/api/:user/following/tweets', userServer.getFollwingTweets);
  app.get('/api/:user/tweet/replies', tweetsServer.getReplies);
  //app.get('/api/tweets', tweetsServer.tweetsShowing);
  app.get('/api/thread/:id/tweet', tweetsServer.getThreadTweet);
  app.get('/api/thread/:id/replies', tweetsServer.getThreadReplies);

  // app.get('/api/save', tweetsServer.save);

  app.post('/api/:user/action/follow', userServer.followUser);
};
