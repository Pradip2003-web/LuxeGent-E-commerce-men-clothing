import StatsSection from '../components/Dashboard/StateSection';
import AnalyticsSection from '../components/Dashboard/AnalyticsSection';
import RecentOrders from '../components/Dashboard/OrdersTable';
import ProfileCard from '../components/Dashboard/ProfileCard';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LuxeGent from '../assets/icons/LuxeGent.png';

function Dashboard() {
  return (
    <>
<Container fluid>
  <Row>
    <Col
      md={2}
      className="bg-light vh-100 p-3 position-fixed start-0 top-0"
    >
      <Link className="navbar-brand logo" href="/">
        <img
          src={LuxeGent}
          alt="LuxeGent"
          width="180"
          height="75"
          className="img-fluid"
        />
      </Link>

      <h4 className="fw-bold mb-4">Men's Fashion</h4>

      <Nav className="flex-column">
        <Nav.Link as={Link} to="/admin">
          Overview
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/orders">
          Orders
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/products">
          Products
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/customers">
          Customers
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/inventory">
          Inventory
        </Nav.Link>
      </Nav>
    </Col>
    
    <Col md={{ span: 10, offset: 2 }} className="py-4">
      <Row className="align-items-center mb-4 pb-3 border-bottom">
        <Col md={8} sm={12} className="mb-3 mb-md-0">
          <h2 className="fw-bold mb-1">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard Overview
          </h2>

          <p className="text-muted mb-0">
            Welcome to the Men's Fashion Admin Panel.
          </p>
        </Col>

        <Col md={4} sm={12}>
          <ProfileCard />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <StatsSection />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <AnalyticsSection />
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="fw-bold mb-3">
            <i className="bi bi-clock-history me-2"></i>
            Latest Activity
          </h4>
         <RecentOrders />
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

    </>
  );
}

export default Dashboard;
