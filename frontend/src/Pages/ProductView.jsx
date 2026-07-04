import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    name: 'Premium Black T-Shirt',
    category: 'T-Shirts',
    brand: 'Nike',
    price: 1299,
    discount: 20,
    stock: 45,
    status: 'Active',
    description:
      'Premium quality cotton t-shirt with modern fit and soft fabric.',
    created: '15 Jun 2026',
    sku: 'TS-1001',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
    name: 'Blue Denim Jeans',
    category: 'Jeans',
    brand: 'Levis',
    price: 2499,
    discount: 15,
    stock: 12,
    status: 'Active',
    description: 'Slim fit denim jeans designed for comfort and style.',
    created: '12 Jun 2026',
    sku: 'JN-2055',
  },
];

function ProductView() {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h3>Product Not Found</h3>

        <Button as={Link} to="/admin/products" variant="dark">
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">{product.name}</h2>

          <p className="text-muted mb-0">Product Details & Information</p>
        </div>

        <div>
          <Button
            as={Link}
            to={`/admin/edit-product/${product.id}`}
            variant="dark"
            className="me-2"
          >
            <i className="bi bi-pencil me-2"></i>
            Edit Product
          </Button>

          <Button as={Link} to="/admin/products" variant="outline-secondary">
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </Button>
        </div>
      </div>

      <Row className="g-4">
        <Col lg={4}>
          <Card className="border-0 shadow-sm rounded-4">
            <Card.Body>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded-4"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-4">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-4">Product Information</h4>

              <Row className="g-4">
                <Col md={6}>
                  <h6 className="text-muted">Product Name</h6>
                  <p className="fw-semibold">{product.name}</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">Category</h6>
                  <p>{product.category}</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">Brand</h6>
                  <p>{product.brand}</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">SKU</h6>
                  <p>{product.sku}</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">Price</h6>
                  <p className="fw-bold text-success">₹{product.price}</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">Discount</h6>
                  <p>{product.discount}%</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">Stock</h6>
                  <p>{product.stock} Units</p>
                </Col>

                <Col md={6}>
                  <h6 className="text-muted">Status</h6>

                  <Badge
                    bg={product.status === 'Active' ? 'success' : 'danger'}
                  >
                    {product.status}
                  </Badge>
                </Col>

                <Col md={12}>
                  <h6 className="text-muted">Description</h6>

                  <p>{product.description}</p>
                </Col>

                <Col md={12}>
                  <h6 className="text-muted">Created Date</h6>

                  <p>{product.created}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductView;
