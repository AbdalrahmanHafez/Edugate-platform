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

  gmapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4199.614744735209!2d31.44060538650522!3d29.986056094456515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cb2bfafbe73%3A0x6e7220116094726d!2sGerman%20University%20in%20Cairo!5e0!3m2!1sen!2seg!4v1664302560297!5m2!1sen!2seg",
};
export default UniversityObject;
