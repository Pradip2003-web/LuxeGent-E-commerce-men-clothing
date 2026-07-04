import { useState } from "react";
import { Modal, Button, Badge, Row, Col, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function QuickViewModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  const [selectedColor, setSelectedColor] = useState(product?.color || "");

  if (!product) return null;

  return (
    <Modal show={!!product} onHide={onClose} centered size="xl">
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Quick View</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Row className="g-4">
          <Col lg={6}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              rounded
              className="w-100"
            />
          </Col>

          <Col lg={6}>
            <small className="text-muted">{product.brand}</small>

            <h2 className="fw-bold mt-2">{product.name}</h2>

            <div className="text-warning mb-3">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            <Stack direction="horizontal" gap={2} className="mb-3">
              {product.isNew && <Badge bg="dark">NEW</Badge>}

              {product.sale && <Badge bg="danger">SALE</Badge>}

              {product.bestSeller && (
                <Badge bg="warning" text="dark">
                  BEST SELLER
                </Badge>
              )}
            </Stack>

            <div className="d-flex align-items-center gap-3 mb-3">
              <h3 className="fw-bold mb-0">₹{product.price}</h3>

              {product.oldPrice && (
                <span className="text-muted text-decoration-line-through">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-secondary">
              {product.description ||
                "Premium quality menswear crafted with comfort and timeless style in mind."}
            </p>

            <div className="mb-4">
              <h6>Color</h6>

              <Stack direction="horizontal" gap={2}>
                {[product.color].map((color) => (
                  <Button
                    key={color}
                    size="sm"
                    variant={selectedColor === color ? "dark" : "outline-dark"}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </Stack>
            </div>

            <div className="mb-4">
              <h6>Size</h6>

              <Stack direction="horizontal" gap={2} className="flex-wrap">
                {product.sizes?.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "dark" : "outline-dark"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </Stack>
            </div>

            <div className="mb-4">
              <h6>Quantity</h6>

              <Stack direction="horizontal" gap={2}>
                <Button
                  variant="outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>

                <span className="px-3 fw-bold">{quantity}</span>

                <Button
                  variant="outline-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </Stack>
            </div>

            <div className="d-grid gap-3">
              <Button
                as={Link}
                to="/cart"
                variant="dark"
                size="lg"
                className="rounded-pill"
              >
                Add to Cart
              </Button>

              <Button
                as={Link}
                to="/checkout"
                variant="outline-dark"
                size="lg"
                className="rounded-pill"
              >
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default QuickViewModal;
