import "./administratorListing.css";
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
import { TablePagination } from "@mui/material";
import Adminsidebar from "../sidebar/Sidebar";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../../utils";

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

const AdministratorListing = () => {
  const jwt_token = localStorage.getItem("token") || null;
  const [listing, setListing] = useState([]);
  const [location, setLocation] = useState();
  const loadData = async () => {
    try {
      axios.defaults.headers.common["x-auth-token"] = jwt_token;

      const response = await axios.post(
        "http://localhost:4000/api/getallbillboard",
        { location }
      );
      console.log({ first: response.data });
      setListing(response.data);
    } catch (error) {
      toast.error(error.message, toastSetting);
    }
  };
  useEffect(() => {
    loadData();
  }, [location]);

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
          <h1 className="my-4 dasHeader">Billboards</h1>
          <input
            type="text"
            placeholder="Search location"
            style={{
              height: "45px",
              backgroundColor: "white",
              border: "2px solid black",
              padding: "10px 5px",
              marginBottom: "10px",
              borderRadius: "5px",
              width: "100%",
            }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Admin
                  </StyledTableCell>

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
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {listing.slice(startIndex, endIndex).map((item, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {item.user.name}
                      </StyledTableCell>

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
                        <img
                          src={item.image}
                          alt={item.location}
                          width={150}
                          height={100}
                        />
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

export default AdministratorListing;
