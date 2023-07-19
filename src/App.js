import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import LandingPage from "./Components/landingpage/LandingPage";
import LoginPage from "./Components/login/LoginPage";
import SignUp from "./Components/signUp/SignUp";
import Booking from "./Components/booking/Booking";
import Profile from "./Components/profile/profile";
import Nav from "./Components/navBar/Nav";
import AddProductPage from "./Components/addProductPage/AddPoductPage";
import Modal from "./Components/modal/Modal";
import BillBoard from "./Components/billboards/BillBoards";
import Details from "./Components/productDetails/Details";
import DashBoard from "./Components/adminDashboard/Dashboard";
import Footer from "./Components/footer/Footer";
import PaymentPage from "./Components/payment/Payment";
import Success from "./Components/success/Success";


function App() {
  return (
    <>
    {/* <Footer/> */}
    {/* <Success/> */}
    {/* <PaymentPage/> */}
    <BrowserRouter>
    <Routes>
      
      {/* <Route path="/" element={ <LandingPage/>}/>
      <Route path="signin" element={ <LoginPage/>}/>
      <Route path="signUp" element={ <SignUp />}/> */}
      {/* <Route path="/" element={ <Nav/>}/>
      <Route path="billboard" element={ <BillBoard/>}/>
      <Route path="booking" element={ <Booking/>}/>
      <Route path="profile" element={ <Profile/>}/> */}
      
      
      {/* <AddProductPage/> */}
    
      {/* <Details/> */}
      {/* <Modal/> */}
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
