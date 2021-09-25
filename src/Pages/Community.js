import React from "react";

import avatar from "../Assets/logo.png";

import styles from "./Community.module.scss";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import GridContainer from "../Components/GridContainer";
import Card from "../Components/Card";
import Button from "../Components/Button";

function Community() {
  const filterBtnClickHandler = (event) => {
    if (event.target.classList.contains("btn--filter")) {
      console.log("Filter btn clicked");
    }
  };

  return (
    <article className={styles.communityPage}>
      <Header />
      <main className="mainCommunity">
        <Filter
          filterBtnClickHandler={filterBtnClickHandler}
          heading="Community members"
          filterBtnContent1="Bio"
          filterBtnContent2="Reviews"
          filterBtnContent3="Most Wanted"
        />
        <GridContainer>
          <Card className="card--communityCard">
            <div className={styles.card__avatarBox}>
              <img src={avatar} alt="" className={styles.card__avatar} />
            </div>
            <h1>Sam Cannel</h1>
            <h2>Full Stack Web Developer</h2>
            <h3>California</h3>
            <Button to="/" className="btn--community">
              Message
            </Button>
          </Card>
          <Card className="card--communityCard">
            <div className={styles.card__avatarBox}>
              <img src={avatar} alt="" className={styles.card__avatar} />
            </div>
            <h1>Sam Cannel</h1>
            <h2>Full Stack Web Developer</h2>
            <h3>California</h3>
            <Button to="/" className="btn--community">
              Message
            </Button>
          </Card>
          <Card className="card--communityCard">
            <div className={styles.card__avatarBox}>
              <img src={avatar} alt="" className={styles.card__avatar} />
            </div>
            <h1>Sam Cannel</h1>
            <h2>Full Stack Web Developer</h2>
            <h3>California</h3>
            <Button to="/" className="btn--community">
              Message
            </Button>
          </Card>
          <Card className="card--communityCard">
            <div className={styles.card__avatarBox}>
              <img src={avatar} alt="" className={styles.card__avatar} />
            </div>
            <h1>Sam Cannel</h1>
            <h2>Full Stack Web Developer</h2>
            <h3>California</h3>
            <Button to="/" className="btn--community">
              Message
            </Button>
          </Card>
          <Card className="card--communityCard">
            <div className={styles.card__avatarBox}>
              <img src={avatar} alt="" className={styles.card__avatar} />
            </div>
            <h1>Sam Cannel</h1>
            <h2>Full Stack Web Developer</h2>
            <h3>California</h3>
            <Button to="/" className="btn--community">
              Message
            </Button>
          </Card>
          <Card className="card--communityCard">
            <div className={styles.card__avatarBox}>
              <img src={avatar} alt="" className={styles.card__avatar} />
            </div>
            <h1>Sam Cannel</h1>
            <h2>Full Stack Web Developer</h2>
            <h3>California</h3>
            <Button to="/" className="btn--community">
              Message
            </Button>
          </Card>
        </GridContainer>
      </main>
    </article>
  );
}

export default Community;
