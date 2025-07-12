import React from 'react';
import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProfilePage = location.pathname === "/my-profile";

  const sessionKey = localStorage.getItem("session_key");
  const isLoggedIn = !!sessionKey;

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

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="theme-navbar shadow-sm py-3" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand href="/home" className="fw-bold fs-4 text-dark">
          Skill Buddy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {isProfilePage && (
              <>
                <Button className="btnn-colors btn-sm" onClick={handleSave}>Save</Button>
                <Button variant="danger" size="sm" onClick={handleDiscard}>Discard</Button>
              </>
            )}

            <Nav.Link href="/home" className="nav-link-custom">Home</Nav.Link>

            {isLoggedIn ? (
              <>
                <Button variant="outline-secondary" size="sm" onClick={handleSwapRequest}>
                  Requests
                </Button>
                <div className="d-inline-block" onClick={handleProfileRedirect} role="button">
                  <Image
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    roundedCircle
                    width={40}
                    height={40}
                    alt="Profile"
                    className="profile-avatar"
                  />
                </div>
              </>
            ) : (
              <Button variant="outline-primary" size="sm" onClick={handleLoginRedirect}>
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
