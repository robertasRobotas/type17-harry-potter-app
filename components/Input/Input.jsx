import { useEffect, useRef } from "react";
import styles from "./input.module.css";

const Input = () => {
  const inputRef = useRef(null);
  console.log(inputRef);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} className={styles.input} />
    </div>
  );
};

export default Input;
