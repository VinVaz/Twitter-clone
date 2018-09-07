import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Containers from './website/containers';
import rootReducer from './website/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Containers />
  </Provider>, document.getElementById('root'),
);
