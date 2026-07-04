import { Container, Row, Col, Badge } from 'react-bootstrap';
import { ShieldCheck } from 'react-bootstrap-icons';

function PrivacyHero() {
  return (
    <section className="py-5 bg-light border-bottom">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white mb-4"
              style={{
                width: '90px',
                height: '90px',
              }}
            >
              <ShieldCheck size={45} />
            </div>

            <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>

            <p
              className="lead text-muted mx-auto mb-4"
              style={{ maxWidth: '700px' }}
            >
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, store, and protect your personal information when
              you use our website and services.
            </p>

            <Badge
              bg="white"
              text="dark"
              pill
              className="border shadow-sm px-4 py-3 fs-6 fw-semibold"
            >
              Last Updated: June 2026
            </Badge>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PrivacyHero;
