
import {GetCartSize} from './cartHandler';
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Badge
} from 'reactstrap';


const Navbar1 = (args) => {
    const { cartSize } = GetCartSize();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
   
     
    return (
        <div>
            <Navbar expand="md" {...args}>
                <NavbarBrand href="/">AllInOne</NavbarBrand>
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
                        <Button
                            href="/cart" color="primary" outline> Cart{' '}
                            <Badge color="secondary" pill>{cartSize}</Badge>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar1;
