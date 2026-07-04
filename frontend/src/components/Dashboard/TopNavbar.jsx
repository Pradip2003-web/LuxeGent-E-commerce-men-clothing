import { Navbar, Container, Form, Button, Badge, Image } from 'react-bootstrap';
import founderImg from '../../assets/images/founder.png';

function TopNavbar() {
  return (
    <Navbar bg="white" className="shadow-sm px-4 py-3 rounded-4">
      <Container fluid>
        <div className="w-50">
          <Form.Control
            type="search"
            placeholder="Search products, orders, customers..."
          />
        </div>

        <div className="d-flex align-items-center ms-auto">
          <Button variant="light" className="position-relative me-3 border-0">
            <i className="bi bi-bell fs-5"></i>

            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle"
            >
              5
            </Badge>
          </Button>

          <div className="d-flex align-items-center">
            <Image
              src={founderImg}
              alt="Admin"
              roundedCircle
              width={45}
              height={45}
              className="border"
              style={{ objectFit: 'cover' }}
            />

            <div className="ms-3 d-none d-md-block">
              <h6 className="mb-0 fw-bold">Julian Vance</h6>

              <small className="text-muted">Admin</small>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
