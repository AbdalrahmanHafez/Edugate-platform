import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { color } from "@mui/system";

function SignupContent() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Content = () => {
    if (activeStep === 0) {
      return (<div className="flex flex-1 flex-col justify-center items-center ">
      <h1 className={styles.h1 + " md:mt-0 mt-10"}>Create Your Account</h1>
      <div className="flex flex-col items-center gap-3 w-full max-w-[380px] mt-5">
      
      <input type="text" placeholder="Email" className={styles.input} />
      <input
              type="text"
              placeholder="Password"
              className={styles.input}
            /> 
            <input
              type="text"
              placeholder="Confirm Password"
              className={styles.input}
            /> 
            </div> 
            
          
            <div  className="flex flex-row mt-10 space-x-36 ">
              <button
                className="w-full px-10 px-10 py-3  rounded-lg lg:font-base font-bold bg-[#950003] text-white focus:outline-none disabled:opacity-50 " disabled
              >
                Back
              </button>
           
              <button
                className="w-full px-10 px-10 py-3  rounded-lg lg:font-base font-bold bg-[#950003] text-white hover:bg-[#bb0003]  " onClick={handleNext}
              >
                Next
              </button>
            </div>
         
      </div>);
    }
    if (activeStep === 1) {
      return (<div className="flex flex-1 flex-col justify-center items-center ">
      <h1 className={styles.h1 + " md:mt-0 mt-10"}>Create Your Account</h1>
      <div className="flex flex-col items-center gap-3 w-full max-w-[380px] mt-5">
      
      <input type="text" placeholder="Email" className={styles.input} />
      <input
              type="text"
              placeholder="Password"
              className={styles.input}
            /> 
            <input
              type="text"
              placeholder="Confirm Password"
              className={styles.input}
            /> 
            </div> 
            
          
            <div  className="flex flex-row mt-10 space-x-36 ">
              <button
                className="w-full px-10 px-10 py-3  rounded-lg lg:font-base font-bold bg-[#950003] text-white focus:outline-none disabled:opacity-50 " onClick={handleBack}
              >
                Back
              </button>
           
              <button
                className="w-full px-10 px-10 py-3  rounded-lg lg:font-base font-bold bg-[#950003] text-white hover:bg-[#bb0003]  " onClick={handleNext}
              >
                Next
              </button>
            </div>
         
      </div>);
    
    }
    if (activeStep === 2) {
      return (<div className="flex flex-1 flex-col justify-center items-center ">
      <h1 className={styles.h1 + " md:mt-0 mt-10"}>Create Your Account</h1>
      <div className="flex flex-col items-center gap-3 w-full max-w-[380px] mt-5">
      
      <input type="text" placeholder="Email" className={styles.input} />
      <input
              type="text"
              placeholder="Password"
              className={styles.input}
            /> 
            <input
              type="text"
              placeholder="Confirm Password"
              className={styles.input}
            /> 
            </div> 
            
          
            <div  className="flex flex-row mt-10 space-x-36 ">
              <button
                className="w-full px-10 px-10 py-3  rounded-lg lg:font-base font-bold bg-[#950003] text-white focus:outline-none disabled:opacity-50 " onClick={handleBack}
              >
                Back
              </button>
           
              <button
                className="w-full px-10  py-3  rounded-lg lg:font-base font-bold bg-[#950003] text-white hover:bg-[#bb0003]  " 
              >
                Signup
              </button>
            </div>
         
      </div>);
    
    }
  };

  return (
    <>
    
      <Content  />
      

     
      
     
     
    </>
    
  );
}

function Signup() {
  return (
    <div className="flex md:flex-row flex-col h-full">
      <div
        className="bg-cyan-200 flex-1 flex flex-col"
        style={{
          backgroundImage:
            "linear-gradient(236deg, rgb(190 0 4) 0px, #560002 100%)",
        }}
      >
        {/* Logo */}
        <a href="/" className="max-w-[250px] h-auto mt-6 ml-6">
          <img src="/Edugate-logo-white-min.png" alt="Edugate Logo" />
        </a>

        {/* Login */}
        <div className="flex flex-1 flex-col gap-10 justify-center items-center text-center text-white">
          <h1 className={styles.h1 + " md:mt-0 mt-10"}>One Of Us?</h1>
          <h2 className={styles.h2}>
            If you already have an account, just sign in. We've missed you!
          </h2>
          <button className="bg-white w-44 py-3 rounded-full font-bold hover:bg-gray-100 text-black">
            Sign in
          </button>
        </div>
      </div>

      {/* Student Signup */}
      <div className="bg-white h-full flex-[3] flex flex-col">
        <div className="flex-1 flex flex-col gap-10 justify-center items-center">
          <SignupContent />
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
