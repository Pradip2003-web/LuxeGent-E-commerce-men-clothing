import { useState } from "react";
import axios from "axios";

import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";

import { EnvelopeFill, TelephoneFill, GeoAltFill } from "react-bootstrap-icons";

const faqs = [
  {
    question: "What information do you collect?",
    answer:
      "We may collect your name, email address, phone number, shipping and billing addresses, order history, payment-related information processed through secure providers, and device or browser information to improve your shopping experience.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. Payments are processed through trusted payment gateways using encrypted connections. We do not store your credit or debit card details on our servers.",
  },
  {
    question: "How long do you keep my data?",
    answer:
      "We retain information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and protect our business interests.",
  },
];

const contactData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(contactData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact/create");

      alert(res.data.message);

      setFormData(contactData);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-5 bg-light border-bottom">
        <Container>
          <div className="text-center">
            <span className="text-uppercase text-secondary fw-semibold">
              Contact Us
            </span>

            <h1 className="display-4 fw-bold mt-2">
              We'd Love to Hear From You
            </h1>

            <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
              Questions, feedback, or partnership inquiries? Our team is ready
              to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={7}>
              <Card className="border-0 shadow-sm rounded-4 h-100">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="fw-bold mb-4">Send a Message</h3>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="dark"
                      size="lg"
                      className="px-5 rounded-3"
                    >Submit</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">Frequently Asked Questions</h4>

                  <Accordion defaultActiveKey="0">
                    {faqs.map((faq, index) => (
                      <Accordion.Item
                        key={index}
                        eventKey={index.toString()}
                        className="mb-3 border rounded-4 shadow-sm overflow-hidden"
                      >
                        <Accordion.Header>
                          <span className="fw-semibold">{faq.question}</span>
                        </Accordion.Header>

                        <Accordion.Body className="text-muted">
                          {faq.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>

                  <Link to="/privacy-faq">
                    <Button variant="outline-dark" className="mt-3 rounded-3">
                      View All FAQs
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
