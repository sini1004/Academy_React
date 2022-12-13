import React from 'react'

import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'>Home</Link>
            <Link to='#'>New</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='#'>My List</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{background:'#fe1f5a'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation