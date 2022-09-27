import React from "react";
import Navbar from "Components/Navbar";

function UniversityPage() {
  return (
    <div className="w-full h-full bg-white bg-cover">
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <div className="h-fit m-5 p-4 rounded bg-[#950003] flex justify-between text-white gap-3">
        {/* Logo */}
        <div className="w-[12%]">
          <div className="bg-white mx-5 rounded">
            <img src="uni_logos/14.png" alt="" />
          </div>
        </div>

        {/* Uni Information */}
        <div className="flex flex-col /bg-blue-300 flex-1">
          <div className="text-xl">German University in Cairo</div>

          <div className="ml-5 flex flex-col gap-3 mt-3">
            <div>City: Cairo</div>
            <div className="text-[#EDEDED]">
              German university in Cairo/Deutsche Universität in Kairo has been
              established in 2002 in cooperation with the State Universities of
              Ulm and Stuttgart, under the patronage of the Egyptian Ministry of
              Higher Education, the Ministry of Science, Research and Arts,
              State of Baden- Württemberg, Germany, and supported by the German
              Academic Exchange Service (DAAD), the German Embassy in Cairo, the
              Arab/German Chamber of Industry and Commerce (AHK), the Federal
              Ministry of Education and Research, Germany, The State University
              of Tübingen, The State University of Mannheim and the Academy of
              Fine Arts Leipzig.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start w-20 gap-3">
          {/* Rank item */}
          <div className="w-full">
            <div className="bg-white text-[#5D5D5D] h-16 rounded-t-lg flex justify-center items-center text-2xl">
              58
            </div>
            <div className="bg-black h-6 rounded-b-lg text-center flex justify-center items-center">
              QS
            </div>
          </div>

          {/* Rank item */}
          <div className="w-full">
            <div className="bg-white text-[#5D5D5D] h-16 rounded-t-lg flex justify-center items-center text-2xl">
              64
            </div>
            <div className="bg-black h-6 rounded-b-lg text-xs text-center flex justify-center items-center">
              Times Hire
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversityPage;
