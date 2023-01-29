import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { toast } from "react-toastify";

export default function Test() {
  const btnClick = () => {
    console.log("toast?");
    // toast("Wow so easy!");
    // toast.success("Wow so easy!");
    toast.error("Wow so easy!");
  };
  return (
    <>
      <button className="rounded bg-blue-700 p-2 text-white" onClick={btnClick}>
        GET
      </button>
    </>
  );
}
