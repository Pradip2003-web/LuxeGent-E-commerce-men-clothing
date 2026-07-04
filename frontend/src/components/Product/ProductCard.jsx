import { Card, Button, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlist, removeWishlist } from '../../features/WishlistSlice';
import { Link } from 'react-router-dom';

function ProductCard({ product, onQuickView }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeWishlist(product.id));
    } else {
      dispatch(addWishlist(product));
    }
  };

  return (
    <Card
      className="h-100 border-0 shadow-sm rounded-4 m-2 mt-4 overflow-hidden d-flex flex-column"
      style={{ width: '100%', maxWidth: '300px', maxHeight: '600px' }}
    >
      <div
        className="position-relative w-100"
        style={{ aspectRatio: '4/5', overflow: 'hidden' }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="img-fluid rounded-4"
          style={{
            width: '100%',
            height: '340px',
            objectFit: 'cover',
          }}
        />

        <div className="position-absolute top-0 start-0 p-3 d-flex flex-column gap-2">
          {product.isNew && <Badge bg="dark">NEW</Badge>}
          {product.sale && <Badge bg="danger">SALE</Badge>}
          {product.bestSeller && (
            <Badge bg="warning" text="dark">
              BEST SELLER
            </Badge>
          )}
        </div>

        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3 rounded-circle shadow-sm d-flex align-items-center justify-content-center"
          style={{
            width: '40px',
            height: '40px',
            zIndex: 2,
          }}
          onClick={toggleWishlist}
        >
          <i
            className={
              isWishlisted ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'
            }
          />
        </Button>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
          <Button
            variant="dark"
            className="rounded-pill px-3 shadow text-nowrap"
            onClick={() => onQuickView(product)}
          >
            Quick View
          </Button>

          <Button
            as={Link}
            to={`/product/${product.id}`}
            variant="outline-dark"
            className="rounded-pill px-3 shadow text-nowrap"
          >
            <i className="bi bi-eye me-1"></i>
            View Details
          </Button>
        </div>
      </div>

      <Card.Body className="d-flex flex-column p-3 flex-grow-1">
        <small className="text-muted text-uppercase tracking-wider fs-7">
          {product.brand}
        </small>

        <Card.Title
          className="fw-bold mt-1 mb-2 text-truncate"
          title={product.name}
          style={{ fontSize: '1.1rem' }}
        >
          {product.name}
        </Card.Title>

        <div className="text-warning mb-2 fs-6">
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
        </div>

        <div className="d-flex align-items-center gap-2 mb-3 mt-auto">
          <span className="fw-bold fs-5 text-dark">₹{product.price}</span>
          {product.oldPrice && (
            <span className="text-muted text-decoration-line-through fs-7">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        <Link
          to="/cart"
          className="btn btn-dark w-100 rounded-pill py-2 fw-semibold"
        >
          <i className="bi bi-cart-plus me-2"></i>
          Add to Cart
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
