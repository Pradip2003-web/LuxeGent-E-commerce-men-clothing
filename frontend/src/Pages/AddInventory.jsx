import axios from "axios";
import { useState } from "react";
import { Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

function AddInventory({ onAddStock }) {
  const initialState = {
    name: "",
    sku: "",
    category: "",
    stock: "",
    image: "",
  };

  const [form, setForm] = useState(initialState);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, sku, category, stock, image } = form;
    try {
      const res = await axios.post(
        "http://localhost:5000/api/inventory/create",
        {
          name,
          sku,
          category,
          stock,
          image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success("Add Item Successfully!");
      setForm(initialState);
      setPreview(null);
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("failed item add");
    }

    setForm(initialState);
    setPreview(null);
    e.target.reset();
  };

  return (
    <Card className="p-4 shadow-sm border-0">
      <h5 className="mb-3 fw-bold">Add Stock</h5>

      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Control
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
            <Form.Control
              name="sku"
              placeholder="SKU"
              value={form.sku}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
            <Form.Control
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={6}>
            <Form.Control
              type="number"
              name="stock"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </Col>

          <Col md={12}>
            <Form.Control type="file" accept="image" onChange={handleImage} />
          </Col>

          {preview && (
            <Col md={12}>
              <Image src={preview} width={120} height={120} rounded />
            </Col>
          )}

          <Col md={12} className="d-flex justify-content-end gap-2">
            <Button
              variant="light"
              onClick={() => {
                setForm(initialState);
                setPreview(null);
              }}
            >
              Reset
            </Button>

            <Button type="submit" variant="dark">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      <ToastContainer />
    </Card>
  );
}

export default AddInventory;
