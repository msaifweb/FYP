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
import Usersidebar from "../sidebar/Usersidebar";
import { format, parseISO } from "date-fns";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../../utils";
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

const Reserve = () => {
  const jwt_token = localStorage.getItem("token") || null;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common["x-auth-token"] = jwt_token;
        const response = await axios.get(
          "http://localhost:4000/api/getallreservation"
        );
        const { id } = jwtDecode(jwt_token);
        const newData =
          response.data.length > 0
            ? response.data.filter(
                (reservation) => reservation?.user?._id === id
              )
            : [];
        setData(newData);
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

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Usersidebar />
        </div>

        <div className="col-12 col-md-9 mx-2">
          <h1 className="my-4 dasHeader">Reservation</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    Billboard Location
                  </StyledTableCell>
                  <StyledTableCell>Size</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    Date From
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    Date To
                  </StyledTableCell>
                  <StyledTableCell> Tracking Id</StyledTableCell>
                  <StyledTableCell> Total Bill</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.slice(startIndex, endIndex).map((item, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell align="center">
                        <img
                          src={item.billBoard.image}
                          alt={item.billBoard.location}
                          width={150}
                          height={100}
                        />
                      </StyledTableCell>

                      <StyledTableCell component="th" scope="row">
                        {item.billBoard.location}
                      </StyledTableCell>
                      <StyledTableCell> {item.billBoard.size} </StyledTableCell>
                      <StyledTableCell>
                        {format(parseISO(item.startDate), "dd MMM yyyy")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {format(parseISO(item.endDate), "dd MMM yyyy")}
                      </StyledTableCell>

                      <StyledTableCell> {item.trackingId} </StyledTableCell>
                      <StyledTableCell> {item.rate} </StyledTableCell>
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
        </div>
      </div>
    </>
  );
};

export default Reserve;
