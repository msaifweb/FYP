import React, { useState } from "react";
import axios from "axios";
import "./addproduct.css";
import Adminsidebar from "../sidebar/Adminsidebar";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../../utils";
import { useLocation } from "react-router-dom";
import { jwtDecoded, jwt_token } from "../../utils";

const Addproduct = () => {
  const { id } = jwtDecoded();

  const location = useLocation();
  const item = location?.state?.item;
  const options = ["Available", "Booked"];
  const [formData, setFormData] = useState({
    _id: item?._id ?? "",
    name: item?.name ?? "",
    description: item?.description ?? "",
    status: item?.status ?? "Available",
    location: item?.location ?? "",
    size: item?.size ?? "",
    perDayRate: item?.perDayRate ?? 0,
    image: item?.image ?? "",
    userId: id,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [name]: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Adddata(formData);
  };

  const Adddata = async (userData) => {
    axios.defaults.headers.common["x-auth-token"] = jwt_token;
    if (item) {
      try {
        await axios.put("http://localhost:4000/api/updatebillboard", userData);
        toast.success("Billboard successfully updated", toastSetting);
      } catch (error) {
        toast.error(error.message, toastSetting);
      }
    } else {
      try {
        await axios.post("http://localhost:4000/api/createbillboard", userData);
        toast.success("Billboard successfully saved", toastSetting);
      } catch (error) {
        toast.error(error.message, toastSetting);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-2">
        <Adminsidebar />
      </div>

      <div className="col-12 col-md-9 mx-2">
        <div className="container addPro shadow-lg">
          <h1>Add New Billboard</h1>
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <input
                type="text"
                id="description"
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
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
              <label htmlFor="status" className="form-label">
                Status:
              </label>

              <select
                id="status"
                className="form-control"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Status"
                required
              >
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Billboard Image:
              </label>
              <input
                id="image"
                className="form-control"
                name="image"
                accept="image/*"
                onChange={handleChange}
                type="file"
                required={!item}
              />
            </div>
            {formData.image && (
              <div className="mb-3">
                <img
                  src={formData.image}
                  width={150}
                  style={{ border: "1px solid red" }}
                />
              </div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button type="submit" className="btn btn-primary">
                {item ? "Update Billboard" : "Add Billboard"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
