import React from 'react';
import { connect } from "react-redux";
import { withRouter, Redirect } from 'react-router-dom';

import { deleteSession } from "../../store/system/actions";
import { emptyCart } from "../../store/cart/actions";
import { SystemState } from '../../store/system/types';
import { AppState } from '../../store';

interface SignoutProps {
  deleteSession: typeof deleteSession;
  emptyCart: typeof emptyCart;
  system: SystemState;
}

class Signout extends React.Component<SignoutProps> {
  render() {
    if(this.props.system.loggedIn){
      this.props.emptyCart();
      this.props.deleteSession();
      return (< Redirect to={{ pathname: "/" }} />)
    } else {
      return (< Redirect to={{ pathname: "/" }} />)
    }
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default withRouter(connect(
  mapStateToProps,
  { deleteSession, emptyCart }
)(Signout));
