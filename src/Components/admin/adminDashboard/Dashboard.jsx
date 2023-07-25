import "./dashboard.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import logo from "./logo512.png";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar1";
import Adminsidebar from "../sidebar/Adminsidebar";

const DashBoard = () => {
  const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div>
      <Modal
        show={showModal}
        // onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admin Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Content of the modal */}
          {/* Add your form fields or any other content here */}
          <span style={{ textAlign: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 70, height: 70 }}
            />
          </span>{" "}
          <p>
            <b>Awais Ahmad</b>
          </p>
          <p>
            <b>awaisahamd@gmail.com</b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            // onClick={handleCloseModal}
          >
            Close
          </Button>
          {/* <Button variant="primary">Add Billboard</Button> */}
        </Modal.Footer>
      </Modal>

      <div className="row">
        <div className="col-12 col-md-2">
          {/* <div className="row">
            <div className="sidebar-wrapper"> */}
          {/* <nav id="sidebar">
                <ul className="list-unstyled components">
                  <li>
                    <a href="#" className="sidebarHeader">
                      <i className="fas fa-tachometer-alt  " /> Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sidebarHeader">
                      <i className="fas fa-tachometer-alt  " /> Profile
                    </a>
                  </li>
                  <Link to="/listing">
                    <li>
                      <a href="#" className="sidebarHeader">
                        <i className="fas fa-tachometer-alt  " />
                        Orders
                      </a>
                    </li>
                  </Link>
                </ul>
              </nav> */}
          <Adminsidebar />
          {/* </div>
          </div> */}
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Admin Dashboard</h1>
          <div className="row pr-4">
            <div className="col-xl-12 col-sm-12 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Total Amount
                    <br /> <b>PK4567</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pr-4">
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    BillBoards
                    <br /> <b>56</b>
                  </div>
                </div>
                <a className="card-footer text-white clearfix small z-1" to="#">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Bookings
                    <br /> <b>125</b>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  to="/admin/orders"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-info o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Users
                    <br /> <b>45</b>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1"
                  href="#"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body1">
                  <div className="text-center card-font-size">
                    Complete
                    <br /> <b>4</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
