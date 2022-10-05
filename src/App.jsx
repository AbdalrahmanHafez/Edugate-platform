import Login from "Pages/Login";
import Signup from "Pages/Signup";
import Test from "Pages/Test";
import UniversitiesInEgypt from "Pages/UniversitiesInEgypt";
import UniversityPage from "Pages/UniversityPage";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";

const App = () => {
  switch (window.location.pathname) {
    case "/test":
      return <Test />;
    case "/university":
      return <UniversityPage />;
    case "/uie":
      return <UniversitiesInEgypt />;
    case "/login":
      return <Login />;
    case "/signup":
      return <Signup />;
    default:
      return <Home />;
  }
};

export default App;
