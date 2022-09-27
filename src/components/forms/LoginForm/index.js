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
        className={`${styles.forgotPassLinkWrapper} d-flex align-items-center justify-content-between`}
      >
        <Link to="/">Forgot Your Password</Link>
        <CheckboxInput label="Remember Me" />
      </div>
    </form>
  );
};

export default LoginForm;
