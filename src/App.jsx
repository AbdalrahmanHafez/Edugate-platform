import PageNotFound from "Components/PageNotFound";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import Test from "Pages/Test";
import UniversitiesInEgypt from "Pages/UniversitiesInEgypt";
import UniversityPage from "Pages/UniversityPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";

const NavFooterLayout = () => (
  <>
    <Navbar /> <Outlet /> <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="test" element={<Test />} />

        <Route path="/" element={<NavFooterLayout />}>
          <Route index element={<Home />} />
          <Route path="UniversitiesInEgypt" element={<UniversitiesInEgypt />} />
          <Route path="University/:universityid" element={<UniversityPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
