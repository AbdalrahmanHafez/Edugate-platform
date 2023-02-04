import axios from "axios";

const axClient = axios.create({
  baseURL: "https://api.edugate-eg.com/api/EduGate",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

// function isTokenExpired(token) {
//   const expiry = JSON.parse(atob(token.split(".")[1])).exp;
//   return Math.floor(new Date().getTime() / 1000) >= expiry;
// }

// axClient.interceptors.request.use((config) => {
//   const userdata = localStorage.getItem("user");
//   if (userdata) {
//     const token = JSON.parse(userdata).token;

//     if (token && isTokenExpired(token)) {
//       console.log("[INFO] Token Expired");
//       localStorage.removeItem("user");
//       delete axClient.defaults.headers.common["Authorization"];
//       window.location.href = "/login";
//       throw new axios.Cancel("Operation canceled due to token expiration");
//     }
//   }

//   return config;
// });

//  Log the user out if 401 status is recived
// axClient.interceptors.response.use(
//   (response) => response, // 2xx
//   (error) => {
//     const {
//       config,
//       response: { status },
//     } = error;

//     //unauthorized
//     if (status === 401) {

//       // for example logout is used here and in authContext
//       localStorage.removeItem("user");
//       delete axClient.defaults.headers.common["Authorization"];
//       // search:  axios react navigate  without reloading
//       //https://stackoverflow.com/questions/56952642/how-to-write-redirection-inside-the-axios-interceptors-without-reloading-in-reac
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );

export default axClient;
