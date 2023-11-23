import React from "react";
import styles from "./button.module.css";

const Button = ({ type, onButtonClicked }) => {
  return (
    <button
      onClick={onButtonClicked}
      className={`
      ${styles.wrapper}
      ${type === "DANGER" && styles.danger} 
      ${type === "SUCCESS" && styles.success}
      `}
    >
      Button
    </button>
  );
};

export default Button;
