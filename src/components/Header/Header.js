import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        };
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand as={Link} to='/home'>Trip Advisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
            </Nav>
            <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            
            
            {
                user ? <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                :<Nav.Link eventKey={2} as={Link} to='/login'>Login</Nav.Link>}

            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;