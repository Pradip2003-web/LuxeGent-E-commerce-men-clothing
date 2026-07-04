import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../features/ProductDetailSlice';
import { Button, ButtonGroup, Card, Stack } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';
function QuantitySelector() {
  const dispatch = useDispatch();

  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 10;

  const quantity = useSelector((state) => state.productdetail.quantity);

  const decreaseQuantity = () => {
    dispatch(decrementQuantity());
  };

  const increaseQuantity = () => {
    dispatch(incrementQuantity());
  };

  return (
    <Card className="border-0 shadow-sm rounded-4 mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold mb-0">Quantity</h6>

          <small className="text-muted">Max {MAX_QUANTITY} per order</small>
        </div>

        <ButtonGroup className="shadow-sm rounded-4 overflow-hidden" size="lg">
          <Button
            variant="light"
            disabled={quantity === MIN_QUANTITY}
            onClick={decreaseQuantity}
            className="px-4 border-end"
          >
            <Dash size={20} />
          </Button>

          <Button
            variant="white"
            disabled
            className="fw-bold px-5 text-dark bg-white border-0"
          >
            {quantity}
          </Button>

          <Button
            variant="light"
            disabled={quantity === MAX_QUANTITY}
            onClick={increaseQuantity}
            className="px-4 border-start"
          >
            <Plus size={20} />
          </Button>
        </ButtonGroup>

        <small className="text-muted d-block mt-3">
          Adjust the quantity before adding the item to your cart.
        </small>

        <Card className="border-0 bg-light rounded-4 mt-4">
          <Card.Body>
            <Stack
              direction="horizontal"
              className="justify-content-between align-items-center"
            >
              <span className="text-muted">Selected Quantity</span>

              <span className="fw-bold fs-5">{quantity}</span>
            </Stack>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default QuantitySelector;
