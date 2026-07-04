import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack } from 'react-bootstrap';
import {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} from '../../features/wishlistSlice';

function WishlistControls({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlistItems.some((item) => item.id === product?.id);

  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Button
        variant="success"
        onClick={() => dispatch(addToWishlist(product))}
      >
        <i className="bi bi-heart-plus me-2"></i>
        Add Wishlist
      </Button>

      <Button
        variant="danger"
        onClick={() => dispatch(removeFromWishlist(product.id))}
      >
        <i className="bi bi-heartbreak me-2"></i>
        Remove Wishlist
      </Button>

      <Button
        variant={isWishlisted ? 'warning' : 'outline-warning'}
        onClick={() => dispatch(toggleWishlist(product))}
      >
        <i
          className={`bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'} me-2`}
        ></i>

        {isWishlisted ? 'Remove From Wishlist' : 'Add To Wishlist'}
      </Button>

      <Button variant="dark" onClick={() => dispatch(clearWishlist())}>
        <i className="bi bi-trash me-2"></i>
        Clear Wishlist
      </Button>
    </Stack>
  );
}

export default WishlistControls;
