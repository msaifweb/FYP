import { Modal, Button } from "react-bootstrap";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { DateRange } from "react-date-range";
import { useState, useRef, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, parseISO, differenceInDays } from "date-fns";
import axios from "axios";
import { toast } from "react-hot-toast";
import { toastSetting } from "../../../utils";
import jwtDecode from "jwt-decode";
import jc from "../../images/jazz-cash.png";

const ReservationModal = ({
  showModal,
  billBoard,
  handleCloseModal,
  handleReload,
}) => {
  const jwt_token = localStorage.getItem("token") || null;
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [dateCount, setDateCount] = useState(0);
  const [trackingId, setTrackingId] = useState("");

  const countDates = () => {
    const start = parseISO(date[0].startDate.toISOString());
    const end = parseISO(date[0].endDate.toISOString());
    const days = differenceInDays(end, start) + 1;
    setDateCount(days);
  };

  useEffect(() => {
    countDates();
  }, [date]);

  const dateWrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dateWrapperRef.current &&
      !dateWrapperRef.current.contains(event.target)
    ) {
      setOpenDate(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleReserve = async () => {
    axios.defaults.headers.common["x-auth-token"] = jwt_token;
    const { id } = jwtDecode(jwt_token);

    const reservationData = {
      startDate: date[0].startDate,
      endDate: date[0].endDate,
      rate: billBoard.perDayRate,
      userId: id,
      billboardId: billBoard._id,
      trackingId,
    };
    if (trackingId) {
      try {
        await axios.post(
          "http://localhost:4000/api/reservation",
          reservationData
        );
        toast.success("Reserved successfully", toastSetting);
        handleCloseModal();
        handleReload();
      } catch (error) {
        toast.error(error.message, toastSetting);
      }
    } else {
      toast.error("Tracking Id is requried", toastSetting);
    }
  };
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title> Reserve Bill Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ borderColor: "1px solid red" }}>
          <div>
            <img
              src={billBoard?.image}
              alt={billBoard?.location}
              height={300}
              width="100%"
            />
          </div>
          <div>Name: {billBoard?.name}</div>
          <div>Size: {billBoard?.size} </div>
          <div>Rate per day: {billBoard?.perDayRate} </div>
          <div>Location: {billBoard?.location}</div>

          <div className="headerSearchItem" ref={dateWrapperRef}>
            Reserve Dates:
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          {dateCount && (
            <div>Total bill: {dateCount * billBoard?.perDayRate} PKR</div>
          )}
        </div>
        <div>
          <img src={jc} width="60px" />: 03334943495
        </div>
        <div style={{ paddingTop: "5px" }}>
          Tracking Id:{" "}
          <input
            type="text"
            placeholder="Tracking Id"
            className="headertrackingId"
            value={trackingId}
            required
            onChange={(e) => setTrackingId(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleReserve}>
          Reserve Billboard
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReservationModal;
