import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

import {
  BagCheck,
  Truck,
  Headset,
  ShieldCheck,
  GraphUp,
  Envelope,
  PersonCheck,
  Star,
} from 'react-bootstrap-icons';

const usageItems = [
  {
    icon: <BagCheck size={20} />,
    title: 'Process Orders',
    description:
      'Use your information to process purchases, payments, and order confirmations.',
  },
  {
    icon: <Truck size={20} />,
    title: 'Deliver Products',
    description:
      'Share shipping details with delivery partners to ensure successful delivery.',
  },
  {
    icon: <Headset size={20} />,
    title: 'Customer Support',
    description:
      'Respond to inquiries, returns, refunds, and support requests efficiently.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Fraud Prevention',
    description:
      'Protect customers and prevent unauthorized transactions or suspicious activity.',
  },
  {
    icon: <GraphUp size={20} />,
    title: 'Analytics & Improvements',
    description:
      'Analyze website usage to improve performance, products, and user experience.',
  },
  {
    icon: <Envelope size={20} />,
    title: 'Marketing Communications',
    description:
      'Send newsletters, promotions, and updates only when you have provided consent.',
  },
  {
    icon: <PersonCheck size={20} />,
    title: 'Account Management',
    description:
      'Maintain your account information, saved addresses, and purchase history.',
  },
  {
    icon: <Star size={20} />,
    title: 'Personalized Experience',
    description:
      'Recommend products and collections based on your browsing and shopping activity.',
  },
];

function HowWeUseData() {
  return (
    <section id="how-we-use" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">How We Use Your Data</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Your information helps us provide secure, reliable, and personalized
            shopping experiences while continuously improving our services.
          </p>
        </div>

        <Row className="g-4">
          {usageItems.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="border-0 shadow-sm rounded-4 h-100">
                <Card.Body className="p-4 text-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white mb-3"
                    style={{ width: '65px', height: '65px' }}
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

        <Alert variant="light" className="border rounded-4 shadow-sm mt-5 p-4">
          <h5 className="fw-bold mb-3">Our Commitment</h5>

          <p className="text-muted mb-0">
            We only use your personal information for legitimate business
            purposes, including order fulfillment, customer support, website
            improvements, and communications that you choose to receive. We do
            not sell your personal data to third parties.
          </p>
        </Alert>
      </Container>
    </section>
  );
}

export default HowWeUseData;
