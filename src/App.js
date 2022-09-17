import Test from "Pages/Test";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";

const App = () => {
  switch (window.location.pathname) {
    case "/test":
      return <Test />;
    default:
      return <Home />;
  }
};

export default App;
