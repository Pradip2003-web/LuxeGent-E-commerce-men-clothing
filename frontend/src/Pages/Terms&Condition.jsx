import { Container, Row, Col, Card, Badge, Nav } from 'react-bootstrap';

import Footer from '../components/Home/Footer';
import Navbar from '../components/Home/Navbar';

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="dark" className="px-3 py-2 mb-3">
              Terms & Conditions
            </Badge>

            <h1 className="display-4 fw-bold">Terms & Conditions</h1>

            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Please read these Terms and Conditions carefully before using our
              website or purchasing our products.
            </p>
          </div>

          <Row>
            <Col lg={3} className="mb-4">
              <Card
                className="shadow-sm border-0 rounded-4 sticky-top"
                style={{ top: '100px' }}
              >
                <Card.Body>
                  <h5 className="fw-bold mb-3">Contents</h5>

                  <Nav className="flex-column">
                    <Nav.Link href="#user">
                      <i className="bi bi-person-check-fill me-2"></i>
                      User Responsibilities
                    </Nav.Link>

                    <Nav.Link href="#purchase">
                      <i className="bi bi-bag-check-fill me-2"></i>
                      Purchase Terms
                    </Nav.Link>

                    <Nav.Link href="#shipping">
                      <i className="bi bi-truck me-2"></i>
                      Shipping Policy
                    </Nav.Link>

                    <Nav.Link href="#return">
                      <i className="bi bi-arrow-counterclockwise me-2"></i>
                      Return Policy
                    </Nav.Link>

                    <Nav.Link href="#refund">
                      <i className="bi bi-cash-stack me-2"></i>
                      Refund Policy
                    </Nav.Link>

                    <Nav.Link href="#legal">
                      <i className="bi bi-shield-check me-2"></i>
                      Legal Disclaimer
                    </Nav.Link>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={9}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body className="p-4 p-md-5">
                  <section id="user" className="mb-5">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-person-check-fill me-2"></i>
                      User Responsibilities
                    </h3>

                    <p className="text-muted">
                      Users are responsible for providing accurate information,
                      maintaining account security, and complying with all
                      applicable laws while using our website.
                    </p>
                  </section>

                  <section id="purchase" className="mb-5">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-bag-check-fill me-2"></i>
                      Purchase Terms
                    </h3>

                    <p className="text-muted">
                      All orders are subject to availability and confirmation.
                      Prices may change without prior notice, and payment must
                      be completed before order processing.
                    </p>
                  </section>

                  <section id="shipping" className="mb-5">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-truck me-2"></i>
                      Shipping Policy
                    </h3>

                    <p className="text-muted">
                      Orders are processed within our standard business
                      timeframe. Delivery estimates may vary depending on
                      location and courier availability.
                    </p>
                  </section>

                  <section id="return" className="mb-5">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-arrow-counterclockwise me-2"></i>
                      Return Policy
                    </h3>

                    <p className="text-muted">
                      Eligible products may be returned within the specified
                      return window if unused and in original condition with all
                      tags attached.
                    </p>
                  </section>

                  <section id="refund" className="mb-5">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-cash-stack me-2"></i>
                      Refund Policy
                    </h3>

                    <p className="text-muted">
                      Approved refunds will be processed to the original payment
                      method after inspection of the returned item. Processing
                      time may vary depending on your payment provider.
                    </p>
                  </section>

                  <section id="legal">
                    <h3 className="fw-bold mb-3">
                      <i className="bi bi-shield-check me-2"></i>
                      Legal Disclaimer
                    </h3>

                    <p className="text-muted">
                      The website and its services are provided on an "as is"
                      basis. We are not liable for indirect, incidental, or
                      consequential damages arising from the use of our
                      platform.
                    </p>
                  </section>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default TermsConditions;
