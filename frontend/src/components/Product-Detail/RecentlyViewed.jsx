import { useMemo } from 'react';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';

import { ClockHistory, StarFill } from 'react-bootstrap-icons';

function RecentlyViewed() {
  const recentlyViewed = useMemo(
    () => [
      {
        id: 1,
        name: 'Premium Linen Shirt',
        price: 2299,
        rating: 4.7,
        image:
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
        viewedAt: '5 min ago',
      },
      {
        id: 2,
        name: 'Classic Polo T-Shirt',
        price: 1899,
        rating: 4.6,
        image:
          'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
        viewedAt: '20 min ago',
      },
      {
        id: 3,
        name: 'Luxury Denim Jacket',
        price: 4499,
        rating: 4.9,
        image:
          'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
        viewedAt: '1 hour ago',
      },
      {
        id: 4,
        name: 'Modern Overshirt',
        price: 3199,
        rating: 4.8,
        image:
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
        viewedAt: 'Yesterday',
      },
      {
        id: 5,
        name: 'Slim Fit Chinos',
        price: 2599,
        rating: 4.5,
        image:
          'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
        viewedAt: 'Yesterday',
      },
    ],
    [],
  );

  return (
    <Container className="py-5">
      <div className="d-flex align-items-start mb-4">
        <ClockHistory size={26} className="me-3 mt-1 text-secondary" />
        <div>
          <h2 className="fw-bold mb-1">Recently Viewed</h2>
          <p className="text-muted mb-0">
            Continue exploring items you've viewed recently.
          </p>
        </div>
      </div>
      <div className="position-relative w-100">
        <Row
          className="flex-nowrap overflow-auto pb-3 g-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          {recentlyViewed.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4} xl={3}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div style={{ height: '280px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Badge
                    bg="light"
                    text="secondary"
                    className="border fw-normal mb-3 align-self-start py-1.5 px-3"
                  >
                    {product.viewedAt}
                  </Badge>

                  <Card.Title
                    className="fw-semibold fs-5 lh-sm mb-3"
                    style={{
                      minHeight: '48px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {product.name}
                  </Card.Title>

                  <div className="d-flex align-items-center mb-3">
                    <StarFill className="text-warning me-2" size={16} />
                    <span className="text-muted fw-medium ms-1">
                      {product.rating}
                    </span>
                  </div>

                  <div className="fw-bold fs-4 mt-auto text-dark">
                    ₹{product.price.toString()}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default RecentlyViewed;
