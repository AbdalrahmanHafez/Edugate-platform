import { useAuth } from "Context/AuthContext";
import * as React from "react";
import axClient from "./apis/AxiosClient";
import TextField from "@mui/material/TextField";

export default function Test() {
  const { user } = useAuth();
  return (
    <div>
      <button
        onClick={async () => {
          console.log("before", axClient.defaults.headers.common);

          axClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.token}`;

          await axClient
            .get("https://api.edugate-eg.com/api/EduGate/UserDetail?userId=49")
            .then((res) => console.log("Success, " + res.data.userTypeID));
        }}
      >
        axClient Test
      </button>

      <br />

      <button
        onClick={() => {
          axClient
            .get("https://api.edugate-eg.com/api/EduGate/GetOrgData?OrgId=2")
            .then((res) => {
              console.log(res);
            });
        }}
      >
        GetOrgData
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
        Countries
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <TextField
          required
          id="phonenumber"
          label="Phone Number"
          size="small"
          className="w-full"
          inputProps={{
            inputMode: "numeric",
            pattern:
              "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$",
          }}
        />

        <button>SUBMIT</button>
      </form>
    </div>
  );
}
