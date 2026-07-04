import { Container, Row, Col, Card } from 'react-bootstrap';

import {
  Eye,
  PencilSquare,
  Trash,
  Download,
  BellSlash,
  ShieldLock,
  ExclamationCircle,
  CheckCircleFill,
} from 'react-bootstrap-icons';

const rights = [
  {
    icon: <Eye size={24} />,
    title: 'Right to Access',
    description:
      'Request a copy of the personal information we hold about you.',
  },
  {
    icon: <PencilSquare size={24} />,
    title: 'Right to Correct',
    description:
      'Update or correct inaccurate or incomplete personal information.',
  },
  {
    icon: <Trash size={24} />,
    title: 'Right to Delete',
    description:
      'Request deletion of your account and personal data where permitted by law.',
  },
  {
    icon: <Download size={24} />,
    title: 'Right to Data Portability',
    description: 'Request a downloadable copy of your personal information.',
  },
  {
    icon: <BellSlash size={24} />,
    title: 'Right to Option Out',
    description:
      'Unsubscribe from promotional emails and marketing communications at any time.',
  },
  {
    icon: <ShieldLock size={24} />,
    title: 'Right to Withdraw Consent',
    description:
      'Withdraw previously granted consent for data processing whenever applicable.',
  },
  {
    icon: <ExclamationCircle size={24} />,
    title: 'Right to Lodge a Complaint',
    description:
      'Contact the appropriate data protection authority if you believe your privacy rights have been violated.',
  },
];

function UserRights() {
  return (
    <section id="user-rights" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Your Rights</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '750px' }}>
            We believe you should have control over your personal information.
            Depending on applicable laws, you may exercise the following rights.
          </p>
        </div>

        <Row className="g-4">
          {rights.map((right, index) => (
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
                      {right.icon}
                    </div>

                    <div>
                      <h5 className="fw-semibold mb-2">{right.title}</h5>

                      <p className="text-muted mb-0">{right.description}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Card className="border-0 bg-light rounded-4 shadow-sm mt-5">
          <Card.Body className="p-4">
            <div className="d-flex align-items-start">
              <CheckCircleFill
                size={28}
                className="text-success me-3 mt-1 flex-shrink-0"
              />

              <div>
                <h5 className="fw-bold mb-2">
                  We Respect Your Privacy Choices
                </h5>

                <p className="text-muted mb-0">
                  If you wish to access, update, export, or delete your
                  information, simply contact our support team. We will respond
                  to eligible requests in accordance with applicable privacy
                  regulations and legal requirements.
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default UserRights;
