import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from "react-bootstrap";

import {
  BoxSeam,
  BagCheck,
  People,
  GraphUpArrow,
  EnvelopeFill,
  LockFill,
  ShieldLockFill,
  ArrowRight,
} from "react-bootstrap-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const features = [
  {
    icon: <BoxSeam size={30} />,
    title: "Manage Products",
    description: "Add, edit and organize inventory.",
  },
  {
    icon: <BagCheck size={30} />,
    title: "Orders",
    description: "Track customer purchases.",
  },
  {
    icon: <People size={30} />,
    title: "Customers",
    description: "View and manage customer data.",
  },
  {
    icon: <GraphUpArrow size={30} />,
    title: "Analytics",
    description: "Monitor sales and performance.",
  },
];

function AdminLogin({ setAuthenticated }) {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      if (res.data) {
        localStorage.setItem('userToken',res.data.token);
        toast.success("Admin login successfully");
        if (setAuthenticated) setAuthenticated(true);
        navigate("/admin/dashboard");
        return;
      }
    } catch (error) {
      toast.error("Login failed");
    }

  
  };

  return (
    <Container fluid className="min-vh-100 p-0">
      <Row className="g-0 min-vh-100">
        <Col
          lg={7}
          className="d-none d-lg-flex bg-dark text-white align-items-center"
        >
          <div className="px-5 w-100">
            <Badge bg="warning" text="dark" className="px-3 py-2 mb-4">
              ADMIN PANEL
            </Badge>

            <h1 className="display-3 fw-bold mb-3">MEN'S FASHION</h1>

            <h3 className="text-light mb-4">Premium Admin Portal</h3>

            <p className="text-secondary fs-5 mb-5">
              Manage your fashion business from one powerful dashboard.
            </p>

            <Row className="g-4">
              {features.map((feature, index) => (
                <Col md={6} key={index}>
                  <div className="d-flex">
                    <div className="text-warning me-3">{feature.icon}</div>

                    <div>
                      <h5>{feature.title}</h5>

                      <p className="text-secondary mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>

        <Col
          lg={5}
          xs={12}
          className="bg-light d-flex align-items-center justify-content-center p-4"
        >
          <Card
            className="border-0 shadow-lg rounded-4"
            style={{ width: "100%", maxWidth: "450px" }}
          >
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <div
                  className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <ShieldLockFill size={30} />
                </div>

                <h2 className="fw-bold">Welcome Back</h2>

                <p className="text-muted">Sign in to your admin account</p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>

                  <div className="position-relative">
                    <EnvelopeFill className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />

                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={loginData.email}
                      onChange={handleChange}
                      className="ps-5 py-3"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Password</Form.Label>

                  <div className="position-relative">
                    <LockFill className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />

                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={loginData.password}
                      onChange={handleChange}
                      className="ps-5 py-3"
                    />
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    name="remember"
                    checked={loginData.remember}
                    onChange={handleChange}
                  />

                  <Link
                    to="/forgot-password"
                    className="text-decoration-none fw-semibold"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  className="w-100"
                >
                  Login
                  <ArrowRight className="ms-2" />
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default AdminLogin;
