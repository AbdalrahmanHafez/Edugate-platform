import React, { useState } from "react";

import { FaBeer, FaBars } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import classNames from "classnames";
import Carousel from "Components/Carousel";

function Home() {
  const [hmbShowNav, sethmbShowNav] = useState(false);
  return (
    <div className="h-full w-full bg-[url('../public/edugate-bg.JPG')] bg-cover">
      <nav className={styles.nav}>
        <div className="flex space-around">
          <img
            src="/Edugate-logo.png"
            alt="Edugate Logo"
            className={styles.logo}
          />

          <div
            className={styles.hmbmenu}
            onClick={() => {
              document.getElementById("navlinks").classList.toggle("flex");
              document.getElementById("navlinks").classList.toggle("hidden");
            }}
          >
            <FaBars />
          </div>
        </div>

        <ul id="navlinks" className={styles.navbuttons}>
          <li className={styles.navbtnActive}>Home</li>
          <li className={styles.navbtn}>Universities in Egypt</li>
          <li className={styles.navbtn}>Traning</li>
          <li className={styles.navbtn}>Scholarships</li>
          <li className={styles.navbtn}>Study Aborad</li>
          <li className={styles.navbtn}>Services</li>
        </ul>

        <div className={styles.loginSignupContainer}>
          <a href="/#login" className={styles.login}>
            login
          </a>
          <a href="/#signup" className={styles.signup}>
            signup
          </a>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className={styles.searchBox}>Search Box</div>
      {/* Ads 2 */}
      <div className={styles.adContainer2}>Ad 2</div>

      {/* Ads1 - Content - Ads3 */}
      <div className={styles.container}>
        <div className={styles.adContainer13}>Ad 1</div>
        <div className={styles.mccontent}>
          hello
          <Carousel />
        </div>
        <div className={styles.adContainer13}>Ad 3</div>
      </div>
    </div>
  );
}

const astyles = `text-grey`;

const styles = {
  // container: "bg-red-400 container mx-auto",
  container: "bg-red-400 w-full flex flex-col md:flex-row h-[2000px]",
  adContainer2: "bg-green-400 mx-auto md:w-3/4 mb-4 text-center",
  adContainer13:
    "bg-green-400 w-full md:w-2/12 h-36 md:h-auto flex items-center justify-center",

  mccontent: "bg-cyan-500 md:w-8/12 flex flex-col justify-center items-center",

  searchBox: "bg-slate-400 w-full md:w-3/4  h-20 mx-auto mb-4",

  nav: "flex flex-col lg:flex-row bg-white bg-opacity-90 fixed top-0 w-full",
  logo: "ml-5 w-[250px] h-auto m-5",
  hmbmenu: "lg:hidden flex justify-center items-center ml-auto mr-10 text-3xl",

  loginSignupContainer: "hidden mr-5 lg:flex flex-row mb-5",
  login:
    "no-underline text-black px-3 py-2 hover:text-slate-700 flex flex-col-reverse",
  signup:
    "text-white bg-gray-900 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse ",
  navbuttons:
    "hidden lg:flex flex-col lg:flex-row lg:mx-auto lg:space-x-1 mb-5",
  navbtn:
    "text-black p-2 pointer-events-auto cursor-pointer hover:bg-gray-400 rounded-b-2xl flex flex-col-reverse text-center",
  navbtnActive:
    "text-white bg-gray-900 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse text-center",

  carousel: "w-full h-60 bg-green-600",
};

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default Home;
