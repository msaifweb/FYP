import { Navigate, Outlet } from "react-router-dom";
import Administrator from "../Components/administrator/Administrator";
import Totalusers from "../Components/administrator/Totalusers";
import Addadmin from "../Components/administrator/addadmin/Addadmin";
import Totaladmin from "../Components/administrator/totaladmin/Totaladmin";

import { isUser } from "../Components/utils";

const getAdministratorRoutes = () => ({
  path: "",
  element:
    isUser() === "Administrator" ? (
      <Outlet />
    ) : (
      <Navigate to="/userDashboard" />
    ),
  children: [
    { path: "/administrator", element: <Administrator /> },
    { path: "/addadmin", element: <Addadmin /> },
    { path: "/totaladmin", element: <Totaladmin /> },
    { path: "/totalusers", element: <Totalusers /> },
  ],
});

export default getAdministratorRoutes;
