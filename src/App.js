import { useEffect, useState } from "react";
import One from "./One";
import Two from "./Two";

const App = () => {
  switch (window.location.pathname) {
    case "/1":
      return <One />;
    case "/2":
      return <Two />;
    default:
      return null;
  }
};

export default App;
