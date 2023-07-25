import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="row">
        <div className="sidebar-wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li>
                <a href="#" className="sidebarHeader">
                  <i className="fas fa-tachometer-alt  " /> Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="sidebarHeader">
                  <i className="fas fa-tachometer-alt  " /> Profile
                </a>
              </li>
              <Link to="/totalusers">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " />
                    Users
                  </a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
