import React from "react";
import { useFormik } from "formik";
import { useDispatch,useSelector } from "react-redux";
import classes from "./NewPassword.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { newPasswordSchema } from "../../../../validation/FormSchemas";
import { Creators as AuthCreators } from "../../../../store/reducers/auth";
import {Redirect} from "react-router-dom"
const NewPassword = (props) => {
  const authErrors = useSelector((state) => {
    return state.auth.error;
  });
  const successState = useSelector(state=>{return state.auth.success})
  const dispatch = useDispatch();
  const onUpdatePassword = (password, confirmation, token) =>
    dispatch(AuthCreators.ResetPasswordAsync(password, confirmation, token));
  const parsedQueryParams = new URLSearchParams(props.location.search);
  const token = parsedQueryParams.get("token");
  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit: (values) => {
      onUpdatePassword(values.password, values.password_confirmation, token);
      
    },
  });

  return (
    <div className={classes.FormContainer}>
      Update your password
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        {!authErrors && successState ? <Redirect to="/" /> : null}
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
        <FormButton colored="#B5C401" size="35px" type="submit">
          {" "}
          Confirm
        </FormButton>
      </form>
    </div>
  );
};

export default NewPassword;
