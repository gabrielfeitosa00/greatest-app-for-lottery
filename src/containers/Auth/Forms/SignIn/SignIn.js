import React from "react";
import { useFormik } from "formik";
import classes from "./SignIn.module.css";
import FormButton from '../../../../components/UI/StyledComponents/StyledButton';
import FormInput from '../../../../components/UI/StyledComponents/StyledInput' 




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

  

  return (
    <div className={classes.FormContainer}>
        Authentication
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        <FormInput
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        <FormInput
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        />
        <p>I forgot my password</p>
        <FormButton type="submit"> Log In {">"}</FormButton>
      </form>
      <FormButton>SignUp {'=>'}</FormButton>
    
    </div>
  );
};

export default SignIn;
