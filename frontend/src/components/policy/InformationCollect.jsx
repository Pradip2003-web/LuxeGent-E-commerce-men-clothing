import { Container, Row, Col, Card } from 'react-bootstrap';

import {
  Person,
  Envelope,
  Telephone,
  GeoAlt,
  Bag,
  CreditCard,
  Globe,
  Laptop,
} from 'react-bootstrap-icons';

const dataItems = [
  {
    icon: <Person size={20} />,
    title: 'Personal Information',
    description: 'Your name and account details used to identify you.',
  },
  {
    icon: <Envelope size={20} />,
    title: 'Email Address',
    description: 'Used for order confirmations and customer support.',
  },
  {
    icon: <Telephone size={20} />,
    title: 'Phone Number',
    description: 'Used for delivery updates and communication.',
  },
  {
    icon: <GeoAlt size={20} />,
    title: 'Shipping Address',
    description: 'Required for order delivery and billing purposes.',
  },
  {
    icon: <Bag size={20} />,
    title: 'Order History',
    description: 'Stores your purchases to improve your shopping experience.',
  },
  {
    icon: <CreditCard size={20} />,
    title: 'Payment Information',
    description:
      'Processed securely through trusted payment gateways. Card details are never stored by us.',
  },
  {
    icon: <Globe size={20} />,
    title: 'IP Address',
    description:
      'Collected for security, fraud prevention, and analytics purposes.',
  },
  {
    icon: <Laptop size={20} />,
    title: 'Device Information',
    description:
      'Browser type, operating system, and device information help optimize performance.',
  },
];

function InformationCollect() {
  return (
    <section id="information-collect" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Information We Collect</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            We collect certain information to provide a secure, personalized,
            and seamless shopping experience.
          </p>
        </div>

        <Row className="g-4">
          {dataItems.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="border-0 shadow-sm rounded-4 h-100">
                <Card.Body className="p-4 text-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white mb-3"
                    style={{
                      width: '65px',
                      height: '65px',
                    }}
                  >
                    {item.icon}
                  </div>

                  <Card.Title className="fw-semibold mb-3">
                    {item.title}
                  </Card.Title>

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
}

export default InformationCollect;
