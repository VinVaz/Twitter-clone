import React from 'react';
import { shallow, mount } from 'enzyme';
import connectedApp from '../website/containers/container';
import App from '../website/components/App';
import Containers from '../website/containers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createTweet } from '../website/actions';
import rootReducer from '../website/reducers';


let wrapper, store;
beforeAll(() => {
  store = createStore(rootReducer);
  wrapper = mount(<Provider store={ store }><Containers /></Provider>);
});
it('react/redux should render one container', () => {
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
  it('connected app should have a prop named showTweets', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showTweets');
  });
  it('connected app should have a prop named showWhoFollowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showWhoFollowing');
  });
  it('connected app should have a prop named showFollowers', () => {
    expect(wrapper.find(App).props()).toHaveProperty('showFollowers');
  });
  it('connected app should have a prop named likeButtonPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('likeButtonPressed');
  });
  it('connected app should have a prop named replayTweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('replayTweetPressed');
  });
  it('connected app should have a prop named retweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('retweetPressed');
  });
  it('connected app should have a prop named followButtonPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('followButtonPressed');
  });
});

describe('The connected Application should receive these action creators as props:', () => {
  it('connected app should have a prop named tweet', () => {
    expect(wrapper.find(App).props()).toHaveProperty('createTweet');
  });
  it('connected app should have a prop named search', () => {
    expect(wrapper.find(App).props()).toHaveProperty('searchTwitter');
  });
  it('connected app should have a prop named showTweets', () => {
    expect(wrapper.find(App).props()).toHaveProperty('getTweets');
  });
  it('connected app should have a prop named showWhoFollowing', () => {
    expect(wrapper.find(App).props()).toHaveProperty('getFollowing');
  });
  it('connected app should have a prop named showFollowers', () => {
    expect(wrapper.find(App).props()).toHaveProperty('getFollowers');
  });
  it('connected app should have a prop named likeButtonPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('replyTweet');
  });
  it('connected app should have a prop named replayTweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('retweet');
  });
  it('connected app should have a prop named retweetPressed', () => {
    expect(wrapper.find(App).props()).toHaveProperty('followSomeone');
  });
});
