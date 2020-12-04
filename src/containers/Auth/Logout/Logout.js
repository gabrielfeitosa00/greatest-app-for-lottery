import React, { useEffect,useCallback } from "react";
import { Creators as AuthCreators } from  "../../../store/reducers/auth" ;
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  const dispatch = useDispatch()
  const onLogout = useCallback (()=>dispatch(AuthCreators.LogoutAsync()),[dispatch])
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/"/>;
};

export default Logout;
