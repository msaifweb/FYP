import React from "react";
import "./Profile.css";

import profile from "../images/smiley.svg";

const Profile = () => (
  <div className="container profile">
    <form method="#" id="profile_form" action="#" className="onsubmit-disable">
      <div className="mb-4 pb-2 d-flex align-items-center flex-column">
        <div className="profilepic mb-1">
          <img src={profile} alt="logo" />
        </div>
        <label>
          <input
            type="file"
            style={{ display: "none" }}
            name="profile_picture"
            id="profilePicture"
          />
          <a className="btn btn-link text-decoration-none" href="#">
            Change profile picture
          </a>
        </label>
      </div>
      <div className="mb-4 pb-2"></div>
      <div className="mb-4 pb-2">
        <label htmlFor="name" className="form-label fw-bold">
          Your name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Awais Ahmad"
        />
      </div>
      <div className="mb-4 pb-2">
        <label htmlFor="email" className="form-label fw-bold">
          Your email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control"
          placeholder="awaiskhalil404@gmail.com"
        />
      </div>
      <div className="mb-4 pb-2">
        <label htmlFor="companyName" className="form-label fw-bold">
          Company Name:
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="form-control"
          placeholder="xyz inc"
        />
      </div>

      <div className="mb-4 pb-2">
        <label htmlFor="number" className="form-label fw-bold">
          Your Phone Number:
        </label>
        <input
          type="tel"
          id="pNumber"
          name="pnumber"
          className="form-control"
          placeholder="123456789"
        />
      </div>
      <div className="mb-4 pb-2">
        <label htmlFor="number" className="form-label fw-bold">
          Payment Method:
        </label>
        <br />
        <input type="radio" value="Jazzcash" name="payment" />
        JazzCash
        <br />
        <input type="radio" value="Credit Card" name="payment" />
        Credit Card
        <br />
        <input type="radio" value="Other" name="payment" /> Other
      </div>

      <div className="sticky-bottom justify-content-center">
        <div className="flex flex-wrap bg-white py-2 py-sm-3 d-flex align-items-center justify-content-center border-top">
          <button className="btn btn-primary m-1 m-sm-2" type="submit">
            Save changes
          </button>
        </div>
      </div>
    </form>
  </div>
);
export default Profile;
