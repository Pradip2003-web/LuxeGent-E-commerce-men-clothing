import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';

const products = [
  {
    id: 1,
    name: 'Premium Cotton Shirt',
    category: 'Shirts',
    image: '',
    price: 1499,
    oldPrice: 1999,
    rating: 4.8,
    badge: 'New',
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    category: 'Jeans',
    image: '',
    price: 2299,
    oldPrice: 2899,
    rating: 4.7,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Casual Jacket',
    category: 'Jacket',
    image: '',
    price: 1899,
    oldPrice: 2499,
    rating: 4.9,
    badge: 'New',
  },
  {
    id: 4,
    name: 'Classic T-shirt',
    category: 'T-shirt',
    image: '',
    price: 3299,
    oldPrice: 3999,
    rating: 4.6,
    badge: 'New',
  },
];

function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Shirts', 'Jeans', 'Jacket', 'T-shirt'];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <>
    <Navbar/>
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">New Arrivals</h2>

          <p className="text-muted">
            Discover the latest trends in men's fashion.
          </p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'dark' : 'outline-dark'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col lg={3} md={6} key={product.id}>
              <Card className="border-0 shadow-sm h-100">
                <div className="position-relative overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{
                      height: '320px',
                      objectFit: 'cover',
                    }}
                  />

                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-0 m-3"
                  >
                    {product.badge}
                  </Badge>

                  <Button
                    variant="light"
                    className="rounded-circle position-absolute top-0 end-0 m-3"
                    style={{
                      width: '45px',
                      height: '45px',
                    }}
                  >
                    <i className="bi bi-heart"></i>
                  </Button>
                </div>

                <Card.Body className="d-flex flex-column">
                  <small className="text-muted">{product.category}</small>

                  <Card.Title className="mt-2">{product.name}</Card.Title>

                  <div className="mb-2">
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>

                    <span className="ms-1">{product.rating}</span>
                  </div>

                  <div className="mb-3">
                    <span className="fw-bold fs-5">₹{product.price}</span>

                    <span className="text-muted text-decoration-line-through ms-2">
                      ₹{product.oldPrice}
                    </span>
                  </div>

                  <Button variant="dark" className="w-100 mt-auto">
                    <i className="bi bi-cart-plus me-2"></i>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <Footer/>
    </>
  );
}

export default NewArrivals;
