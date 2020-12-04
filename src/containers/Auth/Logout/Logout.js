import React, { useEffect,useCallback } from "react";
import { LogoutAsync } from  "../../../store/actions/index" ;
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  const dispatch = useDispatch()
  const onLogout = useCallback (()=>dispatch(LogoutAsync()),[dispatch])
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/"/>;
};

export default Logout;
