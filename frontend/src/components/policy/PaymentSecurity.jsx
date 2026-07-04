import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

import {
  ShieldLock,
  CreditCard2Front,
  Lock,
  CheckCircle,
  Globe,
  EyeSlash,
} from 'react-bootstrap-icons';

const securityFeatures = [
  {
    icon: <ShieldLock size={20} />,
    title: 'SSL Encryption',
    description:
      'All data transmitted between your browser and our website is protected using Secure Socket Layer (SSL) encryption.',
  },
  {
    icon: <CreditCard2Front size={20} />,
    title: 'Secure Payment Gateway',
    description:
      'Payments are processed through trusted and secure third-party payment providers.',
  },
  {
    icon: <Lock size={20} />,
    title: 'No Card Storage',
    description:
      'We never store your debit or credit card details on our servers.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Fraud Protection',
    description:
      'Our systems monitor transactions to detect and prevent fraudulent activity.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Encrypted Transactions',
    description:
      'Every payment transaction is encrypted to protect sensitive financial information.',
  },
  {
    icon: <EyeSlash size={20} />,
    title: 'Privacy First',
    description:
      'Your payment information is only used to complete your purchase and is never sold or shared for marketing purposes.',
  },
];

function PaymentSecurity() {
  return (
    <section id="payment-security" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Payment Security</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            We take the security of your payments seriously and use industry
            best practices to protect your personal and financial information.
          </p>
        </div>

        <Row className="g-4">
          {securityFeatures.map((feature, index) => (
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
                      {feature.icon}
                    </div>

                    <div>
                      <h5 className="fw-semibold mb-2">{feature.title}</h5>

                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Alert
          variant="success"
          className="rounded-4 mt-5 p-4 border-0 shadow-sm"
        >
          <h5 className="fw-bold mb-3">Your Security is Our Priority</h5>

          <p className="mb-0">
            Every checkout session is protected with encrypted connections and
            secure payment technology. We do not retain your payment card
            information, helping reduce the risk of unauthorized access.
          </p>
        </Alert>
      </Container>
    </section>
  );
}

export default PaymentSecurity;
