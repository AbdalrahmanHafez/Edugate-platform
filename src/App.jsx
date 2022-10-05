import  Login  from "Pages/Login";
import Test from "Pages/Test";
import UniversityPage from "Pages/UniversityPage";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";

const App = () => {
  switch (window.location.pathname) {
    case "/test":
      return <Test />;
    case "/university":
      return <UniversityPage />;
    case "/login":
      return <Login />;   
    default:
      return <Home />;
  }
};

export default App;
