import React from "react";

import styles from "./GridContainer.module.scss";

function GridContainer({ children }) {
  return <section className={styles.gridContainer}>{children}</section>;
}

export default GridContainer;
