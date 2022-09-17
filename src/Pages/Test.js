import Carousel from "Components/Carousel";
import React from "react";

function Test() {
  return (
    <div className="w-[1000px] h-full bg-slate-200 flex flex-row /p-14">
      <div className="w-[300px] bg-red-300"></div>
      <div className="bg-green-300">
        hello
        <img src="Edugate-logo.png" alt="" className="w-[1000px]" />
        {/* <Carousel /> */}
      </div>
      <div className="w-[300px] bg-yellow-300"></div>
    </div>
  );
}

export default Test;
