import { Navigate, Outlet } from "react-router-dom";
import Booking from "../Components/booking/Booking";
import Profile from "../Components/profile/profile";
import AddProductPage from "../Components/addProductPage/AddPoductPage";
import Administrator from "../Components/administrator/Administrator";
import DashBoard from "../Components/admin/adminDashboard/Dashboard";
import Totalusers from "../Components/administrator/Totalusers";
import Addproduct from "../Components/admin/Addproduct/Addproduct";
import Listing from "../Components/admin/listing/Listing";
import UserDashboard from "../Components/user/UserDashboard";

import BillBoardListing from "../Components/user/BillBoardListing/BillBoardListing";
import Addadmin from "../Components/administrator/addadmin/Addadmin";
import Reserves from "../Components/admin/reserves/Reserves";
import Totaladmin from "../Components/administrator/totaladmin/Totaladmin";
import { isUser } from "../Components/utils";
import Reserve from "../Components/user/Reserve/Reserve";
const isLoggedIn = () => localStorage.getItem("token") || null;

const getAuthRoutes = () => ({
  path: "",
  element: isLoggedIn() ? <Outlet /> : <Navigate to="/usersignin" />,
  children: [
    {
      path: "/administrator",
      element:
        isUser() === "Administrator" ? (
          <Administrator />
        ) : (
          <Navigate to="/userDashboard" />
        ),
    },
    {
      path: "/addadmin",
      element:
        isUser() === "Administrator" ? (
          <Addadmin />
        ) : (
          <Navigate to="/userDashboard" />
        ),
    },
    {
      path: "/totaladmin",
      element:
        isUser() === "Administrator" ? (
          <Totaladmin />
        ) : (
          <Navigate to="/userDashboard" />
        ),
    },
    {
      path: "/totalusers",
      element:
        isUser() === "Administrator" ? (
          <Totalusers />
        ) : (
          <Navigate to="/userDashboard" />
        ),
    },
    {
      path: "/admin",
      element:
        isUser() === "Admin" ? <DashBoard /> : <Navigate to="/userDashboard" />,
    },
    {
      path: "/addproduct",
      element:
        isUser() === "Admin" ? (
          <Addproduct />
        ) : (
          <Navigate to="/userDashboard" />
        ),
    },
    {
      path: "/listing",
      element:
        isUser() === "Admin" ? <Listing /> : <Navigate to="/userDashboard" />,
    },
    {
      path: "/reserves",
      element:
        isUser() === "Admin" ? <Reserves /> : <Navigate to="/UserDashboard" />,
    },
    { path: "UserDashboard", element: <UserDashboard /> },
    { path: "/billBoardListing", element: <BillBoardListing /> },
    { path: "reserve", element: <Reserve /> },
    // { path: "billboard", element: <BillBoard /> },
    // { path: "booking", element: <Booking /> }, remove this
    // { path: "profile", element: <Profile /> }, remove this
    // { path: "AddProductPage", element: <AddProductPage /> }, remove this
  ],
});

export default getAuthRoutes;
