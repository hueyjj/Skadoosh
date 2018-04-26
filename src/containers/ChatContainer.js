import React from 'react';
import { connect } from 'react-redux';

import Chat from '../components/main/Chat';

const ChatContainer = props => <Chat {...props} />;

const mapStateToProps = (state) => {
//   const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);