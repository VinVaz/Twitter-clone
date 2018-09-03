import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

//const store = createStore(rootReducer);
 
ReactDOM.render(
  <div>
    "Just a test"
    <Provider>
  
    </Provider>, document.getElementById('root')
  </div>
);