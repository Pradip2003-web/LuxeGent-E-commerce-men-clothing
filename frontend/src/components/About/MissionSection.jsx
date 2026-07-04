import { Container, Row, Col, Card } from 'react-bootstrap';

const missions = [
  {
    icon: 'bi-gem',
    title: 'Quality',
    description: 'Premium fabrics and exceptional craftsmanship.',
  },
  {
    icon: 'bi-stars',
    title: 'Style',
    description: 'Modern designs inspired by timeless menswear.',
  },
  {
    icon: 'bi-globe',
    title: 'Responsibility',
    description: 'Ethical sourcing and sustainable practices.',
  },
];

const MissionSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <span className="text-uppercase text-secondary fw-semibold small">
              Our Purpose
            </span>

            <h2 className="display-5 fw-bold mt-2">Our Mission</h2>

            <p className="lead text-muted mt-3">
              We believe every man deserves clothing that combines comfort,
              confidence, and timeless elegance.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {missions.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <Card.Body>
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                    }}
                  >
                    <i className={`${item.icon} fs-1`}></i>
                  </div>

                  <Card.Title className="fw-bold mb-3">{item.title}</Card.Title>

                  <Card.Text className="text-muted">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MissionSection;
