import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function Test() {
  const btnClick = () => {
    fetch("https://api.edugate-eg.com/api/EduGate/Countries")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <h1>https://api.edugate-eg.com/api/EduGate/Countries</h1>
      <button className="rounded bg-blue-700 p-2 text-white" onClick={btnClick}>
        GET
      </button>
    </>
  );
}
