import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

const Products = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    ],
    name: "Premium Black T-Shirt",
    category: "T-Shirts",
    brand: "Nike",
    price: 1299,
    discount: 20,
    stock: 45,
    status: "Active",
    created: "15 Jun 2026",
  },
  {
    id: 2,
    images: [],
    name: "Blue Denim Jeans",
    category: "Jeans",
    brand: "Levis",
    price: 2499,
    discount: 15,
    stock: 12,
    status: "Active",
    created: "12 Jun 2026",
  },
];

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = Products.find((item) => item.id === parseInt(id, 10));

  const [formData, setFormData] = useState({
    name: product ? product.name : "",
    images: product
      ? Array.isArray(product.images)
        ? product.images
        : product.image
          ? [product.image]
          : [""]
      : [""],
    category: product ? product.category : "",
    brand: product ? product.brand : "",
    price: product ? product.price : "",
    discount: product ? product.discount : "",
    stock: product ? product.stock : "",
    status: product ? product.status : "Active",
  });

  useEffect(() => {
    if (!product) {
      navigate("/admin/products");
    }
  }, [product, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUrlChange = (index, value) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };

  const addImageField = () => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const removeImageField = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images.slice(0, index), ...prev.images.slice(index + 1)],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanImages = formData.images.filter((url) => url.trim() !== "");

    console.log("Updated Product:", {
      id: parseInt(id, 10),
      ...formData,
      images: cleanImages,
    });

    navigate("/admin/products");
  };

  return (
    <Container className="py-4" style={{ maxWidth: "800px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Edit Product</h2>
          <small className="text-muted">Modifying Product ID: #{id}</small>
        </div>

        <Button as={Link} to="/admin/products" variant="outline-secondary">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Products
        </Button>
      </div>

      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={12}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Form.Label className="fw-semibold mb-0">
                    Product Images
                  </Form.Label>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={addImageField}
                  >
                    <i className="bi bi-plus-lg me-1"></i> Add Image URL
                  </Button>
                </div>

                {formData.images.map((url, index) => (
                  <div key={index} className="p-3 mb-3 border rounded bg-light">
                    <Row className="align-items-center g-2">
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder={`Enter image URL #${index + 1}`}
                          value={url}
                          onChange={(e) =>
                            handleImageUrlChange(index, e.target.value)
                          }
                        />
                      </Col>
                      <Col xs="auto">
                        <Button
                          variant="outline-danger"
                          onClick={() => removeImageField(index)}
                          disabled={formData.images.length === 1 && !url}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </Col>
                    </Row>

                    {url && (
                      <div className="mt-2 text-start">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          style={{
                            maxHeight: "80px",
                            borderRadius: "6px",
                            objectFit: "contain",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product title"
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Shirts">Shirts</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Brand</Form.Label>
                  <Form.Select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Brand</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Zara">Zara</option>
                    <option value="Levis">Levi's</option>
                    <option value="H&M">H&M</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Price (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Discount (%)</Form.Label>
                  <Form.Control
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    min="0"
                    max="100"
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Stock Qty</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Availability Status
                  </Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="OutOfStock">Out of Stock</option>
                    <option value="Archived">Archived</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <hr className="my-4" />

            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="light"
                onClick={() => navigate("/admin/products")}
              >
                Cancel
              </Button>
              <Button type="submit" variant="dark">
                Save Changes
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductEdit;
