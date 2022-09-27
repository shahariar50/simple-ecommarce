import styles from "./CheckboxInput.module.scss";

const CheckboxInput = ({ label, className, ...props }) => {
  return (
    <label className={`${styles.checkboxInput} ${className}`}>
      {label}
      <input type="checkbox" {...props} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckboxInput;
