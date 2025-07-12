import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.email === "admin@gmail.com" && formData.password === "123456") {
      toast.success("Login successful!");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} className="login_page">
          <Card className="p-4 shadow-sm">
            <h3 className="text-dark mb-3">Login</h3>
            <p className="text-muted">Sign in to continue</p>

            <Form onSubmit={handleLogin}>
              <Form.Group controlId="email">
                <Form.Label className="input_heading">Email</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label className="input_heading">Password</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <div className="d-flex justify-content-center btnn-colors p-3 mt-4">
                <Button
                  className="border-0 bg-transparent text-white btnn-colors w-100 text-uppercase"
                  type="submit"
                >
                  Login
                </Button>
              </div>

              <div className="or-line mt-3">
                <span>OR</span>
              </div>

              <div className="d-flex justify-content-center btnn-colors mt-4 mb-3 p-3">
                <a
                  href="/signup"
                  className="btn text-white w-100 text-uppercase"
                >
                  SIGN UP
                </a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Login;
