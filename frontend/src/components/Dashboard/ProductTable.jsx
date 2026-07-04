import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import ProductRow from "./ProductRow";
import ProfileCard from "./ProfileCard";

const products = [
  {
    id: 1,
    image: "",
    name: "Premium Black T-Shirt",
    category: "T-Shirts",
    brand: "Nike",
    price: 1299,
    discount: 20,
    stock: 45,
    status: "Active",
    created: "15 Jun 2026",
  },
  {
    id: 2,
    image: "",
    name: "Blue Denim Jeans",
    category: "Jeans",
    brand: "Levis",
    price: 2499,
    discount: 15,
    stock: 12,
    status: "Active",
    created: "12 Jun 2026",
  },
  {
    id: 3,
    image: "",
    name: "Olive T-shirt",
    category: "T-shirt",
    brand: "H&M",
    price: 1999,
    discount: 10,
    stock: 0,
    status: "OutOfStock",
    created: "10 Jun 2026",
  },
];
const product_per_page = 2;
const ProductTable = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [productlist, setproductslist] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const checkPrice = (item) => {
    if (!price) return true;
    if (price === "below1000") return item.price < 1000;
    if (price === "1000to3000") return item.price >= 1000 && item.price <= 3000;
    if (price === "above3000") return item.price > 3000;
  };

  const checkStock = (item) => {
    if (!stock) return true;
    if (stock === "in") return item.stock > 10;
    if (stock === "low") return item.stock > 0 && item.stock <= 10;
    if (stock === "out") return item.stock === 0;
  };
  const filteredProducts = productlist.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (!category || item.category === category) &&
      (!brand || item.brand === brand) &&
      checkPrice(item) &&
      checkStock(item),
  );

  const handleView = (product) => {
    navigate(`/admin/view-product/${product.id}`);
  };

  const handleDelete = (id) => {
    setproductslist((prevProducts) =>
      prevProducts.filter((item) => item.id !== id),
    );
  };
  const totalPages = Math.ceil(filteredProducts.length / product_per_page);
  const indexOfLastProduct = currentPage * product_per_page;
  const indexOfFirstProduct = indexOfLastProduct - product_per_page;

  const currentProduct = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <Container fluid className="py-4">
      <Row className="align-items-center mb-4">
        <Col md={8} sm={12}>
          <h2 className="fw-bold mb-0">Products</h2>
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
          <Button as={Link} to="/admin/add-product" variant="dark">
            <i className="bi bi-plus-circle me-2"></i>
            Add Product
          </Button>
        </Col>
      </Row>

      <Card className="border-0 shadow-sm rounded-4 mb-4">
        <Card.Body>
          <Row className="g-2">
            <Col lg={3}>
              <Form.Control
                placeholder="Search Product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>

            <Col lg={2}>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                <option value="Shirt">Shirt</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jacket">Jacket</option>
              </Form.Select>
            </Col>

            <Col lg={2}>
              <Form.Select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Brand</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Zara">Zara</option>
                <option value="Levis">Levi's</option>
                <option value="H&M">H&M</option>
                <option value="Calvin Klein">Calvin Klein</option>
              </Form.Select>
            </Col>

            <Col lg={2}>
              <Form.Select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="">Price</option>
                <option value="below1000">Below ₹1000</option>
                <option value="1000to3000">₹1000 - ₹3000</option>
                <option value="above3000">Above ₹3000</option>
              </Form.Select>
            </Col>

            <Col lg={2}>
              <Form.Select
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              >
                <option value="">Stock</option>
                <option value="in">In Stock</option>
                <option value="low">Low Stock</option>
                <option value="out">Out of Stock</option>
              </Form.Select>
            </Col>

            <Col lg={1}>
              <Button variant="outline-secondary" className="w-100">
                Reset
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm rounded-4">
        <Table responsive hover className="align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Created</th>
              <th width="220">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProduct.length > 0 ? (
              currentProduct.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  onView={handleView}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center py-4 text-muted">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </Table>

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
    </Container>
  );
};

export default ProductTable;
