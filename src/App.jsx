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
    default:
      return <Home />;
  }
};

export default App;
