import { Button, Row, Col, Card, Stack } from 'react-bootstrap';
import {
  Bag,
  LightningCharge,
  Heart,
  HeartFill,
  Share,
} from 'react-bootstrap-icons';

import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist } from '../../features/ProductDetailSlice';

function PurchaseActions() {
  const dispatch = useDispatch();
  const isWishlisted = useSelector((state) => state.productdetail.wishlist);
  const handleWishlist = () => {
    dispatch(toggleWishlist());
  };

  const handleAddToCart = () => {
    console.log('Added to cart');
  };

  const handleBuyNow = () => {
    console.log('Buy Now');
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Premium Cotton Overshirt',
          text: "Check out this premium men's fashion product.",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Product link copied to clipboard.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="purchase-actions">
      <Stack gap={3}>
        <Button
          size="lg"
          variant="dark"
          className="rounded-4 py-3 fw-semibold"
          onClick={handleAddToCart}
        >
          <Bag className="me-2" />
          Add to Cart
        </Button>

        <Button
          size="lg"
          variant="outline-dark"
          className="rounded-4 py-3 fw-semibold"
          onClick={handleBuyNow}
        >
          <LightningCharge className="me-2" />
          Buy Now
        </Button>
      </Stack>

      <Row className="g-3 mt-3">
        <Col xs={6}>
          <Button
            variant="light"
            className="w-100 h-100 border rounded-4 py-3 d-flex flex-column align-items-center justify-content-center"
            onClick={handleWishlist}
          >
            {isWishlisted ? (
              <HeartFill
                size={20}
                className="text-danger"
                style={{ pointerEvents: 'none' }}
              />
            ) : (
              <Heart size={28} />
            )}
            <div className="fs-5 fw-semibold mt-2">Wishlist</div>
          </Button>
        </Col>

        <Col xs={6}>
          <Button
            variant="light"
            className="w-100 h-100 border rounded-4 py-3"
            onClick={handleShare}
          >
            <Share size={28} />

            <div className="fs-5 fw-semibold mt-2">Share</div>
          </Button>
        </Col>
      </Row>

      <Card className="border-0 bg-light rounded-4 mt-4">
        <Card.Body>
          <Row className="text-center">
            <Col xs={4}>
              <h6 className="fw-semibold mb-1">Secure</h6>
              <small className="text-muted">Checkout</small>
            </Col>

            <Col xs={4}>
              <h6 className="fw-semibold mb-1">Easy</h6>
              <small className="text-muted">Returns</small>
            </Col>

            <Col xs={4}>
              <h6 className="fw-semibold mb-1">Fast</h6>
              <small className="text-muted">Delivery</small>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PurchaseActions;
