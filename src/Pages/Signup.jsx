import React from "react";
import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getCountries,
  getCities,
  getDistricts,
  getHscertificates,
  getMajors,
  getDegrees,
} from "./apis/Auth.js";
import { toast } from "react-toastify";
import { useAuth } from "Context/AuthContext.js";

const CustomTextField = ({ ...params }) => (
  <TextField
    sx={{
      "& fieldset": {
        borderRadius: "0.5rem",
      },
    }}
    {...params}
  />
);

const STEP_COUNT = 3;

const TextFieldConfirmPass = ({ password, ...props }) => {
  // This is applies a customValidity when the input is rendered, this to prevent the on submit to fire

  // Why in a new component, this is needed because the input is not rendered when the step is not active
  // making it into a component makes it renders when the active step changes
  const reftest = useRef(null);
  const errorText = "Passwords do not match";

  useEffect(() => {
    if (!reftest.current) return;
    reftest.current.setCustomValidity(errorText);
  }, [reftest]);

  // return <input type="text" placeholder="inputTest" ref={reftest} />;
  return (
    <TextField
      // required
      // error={errorConfirmpassword}
      // helperText="Please match"
      {...props}
      inputRef={reftest}
      onChange={(e) => {
        const error = e.target.value !== password;
        const elm = e.target;
        if (error) {
          elm.setCustomValidity(errorText);
        } else {
          elm.setCustomValidity("");
        }
      }}
    />
  );
};

