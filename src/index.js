import React from 'react';
import ReactDOM from 'react-dom';
import Containers from './website/containers';
import rootReducer from './website/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <Containers />, document.getElementById('root'),
  </Provider>
);
