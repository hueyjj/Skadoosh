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

import {
  fetchProfile,
} from "../actions/ProfileActions";

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const {
    drawer,
    settings,
    profile,
  } = state;

  return {
    drawer,
    settings,
    profile,
  }
};

const mapDispatchToProps = {
  fetchLogout,
  showDrawer,
  hideDrawer,
  fetchProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
