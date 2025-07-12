import React, { useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Badge,
  Button,
  Image,
  Card,
  InputGroup
} from 'react-bootstrap';
import './profile.css'; 

const BadgeList = ({ items, onRemove }) => (
  <div className="d-flex flex-wrap gap-2 mt-2">
    {items.map((item, index) => (
      <Badge
        pill
        bg="secondary"
        key={index}
        className="d-flex align-items-center"
      >
        {item}
        <span
          onClick={() => onRemove(index)}
          style={{ cursor: 'pointer', marginLeft: '8px' }}
        >
          ×
        </span>
      </Badge>
    ))}
  </div>
);

const ProfileForm = () => {
  const [skillsOffered, setSkillsOffered] = useState(["Graphic Design", "Video Editing", "Photoshop"]);
  const [skillsWanted, setSkillsWanted] = useState(["Python", "JavaScript", "Manager"]);

  const [newSkillOffered, setNewSkillOffered] = useState('');
  const [newSkillWanted, setNewSkillWanted] = useState('');

  const addSkill = (type) => {
    if (type === 'offered' && newSkillOffered.trim()) {
      setSkillsOffered(prev => [...prev, newSkillOffered.trim()]);
      setNewSkillOffered('');
    } else if (type === 'wanted' && newSkillWanted.trim()) {
      setSkillsWanted(prev => [...prev, newSkillWanted.trim()]);
      setNewSkillWanted('');
    }
  };

  const removeSkill = (index, listType) => {
    if (listType === 'offered') {
      setSkillsOffered(prev => prev.filter((_, i) => i !== index));
    } else {
      setSkillsWanted(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="profile-form-container py-4">
      <Container className="h-100 d-flex align-items-start justify-content-center">
        <Card className="p-4 shadow w-100" style={{ maxWidth: '1000px' }}>
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
                  <Button variant="outline-dark" size="sm" className="me-2">Add/Edit</Button>
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

            <Row className="mb-4">
              <Col md={6}>
                <Form.Label>Skills Offered</Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Add a skill"
                    value={newSkillOffered}
                    onChange={(e) => setNewSkillOffered(e.target.value)}
                  />
                  <Button variant="success" onClick={() => addSkill('offered')}>Add</Button>
                </InputGroup>
                <BadgeList items={skillsOffered} onRemove={(i) => removeSkill(i, 'offered')} />
              </Col>
              <Col md={6}>
                <Form.Label>Skills Wanted</Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Add a skill"
                    value={newSkillWanted}
                    onChange={(e) => setNewSkillWanted(e.target.value)}
                  />
                  <Button variant="primary" onClick={() => addSkill('wanted')}>Add</Button>
                </InputGroup>
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
        </Card>
      </Container>
    </div>
  );
};

export default ProfileForm;
