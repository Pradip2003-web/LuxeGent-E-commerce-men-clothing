import { Container, Row, Col, Button } from "react-bootstrap";
import aboutImg from "../../assets/images/about.jpg";

const HeroSection = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center text-white"
      style={{
        background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url(${aboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <span className="text-uppercase text-secondary fw-semibold small">
              Premium Menswear
            </span>

            <h1 className="display-2 fw-bold my-4">
              Crafting Modern Menswear
              <br className="d-none d-md-block" />
              for the Confident Gentleman
            </h1>

            <p className="lead text-white-50 fs-4 mb-5 mx-auto">
              Premium essentials designed with purpose, quality, and timeless
              style.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button
                variant="light"
                size="lg"
                className="rounded-pill px-5 fw-semibold"
              >
                Shop Collection
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </div>

            {/* Optional Stats */}
            <Row className="mt-5 pt-4 g-4 justify-content-center">
              <Col xs={4} md={3}>
                <h3 className="fw-bold">10K+</h3>
                <p className="text-white-50 small mb-0">Happy Customers</p>
              </Col>

              <Col xs={4} md={3}>
                <h3 className="fw-bold">100+</h3>
                <p className="text-white-50 small mb-0">Premium Products</p>
              </Col>

              <Col xs={4} md={3}>
                <h3 className="fw-bold">15+</h3>
                <p className="text-white-50 small mb-0">Years Experience</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
