import React from "react";
import "./detail.css";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const product = location?.state?.product;
  return (
    <div>
      <div className="row f-flex justify-content-around ">
        <div className="col-12 col-lg-5 detailImage" id="product_image">
          <img src={product.image} alt="sdf" height={450} width={500} />
        </div>
        <div className="col-12 col-lg-5 mt-5">
          <h3>{product.name}</h3>
          <hr />
          <div>
            <h3>Location:</h3>
            <h6>{product.location}</h6>
          </div>
          <hr />
          <div>
            <h3>Dimsensions:</h3>
            <h6>{product.size} Feet </h6>
          </div>
          <hr />
          <div>
            <h6 id="product_price">
              <span>Price: </span>
              {product.perDayRate}
            </h6>
          </div>
          <hr />
          <h4 className="mt-2 description">Description:</h4>
          <p>{product.description}</p>
          <Link to="/billBoardListing">
            <button
              type="button"
              id="cart_btn"
              className="btn btn-primary d-inline ml-4"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
