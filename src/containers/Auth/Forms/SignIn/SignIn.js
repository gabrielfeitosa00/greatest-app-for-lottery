import React from "react";
import { useFormik } from "formik";
import classes from "./SignIn.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight } from "react-icons/vsc";
import UnStyledLink from "../../../../components/UI/UnStyledLink/UnStyledLink";
import {signInSchema} from "../../../../validation/FormSchemas"

const SignIn = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
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
        <p>
          <UnStyledLink to="/reset">I forgot my password</UnStyledLink>
        </p>
        <FormButton type="submit">
          {" "}
          Log In <VscArrowRight style={{ "verticalAlign": "middle" }} />
        </FormButton>
      </form>
      <FormButton>
        <UnStyledLink to="/register">
          SignUp <VscArrowRight style={{ "verticalAlign": "middle" }} />{" "}
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default SignIn;
