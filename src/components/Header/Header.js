import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        };
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand className='brand-name' as={Link} to='/home'>Trip Advisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <Nav>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            
            
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