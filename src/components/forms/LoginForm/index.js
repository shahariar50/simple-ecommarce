import TextInput from "components/inputes/TextInput";
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
    </form>
  );
};

export default LoginForm;
