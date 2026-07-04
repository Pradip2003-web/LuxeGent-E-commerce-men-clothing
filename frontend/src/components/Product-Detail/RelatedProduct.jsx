import { useMemo, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Heart, HeartFill, Eye, StarFill } from 'react-bootstrap-icons';

function RelatedProducts() {
  const [wishlist, setWishlist] = useState({});

  const products = useMemo(
    () => [
      {
        id: 1,
        name: 'Classic Linen Shirt',
        price: 2499,
        rating: 4.7,
        badge: 'New',
        image: '/images/product-1.jpg',
      },
      {
        id: 2,
        name: 'Premium Oxford Shirt',
        price: 2799,
        rating: 4.8,
        badge: 'Sale',
        image: '/images/product-2.jpg',
      },
      {
        id: 3,
        name: 'Tailored Cotton Polo',
        price: 2199,
        rating: 4.6,
        badge: 'Best Seller',
        image: '/images/product-3.jpg',
      },
      {
        id: 4,
        name: 'Luxury Overshirt',
        price: 3299,
        rating: 4.9,
        badge: 'New',
        image: '/images/product-4.jpg',
      },
      {
        id: 5,
        name: 'Modern Chino Jacket',
        price: 3899,
        rating: 4.8,
        badge: 'Sale',
        image: '/images/product-5.jpg',
      },
    ],
    [],
  );

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const quickView = (product) => {
    console.log('Quick View:', product);
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold mb-1">You May Also Like</h2>

            <p className="text-muted mb-0">
              Curated recommendations based on your style.
            </p>
          </Col>
        </Row>

        <Row
          className="flex-nowrap overflow-auto pb-3 g-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card className="h-100 border-0 shadow-sm rounded-4 related-product-card">
                <div
                  className="position-relative overflow-hidden rounded-top-4"
                  style={{ height: '360px' }}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="h-100 related-product-image"
                    style={{
                      objectFit: 'cover',
                    }}
                  />

                  <Badge
                    bg="dark"
                    className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill"
                  >
                    {product.badge}
                  </Badge>

                  <Button
                    variant="light"
                    className="position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
                    style={{
                      width: '44px',
                      height: '44px',
                    }}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    {wishlist[product.id] ? (
                      <HeartFill className="text-danger" />
                    ) : (
                      <Heart />
                    )}
                  </Button>

                  <Button
                    variant="dark"
                    className="position-absolute bottom-0 start-50 translate-middle-x mb-3 rounded-pill px-4"
                    onClick={() => quickView(product)}
                  >
                    <Eye className="me-2" />
                    Quick View
                  </Button>
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-semibold mb-2">
                    {product.name}
                  </Card.Title>

                  <div className="d-flex align-items-center text-warning mb-3">
                    <StarFill className="me-2" />
                    <span>{product.rating}</span>
                  </div>

                  <h5 className="fw-bold mt-auto mb-0">
                    ₹{product.price.toString()}
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default RelatedProducts;
