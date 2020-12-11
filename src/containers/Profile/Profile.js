import { useFormik } from "formik";
import classes from "./Profile.module.css";
import { signUpSchema } from "../../validation/FormSchemas";
import FormButton from "../../components/UI/StyledComponents/StyledButton";
import FormInput from "../../components/UI/StyledComponents/StyledInput";
// import { Creators as AuthCreators } from "../../../../store/reducers/auth";
import { useDispatch } from "react-redux";

const Profile = (props)=>{
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
        },
        validationSchema: signUpSchema,
      });
    return(
        <div className={classes.Profile}>
            <h1>This is your Profile</h1>
            <form onSubmit={formik.handleSubmit} className={classes.Form}>
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

        <FormButton colored="#b5c401" type="submit" size="35px">
          {" "}
          Confirm 
        </FormButton>
      </form>
    
        </div>
        
    )
}

export default Profile