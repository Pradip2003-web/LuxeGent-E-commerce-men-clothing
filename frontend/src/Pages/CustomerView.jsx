import { useParams, Link } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
import CustomerStatus from '../components/Dashboard/CustomerStatus';

const customers = [
  {
    id: 1,
    avatar: null,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+91 9876543210',
    orders: 12,
    spent: '24,500',
    joined: '10 Jan 2026',
    status: 'Active',
    address: 'Mumbai, India',
  },
  {
    id: 2,
    avatar: null,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '+91 9988776655',
    orders: 5,
    spent: '8,900',
    joined: '22 Feb 2026',
    status: 'Blocked',
    address: 'Delhi, India',
  },
];

function CustomerView() {
  const { id } = useParams();

  const customer = customers.find((item) => item.id === parseInt(id, 10));

  if (!customer) {
    return <h3 className="text-center mt-5">Customer Not Found</h3>;
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Customer Details</h2>

        <Button
          as={Link}
          to={`/admin/customer/edit/${customer.id}`}
          variant="primary"
        >
          <i className="bi bi-pencil me-2"></i>
          Edit Customer
        </Button>
      </div>

      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-4">
          <Row>
            <Col md={3} className="text-center">
              {customer.avatar ? (
                <Image
                  src={customer.avatar}
                  roundedCircle
                  width={150}
                  height={150}
                />
              ) : (
                <div
                  className="bg-light rounded-circle mx-auto"
                  style={{
                    width: '150px',
                    height: '150px',
                  }}
                />
              )}
            </Col>

            <Col md={9}>
              <Row className="g-4">
                <Col md={6}>
                  <h6>Name</h6>
                  <p>{customer.name}</p>
                </Col>

                <Col md={6}>
                  <h6>Email</h6>
                  <p>{customer.email}</p>
                </Col>

                <Col md={6}>
                  <h6>Phone</h6>
                  <p>{customer.phone}</p>
                </Col>

                <Col md={6}>
                  <h6>Total Orders</h6>
                  <p>{customer.orders}</p>
                </Col>

                <Col md={6}>
                  <h6>Total Spent</h6>
                  <p>₹{customer.spent}</p>
                </Col>

                <Col md={6}>
                  <h6>Joined Date</h6>
                  <p>{customer.joined}</p>
                </Col>

                <Col md={6}>
                  <h6>Status</h6>
                  <CustomerStatus status={customer.status} />
                </Col>

                <Col md={12}>
                  <h6>Address</h6>
                  <p>{customer.address}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CustomerView;
