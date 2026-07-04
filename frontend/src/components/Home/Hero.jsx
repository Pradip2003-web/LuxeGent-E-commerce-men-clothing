import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../../assets/images/heroImage.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center text-white position-relative"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage}) center/cover no-repeat`,
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <span className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4">
              NEW SEASON COLLECTION
            </span>

            <h1 className="display-2 fw-bold mb-4">
              Elevate Your
              <br className="d-none d-md-block" />
              Everyday Style
            </h1>

            <p className="lead text-white-50 mb-5">
              Discover premium menswear designed for modern confidence.
            </p>

            <Link to="/product">
              <Button variant="dark" size="lg" className="rounded-pill px-5">
                Shop Now
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
