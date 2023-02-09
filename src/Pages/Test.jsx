import { useAuth } from "Context/AuthContext";
import * as React from "react";
import axClient from "./apis/AxiosClient";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useForm, useWatch } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Button = ({ children, ...rest }) => (
  <button className="btn btn-primary" {...rest}>
    {children}
  </button>
);

export default function Test() {
  const {
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formonSubmit(data) {
    console.log("Form on Submit", data);
  }

  React.useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);

    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="bg-yellow-400">TEST 1</h1>

      <form
        onSubmit={handleSubmit(formonSubmit)}
        className="flex flex-col gap-5"
      >
        <TextField
          error={errors.orgname}
          helperText={errors.orgname && "Organization Name is required"}
          required
          id="orgname"
          {...register("orgname", { required: true, minLength: 3 })}
          label="Organization Name"
          size="small"
        />

        <FormControl size="small">
          <InputLabel id="orgtype">Organization Type</InputLabel>
          <Select
            required
            labelId="orgtype"
            id="orgtype"
            label="Organization Type"
            {...register("orgtype", { required: true })}
          >
            <MenuItem value={10}>Cairo</MenuItem>
            <MenuItem value={20}>Test 1</MenuItem>
            <MenuItem value={30}>Test 2</MenuItem>
            {/* {countries?.map((country, index) => (
                      <MenuItem value={country.value} key={index}>
                        {country.name}
                      </MenuItem>
                    ))} */}
          </Select>
        </FormControl>

        <Button>Submit</Button>
      </form>
    </div>
  );
}
