import Usersignup from "../Components/user/userregister/Usersignup";
import Usersignin from "../Components/user/userregister/Usersignin";
import NotFoundView from "../Components/common/notFound";
import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const isLoggedIn = () => localStorage.getItem("token") || null;
const jwt_token = localStorage.getItem("token") || null;

const isUser = () => {
  if (!jwt_token) return false;
  const user = jwtDecode(jwt_token);
  return user?.role;
};

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
