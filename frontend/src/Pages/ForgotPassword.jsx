import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Form, Button } from 'react-bootstrap';

import { EnvelopeFill, ArrowLeft } from 'react-bootstrap-icons';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Password reset link sent to your email');
  };

  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Card
        className="border-0 shadow rounded-4"
        style={{ maxWidth: '450px', width: '100%' }}
      >
        <Card.Body className="p-5">
          <h2 className="fw-bold text-center mb-3">Forgot Password</h2>

          <p className="text-muted text-center mb-4">
            Enter your email address and we'll send you a password reset link.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>

              <div className="position-relative">
                <EnvelopeFill className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />

                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ps-5 py-3"
                  required
                />
              </div>
            </Form.Group>

            <Button type="submit" variant="dark" className="w-100 py-3">
              Send Reset Link
            </Button>
          </Form>

          <div className="text-center mt-4">
            <Link to="/adminlogin" className="text-decoration-none">
              <ArrowLeft className="me-2" />
              Back to Login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
