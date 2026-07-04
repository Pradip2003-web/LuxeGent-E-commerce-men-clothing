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
        const payload = {
          image:formData.image,
          name: formData.name,
        category: formData.category,
        sku: formData.sku,
        stock: formData.stock,
      };
      const res = await axios.get(`http://localhost:5000/api/inventory/${id}`);

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
// import {
//   Card,
//   Form,
//   Button,
//   Row,
//   Col,
//   Image,
//   Alert,
//   Spinner,
// } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function InventoryEdit() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     image: null,
//     name: "",
//     category: "",
//     sku: "",
//     stock: "",
//   });

//   const [preview, setPreview] = useState("");
//   const [existingImage, setExistingImage] = useState("");

//   const [message, setMessage] = useState({
//     type: "",
//     text: "",
//   });

//   useEffect(() => {
//     fetchInventory();
//   }, [id]);

//   useEffect(() => {
//     return () => {
//       if (preview && preview.startsWith("blob:")) {
//         URL.revokeObjectURL(preview);
//       }
//     };
//   }, [preview]);

//   const fetchInventory = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/inventory/${id}`);

//       const item = res.data.data;

//       setFormData({
//         image: null,
//         name: item.name || "",
//         category: item.category || "",
//         sku: item.sku || "",
//         stock: item.stock || "",
//       });

//       setExistingImage(item.image);
//       setPreview(item.image);
//     } catch (err) {
//       setMessage({
//         type: "danger",
//         text: "Unable to load inventory item.",
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       const file = files[0];

//       if (!file) return;

//       const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "image/webp",
//         "image/jpg",
//       ];

//       if (!allowedTypes.includes(file.type)) {
//         setMessage({
//           type: "danger",
//           text: "Only JPG, PNG and WEBP images are allowed.",
//         });

//         return;
//       }

//       setMessage({
//         type: "",
//         text: "",
//       });

//       setFormData((prev) => ({
//         ...prev,
//         image: file,
//       }));

//       setPreview(URL.createObjectURL(file));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage({
//       type: "",
//       text: "",
//     });

//     try {
//       const payload = {
//         name: formData.name,
//         category: formData.category,
//         sku: formData.sku,
//         stock: formData.stock,
//       };

//       await axios.put(
//         `http://localhost:5000/api/inventory/update/${id}`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         },
//       );

//       setMessage({
//         type: "success",
//         text: "Inventory updated successfully.",
//       });

//       navigate("/admin/inventory");
//     } catch (err) {
//       setMessage({
//         type: "danger",
//         text: "Failed to update inventory.",
//       });
//     }
//   };

//   return (
//     <Row className="justify-content-center">
//       <Col lg={8} md={10}>
//         <Card className="shadow border-0 rounded-4">
//           <Card.Body className="p-4">
//             <h3 className="fw-bold mb-4">Edit Inventory</h3>

//             {message.text && (
//               <Alert variant={message.type}>{message.text}</Alert>
//             )}

//             <Form onSubmit={handleSubmit}>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-4">
//                     <Form.Label>Product Image</Form.Label>

//                     <Form.Control
//                       type="file"
//                       name="image"
//                       accept="image"
//                       onChange={handleChange}
//                     />

//                     {preview && (
//                       <div className="mt-3">
//                         <Image
//                           src={preview}
//                           rounded
//                           fluid
//                           style={{
//                             maxHeight: "220px",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </div>
//                     )}
//                   </Form.Group>
//                 </Col>

//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Product Name</Form.Label>

//                     <Form.Control
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Category</Form.Label>

//                     <Form.Control
//                       name="category"
//                       value={formData.category}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>SKU</Form.Label>

//                     <Form.Control
//                       name="sku"
//                       value={formData.sku}
//                       onChange={handleChange}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Stock</Form.Label>

//                     <Form.Control
//                       type="number"
//                       name="stock"
//                       value={formData.stock}
//                       onChange={handleChange}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <div className="d-flex gap-2 mt-3">
//                 <Button variant="dark" type="submit">
//                   Save Changes
//                 </Button>

//                 <Button variant="secondary" onClick={() => navigate(-1)}>
//                   Cancel
//                 </Button>
//               </div>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// }

// export default InventoryEdit;
