import jwt from "jwt-decode";
import axClient from "./AxiosClient";

const mockData = false;

const registerStudent = (formdata) => {
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

const userLogin = (username, password) => {
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
        token,
      };
    });
};

const getCountries = async () => {
  if (!mockData)
    return axClient("https://api.edugate-eg.com/api/EduGate/Countries").then(
      (res) => res.data
    );
  else
    return new Promise((resolve, reject) => {
      resolve([
        {
          value: 1,
          name: "Egypt",
        },
        {
          value: 2,
          name: "Afghanistan",
        },
        {
          value: 3,
          name: "Albania",
        },
      ]);
    });

  //   fetch("https://api.edugate-eg.com/api/EduGate/Countries").then((res) =>
  //     res.json()
  //   )
};

const getCities = async (value) => {
  if (!mockData)
    return axClient(
      "https://api.edugate-eg.com/api/EduGate/Cities?CountryID=" + value
    ).then((res) => res.data);
  else {
    if (value === 1) {
      return [
        {
          value: 1,
          name: "Cairo",
        },
        {
          value: 2,
          name: "Alexandria",
        },
        {
          value: 3,
          name: "Giza",
        },
      ];
    }

    if (value === 2) {
      return [
        {
          value: 4,
          name: "Kabul",
        },
        {
          value: 5,
          name: "Kandahar",
        },
        {
          value: 6,
          name: "Herat",
        },
      ];
    }

    if (value === 3) {
      return [
        {
          value: 7,
          name: "country1",
        },
        {
          value: 8,
          name: "country2",
        },
        {
          value: 9,
          name: "country3",
        },
      ];
    }
    return [];
  }
};

const getDistricts = async (value) => {
  if (!mockData)
    return axClient(
      "https://api.edugate-eg.com/api/EduGate/Districts?CityID=" + value
    ).then((res) => res.data);
  else {
    if (value === 1) {
      return [
        {
          value: 1,
          name: "D1",
        },
        {
          value: 2,
          name: "D2",
        },
        {
          value: 3,
          name: "D3",
        },
      ];
    }

    if (value === 2) {
      return [
        {
          value: 4,
          name: "D4",
        },
        {
          value: 5,
          name: "D5",
        },
        {
          value: 6,
          name: "D6",
        },
      ];
    }

    if (value === 3) {
      return [
        {
          value: 7,
          name: "D6",
        },
        {
          value: 8,
          name: "country2",
        },
        {
          value: 9,
          name: "country3",
        },
      ];
    }
    return [];
  }
};

const getHscertificates = async () => {
  if (!mockData)
    return axClient(
      "https://api.edugate-eg.com/api/EduGate/HSCertificates"
    ).then((res) => res.data);
  else {
    return [
      {
        value: 1,
        name: "cert 1",
      },
      {
        value: 2,
        name: "cert 2",
      },
      {
        value: 3,
        name: "cert 3",
      },
    ];
  }
};

const getMajors = async () => {
  if (!mockData)
    return axClient(
      "https://api.edugate-eg.com/api/EduGate/MajorCategories"
    ).then((res) => res.data);
  else {
    return [
      {
        value: 1,
        name: "Major 1",
      },
      {
        value: 2,
        name: "Major 2",
      },
      {
        value: 3,
        name: "Major 3",
      },
    ];
  }
};

const getDegrees = async (value) => {
  if (!mockData)
    return axClient(
      "https://api.edugate-eg.com/api/EduGate/Degrees?MajorCategories=" + value
    ).then((res) => res.data);
  else {
    if (value === 1) {
      return [
        {
          value: 1,
          name: "D 1",
        },
        {
          value: 2,
          name: "D 2",
        },
        {
          value: 3,
          name: "D 3",
        },
      ];
    }

    if (value === 2) {
      return [
        {
          value: 4,
          name: "D 4",
        },
        {
          value: 5,
          name: "D 5",
        },
        {
          value: 6,
          name: "D 6",
        },
      ];
    }

    if (value === 3) {
      return [
        {
          value: 7,
          name: "D 6",
        },
        {
          value: 8,
          name: "D 7",
        },
        {
          value: 9,
          name: "D 8",
        },
      ];
    }
    return [];
  }
};

export {
  getCountries,
  getCities,
  getDistricts,
  getHscertificates,
  getMajors,
  getDegrees,
  registerStudent,
  userLogin,
};
