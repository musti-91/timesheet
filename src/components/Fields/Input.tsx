import React, { FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  label?: string;
  value?: string;
  onChange: (e: any) => void;
  type?: string;
  name?: string;
}

/**
 * @author
 * @function @Input
 **/

const Input: FC<Props> = ({ name, label, value, onChange, type }) => {
  return (
    <div className={styles.field}>
      {label && <label htmlFor={name && name}>{label}</label>}
      <input
        type={type ? type : "text"}
        id={name && name}
        value={value && value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
