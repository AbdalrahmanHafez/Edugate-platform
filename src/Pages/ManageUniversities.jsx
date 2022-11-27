import React from "react";
import { Link } from "react-router-dom";

function ManageUniversities() {
  return (
    <div className="mx-32 h-full">
      <br />

      <h1 className="mb-5 text-3xl">Manage Universities</h1>

      <div className="grid grid-cols-4 gap-4">
        {[
          "German University in Cairo",
          "American University in Cairo",
          "Cairo University",
          "Alexandria University",
          "Helwan University",
          "Zagazig University",
          "Suez Canal University",
          "Minia University",
          "Benha University",
          "Assiut University",
          "Mansoura University",
          "Tanta University",
        ].map((item, index) => (
          <Link
            key={index}
            to="/ManageUniversities/UniversityId"
            className="rounded bg-[#950003] p-3 text-white hover:bg-[#aa0003]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ManageUniversities;
