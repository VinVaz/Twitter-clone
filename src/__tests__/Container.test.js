import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import connectedApp from '../website/containers/container';
import App from '../website/App';
import Containers from '../website/containers';
import { createTweet } from '../website/actions';
import rootReducer from '../website/reducers';


let wrapper; let
  store;
beforeAll(() => {
  store = createStore(rootReducer);
  wrapper = mount(<Provider store={store}><Containers /></Provider>);
});
it('react/redux should render at least one container', () => {
  expect(wrapper.find(Containers)).toHaveLength(1);
});
it('react/redux should connect to the application', () => {
  expect(wrapper.find(connectedApp)).toHaveLength(1);
});
describe('The connected Application should receive these props from state:', () => {
  it('connected app should have a prop named tweet', () => {
    expect(wrapper.find(App).props()).toHaveProperty('tweet');
  });
  it('connected app should have a prop named search', () => {
    expect(wrapper.find(App).props()).toHaveProperty('search');
  });
  it('connected app should have a prop named loginPageShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('loginPageShowing');
  });
  it('connected app should have a prop named unloggedPageShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('unloggedPageShowing');
  });
  it('connected app should have a prop named loggedPagesShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('loggedPagesShowing');
  });
  it('connected app should have a prop named tweetsShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('tweetsShowing');
  });
  it('connected app should have a prop named followingShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('followingShowing');
  });
  it('connected app should have a prop named followersShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('followersShowing');
  });
  it('connected app should have a prop named homePageShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('homePageShowing');
  });
  it('connected app should have a prop named likeButtonPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('likeButtonPressed');
  });
  it('connected app should have a prop named replyTweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('replyTweetPressed');
  });
  it('connected app should have a prop named retweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('retweetPressed');
  });
  it('connected app should have a prop named followButtonPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('followButtonPressed');
  });
  it('connected app should have a prop named threadShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('threadShowing');
  });
  it('connected app should have a prop named backgroundIsHidden', () => {
    expect(wrapper.find(App).props()).toHaveProperty('backgroundIsHidden');
  });
  it('connected app should have a prop named newTweetsButtonShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('newTweetsButtonShowing');
  });
  it('connected app should have a prop named profileBoxShowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('profileBoxShowing');
  });
  it('connected app should have a prop named loggedUser', () => {
    expect(wrapper.find(App).props()).toHaveProperty('loggedUser');
  });
  it('connected app should have a prop named userOnSight', () => {
    expect(wrapper.find(App).props()).toHaveProperty('userOnSight');
  });
});

describe('The connected Application should receive these action creators as props:', () => {
  it('connected app should have a prop named tweet', () => {
    expect(wrapper.find(App).props()).toHaveProperty('createTweet');
  });
  it('connected app should have a prop named search', () => {
    expect(wrapper.find(App).props()).toHaveProperty('searchTwitter');
  });
  it('connected app should have a prop named showLoginPage', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showLoginPage');
  });
  it('connected app should have a prop named showUnloggedPage', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showLoginPage');
  });
  it('connected app should have a prop named showHomePage', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showHomePage');
  });
  it('connected app should have a prop named showLoggedPages', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showLoggedPages');
  });
  it('connected app should have a prop named showTweets', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showTweets');
  });
  it('connected app should have a prop named showFollowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showFollowing');
  });
  it('connected app should have a prop named showFollowers', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showFollowers');
  });
  it('connected app should have a prop named likeButtonPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('replyTweet');
  });
  it('connected app should have a prop named replyTweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('retweet');
  });
  it('connected app should have a prop named retweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('followSomeone');
  });
  it('connected app should have a prop named showThread', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showThread');
  });
  it('connected app should have a prop named handleNewTweets', () => {
    expect(wrapper.find(App).props()).toHaveProperty('handleNewTweets');
  });
  it('connected app should have a prop named showBackground', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showBackground');
  });
  it('connected app should have a prop named showCreateNewTweet', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showCreateNewTweet');
  });
  it('connected app should have a prop named handleProfileBox', () => {
    expect(wrapper.find(App).props()).toHaveProperty('handleProfileBox');
  });
   it('connected app should have a prop named setLoggedUser', () => {
    expect(wrapper.find(App).props()).toHaveProperty('setLoggedUser');
  });
  it('connected app should have a prop named setUserOnSight', () => {
    expect(wrapper.find(App).props()).toHaveProperty('setUserOnSight');
  });
});
