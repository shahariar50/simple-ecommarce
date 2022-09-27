import RadioInput from "components/inputes/RadioInput";
import { Link } from "react-router-dom";
import styles from "./Signinpage.module.scss";

const SignInPage = () => {
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
            />
            <RadioInput name="signInOrLogin" label="Create Account" />
          </div>
        </div>
        <div></div>
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
