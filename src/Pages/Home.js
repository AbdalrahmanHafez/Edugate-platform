import React from "react";
import { FaBeer } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import classNames from "classnames";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <img
          src="/Edugate-logo.png"
          alt="Edugate Logo"
          className={styles.logo}
        />

        <div className={styles.navbuttons}>
          <button className={styles.navBtnActive}>Home</button>
          <button className={styles.navBtn}>Universities in Egypt</button>
          <button className={styles.navBtn}>Traning</button>
          <button className={styles.navBtn}>Scholarships</button>
          <button className={styles.navBtn}>Study Aborad</button>
          <button className={styles.navBtn}>Services</button>
        </div>

        <div className="mr-5">
          <a href="/#login" className={styles.login}>
            login
          </a>
          <a href="/#signup" className={styles.signup}>
            signup
          </a>
        </div>
      </nav>

      <div className={styles.container}>
        <h1>
          HomePage <FaBeer />
        </h1>
        <p>This is some text</p>
      </div>
    </>
  );
}

export default Home;
