import React, { useState } from "react";
import { Card, Button, Row, Col, Badge, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SkillCard.css";
import RequestModal from "../Modal/request"; 

const SkillCard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleUserRedirect = () => navigate("/user");
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmitRequest = (data) => {
    console.log("Request sent from SkillCard:", data);
  };

  const offeredSkills = ["Django", "Python"];
  const wantedSkills = ["Node", "Mongo"];

  return (
    <Container className="my-4 d-flex justify-content-center">
      <Card className="swap-card shadow-lg border-0 rounded-4 p-4 w-100" style={{ maxWidth: "1200px" }}>
        <Row className="align-items-center">
          <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
            <div className="profile-photo mx-auto" onClick={handleUserRedirect}>
              <Image
                src="https://avatars.githubusercontent.com/u/9919?v=4"
                roundedCircle
                width={100}
                height={100}
                alt="Profile"
                className="profile-avatar"
              />
            </div>
          </Col>

          <Col xs={12} md={7}>
            <h5 className="fw-bold text-dark mb-2">Devanshee Gupta</h5>

            <div className="mb-2">
              <span className="text-success fw-semibold me-2">Skills Offered ⇒</span>
              {offeredSkills.map((skill, idx) => (
                <Badge key={idx} bg="light" text="dark" className="me-2 skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>

            <div>
              <span className="text-primary fw-semibold me-2">Skills Wanted ⇒</span>
              {wantedSkills.map((skill, idx) => (
                <Badge key={idx} bg="light" text="dark" className="me-2 skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>

          <Col xs={12} md={3} className="text-md-end text-center mt-3 mt-md-0">
            <Button variant="info" className="text-white rounded-3 btn btn-primary" onClick={handleOpenModal}>
              Request ➤
            </Button>
            {/* <div className="mt-2 rating-text">
              Rating <strong>5/5</strong>
            </div> */}
          </Col>
        </Row>
      </Card>

      <RequestModal
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitRequest}
        skillsOffered={offeredSkills}
        skillsWanted={wantedSkills}
      />
    </Container>
  );
};

export default SkillCard;
