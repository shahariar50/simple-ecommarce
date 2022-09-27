import RadioInput from "components/inputes/RadioInput";
import styles from "./Signinpage.module.scss";

const SignInPage = () => {
  return (
    <div className={`pt-120 pb-100 ${styles.signInPage}`}>
      <div className="container">
        <h2 className="mb-4">WELCOME PLEASE SIGN IN!</h2>
        <div className="d-flex justify-content-center">
          <div className="d-inline-flex">
            <RadioInput
              className="me-30"
              name="signInOrLogin"
              label="Sign In"
            />
            <RadioInput name="signInOrLogin" label="Create Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
