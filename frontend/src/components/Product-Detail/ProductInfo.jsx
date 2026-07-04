import { Card, Badge, Stack } from 'react-bootstrap';
import { StarFill, PatchCheckFill } from 'react-bootstrap-icons';

import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import PurchaseActions from './PurchaseActions';

function ProductInfo() {
  const product = {
    title: 'Premium Cotton Overshirt',
    brand: 'Luxury Collection',
    description:
      'Crafted from ultra-soft, breathable long-staple premium cotton, this versatile overshirt bridges the gap between casual layering and refined tailoring. Features a classic button-down front, dual utility chest pockets, and adjustable button cuffs. Perfect for multi-season wear.',
    rating: 4.8,
    reviews: 1248,
    currentPrice: 2999,
    originalPrice: 4999,
    discount: 40,
    badges: ['New Arrival', 'Best Seller', 'Sale', 'Limited Edition'],
  };

  const savings = product.originalPrice - product.currentPrice;

  return (
    <Card className="border-0 shadow-sm rounded-4">
      <Card.Body className="p-4 p-lg-5">
        <small className="text-uppercase text-muted fw-semibold">
          {product.brand}
        </small>

        <h1 className="fw-bold mt-2 mb-3 display-6">{product.title}</h1>
        <p className="text-secondary mt-2 mb-4 lh-base fs-6">
          {product.description}
        </p>
        <Stack direction="horizontal" gap={3} className="flex-wrap mb-4">
          <div className="d-flex align-items-center text-warning">
            <StarFill className="me-2" />
            <span className="fw-semibold">{product.rating}</span>
          </div>

          <span className="text-muted">
            ({product.reviews.toLocaleString()} Reviews)
          </span>

          <div className="d-flex align-items-center text-success">
            <PatchCheckFill className="me-2" />
            <small className="fw-semibold">Verified Product</small>
          </div>
        </Stack>

        <div className="mb-4">
          <Stack
            direction="horizontal"
            gap={3}
            className="flex-wrap align-items-end"
          >
            <h2 className="fw-bold mb-0">
              ₹{product.currentPrice.toLocaleString()}
            </h2>

            <span className="fs-5 text-muted text-decoration-line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>

            <Badge bg="dark" pill className="px-3 py-2">
              {product.discount}% OFF
            </Badge>
          </Stack>

          <small className="text-success d-block mt-2">
            You save ₹{savings.toLocaleString()}
          </small>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {product.badges.map((badge) => (
            <Badge
              key={badge}
              bg="light"
              text="dark"
              pill
              className="border px-3 py-2"
            >
              {badge}
            </Badge>
          ))}
        </div>

        <hr />

        <div className="mb-4">
          <ColorSelector />
        </div>

        <div className="mb-4">
          <SizeSelector />
        </div>

        <div className="mb-4">
          <QuantitySelector />
        </div>

        <div className="mt-5">
          <PurchaseActions />
        </div>

        <Card className="mt-4 border-0 bg-light rounded-4">
          <Card.Body>
            <p className="text-muted mb-0">
              Crafted with premium cotton blend fabric for everyday luxury,
              breathable comfort, and timeless styling. Designed to pair
              effortlessly with denim, chinos, or tailored trousers.
            </p>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default ProductInfo;
