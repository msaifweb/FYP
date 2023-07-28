import { Navigate, Outlet } from "react-router-dom";
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
import Reserve from "../Components/user/Reserve/Reserve";
import AdministratorReserve from "../Components/administrator/reserves/AdministratorReserve";
import AdministratorListing from "../Components/administrator/administratorListing/AdministratorListing";

const isLoggedIn = () => localStorage.getItem("token") || null;
const getAuthRoutes = () => ({
  path: "",
  element: isLoggedIn() ? <Outlet /> : <Navigate to="/usersignin" />,
  children: [
    {
      path: "/administrator",
      element: <Administrator />,
    },
    {
      path: "/addadmin",
      element: <Addadmin />,
    },
    {
      path: "/totaladmin",
      element: <Totaladmin />,
    },
    {
      path: "/totalusers",
      element: <Totalusers />,
    },
    {
      path: "/administratorReserve",
      element: <AdministratorReserve />,
    },
    {
      path: "/administratorListing",
      element: <AdministratorListing />,
    },
    {
      path: "/admin",
      element: <DashBoard />,
    },
    {
      path: "/addproduct",
      element: <Addproduct />,
    },
    {
      path: "/listing",
      element: <Listing />,
    },
    {
      path: "/reserves",
      element: <Reserves />,
    },
    { path: "UserDashboard", element: <UserDashboard /> },
    { path: "/billBoardListing", element: <BillBoardListing /> },
    { path: "reserve", element: <Reserve /> },
  ],
});

export default getAuthRoutes;
