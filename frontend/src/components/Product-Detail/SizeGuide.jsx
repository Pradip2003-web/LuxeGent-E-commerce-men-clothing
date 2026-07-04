import { Container, Row, Col, Card, Table, ListGroup } from 'react-bootstrap';

import { Rulers, InfoCircle, CheckCircleFill } from 'react-bootstrap-icons';

function SizeGuide() {
  const sizeData = [
    { size: 'S', chest: '38', shoulder: '17', length: '27' },
    { size: 'M', chest: '40', shoulder: '18', length: '28' },
    { size: 'L', chest: '42', shoulder: '19', length: '29' },
    { size: 'XL', chest: '44', shoulder: '20', length: '30' },
    { size: 'XXL', chest: '46', shoulder: '21', length: '31' },
  ];

  const fitAdvice = [
    {
      title: 'Regular Fit',
      text: 'Designed with a balanced silhouette for everyday comfort.',
    },
    {
      title: 'Layer Friendly',
      text: 'Wear comfortably over a T-shirt or light knit.',
    },
    {
      title: 'Between Sizes ?',
      text: 'Choose a larger size for a relaxed fit or a smaller size for a tailored appearance.',
    },
  ];

  const measurementTips = [
    {
      icon: '📏',
      title: 'Chest',
      description:
        'Measure around the fullest part of your chest while keeping the tape level.',
    },
    {
      icon: '👕',
      title: 'Shoulder',
      description:
        'Measure from one shoulder edge to the other across your back.',
    },
    {
      icon: '📐',
      title: 'Length',
      description: 'Measure from the highest shoulder point to the bottom hem.',
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="fw-bold mb-3">Size Guide</h2>

            <p className="text-muted mb-0">
              Find your perfect fit using our measurement guide. All
              measurements are in inches and may vary slightly.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <Rulers size={24} className="me-2" />
                  <h4 className="fw-bold mb-0">Measurement Chart</h4>
                </div>

                <Table
                  responsive
                  hover
                  bordered
                  className="align-middle text-center mb-0"
                >
                  <thead className="table-light">
                    <tr>
                      <th>Size</th>
                      <th>Chest</th>
                      <th>Shoulder</th>
                      <th>Length</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sizeData.map((item) => (
                      <tr key={item.size}>
                        <td className="fw-bold">{item.size}</td>
                        <td>{item.chest}"</td>
                        <td>{item.shoulder}"</td>
                        <td>{item.length}"</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Fit Advice</h4>

                <ListGroup variant="flush">
                  {fitAdvice.map((item, index) => (
                    <ListGroup.Item key={index} className="border-0 px-0">
                      <div className="d-flex">
                        <CheckCircleFill
                          className="text-success me-3 mt-2 flex-shrink-0"
                          size={18}
                        />

                        <div>
                          <h6 className="fw-semibold mb-1">{item.title}</h6>

                          <small className="text-muted">{item.text}</small>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <Card className="mt-4 bg-light border-0 rounded-4">
                  <Card.Body>
                    <div className="d-flex align-items-start">
                      <InfoCircle className="me-2 mt-1" size={18} />

                      <small className="text-muted">
                        For the most accurate recommendation, use our "Find My
                        Size" calculator.
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="border-0 bg-light rounded-4 mt-5">
          <Card.Body className="p-4 p-lg-5">
            <h4 className="fw-bold text-center mb-5">How to Measure</h4>

            <Row className="g-4">
              {measurementTips.map((tip, index) => (
                <Col md={4} key={index}>
                  <Card className="border-0 bg-white rounded-4 h-100 shadow-sm">
                    <Card.Body className="text-center p-4">
                      <div className="display-5 mb-3">{tip.icon}</div>

                      <h5 className="fw-semibold mb-3">{tip.title}</h5>

                      <p className="text-muted small mb-0">{tip.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default SizeGuide;
