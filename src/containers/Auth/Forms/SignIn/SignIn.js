import React from "react";
import { useFormik } from "formik";
import classes from "./SignIn.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight } from "react-icons/vsc";
import UnStyledLink from "../../../../components/Navegation/UnStyledLink/UnStyledLink";
import { signInSchema } from "../../../../validation/FormSchemas";
import { useSelector,useDispatch } from "react-redux";
import { Creators as AuthCreators } from "../../../../store/reducers/auth";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const isAuth = useSelector(state=>state.auth.isAuth)
  const dispatch = useDispatch()
  const onSignin = (email, password) => dispatch(AuthCreators.SignInAsync(email, password))
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      onSignin(values.email, values.password);
    },
  });

  return (
    <div className={classes.FormContainer}>
      {isAuth && <Redirect to="/home" />}
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
        {formik.errors.email ? (
          <p className={classes.Errors}>{formik.errors.email}</p>
        ) : null}
        <FormInput
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.errors.password ? (
          <p className={classes.Errors}>{formik.errors.password}</p>
        ) : null}
        <p>
          <UnStyledLink to="/reset">I forgot my password</UnStyledLink>
        </p>
        <FormButton colored='#b5c401' size="35px" type="submit">
          {" "}
          Log In <VscArrowRight style={{ verticalAlign: "middle" }} />
        </FormButton>
      </form>
      <FormButton size="35px">
        <UnStyledLink to="/register">
          SignUp <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
        </UnStyledLink>
      </FormButton>
    </div>
  );
};


export default SignIn;
