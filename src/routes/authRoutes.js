import { Navigate, Outlet } from "react-router-dom";
import UserDashboard from "../Components/user/UserDashboard";
import BillBoardListing from "../Components/user/BillBoardListing/BillBoardListing";
import { isLoggedIn } from "../Components/utils";
import Reserve from "../Components/user/Reserve/Reserve";
import getAdminRoutes from "./adminRoutes";
import getAdministratorRoutes from "./administratorRoutes";
const getAuthRoutes = () => ({
  path: "",
  element: isLoggedIn() ? <Outlet /> : <Navigate to="/usersignin" />,
  children: [
    { path: "UserDashboard", element: <UserDashboard /> },
    { path: "/billBoardListing", element: <BillBoardListing /> },
    { path: "reserve", element: <Reserve /> },
    getAdminRoutes(),
    getAdministratorRoutes(),
  ],
});

export default getAuthRoutes;
