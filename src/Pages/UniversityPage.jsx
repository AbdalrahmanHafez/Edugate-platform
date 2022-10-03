import { ButtonsWithDesc } from "Components/ButtonsWithDesc";
import React from "react";
import Navbar from "Components/Navbar";
import { AiOutlineDown } from "react-icons/ai";
import Footer from "Components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoLocation } from "react-icons/go";
import { BsGlobe, BsTelephone, BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import BasicAccordion from "Components/BasicAccordion";
import RequirementTabs from "Components/RequirementTabs";

function UniversityPage() {
  const uniObject = {
    name: "German University in Cairo",
    city: "Cairo",
    description:
      "German university in Cairo/Deutsche Universität in Kairo has been established in 2002 in cooperation with the State Universities of Ulm and Stuttgart, under the patronage of the Egyptian Ministry of Higher Education, the Ministry of Science, Research and Arts, State of Baden- Württemberg, Germany, and supported by the German Academic Exchange Service (DAAD), the German Embassy in Cairo, the Arab/German Chamber of Industry and Commerce (AHK), the Federal Ministry of Education and Research, Germany, The State University of Tübingen, The State University of Mannheim and the Academy of Fine Arts Leipzig.",
    qsRank: 58,
    thRank: 64,
  };
  const uniFaculties = [
    {
      name: "Engineering",
      description:
        "The Faculty of Engineering provides lectures, experiments, as well as the latest research and a wide variety of international education and research programs that are all designed to prepare students to meet this expectation.",
      price: "123,123",
      majors: [
        {
          name: "Computer Science",
          description:
            "The CSEN Department conducts research in areas such as Human Computation, Networking, and Reconfigurable Computing. Human computation is an emerging area of multidisciplinary research. It includes research in fields such as Logic & Cognitive Systems, Constrained Programming, Game with a Purpose, and HCI. The area draws on insights from computer science, complexity theory, psychology, economics, engineering, machine learning, and many other disciplines to explore the computational potential of systems in which humans and machines collaborate to solve problems. Networking research strives to realize the full potential of not only next generation wireless networks but also Internet of Things (IoT) as well as to explore energy efficiency in different types of networks.",
        },
        {
          name: "Mechatronics",
          description:
            "The mechatronics Department conducts research in areas such as Robotics. Human computation is an emerging area of multidisciplinary research. It includes research in fields such as Logic & Cognitive Systems, Constrained Programming, Game with a Purpose, and HCI. The area draws on insights from computer science, complexity theory, psychology, economics, engineering, machine learning, and many other disciplines to explore the computational potential of systems in which humans and machines collaborate to solve problems. Networking research strives to realize the full potential of not only next generation wireless networks but also Internet of Things (IoT) as well as to explore energy efficiency in different types of networks.",
        },
      ],
      requirements: [
        {
          name: "IG",
          description:
            "8 olevels, 2 AS levels or 1 A-Levels, with minimum score of 97%",
        },
        { name: "American", description: "score of 950 in SAT" },
        { name: "Thanawya", description: "score joierwhripewh" },
      ],
    },
    {
      name: "Pharmacy",
      description:
        "The Faculty of Pharmacy provides lectures, experiments, as well as the latest research and a wide variety of international education and research programs that are all designed to prepare students to meet this expectation.",
      price: "250,200",

      majors: [
        {
          name: "Computer Science",
          description:
            "The CSEN Department conducts research in areas such as Human Computation, Networking, and Reconfigurable Computing. Human computation is an emerging area of multidisciplinary research. It includes research in fields such as Logic & Cognitive Systems, Constrained Programming, Game with a Purpose, and HCI. The area draws on insights from computer science, complexity theory, psychology, economics, engineering, machine learning, and many other disciplines to explore the computational potential of systems in which humans and machines collaborate to solve problems. Networking research strives to realize the full potential of not only next generation wireless networks but also Internet of Things (IoT) as well as to explore energy efficiency in different types of networks.",
        },
        {
          name: "Mechatronics",
          description:
            "The mechatronics Department conducts research in areas such as Robotics. Human computation is an emerging area of multidisciplinary research. It includes research in fields such as Logic & Cognitive Systems, Constrained Programming, Game with a Purpose, and HCI. The area draws on insights from computer science, complexity theory, psychology, economics, engineering, machine learning, and many other disciplines to explore the computational potential of systems in which humans and machines collaborate to solve problems. Networking research strives to realize the full potential of not only next generation wireless networks but also Internet of Things (IoT) as well as to explore energy efficiency in different types of networks.",
        },
      ],
      requirements: [
        {
          name: "IG",
          description:
            "8 olevels, 2 AS levels or 1 A-Levels, with minimum score of 97%",
        },
        { name: "American", description: "score of 950 in SAT" },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-white bg-cover">
      <Navbar />

      <br />

      <div className="h-fit m-5 p-4 shadow rounded bg-[#950003] flex lg:flex-row flex-col justify-between text-white gap-3">
        {/* Logo */}
        <div className="bg-white w-32 h-32 p-2 rounded flex justify-center items-center mx-auto">
          <img src="uni_logos/guc_logo.png" alt="" />
        </div>

        {/* Uni Information */}
        <div className="flex flex-col /bg-blue-300 flex-1 ">
          <div className="text-xl lg:mx-0 mx-auto">{uniObject.name}</div>

          <div className="ml-5 flex flex-col gap-3 mt-3">
            <div className="lg:mx-0 mx-auto">City: {uniObject.city}</div>
            <div className="text-[#EDEDED] text-justify">
              {uniObject.description}
            </div>
          </div>
        </div>

        <div className="flex lg:flex-col flex-row justify-start items-start gap-3 mx-auto">
          {/* Rank item */}
          <div className="w-24">
            <div className="bg-white text-[#5D5D5D] h-16 rounded-t-lg flex justify-center items-center text-2xl">
              {uniObject.qsRank}
            </div>
            <div className="bg-black h-6 rounded-b-lg text-center flex justify-center items-center">
              QS
            </div>
          </div>

          {/* Rank item */}
          <div className="w-24">
            <div className="bg-white text-[#5D5D5D] h-16 rounded-t-lg flex justify-center items-center text-2xl">
              {uniObject.thRank}
            </div>
            <div className="bg-black h-6 rounded-b-lg text-xs text-center flex justify-center items-center">
              Times Higher
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:hidden block mb-5">
        {/* Apply Now */}
        <button className="bg-[#950003] hover:bg-[#ac1013] text-white w-full py-2 rounded">
          Apply Now
        </button>
        {/* Add to Compare */}
        <button className="bg-[#DFDFDF] text-slate-800 hover:bg-gray-200 w-full py-2 rounded">
          Add to Compare
        </button>
      </div>
      <div className="w-full flex gap-0 lg:gap-20">
        {/* Left Content */}
        <div className="rounded-r-lg border-[#950003] border-2 border-l-0 bg-[#ECECEC] flex-1 p-7">
          {/* Media Carousel */}

          <div className="w-full h-72 mb-5">
            <Carousel
              showArrows
              showStatus
              infiniteLoop
              autoPlay
              stopOnHover
              emulateTouch
              swipeable
              dynamicHeight
              onChange={() => {}}
              onClickItem={() => {}}
              onClickThumb={() => {}}
              showThumbs={false}
              interval={5000}
            >
              {["29", "33", "48", "01"].map((item, idx) => (
                <div
                  key={idx}
                  className="h-72 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(https://www.guc.edu.eg//img/content/about_guc/${item}.jpg)`,
                  }}
                />
              ))}
            </Carousel>
          </div>
          {/* Faculties */}
          <div className="w-full flex flex-col">
            {/* This is a fake anchor to avoid the navbar */}
            <div
              id="Faculties"
              style={{
                display: "block",
                position: "relative",
                top: "-100px",
                visibility: "hidden",
              }}
            />
            <h1 className="text-2xl mb-3">Faculties</h1>
            {/* Card */}
            {uniFaculties.map((faculty, idx) => (
              <div key={idx} className="bg-white rounded shadow-md p-4 mb-8">
                <div
                  id={faculty.name}
                  style={{
                    display: "block",
                    position: "relative",
                    top: "-100px",
                    visibility: "hidden",
                  }}
                />
                <h1 className="text-xl mb-1">{faculty.name}</h1>

                <div className="text-base ml-3 mb-1">{faculty.description}</div>

                <div className="ml-auto text-white w-fit rounded-full bg-[#950003] px-3 py-1">
                  {faculty.price} EGP / year
                </div>

                <h1 className="text-xl mb-1">Majors</h1>
                <ButtonsWithDesc data={faculty.majors} />

                <BasicAccordion
                  name="Requirements"
                  description=<RequirementTabs data={faculty.requirements} />
                />
              </div>
            ))}
          </div>

          {/* Accommodation */}
          <div className="w-full flex flex-col ">
            <div
              id="Accommodation"
              style={{
                display: "block",
                position: "relative",
                top: "-100px",
                visibility: "hidden",
              }}
            />
            <h1 className="text-2xl mb-3">Accommodation</h1>

            {/* Card */}
            <div className="bg-white rounded shadow-md p-4 mb-8">
              <ButtonsWithDesc
                data={[
                  {
                    name: "Hostel",
                    description: (
                      <div className="bg-[#EBEBEB] text-sm flex-1 px-3 py-1 rounded-lg flex gap-3 lg:flex-row flex-col">
                        <div className="flex-1 text-justify">
                          GUC Hostel in Cairo - “Rehab City” In Cairo, GUC
                          housing is located in AL Rehab compound which is 10
                          minutes by shuttle bus from the Campus. This housing
                          service is equipped with internet, entertainment, food
                          court, and safety facilities which make the students
                          in an adequate environment that support and facilitate
                          their stay. Click here fo
                        </div>
                        <div className="w-60 h-full lg:ml-auto mx-auto">
                          {/* <img src="https://via.placeholder.com/500x400" alt="" /> */}

                          <Carousel
                            showArrows
                            showStatus
                            infiniteLoop
                            autoPlay
                            stopOnHover
                            emulateTouch
                            swipeable
                            dynamicHeight
                            onChange={() => {}}
                            onClickItem={() => {}}
                            onClickThumb={() => {}}
                            showThumbs={false}
                            interval={5000}
                          >
                            {["29", "33", "48", "01"].map((item, idx) => (
                              <div
                                key={idx}
                                className="h-44 bg-contain bg-center bg-no-repeat"
                                style={{
                                  backgroundImage: `url(https://www.guc.edu.eg//img/content/about_guc/${item}.jpg)`,
                                }}
                              />
                            ))}
                          </Carousel>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>

          <div>TODO: Transportation </div>
          <div>TODO: Activites</div>

          {/* Contacts */}
          <div
            id="Contacts"
            style={{
              display: "block",
              position: "relative",
              top: "-200px",
              visibility: "hidden",
            }}
          />

          <div className="bg-[#950003] rounded shadow flex p-5 text-white lg:flex-row flex-col">
            <div className=" flex flex-col gap-5 flex-1 lg:mx-0 ml-0 lg:mb-0 mb-5 ">
              <div className="flex items-center gap-3">
                <GoLocation className="text-3xl" />
                <div>
                  <div className="ml-5">Somewhere</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BsGlobe className="text-3xl" />
                <div>
                  <a
                    href="https://guc.edu.eg/"
                    rel="noreferrer"
                    target="_blank"
                    className="ml-5 hover:underline hover:text-slate-300"
                  >
                    https://guc.edu.eg
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BsTelephone className="text-3xl" />
                <div>
                  <a
                    href="tel:01100000"
                    rel="noreferrer"
                    target="_blank"
                    className="ml-5 hover:underline hover:text-slate-300"
                  >
                    01100000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-3xl" />
                <div>
                  <a
                    href="mail:guc@guc.edu.eg"
                    rel="noreferrer"
                    target="_blank"
                    className="ml-5 hover:underline hover:text-slate-300"
                  >
                    guc@guc.edu.eg
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="w-fit flex gap-3">
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    alt=""
                  />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCLfOlhOWdyhemOWbcWn0YHw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-7 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            {/* Google Map */}
            {/* //https://maps.google.com/maps?q=37.771008,+-122.41175+(You+can+insert+your+text+here)&amp;hl=en&amp;t=v&amp;vpsrc=0&amp;ie=UTF8&amp;z=14&amp;iwloc=A&amp;ll=38.287602,-122.036186&amp;output=embed */}
            <div className="lg:w-96 lg:flex-none w-auto flex-1 lg:ml-auto mr-auto">
              <iframe
                title="GMAP "
                className="rounded-lg"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4199.614744735209!2d31.44060538650522!3d29.986056094456515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cb2bfafbe73%3A0x6e7220116094726d!2sGerman%20University%20in%20Cairo!5e0!3m2!1sen!2seg!4v1664302560297!5m2!1sen!2seg"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="/bg-green-400 w-52 lg:block hidden">
          {/* Side Nav */}
          <div className="/bg-red-200 p-3 border-[#950003] border-2 border-r-0 rounded-l-lg sticky top-32">
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex flex-col">
                <a
                  href="#Faculties"
                  className="hover:underline  hover:text-[#950003]"
                >
                  Faculties
                </a>
                <a
                  href="#Engineering"
                  className="ml-5 hover:underline  hover:text-[#950003]"
                >
                  Engineering
                </a>
                <a
                  href="#NOTIMPLEMENTED"
                  className="ml-5 hover:underline  hover:text-[#950003]"
                >
                  Pharmacy
                </a>
              </div>

              <a
                href="#Accommodation"
                className="hover:underline  hover:text-[#950003]"
              >
                Accommodation
              </a>

              <a
                href="#NOTIMPLEMENTED"
                className="hover:underline  hover:text-[#950003]"
              >
                Transportation
              </a>

              <a
                href="#NOTIMPLEMENTED"
                className="hover:underline  hover:text-[#950003]"
              >
                Activities
              </a>

              <a
                href="#Contacts"
                className="hover:underline  hover:text-[#950003]"
              >
                Contacts
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {/* Apply Now */}
              <button className="bg-[#950003] hover:bg-[#ac1013] text-white w-full py-2 rounded">
                Apply Now
              </button>
              {/* Add to Compare */}
              <button className="bg-[#DFDFDF] text-slate-800 hover:bg-gray-200 w-full py-2 rounded">
                Add to Compare
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UniversityPage;
