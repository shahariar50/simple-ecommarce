import styles from "./RadioInput.module.scss";

const RadioInput = ({ label, className, ...props }) => {
  return (
    <label className={`${styles.radioInput} ${className}`}>
      {label}
      <input type="radio" name="radio" {...props} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default RadioInput;
