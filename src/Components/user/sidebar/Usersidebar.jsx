import React, { useState } from "react";

import "./usersidebar.css";

import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import { jwtDecoded } from "../../utils";

function Usersidebar() {
  const user = jwtDecoded();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title> Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              alt={user?.name.toUpperCase()}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 70, height: 70 }}
            />
          </span>{" "}
          <br />
          <p>
            <b>Name: </b>
            {user?.name}
          </p>
          <p>
            <b>Email: </b>
            {user?.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row">
        <div className="sidebar-wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <Link to="/UserDashboard">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " /> Dashboard
                  </a>
                </li>
              </Link>

              <li onClick={handleShowModal}>
                <a href="#" className="sidebarHeader">
                  <i className="fas fa-tachometer-alt  " /> Profile
                </a>
              </li>

              <Link to="/billBoardListing">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " />
                    Reserve Billboard
                  </a>
                </li>
              </Link>

              <Link to="/reserve">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " />
                    Reservations
                  </a>
                </li>
              </Link>

              <Link
                to="/"
                style={{
                  color: "white",
                  // textDecoration: "none",
                }}
              >
                <li
                  style={{
                    textAlign: "center",
                    marginTop: "70vh",
                  }}
                >
                  <a>
                    <span onClick={() => localStorage.removeItem("token")}>
                      Logout
                    </span>
                  </a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Usersidebar;
