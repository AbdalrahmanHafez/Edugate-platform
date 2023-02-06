import * as React from "react";
import axClient from "./apis/AxiosClient";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          axClient
            .get("https://api.edugate-eg.com/api/EduGate/GetOrgData?OrgId=2")
            .then((res) => {
              console.log(res);
            });
        }}
      >
        TEST_1
      </button>
      <br />
      <button
        onClick={() => {
          axClient
            .get("https://api.edugate-eg.com/api/EduGate/Countries")
            .then((res) => {
              console.log(res);
            });
        }}
      >
        TEST_2
      </button>
    </div>
  );
}
