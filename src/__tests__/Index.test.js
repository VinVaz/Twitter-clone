import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';

it('render a document title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toEqual("Welcome to React");
});
