import React from "react";
import { useFormik } from "formik";
import classes from "./SignIn.module.css";
import styled from "styled-components";

const SignIn = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const StyledSubmitButton = styled.button`
    background-color: transparent;
    border: none;
    color: #b5c401;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-style:italic;
    font-size: 35px;
  `;
  const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    padding: 20px 10px;
    border-bottom:solid 2px #EBEBEB;
    font:italic bold 17px/70px;
    color:#9D9D9D;
  `;
  return (
    <div className={classes.FormContainer}>
        Authentication
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        <StyledInput
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        <StyledInput
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        />
        <p>I forgot my password</p>
        <StyledSubmitButton type="submit"> Log In {">"}</StyledSubmitButton>
      </form>
      <StyledSubmitButton>SignUp {'=>'}</StyledSubmitButton>
    
    </div>
  );
};

export default SignIn;
