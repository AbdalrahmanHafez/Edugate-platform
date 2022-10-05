import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { color } from "@mui/system";

const MAX_STEPS = 3;
function SignupForm({ activeStep }) {
  return [
    <>
      <div className="mt-5 flex w-full max-w-[380px] flex-col items-center gap-3">
        <input type="text" placeholder="Email" className={styles.input} />
        <input type="text" placeholder="Password" className={styles.input} />
        <input
          type="text"
          placeholder="Confirm Password"
          className={styles.input}
        />
      </div>
    </>,
    "step 2",
    "step 3",
  ][activeStep];
}

function Signup() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleStepBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const submitForm = () => {
    console.log("TODO:Submitting the form");
  };

  return (
    <div className="flex flex-col-reverse md:h-full md:flex-row">
      <div
        className="flex flex-1 flex-col"
        style={{
          backgroundImage:
            "linear-gradient(236deg, rgb(190 0 4) 0px, #560002 100%)",
        }}
      >
        {/* Logo */}
        <a href="/" className="m-6 mb-0 h-auto max-w-[250px]">
          <img src="/Edugate-logo-white-min.png" alt="Edugate Logo" />
        </a>

        {/* Login */}
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-5 pb-10 text-center text-white">
          <h1 className={styles.h1 + " mt-10 md:mt-0"}>One of Us?</h1>
          <h2 className={styles.h2}>
            If you already have an account, just sign in. We've missed you!
          </h2>
          <button className="w-44 rounded-full bg-white py-3 font-bold text-black hover:bg-gray-100">
            Sign in
          </button>
        </div>
      </div>

      {/* Student Signup */}
      <div className=" flex flex-[3] flex-col bg-white pb-10 md:pb-0">
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <div className="flex flex-1 flex-col items-center justify-center ">
            <h1 className={styles.h1 + " mt-10 md:mt-0"}>
              Create Your Account {activeStep}
            </h1>

            <SignupForm activeStep={activeStep} />

            <div className="mt-10 flex w-full flex-row justify-around">
              <button
                className="w-fit rounded-lg bg-[#950003] px-10 py-3 text-white hover:bg-[#bb0003] focus:outline-none disabled:opacity-50"
                onClick={handleStepBack}
                disabled={activeStep === 0}
              >
                Back
              </button>

              <button
                className="w-fit rounded-lg bg-[#950003] px-10 py-3 text-white hover:bg-[#bb0003] focus:outline-none disabled:opacity-50"
                onClick={activeStep !== MAX_STEPS ? handleStepNext : submitForm}
              >
                {activeStep === MAX_STEPS ? "Sign up" : "Next"}
              </button>
            </div>
          </div>
        </div>
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

export default Signup;
