import { Button, Image } from 'react-bootstrap';
import CustomerStatus from './CustomerStatus';
import { Link } from 'react-router-dom';

function CustomerRow({ customer, onDelete }) {
  return (
    <tr>
      <td>{customer._id}</td>
      
      <td>
        {customer.avatar ? (
          <Image
            src={customer.avatar}
            alt={customer.name}
            roundedCircle
            width={45}
            height={45}
          />
        ) : (
          <div
            className="bg-light rounded-circle"
            style={{
              width: '45px',
              height: '45px',
            }}
          />
        )}
      </td>
      <td>
        <div>
          <h6 className="mb-0 fw-semibold">{customer.name}</h6>
          <small className="text-muted">{customer.email}</small>
        </div>
      </td>

      <td>{customer.phone}</td>

      <td>{customer.orders}</td>

      <td>₹{customer.spent}</td>

      <td>{customer.joined}</td>

      <td>
        <CustomerStatus status={customer.status} />
      </td>

      <td>
        <div className="d-flex gap-2">
          <Link
            to={`/admin/customer/view/${customer.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            <i className="bi bi-eye"></i>
          </Link>

          <Link
            to={`/admin/customer/edit/${customer.id}`}
            className="btn btn-outline-success btn-sm"
          >
            <i className="bi bi-pencil"></i>
          </Link>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(customer.id)}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default CustomerRow;
