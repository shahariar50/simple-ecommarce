import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = React.forwardRef(
  ({ label, type = "text", className, fullWidth, ...props }, ref) => {
    return (
      <>
        <label
          className={`${className} ${fullWidth ? "w-100" : ""} ${
            styles.textInput
          }`}
          ref={ref}
        >
          {/* {console.log(props)} */}
          <p className="mb-1">
            {label}
            {props?.required && <span className="text-theme-primary">*</span>}
          </p>
          <input type={type} {...props} />
        </label>
      </>
    );
  }
);

export default TextInput;
