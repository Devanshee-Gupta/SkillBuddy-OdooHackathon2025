import React, { useState } from "react";
import {
  Button,
  Form,
  Col,
  Row,
  Container,
  Dropdown,
} from "react-bootstrap";
import "./register.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    otp: "",
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [showOtp, setShowOtp] = useState(false);

  const handleCountrySelect = (code) => setSelectedCountryCode(code);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendOtp = (e) => {
    e.preventDefault();
    setShowOtp(true);
    toast.success("OTP sent successfully (simulated)");
  };

  const verifyOtp = () => {
    if (formData.otp.trim() !== "") {
      toast.success("OTP verified successfully (simulated signup)");
    } else {
      toast.error("Please enter OTP");
    }
  };

  const resendOtp = () => {
    toast.success("OTP resent successfully (simulated)");
  };

  return (
    <Container className="col-md-6 mt-3">
      <div className="col-10 mx-auto cardss border p-3">
        <h3 className="text-dark my-0 mb-3">Sign up With Us</h3>
        <p className="text-50">Sign up to continue</p>

        <Form onSubmit={sendOtp}>
          {!showOtp && (
            <>
              <Form.Group controlId="fullName">
                <Form.Label className="text-dark mt-3 input_heading">Full Name</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="text"
                  placeholder="Insert Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="phoneNumber">
                <Form.Label className="text-dark mt-2 input_heading">Phone</Form.Label>
                <Row className="align-items-center">
                  <Col xs={4}>
                    <Dropdown>
                      <Dropdown.Toggle className="bg-transparent border-0 input_heading inputes-box">
                        {selectedCountryCode}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleCountrySelect("+1")}>USA (+1)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCountrySelect("+44")}>UK (+44)</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCountrySelect("+91")}>India (+91)</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col className="mt-3">
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label className="text-dark mt-3 input_heading">Email</Form.Label>
                <Form.Control
                  className="border-0 inputes-box"
                  type="email"
                  placeholder="Insert Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label className="text-dark mt-3 p-2 input_heading">Address</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    className="p-3 address_input"
                    type="text"
                    placeholder="Insert Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <span className="locate-me">
                    <img src="https://emartweb.siswebapp.com/img/locatleme-icon.png" alt="locate me" />
                    Locate Me
                  </span>
                </div>
              </Form.Group>
            </>
          )}

          {showOtp && (
            <Form.Group controlId="otp">
              <Form.Label className="text-dark mt-3 p-2 input_heading">OTP</Form.Label>
              <Form.Control
                className="border-0 inputes-box"
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
              />
            </Form.Group>
          )}

          {!showOtp ? (
            <Button className="w-100 btn-lg p-3 send_Otp_button mt-3" type="submit">
              Send OTP
            </Button>
          ) : (
            <>
              <Button
                className="w-100 btn-lg p-3 send_Otp_button mt-2"
                type="button"
                onClick={verifyOtp}
              >
                Verify OTP
              </Button>
              <Button
                className="w-100 btn-lg p-3 send_Otp_button mt-2"
                type="button"
                onClick={resendOtp}
              >
                Resend
              </Button>
            </>
          )}

          <div className="new-acc d-flex align-items-center justify-content-center mt-4 mb-2">
            <a href="/login">
              <p className="text-center m-0">Already an account? SIGN IN</p>
            </a>
          </div>
          <div className="new-acc d-flex align-items-center justify-content-center mt-4 mb-2">
            <a href="/verify-otp">
              <p className="text-center m-0">Verify Otp</p>
            </a>
          </div>
        </Form>
      </div>

      <ToastContainer />
    </Container>
  );
};

export default SignUpForm;
