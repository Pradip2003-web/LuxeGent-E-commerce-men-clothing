import { Image, Button, Stack } from 'react-bootstrap';
import ProductStatus from './ProductStatus';

function ProductRow({ product, onView, onDelete }) {
  return (
    <tr>
      <td>{product.id}</td>

      <td>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={60}
            height={60}
            rounded
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div
            className="bg-light rounded d-flex align-items-center justify-content-center"
            style={{
              width: '60px',
              height: '60px',
            }}
          >
            <i className="bi bi-image text-muted"></i>
          </div>
        )}
      </td>

      <td className="fw-semibold">{product.name}</td>

      <td>{product.category}</td>

      <td>{product.brand}</td>

      <td>₹{product.price}</td>

      <td>{product.discount}%</td>

      <td>
        {product.stock <= 10 ? (
          <span className="text-danger fw-bold">{product.stock}</span>
        ) : (
          product.stock
        )}
      </td>

      <td>
        <ProductStatus status={product.status} />
      </td>

      <td>{product.created}</td>

      <td>
        <Stack direction="horizontal" gap={2}>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => onView(product)}
          >
            <i className="bi bi-eye"></i>
          </Button>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(product.id)}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </Stack>
      </td>
    </tr>
  );
}

export default ProductRow;
