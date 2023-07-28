import "./administrator.css";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Container, TableHead } from "@mui/material";
import { TablePagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "./sidebar/Sidebar";
const theme = createTheme();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Totalusers = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState([]);

  const fetchData = async () => {
    try {
      let jwt_token = localStorage.getItem("token") || null;
      axios.defaults.headers.common["x-auth-token"] = jwt_token;
      console.log(jwt_token);

      const response = await axios.get("http://localhost:4000/api/getallusers");
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/api/updateuser", updateData)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error updating user:", error.response.data);
      });
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setShowModal(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowModal = (item) => {
    setUpdateData(item);
    console.log(item._id);

    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  {
    /******************  Pagination States   **************************/
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Calculate the start and end index of the data to be displayed based on the current page and rows per page
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  {
    /******************  Pagination States  **************************/
  }
  const status = ["Approved", "DisApproved"];
  const role = ["Admin", "User", "Administrator"];

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Users</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Name
                  </StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    Phone
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    Statue
                  </StyledTableCell>
                  <StyledTableCell>Role</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.slice(startIndex, endIndex).map((item, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell>{item.email}</StyledTableCell>
                      <StyledTableCell>{item.phone}</StyledTableCell>
                      <StyledTableCell>{item.status}</StyledTableCell>
                      <StyledTableCell>{item.role}</StyledTableCell>
                      <StyledTableCell>
                        <Button
                          onClick={() => {
                            handleShowModal(item);
                          }}
                        >
                          Edit
                          <EditIcon />
                        </Button>
                      </StyledTableCell>

                      <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {/* Content of the modal */}
                          {/* Add your form fields or any other content here */}
                          <ThemeProvider theme={theme}>
                            <Container component="main" maxWidth="xs">
                              <CssBaseline />
                              <Box
                                sx={{
                                  marginTop: 0,
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  component="form"
                                  noValidate
                                  onSubmit={handleSubmit}
                                  sx={{ mt: 3 }}
                                >
                                  <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                      <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        value={updateData.name}
                                        onChange={handleChange}
                                      />
                                    </Grid>

                                    <Grid item xs={12}>
                                      <TextField
                                        disabled
                                        required
                                        fullWidth
                                        name="email"
                                        label="Email"
                                        value={updateData.email}
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <TextField
                                        required
                                        fullWidth
                                        name="phone"
                                        label="Phone"
                                        value={updateData.phone}
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <select
                                        id="status"
                                        className="form-control"
                                        name="status"
                                        value={updateData.status}
                                        onChange={handleChange}
                                        placeholder="Status"
                                        required
                                      >
                                        {status.map((option, index) => {
                                          return (
                                            <option key={index}>
                                              {option}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <select
                                        disabled
                                        id="role"
                                        className="form-control"
                                        name="role"
                                        value={updateData.role}
                                        onChange={handleChange}
                                        placeholder="Role"
                                        required
                                      >
                                        {role.map((option, index) => {
                                          return (
                                            <option key={index}>
                                              {option}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </Grid>
                                  </Grid>
                                  <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                  >
                                    Update{" "}
                                  </Button>
                                </Box>
                              </Box>
                            </Container>
                          </ThemeProvider>
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
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/******************  Pagination Start  **************************/}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
          {/******************  Pagination End  **************************/}
        </div>
      </div>
    </>
  );
};

export default Totalusers;
