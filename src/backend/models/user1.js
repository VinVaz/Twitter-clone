module.exports = {
  privateInfo: { email: 'john@gmail.com', password: 'ary432' },
  publicInfo: {
    profile: { picture: 'john.jpg', userName: '@jojohn', name: 'John Stans' }, numberOfTweets: 13, followingNumber: 145, numberOfFollowers: 56,
  },
  _id: '5ba034cb76aa3137dc53eb6e',
  tweets: [{
    _id: '5ba034cb76aa3137dc53eb70', time: '2018-09-17T23:12:07.640Z', content: 'Today is great day!', likes: 3, numberOfReplies: 1, numberOfRetweets: 0,
  }, {
    _id: '5ba034cb76aa3137dc53eb6f', time: '2018-09-17T23:12:07.640Z', content: 'Why everybody loves coffee!', likes: 0, numberOfReplies: 2, numberOfRetweets: 0,
  }],
  replies: [{
    identification: '5ba02f1cc96c2a34cc2e113b', time: '2018-09-17T23:12:07.640Z', content: 'Yes indeed Sir', likes: 0,
  }, {
    identification: '5ba02f1cc96c2a34cc2e113b', time: '2018-09-17T23:12:07.640Z', content: 'Because it is good', likes: 23,
  }, {
    identification: '5ba02f1cc96c2a34cc2e113a', time: '2018-09-17T23:12:07.640Z', content: 'It keeps me awaked', likes: 12,
  }],
  following: [{ userName: '@carolz' }, { userName: '@juaOrtg' }],
  followers: [{ userName: '@carolz' }, { userName: '@juaOrtg' }],
  __v: 0,
};
