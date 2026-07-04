import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Table,
  Button,
  Badge,
  Pagination,
} from "react-bootstrap";

import OrderViewModal from "../../Pages/OrderView";
import OrderEditModal from "../../Pages/OrderEdit";
import ProfileCard from "./ProfileCard";

const ORDERS_PER_PAGE = 5;

function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/order/all");

      if (Array.isArray(res.data.data)) {
        setOrders(res.data.data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  };

  const filteredOrders = orders.filter((order) => {
    let firstName = "";
    let lastName = "";
    let id = "";

    if (order.customer) {
      firstName = order.customer.firstName || "";
      lastName = order.customer.lastName || "";
    }

    if (order._id) {
      id = order._id;
    }

    const customerName = (firstName + " " + lastName).toLowerCase();
    const searchText = search.toLowerCase();

    return (
      (customerName.includes(searchText) ||
        id.toLowerCase().includes(searchText)) &&
      (statusFilter === "All" || order.status === statusFilter)
    );
  });

  const handleView = (order) => {
    setSelectedOrder(order);
    setShowView(true);
  };

  const handleEdit = (order) => {
    setSelectedOrder({ ...order });
    setShowEdit(true);
  };

  const handleChange = (e) => {
    setSelectedOrder((prev) => {
      const updated = { ...prev };
      updated[e.target.name] = e.target.value;
      return updated;
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/order/update/${selectedOrder._id}`,
        selectedOrder,
      );

      fetchOrders();
      setShowEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/order/delete/${id}`);

      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const badgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Processing":
        return "info";
      case "Shipped":
        return "primary";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "danger";
      default:
        return "secondary";
    }
  };

  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const indexOfLastItem = currentPage * ORDERS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ORDERS_PER_PAGE;

  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container fluid className="py-4">
      <Row className="align-items-center mb-4">
        <Col md={8}>
          <h2 className="fw-bold">Order Management</h2>
        </Col>

        <Col md={4} className="d-flex justify-content-end">
          <ProfileCard />
        </Col>
      </Row>

      <Card className="shadow-sm rounded-4 mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <Form.Control
                placeholder="Search Order / Customer"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </Col>

            <Col md={3}>
              <Form.Select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option>All</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </Form.Select>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="shadow-sm rounded-4">
        <Table responsive hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Products</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((order) => {
              let firstName = "";
              let lastName = "";

              if (order.customer) {
                firstName = order.customer.firstName;
                lastName = order.customer.lastName;
              }

              return (
                <tr key={order._id}>
                  <td>{order._id.slice(-6).toUpperCase()}</td>

                  <td>
                    {firstName} {lastName}
                  </td>

                  <td>
                    {Array.isArray(order.items)
                      ? order.items.map((item) => item.productName).join(", ")
                      : ""}
                  </td>

                  <td>₹{order.total}</td>

                  <td>
                    <Badge bg="success">
                      {order.paymentStatus || "Pending"}
                    </Badge>
                  </td>

                  <td>
                    <Badge bg={badgeColor(order.status)}>{order.status}</Badge>
                  </td>

                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : ""}
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={() => handleView(order)}
                      >
                        <i className="bi bi-eye"></i>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline-primary"
                        onClick={() => handleEdit(order)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleDelete(order._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            />
          </Pagination>
        </div>
      )}

      <OrderViewModal
        show={showView}
        onHide={() => setShowView(false)}
        order={selectedOrder}
      />

      <OrderEditModal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        order={selectedOrder}
        onChange={handleChange}
        onSave={handleSave}
      />
    </Container>
  );
}

export default OrdersTable;
