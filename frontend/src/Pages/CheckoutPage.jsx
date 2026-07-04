import axios from "axios";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ProgressBar,
} from "react-bootstrap";

import {
  CartCheckFill,
  GeoAltFill,
  CreditCardFill,
  CheckCircleFill,
  Truck,
  ShieldLockFill,
  LockFill,
  InfoCircle,
} from "react-bootstrap-icons";

const CheckoutPage = () => {
  const [shippingCost, setShippingCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [activeStep, setActiveStep] = useState(3);

  const subtotal = 4999;
  const tax = 499;
  const total = subtotal + tax + shippingCost;

  const data = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    upiId: "",
  };
  const [formData, setFormData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const order = {
      customer: formData,
      paymentMethod,
      shippingCost,
      subtotal,
      tax,
      total,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/checkout", order);

      if (res.data.success) {
        setActiveStep(4);
        alert("Order placed successfully!");
      } else {
        alert("Order failed");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  const formdata = {data};

  return (
    <section className="py-5">
      <Container>
        <div className="mb-5">
          <ProgressBar
            now={
              activeStep === 1
                ? 0
                : activeStep === 2
                  ? 33
                  : activeStep === 3
                    ? 66
                    : 100
            }
            variant="dark"
            className="mb-4"
            style={{ height: "8px" }}
          />

          <Row className="text-center">
            <Col>
              <CartCheckFill size={30} />
              <p className="mt-2">Cart</p>
            </Col>

            <Col>
              <GeoAltFill size={30} />
              <p className="mt-2">Shipping</p>
            </Col>

            <Col>
              <CreditCardFill size={30} />
              <p className="mt-2">Payment</p>
            </Col>

            <Col>
              <CheckCircleFill size={30} />
              <p className="mt-2">Complete</p>
            </Col>
          </Row>
        </div>

        <Form onSubmit={handlePlaceOrder}>
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border-0 shadow-sm rounded-4 mb-4">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">
                    <GeoAltFill className="me-2" />
                    Shipping Address
                  </h4>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          name="zipCode"
                          placeholder="ZIP Code"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-4 mb-4">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">
                    <Truck className="me-2" />
                    Delivery Options
                  </h4>

                  <Form.Check
                    type="radio"
                    label="Standard Delivery (3-5 Business Days) - Free"
                    checked={shippingCost === 0}
                    onChange={() => setShippingCost(0)}
                    className="mb-3"
                  />

                  <Form.Check
                    type="radio"
                    label="Express Delivery (1-2 Business Days) - ₹299"
                    checked={shippingCost === 299}
                    onChange={() => setShippingCost(299)}
                  />
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">
                    <CreditCardFill className="me-2" />
                    Payment Method
                  </h4>

                  <Form.Check
                    type="radio"
                    label="Credit / Debit Card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mb-3"
                  />

                  {paymentMethod === "card" && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Control
                          placeholder="Card Number"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control
                              placeholder="MM/YY"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control
                              placeholder="CVC"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </>
                  )}

                  <Form.Check
                    type="radio"
                    label="UPI Payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="mb-3"
                  />

                  {paymentMethod === "upi" && (
                    <Form.Group className="mb-3">
                      <Form.Control
                        placeholder="username@upi"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  )}

                  <Form.Check
                    type="radio"
                    label="Cash on Delivery"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />

                  {paymentMethod === "cod" && (
                    <div className="alert alert-danger mt-3">
                      <InfoCircle className="me-2" />
                      Please keep exact cash ready for delivery.
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow-sm rounded-4 sticky-top">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">Order Summary</h4>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>
                    <strong>₹{subtotal.toString()}</strong>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping</span>
                    <strong>
                      {shippingCost === 0 ? "Free" : `₹${shippingCost}`}
                    </strong>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>GST</span>
                    <strong>₹{tax}</strong>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between fs-4 fw-bold mb-4">
                    <span>Total</span>
                    <span>₹{total.toString()}</span>
                  </div>

                  <Button type="submit" variant="dark" className="w-100 py-3">
                    <ShieldLockFill className="me-2" />
                    Place Order Securely
                  </Button>

                  <p className="small text-center text-muted mt-3">
                    <LockFill className="text-success me-1" />
                    100% Secure Checkout
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default CheckoutPage;
