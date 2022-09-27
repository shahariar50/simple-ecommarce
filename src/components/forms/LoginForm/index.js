import Button from "components/Button";
import CheckboxInput from "components/inputes/CheckboxInput";
import TextInput from "components/inputes/TextInput";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <div className="mb-3">
        <TextInput label="Email" fullWidth />
      </div>
      <div className="mb-3">
        <TextInput label="Password" fullWidth />
      </div>
      <div
        className={`${styles.forgotPassLinkWrapper} d-flex align-items-center justify-content-between mb-30`}
      >
        <Link to="/">Forgot Your Password</Link>
        <CheckboxInput label="Remember Me" />
      </div>
      <Button fullWidth className="mb-3">
        Sign In
      </Button>
      <div className={`${styles.orDevider} position-relative mb-3`}>
        <p className="d-inline-block mb-0">or</p>
      </div>
      <div className={styles.thirdPartySignIn}>
        <p className="text-center">Sign in with</p>
        <ul>
          <li>
            <Link to="/">
              <img src="/static/icons/Google G.png" alt="google" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/static/icons/facebook.png" alt="facebook" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/static/icons/linkedin.png" alt="linkedin" />
            </Link>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default LoginForm;
