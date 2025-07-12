import React from "react";
import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";
import "./SkillCard.css";

const SkillCard = () => {
  return (
    <Container className="my-3">
      <Card className="bg-dark text-white rounded-4 p-3 custom-card">
        <Row className="align-items-center">
          <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
            <div className="profile-photo mx-auto">Profile Photo</div>
          </Col>

          <Col xs={12} md={7}>
            <h5 className="text-white">Devanshee Gupta</h5>

            <div className="mb-2">
              <span className="text-success me-2">Skills Offered ⇒</span>
              <Badge bg="secondary" className="me-2 skill-badge">Django</Badge>
              <Badge bg="secondary" className="skill-badge">Python</Badge>
            </div>

            <div>
              <span className="text-info me-2">Skill wanted ⇒</span>
              <Badge bg="secondary" className="me-2 skill-badge">Node</Badge>
              <Badge bg="secondary" className="skill-badge">Mongo</Badge>
            </div>
          </Col>

          <Col xs={12} md={3} className="text-md-end text-center mt-3 mt-md-0">
            <Button variant="info" className="text-white rounded-3 request-btn">
              Request ➤ 
            </Button>
            <div className="mt-2 rating-text">Rating <strong>5/5</strong></div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SkillCard;
