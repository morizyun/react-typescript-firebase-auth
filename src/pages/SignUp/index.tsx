import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import { SignUpForm } from "./SingUpForm";

const SignUpComponent = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);
