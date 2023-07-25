import "./adminsidebar.css";
import { Link } from "react-router-dom";

function Adminsidebar() {
  return (
    <>
      <div className="row">
        <div className="sidebar-wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <Link to="/admin">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " /> Dashboard
                  </a>
                </li>
              </Link>
              <li>
                <a href="#" className="sidebarHeader">
                  <i className="fas fa-tachometer-alt  " /> Profile
                </a>
              </li>
              {/* <Link to="/listing"> */}
              <Link to="/addproduct">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " />
                    Add Product
                  </a>
                </li>
              </Link>
              <Link to="/listing">
                <li>
                  <a href="#" className="sidebarHeader">
                    <i className="fas fa-tachometer-alt  " />
                    Products
                  </a>
                </li>
              </Link>
              {/* </Link> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Adminsidebar;
