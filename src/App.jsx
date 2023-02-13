import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PageNotFound from "Components/PageNotFound";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import Test from "Pages/Test";
import UniversitiesInEgypt from "Pages/UniversitiesInEgypt";
import UniversityPage from "Pages/UniversityPage";
import ManageUniversity from "Pages/ManageUniversity";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import ManageOrganizations from "Pages/ManageOrganizations";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RepresentativeSignup from "Pages/RepresentativeSignup";
import { AuthProvider } from "Context/AuthContext";
import { useAuth } from "Context/AuthContext";
import MyProfile from "Pages/MyProfile";

const queryClient = new QueryClient();

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

const NavFooterLayout = () => (
  <>
    <Navbar /> <Outlet /> <Footer />
  </>
);

const HandleLoggedIn = () => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) return <Navigate to="/" />;

  return <Outlet />;
};

const ProtectedRoute = ({ userType }) => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" />;

  if (!userType) return <Outlet />; // if userType is undefined, this will mean that the user simply is logged in (not a specific type

  if (user.userType !== userType) return <Navigate to="/" />;

  return <Outlet />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="test" element={<Test />} />

              <Route element={<HandleLoggedIn />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                <Route
                  path="RepresentativeSignup"
                  element={<RepresentativeSignup />}
                />
              </Route>

              <Route element={<NavFooterLayout />}>
                <Route index element={<Home />} />
                <Route
                  path="UniversitiesInEgypt"
                  element={<UniversitiesInEgypt />}
                />
                <Route
                  path="University/:universityid"
                  element={<UniversityPage />}
                />

                <Route element={<ProtectedRoute />}>
                  <Route path="MyProfile" element={<MyProfile />} />
                </Route>

                <Route element={<ProtectedRoute userType={3} />}>
                  <Route
                    path="ManageOrganizations"
                    element={<ManageOrganizations />}
                  />
                  <Route
                    path="ManageUniversity/:universityid"
                    element={<ManageUniversity />}
                  />
                </Route>

                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
