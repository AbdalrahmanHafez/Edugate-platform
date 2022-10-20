import ButtonsWithContent from "Components/ButtonsWithContent";
import Carousel from "Components/Carousel";
import SearchUnis from "Components/SearchUnis";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function Test() {
  return (
    <div className="h-full w-full bg-gray-200">
      <ButtonsWithContent
        data={[
          {
            name: "Computer Science and Engineering",
            description: "here is the description",
          },
          {
            name: "Mechatronics",
            description: "desc 2 whoo",
          },
        ]}
      />
    </div>
  );
}

export default Test;
