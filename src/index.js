import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import registerServiceWorker from "./registerServiceWorker";

import "typeface-roboto";

import configureStore from './store/configureStore';
import RootContainer from "./containers/RootContainer";
import SignupContainer from "./containers/SignupContainer";
import HomeContainer from "./containers/HomeContainer";

let store = configureStore();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {/* TODO Check if user is logged in and has valid session token, then route to Home or Signup page */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/main" component={RootContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);

registerServiceWorker();