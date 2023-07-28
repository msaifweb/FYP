import "./dashboard.css";
import Adminsidebar from "../sidebar/Adminsidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../../utils";
import { Link } from "react-router-dom";
import { jwtDecoded, jwt_token } from "../../utils";
const DashBoard = () => {
  const [totalReservations, setTotalReservations] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [listing, setListing] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common["x-auth-token"] = jwt_token;

        const response = await axios.get(
          "http://localhost:4000/api/getallreservation"
        );

        const { id } = jwtDecoded();

        const newData =
          response.data.length > 0
            ? response.data.filter(
                (reservation) => reservation?.billBoard.user === id
              )
            : [];

        const billBoardResponse = await axios.post(
          "http://localhost:4000/api/getallbillboard"
        );

        const billBoardData =
          billBoardResponse.data.length > 0
            ? billBoardResponse.data.filter(
                (reservation) => reservation?.user === id
              )
            : [];

        setListing(billBoardData.length);
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
          <Adminsidebar />
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Admin Dashboard</h1>

          <div className="row pr-4">
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Billboards
                    <br /> <b>{listing}</b>{" "}
                  </div>
                </div>
                <Link
                  className="card-footer text-white clearfix small z-1"
                  to="/listing"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Bookings
                    <br /> <b>{totalReservations}</b>
                  </div>
                </div>
                <Link
                  className="card-footer text-white clearfix small z-1"
                  to="/reserves"
                >
                  <span className="float-left">View Details</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-info o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Revenue
                    <br /> <b>{totalAmount}</b>{" "}
                  </div>
                </div>
                <Link
                  className="card-footer text-white clearfix small z-1"
                  href="/reserves"
                >
                  <span className="float-left">View Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
