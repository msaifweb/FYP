import React from "react";
import "./landingpage.css";
import dha from "../images/DHA.jpg";
import gulberg from "../images/gulberg.webp";
import bahriaTown from "../images/bahria town.jpg";
import FeaturedProperties from "../featuredProperties/FeaturedProperties";
import Header from "../header/Header";
import Products from "../billboards/BillBoards";
import Footer from "../footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="header"></div>

      <div className="featured">
        <div className="featuredItem">
          <img src={dha} alt="DHA Lahore" className="featuredImg" />
          <div className="featuredTitles">
            <h1>DHA PH6</h1>
            <h2>123 Billboards</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src={gulberg} alt="gulberg-lahore" className="featuredImg" />
          <div className="featuredTitles">
            {/* <Link href="signin"> */}
            <h1>Gulberg</h1>
            {/* </Link> */}

            <h2>124 Billboards</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={bahriaTown} alt="bahriaTown" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Bahria Town Lahore</h1>
            <h2>532 Billboards</h2>
          </div>
        </div>
      </div>
      {/* <FeaturedProperties /> */}
      <Products />

      <Footer />
    </>
  );
};

export default LandingPage;
