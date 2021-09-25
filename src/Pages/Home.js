import React from "react";

import styles from "./Home.module.scss";
import Header from "../Components/Header";
import Button from "../Components/Button";
import illustration from "../Assets/illustration2.1.png";

function Home() {
  return (
    <article className={styles.homePage}>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.illustrationBox}>
          <img
            className={styles.illustrationBox__illustration}
            src={illustration}
            alt="illustration"
          />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.titleBox__mainHeading}>
            Accomplish more together
          </h1>
          <h3 className={styles.titleBox__subHeading}>
            Team up is your user-friendly team workspace where knowledge and
            collaboration meet.
          </h3>
          <Button to="/signin" className="btn btn--purple">
            Try now
          </Button>
        </div>
      </main>
    </article>
  );
}

export default Home;
