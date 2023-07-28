import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from "react-router-dom";
const Header = ({ type, destination, setDestination }) => {
  return (
    <>
      <div className="navbar ">
        <span className="logo">Ultra Sign Solutions</span>
        <ul className="navItems">
          <Link to="/usersignin">
            <button className="navButton btn btn-primary m-2 ">Sign In</button>
          </Link>
          <Link to="/usersignup">
            <button className="navButton btn btn-primary m-2">Register</button>
          </Link>
        </ul>
      </div>

      <div className="header mb-5">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Ultra sign solutions, is perfect solutions for your advertisment{" "}
              </p>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="headerIcon"
                  />
                  <input
                    type="text"
                    placeholder="Advertising Location"
                    className="headerSearchInput"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
