import React from "react";
import { useFormik } from "formik";
import classes from "./ResetPassword.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import UnStyledLink from "../../../../components/UI/UnStyledLink/UnStyledLink";

const ResetPassword = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={classes.FormContainer}>
      Reset password
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        <FormInput
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />

        <FormButton type="submit">
          {" "}
          Send Link <VscArrowRight style={{ "vertical-align": "middle" }} />
        </FormButton>
      </form>
      <FormButton>
        <UnStyledLink to="/">
          <VscArrowLeft style={{ "verticalAlign": "middle" }} /> Back{" "}
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default ResetPassword;
