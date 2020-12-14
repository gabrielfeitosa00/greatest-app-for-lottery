import React from "react";

import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import classes from "./SignUp.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import UnStyledLink from "../../../../components/Navegation/UnStyledLink/UnStyledLink";
import { signUpSchema } from "../../../../validation/FormSchemas";
import { Creators as AuthCreators } from "../../../../store/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const OnSignUp = (username, email, password, password_confirmation) =>
    dispatch(
      AuthCreators.SignUpAsync(username, email, password, password_confirmation)
    );
  const onClearError = () => dispatch(AuthCreators.AuthStart());
  const authErrors = useSelector((state) => {
    return state.auth.error;
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      OnSignUp(
        values.name,
        values.email,
        values.password,
        values.password_confirmation
      );
      // will remove redirect for now, it doesn't work well with the errors :(
      // if(!authErrors){
      //   props.history.push("/")
      // }
    },
  });

  return (
    <div className={classes.FormContainer}>
      Registration
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        {authErrors ? (
          typeof authErrors==='object'? (
            authErrors.map((errorItem, index) => (
              <p
                key={index}
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {errorItem}
              </p>
            ))
          ) : (
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {authErrors}
            </p>
          )
        ) : null}
        <FormInput
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.errors.name ? (
          <p className={classes.Errors}>{formik.errors.name}</p>
        ) : null}
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
        <FormInput
          name="password_confirmation"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password_confirmation}
          placeholder="Password Confirmation"
        />
        {formik.errors.password_confirmation ? (
          <p className={classes.Errors}>
            {formik.errors.password_confirmation}
          </p>
        ) : null}

        <FormButton colored="#b5c401" type="submit" size="35px">
          {" "}
          Register <VscArrowRight style={{ verticalAlign: "middle" }} />
        </FormButton>
      </form>
      <FormButton onClick={onClearError} size="35px">
        <UnStyledLink to="/">
          <VscArrowLeft style={{ verticalAlign: "middle" }} />
          Back
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default SignUp;
