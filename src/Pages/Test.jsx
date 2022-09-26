import Carousel from "Components/Carousel";
import SearchUnis from "Components/SearchUnis";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function Test() {
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="relative mx-auto bg-blue-300 top-14 min-w-9/12 h-3/6">
        <SearchUnis />
      </div>
    </div>
  );
}

export default Test;
