import { Modal, Button, Form } from "react-bootstrap";

function OrderEditModal({ show, onHide, order, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Order</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {order && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                value={order.customer.firstName}
                onChange={(e) =>
                  onChange({
                    target: {
                      name: "customer",
                      value: {
                        ...order.customer,
                        firstName: e.target.value,
                      },
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={order.customer.lastName}
                onChange={(e) =>
                  onChange({
                    target: {
                      name: "customer",
                      value: {
                        ...order.customer,
                        lastName: e.target.value,
                      },
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control
                value={
                  order.items && order.items.length > 0
                    ? order.items[0].productName
                    : ""
                }
                onChange={(e) =>
                  onChange({
                    target: {
                      name: "items",
                      value: [
                        {
                          ...order.items[0],
                          productName: e.target.value,
                        },
                      ],
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total</Form.Label>
              <Form.Control
                name="total"
                value={order.total}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Payment Status</Form.Label>
              <Form.Select
                name="paymentStatus"
                value={order.paymentStatus}
                onChange={onChange}
              >
                <option>Pending</option>
                <option>Paid</option>
                <option>Refunded</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={order.status}
                onChange={onChange}
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </Form.Select>
            </Form.Group>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>

        <Button variant="primary" onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderEditModal;
