import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Booking = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="w-100 d-block pb-4 pb-sm-5 mb-md-1" />
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11">
          <div className="d-flex flex-wrap align-items-center">
            <h1 className="h3 fw-bold d-inline me-3 mb-3 mb-md-0">
              Bookings <small className="text-secondary">2</small>
            </h1>
          </div>
          <div className="table-responsive mb-4">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="small fw-normal text-secondary border-0 border-bottom border-1 ps-0">
                    Booking Date
                  </th>
                  <th className="small fw-normal text-secondary">
                    Starting Date
                  </th>
                  <th className="small fw-normal text-secondary">
                    Ending Date
                  </th>
                  <th className="small fw-normal text-secondary">
                    BillBoard Type
                  </th>
                  <th className="small fw-normal text-secondary">With</th>
                  <th className="small fw-normal text-secondary text-center">
                    Status
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody className="border-top">
                <tr className>
                  <td
                    className="py-4 text-nowra pe-4 ps-0 fw-bold"
                    style={{ minWidth: "140px" }}
                  >
                    August 23, 2023
                  </td>
                  <td className="py-4 small text-nowrap pe-4">
                    August 23, 2023
                  </td>
                  <td className="py-4 small text-nowrap pe-4">
                    August 27, 2023
                  </td>
                  <td className="py-4 small" style={{ minWidth: "200px" }}>
                    <a className="text-decoration-none" href="#">
                      Digital
                    </a>
                  </td>
                  <td className="py-4 small" style={{ minWidth: "200px" }}>
                    <a className="text-decoration-none" href="#">
                      Awais Ahmad
                    </a>
                  </td>
                  <td className="py-4 text-center">
                    <span className="badge rounded-pill bg-secondary">
                      complete
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="d-flex align-items-center justify-content-end">
                      <form method="post" action="#">
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="EHMaSemFBsZ8ppYPwaDy50UOFim6k57RDry3xaHX"
                        />
                      </form>
                      <button
                        onClick={handleShowModal}
                        className="btn btn-sm btn-outline-primary text-nowrap border-0 my-1 ms-1"
                      >
                        Details
                      </button>
                      <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>Booking Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {/* Content of the modal */}
                          {/* Add your form fields or any other content here */}
                          <h3>1 Week Booking</h3>

                          <p>
                            <b>Location:</b>DHA Phase VI
                          </p>
                          <p>
                            <b>From:</b>August 23,2023
                          </p>
                          <p>
                            <b>To:</b>August 27,2023
                          </p>
                          <p>
                            <b>With:</b> Awais Ahmad
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleCloseModal}
                          >
                            Close
                          </Button>
                          {/* <Button variant="primary">Add Billboard</Button> */}
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </td>
                </tr>
                <tr className>
                  <td
                    className="py-4 text-nowra pe-4 ps-0 fw-bold"
                    style={{ minWidth: "140px" }}
                  >
                    August 24, 2023
                  </td>
                  <td className="py-4 small text-nowrap pe-4">
                    August 24, 2023
                  </td>
                  <td className="py-4 small text-nowrap pe-4">
                    August 30, 2023
                  </td>
                  <td className="py-4 small" style={{ minWidth: "200px" }}>
                    <a className="text-decoration-none" href="">
                      hard
                    </a>
                  </td>
                  <td className="py-4 small" style={{ minWidth: "200px" }}>
                    <a className="text-decoration-none" href="">
                      Awais Ahmad
                    </a>
                  </td>
                  <td className="py-4 text-center">
                    <span className="badge rounded-pill bg-secondary">
                      complete
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="d-flex align-items-center justify-content-end">
                      <form
                        onsubmit="
                                  if(!confirm('Are you sure you want to cancel this event?')){return false;};document.getElementById('btn-list-324991').classList.add('btn-spinner-on');"
                        method="post"
                        action=""
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="EHMaSemFBsZ8ppYPwaDy50UOFim6k57RDry3xaHX"
                        />
                      </form>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary text-nowrap border-0 my-1 ms-1"
                      >
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div
                  className="modal fade"
                  id="modal-324975"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="d-flex pt-3 pe-3 justify-content-end">
                        <button
                          type="button"
                          className="btn-close position-absolute"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="px-4 pb-4 pt-2">
                        <h1 className="h4 fw-light border-bottom pb-3 mb-3">
                          Booking Details
                        </h1>
                        <div>
                          <h2 className="h6 mb-4 pt-2 fw-bold">
                            15 Minute Meeting
                          </h2>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <img
                            className="d-inline-block me-2"
                            src="/img/icon-calendar.svg"
                          />
                          <div>
                            <small>August 23, 2022 at 02:15 PM</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <img
                            className="d-inline-block me-2"
                            src="/img/icon-clock.svg"
                          />
                          <div>
                            <small>15 minutes</small>
                          </div>
                        </div>
                        <div className="d-block w-100 py-2" />
                        <div className="mb-2">
                          <small>
                            <strong>With: </strong>Awais Ahmad
                          </small>
                        </div>
                        <div className="mb-2">
                          <small>
                            <strong>Email: </strong>
                            <a
                              className="text-decoration-none"
                              href="mailto:awaiskhalil404@gmail.com"
                            >
                              awaiskhalil404@gmail.com
                            </a>
                          </small>
                        </div>
                        <div className="mb-2">
                          <small>
                            <strong>Created: </strong> Aug 23, 2022 9:47 am
                          </small>
                        </div>
                        <div className="d-block w-100 mb-1 py-2" />
                        <div className="d-block w-100 mb-1 py-3" />
                        <div className="d-flex justify-content-between align-items-center">
                          <div></div>
                          <button
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="modal-324991"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="d-flex pt-3 pe-3 justify-content-end">
                        <button
                          type="button"
                          className="btn-close position-absolute"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="px-4 pb-4 pt-2">
                        <h1 className="h4 fw-light border-bottom pb-3 mb-3">
                          Booking Details
                        </h1>
                        <div>
                          <h2 className="h6 mb-4 pt-2 fw-bold">
                            15 Minute Meeting
                          </h2>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <img
                            className="d-inline-block me-2"
                            src="/img/icon-calendar.svg"
                          />
                          <div>
                            <small>August 24, 2022 at 02:30 PM</small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <img
                            className="d-inline-block me-2"
                            src="/img/icon-clock.svg"
                          />
                          <div>
                            <small>15 minutes</small>
                          </div>
                        </div>
                        <div className="d-block w-100 py-2" />
                        <div className="mb-2">
                          <small>
                            <strong>With: </strong>Awais Ahmad
                          </small>
                        </div>
                        <div className="mb-2">
                          <small>
                            <strong>Email: </strong>
                            <a
                              className="text-decoration-none"
                              href="mailto:awaiskhalil404@gmail.com"
                            >
                              awaiskhalil404@gmail.com
                            </a>
                          </small>
                        </div>
                        <div className="mb-2">
                          <small>
                            <strong>Created: </strong> Aug 23, 2022 10:07 am
                          </small>
                        </div>
                        <div className="d-block w-100 mb-1 py-2" />
                        <div className="d-block w-100 mb-1 py-3" />
                        <div className="d-flex justify-content-between align-items-center">
                          <div></div>
                          <button
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
        </div>
      </div>
    </>
  );
};
export default Booking;
