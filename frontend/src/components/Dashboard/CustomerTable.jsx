import { Card, Row, Col, Form, Table, Pagination } from "react-bootstrap";
import CustomerRow from "./CustomerRow";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";

const customers = [
  {
    id: 1,
    avatar:
      "https://www.pexels.com/photo/close-up-photo-of-pink-gazania-flower-584420/",
    name: "John Smith",
    email: "john@example.com",
    phone: "+91 9876543210",
    orders: 12,
    spent: "24,500",
    joined: "10 Jan 2026",
    status: "Active",
  },
  {
    id: 2,
    avatar: null,
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+91 9988776655",
    orders: 5,
    spent: "8,900",
    joined: "22 Feb 2026",
    status: "Blocked",
  },
  {
    id: 3,
    avatar: null,
    name: "David Lee",
    email: "david@example.com",
    phone: "+91 9123456789",
    orders: 18,
    spent: "41,200",
    joined: "18 Mar 2026",
    status: "Active",
  },
];

const customer_per_page = 2;
function CustomerTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [customerList, setCustomerList] = useState(customers);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCustomers = customerList.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);

    const matchesStatus =
      statusFilter === "All Status" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/customer/create");

      setcustomerList(response.data.customers);
     
    } catch (err) {
      console.error(err);
    }
  };
  const handleDelete = (id) => {
    setCustomerList(customerList.filter((customer) => customer.id !== id));
  };
  const totalPages = Math.ceil(filteredCustomers.length / customer_per_page);
  const indexOfLastCustomer = currentPage * customer_per_page;
  const indexOfFirstCustomer = indexOfLastCustomer - customer_per_page;

  const currentCustomer = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer,
  );
  return (
    <>
      <Card className="border-0 shadow-sm rounded-4 mt-4">
        <Card.Body>
          <Row className="align-items-center mb-4">
            <Col md={8} sm={12}>
              <h5 className="fw-bold mb-0">Customer Management</h5>
            </Col>

            <Col
              md={4}
              sm={12}
              className="d-flex justify-content-md-end justify-content-start mt-3 mt-md-0"
            >
              <ProfileCard />
            </Col>
          </Row>

          <Row className="g-3 mb-4">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Search customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>

            <Col md={3}>
              <Form.Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Blocked</option>
                <option>Inactive</option>
              </Form.Select>
            </Col>
          </Row>

          <Table responsive hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <td>Avatar</td>
                <th>Customer</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentCustomer.length > 0 ? (
                currentCustomer.map((customer) => (
                  <CustomerRow
                    key={customer.id}
                    customer={customer}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted py-4">
                    No customers found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
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
      </Card>

      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
        <div className="text-muted">
          Showing {currentCustomer.length} of {customers.length} Customers
        </div>
      </div>
    </>
  );
}

export default CustomerTable;
