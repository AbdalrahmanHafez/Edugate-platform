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
    <div className="h-fit w-full bg-gray-200">
      {/* Search Box */}
      <section className="mt-[20px] flex min-h-[24rem] flex-col items-center rounded-br-lg bg-[rgba(0,0,0,.4)] bg-[url('../public/Banner3.jpg')] bg-cover bg-center bg-blend-multiply">
        <h1 className="mt-20 mb-5 select-none text-5xl text-white drop-shadow-[2px_2px_0px_#000000]">
          Create The Future
        </h1>
      </section>

      <div className="relative top-[-14rem] mx-auto h-fit w-full md:w-8/12">
        <SearchUnis inHomePage={false} />
      </div>
    </div>
  );
}

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default UniversitiesInEgypt;
