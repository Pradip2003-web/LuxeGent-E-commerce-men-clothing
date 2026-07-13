import { Image, Badge, Button } from "react-bootstrap";
import InventoryView from "../../Pages/Inventoryview";

function InventoryRow({ item, onDelete, onView }) {
  const getStatus = () => {
    if (item.stock === 0) {
      return { text: "Out of Stock", bg: "danger", level: "Out of Stock" };
    }

    if (item.stock <= 10) {
      return { text: "Low Stock", bg: "warning", level: "Low" };
    }

    return { text: "In Stock", bg: "success", level: "High" };
  };

  const status = getStatus();

  return (
    <tr className="align-middle">
      <td className="text-muted fw-medium" style={{ width: 80 }}>
        {item._id.slice(-6).toLowerCase()}
      </td>

      <td>
        <div className="d-flex align-items-center gap-2">
          {item.image ? (
            <Image
              src={"http://localhost:5000/uploads/"+item.image}
              alt={item.name}
              accept="image"
              width={45}
              height={45}
              rounded
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              className="bg-light border rounded d-flex align-items-center justify-content-center text-muted"
              style={{ width: 45, height: 45, fontSize: 11 }}
            >
              No Img
            </div>
          )}
        </div>
      </td>

      <td>
        <div>
          <div className="fw-semibold">{item.name}</div>
          <small className="text-muted">{item.category}</small>
        </div>
      </td>

      <td className=" text-secondary">{item.sku}</td>

      <td className="fw-semibold">{item.stock}</td>

      <td className="text-muted">{status.level}</td>

      <td>
        <Badge bg={status.bg} pill>
          {status.text}
        </Badge>
      </td>

      <td className="text-end">
        <div className="d-flex justify-content-end gap-2">
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => onView(item)}
          >
            <i className="bi bi-eye"></i>
          </Button>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(item._id)}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default InventoryRow;
