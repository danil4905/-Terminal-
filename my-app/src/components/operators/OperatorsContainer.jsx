import React from 'react';
import { connect } from 'react-redux';
import Operators from "./Operators";
import { sendRequestCreator } from '../../Redux/reducer';
let mapStateToProps = (state) => {
  return {
    operators: state.operators
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSendRequestClick: () => {
      dispatch(sendRequestCreator());
    },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Operators);
