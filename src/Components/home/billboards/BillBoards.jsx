import React, { useEffect, useState } from "react";
import "./billboards.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = ({ destination }) => {
  const [billBoard, setBillBoard] = useState([]);

  const loadData = async () => {
    const response = await axios.post(
      "http://localhost:4000/getallpublicbillboard",
      { location: destination }
    );
    setBillBoard(response.data);
  };
  useEffect(() => {
    loadData();
  }, [destination]);
  return (
    <>
      <div className=" productHeader ">
        <div className="col-12 text-center">
          <h1>Billboards</h1>
          <hr />
        </div>
      </div>
      <div className="mainContainer">
        <h1 className="text-center">Billboards</h1>

        <Row className="product-card1">
          {billBoard &&
            billBoard.length > 0 &&
            billBoard.map((product) => (
              <Col key={product._id} md={3} className="mx-3">
                <Card className="productCard1">
                  <Card.Img
                    style={{ width: "100%", maxHeight: "200px" }}
                    variant="top"
                    className="productImage"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.location}</Card.Text>
                    <Card.Text>Dimensions: {product.size}</Card.Text>
                    <Card.Text>Price: {product.perDayRate} PKR</Card.Text>
                    <Link to="/details" state={{ product }}>
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
