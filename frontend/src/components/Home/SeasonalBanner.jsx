import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import heroImg from '../../assets/images/heroImage.jpg';

const SeasonalBanner = () => {
  return (
    <section className="py-5 bg-light overflow-hidden">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <span className="badge bg-dark px-4 py-2 rounded-pill mb-3">
              LIMITED EDITION COLLECTION
            </span>

            <h2 className="display-4 fw-bold mb-4">Autumn Essentials 2026</h2>

            <p className="lead text-muted mb-4">
              Timeless pieces crafted for the modern gentleman. Discover refined
              silhouettes, premium fabrics, and effortless style designed for
              every occasion.
            </p>

            <Button variant="dark" size="lg" className="rounded-pill px-5">
              <i className="bi bi-arrow-right me-2"></i>
              Discover Collection
            </Button>
          </Col>

          <Col lg={7}>
            <div className="position-relative">
              <Image
                src={heroImg}
                alt="Autumn Fashion Collection"
                fluid
                rounded
                className="shadow-lg w-100"
                style={{
                  maxHeight: '550px',
                  objectFit: 'cover',
                }}
              />

              <div
                className="position-absolute bg-white shadow rounded-circle d-flex flex-column justify-content-center align-items-center"
                style={{
                  width: '120px',
                  height: '120px',
                  top: '20px',
                  right: '20px',
                }}
              >
                <span className="fw-bold fs-4">30%</span>
                <small className="text-muted">OFF</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SeasonalBanner;
