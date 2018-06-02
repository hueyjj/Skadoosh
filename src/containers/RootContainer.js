import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';

import {
  fetchLogout,
} from "../actions/AuthActions";
import {
  showDrawer,
  hideDrawer,
} from "../actions/DrawerActions";

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { drawer } = state;

  return {
    drawer,
  }
};

const mapDispatchToProps = {
  fetchLogout,
  showDrawer,
  hideDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
