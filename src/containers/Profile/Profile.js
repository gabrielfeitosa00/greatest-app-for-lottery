import React, { useEffect, useCallback } from "react";
import { useFormik } from "formik";
import classes from "./Profile.module.css";
import { editSchema } from "../../validation/FormSchemas";
import FormButton from "../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../components/UI/StyledComponents/StyledInput";
import { Creators as ProfileCreators } from "../../store/reducers/profile";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  const currentUser = useSelector((state) => state.profile.username);
  const currentEmail = useSelector((state) => state.profile.email);
  const profileError = useSelector((state) => state.profile.error);
  const loadingState = useSelector((state) => state.profile.loading);
  const successState = useSelector((state)=>state.profile.success);
  const dispatch = useDispatch();

  const OnFetchProfile = useCallback(
    () => dispatch(ProfileCreators.GetProfileAsync()),
    [dispatch]
  );
  const OnEditProfile = (username, email, password) =>
    dispatch(ProfileCreators.UpdateProfileAsync(username, email, password));
  const OnInitProfile =  useCallback(()=>dispatch(ProfileCreators.ProfileStart()),[dispatch])
    const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: editSchema,
    onSubmit: (values) => {
      OnEditProfile(values.name, values.email, values.password);
      
    },
  });
  useEffect(() => {
    OnFetchProfile();
    return ()=>{OnInitProfile()}
  }, [OnFetchProfile,OnInitProfile]);

  return (
    <div className={classes.Profile}>
      <h1>{!loadingState ? `${currentUser}'s` : "loading..."} Profile</h1>
      <form onSubmit={formik.handleSubmit} className={classes.Form}>
      {profileError ? (
          typeof profileError==='object'? (
            profileError.map((errorItem, index) => (
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
              {profileError}
            </p>
          )
        ) : null}
        {!profileError && successState ?  <Redirect to='/'/>  : null  }
        <FormInput
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder={!loadingState ? currentUser : "loading..."}
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
          placeholder={!loadingState ? currentEmail : "loading..."}
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
