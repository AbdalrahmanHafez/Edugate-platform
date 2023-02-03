import { useAuth } from "Context/AuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { login, getUserType } from "./apis/Login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleSignin() {
    if (email === "" || password === "") return;

    console.log("Sign in data ", email, password);

    // if user is logged in, its automatically redirected to home page
    login.mutateAsync({ username: email, password }).catch((err) => {
      let msg;
      if (typeof err.response.data === "string") msg = err.response.data;
      else if (typeof err.message === "string") msg = err.message;

      toast.error(
        `Error occured while signing in \n ${err.response.status} ${msg}`
      );
    });

    // TODO: loading indicator
  }

  return (
    <div className="flex h-full flex-col md:flex-row">
      {/* Login */}
      <div className="flex h-full flex-[3] flex-col bg-white">
        {/* Logo */}
        <a href="/" className="mt-6 ml-6 h-auto max-w-[250px]">
          <img src="/Edugate-logo-min.png" alt="Edugate Logo" />
        </a>

        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <h1 className={styles.h1 + " mt-10 text-[#950003] md:mt-0"}>
            Login to Your Account
          </h1>
          <div className="flex w-full max-w-[380px] flex-col items-center gap-3">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={styles.input}
            />
            <button
              disabled={login.isLoading}
              onClick={handleSignin}
              className="mb-10 w-44 rounded-full bg-[#950003] py-3 font-bold text-white hover:bg-[#bb0003] md:mb-0"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Signup */}
      <div
        className="flex flex-1 flex-col items-center justify-center gap-10 bg-cyan-200 px-5 pb-10 text-center text-white md:pb-0"
        style={{
          backgroundImage:
            "linear-gradient(236deg, rgb(190 0 4) 0px, #560002 100%)",
        }}
      >
        <h1 className={styles.h1 + " mt-10 md:mt-0"}>New Here?</h1>
        <h2 className={styles.h2}>Sign up and create your future!</h2>

        <Link to="/signup">
          <button className="w-44 rounded-full bg-white py-3 font-bold text-black hover:bg-gray-100">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  h1: "text-5xl font-bold text-center leading-[1.1]",
  h2: "text-2xl",
  input:
    "bg-gray-300 placeholder:text-gray-600 px-4 py-3 rounded-full focus:bg-white focus:ring-2 focus:ring-gray-500 focus:outline-none w-full hover:bg-gray-200",
};

export default Login;
