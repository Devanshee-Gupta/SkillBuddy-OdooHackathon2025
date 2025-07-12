import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import RequestModal from "../../components/Modal/request";

const UserProfile = () => {
  const [showRequestModal, setShowRequestModal] = useState(false);

  const handleOpen = () => setShowRequestModal(true);
  const handleClose = () => setShowRequestModal(false);

  const handleSubmitRequest = (data) => {
    console.log("Request Sent:", data);
  };

  const offeredSkills = ["JavaScript", "React"];
  const wantedSkills = ["Node.js", "MongoDB"];

  return (
    <div className="py-5 user-profile-container">
      <Container className="d-flex justify-content-center">
        <Card className="p-4 shadow w-100" style={{ maxWidth: "1000px" }}>
          <Row className="align-items-center justify-content-between">
            <Col md={8}>
              <div className="d-flex justify-content-start">
                <Button variant="outline-info" className="mb-3" onClick={handleOpen}>
                  Send Request
                </Button>
              </div>
              <h3 className="fw-bold">Marc Demo</h3>
              <div className="mt-3">
                <p className="mb-1 fw-bold">Skills Offered</p>
                <ul>
                  {offeredSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <p className="mb-1 fw-bold">Skills Wanted</p>
                <ul>
                  {wantedSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 fw-bold">Rating and Feedback</div>
            </Col>

            <Col md={4} className="text-center">
              <Image
                src="https://avatars.githubusercontent.com/u/9919?v=4"
                roundedCircle
                alt="Profile"
                width={150}
                height={150}
                className="border"
              />
              <div className="mt-2">Profile Photo</div>
            </Col>
          </Row>
        </Card>
      </Container>

      <RequestModal
        show={showRequestModal}
        onClose={handleClose}
        onSubmit={handleSubmitRequest}
        skillsOffered={offeredSkills}
        skillsWanted={wantedSkills}
      />
    </div>
  );
};

export default UserProfile;
