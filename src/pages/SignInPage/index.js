import LoginForm from "components/forms/LoginForm";
import RegisterForm from "components/forms/RegisterForm";
import RadioInput from "components/inputes/RadioInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signinpage.module.scss";

const SignInPage = () => {
  const [formState, setFormState] = useState("login");

  return (
    <div className={`pt-120 pb-100 ${styles.signInPage}`}>
      <div className="container">
        <h2 className="mb-4">WELCOME PLEASE SIGN IN!</h2>
        <div className="d-flex justify-content-center mb-3">
          <div className="d-inline-flex">
            <RadioInput
              className="me-30"
              name="signInOrLogin"
              label="Sign In"
              value="login"
              onChange={({ target }) => setFormState(target.value)}
              checked={formState === "login"}
            />
            <RadioInput
              name="signInOrLogin"
              value="register"
              onChange={({ target }) => setFormState(target.value)}
              label="Create Account"
              checked={formState === "register"}
            />
          </div>
        </div>
        {formState === "login" ? <LoginForm /> : <RegisterForm />}
        <div
          className={`${styles.bottomLink} mt-4 d-flex justify-content-center`}
        >
          <Link
            className="text-black text-decoration-none m-0 border-end border-2 border-dark pe-2"
            to="/"
          >
            Privacy Policy and Cookies
          </Link>
          <Link className="text-black text-decoration-none m-0 ps-2" to="/">
            Terms of Sale and Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
