import React from 'react';
import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProfilePage = location.pathname === "/my-profile";

  const handleSave = () => {
    console.log("Save");
  };

  const handleDiscard = () => {
    console.log("Discard");
    navigate("/home");
  };

  const handleSwapRequest = () => {
    navigate("/my-requests");
  };

  const handleProfileRedirect = () => {
    navigate("/my-profile");
  };

  return (
    <Navbar expand="lg" className="theme-navbar shadow-sm py-3" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand href="/home" className="fw-bold fs-4 text-dark">Skill Buddy</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center gap-3">
          {isProfilePage && (
            <>
              <Button className="btnn-colors btn-sm" onClick={handleSave}>Save</Button>
              <Button variant="danger" size="sm" onClick={handleDiscard}>Discard</Button>
            </>
          )}
          <Button variant="outline-secondary" size="sm" onClick={handleSwapRequest}>Requests</Button>
          <Nav.Link href="/home" className="nav-link-custom">Home</Nav.Link>
          <Image
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            roundedCircle
            width={40}
            height={40}
            alt="Profile"
            className="profile-avatar"
            onClick={handleProfileRedirect}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
