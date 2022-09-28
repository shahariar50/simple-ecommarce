import Button from "components/Button";
import CheckboxInput from "components/inputes/CheckboxInput";
import TextInput from "components/inputes/TextInput";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Email"
            fullWidth
            type="email"
            className="mb-3"
            errorMessage={errors?.email?.message}
            {...props}
          />
        )}
        rules={{ required: "Require an email." }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Password"
            type="password"
            fullWidth
            className="mb-3"
            errorMessage={errors?.password?.message}
            {...props}
          />
        )}
        rules={{
          required: "Require a password.",
          minLength: { value: 6, message: "Minimum 6 character needed." },
        }}
      />
      <div
        className={`${styles.forgotPassLinkWrapper} d-flex align-items-center justify-content-between mb-30`}
      >
        <Link to="/">Forgot Your Password</Link>
        <CheckboxInput label="Remember Me" />
      </div>
      <Button fullWidth className="mb-3">
        Sign In
      </Button>
      <div className={`${styles.orDevider} position-relative mb-2`}>
        <p className="d-inline-block mb-0">or</p>
      </div>
      <div className={styles.thirdPartySignIn}>
        <p className="text-center">Sign in with</p>
        <ul className="d-flex m-0 p-0 align-items-center justify-content-center">
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
