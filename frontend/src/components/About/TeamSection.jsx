import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import aboutImg from '../../assets/images/about-1.png';
import about1Img from '../../assets/images/about-2.png';
import about2Img from '../../assets/images/about-3.png';

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'CEO & Founder',
      image: aboutImg,
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'Lead Developer',
      image: about1Img,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      role: 'Designer',
      image: about2Img,
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <span className="text-uppercase text-secondary fw-semibold small">
              Our Team
            </span>

            <h2 className="display-5 fw-bold mt-2">Meet Our Experts</h2>

            <p className="lead text-muted">
              The passionate people behind our premium menswear brand.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {team.map((member) => (
            <Col key={member.id} sm={6} md={4} lg={3}>
              <Card className="border-0 shadow-sm h-100 text-center overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fluid
                    className="w-100"
                    style={{
                      aspectRatio: '1 / 1',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="fw-bold text-uppercase mb-1">
                    {member.name}
                  </Card.Title>

                  <Card.Text className="text-muted small text-uppercase">
                    {member.role}
                  </Card.Text>

                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="#" className="text-dark">
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>

                    <a href="#" className="text-dark">
                      <i className="bi bi-twitter-x fs-5"></i>
                    </a>

                    <a href="#" className="text-dark">
                      <i className="bi bi-instagram fs-5"></i>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
