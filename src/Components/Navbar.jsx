import React, { useEffect } from "react";
import { FaBeer, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavItemLink = ({ to, children, className }) => {
  const { pathname } = useLocation();
  // Path is the currently active
  const isActive = pathname === to;
  const activeClass =
    "text-white bg-gray-900 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse text-center lg:w-fit";
  const normClass =
    "text-black p-2 cursor-pointer hover:bg-gray-400 hover:text-white rounded-b-2xl flex flex-col-reverse text-center";
  return (
    <Link
      className={className + " " + (isActive ? activeClass : normClass)}
      to={to}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // console.log("location", location);
    // TODO: React Router why navbar re-renderes navigating
  });

  return (
    <>
      <nav className={styles.nav}>
        <div className="space-around flex">
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
          {/* <NavItemLink to="/UniversitiesInEgypt">UIE</NavItemLink> */}

          <NavItemLink to="/">Home</NavItemLink>
          <NavItemLink to="/UniversitiesInEgypt">
            Universities in Egypt
          </NavItemLink>
          <NavItemLink to="TODO:link">Training</NavItemLink>
          <NavItemLink to="TODO:link">Scholarships</NavItemLink>
          <NavItemLink to="TODO:link">Study Aborad</NavItemLink>

          <div
            className={"group float-left flex w-full overflow-hidden lg:w-auto"}
          >
            <li className={styles.navbtn + " w-full"}>
              <div className="hidden w-full flex-col  space-y-3 rounded-lg bg-gray-300 p-3 text-black shadow group-hover:flex group-hover:lg:hidden">
                <a href="/TODO:link" className={styles.dditem}>
                  Consultancy
                </a>
                <a href="/TODO:link" className={styles.dditem}>
                  Score Calculators
                </a>
              </div>
              Services
            </li>

            <div className="absolute top-[80%] z-10 hidden lg:group-hover:block">
              <div className="flex w-[150%] flex-col space-y-3 rounded-lg bg-white p-3 shadow">
                <a href="/TODO:link" className={styles.dditem}>
                  Consultancy
                </a>
                <a href="/TODO:link" className={styles.dditem}>
                  Score Calculators
                </a>
              </div>
            </div>
          </div>

          {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar */}
        </ul>

        <div className={styles.loginSignupContainer}>
          <Link to="/login" className={styles.login}>
            login
          </Link>
          <Link to="/signup" className={styles.signup}>
            signup
          </Link>
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
