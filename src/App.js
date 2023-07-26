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
import Adminsignup from "./Components/Adminlisting/signUp/Adminsignup";
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

function App() {
  return (
    <>
      {/* <Footer /> */}
      {/* <Success/> */}
      {/* <PaymentPage/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/administrator" element={<Administrator />} />
          <Route path="/addadmin" element={<Addadmin />} />
          <Route path="/totaladmin" element={<Totaladmin />} />

          <Route path="/totalusers" element={<Totalusers />} />
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/reserves" element={<Reserves />} />

          {/* <Route path="/listing" element={<Listing />} /> */}
          {/* <Route path="signin" element={<LoginPage />} /> */}
          {/* <Route path="adminsignup" element={<Adminsignup />} /> */}
          <Route path="UserDashboard" element={<UserDashboard />} />
          <Route path="usersignup" element={<Usersignup />} />
          <Route path="usersignin" element={<Usersignin />} />
          <Route path="reserve" element={<Reserve />} />

          {/* <Route path="/" element={<Nav />} /> */}
          <Route path="billboard" element={<BillBoard />} />
          <Route path="booking" element={<Booking />} />
          <Route path="profile" element={<Profile />} />
          <Route path="AddProductPage" element={<AddProductPage />} />
          <Route path="Details" element={<Details />} />
          {/* <Route path="Modal" element={<Modal />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Success" element={<Success />} /> */}
          {/* <Modal /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
