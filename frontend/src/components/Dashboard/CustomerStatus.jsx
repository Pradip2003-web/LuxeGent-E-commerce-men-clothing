import { Badge } from 'react-bootstrap';

function CustomerStatus({ status }) {
  const statusConfig = {
    Active: {
      bg: 'success',
      icon: 'bi-check-circle-fill',
    },
    Blocked: {
      bg: 'danger',
      icon: 'bi-slash-circle-fill',
    },
    Inactive: {
      bg: 'secondary',
      icon: 'bi-pause-circle-fill',
    },
  };

  const config = statusConfig[status] || {
    bg: 'secondary',
    icon: 'bi-question-circle-fill',
  };

  return (
    <Badge bg={config.bg} pill className="px-3 py-2">
      <i className={`${config.icon} me-1`}></i>
      {status}
    </Badge>
  );
}

export default CustomerStatus;
