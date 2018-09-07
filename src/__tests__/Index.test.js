import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../website/components/App';
import { createTweet } from '../website/actions';
import rootReducer from '../website/reducers';

const initialState = { output: 100 };
const mockStore = configureStore();

it('react should render the aplication', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toEqual('Welcome to React');
});

describe('react and redux integration', () => {
  let wrapper; let
    store;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><App /></Provider>);
  });
  it('react redux should render the application', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });
});

it('reducer should be into the store and receive dispatch', () => {
  const testingText = 'fhsldkjfh';
  const store = createStore(rootReducer);
  store.dispatch(createTweet(testingText));
  expect(store.getState().tweet).toEqual(testingText);
});
