
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
  

const Navbar1 = (args) => {
   
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

   /* return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        CS391
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i> Login
                            </NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark">
                                <i className="fa fa-user-plus me-1"></i> Register
                            </NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark">
                                <i className="fa fa-shopping-cart me-2"></i> Cart({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>



    );*/
    return (
        <div>
          <Navbar expand="md" {...args}>
            <NavbarBrand href="/">CS 391</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Products</NavLink>
                </NavItem>
                
 
              </Nav>
              <div>
              <Button href="/login">Login</Button>
              {' '}
              <Button href="/register">Register</Button>
              {' '}
              <Button href="/cart">Cart</Button>
              </div>
            </Collapse>
          </Navbar>
        </div>
      );
}

export default Navbar1;
