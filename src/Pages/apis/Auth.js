import jwt from "jwt-decode";
import axClient from "./AxiosClient";

const mockData = false;

export const registerStudent = (formdata) => {
  if (mockData)
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        data: {
          message: "User registered successfully",
        },
      });
    });

  return axClient.post("https://api.edugate-eg.com/api/EduGate/Reg", formdata);
};

export const getUserInfo = async (userId) => {
  if (mockData)
    return new Promise((res, rej) =>
      res({
        token: "eyJhbGciOi",
        userId: 3,
      })
    );

  return axClient
    .get("https://api.edugate-eg.com/api/EduGate/UserDetail?userId=" + userId)
    .then(async (res) => {
      const { data } = res;
      return data;
    });
};

export const userLogin = (username, password) => {
  if (mockData)
    return new Promise((res, rej) =>
      res({
        userName: "ahmed",
        token: "eyJhbGciOi",
        userId: 3,
        userType: 2,
        userEmail: "a@a.com",
      })
    );

    

  return axClient
    .post("https://api.edugate-eg.com/api/Login", { username, password })
    .then(async (res) => {
      const { data: token } = res;
      //   aud : "https://api.edugate-eg.com/"
      //   exp : 1675331815
      //   http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress : "a@a.com"
      //   http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname : "Mohamed AbdelRaouf"
      //   http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier : "2"
      //   iss : "https://api.edugate-eg.com/"
      const userData = jwt(token);
      const userName =
        userData[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"
        ];
      const userId = parseInt(
        userData[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ]
      );
      const userEmail =
        userData[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ];

      axClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const userType = await axClient
        .get(
          `https://api.edugate-eg.com/api/EduGate/UserDetail?userId=${userId}`
        )
        .then((res) => res.data.userTypeID);

      return {
        userName,
        userId,
        userEmail,
        userType,
        getUserInfo,
        token,
      };
    });
};
