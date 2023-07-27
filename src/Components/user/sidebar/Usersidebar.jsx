import React, { useState } from "react";

import "./usersidebar.css";

import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
function Usersidebar() {
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
          <Modal.Title> Administrator Profile</Modal.Title>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* <Button variant="primary">Add Billboard</Button> */}
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
