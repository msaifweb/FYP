// import "./administrator.css";
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

const Reserves = () => {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // console.log(data);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/getallusers")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  //   let jwt_token = localStorage.getItem("token") || null;
  //   axios.defaults.headers.common["x-auth-token"] = jwt_token;
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let jwt_token = localStorage.getItem("token") || null;
        axios.defaults.headers.common["x-auth-token"] = jwt_token;
        console.log(jwt_token);

        const response = await axios.get(
          "http://localhost:4000/api/getallusers"
        );

        setData(response.data);
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
              <TableBody>
                {data.slice(startIndex, endIndex).map((item, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell align="left">
                        {" "}
                        {item.id}{" "}
                      </StyledTableCell>

                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.email}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.phone}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.status}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {item.role}{" "}
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

export default Reserves;
