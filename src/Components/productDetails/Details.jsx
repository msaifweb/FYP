import React from "react";
import "./detail.css";
import billboard from "../images/billboard1.jpg";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="row f-flex justify-content-around ">
        <div className="col-12 col-lg-5 detailImage" id="product_image">
          <img src={billboard} alt="sdf" height={450} width={500} />
        </div>
        <div className="col-12 col-lg-5 mt-5">
          <h3>Full Size billboard with LED Lights</h3>
          <hr />
          <div>
            <h3>Location:</h3>
            <h6>DHA Phase VI</h6>
          </div>
          <hr />
          <div>
            <h3>Dimsensions:</h3>
            <h6>Width : 50 Feet </h6>
            <h6> Height: 50 Feet</h6>
            {/* <p>Width: 50Inches</p>
              <p>Height: 50Inches</p> */}
          </div>
          <hr />
          <div>
            <h6 id="product_price">
              <span>Price: </span>$108.00
            </h6>
          </div>
          <hr />
          <h4 className="mt-2 description">Description:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            commodi molestias minus quae repellendus, saepe, voluptate debitis
            ab unde suscipit dignissimos tempore, cupiditate assumenda. Minus
            illo architecto perferendis tempore cumque dignissimos amet ad
            itaque, id sapiente maxime quo iste saepe sunt quasi accusantium
            earum suscipit veritatis fuga quas quidem. Rerum nulla, ex tenetur
            explicabo, ratione eius laborum optio nisi excepturi vel rem
            assumenda ad! Cupiditate possimus eaque alias quos velit culpa ex
            exercitationem officia repellat autem. Asperiores fugiat vero
            consequatur tenetur eaque assumenda aperiam quisquam, harum magnam
            consectetur. Fugit dolores quam esse porro quae cumque accusamus
            corporis praesentium est quasi!
          </p>
          <Link to="/reserve">
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
