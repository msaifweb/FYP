import React from "react";
import "./billboards.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import billboard from "../images/billboard1.jpg";
import { Link } from "react-router-dom";

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
          {products.map((product) => (
            <Col key={product.id} md={3} className="mx-3">
              <Card className="productCard1">
                <Card.Img
                  variant="top"
                  className="productImage"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.location}</Card.Text>
                  <Card.Text>Dimensions:</Card.Text>
                  <Card.Text>{` ${product.width} ${product.height}`}</Card.Text>

                  <Card.Text>{product.description}</Card.Text>

                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Link to="/Details">
                    <Button variant="primary">Book Now</Button>
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
