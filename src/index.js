import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import registerServiceWorker from "./registerServiceWorker";

import "typeface-roboto";

import configureStore from './store/configureStore';

import RootContainer from "./containers/RootContainer";
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";

let store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route path="/main" component={RootContainer} />
        </Switch>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);

registerServiceWorker();