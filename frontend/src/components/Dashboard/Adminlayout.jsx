import { Outlet, Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import LuxeGent from '../../assets/icons/LuxeGent.png';

function AdminLayout() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light vh-100 p-3 position-fixed">
            <a className="navbar-brand logo" href="/">
              <img
                src={LuxeGent}
                alt="LuxeGent"
                height="75"
                width="180"
                className="d-inline-block align-top"
              />
            </a>
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

          <Col md={{ span: 10, offset: 2 }} className="p-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminLayout;
