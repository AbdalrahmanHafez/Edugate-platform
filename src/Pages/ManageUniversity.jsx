import ButtonsWithContent from "Components/ButtonsWithContent";
import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoLocation } from "react-icons/go";
import { BsGlobe, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import BasicAccordion from "Components/BasicAccordion";
import RequirementTabs from "Components/RequirementTabs";
import { FiEdit2, FiUpload } from "react-icons/fi";
import EditableText from "Components/EditableText";
import UniversityObject from "json/UniversityObject";
import EditableCarousel from "Components/EditableCarousel";

const Logo = ({ src, onEdit }) => {
  const handleChange = () => {
    // TODO: implement uploading to server
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        onEdit(reader.result);
      };
    };
    fileInput.click();
  };

  return (
    <div className="relative mx-auto flex max-h-[8rem] max-w-[8rem] items-center justify-center rounded bg-white p-2">
      <img src={src} alt="" />

      {onEdit && (
        <div className="absolute flex  h-full w-full items-center justify-center text-4xl  text-black opacity-0 hover:bg-red-200 hover:opacity-100">
          <button
            className="flex h-full w-full items-center justify-center"
            onClick={handleChange}
          >
            <FiUpload />
          </button>
        </div>
      )}
    </div>
  );
};

function ManageUniversity() {
  useEffect(() => {
    // console.log("[RENDER] University Page", data.faculties[0].majors.length);
  });

  const [data, setData] = React.useState(UniversityObject);

  const updateData = (feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      ...feilds,
    }));
    setIsDirty(true);
  };

  const updateFaculty = (index, feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      faculties: prevdata.faculties.map((faculty, i) =>
        i === index ? { ...faculty, ...feilds } : faculty
      ),
    }));
    setIsDirty(true);
  };

  const updateMajor = (facultyIndex, majorIndex, feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      faculties: prevdata.faculties.map((faculty, i) =>
        i === facultyIndex
          ? {
              ...faculty,
              majors: faculty.majors.map((major, j) =>
                j === majorIndex ? { ...major, ...feilds } : major
              ),
            }
          : faculty
      ),
    }));
    setIsDirty(true);
  };

  const updateAccommodation = (index, feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      accommodation: prevdata.accommodation.map((acc, i) =>
        i === index ? { ...acc, ...feilds } : acc
      ),
    }));
    setIsDirty(true);
  };

  const updateRequirement = (facultyIndex, reqIdx, feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      faculties: prevdata.faculties.map((faculty, i) =>
        i === facultyIndex
          ? {
              ...faculty,
              requirements: faculty.requirements.map((req, j) =>
                j === reqIdx ? { ...req, ...feilds } : req
              ),
            }
          : faculty
      ),
    }));
    setIsDirty(true);
  };

  const updateContactInformation = (feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      contactInformation: {
        ...prevdata.contactInformation,
        ...feilds,
      },
    }));
    setIsDirty(true);
  };

  const updateSocialMedia = (feilds) => {
    setData((prevdata) => ({
      ...prevdata,
      contactInformation: {
        ...prevdata.contactInformation,
        socialMedia: {
          ...prevdata.contactInformation.socialMedia,
          ...feilds,
        },
      },
    }));
    setIsDirty(true);
  };

  const [isDirty, setIsDirty] = React.useState(false);

  return (
    <div className="mb-5 h-fit w-full bg-white bg-cover">
      <br />

      <div className="m-5 flex h-fit flex-col justify-between gap-3 rounded bg-[#950003] p-4 text-white shadow lg:flex-row">
        {/* Logo */}
        <Logo
          src={data.logoSrc}
          onEdit={(url) => updateData({ logoSrc: url })}
        />

        {/* Uni Information */}
        <div className="/bg-blue-300 flex flex-1 flex-col ">
          <EditableText
            onBlur={(newname) => updateData({ name: newname })}
            className="mx-auto text-xl lg:mx-0"
            text={data.name}
            validators="required|min:1|alpha_num_space"
          />

          {/* <div className="mx-auto text-xl lg:mx-0">{data.name}</div> */}

          <div className="ml-5 mt-3 flex flex-col gap-3">
            <div className="flex gap-2">
              City:
              <EditableText
                className="mx-auto flex-1 lg:mx-0"
                onBlur={(newcity) => updateData({ city: newcity })}
                text={data.city}
                validators="required|min:1|alpha_num_space"
              />
            </div>
            <EditableText
              onBlur={(newdes) => updateData({ description: newdes })}
              className="text-justify text-[#EDEDED]"
              text={data.description}
              validators="required|min:1|alpha_num_space"
            />
          </div>
        </div>
        <div className="mx-auto flex flex-row items-start justify-start gap-3 lg:flex-col">
          {/* Rank item */}
          <div className="w-24">
            <EditableText
              onBlur={(newrank) => updateData({ qsRank: newrank })}
              className="flex h-16 items-center justify-center rounded-t-lg bg-white text-2xl text-[#5D5D5D]"
              text={data.qsRank}
              validators="required|min:1,num|max:1000,num|numeric"
            />

            <div className="flex h-6 items-center justify-center rounded-b-lg bg-black text-center">
              QS
            </div>
          </div>

          {/* Rank item */}
          <div className="w-24">
            <EditableText
              onBlur={(newrank) => updateData({ thRank: newrank })}
              className="flex h-16 items-center justify-center rounded-t-lg bg-white text-2xl text-[#5D5D5D]"
              text={data.thRank}
              validators="required|min:1,num|max:2000,num|numeric"
            />

            <div className="flex h-6 items-center justify-center rounded-b-lg bg-black text-center text-xs">
              Times Higher
            </div>
          </div>
        </div>
      </div>
      {/* For mobile */}
      <div className="mx-5 mb-5 flex flex-col gap-2 lg:hidden">
        {/* Save button */}
        {isDirty && (
          <button className="w-full rounded bg-[#950003] py-2 text-white hover:bg-[#ac1013]">
            Save
          </button>
        )}
      </div>
      <div className="flex w-full gap-0 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 rounded-r-lg border-2 border-l-0 border-[#950003] bg-[#ECECEC] p-7">
          {/* Media Carousel */}

          <div className="mb-5 h-fit w-full">
            <EditableCarousel
              editable
              className="h-72 bg-contain bg-center bg-no-repeat"
              onUpdate={(newImageUrls) => {
                updateData({
                  mainCarouselUrls: newImageUrls,
                });
              }}
              imageUrls={data.mainCarouselUrls}
            />
          </div>
          {/* Faculties */}
          <div className="flex w-full flex-col">
            {/* This is a fake anchor to avoid the navbar */}
            <div
              id="Faculties"
              style={{
                display: "block",
                position: "relative",
                top: "-100px",
                visibility: "hidden",
              }}
            />

            <div className="flex">
              <h1 className="mb-3 text-2xl">Faculties</h1>
              <button
                className="ml-auto self-start rounded bg-white py-1 px-2 hover:bg-gray-100 hover:shadow"
                onClick={() => {
                  setData((prevdata) => {
                    return {
                      ...prevdata,
                      faculties: [
                        ...prevdata.faculties,
                        { ...UniversityObject.faculties[0] },
                      ],
                    };
                  });
                }}
              >
                Add Faculty
              </button>
            </div>

            {/* Card */}
            {data.faculties.map((faculty, fidx) => (
              <div key={fidx} className="mb-8 rounded bg-white p-4 shadow-md">
                <div
                  id={faculty.name}
                  style={{
                    display: "block",
                    position: "relative",
                    top: "-100px",
                    visibility: "hidden",
                  }}
                />
                <EditableText
                  className="mb-1 text-xl"
                  onBlur={(newFacultyName) => {
                    updateFaculty(fidx, { name: newFacultyName });
                  }}
                  text={faculty.name}
                  validators="required|min:1|alpha_num_space"
                />
                <EditableText
                  className="ml-3 mb-1 text-base"
                  onBlur={(newFacultyDescription) => {
                    updateFaculty(fidx, { description: newFacultyDescription });
                  }}
                  text={faculty.description}
                  validators="required|min:1|alpha_num_dash_space"
                />
                <div className="ml-auto flex w-fit gap-2 rounded-full bg-[#950003] px-3 py-1 text-white">
                  <EditableText
                    onBlur={(newprice) => {
                      updateFaculty(fidx, { price: newprice });
                    }}
                    text={faculty.price}
                    variant="inline"
                    validators="required|numeric|min:1,num"
                  />
                  EGP / year
                </div>

                <h1 className="mb-1 text-xl">Majors</h1>
                <ButtonsWithContent
                  editable={true}
                  onAdd={() => {
                    updateFaculty(fidx, {
                      majors: [
                        ...faculty.majors,
                        { name: "New Major", description: "New Description" },
                      ],
                    });
                  }}
                  onDelete={(majorIdx) => {
                    updateFaculty(fidx, {
                      majors: faculty.majors.filter(
                        (major, idx) => idx !== majorIdx
                      ),
                    });
                  }}
                  data={faculty.majors.map((major, midx) => ({
                    name: (
                      <EditableText
                        variant="inline"
                        text={major.name}
                        onBlur={(newname) =>
                          updateMajor(fidx, midx, { name: newname })
                        }
                        validators="required|min:1|alpha_num_space"
                      />
                    ),
                    description: (
                      <EditableText
                        text={major.description}
                        variant="inline"
                        onBlur={(newdesc) =>
                          updateMajor(fidx, midx, { description: newdesc })
                        }
                        validators="required|min:1|alpha_num_dash_space"
                      />
                    ),
                  }))}
                />
                <BasicAccordion
                  name="Requirements"
                  description={
                    <RequirementTabs
                      data={faculty.requirements.map((req, reqIdx) => ({
                        name: req.name,
                        description: (
                          <EditableText
                            text={req.description}
                            variant="inline"
                            onBlur={(newdesc) =>
                              updateRequirement(fidx, reqIdx, {
                                description: newdesc,
                              })
                            }
                            validators="required|min:1|alpha_num_dash_space"
                          />
                        ),
                      }))}
                    />
                  }
                />
              </div>
            ))}
          </div>

          {/* Accommodation */}
          <div className="flex w-full flex-col ">
            <div
              id="Accommodation"
              style={{
                display: "block",
                position: "relative",
                top: "-100px",
                visibility: "hidden",
              }}
            />
            <h1 className="mb-3 text-2xl">Accommodation</h1>

            {/* Card */}
            <div className="mb-8 rounded bg-white p-4 shadow-md">
              <ButtonsWithContent
                data={data.accommodation.map((item, aidx) => ({
                  name: (
                    <EditableText
                      variant="inline"
                      text={item.name}
                      onBlur={(newname) =>
                        updateAccommodation(aidx, { name: newname })
                      }
                      validators="required|min:1|alpha_num_space"
                    />
                  ),
                  description: (
                    <div className="flex flex-1 flex-col gap-3 rounded-lg bg-[#EBEBEB] px-3 py-1 text-sm lg:flex-row">
                      <div className="flex-1 text-justify">
                        <EditableText
                          variant="inline"
                          text={item.description}
                          onBlur={(newdesc) =>
                            updateAccommodation(aidx, { description: newdesc })
                          }
                          validators="required|min:1|alpha_num_dash_space"
                        />
                      </div>
                      <div className="mx-auto h-60 w-full max-w-[15rem] flex-1 lg:ml-auto">
                        {/* <img src="https://via.placeholder.com/500x400" alt="" /> */}
                        <EditableCarousel
                          editable
                          className="h-44 bg-contain bg-center bg-no-repeat"
                          imageUrls={item.imageUrls}
                          onAdd={() =>
                            updateAccommodation(aidx, {
                              imageUrls: [...item.imageUrls, "/600x400.png"],
                            })
                          }
                          onRemove={(index) =>
                            updateAccommodation(aidx, {
                              imageUrls: item.imageUrls.filter(
                                (_, idx) => idx !== index
                              ),
                            })
                          }
                          onUpdate={(index, newurl) =>
                            updateAccommodation(aidx, {
                              imageUrls: item.imageUrls.map((url, idx) =>
                                idx === index ? newurl : url
                              ),
                            })
                          }
                        />
                      </div>
                    </div>
                  ),
                }))}
              />
            </div>
          </div>

          <div>TODO: Transportation</div>
          <div>TODO: Activites</div>

          {/* Contacts */}
          <div
            id="Contacts"
            style={{
              display: "block",
              position: "relative",
              top: "-200px",
              visibility: "hidden",
            }}
          />

          <div className="flex flex-col rounded bg-[#950003] p-5 text-white shadow lg:flex-row">
            <div className=" ml-0 mb-5 flex flex-1 flex-col gap-5 lg:mx-0 lg:mb-0 ">
              <div className="flex items-center gap-3">
                <GoLocation className="text-3xl" />
                <div>
                  <EditableText
                    text={data.contactInformation.location}
                    variant="inline"
                    onBlur={(newvalue) =>
                      updateContactInformation({ location: newvalue })
                    }
                    validators="required|min:1|alpha_num_dash_space"
                    className="ml-5"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BsGlobe className="text-3xl" />
                <div>
                  <EditableText
                    text={
                      <a
                        href="https://guc.edu.eg/"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-slate-300 hover:underline"
                        validators="required|min:1|alpha_num_dash_space"
                      >
                        {data.contactInformation.website}
                      </a>
                    }
                    variant="inline"
                    onBlur={(newvalue) =>
                      updateContactInformation({ website: newvalue })
                    }
                    className="ml-5"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BsTelephone className="text-3xl" />
                <div>
                  <EditableText
                    text={
                      <a
                        href={"tel:" + data.contactInformation.phone}
                        rel="noreferrer"
                        target="_blank"
                        className=" hover:text-slate-300 hover:underline"
                        validators="required|min:1|alpha_num_dash_space"
                      >
                        {data.contactInformation.phone}
                      </a>
                    }
                    variant="inline"
                    onBlur={(newvalue) =>
                      updateContactInformation({ phone: newvalue })
                    }
                    className="ml-5"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-3xl" />
                <div>
                  <EditableText
                    text={
                      <a
                        href={"mail:" + data.contactInformation.email}
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-slate-300 hover:underline"
                        validators="required|min:1|alpha_num_dash_space"
                      >
                        {data.contactInformation.email}
                      </a>
                    }
                    variant="inline"
                    onBlur={(newvalue) =>
                      updateContactInformation({ email: newvalue })
                    }
                    className="ml-5"
                  />
                </div>
              </div>

              {/* Socials */}
              <div className="flex w-fit gap-3">
                <div>
                  <a
                    href={data.contactInformation.socialMedia.facebook}
                    className="text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-7 w-auto"
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt=""
                    />
                  </a>
                  <FiEdit2
                    onClick={() =>
                      updateSocialMedia({
                        facebook:
                          prompt(
                            "Please enter the new facebook link",
                            data.contactInformation.socialMedia.facebook
                          ) ?? data.contactInformation.socialMedia.facebook,
                      })
                    }
                  />
                </div>

                <div>
                  <a
                    href={data.contactInformation.socialMedia.linkedin}
                    className="text-blue-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-7 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
                      alt=""
                    />
                  </a>
                  <FiEdit2
                    onClick={() =>
                      updateSocialMedia({
                        linkedin:
                          prompt(
                            "Please enter the new linkedin link",
                            data.contactInformation.socialMedia.linkedin
                          ) ?? data.contactInformation.socialMedia.linkedin,
                      })
                    }
                  />
                </div>

                <div>
                  <a
                    href={data.contactInformation.socialMedia.instagram}
                    className="text-pink-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-7 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                      alt=""
                    />
                  </a>
                  <FiEdit2
                    onClick={() =>
                      updateSocialMedia({
                        instagram:
                          prompt(
                            "Please enter the new instagram link",
                            data.contactInformation.socialMedia.instagram
                          ) ?? data.contactInformation.socialMedia.instagram,
                      })
                    }
                  />
                </div>

                <div>
                  <a
                    href={data.contactInformation.socialMedia.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-7 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                      alt=""
                    />
                  </a>
                  <FiEdit2
                    onClick={() =>
                      updateSocialMedia({
                        youtube:
                          prompt(
                            "Please enter the new youtube link",
                            data.contactInformation.socialMedia.youtube
                          ) ?? data.contactInformation.socialMedia.youtube,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Google Map */}
            {/* //https://maps.google.com/maps?q=37.771008,+-122.41175+(You+can+insert+your+text+here)&amp;hl=en&amp;t=v&amp;vpsrc=0&amp;ie=UTF8&amp;z=14&amp;iwloc=A&amp;ll=38.287602,-122.036186&amp;output=embed */}
            <div className="mr-auto w-auto flex-1 lg:ml-auto lg:w-96 lg:flex-none">
              <iframe
                title="GMAP "
                className="rounded-lg"
                width="100%"
                height="100%"
                src={data.gmapUrl}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>

              <FiEdit2
                onClick={() =>
                  updateData({
                    gmapUrl:
                      prompt("Please enter the new gmap url", data.gmapUrl) ??
                      data.gmapUrl,
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="/bg-green-400 hidden w-52 lg:block">
          {/* Side Nav */}
          <div className="/bg-red-200 sticky top-32 rounded-l-lg border-2 border-r-0 border-[#950003] p-3">
            <div className="mb-5 flex flex-col gap-2">
              <div className="flex flex-col">
                <a
                  href="#Faculties"
                  className="hover:text-[#950003]  hover:underline"
                >
                  Faculties
                </a>
                <a
                  href="#Engineering"
                  className="ml-5 hover:text-[#950003]  hover:underline"
                >
                  Engineering
                </a>
                <a
                  href="#NOTIMPLEMENTED"
                  className="ml-5 hover:text-[#950003]  hover:underline"
                >
                  Pharmacy
                </a>
              </div>

              <a
                href="#Accommodation"
                className="hover:text-[#950003]  hover:underline"
              >
                Accommodation
              </a>

              <a
                href="#NOTIMPLEMENTED"
                className="hover:text-[#950003]  hover:underline"
              >
                Transportation
              </a>

              <a
                href="#NOTIMPLEMENTED"
                className="hover:text-[#950003]  hover:underline"
              >
                Activities
              </a>

              <a
                href="#Contacts"
                className="hover:text-[#950003]  hover:underline"
              >
                Contacts
              </a>
            </div>

            {/* For Desktop */}
            <div className="flex flex-col gap-2">
              {/* Save button */}
              {isDirty && (
                <button className="w-full rounded bg-[#950003] py-2 text-white hover:bg-[#ac1013]">
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUniversity;
