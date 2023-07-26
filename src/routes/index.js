import { Navigate } from "react-router-dom";
import getUnAuthRoutes from "./unAuthRoutes";
import getAuthRoutes from "./authRoutes";

const getRoutes = () => [
  {
    path: "",
    children: [
      { index: true, element: <Navigate to="usersignin" /> },
      getAuthRoutes(),
      getUnAuthRoutes(),
    ],
  },
];

export default getRoutes;
