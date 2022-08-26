import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar/NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
       
        <NavLink to="/">
           <img className="navlogo" src="assets/logo.png" width=" 60px" alt="" />
          <h1 className="title">Night Gauger</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/feedback" activeStyle>
            Feedback
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar