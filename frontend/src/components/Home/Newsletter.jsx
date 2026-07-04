import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const Newsletter = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <span className="text-uppercase text-secondary fw-semibold">
              Stay Connected
            </span>

            <h2 className="display-5 fw-bold mt-2 mb-3">Join The Community</h2>

            <p className="text-light-emphasis mb-5">
              Subscribe to receive exclusive offers, latest arrivals, style
              inspiration, and special member-only discounts.
            </p>

            <Form>
              <InputGroup className="shadow-lg">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="py-3 border-0"
                />

                <Button variant="light" className="px-4 fw-semibold">
                  <i className="bi bi-send-fill me-2"></i>
                  Subscribe
                </Button>
              </InputGroup>
            </Form>

            <p className="small text-light-emphasis mt-3 mb-0">
              By subscribing, you agree to receive marketing emails. You can
              unsubscribe at any time.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
