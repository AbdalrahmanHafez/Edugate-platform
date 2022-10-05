import React from "react";

function Login() {
  return (
    <div className="flex md:flex-row flex-col h-full">
      {/* Login */}
      <div className="bg-white h-full flex-[3] flex flex-col">
        {/* Logo */}
        <a href="/" className="max-w-[250px] h-auto mt-6 ml-6">
          <img src="/Edugate-logo-min.png" alt="Edugate Logo" />
        </a>

        <div className="flex-1 flex flex-col gap-10 justify-center items-center">
          <h1 className={styles.h1 + " md:mt-0 mt-10"}>
            Login to Your Account
          </h1>
          <div className="flex flex-col items-center gap-3 w-full max-w-[380px]">
            <input type="text" placeholder="Email" className={styles.input} />
            <input
              type="text"
              placeholder="Password"
              className={styles.input}
            />
            <button className="bg-[#950003] text-white w-44 py-3 rounded-full font-bold hover:bg-[#bb0003] md:mb-0 mb-10">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Signup */}

      <div
        className="bg-cyan-200 flex-1 flex flex-col gap-10 justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(236deg, rgb(190 0 4) 0px, #560002 100%)",
        }}
      >
        <h1 className={styles.h1 + " md:mt-0 mt-10"}>New Here?</h1>
        <h2 className={styles.h2}>Sign up and create your future!</h2>
        <button className="bg-white w-44 py-3 rounded-full font-bold hover:bg-gray-100 text-black">
          Signup
        </button>
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
