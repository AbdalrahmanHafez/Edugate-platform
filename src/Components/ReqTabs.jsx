// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs(props) {
//   const [value, setValue] = React.useState(0);
//   const data = props.data;

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box
//         sx={{ borderBottom: 1, borderColor: "divider" }}
//         style={{ marginTop: "1px" }}
//       >
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           {data.map(({ name, description }, idx) => (
//             <Tab label={name} {...a11yProps(idx)} />
//           ))}
//         </Tabs>
//       </Box>
//       {data.map(({ name, description }, idx) => (
//         <TabPanel value={value} index={idx}>
//           {description}
//         </TabPanel>
//       ))}
//       {/* <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel> */}
//     </Box>
//   );
// }
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#950003",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, ml: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ReqTabs(props) {
  const [value, setValue] = React.useState(0);
  const data = props.data;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#EDEDED",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          },
        }}
        color="common.white"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          color: "red",

          borderRight: 1,
          borderColor: "divider",
        }}
      >
        {data.map(({ name, description }, idx) => (
          <Tab
            TabIndicatorProps={{
              style: {
                backgroundColor: "#D97D54",
              },
            }}
            label={name}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>
      {data.map(({ name, description }, idx) => (
        <TabPanel value={value} index={idx}>
          {description}
        </TabPanel>
      ))}
    </Box>
  );
}
