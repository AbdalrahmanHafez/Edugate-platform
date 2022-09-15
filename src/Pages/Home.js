import React from "react";
import { FaBeer } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import classNames from "classnames";

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
          <button className={styles.btnActive}>Home</button>
          <button className={styles.btn}>Universities in Egypt</button>
          <button className={styles.btn}>Traning</button>
          <button className={styles.btn}>Scholarships</button>
          <button className={styles.btn}>Study Aborad</button>
          <button className={styles.btn}>Services</button>
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

const astyles = `text-grey`;

const styles = {
  container: "max-w-screen-lg mx-auto h-full bg-red-400",
  nav: "flex flex-row bg-white items-center content-between",
  navbuttons: "mx-auto flex space-x-5",
  logo: "ml-5 w-32 md:w-48",
  login: "no-underline text-xl text-black px-3 py-2",
  signup: "no-underline text-xl text-white px-3 py-2 bg-red-500 rounded-md",
  btn: "text-black",
  btnActive: "text-white bg-black",
};

export default Home;
