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
  Envelope,
  Lock,
  Eye,
  EyeSlash,
  BoxArrowInRight,
} from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";

import loginbg from "../assets/images/login-bg.jpg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      
      toast.success("User Login successfully");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <section
      className="min-vh-100 d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${loginbg})`,
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
      ></div>

      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <BoxArrowInRight size={50} className="mb-3 text-dark" />

                  <h2 className="fw-bold">Welcome Back</h2>

                  <p className="text-muted">Sign in to continue shopping</p>
                </div>

                <Form onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
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
                    Login
                  </Button>

                  <div className="text-center mt-4">
                    <span className="text-muted">Don't have an account? </span>

                    <Link
                      to="/register"
                      className="text-decoration-none fw-semibold"
                    >
                      Register
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

export default Login;
