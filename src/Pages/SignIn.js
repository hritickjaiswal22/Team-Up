import React, { useState } from "react";

import styles from "./SignIn.module.scss";
import Header from "../Components/Header";
import Card from "../Components/Card";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function PasswordHandler(event) {
    setPassword(event.target.value);
  }

  return (
    <article className={styles.signinPage}>
      <Header />
      <main className={styles.mainSignIn}>
        <div className={styles.titleBox}>
          <h1 className={styles.titleBox__mainHeading}>
            Build a culture of open teamwork
          </h1>
          <h2 className={styles.titleBox__subHeading}>
            With social features, users at every level have a voice to
            contribute,share, and receive feedback.
          </h2>
        </div>
        <div className={styles.signinBox}>
          <Card className="card--signin">
            <h1>User Login</h1>
            <input
              value={email}
              onChange={emailHandler}
              placeholder="Email"
              type="text"
            />
            <input
              value={password}
              onChange={PasswordHandler}
              placeholder="Password"
              type="text"
            />
            <button className={`${styles.btn} btn--sign`}>Log In</button>
          </Card>
        </div>
      </main>
    </article>
  );
}

export default SignIn;
