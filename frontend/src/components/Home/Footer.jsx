import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import LuxeGent1 from "../../assets/icons/LuxeGent.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="g-5">
          <Col lg={4} md={6}>
            <Image
              src={LuxeGent1}
              alt="LuxeGent"
              height={70}
              width={180}
              className="mb-3"
            />

            <p className="text-light-emphasis">
              LuxeGent delivers premium menswear designed for the modern
              gentleman. We blend timeless elegance with contemporary style,
              offering quality pieces crafted to elevate everyday confidence.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link to="#" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </Link>

              <Link to="#" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </Link>

              <Link to="#" className="text-light fs-4">
                <i className="bi bi-pinterest"></i>
              </Link>

              <Link to="#" className="text-light fs-4">
                <i className="bi bi-youtube"></i>
              </Link>

              <Link to="#" className="text-light fs-4">
                <i className="bi bi-twitter-x"></i>
              </Link>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-4">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-light-emphasis text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-light-emphasis text-decoration-none"
                >
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/product"
                  className="text-light-emphasis text-decoration-none"
                >
                  Shop
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-light-emphasis text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">Customer Service</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/privacypolicy"
                  className="text-light-emphasis text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/term&conditions"
                  className="text-light-emphasis text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">Get In Touch</h5>

            <div className="mb-3 d-flex">
              <i className="bi bi-geo-alt-fill me-3 fs-5"></i>
              <span className="text-light-emphasis">
                123 Fashion Street, Surat, Gujarat, India
              </span>
            </div>

            <div className="mb-3 d-flex">
              <i className="bi bi-envelope-fill me-3 fs-5"></i>
              <span className="text-light-emphasis">support@luxegent.com</span>
            </div>

            <div className="mb-3 d-flex">
              <i className="bi bi-telephone-fill me-3 fs-5"></i>
              <span className="text-light-emphasis">+91 98765 43210</span>
            </div>

            <div className="d-flex">
              <i className="bi bi-clock-fill me-3 fs-5"></i>
              <span className="text-light-emphasis">
                Mon - Sat: 9:00 AM - 7:00 PM
              </span>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-light-emphasis">
              © {new Date().getFullYear()} LuxeGent. All Rights Reserved.
            </p>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <i className="bi bi-credit-card fs-4 me-3"></i>
            <i className="bi bi-paypal fs-4 me-3"></i>
            <i className="bi bi-wallet2 fs-4"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
