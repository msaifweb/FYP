import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddProductPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Details</h1>
      <button onClick={handleShowModal}>Details</button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Content of the modal */}
          {/* Add your form fields or any other content here */}
          <h3>1 week Booking</h3>
          <p>
            <b>From:</b>August 23,2023
          </p>
          <p>
            <b>Location:</b>DHA Phase VI
          </p>

          <p>
            <b>To:</b>August 27,2023
          </p>
          <p>
            <b>With:</b> Awais Ahmad
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* <Button variant="primary">Add Billboard</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProductPage;
