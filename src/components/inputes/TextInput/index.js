import styles from "./TextInput.module.scss";

const TextInput = ({
  label,
  type = "text",
  className,
  fullWidth,
  ...props
}) => {
  return (
    <label
      className={`${className} ${fullWidth ? "w-100" : ""} ${styles.textInput}`}
    >
      <p className="mb-1">
        {label}
        {props?.required && <span className="text-theme-primary">*</span>}
      </p>
      <input type={type} {...props} />
    </label>
  );
};

export default TextInput;
