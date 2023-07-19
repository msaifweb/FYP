import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import './searchbar.css'

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Pass the search criteria to the parent component or perform any desired action
    onSearch(location, startDate);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="d-flex align-items-center form-1">
        <div className="input-group">
          <span className="input-group-text">
            Search Location
            <BiSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text ">
            Starting Date
            {/* <BiCalendar /> */}
          </span>
          <input
            type="date"
            className="form-control"
            placeholder="Booking Start Date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
