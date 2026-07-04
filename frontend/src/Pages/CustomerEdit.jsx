import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+91 9876543210",
    status: "Active",
  },
];

function CustomerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const customer = customers.find((item) => item.id === parseInt(id, 10));

  const [formData, setFormData] = useState({
    name: customer ? customer.name : "",
    email: customer ? customer.email : "",
    phone: customer ? customer.phone : "",
    status: customer ? customer.status : "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      id,
      ...formData,
    });

    navigate("/admin/customers");
  };

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-4">Edit Customer</h2>

      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>

                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>

                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                    <option value="Inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-4 d-flex justify-content-end gap-2">
              <Button
                variant="secondary"
                onClick={() => navigate("/admin/customers")}
              >
                Cancel
              </Button>

              <Button type="submit" variant="success">
                Save Changes
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CustomerEdit;
