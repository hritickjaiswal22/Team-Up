import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

function Button({ children, to, className }) {
  return (
    <Link to={to}>
      <button className={`${styles.btn} ${className}`}>{children}</button>
    </Link>
  );
}

export default Button;
