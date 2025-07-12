import React, { useState } from 'react';
import { Container, Form, Row, Col, Badge, Button, Image } from 'react-bootstrap';

const BadgeList = ({ items, onRemove }) => (
  <div className="d-flex flex-wrap gap-2">
    {items.map((item, index) => (
      <Badge pill bg="secondary" key={index} className="d-flex align-items-center">
        {item}
        <span onClick={() => onRemove(index)} style={{ cursor: 'pointer', marginLeft: '8px' }}>×</span>
      </Badge>
    ))}
  </div>
);

const ProfileForm = () => {
  const [skillsOffered, setSkillsOffered] = useState(["Graphic Design", "Video Editing", "Photoshop"]);
  const [skillsWanted, setSkillsWanted] = useState(["Python", "JavaScript", "Manager"]);

  const removeSkill = (index, listType) => {
    if (listType === 'offered') {
      setSkillsOffered(prev => prev.filter((_, i) => i !== index));
    } else {
      setSkillsWanted(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <Container fluid className="bg-dark text-white p-4">
      <Form>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              roundedCircle
              width={120}
              height={120}
              alt="Profile"
            />
            <div className="mt-2">
              <Button variant="outline-light" size="sm" className="me-2">Add/Edit</Button>
              <Button variant="outline-danger" size="sm">Remove</Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Skills Offered</Form.Label>
            <BadgeList items={skillsOffered} onRemove={(i) => removeSkill(i, 'offered')} />
          </Col>
          <Col md={6}>
            <Form.Label>Skills Wanted</Form.Label>
            <BadgeList items={skillsWanted} onRemove={(i) => removeSkill(i, 'wanted')} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Availability</Form.Label>
              <Form.Control type="text" placeholder="e.g. weekends" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Profile</Form.Label>
              <Form.Select>
                <option>Public</option>
                <option>Private</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ProfileForm;
