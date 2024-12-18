import axClient from "./AxiosClient";
const mockData = false;

export const getCountries = async () => {
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

export const getCities = async (value) => {
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

export const getDistricts = async (value) => {
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

export const getHscertificates = async () => {
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

export const getMajors = async () => {
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

export const getDegrees = async (value) => {
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
