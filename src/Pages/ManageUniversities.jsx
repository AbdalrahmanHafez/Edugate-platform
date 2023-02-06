import React, { useMemo } from "react";
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
import { useQueries } from "@tanstack/react-query";
import axClient from "./apis/AxiosClient";

function OrgItem({ orgId }) {}

function GetOrgData(orgId) {
  return axClient
    .get("https://api.edugate-eg.com/api/EduGate/GetOrgData?OrgId=" + orgId)
    .then((res) => res.data);
}

function ManageUniversities() {
  const [modalopen, setopenmodal] = React.useState(false);

  //   const results = useQueries({
  //     queries: Array(1)
  //       .fill(0)
  //       .map((item, index) => ({
  //         queryKey: ["post", 1],
  //         queryFn: () => GetOrgData(index + 1),
  //         staleTime: Infinity,
  //       })),
  //   });

  //   console.log(results);

  const handleModalClose = () => setopenmodal(false);

  function formonSubmit(e) {
    e.preventDefault();
    console.log("Form Submit");
  }

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
              to="/ManageUniversities/UniversityId"
              className="rounded bg-[#950003] p-3 text-white hover:bg-[#aa0003]"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => setopenmodal(true)}
            // className="rounded-sm border p-3 hover:bg-slate-200"
            className="btn btn-primary normal-case"
          >
            Add Organization
          </button>
        </div>

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
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={formonSubmit} className="flex flex-col gap-5">
                <TextField
                  required
                  id="orgname"
                  label="Organization Name"
                  //   size="small"
                  //   className="max-w-[151px]"
                  //   value={data.firstname}
                  //   onChange={(e) => updateData({ firstname: e.target.value })}
                />
                <FormControl
                //   sx={{ minWidth: 120 }}
                >
                  <InputLabel id="orgtype">Type</InputLabel>
                  <Select
                    required
                    labelId="orgtype"
                    id="orgtype"
                    label="Organization Type"
                    // value={data.country || ""}
                    // empty string means no value selected

                    // onChange={(e) =>
                    //   updateData({
                    //     country: e.target.value,
                    //     city: undefined,
                    //     district: undefined,
                    //     nationality: e.target.value,
                    //   })
                    // }
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
                <Button type="submit">Add</Button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

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

export default ManageUniversities;
