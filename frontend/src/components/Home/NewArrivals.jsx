import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
} from "react-bootstrap";

import tshirtsImg from "../../assets/images/tshirt-1.jpg";
import shirtsImg from "../../assets/images/shirt-1.webp";
import jeansImg from "../../assets/images/jeans-1.webp";
import jacketsImg from "../../assets/images/jacket-1.webp";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      title: "Denim Jeans",
      category: "Jeans",
      price: "₹1000.00",
      image: jeansImg,
      description:
        "Premium stretch denim jeans designed for comfort and durability.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black"],
    },
    {
      id: 2,
      title: "Classic T-shirt",
      category: "T-Shirt",
      price: "₹700.00",
      image: tshirtsImg,
      description: "Soft cotton T-shirt perfect for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Grey"],
    },
    {
      id: 3,
      title: "Premium Shirt",
      category: "Shirt",
      price: "₹600.00",
      image: shirtsImg,
      description:
        "Stylish premium shirt suitable for formal and casual looks.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "White"],
    },
    {
      id: 4,
      title: "Classic Jacket",
      category: "Jacket",
      price: "₹1500.00",
      image: jacketsImg,
      description: "Warm and stylish jacket for winter collection.",
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Brown"],
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase text-secondary fw-semibold">
            Latest Collection
          </span>
          <h2 className="display-5 fw-bold mt-2">New Arrivals</h2>
        </div>

        <Row className="g-4">
          {products.map((product) => (
            <Col lg={3} md={6} sm={6} xs={12} key={product.id}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <div className="position-relative">
                  <Card.Img
                    src={product.image}
                    alt={product.title}
                    style={{ height: "350px", objectFit: "cover" }}
                  />

                  <Badge
                    bg="dark"
                    className="position-absolute top-0 start-0 m-3"
                  >
                    {product.category}
                  </Badge>
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.title}</Card.Title>

                  <Card.Text className="fw-semibold fs-5">
                    {product.price}
                  </Card.Text>

                  <Button
                    variant="outline-dark"
                    className="w-100 rounded-pill"
                    onClick={() => handleQuickView(product)}
                  >
                    <i className="bi bi-eye me-2"></i>
                    Quick View
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} centered size="lg">
          {selectedProduct && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProduct.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Row>
                  <Col md={6}>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="img-fluid rounded"
                    />
                  </Col>

                  <Col md={6}>
                    <Badge bg="dark" className="mb-2">
                      {selectedProduct.category}
                    </Badge>

                    <h3>{selectedProduct.title}</h3>

                    <h4 className="text-success mb-3">
                      {selectedProduct.price}
                    </h4>

                    <p>{selectedProduct.description}</p>

                    <h6>Sizes</h6>
                    <div className="mb-3">
                      {selectedProduct.sizes.map((size) => (
                        <Badge key={size} bg="secondary" className="me-2">
                          {size}
                        </Badge>
                      ))}
                    </div>

                    <h6>Colors</h6>
                    <div className="mb-3">
                      {selectedProduct.colors.map((color) => (
                        <Badge
                          key={color}
                          bg="light"
                          text="dark"
                          className="me-2 border"
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      as={Link}
                      to="/cart"
                      variant="dark"
                      className="w-100"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Modal.Body>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default NewArrivals;
