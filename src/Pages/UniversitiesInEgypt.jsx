import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import React, { useState } from "react";

import Carousel from "Components/Carousel";
import FeaturedArticles from "Components/FeaturedArticles";
import FeaturedUniversities from "Components/FeaturedUniversities";
import SearchUnis from "Components/SearchUnis";
import StudyAbroad from "Components/StudyAbroad";
import FeaturedPrograms from "Components/FeaturedPrograms";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function UniversitiesInEgypt() {
  return (
    <div className="w-full h-fit bg-gray-200">
      <Navbar />

      {/* Search Box */}
      <section className="min-h-[24rem] mt-[20px] bg-[url('../public/Banner3.jpg')] bg-[rgba(0,0,0,.4)] bg-blend-multiply bg-cover bg-center flex flex-col items-center rounded-br-lg">
        <h1 className="mt-20 text-5xl text-white mb-5 select-none drop-shadow-[2px_2px_0px_#000000]">
          Create The Future
        </h1>
      </section>

      <div className="md:w-8/12 w-full h-fit mx-auto relative top-[-14rem]">
        <SearchUnis inHomePage={false} />
      </div>

      <Footer />
    </div>
  );
}

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default UniversitiesInEgypt;
