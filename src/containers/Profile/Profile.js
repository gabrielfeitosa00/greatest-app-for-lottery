import React, { useEffect, useCallback } from "react";
import { useFormik } from "formik";
import classes from "./Profile.module.css";
import { editSchema } from "../../validation/FormSchemas";
import FormButton from "../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../components/UI/StyledComponents/StyledInput";
import { Creators as ProfileCreators } from "../../store/reducers/profile";
import { useDispatch, useSelector } from "react-redux";

const Profile = (props) => {
  const currentUser = useSelector((state) => state.profile.username);
  const currentEmail = useSelector((state) => state.profile.email);
  const dispatch = useDispatch();
  const OnFetchProfile = useCallback(
    () => dispatch(ProfileCreators.GetProfileAsync()),
    [dispatch]
  );
  const OnEditProfile = (username, email, password) =>
    dispatch(ProfileCreators.UpdateProfileAsync(username, email, password));
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: editSchema,
    onSubmit: (values) => {
      OnEditProfile(values.name, values.email, values.password);
      props.history.push("/");
    }
  });
  useEffect(() => {
    OnFetchProfile();
  }, [OnFetchProfile]);
  return (
    <div className={classes.Profile}>
      <h1>{currentUser ? `${currentUser}'s` : "loading..."} Profile</h1>
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
        <FormInput
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder={currentUser ? currentUser : "loading..."}
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
          placeholder={currentEmail ? currentEmail : "loading..."}
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

        <FormButton colored="#b5c401" type="submit" size="35px">
          {" "}
          Confirm
        </FormButton>
      </form>
    </div>
  );
};

export default Profile;
