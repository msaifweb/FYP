// frontend/src/authContext.js
import React, { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password, email, phone) => {
    try {
      const response = await axios.post(`http://localhost:4000/createuser`, {
        username,
        password,
        email,
        phone,
      });
      const { token } = response.data;
      const decodedToken = jwt_decode(token);
      setUser(decodedToken);
      localStorage.setItem("jwtToken", token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("jwtToken");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
