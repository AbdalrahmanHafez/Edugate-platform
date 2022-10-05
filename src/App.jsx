import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import Test from "Pages/Test";
import UniversitiesInEgypt from "Pages/UniversitiesInEgypt";
import UniversityPage from "Pages/UniversityPage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";

const NavAndFooterLayout = () => (
  <>
    <Navbar /> <Outlet /> <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="test" element={<Test />} />

        <Route path="/" element={<NavAndFooterLayout />}>
          <Route index element={<Home />} />
          <Route path="UniversitiesInEgypt" element={<UniversitiesInEgypt />} />
          <Route path="University/:universityid" element={<UniversityPage />} />

          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}

          <Route path="*" element={<h1>404 Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
