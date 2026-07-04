import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import customerImg from '../../assets/images/people.webp';
import customer1Img from '../../assets/images/people-1.webp';
import customer2Img from '../../assets/images/people-2.webp';

const customers = [
  {
    id: 1,
    name: 'John Smith',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: customerImg,
  },
  {
    id: 2,
    name: 'Sam Roy',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: customer1Img,
  },
  {
    id: 3,
    name: 'Johnson',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: customer2Img,
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase text-secondary fw-semibold">
            Testimonials
          </span>

          <h2 className="display-5 fw-bold mt-2">What Our Customers Say</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover why thousands of customers trust our premium menswear
            collection for quality, comfort, and timeless style.
          </p>
        </div>

        <Row className="g-4">
          {customers.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <Card className="border-0 shadow-sm h-100 text-center p-4 testimonial-card">
                <Card.Body>
                  <Image
                    src={item.image}
                    alt={item.name}
                    roundedCircle
                    width={100}
                    height={100}
                    className="mb-4 border border-3 border-light shadow"
                    style={{ objectFit: 'cover' }}
                  />

                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <Card.Title className="fw-bold">{item.name}</Card.Title>

                  <Card.Text className="text-muted">
                    <i className="bi bi-quote fs-3 text-secondary d-block mb-2"></i>
                    {item.desc}
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

export default Testimonials;
