import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';

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
  showDrawer,
  hideDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
