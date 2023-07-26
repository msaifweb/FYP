import "./listing.css";
import React, { useState, useEffect } from "react";

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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { TablePagination } from "@mui/material";
import Adminsidebar from "../sidebar/Adminsidebar";

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

const Listing = () => {
  const [showModal, setShowModal] = useState(false);

  const [listing, setListing] = useState([]);
  const [error, setError] = useState(null);
  console.log(listing);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/getallbillboard")
  //     .then((response) => {
  //       setListing(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jwt_token = localStorage.getItem("token") || null;
        axios.defaults.headers.common["x-auth-token"] = jwt_token;
        console.log(jwt_token);

        const response = await axios.get(
          "http://localhost:4000/api/getallbillboard"
        );

        setListing(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <Adminsidebar />
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Dashboard</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Location
                  </StyledTableCell>
                  <StyledTableCell align="right"> Size </StyledTableCell>
                  <StyledTableCell align="right">Rate</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Image</StyledTableCell>

                  <StyledTableCell align="right">Actions</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {listing.slice(startIndex, endIndex).map((item, i) => {
                  console.log({ item });
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {item.location}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.size}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.perDayRate}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.status}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <img src={item.image} alt={item.location} width={150} />
                      </StyledTableCell>

                      <StyledTableCell align="right">
                        {" "}
                        <Button>
                          {" "}
                          Delete
                          <DeleteIcon />
                        </Button>{" "}
                        &nbsp; &nbsp;
                        {/******************  Update Dialog Start  **************************/}
                        <Button>
                          Edit
                          <EditIcon />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/******************  Pagination Start  **************************/}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={listing.length}
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

export default Listing;
