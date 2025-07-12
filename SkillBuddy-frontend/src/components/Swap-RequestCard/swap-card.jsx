import React, { useState } from "react";
import { Card, Button, Row, Col, Badge, Container, Image } from "react-bootstrap";
import "./swap-card.css";

const SwapCard = ({
  name = "Marc Demo",
  offeredSkills = [],
  wantedSkills = [],
  rating = 4,
  initialStatus = "Pending",
  imageUrl = ""
}) => {
  const [status, setStatus] = useState(initialStatus);

  const handleAccept = () => setStatus("Accepted");
  const handleReject = () => setStatus("Rejected");

  const getStatusClass = () => {
    if (status === "Accepted") return "text-success";
    if (status === "Rejected") return "text-danger";
    return "text-secondary";
  };

  return (
    <Container className="my-3">
      <Card className="swap-card shadow-lg border-0 rounded-4 p-4">
        <Row className="align-items-center">
          <Col md={2} className="text-center mb-3 mb-md-0">
            <div className="profile-photo-container">
              <Image
                                     src="https://avatars.githubusercontent.com/u/9919?v=4"
                                     roundedCircle
                                     width={100}
                                     height={100}
                                     alt="Profile"
                                     className="profile-avatar"
                                   />
              <div className="mt-2 rating-text">Rating <strong>{rating}/5</strong></div>
            </div>
          </Col>

          <Col md={7}>
            <h5 className="text-dark fw-bold">{name}</h5>

            <div className="my-2">
              <span className="text-success fw-semibold">Skills Offered ⇒ </span>
              {(offeredSkills || []).map((skill, idx) => (
                <Badge key={idx} bg="light" className="me-2 skill-badge text-dark border">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="my-2">
              <span className="text-primary fw-semibold">Skill Wanted ⇒ </span>
              {(wantedSkills || []).map((skill, idx) => (
                <Badge key={idx} bg="light" className="me-2 skill-badge text-dark border">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>

          <Col md={3} className="text-center text-md-end mt-3 mt-md-0">
            <div className="fw-bold text-dark">Status</div>
            <div className={`fw-bold fs-5 mb-2 ${getStatusClass()}`}>{status}</div>

            {status === "Pending" && (
              <>
                <Button variant="success" size="sm" className="me-2 rounded-3" onClick={handleAccept}>
                  Accept
                </Button>
                <Button variant="danger" size="sm" className="rounded-3" onClick={handleReject}>
                  Reject
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SwapCard;
