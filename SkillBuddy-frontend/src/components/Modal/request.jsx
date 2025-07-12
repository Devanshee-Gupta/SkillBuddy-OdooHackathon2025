import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const RequestModal = ({
  show,
  onClose,
  onSubmit,
  skillsOffered = [],
  skillsWanted = []
}) => {
  const [yourSkill, setYourSkill] = useState("");
  const [theirSkill, setTheirSkill] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ yourSkill, theirSkill, message });
    setYourSkill("");
    setTheirSkill("");
    setMessage("");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="bg-white text-dark rounded">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Offered Skill</Form.Label>
            <Form.Select
              value={yourSkill}
              onChange={(e) => setYourSkill(e.target.value)}
              required
            >
              <option value="">Select a skill</option>
              {skillsOffered.map((skill, i) => (
                <option key={i} value={skill}>
                  {skill}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Their Wanted Skill</Form.Label>
            <Form.Select
              value={theirSkill}
              onChange={(e) => setTheirSkill(e.target.value)}
              required
            >
              <option value="">Select a skill</option>
              {skillsWanted.map((skill, i) => (
                <option key={i} value={skill}>
                  {skill}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RequestModal;
