import { useEffect, useState } from "react";
import Home from "./Pages/Home";

const App = () => {
  switch (window.location.pathname) {
    default:
      return <Home />;
  }
};

export default App;
