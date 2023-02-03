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
import { registerStudent } from "Pages/apis/Auth";
import { userLogin } from "Pages/apis/Auth";

const Context = createContext(null);

export function useAuth() {
  return useContext(Context);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user");
  const isLoggedIn = !!user;

  const signup = useMutation({
    mutationFn: (data) => {
      console.log("Signup data is ", data);
      return registerStudent(data);
    },
    onSuccess() {
      console.log("Signup success");
    },
  });

  const login = useMutation({
    mutationFn: ({ username, password }) => {
      return userLogin(username, password);
    },
    onSuccess(userdata) {
      setUser(userdata);
    },
  });

  const logout = useMutation({
    mutationFn: () => {
      // const token = user.token;
      // return axClient.post(`/logout`, { token });
    },
    onSuccess() {
      setUser(undefined);
    },
  });

  return (
    <Context.Provider value={{ login, signup, logout, user, isLoggedIn }}>
      {children}
    </Context.Provider>
  );
}
