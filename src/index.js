import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import RootContainer from "./containers/RootContainer";

import registerServiceWorker from "./registerServiceWorker";

let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();