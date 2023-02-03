import { useAuth } from "Context/AuthContext";
import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import { toast } from "react-toastify";

const ProfilePic = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout.mutateAsync().catch(() => {
      toast.error("Error logging out");
    });
  };

  return (
    <div className="mr-5 flex flex-col items-center justify-center">
      <Tooltip title="Account settings">
        <IconButton
          size="medium"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            sx={{ width: 32, height: 32 }}
          ></Avatar>
        </IconButton>
      </Tooltip>
      <h4 className="text-xs">{user.userEmail}</h4>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} disabled>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disabled>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disabled>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} disabled>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

const NavItemLink = ({ to, children, className }) => {
  const { pathname } = useLocation();
  // Path is the currently active
  const isActive = pathname === to;
  const activeClass =
    "text-white bg-gray-900 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse text-center lg:w-fit";
  const normClass =
    "text-black p-2 cursor-pointer hover:bg-gray-400 hover:text-white rounded-b-2xl flex flex-col-reverse text-center";
  return (
    <Link
      className={className + " " + (isActive ? activeClass : normClass)}
      to={to}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    // console.log("location", location);
    // TODO: React Router why navbar re-renderes navigating
  });

  return (
    <>
      <nav className={styles.nav}>
        <div className="space-around flex">
          <img
            src="/Edugate-logo.png"
            alt="Edugate Logo"
            className={styles.logo}
          />

          <div
            className={styles.hmbmenu}
            onClick={() => {
              document.getElementById("navlinks").classList.toggle("flex");
              document.getElementById("navlinks").classList.toggle("hidden");
            }}
          >
            <FaBars />
          </div>
        </div>

        <ul id="navlinks" className={styles.navbuttons}>
          {/* <NavItemLink to="/UniversitiesInEgypt">UIE</NavItemLink> */}

          <NavItemLink to="/">Home</NavItemLink>
          <NavItemLink to="/UniversitiesInEgypt">
            Universities in Egypt
          </NavItemLink>
          <NavItemLink to="TODO:link">Training</NavItemLink>
          <NavItemLink to="TODO:link">Scholarships</NavItemLink>
          <NavItemLink to="TODO:link">Study Aborad</NavItemLink>

          <div
            className={"group float-left flex w-full overflow-hidden lg:w-auto"}
          >
            <li className={styles.navbtn + " w-full"}>
              <div className="hidden w-full flex-col  space-y-3 rounded-lg bg-gray-300 p-3 text-black shadow group-hover:flex group-hover:lg:hidden">
                <a href="/TODO:link" className={styles.dditem}>
                  Consultancy
                </a>
                <a href="/TODO:link" className={styles.dditem}>
                  Score Calculators
                </a>
              </div>
              Services
            </li>

            <div className="absolute top-[80%] z-10 hidden lg:group-hover:block">
              <div className="flex w-[150%] flex-col space-y-3 rounded-lg bg-white p-3 shadow">
                <a href="/TODO:link" className={styles.dditem}>
                  Consultancy
                </a>
                <a href="/TODO:link" className={styles.dditem}>
                  Score Calculators
                </a>
              </div>
            </div>
          </div>

          {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar */}
        </ul>

        {isLoggedIn ? (
          <ProfilePic user={user} logout={logout} />
        ) : (
          <div className={styles.loginSignupContainer}>
            <Link to="/login" className={styles.login}>
              login
            </Link>
            <Link to="/signup" className={styles.signup}>
              signup
            </Link>
          </div>
        )}
      </nav>
      <div className="mt-24">
        {/* This Offsets the content to account for the navbar, This assumes that this component is at the top of any imported file */}
      </div>
    </>
  );
}

const styles = {
  nav: "flex flex-col lg:flex-row bg-[rgba(255,255,255,0.9)]  w-full fixed top-0 z-10 shadow-lg rounded-b-lg backdrop-blur-md",
  logo: "ml-5 w-[250px] h-auto m-5",
  hmbmenu: "lg:hidden flex justify-center items-center ml-auto mr-10 text-3xl",
  loginSignupContainer: "hidden mr-5 lg:flex flex-row mb-5",
  login:
    "no-underline text-black px-3 py-2 hover:text-slate-600 flex flex-col-reverse",
  signup:
    "text-white bg-gray-900 hover:bg-gray-800 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse ",
  navbuttons:
    "hidden lg:flex flex-col lg:flex-row lg:mx-auto lg:space-x-1 mb-5",
  navbtn:
    "text-black p-2 cursor-pointer hover:bg-gray-400 hover:text-white rounded-b-2xl flex flex-col-reverse text-center ",
  navbtnActive:
    "text-white bg-gray-900 p-2 cursor-pointer rounded-b-2xl flex flex-col-reverse text-center lg:w-20",

  dditem: "hover:bg-gray-400 p-2 hover:text-white rounded",
};
