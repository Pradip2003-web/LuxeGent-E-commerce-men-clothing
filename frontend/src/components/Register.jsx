import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

import {
  Person,
  Envelope,
  Lock,
  Eye,
  EyeSlash,
  PersonPlus,
} from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";

import regbg from "../assets/images/register-bg.jpg";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/user/register", {
        name,
        email,
        password,
      });
      toast.success("User registered successfully!");
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <section
      className="min-vh-100 d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${regbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <PersonPlus size={50} className="mb-3 text-dark" />

                  <h2 className="fw-bold">Create Account</h2>

                  <p className="text-muted">Join us and start shopping today</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <Person />
                      </InputGroup.Text>

                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <Envelope />
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>

                    <InputGroup>
                      <InputGroup.Text>
                        <Lock />
                      </InputGroup.Text>

                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />

                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeSlash /> : <Eye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="dark"
                    className="w-100 py-2 rounded-3"
                  >
                    Register
                  </Button>

                  <div className="text-center mt-4">
                    <span className="text-muted">
                      Already have an account?{" "}
                    </span>

                    <Link
                      to="/login"
                      className="text-decoration-none fw-semibold"
                    >
                      Login
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Register;
