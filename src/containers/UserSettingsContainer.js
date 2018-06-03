import React from 'react';
import { connect } from 'react-redux';

import UserSettings from '../components/main/UserSettings';

import {
  setTheme,
} from "../actions/SettingsActions";

const UserSettingsContainer = props => <UserSettings {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
  setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsContainer);