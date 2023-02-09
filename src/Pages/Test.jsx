import { useAuth } from "Context/AuthContext";
import * as React from "react";
import axClient from "./apis/AxiosClient";
import TextField from "@mui/material/TextField";

const Button = ({ children, ...rest }) => (
  <button className="btn btn-primary" {...rest}>
    {children}
  </button>
);

export default function Test() {
  const { user } = useAuth();

  React.useEffect(() => {
    console.log("Initally", axClient.defaults.headers.common);
  }, []);

  return (
    <div className="flex flex-col gap-10 bg-slate-500">
      <h1 className="bg-yellow-400">TEST 1</h1>

      <Button
        onClick={async () => {
          console.log("status", axClient.defaults.headers.common);
        }}
      >
        Auth Status
      </Button>

      <Button
        onClick={async () => {
          await axClient
            .get("https://api.edugate-eg.com/api/EduGate/UserDetail?userId=49")
            .then((res) => {
              console.log("Success, " + res.data.userTypeID);
            });
        }}
      >
        UserDetail
      </Button>

      <Button
        onClick={() => {
          axClient
            .get("https://api.edugate-eg.com/api/EduGate/GetOrgData?OrgId=2")
            .then((res) => {
              console.log(res);
            });
        }}
      >
        GetOrgData
      </Button>

      <Button
        onClick={() => {
          axClient
            .get("https://api.edugate-eg.com/api/EduGate/Countries")
            .then((res) => {
              console.log(res);
            });
        }}
      >
        GET Countries
      </Button>
    </div>
  );
}
