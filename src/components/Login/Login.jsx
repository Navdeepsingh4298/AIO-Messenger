import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// formik
import { Formik, Form } from "formik";
import { validationSchema, defaultValues } from "./formikConfig";
import { FormField } from "components";

// firebase
import { fb } from "service";


export const Login = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  const login = ({ email, password }, { setSubmitting }) => {
    fb.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (!res.user) {
          setServerError("We're having some problem while logging you in. Please try again later.");
        }
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          setServerError('Invalid Credentials');
        } else if (err.code === 'auth/user-not-found') {
          setServerError('No Account Found for this Email. Please Sign Up and then try again to Log In.');
        } else {
          setServerError('Something went wrong :(');
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <div className="auth-form">
        <h1>Login</h1>
        <Formik
          onSubmit={login}
          validateOnMount={true}
          initialValues={ defaultValues }
          validationSchema={validationSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <FormField name="email" label="Email" type="email" />
              <FormField name="password" label="Password" type="password" />

              <div className="auth-link-container">
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => history.push("/signup")}>Sign Up!</span>
              </div>

              <button disabled={isSubmitting || !isValid} type="submit">Log In</button>
            </Form>
          )}
        </Formik>

        { !!serverError && <div className="error"> {serverError}</div> }
      </div>
    </>
  )
}