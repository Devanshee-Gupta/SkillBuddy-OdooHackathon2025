import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "./register.css";
import { registerUser } from "../../../services/api";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    profileType: "Public",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      toast.success("Registered successfully!");
      console.log(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} className="login_page">
          <Card className="p-4 shadow-sm">
            <h3 className="text-dark mb-3">Sign Up</h3>
            <p className="text-muted">Create your account</p>

            <Form onSubmit={handleRegister}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label className="input_heading">First Name</Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label className="input_heading">Last Name</Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="email" className="mt-3">
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

              <Form.Group controlId="address" className="mt-3">
                <Form.Label className="input_heading">Address</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="profileType" className="mt-3">
                <Form.Label className="input_heading">Profile Type</Form.Label>
                <Form.Select
                  className="border-0 inputes-box"
                  name="profileType"
                  value={formData.profileType}
                  onChange={handleInputChange}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex justify-content-center btnn-colors p-3 mt-4">
                <Button
                  className="border-0 bg-transparent text-white btnn-colors w-100 text-uppercase"
                  type="submit"
                >
                  Register
                </Button>
              </div>

              <div className="or-line mt-3">
                <span className="d-flex justify-content-center">OR (Already Have account)</span>
              </div>

              <div className="d-flex justify-content-center btnn-colors mt-4 mb-3 p-3">
                <a href="/login" className="btn text-white w-100 text-uppercase">
                  LOGIN
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

export default SignUpForm;
