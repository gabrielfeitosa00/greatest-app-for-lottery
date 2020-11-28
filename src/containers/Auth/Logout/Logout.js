import React, { useEffect } from "react";
import { LogoutAsync } from  "../../../store/actions/index" ;
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  const { onLogout } = props;
  useEffect(() => {
    onLogout();
    console.log('CU')
  }, [onLogout]);

  return <Redirect to="/"/>;
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(LogoutAsync()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
