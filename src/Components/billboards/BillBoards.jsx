import React, { useEffect, useState } from "react";
import "./billboards.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import billboard from "../images/billboard1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const products = [
  {
    id: 1,
    name: "Billboard 1",
    location: "DHA Phase VI",
    width: "Width: 15 inch",
    height: "Height: 15 inch",
    description: "Description of Product 1",
    price: 10.99,
    image: billboard,
  },
  {
    id: 2,
    name: "Billboard 2",
    location: "DHA Phase VI",
    width: "Width: 15 inch",
    height: "Height: 15 inch",
    description: "Description of Product 2",
    price: 19.99,
    image: billboard,
  },
  {
    id: 3,
    name: "Billboard 3",
    location: "DHA Phase VI",
    width: "Width: 15 inch",
    height: "Height: 15 inch",
    description: "Description of Product 3",
    price: 14.99,
    image: billboard,
  },
  {
    id: 4,
    name: "Billboard 3",
    location: "DHA Phase VI",
    width: "Width: 15 inch",
    height: "Height: 15 inch",
    description: "Description of Product 3",
    price: 14.99,
    image: billboard,
  },
  {
    id: 5,
    name: "Billboard 3",
    location: "DHA Phase VI",
    width: "Width: 15 inch",
    height: "Height: 15 inch",
    description: "Description of Product 3",
    price: 14.99,
    image: billboard,
  },
  {
    id: 6,
    name: "Billboard 3",
    location: "DHA Phase VI",
    width: "Width: 15 inch",
    height: "Height: 15 inch",
    description: "Description of Product 3",
    price: 14.99,
    image: billboard,
  },
];
const Product = () => {
  const [billBoard, setBillBoard] = useState();
  const loadData = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/getallbillboard"
    );
    console.log({ response });
    setBillBoard(response.data);
  };
  console.log({ billBoard });
  useEffect(() => {
    let jwt_token = localStorage.getItem("token") || null;
    axios.defaults.headers.common["x-auth-token"] = jwt_token;
    jwt_token && loadData();
  }, []);
  return (
    <>
      <div className=" productHeader ">
        <div className="col-12 text-center">
          <h1>Billboards</h1>
          <hr />
        </div>
      </div>
      <div className="mainContainer">
        {/* <h1 className="text-center">Billboards</h1> */}

        <Row className="product-card1">
          {billBoard &&
            billBoard.map((product) => (
              <Col key={product.id} md={3} className="mx-3">
                <Card className="productCard1">
                  <Card.Img
                    style={{ width: "100%", maxHeight: "200px" }}
                    variant="top"
                    className="productImage"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>{product.location}</Card.Title>
                    <Card.Text>{product.perDayRate}</Card.Text>
                    <Card.Text>Dimensions:</Card.Text>
                    <Card.Text>{product.size}</Card.Text>

                    {/* <Card.Text>{product.description}</Card.Text>

                    <Card.Text>Price: ${product.price}</Card.Text> */}
                    <Link to="/Details">
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default Product;
