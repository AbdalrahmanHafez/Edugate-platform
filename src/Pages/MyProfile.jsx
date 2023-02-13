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

  if (!userInfo) return null;

  return (
    <div className="mb-5 mt-5 h-fit w-full bg-cover">
      <br />
      <br />
      <h1 className="text-center text-3xl font-bold">My Profile</h1>
      <br />

      <div className="grid grid-cols-2 gap-4">
        <div className="text-right ">Username:</div>
        <div className="hover:bg-gray-200">{userInfo.userName}</div>
        <div className="text-right">Email:</div>
        <div className="hover:bg-gray-200">{userInfo.userEmail}</div>
        <div className="text-right">Gender:</div>
        <div className="hover:bg-gray-200">
          {userInfo.userGender ? "Male" : "Female"}
        </div>
        <div className="text-right">Birthdate:</div>
        <div className="hover:bg-gray-200">{userInfo.birthDate}</div>
        <div className="text-right">Nationality:</div>
        <div className="hover:bg-gray-200">{userInfo.nationalityName}</div>
        <div className="text-right">Country:</div>
        <div className="hover:bg-gray-200">{userInfo.countryName}</div>
        <div className="text-right">City:</div>
        <div className="hover:bg-gray-200">{userInfo.cityName}</div>
        <div className="text-right">District:</div>
        <div className="hover:bg-gray-200">{userInfo.districtName}</div>
        <div className="text-right">High School Certificate Name:</div>
        <div className="hover:bg-gray-200">{userInfo.hsCertificateName}</div>
        <div className="text-right">Phone Number:</div>
        <div className="hover:bg-gray-200">{userInfo.userPhone}</div>
        <div className="text-right">Grade:</div>
        <div className="hover:bg-gray-200">{userInfo.grade}</div>
      </div>
    </div>
  );
}

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default MyProfile;
