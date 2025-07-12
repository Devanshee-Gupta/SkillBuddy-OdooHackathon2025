import React from 'react';
import { Card, Row, Col, Badge, Button, Container, Image } from 'react-bootstrap';
import './swap-request.css';

const SentRequestCard = ({
  recipient = "Marc Demo",
  yourSkill = "React",
  theirSkill = "Node.js",
  status = "Pending",
  imageUrl = "https://avatars.githubusercontent.com/u/9919?v=4"
}) => {
  return (
    <Container className="my-3">
      <Card className="sent-card shadow-lg border-0 rounded-4 p-4 w-100">
        <Row className="align-items-center">
          <Col md={2} className="text-center mb-3 mb-md-0">
            <Image
              src={imageUrl}
              roundedCircle
              width={100}
              height={100}
              alt="Recipient"
              className="border"
            />
          </Col>

          <Col md={7}>
            <h5 className="text-dark fw-bold">{recipient}</h5>

            <div className="my-2">
              <span className="text-muted me-2">Your Skill:</span>
              <Badge bg="light" text="dark" className="me-2 skill-badge">{yourSkill}</Badge>
            </div>

            <div className="my-2">
              <span className="text-muted me-2">Requested Skill:</span>
              <Badge bg="light" text="dark" className="me-2 skill-badge">{theirSkill}</Badge>
            </div>
          </Col>

          <Col md={3} className="text-center text-md-end mt-3 mt-md-0">
            <div className="fw-bold">Status</div>
            <div className={`fs-5 fw-bold text-${status === "Accepted" ? "success" : status === "Rejected" ? "danger" : "secondary"}`}>
              {status}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SentRequestCard;
