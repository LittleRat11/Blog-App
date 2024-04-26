import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
   
     <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
          <Nav className="mx-auto">
          <NavLink to='/' className={({isActive}) => isActive ? 'me-3 text-decoration-none text-primary':'me-3 text-decoration-none text-light'}>
            Home
          </NavLink>
           <NavLink to='/addBlogs' className={({isActive}) => isActive ? ' text-decoration-none text-primary':'text-decoration-none text-light'}>
            Add Blogs
           </NavLink>
           
          </Nav>
        </Container>
      </Navbar>
   
  )
}

export default Header
