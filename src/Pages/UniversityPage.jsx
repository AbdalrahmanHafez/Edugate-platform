import React from "react";
import Navbar from "Components/Navbar";
import { AiOutlineDown } from "react-icons/ai";
import Footer from "Components/Footer";

function UniversityPage() {
  return (
    <div className="w-full h-full bg-white bg-cover">
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <div className="h-fit m-5 p-4 shadow rounded bg-[#950003] flex justify-between text-white gap-3">
        {/* Logo */}
        <div className="bg-white w-32 h-32 p-2 mx-1 rounded flex justify-center items-center">
          <img src="uni_logos/guc_logo.png" alt="" />
        </div>

        {/* Uni Information */}
        <div className="flex flex-col flex-1">
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

        <div className="flex flex-col justify-start items-start w-20 gap-3">
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

      <div className="w-full flex gap-20">
        {/* Left Content */}
        <div className="rounded-r-lg border-[#950003] border-2 border-l-0 bg-[#ECECEC] flex-1 p-7">
          <div className="w-full h-72">TODO: Carousel</div>
          {/* Faculties */}
          <div className="w-full flex flex-col">
            <h1 className="text-2xl mb-3">Faculties</h1>

            {/* Card */}
            <div className="bg-white rounded shadow-md p-4 mb-8">
              <h1 className="text-xl mb-1">Engineering</h1>

              <div className="text-base ml-3 mb-1">
                The Faculty of Engineering provides lectures, experiments, as
                well as the latest research and a wide variety of international
                education and research programs that are all designed to prepare
                students to meet this expectation.
              </div>

              <div className="ml-auto text-white w-fit rounded-full bg-[#950003] px-3 py-1">
                123,123 EGP / year
              </div>

              <h1 className="text-xl mb-1">Majors</h1>
              <div className="/bg-blue-200 flex gap-10 mb-3">
                {/* Items */}
                <div className="/bg-blue-200 flex flex-col gap-3">
                  <div className="bg-[#950003] px-10 py-3 text-white rounded-lg">
                    Computer Science
                  </div>

                  <div className="bg-[#950003] px-10 py-3 text-white rounded-lg">
                    Mechatronics
                  </div>
                </div>
                {/* Description */}
                <div className="bg-[#EBEBEB] text-sm flex-1 px-3 py-1 rounded-lg">
                  The CSEN Department conducts research in areas such as Human
                  Computation, Networking, and Reconfigurable Computing. Human
                  computation is an emerging area of multidisciplinary research.
                  It includes research in fields such as Logic & Cognitive
                  Systems, Constrained Programming, Game with a Purpose, and
                  HCI. The area draws on insights from computer science,
                  complexity theory, psychology, economics, engineering, machine
                  learning, and many other disciplines to explore the
                  computational potential of systems in which humans and
                  machines collaborate to solve problems. Networking research
                  strives to realize the full potential of not only next
                  generation wireless networks but also Internet of Things (IoT)
                  as well as to explore energy efficiency in different types of
                  networks.
                </div>
              </div>

              <details className="p-3 bg-[#EBEBEB] rounded-lg">
                <summary className="list-none flex items-center">
                  Requirements
                  <AiOutlineDown className="ml-auto" />
                </summary>

                <p>REQUIREMENTS CONTENT</p>
              </details>
            </div>
          </div>
          {/* Accomodation */}
          <div className="w-full flex flex-col">
            <h1 className="text-2xl mb-3">Accomodation</h1>

            {/* Card */}
            <div className="bg-white rounded shadow-md p-4 mb-8">
              <div className="/bg-blue-200 flex gap-10 mb-3">
                {/* Items */}
                <div className="/bg-blue-200 flex flex-col gap-3">
                  <div className="bg-[#950003] px-10 py-3 text-white rounded-lg">
                    Hostel
                  </div>
                </div>
                {/* Description */}
                <div className="bg-[#EBEBEB] text-sm flex-1 px-3 py-1 rounded-lg flex gap-1">
                  <div className="flex-1">
                    GUC Hostel in Cairo - “Rehab City” In Cairo, GUC housing is
                    located in AL Rehab compound which is 10 minutes by shuttle
                    bus from the Campus. This housing service is equipped with
                    internet, entertainment, food court, and safety facilities
                    which make the students in an adequate environment that
                    support and facilitate their stay. Click here fo
                  </div>
                  <div className="w-60">
                    <img src="https://via.placeholder.com/500x400" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>TODO: Transportation </div>
          <div>TODO: Activites</div>

          {/* Contacts */}
          <div className="bg-[#950003] rounded shadow h-fit flex p-5 text-white">
            <div className="flex-1 flex flex-col gap-5">
              <div>
                <h1 className="">Location</h1>
                <div className="ml-5">Somewhere</div>
              </div>

              <div>
                <h1 className="">Website</h1>
                <a
                  href="https://guc.edu.eg/"
                  rel="noreferrer"
                  target="_blank"
                  className="ml-5 hover:underline hover:text-slate-300"
                >
                  https://guc.edu.eg
                </a>
              </div>

              <div>
                <h1 className="">Phone numbers</h1>
                <a
                  href="tel:01100000"
                  rel="noreferrer"
                  target="_blank"
                  className="ml-5 hover:underline hover:text-slate-300"
                >
                  01100000
                </a>
              </div>

              <div>
                <h1 className="">Email</h1>
                <a
                  href="mail:guc@guc.edu.eg"
                  rel="noreferrer"
                  target="_blank"
                  className="ml-5 hover:underline hover:text-slate-300"
                >
                  guc@guc.edu.eg
                </a>
              </div>

              {/* Socials */}
              <div className="bg-white rounded-full w-fit p-2 px-5 flex gap-3">
                <a
                  href="https://www.facebook.com/edugate.eg/"
                  className="text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-7 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/edugate-eg/"
                  className="text-blue-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-7 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.instagram.com/edugate.eg/"
                  className="text-pink-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-7 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCLfOlhOWdyhemOWbcWn0YHw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-8 w-auto"
                    src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="ml-auto w-96">
              <iframe
                title="GMAP"
                className="rounded-lg"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=German University in Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="bg-green-400 w-52">Side Nav</div>
      </div>

      <Footer />
    </div>
  );
}

export default UniversityPage;
