import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import classes from "./ResetPassword.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import UnStyledLink from "../../../../components/Navegation/UnStyledLink/UnStyledLink";
import { resetSchema } from "../../../../validation/FormSchemas";
import { Creators as AuthCreators } from "../../../../store/reducers/auth";
import { Redirect } from "react-router-dom";

const ResetPassword = (props) => {
  const authErrors = useSelector((state) => {
    return state.auth.error;
  });
  const loadingState = useSelector((state) => {
    return state.auth.loading;
  });
  const dispatch = useDispatch();
  const onClearError = () => dispatch(AuthCreators.AuthStart());

  const OnForgotPassword = (email) =>
    dispatch(AuthCreators.ForgotPasswordAsync(email));
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      OnForgotPassword(values.email);
    },
  });

  return (
    <div className={classes.FormContainer}>
      Reset password
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        {authErrors ? (
          typeof authErrors === "object" ? (
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
        {!authErrors && !loadingState ? <Redirect to="/" /> : null}
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
        <FormButton colored="#B5C401" size="35px" type="submit">
          {" "}
          Send Link <VscArrowRight style={{ verticalAlign: "middle" }} />
        </FormButton>
      </form>
      <FormButton size="35px" onClick={onClearError}>
        <UnStyledLink to="/">
          <VscArrowLeft style={{ verticalAlign: "middle" }} /> Back{" "}
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default ResetPassword;
