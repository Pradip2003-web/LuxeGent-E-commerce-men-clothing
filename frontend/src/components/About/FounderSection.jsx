import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import fImg from '../../assets/images/founder.png';

export default function FounderSection() {
  const bio = [
    'Over 15 years of premium fashion expertise and tailoring heritage.',
    'Driven by a brand philosophy that favors timeless character over fleeting trends.',
    'Uncompromising quality commitment, sourcing only elite, sustainable fabrics.',
    'A visionary outlook for modern menswear that merges classic cuts with effortless daily wear.',
  ];

  return (
    <section className="py-5 bg-light">
      <Container className="py-4">
        <Row className="g-5 align-items-center">
          <Col lg={5} md={6}>
            <div className="position-relative">
              <Image
                src={fImg}
                alt="Founder Portrait"
                fluid
                rounded
                className="shadow-lg w-100"
                style={{
                  maxWidth: '450px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />

              <div
                className="position-absolute d-none d-lg-block border border-3 border-dark rounded"
                style={{
                  top: '20px',
                  left: '-20px',
                  width: '100%',
                  height: '100%',
                  zIndex: -1,
                }}
              />
            </div>
          </Col>

          <Col lg={7} md={6}>
            <div className="ps-lg-4">
              <span className="text-uppercase text-secondary small fw-semibold">
                Behind The Brand
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-4">Meet the Founder</h2>

              <div className="mb-4">
                <h4 className="fw-bold text-primary mb-1">Julian Vance</h4>

                <p className="text-muted text-uppercase small fw-medium">
                  Founder & Creative Director
                </p>
              </div>

              <Card className="border-0 border-start border-4 border-dark shadow-sm my-4 position-relative overflow-hidden">
                <Card.Body className="p-4">
                  <i
                    className="bi bi-quote position-absolute text-secondary opacity-25"
                    style={{
                      top: '5px',
                      right: '20px',
                      fontSize: '4rem',
                    }}
                  ></i>

                  <blockquote className="blockquote mb-0 position-relative">
                    <p className="fs-5 fst-italic mb-0">
                      "Style is not about following trends. It's about building
                      confidence through timeless pieces."
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>

              <div className="mt-4">
                <h5 className="fw-semibold mb-3">Our Core Philosophy</h5>

                <ul className="list-unstyled mb-0">
                  {bio.map((point, index) => (
                    <li key={index} className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill text-dark me-3 mt-1"></i>

                      <span className="text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
