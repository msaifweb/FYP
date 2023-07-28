import Usersignup from "../Components/user/userregister/Usersignup";
import Usersignin from "../Components/user/userregister/Usersignin";
import NotFoundView from "../Components/common/notFound";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn, isUser } from "../Components/utils";

const getUnAuthRoutes = () => ({
  element: !isLoggedIn() ? (
    <Outlet />
  ) : isUser() === "Admin" ? (
    <Navigate to="/admin" />
  ) : isUser() === "Administrator" ? (
    <Navigate to="/administrator" />
  ) : (
    <Navigate to="/userDashboard" />
  ),

  children: [
    { path: "*", element: <NotFoundView /> },
    { path: "usersignup", element: <Usersignup /> },
    { path: "usersignin", element: <Usersignin /> },
  ],
});

export default getUnAuthRoutes;
