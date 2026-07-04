import { Badge } from 'react-bootstrap';

function ProductStatus({ status }) {
  const statusConfig = {
    Active: {
      bg: 'success',
      icon: 'bi-check-circle-fill',
      label: 'Active',
    },
    Draft: {
      bg: 'warning',
      text: 'dark',
      icon: 'bi-file-earmark-text-fill',
      label: 'Draft',
    },
    Inactive: {
      bg: 'secondary',
      icon: 'bi-pause-circle-fill',
      label: 'Inactive',
    },
    OutOfStock: {
      bg: 'danger',
      icon: 'bi-x-circle-fill',
      label: 'Out of Stock',
    },
  };

  const config = statusConfig[status] || {
    bg: 'secondary',
    icon: 'bi-question-circle-fill',
    label: status,
  };

  return (
    <Badge bg={config.bg} text={config.text} pill className="px-3 py-2">
      <i className={`${config.icon} me-1`}></i>
      {config.label}
    </Badge>
  );
}

export default ProductStatus;
