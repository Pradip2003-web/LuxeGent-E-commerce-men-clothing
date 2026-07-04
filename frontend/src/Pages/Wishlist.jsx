import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../features/WishlistSlice';
import { addToCart } from '../features/CartSlice';

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistIds = useSelector((state) => state.wishlist.items);

  const products = useSelector((state) => state.shops.products);

  const wishlistProducts = products.filter((product) =>
    wishlistIds.includes(product.id),
  );

  return (
    <section className="py-5 bg-light min-vh-100">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">My Wishlist</h2>

            <p className="text-muted mb-0">
              {wishlistProducts.length} item(s) saved
            </p>
          </div>

          <div className="fs-2 text-danger">
            <i className="bi bi-heart-fill"></i>
          </div>
        </div>

        {wishlistProducts.length === 0 ? (
          <Card className="border-0 shadow-sm rounded-4 text-center py-5">
            <Card.Body>
              <i className="bi bi-heart display-1 text-secondary mb-4"></i>

              <h3 className="fw-bold">Your Wishlist Is Empty</h3>

              <p className="text-muted">
                Save your favorite products to view them later.
              </p>

              <Button as={Link} to="/shop" variant="dark" className="px-4">
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <Row className="g-4">
            {wishlistProducts.map((product) => (
              <Col lg={4} md={6} key={product.id}>
                <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                  <div className="position-relative">
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
                      -{product.discount}%
                    </Badge>
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{product.name}</Card.Title>

                    <Card.Text className="text-muted mb-2">
                      {product.brand}
                    </Card.Text>

                    <div className="mb-3">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      {product.rating}
                    </div>

                    <div className="mb-3">
                      <span className="fs-5 fw-bold">₹{product.price}</span>

                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{product.oldPrice}
                      </span>
                    </div>

                    <div className="mb-3">
                      {product.sizes.map((size) => (
                        <Badge
                          key={size}
                          bg="light"
                          text="dark"
                          className="border me-2 px-3 py-2"
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto d-grid gap-2">
                      <Button
                        variant="dark"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        <i className="bi bi-cart-plus me-2"></i>
                        Add To Cart
                      </Button>

                      <Button
                        variant="outline-danger"
                        onClick={() => dispatch(toggleWishlist(product.id))}
                      >
                        <i className="bi bi-trash me-2"></i>
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default Wishlist;
