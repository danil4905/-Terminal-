import React from 'react';
import { connect } from 'react-redux';
import CheckList from "./CheckList";
import { sendRequestCreator } from '../../Redux/reducer';
import { withRouter } from 'react-router-dom';

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
let CurretnPage = withRouter(CheckList)
export default connect(mapStateToProps, mapDispatchToProps)(CurretnPage);
