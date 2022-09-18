import React, { useState } from "react";

import { FaBeer, FaBars } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import classNames from "classnames";
import Carousel from "Components/Carousel";

function Home() {
  const [hmbShowNav, sethmbShowNav] = useState(false);
  return (
    <div className="h-full w-full bg-white bg-cover">
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
          <li className={styles.navbtn}>Training</li>
          <li className={styles.navbtn}>Scholarships</li>
          <li className={styles.navbtn}>Study Aborad</li>

          <div
            className={"float-left flex group overflow-hidden w-full lg:w-auto"}
          >
            <li className={styles.navbtn + " w-full"}>
              <div className="hidden group-hover:flex group-hover:lg:hidden  flex-col space-y-3 bg-gray-300 text-black shadow w-full p-3 rounded-lg">
                <a href="/test" className={styles.dditem}>
                  Consultancy
                </a>
                <a href="/test" className={styles.dditem}>
                  Score Calculators
                </a>
              </div>
              Services
            </li>

            <div className="top-[80%] absolute hidden lg:group-hover:block z-10">
              <div className="flex flex-col space-y-3 bg-white shadow w-[150%] p-3 rounded-lg">
                <a href="/test" className={styles.dditem}>
                  Consultancy
                </a>
                <a href="/test" className={styles.dditem}>
                  Score Calculators
                </a>
              </div>
            </div>
          </div>

          {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar */}
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

      {/* Ads1 - Content - Ads3 */}
      <div className={styles.container}>
        <div className={styles.adContainer13}>
          <img className={styles.adImage13} src="ad1.png" alt="" />
        </div>
        <div className={styles.mccontent}>
          <div className={styles.searchBox}>Search Box</div>
          {/* Ads 2 */}
          <div className={styles.adContainer2}>
            <img className={styles.adImage2} src="ad2.png" alt="" />
          </div>

          <Carousel />
        </div>
        <div className={styles.adContainer13}>
          <img className={styles.adImage13} src="ad3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: "/bg-red-400 w-full flex flex-col md:flex-row ",
  adContainer2:
    "bg-gray-200 mx-auto md:w-3/4 mb-4 flex justify-center max-h-24",
  adContainer13:
    "/bg-green-400 md:mx-5 md:w-2/12 md:h-auto md:flex items-start justify-center hidden",
  adImage13: "sticky top-28 w-full",
  adImage2: "h-full w-auto",
  mccontent:
    "bg-red-200 md:w-8/12 flex flex-col justify-start items-start-center",
  searchBox: "bg-slate-400 w-full h-20 mx-auto mb-4",
  nav: "flex flex-col lg:flex-row bg-white bg-opacity-90 w-full fixed z-10 shadow-lg",
  logo: "ml-5 w-[250px] h-auto m-5",
  hmbmenu: "lg:hidden flex justify-center items-center ml-auto mr-10 text-3xl",
  loginSignupContainer: "hidden mr-5 lg:flex flex-row mb-5",
  login:
    "no-underline text-black px-3 py-2 hover:text-slate-600 flex flex-col-reverse",
  signup:
    "text-white bg-gray-900 hover:bg-gray-800 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse ",
  navbuttons:
    "hidden lg:flex flex-col lg:flex-row lg:mx-auto lg:space-x-1 mb-5",
  navbtn:
    "text-black p-2 cursor-pointer hover:bg-gray-400 hover:text-white rounded-b-2xl flex flex-col-reverse text-center ",
  navbtnActive:
    "text-white bg-gray-900 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse text-center lg:w-20",
  carousel: "w-full h-60 bg-green-600",

  dditem: "hover:bg-gray-400 p-2 hover:text-white rounded",
};

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default Home;
