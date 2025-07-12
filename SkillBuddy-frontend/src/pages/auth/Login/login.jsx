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
import { loginUser } from "../../../services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
         const res = await loginUser(formData);
         toast.success("Logged in successfully!");
         console.log(res.data);
       } catch (err) {
         toast.error(err.response?.data?.message || "Login failed");
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
              <Form.Group controlId="Email">
                <Form.Label className="input_heading">Email</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="Email"
                  placeholder="Enter your Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="Password" className="mt-3">
                <Form.Label className="input_heading">Password</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="Password"
                  placeholder="Enter your Password"
                  name="Password"
                  value={formData.Password}
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
                <span className="d-flex justify-content-center">OR</span>
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
