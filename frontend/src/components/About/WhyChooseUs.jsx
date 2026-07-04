import { Container, Row, Col, Card } from 'react-bootstrap';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: 'bi-shield-check',
      title: 'Premium Quality',
      description:
        'Crafted from luxury fabrics with meticulous attention to detail, delivering timeless style and exceptional durability.',
    },
    {
      id: 2,
      icon: 'bi-truck',
      title: 'Fast Delivery',
      description:
        'Reliable worldwide shipping with secure packaging and quick dispatch, ensuring your order arrives on time.',
    },
    {
      id: 3,
      icon: 'bi-arrow-repeat',
      title: 'Easy Returns',
      description:
        'Enjoy a hassle-free return and exchange process designed to make every purchase completely worry-free.',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <span className="text-uppercase text-secondary fw-semibold">
              Why Choose Us
            </span>

            <h2 className="display-5 fw-bold mt-3">
              Designed for the Modern Gentleman
            </h2>

            <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
              We combine premium craftsmanship, dependable service, and a
              customer-first experience to create menswear you'll appreciate for
              years to come.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {features.map((feature) => (
            <Col lg={4} md={6} key={feature.id}>
              <Card className="h-100 border-0 shadow-sm text-center p-4 why-card">
                <Card.Body>
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white mb-4"
                    style={{
                      width: '90px',
                      height: '90px',
                    }}
                  >
                    <i className={`${feature.icon} fs-1`}></i>
                  </div>

                  <Card.Title className="fw-bold mb-3">
                    {feature.title}
                  </Card.Title>

                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
