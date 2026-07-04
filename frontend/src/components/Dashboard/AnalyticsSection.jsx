import SalesAnalytics from './SalesAnalytics';
import RevenueChart from './RevenueChart';
import { Col, Container, Row } from 'react-bootstrap';

function AnalyticsSection() {
  return (
   <Container fluid>
      <Row className="g-4 mt-1">
        <Col lg={7}>
          <SalesAnalytics />
        </Col>

        <Col lg={5}>
          <RevenueChart />
        </Col>
      </Row>
    </Container>
  );
}

export default AnalyticsSection;
