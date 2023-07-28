import "./administrator.css";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";

import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { TablePagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Sidebar from "./sidebar/Sidebar";
const theme = createTheme();
// import Typography from "@mui/material/Typography";

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
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchData();
  }, []);
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

  // const handleUpdate = async (item, updatedData) => {
  //   try {
  //     let jwt_token = localStorage.getItem("token") || null;
  //     axios.defaults.headers.common["x-auth-token"] = jwt_token;
  //     console.log(jwt_token);
  //     console.log(item._id);
  //     // const response = await
  //     // axios.put(`http://localhost:4000/api/updateuser/${item._id}`);
  //     axios.put("http://localhost:4000/api/updateuser/", {
  //       id: item.id,
  //     });
  //     // const updatedList = data.map((item) =>
  //     //   item._id === id ? response.data : item
  //     // );
  //     // setData(updatedList);
  //     // fetchData();
  //   } catch (error) {
  //     setError("An error occurred while updating data.");
  //   }
  // };
  // const handleClickOpen = (item) => {
  //   setEditData(item);

  //   setOpen(true);
  // };

  // const handleClickOpen = () => {
  //   setOpenDialog(true);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     role: "",
  //   });
  // };

  const handleEditUser = (item) => {
    // setOpenDialog(true);
    setOpen(true);
    setEditData({
      name: item.name,
      email: item.email,
      phone: item.phone,
      role: item.role,
    });
    console.log(item);
  };

  const handleUpdate = async (item) => {
    let jwt_token = localStorage.getItem("token") || null;
    axios.defaults.headers.common["x-auth-token"] = jwt_token;
    console.log(jwt_token);
    console.log(item._id);
    try {
      await axios
        .put(`http://localhost:4000/api/updateuser/${item._id}`, editData)
        .then((res) => {
          fetchData();
          console.log(res);
        });

      // fetchData();

      // console.log(setEditData);
      // // });
      // console.log(item.id);
      // // );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          <h1 className="my-4 dasHeader">Dashboard {data.length}</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableBody>
                {data.slice(startIndex, endIndex).map((item, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell align="left">{item._id}</StyledTableCell>
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
                        <Button
                        // onClick={() => handleDelete(item._id)}
                        >
                          Delete
                          <DeleteIcon />
                        </Button>
                        &nbsp; &nbsp;
                        {/******************  Update Dialog Start  **************************/}
                        <Button
                          // onClick={() => handleClickOpen(item)}
                          onClick={() => handleEditUser(item)}
                          // onClick={handleShowModal}
                        >
                          Edit
                          <EditIcon />
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Update Profile</DialogTitle>
                          <DialogContent>
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
                                          id="userName"
                                          label="name"
                                          name="Name"
                                          // value={updateData.name}
                                          // onChange={handleChange}
                                          value={editData.name}
                                          onChange={(e) =>
                                            setEditData({
                                              ...editData,
                                              name: e.target.value,
                                            })
                                          }
                                          // autoComplete="email"
                                        />
                                      </Grid>
                                      <Grid item xs={12}>
                                        <TextField
                                          required
                                          fullWidth
                                          name="phone"
                                          label="Phone"
                                          value={editData.phone}
                                          onChange={(e) =>
                                            setEditData({
                                              ...editData,
                                              phone: e.target.value,
                                            })
                                          }
                                          // type=""
                                          // value={updateData.phone}
                                          // onChange={handleChange}
                                        />
                                      </Grid>
                                      <Grid item xs={12}>
                                        <TextField
                                          required
                                          fullWidth
                                          name="phone"
                                          label="Phone"
                                          value={editData.email}
                                          onChange={(e) =>
                                            setEditData({
                                              ...editData,
                                              email: e.target.value,
                                            })
                                          }
                                          // type=""
                                          // value={updateData.phone}
                                          // onChange={handleChange}
                                        />
                                      </Grid>

                                      <Grid item xs={12}>
                                        <TextField
                                          required
                                          fullWidth
                                          name="phone"
                                          label="Phone"
                                          value={editData.role}
                                          onChange={(e) =>
                                            setEditData({
                                              ...editData,
                                              role: e.target.value,
                                            })
                                          }
                                          // type=""
                                          // value={updateData.phone}
                                          // onChange={handleChange}
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
                                      // type="submit"
                                      fullWidth
                                      variant="contained"
                                      sx={{ mt: 3, mb: 2 }}
                                      onClick={() => {
                                        handleUpdate(item, editData);
                                      }}
                                    >
                                      Update{" "}
                                    </Button>
                                  </Box>
                                </Box>
                              </Container>
                            </ThemeProvider>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            {/* <Button onClick={handleClose}>Subscribe</Button> */}
                          </DialogActions>
                        </Dialog>
                      </StyledTableCell>

                      {/* <button onClick={handleShowModal}>Details</button> */}
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>

            <>
              {/* <Button variant="outlined" onClick={handleClickOpen}>
                  // Open form dialog //{" "}
                </Button> */}
            </>

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
