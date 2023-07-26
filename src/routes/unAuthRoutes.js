import Usersignup from "../Components/user/userregister/Usersignup";
import Usersignin from "../Components/user/userregister/Usersignin";
import NotFoundView from "../Components/common/notFound";
import { Navigate, Outlet } from "react-router-dom";
import LandingPage from "../Components/landingpage/LandingPage";

const isLoggedIn = () => localStorage.getItem("token") || null;

const getUnAuthRoutes = () => ({
  element: !isLoggedIn() ? <Outlet /> : <Navigate to="/userDashboard" />,

  children: [
    { path: "/home", element: <LandingPage /> },
    { path: "*", element: <NotFoundView /> },
    { path: "usersignup", element: <Usersignup /> },
    { path: "usersignin", element: <Usersignin /> },
  ],
});

export default getUnAuthRoutes;
