import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Image, Badge } from "react-bootstrap";

function InventoryView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/inventory/${id}`);
      setItem(res.data.data);
    } catch (error) {
      console.error("Failed to fetch item:", error);
    }
  };

  if (!item) {
    return <p className="text-center mt-5">Item not found</p>;
  }

  const getStatus = () => {
    if (item.stock === 0) return { text: "Out of Stock", bg: "danger" };
    if (item.stock <= 10) return { text: "Low Stock", bg: "warning" };
    return { text: "In Stock", bg: "success" };
  };

  const status = getStatus();

  return (
    <Card className="p-4 shadow-sm mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Inventory Details</h4>

        <div>
          <Button
            as={Link}
            to={`/admin/edit-inventory/${item._id}`}
            variant="dark"
            className="me-2"
          >
            <i className="bi bi-pencil me-2"></i>
            Edit Inventory
          </Button>

          <Button as={Link} to="/admin/inventory" variant="outline-secondary">
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </Button>
        </div>
      </div>

      <div className="d-flex gap-4">
        {/* {item.image && ( */}
          <Image
            src={"http://localhost:5000/uploads/"+item.image}
            width={150}
            height={150}
            rounded
            style={{ objectFit: "cover" }}
          />
        {/* )} */}

        <div>
          <h5>{item.name}</h5>
          <p className="text-muted">{item.category}</p>

          <p>
            <strong>SKU:</strong> {item.sku}
          </p>
          <p>
            <strong>Stock:</strong> {item.stock}
          </p>

          <Badge bg={status.bg}>{status.text}</Badge>
        </div>
      </div>
    </Card>
  );
}

export default InventoryView;