function SignupForm({ activeStep, data, updateData }) {
  const queryOps = {
    staleTime: Infinity,
    placeholderData: [],
    // keepPreviousData: true,
    retry: 1,
    onError: (error) => toast.error(`Something went wrong: ${error.message}`),
  };

  const { data: countries } = useQuery(["countries"], getCountries, queryOps);

  const { data: cities } = useQuery(
    ["cities", data.country],
    () => getCities(data.country),
    {
      enabled: !!data.country,
      ...queryOps,
    }
  );

  const { data: districts } = useQuery(
    ["districts", data.city],
    () => getDistricts(data.city),
    {
      enabled: !!data.city,
      ...queryOps,
    }
  );

  const { data: hscertificates } = useQuery(
    ["hscertificates"],
    getHscertificates,
    queryOps
  );

  const { data: majors } = useQuery(["majors"], getMajors, queryOps);

  const { data: degrees } = useQuery(
    ["degrees", data.major],
    () => getDegrees(data.major),
    {
      enabled: !!data.major,
      ...queryOps,
    }
  );

  return [
    // STEP 1
    <div className="flex w-full flex-col gap-5">
      <div className="flex gap-2">
        <TextField
          required
          id="fname"
          label="First Name"
          size="small"
          className="max-w-[151px]"
          value={data.firstname}
          onChange={(e) => updateData({ firstname: e.target.value })}
        />
        <TextField
          required
          id="mname"
          label="Middle Name"
          size="small"
          className="max-w-[151px]"
          value={data.middlename}
          onChange={(e) => updateData({ middlename: e.target.value })}
        />
        <TextField
          required
          id="lname"
          label="Last Name"
          size="small"
          className="max-w-[151px]"
          value={data.lastname}
          onChange={(e) => updateData({ lastname: e.target.value })}
        />
      </div>
      <div className="flex gap-2">
        <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
          <InputLabel id="country">Country</InputLabel>
          <Select
            required
            labelId="country"
            id="country"
            value={data.country || ""}
            // empty string means no value selected

            onChange={(e) =>
              updateData({
                country: e.target.value,
                city: undefined,
                district: undefined,
                nationality: e.target.value,
              })
            }
            label="Country"
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {/* <MenuItem value={10}>Cairo</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem> */}
            {countries?.map((country, index) => (
              <MenuItem value={country.value} key={index}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {!!cities.length && (
          <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
            <InputLabel id="city">City</InputLabel>
            <Select
              required
              labelId="city"
              id="city"
              label="City"
              value={data.city || ""}
              onChange={(e) =>
                updateData({ city: e.target.value, district: undefined })
              }
            >
              {/* <MenuItem value={10}>Cairo</MenuItem> */}
              {cities?.map((city, index) => (
                <MenuItem value={city.value} key={index}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {!!districts.length && (
          <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
            <InputLabel id="district">District</InputLabel>
            <Select
              required
              labelId="district"
              id="district"
              label="district"
              value={data.district || ""}
              onChange={(e) => updateData({ district: e.target.value })}
            >
              {districts?.map((district, index) => (
                <MenuItem value={district.value} key={index}>
                  {district.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      <div className="w-full">
        <TextField
          required
          id="phonenumber"
          label="Phone Number"
          size="small"
          className="w-full"
          value={data.phonenumber}
          onChange={(e) => updateData({ phonenumber: e.target.value })}
          inputProps={{
            inputMode: "numeric",
            pattern:
              "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$",
          }}
        />
      </div>
      <div>
        <FormControl sx={{ minWidth: 220 }} className="w-full" size="small">
          <InputLabel id="nationality">Nationality</InputLabel>
          <Select
            required
            labelId="nationality"
            id="nationality"
            label="nationality"
            value={data.nationality || ""}
            onChange={(e) => updateData({ nationality: e.target.value })}
          >
            {countries?.map((country, index) => (
              <MenuItem value={country.value} key={index}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>,

    // STEP 2
    <div className="flex w-full flex-col gap-y-5 pt-5">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/DD/YYYY"
          value={data.dateofbirth}
          disableFuture={true}
          onChange={(newValue) => {
            console.log("DP", newValue);
            updateData({ dateofbirth: newValue });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <div className="flex justify-around gap-2">
        <div>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
            value={data.gender}
            onChange={(e) => updateData({ gender: e.target.value })}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </div>
        <div>
          <FormLabel id="demo-radio-buttons-group-label">
            Student Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={data.studenttype}
            onChange={(e) => updateData({ studenttype: e.target.value })}
          >
            <FormControlLabel
              value="schoolstudent"
              control={<Radio />}
              label="School Student"
            />
            <FormControlLabel
              value="universitystudent"
              control={<Radio />}
              label="University Student"
            />
          </RadioGroup>
        </div>
      </div>

      {data.studenttype === "schoolstudent" && (
        <div className="flex gap-2 ">
          <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
            <InputLabel id="Grade">Grade</InputLabel>
            <Select
              required
              labelId="Grade"
              id="Grade"
              label="Grade"
              value={data.grade || ""}
              onChange={(e) => updateData({ grade: e.target.value })}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
            <InputLabel id="CertificateType">Certificate Type</InputLabel>
            <Select
              required
              labelId="CertificateType"
              id="CertificateType"
              label="CertificateType"
              value={data.certificatetype || ""}
              onChange={(e) => updateData({ certificatetype: e.target.value })}
            >
              {hscertificates?.map((cert, index) => (
                <MenuItem value={cert.value} key={index}>
                  {cert.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      {data.studenttype === "universitystudent" && (
        <div className="flex gap-2 ">
          <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
            <InputLabel id="Major">Major</InputLabel>
            <Select
              required
              labelId="Major"
              id="Major"
              label="Major"
              value={data.major || ""}
              onChange={(e) =>
                updateData({ major: e.target.value, degree: "" })
              }
            >
              {majors?.map((major, index) => (
                <MenuItem value={major.value} key={index}>
                  {major.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {!!degrees.length && (
            <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
              <InputLabel id="Degree">Degree</InputLabel>
              <Select
                required
                labelId="Degree"
                id="Degree"
                label="Degree"
                value={data.degree || ""}
                onChange={(e) => updateData({ degree: e.target.value })}
              >
                {degrees?.map((degree, index) => (
                  <MenuItem value={degree.value} key={index}>
                    {degree.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </div>
      )}
    </div>,

    // STEP 3

    <div className="flex w-full flex-col gap-y-5">
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        size="small"
        className="w-full"
        value={data.email}
        onChange={(e) => updateData({ email: e.target.value })}
      />
      <TextField
        required
        id="password"
        label="Password"
        type="password"
        size="small"
        className="w-full"
        value={data.password}
        onChange={(e) => updateData({ password: e.target.value })}
      />

      <TextFieldConfirmPass
        id="cpassword"
        label="Confirm Password"
        size="small"
        className="w-full"
        type="password"
        password={data.password}
      />
    </div>,
  ][activeStep];
}

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const handleStepNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleStepBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const [formdata, setformdata] = useState({
    firstname: undefined,
    middlename: undefined,
    lastname: undefined,
    country: undefined,
    city: undefined,
    district: undefined,
    phonenumber: undefined,
    nationality: undefined,

    dateofbirth: null,
    gender: "male",
    studenttype: "schoolstudent",
    grade: undefined,
    certificatetype: undefined,
    major: undefined,
    degree: undefined,

    email: undefined,
    password: undefined,
  });

  const updateData = (feilds) => {
    console.log("data is ", formdata);
    setformdata((prevdata) => ({
      ...prevdata,
      ...feilds,
    }));
  };

  const sendFormData = () => {
    console.log("FORM SUBMIT", formdata);

    const expectedData = {
      userID: 0,
      userName: `${formdata.firstname} ${formdata.middlename} ${formdata.lastname}`,
      userEmail: formdata.email,
      userPhone: formdata.phonenumber,
      userPassword: formdata.password,
      userGender: formdata.gender === "male",
      userTypeID: 2, //student
      isActive: true,
      cDate: new Date().toISOString(),
      birthDate: formdata.dateofbirth.$d.toISOString(),
      nationalityID: formdata.nationality,
      districtID: formdata.district,
      isPostG: formdata.studenttype === "universitystudent",
      hsCertificateID: formdata.certificatetype,
      grade: formdata.grade,
      degreeID: formdata.degree,
    };

    if (formdata.studenttype === "universitystudent") {
      // zero in the backend counted as null
      expectedData.grade = 0;
      expectedData.hsCertificateID = 0;
    } else {
      expectedData.degreeID = 0;
    }
    // if any value is undefined, set it to 0. because axios or js ignore ignore undefined values
    for (const key in expectedData) {
      if (expectedData[key] === undefined) expectedData[key] = 0;
    }

    signup
      .mutateAsync(expectedData)
      .then((res) => {
        console.log(res);
        toast.success("Successfully registered, you can login now");
        navigate("/login");
      })
      .catch((err) => {
        let msg;
        if (typeof err.response.data === "string") msg = err.response.data;
        else if (typeof err.message === "string") msg = err.message;

        toast.error(
          `Error occured while signup \n ${err.response.status} ${msg}`
        );
      });
  };

  const formonSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    if (activeStep !== STEP_COUNT - 1) {
      handleStepNext();
    } else {
      sendFormData();
    }
  };

  //   TODO: signup width jumps around when selecting from combos
  return (
    <div className="flex flex-col-reverse md:h-full md:flex-row">
      <div
        className="flex flex-1 flex-col"
        style={{
          backgroundImage:
            "linear-gradient(236deg, rgb(190 0 4) 0px, #560002 100%)",
        }}
      >
        {/* Logo */}
        <a href="/" className="m-6 mb-0 hidden h-auto max-w-[250px] md:block">
          <img src="/Edugate-logo-white-min.png" alt="Edugate Logo" />
        </a>

        {/* Login */}
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-5 pb-10 text-center text-white">
          <h1 className={styles.h1 + " mt-10 md:mt-0"}>One of Us?</h1>
          <h2 className={styles.h2}>
            If you already have an account, just sign in. We've missed you!
          </h2>
          <Link to="/login">
            <button className="w-44 rounded-full bg-white py-3 font-bold text-black hover:bg-gray-100">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      {/* Student Signup */}
      <div className=" flex flex-[3] flex-col bg-white pb-10 md:pb-0">
        <a href="/" className="mt-6 ml-6 block h-auto max-w-[250px] md:hidden">
          <img src="/Edugate-logo-min.png" alt="Edugate Logo" />
        </a>

        <div className="flex flex-1 items-center justify-center">
          <form onSubmit={formonSubmit}>
            <div className="flex min-h-[35rem] flex-col items-center justify-between">
              <h1 className={styles.h1 + " mt-10 text-[#950003] md:mt-0"}>
                Create Your Account
              </h1>

              <SignupForm
                activeStep={activeStep}
                data={formdata}
                updateData={updateData}
              />

              <div className="mt-5 flex w-full flex-row items-center justify-around">
                <button
                  className="w-[100px] rounded-lg bg-[#950003] py-3 text-white hover:bg-[#bb0003] focus:outline-none disabled:opacity-50"
                  onClick={handleStepBack}
                  disabled={activeStep === 0}
                  type="button"
                >
                  Back
                </button>

                <h5>
                  {activeStep + 1} / {STEP_COUNT}
                </h5>

                <button
                  type="submit"
                  className="w-[100px] rounded-lg bg-[#950003] py-3 text-white hover:bg-[#bb0003] focus:outline-none disabled:opacity-50"
                  disabled={signup.isLoading}
                >
                  {activeStep === STEP_COUNT - 1 ? "Sign up" : "Next"}
                  {/* TODO: loading indicator */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  h1: "text-5xl font-bold text-center leading-[1.1]",
  h2: "text-2xl",
  input:
    "bg-gray-300 placeholder:text-gray-600 px-4 py-3 rounded-full focus:bg-white focus:ring-2 focus:ring-gray-500 focus:outline-none w-full hover:bg-gray-200",
};

export default Signup;
