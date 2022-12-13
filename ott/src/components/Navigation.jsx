import React from 'react'

import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' className='nav_top'>
      <Container fluid>
        <Navbar.Brand href="#">
          <img width={140} src="/logo.png" alt="lgoo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='nav_item'>Home</Link>
            <Link to='#' className='nav_item'>New</Link>
            <Link to='/movies' className='nav_item'>Movies</Link>
            <Link to='#' className='nav_item'>My List</Link>
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