// This should be comming from the Backend

const UniversityObject = {
  name: "University Name",
  logoSrc: "/uni_logos/guc_logo.png",
  city: "University City",
  description: "University Descripioon",
  qsRank: 0,
  thRank: 0,

  mainCarouselUrls: [
    "https://www.guc.edu.eg//img/content/about_guc/29.jpg",
    "https://www.guc.edu.eg//img/content/about_guc/33.jpg",
    "https://www.guc.edu.eg//img/content/about_guc/48.jpg",
    "https://www.guc.edu.eg//img/content/about_guc/01.jpg",
  ],

  faculties: [
    {
      name: "Faculty Name",
      description: "Faculty Description",
      price: "123,123",
      majors: [
        {
          name: "Major Name",
          description: "MajoDescription",
        },
      ],
      requirements: [
        {
          name: "IG",
          description:
            "8 olevels, 2 AS levels or 1 A-Levels, with minimum score of 97%",
        },
        {
          name: "American",
          description: "score of 950 in SAT",
        },
        {
          name: "Thanawya",
          description: "score joierwhripewh",
        },
      ],
    },
  ],
  accommodation: [
    {
      name: "Hostel",
      description:
        "GUC Hostel in Cairo - “Rehab City” In Cairo, GUC housing is located in AL Rehab compound which is 10 minutes by shuttle bus from the Campus.  This housing service is equipped with internet, entertainment, food court, and safety facilities which make the students in an adequate environment that support and facilitate their stay.",
      imageUrls: [
        "https://www.guc.edu.eg//img/content/about_guc/29.jpg",
        "https://www.guc.edu.eg//img/content/about_guc/33.jpg",
        "https://www.guc.edu.eg//img/content/about_guc/48.jpg",
        "https://www.guc.edu.eg//img/content/about_guc/01.jpg",
      ],
    },
  ],

  contactInformation: {
    location: "University Location",
    website: "https://example.website.edu.eg",
    phone: "0123456789",
    email: "example@email.com",

    socialMedia: {
      facebook: "https://www.facebook.com/example",
      linkedin: "https://www.linkedin.com/example",
      instagram: "https://www.instagram.com/example",
      youtube: "https://www.youtube.com/example",
    },
  },
};
export default UniversityObject;
