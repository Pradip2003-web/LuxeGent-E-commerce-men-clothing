import { Container, Row, Col, Card, Stack } from 'react-bootstrap';

import {
  Truck,
  ArrowRepeat,
  ShieldCheck,
  BoxSeam,
  CheckCircleFill,
} from 'react-bootstrap-icons';

function DeliveryInfo() {
  const deliveryFeatures = [
    {
      id: 1,
      icon: <Truck size={28} />,
      title: 'Free Shipping',
      description: 'Free delivery on all orders above ₹999 across India.',
    },
    {
      id: 2,
      icon: <ArrowRepeat size={28} />,
      title: '30-Day Easy Returns',
      description:
        'Hassle-free returns and exchanges within 30 days of delivery.',
    },
    {
      id: 3,
      icon: <ShieldCheck size={28} />,
      title: 'Secure Payments',
      description:
        'Protected transactions with trusted payment gateways and encryption.',
    },
    {
      id: 4,
      icon: <BoxSeam size={28} />,
      title: 'Premium Packaging',
      description: 'Every order arrives in elegant, luxury packaging.',
    },
  ];

  return (
    <Container className="py-5">
      <div className="mb-5 text-center">
        <h3 className="fw-bold">Delivery & Trust</h3>

        <p className="text-muted">
          Shop with confidence knowing your order is protected from checkout to
          delivery.
        </p>
      </div>

      <Row className="g-4">
        {deliveryFeatures.map((item) => (
          <Col md={6} key={item.id}>
            <Card className="border-0 shadow-sm h-100 rounded-4">
              <Card.Body>
                <Stack direction="horizontal" gap={3}>
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      minWidth: '60px',
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h5 className="fw-semibold">{item.title}</h5>

                    <p className="text-muted mb-2">{item.description}</p>

                    <div className="d-flex align-items-center text-success">
                      <CheckCircleFill className="me-2" />

                      <small className="fw-medium">
                        Included with every order
                      </small>
                    </div>
                  </div>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 bg-light rounded-4 shadow-sm mt-5">
        <Card.Body>
          <Row className="text-center">
            <Col md={4} className="mb-3 mb-md-0">
              <h2 className="fw-bold">50K+</h2>
              <p className="text-muted mb-0">Happy Customers</p>
            </Col>

            <Col md={4} className="mb-3 mb-md-0">
              <h2 className="fw-bold">4.8★</h2>
              <p className="text-muted mb-0">Average Rating</p>
            </Col>

            <Col md={4}>
              <h2 className="fw-bold">100%</h2>
              <p className="text-muted mb-0">Secure Checkout</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DeliveryInfo;
