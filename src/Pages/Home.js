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

        <ul className={styles.navbuttons}>
          <li className={styles.navbtnActive}>Home</li>
          <li className={styles.navbtn}>Universities in Egypt</li>
          <li className={styles.navbtn}>Traning</li>
          <li className={styles.navbtn}>Scholarships</li>
          <li className={styles.navbtn}>Study Aborad</li>
          <li className={styles.navbtn}>Services</li>
        </ul>

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
  // container: "bg-red-400 container mx-auto",
  container: "max-w-screen-lg mx-auto w-9/12 bg-red-400 min-h-full",
  nav: "flex flex-row bg-white items-center justify-between sticky top-0",
  logo: "ml-5 w-32 md:w-48",
  login: "no-underline text-sm text-black px-3 py-2 hover:text-slate-700",
  signup:
    "no-underline text-sm text-white px-3 py-2 bg-red-500 hover:bg-red-600 rounded-md",
  navbuttons: "hidden md:flex mx-auto space-x-1 items-center",
  navbtn:
    "text-black p-2 pointer-events-auto cursor-pointer hover:bg-slate-100 rounded",
  navbtnActive: "text-white bg-gray-900 p-2 cursor-pointer rounded",
  carousel: "w-full h-60 bg-green-600",
};

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default Home;
