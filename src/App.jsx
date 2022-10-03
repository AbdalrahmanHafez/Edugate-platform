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
    default:
      return <Home />;
  }
};

export default App;
