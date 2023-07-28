import React, { useState } from "react";
import "./addproductpage.css";

const AddProductPage = () => {
  const [billboardName, setBillboardName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [billboardType, setBillboardType] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleBillboardNameChange = (e) => {
    setBillboardName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBillboardTypeChange = (e) => {
    setBillboardType(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any desired action with the billboard data
    const billboardData = {
      name: billboardName,
      price: price,
      location: location,
      type: billboardType,
      height: height,
      width: width,
      description: description,
      image: image,
    };

    // Reset the form fields
    setBillboardName("");
    setPrice("");
    setLocation("");
    setBillboardType("");
    setHeight("");
    setWidth("");
    setDescription("");
    setImage("");

    // Example: Display the billboard data in the console
    console.log(billboardData);
  };

  return (
    <div className="container addPro shadow-lg">
      <h1>Add New Billboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="billboardName" className="form-label">
            Billboard Title:
          </label>
          <input
            type="text"
            id="billboardName"
            className="form-control"
            value={billboardName}
            onChange={handleBillboardNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={handlePriceChange}
            placeholder="PKR"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            type="text"
            id="location"
            className="form-control"
            value={location}
            onChange={handleLocationChange}
            placeholder="Eg:DHA Phase 6 "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="billboardType" className="form-label">
            Billboard Type:
          </label>
          <input
            type="text"
            id="billboardType"
            className="form-control"
            value={billboardType}
            onChange={handleBillboardTypeChange}
            placeholder="Digital/hard"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height:
          </label>
          <input
            type="text"
            id="height"
            className="form-control"
            value={height}
            onChange={handleHeightChange}
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
        </div>
        <div className="mb-3">
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
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Billboard Image:
          </label>
          <input
            type="file"
            id="image"
            className="form-control"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Add Billboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
