import axClient from "./AxiosClient";

const login = (username, password) => {
  return fetch("https://api.edugate-eg.com/api/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());

  return axClient
    .post("https://api.edugate-eg.com/api/Login", { username, password })
    .then((res) => res.json());
};

export default login;
