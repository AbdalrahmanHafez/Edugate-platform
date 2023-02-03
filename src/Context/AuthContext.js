import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "Hooks/useLocalStorage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import axClient from "Pages/apis/AxiosClient";
import jwt from "jwt-decode";

const Context = createContext(null);

export function useAuth() {
  return useContext(Context);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user");
  const isLoggedIn = !!user;

  const signup = useMutation({
    mutationFn: async (data) => {
      console.log("Signup data is ", data);

      //   return new Promise((resolve, reject) => {
      //     resolve({
      //       status: 200,
      //       data: {
      //         message: "User registered successfully",
      //       },
      //     });
      //   });

      return axClient.post("https://api.edugate-eg.com/api/EduGate/Reg", data);
    },
    onSuccess() {
      console.log("Signup success");
    },
  });

  const login = useMutation({
    mutationFn: ({ username, password }) => {
      //   return new Promise((res, rej) =>
      //     res({
      //       userName: "ahmed",
      //       token: "123",
      //       userId: 3,
      //       userType: 2,
      //       userEmail: "a@a.com",
      //     })
      //   );

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
            token,
          };
        });
    },
    onSuccess(data) {
      setUser(data);
    },
  });

  //   const logout = useMutation({
  //     mutationFn: () => {
  //       const token = user.token;
  //       return axClient.post(`/logout`, { token });
  //     },
  //     onSuccess() {
  //       setUser(undefined);
  //     },
  //   });

  return (
    <Context.Provider value={{ login, signup, user, isLoggedIn }}>
      {children}
    </Context.Provider>
  );
}
