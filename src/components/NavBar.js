import React from 'react';
import { Navbar, Nav}  from 'react-bootstrap/';

const NavBar = () => (
    <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
        <Nav.Link href="/todo">To Do List</Nav.Link>
        <Nav.Link href="/calendar">Calendar</Nav.Link>
    </Nav>
</Navbar>
)

export default NavBar;
