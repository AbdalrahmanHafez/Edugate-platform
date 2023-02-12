import React, { useState } from "react";
import { useAuth } from "Context/AuthContext";
import { getUserInfo } from "Pages/apis/Auth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getCountries } from "Pages/apis/Auth";
import { Grid } from "@mui/material";

function MyProfile() {
  const { user } = useAuth();

  const queryOps = {
    staleTime: 1000 * 60 * 5,
    onError: (error) => toast.error(`Something went wrong: ${error.message}`),
  };

  const { data: userInfo } = useQuery(
    ["UserInfo"],
    () => getUserInfo(user.userId),
    queryOps
  );

  const { isLoading, data: countries } = useQuery(
    ["countries"],
    getCountries,
    queryOps
  );

  if (!userInfo) return null;
  console.log("userInfo is ", userInfo);

  return (
    <div className="mb-5 mt-5 h-fit w-full bg-cover">
      <br />
      <br />
      <br />

      <Grid container rowSpacing={3} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
        <Grid className="hover:bg-gray-200" item xs={6}>
          <div className="text-right">Username:</div>
        </Grid>
        <Grid className="hover:bg-gray-200" item xs={6}>
          <div>{userInfo.userName}</div>
        </Grid>
        <Grid className="hover:bg-gray-200" item xs={6}>
          <div className="text-right">Email:</div>
        </Grid>
        <Grid className="hover:bg-gray-200" item xs={6}>
          <div>{userInfo.userEmail}</div>
        </Grid>
        <Grid className="hover:bg-gray-200" item xs={6}>
          <div className="text-right">Gender:</div>
        </Grid>
        <Grid item xs={6}>
          <div>{userInfo.userGender ? "Male" : "Female"}</div>
        </Grid>
        <Grid item xs={6}>
          <div className="text-right">Birthdate:</div>
        </Grid>
        <Grid item xs={6}>
          <div>{userInfo.birthDate}</div>
        </Grid>
        <Grid item xs={6}>
          <div className="text-right">Phone Number:</div>
        </Grid>
        <Grid item xs={6}>
          <div>{userInfo.userPhone}</div>
        </Grid>
        <Grid item xs={6}>
          <div className="text-right">Grade:</div>
        </Grid>
        <Grid item xs={6}>
          <div>{userInfo.grade}</div>
        </Grid>
      </Grid>
    </div>
  );
}

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default MyProfile;
