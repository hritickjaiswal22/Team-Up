import React from "react";

import styles from "./Projects.module.scss";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import GridContainer from "../Components/GridContainer";
import Card from "../Components/Card";

function Projects() {
  const filterBtnClickHandler = (event) => {
    if (event.target.classList.contains("btn--filter")) {
      console.log("Filter btn clicked");
    }
  };

  return (
    <article className={styles.projectsPage}>
      <Header />
      <main className="mainProjects">
        <Filter
          filterBtnClickHandler={filterBtnClickHandler}
          heading="Projects to Team Up"
          filterBtnContent1="Topic"
          filterBtnContent2="Date"
          filterBtnContent3="Most Viewed"
        />
      </main>
      <GridContainer>
        <Card className="card--projectsCard">
          <h1>Virtual Private Network</h1>
          <h5>24th September 2021 17:14</h5>
          <h4>Hamza Hasan</h4>
          <p>
            The project demands creating an app that converts user's public
            network to private network
          </p>
          <h4>Topic</h4>
          <h1>Networking</h1>
          <h3>Keywords</h3>
          <button className={`${styles.btn}  btn--topics`}>Networking</button>
          <button className={`${styles.btn}  btn--topics`}>
            Application Development
          </button>
        </Card>
        <Card className="card--projectsCard">
          <h1>Virtual Private Network</h1>
          <h5>24th September 2021 17:14</h5>
          <h4>Hamza Hasan</h4>
          <p>
            The project demands creating an app that converts user's public
            network to private network
          </p>
          <h4>Topic</h4>
          <h1>Networking</h1>
          <h3>Keywords</h3>
          <button className={`${styles.btn}  btn--topics`}>Networking</button>
          <button className={`${styles.btn}  btn--topics`}>
            Application Development
          </button>
        </Card>
        <Card className="card--projectsCard">
          <h1>Virtual Private Network</h1>
          <h5>24th September 2021 17:14</h5>
          <h4>Hamza Hasan</h4>
          <p>
            The project demands creating an app that converts user's public
            network to private network
          </p>
          <h4>Topic</h4>
          <h1>Networking</h1>
          <h3>Keywords</h3>
          <button className={`${styles.btn}  btn--topics`}>Networking</button>
          <button className={`${styles.btn}  btn--topics`}>
            Application Development
          </button>
        </Card>
        <Card className="card--projectsCard">
          <h1>Virtual Private Network</h1>
          <h5>24th September 2021 17:14</h5>
          <h4>Hamza Hasan</h4>
          <p>
            The project demands creating an app that converts user's public
            network to private network
          </p>
          <h4>Topic</h4>
          <h1>Networking</h1>
          <h3>Keywords</h3>
          <button className={`${styles.btn}  btn--topics`}>Networking</button>
          <button className={`${styles.btn}  btn--topics`}>
            Application Development
          </button>
        </Card>
        <Card className="card--projectsCard">
          <h1>Virtual Private Network</h1>
          <h5>24th September 2021 17:14</h5>
          <h4>Hamza Hasan</h4>
          <p>
            The project demands creating an app that converts user's public
            network to private network
          </p>
          <h4>Topic</h4>
          <h1>Networking</h1>
          <h3>Keywords</h3>
          <button className={`${styles.btn}  btn--topics`}>Networking</button>
          <button className={`${styles.btn}  btn--topics`}>
            Application Development
          </button>
        </Card>
        <Card className="card--projectsCard">
          <h1>Virtual Private Network</h1>
          <h5>24th September 2021 17:14</h5>
          <h4>Hamza Hasan</h4>
          <p>
            The project demands creating an app that converts user's public
            network to private network
          </p>
          <h4>Topic</h4>
          <h1>Networking</h1>
          <h3>Keywords</h3>
          <button className={`${styles.btn}  btn--topics`}>Networking</button>
          <button className={`${styles.btn}  btn--topics`}>
            Application Development
          </button>
        </Card>
      </GridContainer>
    </article>
  );
}

export default Projects;
