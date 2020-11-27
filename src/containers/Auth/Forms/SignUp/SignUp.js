import React from "react";
import { useFormik } from "formik";
import classes from "./SignUp.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import UnStyledLink from "../../../../components/Navegation/UnStyledLink/UnStyledLink";
import {signUpSchema} from "../../../../validation/FormSchemas";

const SignUp = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema:signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={classes.FormContainer}>
      Registration
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        <FormInput
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.errors.name ? <p className={classes.Errors}>{formik.errors.name}</p> : null}
        <FormInput
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.errors.email ? <p className={classes.Errors}>{formik.errors.email}</p> : null}
        <FormInput
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.errors.password ? <p className={classes.Errors}>{formik.errors.password}</p> : null}
        <FormButton colored type="submit" size="35px">
          {" "}
          Register <VscArrowRight style={{ "verticalAlign": "middle" }} />
        </FormButton>
      </form>
      <FormButton size="35px">
        <UnStyledLink to="/">
          <VscArrowLeft style={{ "verticalAlign": "middle" }} />
          Back
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default SignUp;
