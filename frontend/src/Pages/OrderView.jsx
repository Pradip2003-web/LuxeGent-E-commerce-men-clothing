import { Modal, Button } from "react-bootstrap";

function OrderViewModal({ show, onHide, order }) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {order && (
          <>
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>

            <hr />

            <h6>Customer</h6>

            <p>
              <strong>Name:</strong> {order.customer.firstName}
              {order.customer.lastName}
            </p>

            <p>
              <strong>Email:</strong> {order.customer.email}
            </p>

            <p>
              <strong>Phone:</strong> {order.customer.phone}
            </p>

            <hr />

            <h6>Shipping Address</h6>

            <p>{order.shippingAddress.address}</p>

            <p>
              {order.shippingAddress.city},{order.shippingAddress.state},
              {order.shippingAddress.zipCode}
            </p>

            <hr />

            <h6>Products</h6>

            {order.items &&
              order.items.map((item, index) => (
                <div key={index} className="mb-2">
                  <strong>{item.productName}</strong>
                  <br />
                  Quantity: {item.quantity}
                  <br />
                  Price: ₹{item.price}
                </div>
              ))}

            <hr />

            <p>
              <strong>Subtotal:</strong> ₹{order.subtotal}
            </p>

            <p>
              <strong>Shipping:</strong> ₹{order.shippingCost}
            </p>

            <p>
              <strong>Tax:</strong> ₹{order.tax}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>

            <p>
              <strong>Payment Method:</strong> {order.paymentMethod}
            </p>

            <p>
              <strong>Payment Status:</strong> {order.paymentStatus}
            </p>

            <p>
              <strong>Status:</strong> {order.status}
            </p>

            <p>
              <strong>Date:</strong>
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderViewModal;
