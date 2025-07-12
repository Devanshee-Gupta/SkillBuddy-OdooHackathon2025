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
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Address: "",
    ProfileType: "public",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      toast.success(res.data?.message || "Registered successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 300);
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
                  <Form.Group controlId="FirstName">
                    <Form.Label className="input_heading">First Name</Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Enter your first name"
                      id="FirstName"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="LastName">
                    <Form.Label className="input_heading">Last Name</Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Enter your last name"
                      id="LastName"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="Email" className="mt-3">
                <Form.Label className="input_heading">Email</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="email"
                  placeholder="Enter your email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="Password" className="mt-3">
                <Form.Label className="input_heading">Password</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="password"
                  placeholder="Enter your password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="Address" className="mt-3">
                <Form.Label className="input_heading">Address</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="text"
                  placeholder="Enter your address"
                  name="Address"
                  value={formData.Address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="ProfileType" className="mt-3">
                <Form.Label className="input_heading">Profile Type</Form.Label>
                <Form.Select
                  className="border-0 inputes-box"
                  name="ProfileType"
                  value={formData.ProfileType}
                  onChange={handleInputChange}
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex justify-content-center btn-colors mt-1 mb-1 p-2">
                <Button
                  className="border-0 bg-transparent text-white btn-colors w-100 text-uppercase"
                  type="submit"
                >
                  Register
                </Button>
              </div>

              <div className="or-line mt-3">
                <span className="d-flex justify-content-center">OR (Already Have account)</span>
              </div>

              <div className="d-flex justify-content-center btn-colors mt-2 mb-1 p-2">
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
