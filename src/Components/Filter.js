import React from "react";

import styles from "./Filter.module.scss";

function Filter({
  heading,
  filterBtnClickHandler,
  filterBtnContent1,
  filterBtnContent2,
  filterBtnContent3,
}) {
  return (
    <section onClick={filterBtnClickHandler} className={styles.filterSection}>
      <h1 className={styles.filterSection__mainHeading}>{heading}</h1>
      <h3 className={styles.filterSection__subHeading}>Filters</h3>
      <button className={`${styles.btn}  btn--filter`}>
        {filterBtnContent1}
      </button>
      <button className={`${styles.btn} btn--filter`}>
        {filterBtnContent2}
      </button>
      <button className={`${styles.btn} btn--filter`}>
        {filterBtnContent3}
      </button>
    </section>
  );
}

export default Filter;
