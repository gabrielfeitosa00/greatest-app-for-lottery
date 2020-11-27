import React from "react";
import { useFormik } from "formik";
import classes from "./ResetPassword.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import UnStyledLink from "../../../../components/Navegation/UnStyledLink/UnStyledLink";
import { resetSchema } from "../../../../validation/FormSchemas";

const ResetPassword = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: resetSchema,
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
        {formik.errors.email ? (
          <p className={classes.Errors}>{formik.errors.email}</p>
        ) : null}
        <FormButton colored size="35px" type="submit">
          {" "}
          Send Link <VscArrowRight style={{ verticalAlign: "middle" }} />
        </FormButton>
      </form>
      <FormButton size="35px">
        <UnStyledLink to="/">
          <VscArrowLeft style={{ verticalAlign: "middle" }} /> Back{" "}
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default ResetPassword;
