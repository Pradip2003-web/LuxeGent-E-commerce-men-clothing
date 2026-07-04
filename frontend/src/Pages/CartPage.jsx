import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Image,
} from "react-bootstrap";

import {
  CartX,
  Dash,
  Plus,
  Trash3Fill,
  Truck,
  LockFill,
  ShieldCheck,
} from "react-bootstrap-icons";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      color: "Black",
      size: "M",
      price: 1999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      color: "Blue",
      size: "32",
      price: 2499,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = cartItems.length > 0 ? 99 : 0;
  const tax = cartItems.length > 0 ? 300 : 0;
  const total = subtotal + shipping + tax;

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="dark" className="px-3 py-2 mb-3">
            Shopping Cart
          </Badge>

          <h1 className="display-5 fw-bold">Your Cart</h1>

          <p className="text-muted">
            Review your items and proceed to checkout.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-5">
                    <CartX size={70} className="text-muted mb-3" />

                    <h3>Your Cart is Empty</h3>

                    <p className="text-muted">
                      Add some products to continue shopping.
                    </p>

                    <Button as={Link} to="/" variant="dark">
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={item.id}>
                      <Row className="align-items-center">
                        <Col md={7}>
                          <div className="d-flex align-items-center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              rounded
                              fluid
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                              }}
                            />

                            <div className="ms-3">
                              <h5 className="fw-bold mb-1">{item.name}</h5>

                              <p className="text-muted mb-1">
                                {item.color} • Size {item.size}
                              </p>

                              <h6 className="fw-bold">
                                ₹{item.price.toString()}
                              </h6>
                            </div>
                          </div>
                        </Col>

                        <Col md={3} className="mt-3 mt-md-0">
                          <div className="d-flex align-items-center justify-content-center">
                            <Button
                              variant="light"
                              onClick={() => decreaseQty(item.id)}
                            >
                              <Dash />
                            </Button>

                            <span className="mx-3 fw-bold">
                              {item.quantity}
                            </span>

                            <Button
                              variant="light"
                              onClick={() => increaseQty(item.id)}
                            >
                              <Plus />
                            </Button>
                          </div>
                        </Col>

                        <Col md={2} className="text-center mt-3 mt-md-0">
                          <Button
                            variant="link"
                            className="text-danger p-0"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash3Fill size={22} />
                          </Button>
                        </Col>
                      </Row>

                      {index !== cartItems.length - 1 && (
                        <hr className="my-4" />
                      )}
                    </div>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Order Summary</h4>

                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toString()}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Tax</span>
                  <span>₹{tax}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span>₹{total.toString()}</span>
                </div>

                <Card className="bg-light border-0 mt-4">
                  <Card.Body>
                    <Truck className="me-2" />

                    <span>Estimated Delivery</span>

                    <h6 className="mt-2 mb-0">3 - 5 Business Days</h6>
                  </Card.Body>
                </Card>

                <Link to="/checkout">
                  <Button variant="dark" className="w-100 py-3 mt-4">
                    <LockFill className="me-2" />
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-center mt-3">
                  <ShieldCheck className="text-success" />

                  <small className="ms-2">100% Secure Payment</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CartPage;
