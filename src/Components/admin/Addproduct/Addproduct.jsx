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
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  // };

  // const [location, setLocation] = useState("");
  // const [size, setSize] = useState("");
  // const [perDayRate, setPayDayRate] = useState(0);
  // const [image, setImage] = useState();

  // const handleLocationChange = (e) => {
  //   setLocation(e.target.value);
  // };

  // const handlePerDayRateChange = (e) => {
  //   setPayDayRate(e.target.value);
  // };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  //   // console.log(file);
  // };

  // const handleImageChange = (e) => {
  //   setImage(e.target.value);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, image: file });
  //   console.log(file);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   // const userData = {
    //   // location,
    //   // size,
    //   // perDayRate,
    //   // image,
    //   const formDataToSend = new FormData();
    //   formDataToSend.append("location", location);
    //   formDataToSend.append("size", size);
    //   formDataToSend.append("perDayRate", perDayRate);
    //   formDataToSend.append("image", image);
    //   // };

    //   const response = await axios.post(
    //     "http://localhost:4000/createbillboard",
    //     // userData
    //     formDataToSend
    //   );
    //   console.log("User signed up successfully:", response.data);
    //   // Perform any desired actions on successful signup

    //   // Clear the form after successful submission
    //   setLocation("");
    //   setSize("");
    //   setPerDayRate("");
    //   setImage("");
    // } catch (error) {
    //   console.error("Error signing up user:", error);
    // }

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
        <h1 className="my-4 dasHeader">Dashboard</h1>
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
                // value={location}
                // onChange={handleLocationChange}
                placeholder="Location"
                required
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
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
                // value={size}
                // onChange={handleSizeChange}
                placeholder="size"
                required
                // value={size}
                // onChange={(e) => setSize(e.target.value)}
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
                // value={perDayRate}
                // onChange={handlePerDayRateChange}
                placeholder="Per Day Rate"
                required
                // value={perDayRate}
                // onChange={(e) => setPerDayRate(e.target.value)}
              />
            </div>
            {/* <div className="mb-3">
          <label htmlFor="billboardType" className="form-label">
            Billboard Type:
          </label>
          <input
            type="text"
            id="billboardType"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digital/hard"
          />
        </div> */}
            {/* <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height:
          </label>
          <input
            type="text"
            id="height"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="5 inch"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="width" className="form-label">
            Width:
          </label>
          <input
            type="text"
            id="width"
            className="form-control"
            value={width}
            onChange={handleWidthChange}
            placeholder="5 inch"
          />
        </div> */}
            {/* <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="About Billboard in details"
          ></textarea>
        </div> */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                BillBoard Image:
              </label>
              <input
                // type="file"
                id="image"
                className="form-control"
                // name="image"
                // value={formData.image}
                accept="image/*"
                onChange={handleChange}
                // value={undefined}
                // value={image}
                // onChange={handleImageChange}
                // onChange={handleImageChange}
                type="file"
                // onChange={handleImageChange}
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
