import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import LoginPage from "../Components/login/LoginPage";
import Booking from "../Components/booking/Booking";
import Profile from "../Components/profile/profile";
import Nav from "../Components/navBar/Nav";
import AddProductPage from "../Components/addProductPage/AddPoductPage";
import Modal from "../Components/modal/Modal";
import BillBoard from "../Components/billboards/BillBoards";
import Details from "../Components/productDetails/Details";
import Footer from "../Components/footer/Footer";
import PaymentPage from "../Components/payment/Payment";
import Success from "../Components/success/Success";
import Payment from "../Components/payment/Payment";
import Administrator from "../Components/administrator/Administrator";
// import Listing from "../Components/Adminlisting/Listing";
import DashBoard from "../Components/admin/adminDashboard/Dashboard";
// import Adminsignup from "../Components/Adminlisting/signUp/Adminsignup";
import Totalusers from "../Components/administrator/Totalusers";
import Addproduct from "../Components/admin/Addproduct/Addproduct";
import Listing from "../Components/admin/listing/Listing";
import UserDashboard from "../Components/user/UserDashboard";
import ProtectedRoute from "../Components/ProtectedRoute";
import { AuthProvider } from "../Components/AuthContext";
import Reserve from "../Components/user/Reserve/Reserve";
import Addadmin from "../Components/administrator/addadmin/Addadmin";
import Reserves from "../Components/admin/reserves/Reserves";
import Totaladmin from "../Components/administrator/totaladmin/Totaladmin";
import LandingPage from "../Components/landingpage/LandingPage";

const isLoggedIn = () => localStorage.getItem("token") || null;

const getAuthRoutes = () => ({
  path: "",
  element: isLoggedIn() ? <Outlet /> : <Navigate to="/usersignin" />,
  children: [
    { path: "/home", element: <LandingPage /> },

    { path: "/administrator", element: <Administrator /> },
    { path: "/addadmin", element: <Addadmin /> },
    { path: "/totaladmin", element: <Totaladmin /> },
    { path: "/totalusers", element: <Totalusers /> },
    { path: "/admin", element: <DashBoard /> },
    { path: "/addproduct", element: <Addproduct /> },
    { path: "/listing", element: <Listing /> },
    { path: "/reserves", element: <Reserves /> },
    { path: "UserDashboard", element: <UserDashboard /> },
    { path: "reserve", element: <Reserve /> },
    { path: "billboard", element: <BillBoard /> },
    { path: "booking", element: <Booking /> },
    { path: "profile", element: <Profile /> },
    { path: "AddProductPage", element: <AddProductPage /> },
    { path: "Details", element: <Details /> },
  ],
});

export default getAuthRoutes;
