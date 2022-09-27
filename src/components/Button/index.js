import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({
  children,
  size = "md",
  color = "primary",
  fullWidth,
  className,
}) => {
  return (
    <button
      className={clsx(
        { "w-100": fullWidth },
        `${styles.btn} ${styles[`size-${size}`]} ${
          styles[`color-${color}`]
        } ${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
