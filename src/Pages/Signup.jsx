import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  createTheme,
  Styled,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

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

const theme = createTheme({
  palette: {
    primary: {
      main: "#950003",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // borderRadius: "10px",
          // outline: "none",
          // border: "3px solid red",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // fontSize: "3rem",
          // backgroundColor: "orange",
          // border: "3px solid black",
          // borderRadius: "70%",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const STEP_COUNT = 3;

function SignupForm({ activeStep }) {
  return [
    // STEP 1

    <div className="flex flex-col gap-5 ">
      <div className="flex gap-2">
        <TextField
          required
          id="fname"
          label="First Name"
          size="small"
          className="max-w-[130px]"
        />
        <TextField
          required
          id="mname"
          label="Middle Name"
          size="small"
          className="max-w-[130px]"
        />
        <TextField
          required
          id="lname"
          label="Last Name"
          size="small"
          className="max-w-[130px]"
        />
      </div>
      <div className="flex gap-2">
        <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
          <InputLabel id="country">Country</InputLabel>
          <Select
            required
            labelId="country"
            id="country"
            // value={age}
            // onChange={handleChange}
            label="Country"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Cairo</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
          <InputLabel id="city">City</InputLabel>
          <Select
            required
            labelId="city"
            id="city"
            // value={age}
            // onChange={handleChange}
            label="City"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Cairo</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }} className="flex-1" size="small">
          <InputLabel id="district">District</InputLabel>
          <Select
            required
            labelId="district"
            id="district"
            // value={age}
            // onChange={handleChange}
            label="district"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Cairo</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-full">
        <TextField
          required
          id="phonenumber"
          label="Phone Number"
          size="small"
          className="w-full"
        />
      </div>
      <div>
        <FormControl sx={{ minWidth: 220 }} className="w-full" size="small">
          <InputLabel id="nationality">Nationality</InputLabel>
          <Select
            required
            labelId="nationality"
            id="nationality"
            // value={age}
            // onChange={handleChange}
            label="nationality"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Cairo</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>,
    // STEP 2

    <div className="flex flex-col gap-y-5 pt-5">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/DD/YYYY"
          // value={value}
          // onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <div className="flex justify-around gap-2">
        <div>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </div>
        <div>
          <FormLabel id="demo-radio-buttons-group-label">
            Student Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
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

      <div className="flex gap-2 ">
        <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
          <InputLabel id="Grade">Grade</InputLabel>
          <Select
            required
            labelId="Grade"
            id="Grade"
            label="Grade"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Test 0</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
          <InputLabel id="CertificateType">Certificate Type</InputLabel>
          <Select
            required
            labelId="CertificateType"
            id="CertificateType"
            label="CertificateType"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Test 0</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="flex gap-2 ">
        <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
          <InputLabel id="Major">Major</InputLabel>
          <Select
            required
            labelId="Major"
            id="Major"
            label="Major"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Test 0</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 220 }} className="flex-1" size="small">
          <InputLabel id="Degree">Degree</InputLabel>
          <Select
            required
            labelId="Degree"
            id="Degree"
            label="Degree"
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Test 0</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>,

    // STEP 3
    <div className="flex w-[70%] flex-col gap-y-5">
      <TextField
        required
        id="email"
        label="Email"
        size="small"
        className="w-full"
      />
      <TextField
        required
        id="password"
        label="Password"
        size="small"
        className="w-full"
      />
      <TextField
        required
        id="cpassword"
        label="Confirm Password"
        size="small"
        className="w-full"
      />
    </div>,
  ][activeStep];
}

function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const handleStepNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleStepBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const submitForm = () => {
    console.log("TODO:Submitting the form");
  };

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
        <a href="/" className="m-6 mb-0 h-auto max-w-[250px]">
          <img src="/Edugate-logo-white-min.png" alt="Edugate Logo" />
        </a>

        {/* Login */}
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-5 pb-10 text-center text-white">
          <h1 className={styles.h1 + " mt-10 md:mt-0"}>One of Us?</h1>
          <h2 className={styles.h2}>
            If you already have an account, just sign in. We've missed you!
          </h2>
          <button className="w-44 rounded-full bg-white py-3 font-bold text-black hover:bg-gray-100">
            Sign in
          </button>
        </div>
      </div>

      {/* Student Signup */}
      <div className=" flex flex-[3] flex-col bg-white pb-10 md:pb-0">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex min-h-[35rem] flex-col items-center justify-between">
            <h1 className={styles.h1 + " mt-10 md:mt-0"}>
              Create Your Account
            </h1>

            <ThemeProvider theme={theme}>
              <SignupForm activeStep={activeStep} />
            </ThemeProvider>

            <div className="mt-5 flex w-full flex-row items-center justify-around">
              <button
                className="w-[100px] rounded-lg bg-[#950003]  py-3 text-white hover:bg-[#bb0003] focus:outline-none disabled:opacity-50"
                onClick={handleStepBack}
                disabled={activeStep === 0}
              >
                Back
              </button>

              <h5>
                {activeStep + 1} / {STEP_COUNT}
              </h5>

              <button
                className="w-[100px] rounded-lg bg-[#950003] py-3 text-white hover:bg-[#bb0003] focus:outline-none disabled:opacity-50"
                onClick={
                  activeStep !== STEP_COUNT - 1 ? handleStepNext : submitForm
                }
              >
                {activeStep === STEP_COUNT - 1 ? "Sign up" : "Next"}
              </button>
            </div>
          </div>
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
