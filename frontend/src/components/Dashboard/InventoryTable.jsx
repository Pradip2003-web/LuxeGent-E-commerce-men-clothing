import {
  Card,
  Button,
  Row,
  Col,
  Form,
  Table,
  Pagination,
} from "react-bootstrap";
import InventoryRow from "./InventoryRow";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import axios from "axios";

function InventoryTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inventory, setinventory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const filteredInventory = inventory.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.sku.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentInventory = filteredInventory.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handleView = (item) => {
    navigate(`/admin/view-inventory/${item._id}`);
  };

  const handleDelete =async (id) => {
    try {
    await axios.delete(`http://localhost:5000/api/inventory/delete/${id}`);

    setinventory((prev) => prev.filter((item) => item._id !== id));
  } catch (err) {
    console.error("Delete failed:", err);
  }

  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/inventory/all",
      );

      setinventory(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="border-0 shadow-sm rounded-4 mt-4 overflow-hidden">
      <Card.Body className="p-4">
        <Row className="align-items-center mb-4">
          <Col md={8} sm={12}>
            <h5 className="fw-bold mb-1">Inventory Management</h5>
            <p className="text-muted small mb-0">
              Manage your product stocks and availability.
            </p>
          </Col>

          <Col
            md={4}
            sm={12}
            className="d-flex justify-content-md-end justify-content-start mt-3 mt-md-0"
          >
            <ProfileCard />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="d-flex justify-content-end">
            <Link to="/admin/add-inventory" className="text-decoration-none">
              <Button
                variant="dark"
                className="d-flex align-items-center gap-2 px-3 py-2 fw-semibold"
              >
                <i className="bi bi-plus-lg"></i>
                Add Stock
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Group className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search product or SKU..."
                className="py-2 bg-light border-0 rounded-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Table responsive hover className="align-middle mb-0 table-borderless">
          <thead className="table-light border-bottom">
            <tr className="text-uppercase tracking-wider small text-muted">
              <th className="py-3">ID</th>
              <th className="py-3">Image</th>
              <th className="py-3">Product</th>
              <th className="py-3">SKU</th>
              <th className="py-3">Stock</th>
              <th className="py-3">Inventory Level</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-end">Action</th>
            </tr>
          </thead>

          <tbody className="border-top-0">
            {currentInventory.length > 0 ? (
              currentInventory.map((item) => (
                <InventoryRow
                  key={item._id}
                  item={item}
                  inventory={inventory}
                  onView={handleView}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-muted py-4">
                  No products found matching "{searchQuery}"
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
  );
}

export default InventoryTable;
