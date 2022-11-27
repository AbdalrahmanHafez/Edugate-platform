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
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ManageUniversities from "Pages/ManageUniversities";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const NavFooterLayout = () => (
  <>
    <Navbar /> <Outlet /> <Footer />
  </>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="test" element={<Test />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="/" element={<NavFooterLayout />}>
            <Route index element={<Home />} />
            <Route
              path="UniversitiesInEgypt"
              element={<UniversitiesInEgypt />}
            />
            <Route
              path="University/:universityid"
              element={<UniversityPage />}
            />

            <Route path="ManageUniversities" element={<ManageUniversities />} />
            <Route
              path="ManageUniversities/:universityid"
              element={<ManageUniversity />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
