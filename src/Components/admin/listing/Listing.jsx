import "./listing.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TablePagination } from "@mui/material";
import Adminsidebar from "../sidebar/Adminsidebar";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../../utils";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

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
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jwt_token = localStorage.getItem("token") || null;
        axios.defaults.headers.common["x-auth-token"] = jwt_token;

        const response = await axios.get(
          "http://localhost:4000/api/getallbillboard"
        );

        const { id } = jwtDecode(jwt_token);
        console.log({ first: response.data });
        const newData =
          response.data.length > 0
            ? response.data.filter((reservation) => reservation?.user === id)
            : [];

        setListing(newData);
      } catch (error) {
        toast.error(error.message, toastSetting);
      }
    };

    fetchData();
  }, []);

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
                    Name
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    Description
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    Location
                  </StyledTableCell>
                  <StyledTableCell> Size </StyledTableCell>
                  <StyledTableCell>Rate</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Image</StyledTableCell>

                  <StyledTableCell>Actions</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {listing.slice(startIndex, endIndex).map((item, i) => {
                  console.log({ item });
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.description}
                      </StyledTableCell>

                      <StyledTableCell component="th" scope="row">
                        {item.location}
                      </StyledTableCell>
                      <StyledTableCell> {item.size} </StyledTableCell>
                      <StyledTableCell> {item.perDayRate} </StyledTableCell>
                      <StyledTableCell> {item.status} </StyledTableCell>
                      <StyledTableCell>
                        <img src={item.image} alt={item.location} width={150} />
                      </StyledTableCell>

                      <StyledTableCell>
                        {/* {" "}
                        <Button>
                          {" "}
                          Delete
                          <DeleteIcon />
                        </Button>{" "}
                        &nbsp; &nbsp; */}
                        <Link to="/addproduct" state={{ item }}>
                          <Button variant="primary">
                            Edit
                            <EditIcon />
                          </Button>
                        </Link>
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
