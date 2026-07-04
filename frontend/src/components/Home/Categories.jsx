import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/category/all");
      setCategories(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase text-secondary fw-semibold">
            Browse Collection
          </span>

          <h2 className="display-5 fw-bold mt-2">Shop By Category</h2>
        </div>

        <Row className="g-4">
          {categories.map((item, index) => (
            <Col lg={3} md={6} sm={6} xs={6} key={index}>
              <Card className="border-0 shadow-sm h-100 overflow-hidden category-card">
                <div className="overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={"http://localhost:5000/uploads/" + item.image}
                    alt={item.name}
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
