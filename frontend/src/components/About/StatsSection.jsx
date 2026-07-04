import { Container, Row, Col } from 'react-bootstrap';

const stats = [
  {
    icon: 'bi-people-fill',
    value: '100,000+',
    label: 'Happy Customers',
  },
  {
    icon: 'bi-bag-check-fill',
    value: '500,000+',
    label: 'Products Delivered',
  },
  {
    icon: 'bi-star-fill',
    value: '4.9★',
    label: 'Average Rating',
  },
  {
    icon: 'bi-emoji-smile-fill',
    value: '98%',
    label: 'Customer Satisfaction',
  },
  {
    icon: 'bi-globe-americas',
    value: '50+',
    label: 'Countries Served',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4 text-center justify-content-center">
          {stats.map((stat, index) => (
            <Col xs={6} md={4} lg key={index}>
              <div className="p-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark mb-3"
                  style={{
                    width: '70px',
                    height: '70px',
                  }}
                >
                  <i className={`${stat.icon} fs-2`}></i>
                </div>

                <h2 className="fw-bold mb-2">{stat.value}</h2>

                <p className="text-white-50 mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
