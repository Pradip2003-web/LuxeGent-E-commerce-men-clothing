import { Badge } from 'react-bootstrap';

function OrderStatus({ status }) {
  const statusConfig = {
    Pending: {
      bg: 'warning',
      icon: 'bi-clock-fill',
      text: 'dark',
    },
    Processing: {
      bg: 'info',
      icon: 'bi-arrow-repeat',
    },
    Shipped: {
      bg: 'primary',
      icon: 'bi-truck',
    },
    Delivered: {
      bg: 'success',
      icon: 'bi-check-circle-fill',
    },
    Cancelled: {
      bg: 'danger',
      icon: 'bi-x-circle-fill',
    },
  };

  const config = statusConfig[status] || {
    bg: 'secondary',
    icon: 'bi-question-circle-fill',
  };

  return (
    <Badge bg={config.bg} text={config.text} pill className="px-3 py-2">
      <i className={`${config.icon} me-1`}></i>
      {status}
    </Badge>
  );
}

export default OrderStatus;
