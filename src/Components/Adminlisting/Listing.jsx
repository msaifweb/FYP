import "./sidebar.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import logo from "./logo512.png";
import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size, u) {
  const density = population / size;
  return { name, code, population, size, density, u };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  //   createData("Italy", "IT", 60483973, 301340),
  //   createData("United States", "US", 327167434, 9833520),
  //   createData("Canada", "CA", 37602103, 9984670),
  //   createData("Australia", "AU", 25475400, 7692024),
  //   createData("Germany", "DE", 83019200, 357578),
  //   createData("Ireland", "IE", 4857000, 70273),
  //   createData("Mexico", "MX", 126577691, 1972550),
  //   createData("Japan", "JP", 126317000, 377973),
  //   createData("France", "FR", 67022000, 640679),
  //   createData("United Kingdom", "GB", 67545757, 242495),
  //   createData("Russia", "RU", 146793744, 17098246),
  //   createData("Nigeria", "NG", 200962417, 923768),
  //   createData("Brazil", "BR", 210147125, 8515767),
];

const Listing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* <Button variant="primary">Add Billboard</Button> */}
        </Modal.Footer>
      </Modal>

      <div className="row">
        <div className="col-12 col-md-2">
          <div className="row">
            <div className="sidebar-wrapper">
              <nav id="sidebar">
                <ul className="list-unstyled components">
                  <li>
                    <a href="#" className="sidebarHeader">
                      <i className="fas fa-tachometer-alt  " /> Dashboard
                    </a>
                  </li>
                  <li onClick={handleShowModal}>
                    <a href="#" className="sidebarHeader">
                      <i className="fas fa-tachometer-alt  " /> Profile
                    </a>
                  </li>

                  <li>
                    <a href="#" className="sidebarHeader">
                      <i className="fas fa-tachometer-alt  " /> Orders
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Dashboard</h1>

          <div className="row pr-4">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
