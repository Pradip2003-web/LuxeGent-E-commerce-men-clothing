import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

import {
  CreditCard,
  Truck,
  BarChart,
  Envelope,
  Megaphone,
  ShieldCheck,
} from 'react-bootstrap-icons';

const services = [
  {
    icon: <CreditCard size={24} />,
    title: 'Payment Providers',
    description:
      'We use trusted payment gateways to securely process your transactions. Your card details are handled directly by these providers and are not stored on our servers.',
  },
  {
    icon: <Truck size={24} />,
    title: 'Shipping Partners',
    description:
      'Your delivery information may be shared with logistics partners to fulfill and track your orders efficiently.',
  },
  {
    icon: <BarChart size={24} />,
    title: 'Analytics Services',
    description:
      'Analytics tools help us understand website usage, improve performance, and enhance your shopping experience.',
  },
  {
    icon: <Envelope size={24} />,
    title: 'Email Services',
    description:
      'Email service providers help us send order confirmations, shipping updates, and customer support communications.',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Marketing Platforms',
    description:
      'With your consent, marketing platforms may be used to deliver newsletters, promotions, and personalized offers.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Security Services',
    description:
      'Fraud detection and security partners help protect customer accounts and monitor suspicious activity.',
  },
];

function ThirdPartyServices() {
  return (
    <section id="third-parties" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Third-Party Services</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
            We work with carefully selected third-party providers to operate our
            website, process payments, deliver orders, and improve our services.
            These providers only receive the information necessary to perform
            their responsibilities.
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="border-0 shadow-sm rounded-4 h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-white flex-shrink-0"
                      style={{
                        width: '55px',
                        height: '55px',
                      }}
                    >
                      {service.icon}
                    </div>

                    <div>
                      <h5 className="fw-semibold mb-2">{service.title}</h5>

                      <p className="text-muted mb-0">{service.description}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert variant="light" className="border rounded-4 shadow-sm mt-5 p-4">
          <h5 className="fw-bold mb-3">Commitment to Privacy</h5>

          <p className="text-muted mb-0">
            We only share information with trusted service providers when it is
            necessary to deliver our services. These partners are expected to
            maintain appropriate security measures and comply with applicable
            privacy laws.
          </p>
        </Alert>
      </Container>
    </section>
  );
}

export default ThirdPartyServices;
