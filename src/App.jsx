import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PageNotFound from "Components/PageNotFound";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import Test from "Pages/Test";
import UniversitiesInEgypt from "Pages/UniversitiesInEgypt";
import UniversityPage from "Pages/UniversityPage";
import ManageUniversity from "Pages/ManageUniversity";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ManageUniversities from "Pages/ManageUniversities";

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

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<NavFooterLayout />}>
          <Route index element={<Home />} />
          <Route path="UniversitiesInEgypt" element={<UniversitiesInEgypt />} />
          <Route path="University/:universityid" element={<UniversityPage />} />

          <Route path="ManageUniversities" element={<ManageUniversities />} />
          <Route
            path="ManageUniversities/:universityid"
            element={<ManageUniversity />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
