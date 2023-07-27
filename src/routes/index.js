import { Navigate } from "react-router-dom";
import getUnAuthRoutes from "./unAuthRoutes";
import getAuthRoutes from "./authRoutes";
import LandingPage from "../Components/home/landingpage/LandingPage";
import Details from "../Components/home/billBoardDetails/Details";

const getRoutes = () => [
  {
    path: "",
    children: [
      { path: "/home", element: <LandingPage /> },
      { path: "/details", element: <Details /> },
      { index: true, element: <Navigate to="/home" /> },
      getAuthRoutes(),
      getUnAuthRoutes(),
    ],
  },
];

export default getRoutes;
