import "./userdashboard.css";
import Usersidebar from "./sidebar/Usersidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../utils";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [totalReservations, setTotalReservations] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jwt_token = localStorage.getItem("token") || null;
        axios.defaults.headers.common["x-auth-token"] = jwt_token;

        const response = await axios.get(
          "http://localhost:4000/api/getallreservation"
        );

        const { id } = jwtDecode(jwt_token);

        const newData =
          response.data.length > 0
            ? response.data.filter(
                (reservation) => reservation?.user?._id === id
              )
            : [];
        setTotalReservations(newData.length);
        setTotalAmount(
          newData.reduce(
            (prevValue, currentValue) => prevValue + currentValue.rate,
            0
          )
        );
      } catch (error) {
        toast.error(error.message, toastSetting);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-2">
          <Usersidebar />
        </div>
        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader"> User Dashboard</h1>

          <div className="row pr-4">
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Total Reservations
                    <br /> <b>{totalReservations}</b>
                  </div>
                </div>
                <Link
                  className="card-footer text-white clearfix small z-1"
                  to="/reserve"
                >
                  <span className="float-left">View Details</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Total Bill
                    <br /> <b>{totalAmount} PKR</b>
                  </div>
                </div>
                <Link
                  to="/reserve"
                  className="card-footer text-white clearfix small z-1"
                >
                  <span>View Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
