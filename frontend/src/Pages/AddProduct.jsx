import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";

const FormInfo = {
  productName: "",
  shortDescription: "",
  description: "",
  mrp: "",
  sellingPrice: "",
  discount: "",
  tax: "",
  costPrice: "",
  category: "",
  brand: "",
  sku: "",
  stock: "",
  lowStock: "",
  metaTitle: "",
  metaDescription: "",
  keywords: "",
};
const AddProduct = () => {
  const [formData, setFormData] = useState(FormInfo);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [images, setImages] = useState([]);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "White", "Blue", "Olive", "Beige"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((item) => item !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((item) => item !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleImage = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = () => {
    const product = {
      ...formData,
      sizes: selectedSizes,
      colors: selectedColors,
      images,
    };
    console.log(product);
  };
  const handleCancel = () => {
    setFormData(FormInfo);
    setSelectedSizes([]);
    setSelectedColors([]);
    setImages([]);
  };

  return (
    <>
      <Container fluid className="py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">
              <i className="bi bi-box-seam me-2"></i>
              Add Product
            </h2>
          </div>

          <div>
            <Button variant="secondary" className="me-2">
              <i className="bi bi-save me-2"></i>
              Save Draft
            </Button>

            <Button variant="success" className="me-2" onClick={handleSubmit}>
              <i className="bi bi-cloud-upload me-2"></i>
              Publish Product
            </Button>

            <Button variant="danger" onClick={handleCancel}>
              <i className="bi bi-x-circle me-2"></i>
              Cancel
            </Button>
          </div>
        </div>

        <Card className="shadow-sm mb-4">
          <Card.Header className="fw-bold">
            <i className="bi bi-info-circle me-2"></i>
            Basic Information
          </Card.Header>

          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="shadow-sm mb-4">
          <Card.Header className="fw-bold">
            <i className="bi bi-currency-rupee me-2"></i>
            Pricing
          </Card.Header>

          <Card.Body>
            <Row>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>MRP</Form.Label>
                  <Form.Control
                    type="number"
                    name="mrp"
                    value={formData.mrp}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="sellingPrice"
                    value={formData.sellingPrice}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Discount %</Form.Label>
                  <Form.Control
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Tax</Form.Label>
                  <Form.Control
                    type="number"
                    name="tax"
                    value={formData.tax}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Cost Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="costPrice"
                    value={formData.costPrice}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow-sm mb-4">
          <Card.Header className="fw-bold">
            <i className="bi bi-boxes me-2"></i>
            Category & Inventory
          </Card.Header>

          <Card.Body>
            <Row>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label>Low Stock Alert</Form.Label>
                  <Form.Control
                    name="lowStock"
                    value={formData.lowStock}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow-sm mb-4">
          <Card.Header className="fw-bold">
            <i className="bi bi-palette me-2"></i>
            Variants
          </Card.Header>

          <Card.Body>
            <Form.Label className="fw-bold">Sizes</Form.Label>

            <div className="mb-4">
              {sizes.map((size) => (
                <Button
                  key={size}
                  className="me-2 mb-2"
                  variant={
                    selectedSizes.includes(size) ? "dark" : "outline-dark"
                  }
                  onClick={() => handleSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>

            <Form.Label className="fw-bold">Colors</Form.Label>

            <div>
              {colors.map((color) => (
                <Button
                  key={color}
                  className="me-2 mb-2"
                  variant={
                    selectedColors.includes(color)
                      ? "dark"
                      : "outline-dark"
                  }
                  onClick={() => handleColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card className="shadow-sm mb-4">
          <Card.Header className="fw-bold">
            <i className="bi bi-images me-2"></i>
            Product Images
          </Card.Header>

          <Card.Body>
            <Form.Control type="file" multiple onChange={handleImage} />

            <Row className="mt-3">
              {images.map((img, index) => (
                <Col md={2} key={index} className="mb-3">
                  <Image src={URL.createObjectURL(img)} thumbnail fluid />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow-sm mb-4">
          <Card.Header className="fw-bold">
            <i className="bi bi-search me-2"></i>
            SEO
          </Card.Header>

          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Meta Title</Form.Label>
              <Form.Control
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Meta Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AddProduct;
