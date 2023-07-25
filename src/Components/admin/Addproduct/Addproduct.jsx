import React, { useState } from "react";
import axios from "axios";

import "./addproduct.css";
import Adminsidebar from "../sidebar/Adminsidebar";

const Addproduct = () => {
  const [formData, setFormData] = useState({
    location: "",
    size: "",
    perDayRate: Number,
    // status: "",
    image: "",
  });

  // const handleImageChange = (e) => {
  //   setImage(e.target.value);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //   const formDataToSend = new FormData();
    //   formDataToSend.append("location", location);
    //   formDataToSend.append("size", size);
    //   formDataToSend.append("perDayRate", perDayRate);
    //   formDataToSend.append("image", image);

    Adddata(formData);
  };

  const Adddata = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/createbillboard",
        userData
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data", // Important! Set the content type to multipart/form-data for file upload
        //   },
        // }
      );
      // let jwt_token = localStorage.getItem("token") || null;
      // axios.defaults.headers.common["x-auth-token"] = jwt_token;
      console.log("User signed up successfully:", response.data);
      setFormData({
        location: "",
        size: "",
        perDayRate: "",
        image: "",
      });
    } catch (error) {
      console.error("Error signing up user:", error.response.data);
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-2">
        <Adminsidebar />
      </div>

      <div className="col-12 col-md-9 mx-2">
        <div className="container addPro shadow-lg">
          {/* <img src={image} alt="" /> */}
          <h1>Add New Billboard</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location:
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">
                Size:
              </label>
              <input
                type="text"
                id="size"
                className="form-control"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="size"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="perDayRate" className="form-label">
                Per Day Rate:
              </label>
              <input
                id="perDayRate"
                className="form-control"
                name="perDayRate"
                value={formData.perDayRate}
                onChange={handleChange}
                placeholder="Per Day Rate"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                BillBoard Image:
              </label>
              <input
                // type="file"
                id="image"
                className="form-control"
                name="image"
                accept="image/*"
                onChange={handleChange}
                type="file"
                required
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Add Billboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
