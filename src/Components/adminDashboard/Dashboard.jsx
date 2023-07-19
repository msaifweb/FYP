import React from 'react'
import "./dashboard.css";


const DashBoard=()=>{
    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-2">
            <div className="row">
              <div className="sidebar-wrapper">
                <nav id="sidebar">
                  <ul className="list-unstyled components">
                    <li>
                      <a href="#"  className="sidebarHeader">
                        <i className="fas fa-tachometer-alt  " /> Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#productSubmenu"
                        data-toggle="collapse"
                        aria-expanded="false"
                        className="dropdown-toggle"
                      >
                        <i className="fab fa-product-hunt" />
                        Products
                      </a>
                      <ul
                        className="collapse list-unstyled"
                        id="productSubmenu"
                      >
                        <li>
                          <a href="#">
                            <i className="fas fa-clipboard-list" />
                            All
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-plus" /> Create
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-basket" /> Orders
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-users" /> Users
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 mx-2">
            <h1 className="my-4 dasHeader">Dashboard</h1>
            <div className="row pr-4">
              <div className="col-xl-12 col-sm-12 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body1">
                    <div className="text-center card-font-size">
                      Total Amount
                      <br /> <b>PK4567</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pr-4">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body1">
                    <div className="text-center card-font-size">
                      BillBoards
                      <br /> <b>56</b>
                    </div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    to="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body1">
                    <div className="text-center card-font-size">
                      Bookings
                      <br /> <b>125</b>
                    </div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/orders"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                  <div className="card-body1">
                    <div className="text-center card-font-size">
                      Users
                      <br /> <b>45</b>
                    </div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body1">
                    <div className="text-center card-font-size">
                      Complete
                      <br /> <b>4</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DashBoard;
 