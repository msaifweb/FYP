// frontend/src/ProtectedRoute.js
import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const token = localStorage.getItem("jwtToken");
  const userRole = token ? JSON.parse(atob(token.split(".")[1])).role : null;

  if (!token || !userRole || !allowedRoles.includes(userRole)) {
    // Redirect to the login page if the token is missing or the user doesn't have the required role
    // return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
