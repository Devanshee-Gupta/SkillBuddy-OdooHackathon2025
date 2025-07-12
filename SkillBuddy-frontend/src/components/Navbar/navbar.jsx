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
    navigate("/");
  };

  const handleProfleRedirect = () => {
    navigate("/my-profile")
  }

  return (
    <Navbar expand="lg" className="theme-navbar" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white fw-bold">Skill Buddy</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center gap-3">
          {isProfilePage && (
            <>
              <Button className="btnn-colors btn-sm" onClick={handleSave}>Save</Button>
              <Button className="btn-danger btn-sm" onClick={handleDiscard}>Discard</Button>
            </>
          )}
          <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
          <Image
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            roundedCircle
            width={40}
            height={40}
            alt="Profile"
            onClick={handleProfleRedirect}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
