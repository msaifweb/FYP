import "./sidebar.css";

function Sidebar1() {
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
              {/* <Link to="/listing"> */}
              <li>
                <a href="#" className="sidebarHeader">
                  <i className="fas fa-tachometer-alt  " />
                  Orders
                </a>
              </li>
              {/* </Link> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar1;
