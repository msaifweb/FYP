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
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { TablePagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Sidebar from "./sidebar/Sidebar";
import { jwt_token } from "../utils";
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Totalusers = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common["x-auth-token"] = jwt_token;

        const response = await axios.get(
          "http://localhost:4000/api/getallusers"
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const handleShowModal = (item) => {
    setUpdateData(item);

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/updateuser`)
      .then(() => {
        // setEditingUser(null);
        // getUsers();
      })
      .catch((error) => {
        console.error("Error updating user:", error.response.data);
      });
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

  // const [tableData, setTableData] = useState([2]);
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

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Dashboard</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableBody>
                {data.slice(startIndex, endIndex).map((item, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell align="left">{item.id}</StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.phone}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.status}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.role}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button>
                          Delete
                          <DeleteIcon />
                        </Button>
                        &nbsp; &nbsp;
                        {/******************  Update Dialog Start  **************************/}
                        <Button
                          onClick={() => handleShowModal(item.id)}
                          // onClick={handleShowModal}
                        >
                          Edit
                          <EditIcon />
                        </Button>
                      </StyledTableCell>

                      {/* <button onClick={handleShowModal}>Details</button> */}

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
                                {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography> */}
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

                                        // autoComplete="email"
                                      />
                                    </Grid>

                                    <Grid item xs={12}>
                                      <TextField
                                        required
                                        fullWidth
                                        name="phone"
                                        label="Phone"
                                        // type=""
                                        value={updateData.phone}
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
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
