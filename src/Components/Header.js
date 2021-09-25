import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "../Assets/logo.png";
import Button from "./Button";

function Header() {
  return (
    <header>
      <div className={styles.logoBox}>
        <img src={logo} alt="Logo" className={styles.logoBox__logo} />
        <span>Team Up</span>
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li>
            <NavLink
              className={styles.navbar__link}
              to="/"
              activeClassName="activeLink"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navbar__link}
              to="/projects"
              activeClassName="activeLink"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navbar__link}
              to="/community"
              activeClassName="activeLink"
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navbar__link}
              to="/community"
              activeClassName="activeLink"
            >
              Chat
            </NavLink>
          </li>
          <Button to="/signin" className="btn--purple">
            Log in
          </Button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
