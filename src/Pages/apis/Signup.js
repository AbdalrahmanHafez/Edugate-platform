const getCountries = async () => {
  // return axios({
  //   method: "GET",
  //   withCredentials: false,
  //   url: "https://api.edugate-eg.com/api/EduGate/Countries",
  // }).then((res) => res.data)
  // fetch("https://api.edugate-eg.com/api/EduGate/Countries").then((res) =>
  //   res.json()
  // )

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
};

const getCities = async (value) => {
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
};

const getDistricts = async (value) => {
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
};

export { getCountries, getCities, getDistricts };
