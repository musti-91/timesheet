import React, { FC } from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick?: (e: any) => void;
  title: string;
  type?: "submit" | "reset" | "button";
  variant?: "DANGER" | "SUCCESS" | string;
}

const BLUE = "rgb(16, 156, 236)";
const Button: FC<Props> = ({ title, onClick, type, variant }) => {
  let backgroundColor;
  if (variant === "SUCCESS") {
    backgroundColor = "#36abb5";
  }
  if (variant === "DANGER") {
    backgroundColor = "#f00";
  }
  return (
    <button
      className={styles.element}
      onClick={onClick}
      type={type ? type : "button"}
      style={{ backgroundColor }}
    >
      {title}
    </button>
  );
};

export default Button;
