import * as React from "react";
import axClient from "./apis/AxiosClient";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          axClient.get("/test").then((res) => {
            console.log(res.data);
          });
        }}
      >
        TEST
      </button>
    </div>
  );
}
