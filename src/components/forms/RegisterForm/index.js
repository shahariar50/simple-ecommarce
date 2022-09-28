import Button from "components/Button";
import TextInput from "components/inputes/TextInput";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { ...props } }) => (
          <TextInput
            label="First Name"
            fullWidth
            className="mb-3"
            errorMessage={errors?.firstName?.message}
            required
            {...props}
          />
        )}
        rules={{ required: "Require an First Name." }}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Last Name"
            fullWidth
            className="mb-3"
            errorMessage={errors?.lastName?.message}
            required
            {...props}
          />
        )}
        rules={{
          required: "Require a Last Name.",
        }}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Email"
            type="email"
            fullWidth
            className="mb-3"
            errorMessage={errors?.email?.message}
            required
            {...props}
          />
        )}
        rules={{
          required: "Require an email.",
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Create a password"
            type="password"
            fullWidth
            className="mb-3"
            errorMessage={errors?.password?.message}
            required
            {...props}
          />
        )}
        rules={{
          required: "Require a password.",
          minLength: { value: 6, message: "Minimum 6 character needed." },
        }}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Confirm Password"
            type="password"
            fullWidth
            className="mb-3"
            errorMessage={errors?.confirmPassword?.message}
            required
            {...props}
          />
        )}
        rules={{
          required: "Require the confirm password.",
        }}
      />
      <Controller
        control={control}
        name="address"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Address"
            fullWidth
            className="mb-3"
            errorMessage={errors?.address?.message}
            required
            {...props}
          />
        )}
        rules={{
          required: "Require a address.",
        }}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field: { ...props } }) => (
          <TextInput
            label="Phone"
            fullWidth
            className="mb-3"
            errorMessage={errors?.phone?.message}
            required
            {...props}
          />
        )}
        rules={{
          required: "Require a phone number.",
        }}
      />
      <Button fullWidth className="mb-3">
        Sign Up
      </Button>
      <div className={`${styles.orDevider} position-relative mb-2`}>
        <p className="d-inline-block mb-0">or</p>
      </div>
      <div className={styles.thirdPartySignIn}>
        <p className="text-center">Sign up with</p>
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

export default RegisterForm;
