import React from "react";
import { FaBeer, FaBars } from "react-icons/fa";

export default function Navbar() {
  // TODO: make Navbar a formalized componenet, don't repeat yourself
  return (
    <>
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
    <div className="mt-24">
    {/* This Offsets the content to account for the navbar, This assumes that this component is at the top of any imported file */}
    </div>
    </>
  );
}

const styles = {
  nav: "flex flex-col lg:flex-row bg-[rgba(255,255,255,0.9)]  w-full fixed top-0 z-10 shadow-lg rounded-b-lg backdrop-blur-md",
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

  dditem: "hover:bg-gray-400 p-2 hover:text-white rounded",
};
