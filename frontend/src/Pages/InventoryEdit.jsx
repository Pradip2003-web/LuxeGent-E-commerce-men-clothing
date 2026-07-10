import { Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function InventoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    category: "",
    sku: "",
    stock: "",
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchInventory();
  }, [id]);

  const fetchInventory = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/inventory/${id}`)
      const item = res.data.data;
      setFormData({
        image: null,
        name: item.name || "",
        category: item.category || "",
        sku: item.sku || "",
        stock: item.stock || "",
      });

      setPreview(item.image || "");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const data = new FormData();
       data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("sku", formData.sku);
      data.append("stock", formData.stock);

      if (formData.image) {
        data.append("image", formData.image);
      }
      await axios.put(`http://localhost:5000/api/inventory/update/${id}`);
        
      navigate("/admin/inventory");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <Card className="shadow-sm border-0 rounded-4">
      <Card.Body className="p-4">
        <h3 className="fw-bold mb-4">Edit Inventory</h3>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Product Image</Form.Label>

                <Form.Control
                  type="file"
                  name="image"
                  accept="image"
                  onChange={handleChange}
                />

                {preview && (
                  <div className="mt-3">
                    <Image
                      src={preview}
                      width={150}
                      height={150}
                      rounded
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex gap-2">
            <Button type="submit" variant="dark">
              Save Changes
            </Button>

            <Button variant="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default InventoryEdit;
