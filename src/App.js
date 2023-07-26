<<<<<<< Updated upstream
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import LandingPage from "./Components/landingpage/LandingPage";
import LoginPage from "./Components/login/LoginPage";
import Booking from "./Components/booking/Booking";
import Profile from "./Components/profile/profile";
import Nav from "./Components/navBar/Nav";
import AddProductPage from "./Components/addProductPage/AddPoductPage";
import Modal from "./Components/modal/Modal";
import BillBoard from "./Components/billboards/BillBoards";
import Details from "./Components/productDetails/Details";
import Footer from "./Components/footer/Footer";
import PaymentPage from "./Components/payment/Payment";
import Success from "./Components/success/Success";
import Payment from "./Components/payment/Payment";
import Administrator from "./Components/administrator/Administrator";
// import Listing from "./Components/Adminlisting/Listing";
import DashBoard from "./Components/admin/adminDashboard/Dashboard";
// import Adminsignup from "./Components/Adminlisting/signUp/Adminsignup";
import Totalusers from "./Components/administrator/Totalusers";
import Addproduct from "./Components/admin/Addproduct/Addproduct";
import Listing from "./Components/admin/listing/Listing";
import UserDashboard from "./Components/user/UserDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Components/AuthContext";
import Usersignup from "./Components/user/userregister/Usersignup";
import Usersignin from "./Components/user/userregister/Usersignin";
import Reserve from "./Components/user/Reserve/Reserve";
import Addadmin from "./Components/administrator/addadmin/Addadmin";
import Reserves from "./Components/admin/reserves/Reserves";
import Totaladmin from "./Components/administrator/totaladmin/Totaladmin";
=======
import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";
>>>>>>> Stashed changes

function App() {
  const routes = useRoutes(getRoutes());
  return <div>{routes}</div>;
}

export default App;
