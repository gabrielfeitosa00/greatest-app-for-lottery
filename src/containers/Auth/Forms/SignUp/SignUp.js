import React from "react";
import { useFormik } from "formik";
import classes from "./SignUp.module.css";
import FormButton from "../../../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../../../components/UI/StyledComponents/StyledInput";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import UnStyledLink from "../../../../components/UI/UnStyledLink/UnStyledLink";

const SignUp = (props) => {
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
        <FormButton type="submit">
          {" "}
          Register <VscArrowRight style={{ "vertical-align": "middle" }} />
        </FormButton>
      </form>
      <FormButton>
        <UnStyledLink to="/">
          <VscArrowLeft style={{ "vertical-align": "middle" }} />
          Back
        </UnStyledLink>
      </FormButton>
    </div>
  );
};

export default SignUp;
