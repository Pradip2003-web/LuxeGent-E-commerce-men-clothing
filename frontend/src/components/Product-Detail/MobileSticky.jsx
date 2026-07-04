import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function MobileSticky() {
  const dispatch = useDispatch();

  const {
    selectedSize = 'M',
    quantity = 1,
    currentPrice = 0,
  } = useSelector((state) => state.product || {});

  const handleAddToCart = () => {
    dispatch({ type: 'cart/addToCart' });
    console.log('Added to Cart');
  };

  const handleBuyNow = () => {
    console.log('Buy Now');
  };

  return (
    <Card
      className="d-lg-none position-fixed bottom-0 start-0 end-0 border-0 shadow-lg rounded-top-4"
      style={{ zIndex: 1050 }}
    >
      <Card.Body className="p-3">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="flex-grow-1">
            <small className="text-muted d-block">
              Size: <span className="fw-semibold">{selectedSize}</span>
            </small>

            <h5 className="fw-bold mb-0">₹{currentPrice.toString()}</h5>

            <small className="text-muted">Quantity: {quantity}</small>
          </div>
          <div className="d-flex gap-2">
            <Button
              variant="outline-dark"
              className="rounded-pill px-3"
              onClick={handleBuyNow}
            >
              <i className="bi bi-lightning-charge-fill me-1"></i>
              Buy
            </Button>

            <Button
              variant="dark"
              className="rounded-pill px-3"
              onClick={handleAddToCart}
            >
              <i className="bi bi-bag-fill me-1"></i>
              Add
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MobileSticky;
