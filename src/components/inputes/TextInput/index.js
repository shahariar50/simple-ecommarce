import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = React.forwardRef(
  (
    { label, type = "text", className, fullWidth, errorMessage, ...props },
    ref
  ) => {
    return (
      <div className={`${styles.textInput} ${className}`} ref={ref}>
        <label className={`${fullWidth ? "w-100" : ""} mb-2`}>
          {/* {console.log(props)} */}
          <p className="mb-1">
            {label}
            {props?.required && <span className="text-theme-primary">*</span>}
          </p>
          <input type={type} {...props} />
        </label>
        <p className={styles.helperText}>{errorMessage}</p>
      </div>
    );
  }
);

export default TextInput;
