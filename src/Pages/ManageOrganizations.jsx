import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import axClient from "./apis/AxiosClient";
import { useForm } from "react-hook-form";
import { useAuth } from "Context/AuthContext";
import { toast } from "react-toastify";
import { getOrgTypes, postRequestNewOrg } from "./apis/Organization";
import { getCountries, getCities } from "./apis/Auth";

const modal_style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RequestNewOrg() {
  const {
    user: { userId },
  } = useAuth();

  const [modalopen, setopenmodal] = React.useState(false);
  const handleModalClose = () => setopenmodal(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { data: orgTypes } = useQuery(["OrganizationType"], getOrgTypes, {
    staleTime: Infinity,
  });

  const { data: countries } = useQuery(["countries"], getCountries, {
    staleTime: Infinity,
  });

  const watchCountry = watch("orgcountry");

  const { data: cities } = useQuery(
    ["cities", watchCountry],
    () => getCities(watchCountry),
    {
      staleTime: Infinity,
      enabled: !!watchCountry,
    }
  );

  const postNewOrgMutation = useMutation(postRequestNewOrg);

  function formonSubmit(data) {
    const expectedData = {
      orgID: 0,
      orgName: data.orgname,
      orgTypeID: data.orgtype,
      orgAddress: data.orgaddress,
      cityID: data.orgcity,
      orgPhone: data.orgphone,
      orgEmail: data.orgemail,
      orgDescription: data.orgdescription,
      parentOrgID: data.orgparent || 0,
      creatorID: userId,
    };

    console.log("sending", expectedData);

    postNewOrgMutation
      .mutateAsync(expectedData)
      .then((res) => {
        console.log(res);
        toast.success(
          "Successfully requested a new organization, please wait for the approval"
        );
        setopenmodal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while requesting a new organization");
      });
  }

  return (
    <div className="mt-5 flex justify-end">
      <button onClick={() => setopenmodal(true)} className="underline">
        Request new Organization
      </button>

      <Modal
        open={modalopen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Organization
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              onSubmit={handleSubmit(formonSubmit)}
              className="flex flex-col gap-5"
            >
              <TextField
                required
                {...register("orgname")}
                label="Organization Name"
                size="small"
              />

              <FormControl size="small" required>
                <InputLabel>Organization Type</InputLabel>
                <Select {...register("orgtype")} label="Organization Type">
                  {orgTypes?.map((orgType, index) => (
                    <MenuItem value={orgType.value} key={index}>
                      {orgType.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                required
                {...register("orgaddress")}
                label="Organization Address"
                size="small"
              />

              <div className="flex gap-2">
                <FormControl size="small" sx={{ flex: 1 }} required>
                  <InputLabel>Country</InputLabel>
                  <Select {...register("orgcountry")} label="Country">
                    {countries?.map((countary, index) => (
                      <MenuItem value={countary.value} key={index}>
                        {countary.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ flex: 1 }} required>
                  <InputLabel>City</InputLabel>
                  <Select label="City" {...register("orgcity")}>
                    {cities?.map((city, index) => (
                      <MenuItem value={city.value} key={index}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <TextField
                required
                error={errors.orgphone}
                helperText={errors.orgphone?.message}
                {...register("orgphone", {
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    // value: /^\d{10}$/,
                    message: "Phone number is incorrect",
                  },
                })}
                label="Organization Phone"
                size="small"
              />

              <TextField
                required
                {...register("orgemail")}
                label="Organization Email"
                size="small"
                type="email"
              />

              <TextField
                required
                {...register("orgdescription")}
                label="Organization Description"
                size="small"
                multiline
                maxRows={4}
              />

              <FormControl size="small" sx={{ flex: 1 }} required>
                <InputLabel id="orgparent">Parent Organization</InputLabel>
                <Select
                  {...register("orgparent")}
                  label="Parent Organization"
                  disabled
                >
                  <MenuItem value={""}>None</MenuItem>
                </Select>
              </FormControl>

              <Button type="submit">Request</Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

function ManageOrganizations() {
  return (
    <>
      <br />
      <div className="mx-32 h-full">
        <h1 className="mb-5 text-3xl">Managed Organizations</h1>

        <h1 className="mb-5 bg-yellow-400 font-bold">
          TODO: Waiting for API, Representative get managed Organizations
        </h1>

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
              to="/ManageUniversity/UniversityId"
              className="rounded bg-[#950003] p-3 text-white hover:bg-[#aa0003]"
            >
              {item}
            </Link>
          ))}
        </div>

        <RequestNewOrg />
      </div>
    </>
  );
}

export default ManageOrganizations;
