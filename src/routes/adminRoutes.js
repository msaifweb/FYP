import { Navigate, Outlet } from "react-router-dom";
import DashBoard from "../Components/admin/adminDashboard/Dashboard";
import Addproduct from "../Components/admin/Addproduct/Addproduct";
import Listing from "../Components/admin/listing/Listing";

import Reserves from "../Components/admin/reserves/Reserves";
import { isUser } from "../Components/utils";

const getAdminRoutes = () => ({
  path: "",
  element: isUser() === "Admin" ? <Outlet /> : <Navigate to="/userDashboard" />,
  children: [
    { path: "/admin", element: <DashBoard /> },
    { path: "/addproduct", element: <Addproduct /> },
    { path: "/listing", element: <Listing /> },
    { path: "/reserves", element: <Reserves /> },
  ],
});

export default getAdminRoutes;
