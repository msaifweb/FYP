import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navBar">
      <div className="main1-nav1 container flex">
        <a href="#" onClick="reload()" className="company-logo mx-5 ">
          <img src="#" alt="ultra sign solutions" />
        </a>
        <div className="nav-links">
          <ul className="flex my-3 px-2">
            <Link to="billboard">
              <li className="hover-link1 nav-item" id="billboard">
                BillBoards
              </li>
            </Link>

            <Link to="booking">
              <li className="hover-link1 nav-item" id="bookings">
                Bookings
              </li>
            </Link>
            <Link to="profile">
              <li className="hover-link1 nav-item" id="cart">
                Profile
              </li>
            </Link>
            {/* <li className="hover-link nav-item" id="profile">
             Profile
           </li> */}
          </ul>
        </div>
        <div className="search-bar flex">
          <input
            id="search-text"
            type="text"
            className="search-input"
            placeholder="Search Location"
          />
          <button id="search-button" className="search-button ">
            Search
          </button>

          {/* <a href="#" className="hover-link nav-item" id="profile">Profile</a> */}
        </div>
      </div>
    </nav>
    // <main>
    //   <div className="cards-container container flex" id="cards-container">
    //   </div>
    // </main>
    // <template id="template-news-card" />
  );
};

export default Nav;
